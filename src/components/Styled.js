import styled from 'styled-components'

export const PostsContainer = styled.div`
  width: 600px;
  height: 200px;
  border: 3px solid black;
  padding: 20px;
  border-radius: 15px;  
  `
export const CustomButton = styled.button`
  display: inline-block;
  font-size: 0.8em;
  background-color: #ed4933;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600; 
  padding: 0 2.75em;   
  letter-spacing: 0.225em; 
  font-size-adjust: 0.8em; 
  text-transform: uppercase;
  width: 78%;
  margin: 0 auto;
  `

export const CustomHeader = styled.h2`
  margin-top: 1em;
  margin-bottom: 1.5em;
  color: white;
  font-family: inter;
  background-color: none;
  `
  
export const CustomH3 = styled.h3`
  color: rgb(123, 8, 238);
  margin-left: 1em; 
  font-family: sans-serif; 
  ::after {
    content: "🌞";
    margin-left: 5px;
    font-size: 1.25em;
    color: yellow;
  }
  font-size: 1.5em;
  font-weight: 1000;
  @media screen and (max-width: 600px) {
    color: #ff0000;
    margin: 0 auto;
  }
  ` 

export const UserInfo = styled.h5`
  color: white;
  margin-right: 1.25em; 
  font-family: sans-serif; 
  letter-spacing: 0.225em; 
  font-size: 1em;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  `     