function Straightshort () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 150)
    basic.pause(2000)
}
function left () {
    pins.servoWritePin(AnalogPin.P1, 23)
    pins.servoWritePin(AnalogPin.P2, 23)
    basic.pause(400)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    Straightshort()
    Turn()
    Straightshort()
    left()
    Straight()
})
function Turn () {
    pins.servoWritePin(AnalogPin.P1, 157)
    pins.servoWritePin(AnalogPin.P2, 157)
    basic.pause(400)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
function Straight () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 150)
    basic.pause(6000)
}
basic.pause(60000)
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
