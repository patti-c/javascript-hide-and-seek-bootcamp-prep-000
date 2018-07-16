function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');
  for(let i = 0 ; i < rankedList.length ; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  
}