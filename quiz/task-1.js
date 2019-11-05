let allNumbers= [1, 2, 4, 5, 6, 7, 8],
  someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
  noNumbers = ['здесь', 'нет', 'чисел'];
  empty = [];

function isNumber(val) {
  return typeof val === 'number';
}

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
console.log(isSomeTrue(empty, isNumber)); //вернет false

function isSomeTrue(arr, func) {

  if (!arr || !arr.length) {
    return false;
  }
  let firstArg = arr[0];

  let restArgs = Array.prototype.splice.call(arr, 1);
  let ret = func.call(this, firstArg);

  if (ret === false) {
    return isSomeTrue(restArgs, func);
  }
  return true;
}