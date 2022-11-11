import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>hello from react</p>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}
