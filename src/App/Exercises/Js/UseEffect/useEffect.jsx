import { useState, useEffect } from 'react';
export const UseEffect = () => {
  const [count, setCount] = useState(0);

  const [intervalId, setIntervalId] = useState([]);

  const handleStart = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    setIntervalId([...intervalId, interval]);
  };

  const handleStop = () => {
    intervalId.forEach((interval) => clearInterval(interval));

    setIntervalId([]);
  };

  // ------------------------------------------------------------

  const [text, setText] = useState('Domyślny tekst');

  // useEffect(() => {}) - wykonaj się po KAŻDEJ ZMIANIE stanu komponentu

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zmieniono stan komponentu');
  });

  // useEffect(() => {}, []) - wykonaj się TYLKO RAZ po zamontowaniu komponentu

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zamontowano komponent');

    // handleStart();
  }, []);

  // useEffect(() => {}, [count]) - wykonaj się PO KAŻDEJ ZMIANIE stanu count

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zmieniono stan count');

    if (count > 5) {
      handleStop();

      setText('Zatrzymano licznik - wynik maksymalny to 5');
    }
  }, [count]);

  // useEffect(() => {}, [count, text]) - wykonaj się PO KAŻDEJ ZMIANIE stanu count LUB text

  // useEffect(() => {

  //   //... wykonaj ten kod

  //   console.log('Zmieniono stan count');

  // }, [count, text]);

  return (
    <div>
      <div>{count}</div>

      <div>{text}</div>

      <button onClick={handleStart}>Dodaj</button>

      <button onClick={handleStop}>Stop</button>

      <ReactInterval />
    </div>
  );
};

const ReactInterval = () => {
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);

  const handleClick = () => {
    setStart((prevState) => !prevState);
  };

  const handleRestart = () => {
    setTime(0);

    setStart(false);
  };

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start, time]);

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div>
      <div>Czas: {time}</div>

      <button onClick={handleClick}>{start ? 'Stop' : 'Start'}</button>

      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
