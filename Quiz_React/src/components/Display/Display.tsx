import styles from "./Display.module.css"
type question = {
  children: React.ReactNode;
}

export default function ({ children }: question) {
  return (
    <div className={styles.display}>
        {children}
    </div>
  )
}