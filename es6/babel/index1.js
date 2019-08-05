'use strict';

var name = 'wx';
var fun = function fun() {
  console.log('wxzs');
};
var aLi = document.querySelectorAll('li');

var _loop = function _loop(i) {
  aLi[i].onclick = function () {
    console.log(i);
  };
};

for (var i = 0; i < aLi.length; i++) {
  _loop(i);
}

var a = 1;
