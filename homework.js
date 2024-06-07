function getValueAtObject(obj, key) {
  if (
    typeof key === "string" &&
    Object.prototype.toString.call(obj) === "[object Object]"
  ) {
    for (const value of Object.keys(obj)) {
      if (value === key) return obj[value];
    }
  }
  throw new Error("Error !");
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

function getNumberAtArray(arr, index) {
  let num = 0;
  if (
    Array.isArray(arr) &&
    typeof index === "number" &&
    arr.length > index &&
    index >= 0
  ) {
    arr.forEach((v, i) => {
      if (i === index) num = v;
    });
  } else {
    throw new Error("Error!");
  }

  return num;
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
