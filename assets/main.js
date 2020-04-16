
$(document).ready(function () {

var list = $(".todo");
var item = $(".element");
var newInput = $(".add-element")
var v =$(".fas .fa-trash")

// $("body").on("click" , cancel , function(){
//   $(this).remove();
// })



//aggiunta nuovo list items
newInput.keyup(function(e){

  if(e.which == 13){
    var text = newInput.val().trim();
    console.log(text);

    if(text !== ""){
      var elementNew = $(".template li").clone();
      elementNew.prepend(text);
      list.append(elementNew);
    }
    newInput.val("");
  }
});

//rimozione item

$("body").on("click" , ".todo li i" , function(){
  $(this).parent().remove();
})

//item completato
$("body").on("click" , ".todo li" , function(){
  $(this).toggleClass('done');
})

});
