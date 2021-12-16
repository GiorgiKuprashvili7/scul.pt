import React from 'react'
import styles from './QuickInfo.module.scss'
import calendar from '../icons/calendar.svg'
import clock from '../icons/clock.svg'
import ticket from '../icons/ticket.svg'
import shop from '../icons/shop.svg'

const QuickInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.box}>
          <img src={calendar} alt="" />
          <p>Calendar</p>
        </div>
        <div className={styles.box}>
          <img src={clock} alt="" />
          <p>Hours</p>
        </div>
        <div className={styles.box}>
          <img src={ticket} alt="" />
          <p>Tickets</p>
        </div>
        <div className={styles.box}>
          <img src={shop} alt="" />
          <p>Shop</p>
        </div>
      </div>
    </section>
  )
}

export default QuickInfo
