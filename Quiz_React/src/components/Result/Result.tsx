import styles from "./Result.module.css";
import Confetti from 'react-confetti';

type ResultProps= {
    maxQuizLen: number,
    correctNumLen: number
};

export default function Result({maxQuizLen, correctNumLen}: ResultProps) {
  return (
    <>
    <div className={styles.result}>
        You answered...
        <span className={styles.resultHighlight}>
            {`${correctNumLen}out of ${maxQuizLen}`}
        </span>
        questions correctly!
    </div>
    <Confetti/>
    </>
  )
}