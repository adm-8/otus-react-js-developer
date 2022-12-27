import React, { FC, ReactElement, useState } from 'react'; // , { useState } 
import "./app.css";

export const App: FC = (): ReactElement => {
    const [count, setCount] = useState(0);

    return (
        <div className="red">
            {count}
            <button onClick={() => setCount(count + 1)}>UP</button>
        </div>
    );
};
