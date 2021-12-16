import styles from './ShopAddress.module.scss'
import React from 'react'
import map from '../images/darkMap.png'
import phone from '../icons/phone.svg'
import mail from '../icons/mail.svg'
import locationPin from '../icons/location-pin.svg'

const ShopAddress = () => {
  return (
    <section id="address" className={styles.section}>
      <div className={styles.content}>
        <div
          className={styles.map}
          style={{ backgroundImage: `url(${map})` }}
        />

        <div className={styles.address}>
          <div className={styles.background_image}></div>
          <div>
            <div className={styles.box}>
              <div>
                <img className={styles.phone} src={phone} alt="" />{' '}
                <h2>phone</h2>
              </div>
              <p>+0 123 456 789</p>
              <p>+0 123 456 789</p>
              <p>+0 123 456 789</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img className={styles.mail} src={mail} alt="" /> <h2>email</h2>
            </div>
            <p>sculpt@domail.com</p>
          </div>

          <div className={styles.box}>
            <div>
              <img className={styles.location} src={locationPin} alt="" />{' '}
              <h2>location</h2>
            </div>
            <p>
              Temqa, 3MR, <br />
              648 ivah Street Apt. 357
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopAddress
