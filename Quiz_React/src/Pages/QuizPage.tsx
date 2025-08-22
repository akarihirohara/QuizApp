import { useState, useEffect } from "react";
import { ROUTES } from "../const";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [answerLogs, setAnswerLogs] = useState<boolean[]>([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex: number) => {
    if(clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs(prev => [...prev, true]);
    } else {
      setAnswerLogs(prev => [...prev, false]);
    }
    setQuizIndex(prev => prev + 1)
  }

  useEffect(() => {
    const correctNum = answerLogs.filter(answer => answer === true)
    if(answerLogs.length === MAX_QUIZ_LEN){
      navigation(ROUTES.RESULT, {
          state: {
            maxQuizLen: MAX_QUIZ_LEN,
            correctNumLen: correctNum.length
          }
        });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

    return (
    <>
      {quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
      {
        quizData[quizIndex] && quizData[quizIndex].options.map ((option: string, index: number) => 
        <Button key={`option-${index}`} onClick={() => {handleClick(index)}}>{option}</Button>
      )}
    </>
  );
}
