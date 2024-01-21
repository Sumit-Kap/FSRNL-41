import React from "react";
import DemoCallback from "./DemoCallback";
const NewHooks = () => {
  const [counter, setCounter] = React.useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  // it will be recreated everytime on the re-render.
  const handleChange = React.useCallback(() => {}, []);

  return (
    <>
      <DemoCallback handleChange={handleChange} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default NewHooks;
