(function(){

  var app = angular.module('newCalc', ["delayCalculator"]);

// Lessons Learned:
// 1. dependencies are module names, NOT filenames. (do not append .js at the end!)
// 2. objects need to be placed in the module that uses the object.
// 3. use Angular.js (not minified) for human readable error reports.

  app.controller("CalculatorController", function() {
    this.calculator = defaultCalculator;
  });

  app.controller("TabController", function() {
    this.tab = 1;
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('TestController', function(){
      this.whatTimeIsIt = Date.now().toString();
      this.boolean = true;

      alert('Great Tomfooleries! testCtrl is working!');
      alert('time now is: ' & this.whatTimeIsIt);
      console.log('time now is:' & this.whatTimeIsIt);
  });

  var defaultCalculator = {
    Plan:{},
    Execute: {},
    Assess: {},
  };

})();
