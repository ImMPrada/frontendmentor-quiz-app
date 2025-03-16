import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import invariant from "tiny-invariant";
import Option from "./option";
import Question from "./question";

export default function Quiz() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    handleAnswerSelection,
    currentAnswer
  } = useContext(QuestionsContext);
  const literals = ['A', 'B', 'C', 'D', 'E', 'F'];
  invariant(currentQuestion, 'Current quiz is not found');

  return (
    <>
      <Question
        question={currentQuestion.question}
        number={currentQuestionIndex}
        total={totalQuestions}
        progress={progress}
      />

      <div className="flex
        flex-col
        items-start
        justify-start
        w-full
        gap-3 md:gap-6
      ">
        {currentQuestion.options.map((option, index) => (
          <Option
            key={option}
            literal={literals[index]}
            content={option}
            isSelected={currentAnswer === option}
            onClick={() => {handleAnswerSelection(option)}}
          />
        ))}
      </div>
    </>
  );
}