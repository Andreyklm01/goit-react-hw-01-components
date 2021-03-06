import s from './Transaction-history.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead className={s.header}>
      <tr className={s.row}>
        <th className={s.headerCell}>Type</th>
        <th className={s.headerCell}>Amount</th>
        <th className={s.headerCell}>Currency</th>
      </tr>
    </thead>
    <tbody className={s.header}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={s.bodyRow}>
          <td className={s.bodyCell}>{type}</td>
          <td className={s.bodyCell}>{amount}</td>
          <td className={s.bodyCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
