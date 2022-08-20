import { useSelector } from "react-redux";
import CounterActions from "../components/CounterActions";

export default function Count() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      Count PAGE
      <h3>{count}</h3>
      <CounterActions />
    </div>
  );
}
