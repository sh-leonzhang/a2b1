input.onButtonPressed(Button.A, function () {
    if (数 % 2 == 0) {
        basic.clearScreen()
        basic.showString("" + 数 + "-" + "2" + "=" + (数 - 2))
    } else {
        if (数 % 2 == 1) {
            basic.clearScreen()
            basic.showString("" + 数 + "-" + "1" + "=" + (数 - 1))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    数 = randint(0, 100)
    while (true) {
        basic.showNumber(数)
    }
})
let 数 = 0
basic.showIcon(IconNames.Happy)
