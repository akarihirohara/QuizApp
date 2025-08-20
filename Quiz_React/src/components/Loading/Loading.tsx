import styles from "./Loading.module.css";

type activeProps = {
    active: boolean;
}
export default function Loading({ active }: activeProps) {
  return (
    <div className={`${styles.loading} ${active ? styles.isActive : ""}`}>
        <span>~ Final Result ~</span>
    </div>
  )
}
