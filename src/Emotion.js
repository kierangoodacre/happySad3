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

Emotion.prototype._happyPercentage = function(sentence){
  return 100
};

Emotion.prototype._sadWords = function(){
  return ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy'];
};

Emotion.prototype._sadSearch = function(sentence){
  var sadArray = [];
  var stringArray = sentence.split(' ');
  for(var i = 0; i < this._sadWords().length; i++){
    for(var j = 0; j < stringArray.length; j++){
      if(this._sadWords()[i] === stringArray[j]){
        sadArray.push(this._sadWords()[i]);
      }
    }
  }
  return sadArray.length
};
