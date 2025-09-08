console.log('Début du script');

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('Fin du script');
