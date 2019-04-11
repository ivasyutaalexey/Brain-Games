const getRandomInt = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

const getDivisors = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const getMaximumNumber = (a, b) => (a > b ? a : b);

export { getRandomInt, getDivisors, getMaximumNumber };
