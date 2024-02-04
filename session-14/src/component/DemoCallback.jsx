import React from "react";

const DemoCallback = (props) => {
  const { handleChange } = props;
  console.log(props);
  React.useEffect(() => {
    console.log("In demo callback");
  }, [handleChange]);
  return <>{props.children}</>;
};

export default DemoCallback;
