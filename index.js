function theBeatlesPlay(musicians, instruments){
   var sentence = new Array();
  for(let i=0; i<4; ++i){
    sentence[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return sentence;
}
// add solution here
function johnLennonFacts(facts){
  var sentence = new Array();
  let i=0;
  while(facts[i] != 'undefined'){
    sentence[i] = `${facts[i]} !!!`;
    i++;
  }
  return sentence;
}
function iLoveTheBeatles(num){
var sentence = new Array();

  do{
  sentence[i] = `"I love the Beatles!"`;
  num++;
} while(num<15);
return sentence;
}
