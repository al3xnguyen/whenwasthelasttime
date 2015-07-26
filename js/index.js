(function() {

  var app = angular.module('whenWas', []);

  app.controller('randomQuote', function(){
    this.info = quotes[Math.floor(Math.random()*quotes.length)];
    this.pick = function(){
      this.info = quotes[Math.floor(Math.random()*quotes.length)];
    };
  });

  var quotes = [
    {
      line: "the last time you went on holiday?",
      whydont: " Why dont you go to the Bahamas?"
    },
    {
      line: "the last time you called your mum?",
      whydont: "Buy a book on Amazon"
    },
    {
      line: "the last time you had a burger?",
      whydont: "Go here to blah blahd "
    }
  ];

})();
