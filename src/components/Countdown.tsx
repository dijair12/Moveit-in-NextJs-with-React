import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.scss';

export function Countdown() {
	const [time, setTime] = useState(25 * 60);
	const [active, setActive] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	function startCountdown() {
		setActive(true);
	}

	useEffect(() => {
		if (active && time > 0) {
			setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		}
	}, [active, time])


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

			<button
				type="button"
				className={styles.countdownButton}
				onClick={startCountdown}>
				Iniciar um ciclo
			</button>
		</div>
	)
}