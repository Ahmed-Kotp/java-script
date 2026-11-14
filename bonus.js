/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentCount = init;

  const increment = () => {
    return ++currentCount;
  };

  const decrement = () => {
    return --currentCount;
  };

  const reset = () => {
    currentCount = init;
    return currentCount;
  };

  return { increment, decrement, reset };
};
