let hhhhh: Sprite = null
let main_character = hhhhh
controller.moveSprite(hhhhh, 100, 100)
hhhhh = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . 3 . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . 3 . . . . . . . . . . . . . 
    . 3 . . . . . . . . . . . . . . 
    . 3 . . . . . . . . . . . . . . 
    . 3 3 3 . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    `, SpriteKind.Player)
hhhhh.setPosition(28, 18)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite.x = 8
let eagle_test = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . 3 3 . . . . . 
    . . . . 3 3 3 . . 3 . 3 3 . . . 
    . . . . 3 3 3 3 . . . . 3 . . . 
    . . . 3 3 . . . 3 . . . . 3 . . 
    . 3 3 3 3 . . . 3 . . . . 3 . . 
    . 3 3 . 3 3 3 . . 3 . . . 3 . . 
    . . 3 3 . . 3 3 . . . . . 3 . . 
    . . 3 3 3 3 . . 3 . . . 3 3 . . 
    . . 3 . . 3 3 3 3 3 3 3 . . . . 
    . . 3 . . 3 . 3 3 3 . . . . . . 
    . . 3 3 3 3 3 3 . 3 . . . . . . 
    . . . . 3 3 3 . 3 . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(4)
animation.runImageAnimation(
eagle_test,
assets.animation`blooket`,
200,
true
)
animation.runImageAnimation(
mySprite,
assets.animation`home`,
150,
true
)
animation.runImageAnimation(
hhhhh,
assets.animation`help me`,
200,
true
)
forever(function () {
    controller.moveSprite(hhhhh, 100, 100)
})
