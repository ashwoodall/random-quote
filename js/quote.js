var quote = "";
var author = "";

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "E5JvIu765zmshDjuCdXkIuZ312pJp1BDm0Ejsnke4LuBVu8pON"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    success: function(response) {
      var respond = JSON.parse(response);
      quote = respond.quote;
      author = respond.author;
      $(".quoteHere").text(quote);
      $(".author").text(author);
    }
  });
}

$(document).ready(function(){
  $(".getQuote").click(function() {
    getQuote();
  });

  getQuote();
});


