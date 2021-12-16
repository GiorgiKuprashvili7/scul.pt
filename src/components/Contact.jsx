import styles from './Contact.module.scss'
import React from 'react'

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.content}>
        <h1 className={styles.title}>Get In Touch</h1>
        <form>
          <div>
            <input required type="text" placeholder="Name" />
            <input required type="text" placeholder="Phone" />
          </div>
          <div>
            <input required type="text" placeholder="Email" />
            <input required type="text" placeholder="Company" />
          </div>
          <textarea required placeholder="Your Message" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
