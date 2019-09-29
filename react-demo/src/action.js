
const add = (data) => {
  return {
    type: 'ADD',
    data
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