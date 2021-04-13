import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.scss';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel === NaN ? 0 : Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        {
          percentToNextLevel ?
            (<>
              <div style={{ width: `${percentToNextLevel}%` }} />
              <span
                className={styles.currentExperience}
                style={{ left: `${percentToNextLevel}%` }}
              >
                {currentExperience} xp
            </span>
            </>
            ) : (
              <>
                <div style={{ width: `0%` }} />
                <span
                  className={styles.currentExperience}
                  style={{ left: `0%` }}
                >
                  {currentExperience} xp
            </span>
              </>)
        }
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}