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
      line: "When I grow up, I'm going to Bovine University.",
      whydont: "Ralph Wiggum"
    },
    {
      line: "How can someone with glasses so thick be so stupid.",
      character: "Bart Simpson"
    }
  ];

})();
