import styles from "./Button.module.css"
interface ButtonProps {
  children: string;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
        <span className={styles.buttonInner}>{ children }</span>
    </button>
  )
}