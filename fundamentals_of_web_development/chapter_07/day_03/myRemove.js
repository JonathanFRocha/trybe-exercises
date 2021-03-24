const assert = require("assert");
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove(arr, 3), [1, 2, 4], "não deu certo");
assert.deepStrictEqual(myRemove(arr, 3), arr, "Sofreu Alterações");
assert.notDeepStrictEqual(myRemove(arr, 3), [1, 2, 3, 4], "é igual a [1, 2, 4]");
assert.deepStrictEqual(
  myRemove(arr, 5),
  arr,
  "Sofreu alterações com um valor que não estava dentro do array"
);

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
