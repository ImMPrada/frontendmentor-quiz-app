import { useContext } from "react";
import Button from "../button";
import { QuestionsContext } from "../../contexts/questions-context";

export default function NextQuestionButton() {
  const {
    handleQuestionSelection
  } = useContext(QuestionsContext);

  return (
    <Button
      label="Next question"
      onClick={handleQuestionSelection}
    />
  );
}
