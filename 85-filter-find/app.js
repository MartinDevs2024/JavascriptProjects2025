
// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined


const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];

  const fruits = ['orange', 'pear', 'lemon'];

  //filter

  const youngPeople = people.filter((person) => {
    return person.age < 30;
  })

  console.log(youngPeople);
  const developers = people.filter((person) => {
    person.position === 'developer';
  })

  console.log(developers);

  const seniorDevs = people.filter((item) => {
    item.position === 'senior dev';
  })
  console.log(seniorDevs);

  const peter = people.find((person) => {
    person.name === 'peter';
  })
  console.log(peter);

  const anna = people.filter((person) => {
    person.name === 'anna';
  })
  console.log(anna[0].position);

  const fruit = fruits.find((fruit) => {
    fruit === 'lemon';
  })
  console.log(fruit);

  const oldPerson = people.find((person) => {
    person.age > 35 
  })
  console.log(oldPerson);
  
  const randomPerson = people.find((people)=> {
    people.age < 35;
  })
  console.log(randomPerson);
 
  console.log(peter.position);