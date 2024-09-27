////
// make netherstone take longer to break
//// renik

BlockEvents.modification(e => {
  e.modify('kubejs:infused_nether_stone', block => {
    block.destroySpeed = 1.5
    block.hasCollision = true
    block.requiresTool = true
  })

  e.modify('kubejs:nether_stone', block => {
    block.destroySpeed = 1.5
    block.hasCollision = true
    block.requiresTool = true
  })

  // e.modify('minecraft:honeycomb_block', block => {
  //   block.destroySpeed = 0.6
  //   block.hasCollision = true
  //   block.requiresTool = true
  // })

////
//fin
////

})