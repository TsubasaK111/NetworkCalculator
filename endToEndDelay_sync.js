
var packetInBits = window.prompt("packet size? (bits)") * Math.pow(10,3);
var dataRateInBitsPerSec = window.prompt("data rate of the link (megabits/sec)?") * Math.pow(10,6);
var packetizationDelay = (packetInBits/dataRateInBitsPerSec);

var lengthInMeters = window.prompt("length of the link? (meters)");
var propagationSpeedInMetersPerSecond = window.prompt("propagation speed? (m/s)", 2 * Math.pow(10,8) );
var propagationDelay = lengthInMeters/propagationSpeedInMetersPerSecond;

var queueingDelay = window.prompt("queuing delay? (secs)",0);
var repeatTimes = window.prompt("Does this link repeat? If so, how many times?",1);

var endToEndDelay = repeatTimes*(packetizationDelay + propagationDelay + queueingDelay);

console.log("The End-to-end Delay of this connection is: " & endToEndDelay & " seconds.");
