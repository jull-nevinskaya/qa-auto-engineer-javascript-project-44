const addPrefix = (arr, prefix) => {
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    arr[i] = `${prefix} ${arr[i]}`;
  }
  return arr;
};

const names = ['john', 'smith', 'karl'];

const newNames = addPrefix(names, 'Mrs');
console.log(newNames);
