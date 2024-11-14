input.onButtonPressed(Button.A, function () {
    Straight()
    Turn()
})
function Turn () {
    pins.servoWritePin(AnalogPin.P1, 155)
    pins.servoWritePin(AnalogPin.P2, 155)
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
