import useRender from "./timerEffect";
const Counter = () => {
  const { isMultiple, randomNumber, timer } = useRender();
  return (
    <div>
      {timer}
      <br />
      {randomNumber}
      <br />
      {isMultiple ? "Acertou" : ""}
    </div>
  );
};

export default Counter;
