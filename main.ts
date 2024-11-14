input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Straight()
        Turn()
        basic.pause(5000)
    }
})
function Turn () {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P1, 180)
}
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
function Straight () {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
}
