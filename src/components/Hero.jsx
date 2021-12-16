import styles from './Hero.module.scss'
import React from 'react'
import image from '../images/img3.jpg'
import Socialicons from './Socialicons'

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <Socialicons />
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div>
          <p>September 26, 2021 - Bus excursion</p>
          <h1>
            Exploring Old <br />
            Architecture
          </h1>
          <button>Read more</button>
        </div>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.social_icons}></div>

      <div className={styles.scrool_down}>
        <div className={styles.border}>
          <div className={styles.dot}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
