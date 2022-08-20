import Count from "./views/Count";
import Todo from "./views/Todo";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  const Home = () => {
    return <div>Home</div>;
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px"
        }}
      >
        <Link to="home">LOGO</Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="count">Counter</Link>
          <Link to="todo">Todo</Link>
        </div>
      </div>
      <hr />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}
