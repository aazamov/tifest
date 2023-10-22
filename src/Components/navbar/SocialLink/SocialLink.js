import React from 'react'
import styles from './SocialLink.module.css'

const SocialLink = ({ children }) => {
  return (
    <div className={styles.socialLink}>
      {children}
      <svg className={styles.svg} width="35" height="35">
        <circle r="45%" cx="50%" cy="50%" className={styles.track}></circle>
      </svg>
    </div>
  )
}

export default SocialLink