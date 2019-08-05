let name = 'wx'
let fun = () => {
  console.log('wxzs')
}
let aLi = document.querySelectorAll('li')
for(let i=0; i<aLi.length; i++){
  aLi[i].onclick = () => {
    console.log(i)
  }
}

let a = 1