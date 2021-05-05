import { useSession, signIn, signOut } from 'next-auth/client';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  const [session, loading] = useSession();
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      {session && (
        <>
          <img
            src={`https://github.com/${session.user.name}.png`}
            alt={session.user.name}
            className={styles.profileGit}
          />
          <div>
            <strong>{session.user.name}</strong>
            <p>
              <img src="icons/level.svg" alt="level" />
              Level {level}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
