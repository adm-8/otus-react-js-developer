import React, { ReactElement, useState } from "react";
import "./app.css";

export const App: React.FC = (): ReactElement => {
  const [count, setCount] = useState(0);

  return (
    <div className="red">
      {count}
      <button onClick={() => setCount(count + 1)}>UP</button>
    </div>
  );
};
