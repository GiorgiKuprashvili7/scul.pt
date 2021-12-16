import styles from './EventsCarousel.module.scss'
import clockIcon from '../icons/little-clock.svg'
import calendar from '../icons/little-calendar.svg'
import React from 'react'

const EventsCarousel = () => {
  return (
    <section className={styles.section} id="events">
      <div className={styles.section_content}>
        <p className={styles.page_subtitle}>
          expolore art of sculpture with us
        </p>
        <h1 className={styles.page_title}>Latest Event</h1>

        <div className={styles.item_box}>
          <div className={styles.content}>
            <img src="./images/img1.jpg" alt="" className={styles.image} />
            <div className={styles.texts}>
              <p className={styles.top_subtitle}>guided tour</p>
              <h1 className={styles.title}>
                Great Sculpture: <br /> Ancient to Contemporary{' '}
              </h1>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                esse deleniti doloribus nesciunt eum laudantium debitis
                aspernatur minima adipisci facilis.esse deleniti doloribus
                nesciunt eum laudantium debitis aspernatur minima adipisci
                facilis.
              </p>

              <p className={styles.hours}>
                <img src={clockIcon} alt="" className={styles.icon} />
                10:45-11:45 A.M.
              </p>
              <p className={styles.date}>
                <img src={calendar} alt="" className={styles.icon} />
                Monday/september 26
              </p>

              <button>Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsCarousel
