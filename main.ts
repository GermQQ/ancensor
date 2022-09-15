input.onButtonPressed(Button.A, function () {
    basic.showString("Piso 2")
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . . . .
            `)
        basic.pause(350)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Elevador")
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(250)
    }
    basic.showString("A o B")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Piso1")
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(350)
    }
})
