input.onButtonPressed(Button.A, function () {
    if (direction == 0) {
        item.change(LedSpriteProperty.X, 1)
    } else {
        item.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (direction == 0) {
        direction = 1
    } else {
        direction = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (direction == 0) {
        item.change(LedSpriteProperty.Y, 1)
    } else {
        item.change(LedSpriteProperty.Y, -1)
    }
})
let item: game.LedSprite = null
let direction = 0
direction = 0
item = game.createSprite(0, 0)
