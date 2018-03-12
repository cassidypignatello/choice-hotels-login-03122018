var background = document.getElementsByClassName('container');

function init() {
  addClick();
}

function addClick() {
  background[0].onclick = function() {
    ADTECH.click('Banner', 'https://www.choicehotels.com');
  };
}

ADTECH.ready(init);
