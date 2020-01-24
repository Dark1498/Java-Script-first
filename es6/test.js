'use strict';
// средство еs б: блок "левых" объявлений
const sentences = [
{subject: 'JavaScript', verb: 'is', object : 'great' },
{subject: 'Elephants', verb: 'are', object : 'large' },
];
// средство еsб: деструктуризация объекта
function say({ subject, verb, object }) {
// средство еs б: строки шаблона
    console.log(`${subject} ${verb} ${object}`);
}
//средство еs б: for .. of
for(let s of sentences) {
  say(s);
}
