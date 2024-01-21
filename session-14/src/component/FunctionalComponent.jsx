import React from "react";

const FunctionalComponent = () => {
  const [response, setResponse] = React.useState({});
  const [value, setValue] = React.useState(0); // it will be done only once.
  const ref = React.useRef(null);
  // getDerivedStateFromProps + componentDidMount
  // This is the ideal place for calling the APIs

  React.useLayoutEffect(() => {
    console.log("In useLayoutEffect");
  });

  React.useEffect(() => {
    (function () {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((data) => {
          return data.json();
        })
        .then((results) => {
          console.log(...results);
          setResponse(...results);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  const handleTimer = () => {
    ref.current = setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);
  };

  // when you are just passing first callback method then useEffect will be called on every rerender.
  // When you pass the deps array and it is empty then it will be called twice with react 18.x version and react 17 or version before that it will be called only once.
  // When you pass the deps array with some state variables then whenever state vars are modified your useEffect will be invoked.
  // React.useEffect takes a function/callback function that will be invoked whenever there is a rerender in the application.
  // mandatory argument.
  // array of dependencies.
  console.log(response);
  const clearTimer = () => {
    clearInterval(ref.current);
  };
  return (
    <>
      <h1>{value}</h1>
      <p>{JSON.stringify(response)}</p>
      <div>
        {/* <input
          type="text"
          ref={focus}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        /> */}
        <button onClick={handleTimer}>Click me</button>
        <button onClick={clearTimer}>Clear Timer</button>
      </div>
    </>
  );
};

export default FunctionalComponent;
