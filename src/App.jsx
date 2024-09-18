import { useState } from "react";
import Pagination from "react-responsive-pagination";

import "./pagination.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(20);

  return (
    <>
      <div>
        <Pagination
          current={current}
          total={total}
          onPageChange={(page) => setCurrent(page)}
        />
      </div>
      <div>
        <button onClick={() => setTotal(0)}>Set total=0</button>
        <button onClick={() => setTotal(20)}>Set total=20</button>
        <button onClick={() => setTotal(100)}>Set total=100</button>
        <button onClick={() => setTotal(1000)}>Set total=1000</button>
      </div>
    </>
  );
}

export default App;
