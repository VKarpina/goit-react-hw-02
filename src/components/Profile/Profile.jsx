import clsx from "clsx";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.image}
          src={image}
          alt="User avatar"
          width="100"
          height="100"
        />
        <p className={styles.title}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={clsx(styles.item, styles.radiusFirst)}>
          <span>Followers</span>
          <span className={styles.bold}>{stats.followers}</span>
        </li>
        <li className={clsx(styles.item, styles.border)}>
          <span>Views</span>
          <span className={styles.bold}>{stats.views}</span>
        </li>
        <li className={clsx(styles.item, styles.radiusSecond)}>
          <span>Likes</span>
          <span className={styles.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
