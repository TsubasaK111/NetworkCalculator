(function(){
  var app = angular.module("delayCalculator",[]);

  app.directive('delayCalculatorTab', function(){
    return{
      restrict:'E',
      templateUrl: 'delay-calculator-tab.html',
      controller: function(){
        this.newDelayCalculation = {};
        this.library = defaultLibrary;

        this.addDelayCalculation = function(){
          this.newDelayCalculation.dateCreated = Date.now();
          this.library.push(this.newDelayCalculation);
          console.log(this.newDelayCalculation);
          console.log(this.library);
          this.newDelayCalculation = {};
        };

        this.newDelayCalculationIsEmpty = function(){
          if(this.newDelayCalculation.name === undefined && this.newDelayCalculation.author === undefined){
            return true;
          } else {
            return false;
          };
        };
      },
      controllerAs: "dlyCalcCtrl"
    };
  });

  var defaultLibrary = [{
    name:'SMEAC',
    chosen: false,
    author: 'Tsubasa@OpenAar'
  }, {
    name: 'MIST',
    chosen: false,
    author: 'Tsubasa@OpenAar'
  }, {
    name: 'METT-TCR',
    chosen: false,
    author: 'Tsubasa@OpenAar'
  }];

})();
