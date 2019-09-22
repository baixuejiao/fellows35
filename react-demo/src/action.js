
const add = (text) => {
  return {
    type: 'ADD',
    text
  }
}
const del = (text) => {
  return {
    type: 'DEL',
    text
  }
}

export {
  add,
  del
}