// function getValueAtObject(obj, key) {
//   if (
//     typeof key === "string" &&
//     Object.prototype.toString.call(obj) === "[object Object]"
//   ) {
//     for (const value of Object.keys(obj)) {
//       if (value === key) return obj[value];
//     }
//   }
//   throw new Error("Error !");
// }

// 타입 체크기
//  Object.prototype.toString.call(obj) === "[object Object]"
//  Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() === "object"

// 타입을 정확하게 확인하는 함수
function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "object"
  );
}

// 선생님 답안
function getValueAtObject(obj, key) {
  if (typeof key !== "string") {
    throw new TypeError(
      "getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }
  if (typeof obj === "object") {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      throw new Error(
        `getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`
      );
    }
  } else {
    throw new TypeError(
      "getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다."
    );
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
// console.log(getValueAtObject(person, "country")); // Error !

// function getNumberAtArray(arr, index) {
//   let num = 0;
//   if (
//     Array.isArray(arr) &&
//     typeof index === "number" &&
//     arr.length > index &&
//     index >= 0
//   ) {
//     arr.forEach((v, i) => {
//       if (i === index) num = v;
//     });
//   } else {
//     throw new Error("Error!");
//   }

//   return num;
// }

// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

// 선생님 답안
function getNumberAtArray(arr, index) {
  if (Array.isArray(arr)) {
    if (index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      throw new Error("배열에 없는 index입니다.!");
    }
  } else {
    throw new TypeError(
      "getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다."
    );
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
