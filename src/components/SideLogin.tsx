import { useSession, signIn, signOut } from 'next-auth/client';
import styles from '../styles/components/SideLogin.module.scss';

export function SideLogin() {
  const [session, loading] = useSession();

  return (
    <div className={styles.containerSideLogin}>
      <div className={styles.logoSideLogin}>
        <img src="icons/logo.svg" alt="logo-moveit" />
      </div>
      <span>Bem-vindo</span>

      <div className={styles.titleSideLogin}>
        <img src="icons/github.svg" alt="github" />
        <h3 className={styles.textSideLogin}>Faça login com seu GitHub<br /> para começar</h3>
      </div>

      <div className={styles.loginSideLogin}>

        {!session && <>
          <button onClick={() => signIn('github')} className={styles.buttonSideLogin}>
            <img src="icons/github.svg" alt="github" />
          </button>
        </>}
        {session && <>
          <a href="/home" className={styles.textLogonSideLogin}>
            <h3 className={styles.textSideLogin}>
              Entre agora com {session.user.name}
            </h3>
          </a>
          <button onClick={() => signOut()} className={styles.buttonSairSideLogin}>Sair</button>
        </>}
      </div>
    </div>
  )
}