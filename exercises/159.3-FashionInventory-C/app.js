let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
  new_arr = []
  shoeList.map(e => {
    e.shoes.map(i => {
      if(i.name.includes('black')){
        new_arr.push([e.name, i.name, i.price])
      }
    })
  })
  return new_arr
}

console.log(renderInventory(inventory))

