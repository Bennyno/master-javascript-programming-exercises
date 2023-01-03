let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    let new_arr = []
    inventory.map(e => {
      e.shoes.map(i => {
        let splits = i.name.split(' ')
        let count = 0
        splits.map(s => {
          if(s.startsWith('lace'))
            new_arr.push({nameWords: splits, targetWordIndex: count});
            else count ++
      })
    })
  })
  return new_arr 
}

console.log(getLaceNameDataForShoes(inventory))
