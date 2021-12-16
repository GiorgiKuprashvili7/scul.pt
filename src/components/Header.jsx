import { useState, useEffect } from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const [isMenuOpen, setmenuOpen] = useState(false)
  const [headerActive, setHeaderActive] = useState({
    scrollY: undefined,
  })
  const [size, setsize] = useState({
    height: undefined,
    width: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setsize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleResize)

    const handleHeaderStyle = () => {
      setHeaderActive({
        scrollY: window.scrollY,
      })
    }
    window.addEventListener('scroll', handleHeaderStyle)
  }, [])

  useEffect(() => {
    if (size.width > 700 && isMenuOpen) {
      setmenuOpen(false)
    }
  }, [size.width, isMenuOpen])

  const menuToggler = () => {
    setmenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`${styles.header} ${
        headerActive.scrollY > 0 ? styles.active : ''
      }`}
    >
      <div className={styles.content}>
        <a href="#" className={styles.logo}>
          SCUL.PT
        </a>
        <nav className={`${styles.nav} ${isMenuOpen && styles.nav_active}`}>
          <ul>
            <li>
              <a onClick={menuToggler} href="#">
                home
              </a>
            </li>
            <li>
              <a onClick={menuToggler} href="#events">
                events
              </a>
            </li>
            <li>
              <a onClick={menuToggler} href="#blogposts">
                blog
              </a>
            </li>
            <li>
              <a onClick={menuToggler} href="#address">
                address
              </a>
            </li>
            <li>
              <a onClick={menuToggler} href="#contact">
                contact us
              </a>
            </li>
          </ul>
        </nav>
        <img
          onClick={menuToggler}
          className={styles.burger}
          src={isMenuOpen ? './icons/menu-close.svg' : './icons/menu-open.svg'}
          alt=""
        />
      </div>
    </header>
  )
}

export default Header
