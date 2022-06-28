import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import styles from './Posts.module.css'
const Posts = (props) => {
  const [postID, setPostID] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
    props.makeAPICall(postID)
  }

  const handleChange = (event) => {
    setPostID(event.target.value)
  }

  return (
    <Fragment>
      <div className={styles.formContainer}>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='postID'>Search a post by its ID!</label>
          <br />
          <input
            id='postID'
            value={postID}
            type='number'
            placeholder='post ID'
            onChange={handleChange}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
    </Fragment>
  )
}

export default Posts
