import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useEffect, useState } from "react";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("reviews"));
    return savedData || { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  return (
    <>
      <Description />
      <Options setReviews={setReviews} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          {...reviews}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
