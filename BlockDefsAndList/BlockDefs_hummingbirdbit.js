/* This file contains the implementations of hummingbird bit blocks
 */
function B_HummingbirdBitOutputBase(x, y, outputType, displayName, numberOfPorts, valueKey, minVal, maxVal, displayUnits) {
	B_DeviceWithPortsOutputBase.call(this, x, y, DeviceHummingbirdBit, outputType, displayName, numberOfPorts, valueKey,
		minVal, maxVal, displayUnits);
}
B_HummingbirdBitOutputBase.prototype = Object.create(B_DeviceWithPortsOutputBase.prototype);
B_HummingbirdBitOutputBase.prototype.constructor = B_HummingbirdBitOutputBase;

function B_HMServo(x, y) {
	B_HummingbirdBitOutputBase.call(this, x, y, "servo", "Servo", 4, "angle", 0, 180, "Angle");
}
B_HMServo.prototype = Object.create(B_HummingbirdBitOutputBase.prototype);
B_HMServo.prototype.constructor = B_HMServo;

function B_HMLed(x, y) {
	B_HummingbirdBitOutputBase.call(this, x, y, "led", "LED", 4, "intensity", 0, 100, "Intensity");
}
B_HMLed.prototype = Object.create(B_HummingbirdBitOutputBase.prototype);
B_HMLed.prototype.constructor = B_HMLed;

function B_HMTriLed(x, y) {
	B_DeviceWithPortsTriLed.call(this, x, y, DeviceHummingbirdBit, 2);
}
B_HMTriLed.prototype = Object.create(B_DeviceWithPortsTriLed.prototype);
B_HMTriLed.prototype.constructor = B_HMTriLed;
