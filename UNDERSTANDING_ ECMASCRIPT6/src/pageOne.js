import _ from 'lodash';
import $ from 'jQuery';
import './assets/screen.css';

function init() {
  document.body.innerHTML = '<h1>Hello</h1><div id="console"></div>';
  f1();
  f2();
  f3();
  f4();
}

function f1(){
  window.setTimeout(function(){
    console.log('f1');
  },2000);
}
function f2(){
  window.setTimeout(function(){
    console.log('f2');
  },2000);
}
function f3(){
  window.setTimeout(function(){
    console.log('f3');
  },2000);
}
function f4(){
  window.setTimeout(function(){
    console.log('f4');
  },2000);
}

$(document).ready(function(){
  init();
});