import React from "react";

const DemoCallback = (props) => {
  const { handleChange } = props;
  React.useEffect(() => {
    console.log("In demo callback");
  }, [handleChange]);
  return <></>;
};

export default DemoCallback;
