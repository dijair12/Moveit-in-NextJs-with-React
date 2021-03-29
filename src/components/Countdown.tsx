import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.scss';

export function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.countdownContainer}>

        <div className={styles.countdownChild}>
          <span className={styles.countdownNumbers}>{minuteLeft}</span>
          <span className={styles.countdownNumbers}>{minuteRight}</span>
        </div>

        <span className={styles.countdownSeparator}>:</span>

        <div className={styles.countdownChild}>
          <span className={styles.countdownNumbers}>{secondLeft}</span>
          <span className={styles.countdownNumbers}>{secondRight}</span>
        </div>

      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}





    </div>
  )
}