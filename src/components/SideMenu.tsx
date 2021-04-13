import styles from '../styles/components/SideMenu.module.scss';


export default function SideMenu() {
  return (
    <aside className={styles.containterSideMenu}>
      <a type="button" href="/" className={styles.loginReturnSideMenu}>
        <img src="icons/logo_side.svg" alt="login" />
      </a>

      <div className={styles.boxSideMenu}>
        <div className={styles.lineSideMenu} />
        <img src="icons/home.svg" alt="home" className={styles.homeSideMenu} />
      </div>
    </aside>
  )
}