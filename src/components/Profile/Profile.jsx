import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            {stats.followers}
          </span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            {stats.views}
          </span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            {stats.likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
