input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
basic.forever(function () {
    for (let yvalue = 0; yvalue <= 4; yvalue++) {
        for (let xvalue = 0; xvalue <= 4; xvalue++) {
            led.plot(xvalue, yvalue)
            basic.pause(100)
            led.unplot(xvalue, yvalue)
            basic.pause(100)
        }
    }
})
