import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  percentageProgress: number;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;
let percentageProgress: number = 0;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const totalTime = 25 * 60;
  const [time, setTime] = useState(totalTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    percentageProgress = 0;
    setIsActive(false);
    setHasFinished(false);
    setTime(totalTime);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
        percentageProgress +=
          percentageProgress <= 100
            ? 100 / (totalTime % 0 ? totalTime : totalTime - 1)
            : 100;
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        percentageProgress,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
