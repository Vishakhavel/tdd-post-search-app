import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
const Posts = (props) => {
  const [postID, setPostID] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    console.log('post id:', postID)
    props.makeAPICall(postID)
    console.log('props.data=', props.data)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setPostID(event.target.value)
  }

  return (
    <Fragment>
      {/* <h1>Posts!</h1> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='postID'>Enter Post ID:</label>
        <input
          id='postID'
          value={postID}
          type='number'
          placeholder='post ID'
          onChange={handleChange}
        />
        <button type='submit'>submit</button>
      </form>

      {/* <div>
        <ul>
          {props.data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <h4>{post.body}</h4>
            </li>
          ))}
        </ul>
      </div> */}
    </Fragment>
  )
}

export default Posts
