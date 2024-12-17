import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          let str = item.type;
          let firstChar = str.charAt(0);
          let upperFirstChar = firstChar.toUpperCase();
          let restOfString = str.slice(1);
          let result = upperFirstChar + restOfString;
          return (
            <tr key={item.id}>
              <td>{result}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
