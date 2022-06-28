import React, { Fragment } from 'react'
import styles from './Card.module.css'
const Card = (props) => {
  return (
    <Fragment>
      <div className={styles.cardContainer}>
        <ul>
          <li>
            <h2>ID: {props.postData.id}</h2>
            <h3>TITLE: {props.postData.title}</h3>
            <h4>BODY:{props.postData.body}</h4>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Card
