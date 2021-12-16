import styles from './BlogPosts.module.scss'
import React from 'react'
import Blog from './Blog'

const BlogPosts = () => {
  return (
    <section className={styles.section} id="blogposts">
      <div className={styles.content}>
        <p className={styles.subtitle}>latest blog posts</p>
        <h1 className={styles.title}>Interesting</h1>
        <div className={styles.posts}>
          <Blog
            image="../images/img6.jpg"
            date="september 18, 2021"
            title="Ancient and modern Statues"
            text="A statue is a free-standing sculpture in which the realistic, full-length figures of persons or animals are carved or cast in a durable material such as wood"
          />
          <Blog
            image="../images/img2.jpg"
            date="september 16, 2022"
            title="Big Ideas behind Small Things "
            text="Lorem ipsum dolor sit amet, Donec rhoncus dictum mi quis dapibus. Integer viverra arcu eu enim finibus, eget fringilla arcu facilisis."
          />
        </div>
        <button>All posts</button>
      </div>
    </section>
  )
}

export default BlogPosts
