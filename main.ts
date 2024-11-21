function left () {
    pins.servoWritePin(AnalogPin.P1, 23)
    pins.servoWritePin(AnalogPin.P2, 23)
    basic.pause(400)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Straight()
        Turn()
    }
    for (let index = 0; index < 4; index++) {
        Straight()
        left()
    }
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
    pins.servoWritePin(AnalogPin.P1, 54)
    pins.servoWritePin(AnalogPin.P2, 120)
    basic.pause(8000)
}
basic.pause(60000)
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
