import { useContext } from "react";
import Button from "../button";
import { QuestionsContext } from "../../contexts/questions-context";

export default function NextQuestionButton() {
  const { restartAll } = useContext(QuestionsContext);

  return (
    <Button
      label="Play Again"
      onClick={restartAll}
    />
  );
}
