import s from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.descr}>
        <img className={s.avatar} src={avatar} alt="user avatar" width="100" />
        <h2 className={s.name}>{name}</h2>
        <p className={s.tag}>{'@' + tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.value}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.value}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
