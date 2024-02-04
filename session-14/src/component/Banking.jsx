import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { depositAmount, withdrawAmount, bankrupt } from "../action";
const Banking = () => {
  const dispatch = useDispatch();
  const banking = useSelector((state) => state.banking);
  return (
    <>
      <div> Amount is {banking.amount}</div>
      <span>
        <button onClick={() => dispatch(depositAmount(1000))}>Deposit</button>
        <button onClick={() => dispatch(withdrawAmount(1000))}>Withdraw</button>
        <button onClick={() => dispatch(bankrupt())}>Bankrupt</button>
      </span>
    </>
  );
};

export default Banking;
