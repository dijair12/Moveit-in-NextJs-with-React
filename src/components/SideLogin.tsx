import styles from '../styles/components/SideLogin.module.scss';

export function SideLogin() {
  return (
    <div className={styles.containerSideLogin}>
      <div className={styles.logoSideLogin}>
        <img src="icons/logo.svg" alt="logo-moveit" />
      </div>
      <span>Bem-vindo</span>

      <div className={styles.titleSideLogin}>
        <img src="icons/github.svg" alt="github" />
        <h3>Faça login com seu GitHub<br /> para começar</h3>
      </div>

      <div className={styles.loginSideLogin}>
        <input type="text" className={styles.inputSideLogin} placeholder="Digite seu username" />
        <button type="button" className={styles.buttonSideLogin}>
          <img src="icons/vector.svg" alt="vector" />
        </button>
      </div>
    </div>
  )
}