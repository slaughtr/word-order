$(function(){
  $("#formOne").submit(function(){
    event.preventDefault();

    function wordObject(word, count) {
      this.word = word;
      this.count = count;
    };
    // debugger;
    var sent = $("#sentence").val();
    var sentArray = sent.split(" ");
    var newArray = [];
    sentArray.forEach(function(word){
      var inNewArray = false;
      newArray.forEach(function(newWord){
        if (word === newWord.word) {
          inNewArray = true;
          newWord.count += 1;
        }
      })
      if (inNewArray === false) {
        newArray.push(new wordObject(word, 1));
      }
    });
    console.log(newArray);
    newArray.forEach(function(item){
      $("body").append("<h1>" + item.word + " is in it "+ item.count +" times</h1>");
    });
  });
});
