import { useEffect, useState } from "react";

const useRender = () => {
  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const timerCount = setTimeout(() => {
      if ((timer + 1) % 10 === 0) {
        setRandomNumber(Math.ceil(Math.random() * 100));
      }
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(timerCount);
    };
  }, [timer]);
  let isMultiple = randomNumber && (randomNumber % 3 === 0 || randomNumber % 5 === 0);
  useEffect(() => {
    if (isMultiple) {
      setTimeout(() => {
        setRandomNumber(null);
      }, 4000);
    }
  }, [randomNumber]);

  return {
    timer,
    randomNumber,
    isMultiple,
  };
};

export default useRender;
