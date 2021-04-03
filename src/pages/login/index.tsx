import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../../styles/pages/Login.module.scss';
import { SideLogin } from '../../components/SideLogin';
import { SideSimbol } from '../../components/SideSimbol';



export default function Login(props) {
  return (
    <div className={styles.containerLogin}>
      <Head>
        <title>Move.it | Login</title>
      </Head>
      <section className={styles.divisorLogin}>
        <div>
          <SideSimbol />
        </div>
        <div>
          <SideLogin />
        </div>
      </section>
    </div>

  )
}