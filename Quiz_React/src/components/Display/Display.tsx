import styles from "./Display.module.css"

export default function ({ children }: any) {
  return (
    <div className={styles.display}>
        {children}
    </div>
  )
}