//obj prop short hand

const name = 'Andrew'
const age = 27

const user = {
  name: name,
  age: age,
  location: 'Philadelphia'
}

console.log(user)

//Obj destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  saleprice: undefined,
  rating: 4.2
}

// const {label:productLabel, stock} = product

// console.log(productLabel)

const trans = (order, {label, stock}) =>{
  console.log(order, label, stock)
}

trans('order', product)

