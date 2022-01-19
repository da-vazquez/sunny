import React, { useState, useRef, useEffect } from "react";
import './community.css' 
import cn from "classnames";
import { useDispatch } from 'react-redux'
import { newPost } from '../../state/actions/CommunityActions';
import Spinner from 'react-bootstrap/Spinner'
import useDynamicHeightField from "../useDynamicHeightField";
import axiosWithAuth from "../../utils/axiosWithAuth";
import PostsCard from "../Posts/Posts";
import { useAuth0 } from "@auth0/auth0-react";

const INITIAL_HEIGHT = 50;


export default function CommentBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("Submit");
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, user, getIdTokenClaims } = useAuth0();

  if (!isAuthenticated) {
    console.log("user not authenticated to post in community")
  
    } else {
      getIdTokenClaims().then(res => {
        localStorage.setItem("idToken", res.__raw)
        localStorage.setItem("isAuthenticated", isAuthenticated)
      })
    }
  

  //redux initalization
  const dispatch = useDispatch()
  
  //stying the textarea dynamically
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, body);

  //expands comment conainer when clicked
  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setBody(e.target.value);
    setStatus("Submit")
  };

  const onClose = () => {
    setBody("");
    setIsExpanded(false);
  };

  const onSubmit = async(e) => {
    e.preventDefault()
    if (isAuthenticated) {
      await dispatch(newPost(body, user.name))
      setStatus(<Spinner animation="border" variant="primary" />)
      setStatus("Post added!")
      setBody("")
    
    } else {
      setStatus("Please login first")
      setBody("")
    }
  };

  useEffect(() => {
    axiosWithAuth().get('/api/posts')
      .then(res => {
        setPosts(res.data)
      }, 5000 )
      .catch(err => {
        console.log(err, "couldn't load posts")
      })
  }, [status])

  return (
    <>
    <div className="container" style={{marginTop: "5%"}}>
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: body.length > 0,
        })}
        style={{minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT}}>
        <div className="header">
        {user ? 
          <div className="user">
            <img className='comment-img' src={user.picture} alt="User avatar"/>
            <span>{user.nickname}</span>
          </div>
          : null}
        </div>
          <label htmlFor="comment">'What are your thoughts?'</label>
          <textarea
            ref={textRef}
            onClick={onExpand}
            onFocus={onExpand}
            onChange={onChange}
            className="comment-field"
            placeholder="What are your hot takes?"
            value={body}
            name="body"
            id="body"/>
          <div className="actions">
            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={body.length < 1}>{status}</button>
          </div>
        </form>
      </div>

    {/* maps all posts currently in DB */}
      <div className='all-posts'>
        {posts.map(res => (
          <div className='all-posts-cards'>
          <PostsCard
            key={res.post_id}
            username= {res.username}
            body= {res.body}
            number_likes= {res.number_likes}
            number_dislikes= {res.number_dislikes}/>
          </div>
      ))}
    </div>
  </>
  );
}