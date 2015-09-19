var Emotion = function(){
  this.response = "Unknown";
};

Emotion.prototype._happyWords = function(){
  return ['delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant'];
};

Emotion.prototype._happySearch = function(sentence){
  var happyArray = [];
  var stringArray = sentence.split(' ');
  for (var i=0; i < this._happyWords().length; i++){
    for (var j=0; j < stringArray.length; j++){
      if (this._happyWords()[i] === stringArray[j]){
        happyArray.push(this._happyWords()[i]);
      }
    }
  }
  return happyArray.length
};
