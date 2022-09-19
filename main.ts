input.onButtonPressed(Button.A, function () {
    No += 0.5
    basic.showNumber(No)
})
input.onGesture(Gesture.TiltLeft, function () {
    Pic.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    No += -0.5
    basic.showNumber(No)
})
input.onGesture(Gesture.TiltRight, function () {
    Pic.change(LedSpriteProperty.X, 1)
})
let Pic: game.LedSprite = null
let No = 0
basic.showIcon(IconNames.Giraffe)
No = 0
basic.showNumber(0)
Pic = game.createSprite(2, 2)
basic.forever(function () {
	
})
