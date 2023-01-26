const object = {
  name: 'Ilya',
  age: 25,
  passpordId: {
    series: 'MC',
    number: 2471
  }
}

object.heigth=259; //add new key in object

const newKey='laptoop';
const newValue='MacBook';
object.newKey=newValue;
object[newKey]=newValue;

const properyName='name';

console.log(object.name);
console.log(object[properyName]);
console.log(object.age);
console.log(object.passpordId.series);
console.log(object.passpordId.number);
console.log(object)

for (let key in object) {
  console.log(key);
}