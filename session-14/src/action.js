export function depositAmount(payload) {
  return {
    type: "DEPOSIT",
    payload,
  };
}

export function withdrawAmount(payload) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

export function bankrupt() {
  return {
    type: "BANKRUPTCY",
    payload: 0,
  };
}

// Component -> dispatch an action
// action -> returns an object that is passed to reducer
