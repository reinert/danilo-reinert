import React from 'react'
import { Link } from 'gatsby'

import {
  firstPost,
  postCard,
  postBody,
  postDate,
} from '../assets/css/posts.module.css'

// eslint-disable-next-line react/prop-types
const Post = ({ index }) => {
  return (
    <div className={`${postCard} ${index === 0 ? firstPost : ''}`}>
      <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

      <div className={postBody}>
        <p className={postDate}>
          <span>Java</span>
          &nbsp;&bull;&nbsp;
          <span>November 15, 2022</span>
        </p>

        <Link to="/">
          <h3>Post tile comes here</h3>
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          elementum, tortor nec vulputate molestie, leo enim tempus dolor, sit
          amet pretium nisl lacus a orci.
        </p>
      </div>
    </div>
  )
}

export default Post