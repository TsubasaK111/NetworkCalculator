(function(){
  var app = angular.module("poissonCalculator",[]);

  app.directive('poissonCalculatorTab', function(){
    return{
      restrict:'E',
      templateUrl: 'poisson-calculator-tab.html',
      controller: function(){
        // this.newPoissonCalculation = this.newPoissonCalculation ? this.newPoissonCalculation : {};
        this.newPoissonCalculation = this.newPoissonCalculation || {};
        this.library = defaultLibrary;

        this.addPoissonCalculation = function(){
          this.newPoissonCalculation.dateCreated = Date.now();
          this.library.push(this.newPoissonCalculation);
          console.log(this.newPoissonCalculation);
          console.log("The Poisson fish sakana of this model is: ");
          console.log(this.library);

          this.newPoissonCalculation = {};
        };

        this.newPoissonCalculationIsEmpty = function(){
          if(this.newPoissonCalculation.name === undefined && this.newPoissonCalculation.author === undefined){
            return true;
          } else {
            return false;
          };
        };
      },
      controllerAs: "pssnCalcCtrl"
    };
  });

  var defaultLibrary = [{
    name:'SMEAC',
    author: 'Tsubasa@FujiProvingGrounds'
  }, {
    name: 'MIST',
    author: 'Tsubasa@FujiProvingGrounds'
  }, {
    name: 'FirstTest',
    author: 'Tsubasa@FujiProvingGrounds',
  }];

})();
