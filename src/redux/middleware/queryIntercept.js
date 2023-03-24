import { isRejectedWithValue } from "@reduxjs/toolkit";
export const queryIntercept = () => (next) => (action) => {
  console.log("isRejectedWithValue", isRejectedWithValue);
};
