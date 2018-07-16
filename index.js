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
 // var grandNode = document.getElementById('grand-node').querySelectorAll('div');
 var grandNode = document.getElementById('grand-node').querySelectorAll('div');
  var countUp = 0;
  var lookingFor = '';
  
  while(countUp < grandNode.length) {
    lookingFor = grandNode[countUp];
    countUp++;
  }
  
  return lookingFor;
}

deepestChild();