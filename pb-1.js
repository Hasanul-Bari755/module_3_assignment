const printObjectProperties = (obj) => {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  }
  for (let value in obj) {
    console.log(`${value}:${obj[value]}`);
  }
};

const person = {
  name: "hasan",
  age: 26,
  profession: "student",
  isMerried: true,
};

printObjectProperties(person);
