input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        # . . # .
        `)
})
