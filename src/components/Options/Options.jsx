import styles from "./Options.module.css";

const Options = ({ setReviews, totalFeedback }) => {
  const updateFeedback = (feedbackType) => {
    setReviews((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div className={styles.container}>
      <button
        className="btnReset"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
