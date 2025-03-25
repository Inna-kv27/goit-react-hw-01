// import PropTypes from 'prop-types';
// import './TransactionHistory.module.css';

// const TransactionHistory = ({ items }) => {
//   return (
//     <table className="transaction-history">
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map(({ id, type, amount, currency }) => (
//           <tr key={id}>
//             <td>{type}</td>
//             <td>{amount}</td>
//             <td>{currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default TransactionHistory;

//

import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionHeader}>Type</th>
          <th className={css.transactionHeader}>Amount</th>
          <th className={css.transactionHeader}>
            Currency
          </th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id} className={css.transactionTr}>
            <td className={css.transactionInfo}>{type}</td>
            <td className={css.transactionInfo}>
              {amount}
            </td>
            <td className={css.transactionInfo}>
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
