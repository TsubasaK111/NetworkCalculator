var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var questionCounter = 0;

function answerToVar (answer, targetVariable, default){
  if(isNaN(answer)){
    if(isNaN(default)){
      console.log("you have to enter a value! :( ");
      exit;
    };
    targetVariable = default;
  };
  targetVariable = answer;
  questionCounter++;
  if(questionCounter=6){
    finalCalculations();
  };
}

var packetInBits = 0;
var dataRateInBits = 0;
rl.question("packet size? (bits)", answerToVar(answer, packetInBits));
rl.question("data rate of the link (bits/sec)?", answerToVar(answer,dataRateInBits));

var lengthInMeters = 0;
var propagationSpeedInMetersPerSeconds = 0;
rl.question("length of the link? (meters)", answerToVar(answer,lengthInMeters));
rl.question ("propagation speed? (m/s)", answerToVar(answer, propagationSpeedInMetersPerSeconds, 2*Math.pow(10,8)));

var queueingDelay = 0;
rl.question("queuing delay? (secs)",answerToVar(answer,queueingDelay,0));

var repeatTimes = 1;
rl.question("Does this link repeat? If so, how many times?",answerToVar(answer,repeatTimes,1));

function finalCalculations(){
  var packetizationDelay = packetInBits/dataRateInBits;
  var propagationDelay = lengthInMeters/propagationSpeedInMetersPerSeconds;
  var endToEndDelay = repeatTimes*(packetizationDelay + propagationDelay + queueingDelay);
  console.log("The End-to-end Delay of this connection is: " & endToEndDelay & " seconds.");
  rl.close();
}
