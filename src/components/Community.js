import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from 'react-redux'
import { newPost } from '../actions/UserActions';
import Spinner from 'react-bootstrap/Spinner'
import useDynamicHeightField from "./useDynamicHeightField";
import "../App.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import PostsCard from "./Posts";


const INITIAL_HEIGHT = 50;


export default function CommentBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("Submit");
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  const userID = useSelector(state => state.login.user_id)
  const username = useSelector(state => state.login.username)
  
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, body);

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
    await dispatch(newPost(body, userID, username))
    setStatus(<Spinner animation="border" variant="primary" />)
    setStatus("Post added!")
    setBody("")
  };

  useEffect(() => {
    axiosWithAuth().get('/api/posts')
      .then(res => {
        setPosts(res.data)
      }, 5000 )
      .catch(err => {
        console.log(err, "couldn't load posts")
      })
  }, [])

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
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <div className="header">
          <div className="user">
            <img className='comment-img'
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
            />
            <span>{username}</span>
          </div>
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
          id="body"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          
          <button type="submit" disabled={body.length < 1}>
            {status}
          </button>
        </div>
      </form>
    </div>
    
    <div className='all-posts'>
      {posts.map(res => (
        <PostsCard
          key={res.post_id}
          username= {res.username}
          body= {res.body}
          number_likes= {res.number_likes}
          />
      ))
      }
    </div>
    </>
  );
}