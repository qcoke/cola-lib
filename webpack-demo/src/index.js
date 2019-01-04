import _ from 'lodash';
import './style.css';
import logo from './webpack-es6.png';

function component() {
  var element = document.createElement('div');
  // 将图像添加到我们现有的DIV
  var logoImg = new Image();

  element.innerHTML = _.join(["hello", "webpack"], " ");
  element.classList.add('hello');

  logoImg.src = logo;
  element.appendChild(logoImg);
  return element;
}

document.body.appendChild(component());