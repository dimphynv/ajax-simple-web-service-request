$(document).ready(function(){

  $('#newQuote').click(function() {
    location.reload();
});

var quotes = "";
let result = $(".quoteField");

getData();
result.text(quotes);


function getData(){
  $.ajax({
      url : "https://thatsthespir.it/api",
      type: "GET",
      dataType : "json",
      timeout: 5000,
      success : function(data) {
          //console.log(quote);

        saveData(data);

      },

      fail: function(xhr, textStatus, errorThrown){

        alert("request failed");
      }

    });

    function saveData(data){
    quotes = data.quote;
    //console.log(quotes);
    result.text("\""+quotes+"\"");
    };


};

});
