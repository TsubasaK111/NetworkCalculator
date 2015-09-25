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
          this.newDelayCalculation.packetizationDelay = (this.newDelayCalculation.packetInBits/this.newDelayCalculation.dataRateInBitsPerSec);
          this.newDelayCalculation.propagationDelay = (this.newDelayCalculation.lengthInMeters/this.newDelayCalculation.propagationSpeedInMetersPerSecond);
          this.newDelayCalculation.endToEndDelay = this.newDelayCalculation.repeatTimes*(this.newDelayCalculation.packetizationDelay + this.newDelayCalculation.propagationDelay + this.newDelayCalculation.queueingDelay);
          this.library.push(this.newDelayCalculation);
          console.log(this.newDelayCalculation);
          console.log("The End-to-end Delay of this connection is: " & this.newDelayCalculation.endToEndDelay & " seconds.");
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
    author: 'Tsubasa@FujiProvingGrounds'
  }, {
    name: 'MIST',
    author: 'Tsubasa@FujiProvingGrounds'
  }, {
    name: 'FirstTest',
    author: 'Tsubasa@FujiProvingGrounds',
    packetInBits: '',
    dataRateInBitsPerSec: '',
    packetizationDelay: '',
    lengthInMeters: '',
    propagationSpeedInMetersPerSecond: '',
    propagationDelay: '',
    queueingDelay: '',
    repeatTimes: '',
    endToEndDelay: ''
  }];

})();
