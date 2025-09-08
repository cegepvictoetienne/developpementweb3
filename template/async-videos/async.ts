console.log('1 - Début du script');

setTimeout(() => {
  console.log('2 - setTimeout callback');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('3 - Promise callback 1');
  })
  .then(() => {
    console.log('4 - Promise callback 2');
  });

console.log('5 - Fin du script');
