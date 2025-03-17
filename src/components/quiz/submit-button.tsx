import { useContext } from "react";
import Button from "../button";
import { QuestionsContext } from "../../contexts/questions-context";

export default function SubmitButton() {
  const {
    handleAnswerSubmission
  } = useContext(QuestionsContext);

  return (
    <Button
      label="Submit answer"
      onClick={handleAnswerSubmission}
    />
  );
}
