import s from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'Upload stats',
};
Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array, //переделать!!!
};
export default Statistics;
