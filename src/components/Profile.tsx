import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dijair12.png" alt="Dijair Vieira" className={styles.profileGit} />
      <div>
        <strong>Dijair Vieira Ribeiro</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}