import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/testSlice/testSlice";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.test);

  const handleIncrement = () => {
    dispatch(
      increment(
        "tutaj jest payload wyciąga się go z action w reducerze co możecie zobaczyć w konsoli przy kliknięciu na przycisk increment"
      )
    );
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Redux Example</h1>
      <h2>{value}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ReduxExample;
