import React from 'react'
import styles from './Blog.module.scss'

const Blog = ({ image, title, date, text }) => {
  return (
    <div className={styles.post}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className={styles.date}>{date}</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.line}></div>
      <p className={styles.text}>
        {text} <a href="#">MORE</a>
      </p>
    </div>
  )
}

export default Blog
