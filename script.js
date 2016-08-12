$(document).ready(function(){
  //get a new quote
  $("#quote-button").click(function(event){ $.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", function(response){
    $("#quote").html("&#34;" + response.quote + "&#34;");
    $("#author").html("&#8211; " + response.author);
    });//end .getJSON
  }); //end quote button click event
  //tweet quote
  $("#tweet-button").click(function(event){
    window.open("http://twitter.com/intent/tweet?text=" + $("#quote").text() + " " + $("#author").text()); //en
  }); //end tweet button click event
}); //end ready
