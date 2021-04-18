import s from './FriendList.module.css';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li key={id} className={s.item}>
            {isOnline ? (
              <span className={s.online}>{isOnline}</span>
            ) : (
              <span className={s.offline}>{isOnline}</span>
            )}

            <img className={s.avatar} src={avatar} alt="friend" width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  id: propTypes.number,
  isOnline: propTypes.bool,
  avatar: propTypes.string,
  name: propTypes.string,
};

export default FriendList;
