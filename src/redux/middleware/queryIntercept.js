export const queryIntercept = () => (next) => (action) => {
  console.log("action", action);
};
