import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import invariant from "tiny-invariant";
import Option from "./option";
import Question from "./question";
import SubmitButton from "./submit-button";
import NextQuestionButton from "./next-question-button";
import Icon from "../icon";
export default function Quiz() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    handleAnswerSelection,
    currentAnswer,
    answerSubmitted,
    isCorrect,
    errors,
    hasMoreQuestions,
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
            isTheAnswer={currentQuestion.answer === option}
            isCorrect={isCorrect}
            onClick={() => {handleAnswerSelection(option)}}
            disabled={answerSubmitted}
          />
        ))}

        {!answerSubmitted ? <SubmitButton /> : null}
        {answerSubmitted && hasMoreQuestions ? <NextQuestionButton /> : null}
        {errors.length > 0 && (
          <div className="text-red font-sans text-body-m flex gap-2 items-center">
            <Icon name="incorrect" />
            {errors.join(', ')}
          </div>
        )}
      </div>
    </>
  );
}