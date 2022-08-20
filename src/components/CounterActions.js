import { decrement, increment, incrementByAmount } from "../stores/counter";
import { useDispatch } from "react-redux";

export default function CounterActions() {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement (-)
      </button>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment (+)
      </button>
      <button type="button" onClick={() => dispatch(incrementByAmount(3))}>
        3+
      </button>
    </div>
  );
}
