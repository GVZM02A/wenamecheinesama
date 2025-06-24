let contar = 0
basic.pause(400)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 150)
    contar += 1
    if (contar == 8) {
        robotbit.MotorStop(robotbit.Motors.M1A)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        robotbit.Servo(robotbit.Servos.S8, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S8, 90)
        basic.pause(400)
    }
})
