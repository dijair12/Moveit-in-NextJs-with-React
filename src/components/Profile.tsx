import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dijair12.png" alt="Diego Fernandes" className="" />
      <div>
        <strong>Dijair Vieira Ribeiro</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  )
}