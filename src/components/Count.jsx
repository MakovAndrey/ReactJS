import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <p>counter state: {count}</p>
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </>
  );
};
