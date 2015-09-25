(function(){

  var app = angular.module('newCalc', ["delayCalculator"]);

// Lessons Learned:
// 1. dependencies are module names, NOT filenames. (do not append .js at the end!)
// 2. objects need to be placed in the module that uses the object.
// 3. use Angular.js (not minified) for human readable error reports.
// 4. Apply ng-app="modulename" to html element, NOT head element. If in head element, ang will not load AT ALL.

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
      alert('Great Tomfooleries! testCtrl is working!');
      console.log('time now is:' & this.whatTimeIsIt);
  });

  var defaultCalculator = {
    Plan:{},
    Execute: {},
    Assess: {},
  };

})();
