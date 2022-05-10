const memoize = (fn) => {
  let cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n]
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }


}

export default memoize;