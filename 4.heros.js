const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
  ];
   
  const arr = heros.map((x, ide) =>{
    return {id:ide, hero:x.name}
  });
  console.log(arr);