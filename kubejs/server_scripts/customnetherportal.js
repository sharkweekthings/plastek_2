// Custom Nether Portal Script
// author: LadyLexxie
// Quentin765 for the edits to this, which made it possible for the Nether Portal to be about any shape/size that the vanilla portal can be.

let PORTAL_HEIGHT = 32
let PORTAL_WIDTH = 32
let PORTAL_FRAME_BLOCK = 'kubejs:infused_nether_stone'

let validateAndCreate = (fireBlock) => {
  if (!fireBlock.down.equals(PORTAL_FRAME_BLOCK)) return false
  let corner, dir
  let found = false
  // find bottom corner along N/S
  for (let i = 1; i <= PORTAL_WIDTH; i++) {
    let b = fireBlock.offset(Direction.NORTH, i)
    if (b.id.equals('minecraft:air') && b.down.id.equals(PORTAL_FRAME_BLOCK)) continue
    else if (b.id.equals(PORTAL_FRAME_BLOCK)) {
      corner = b.down
      found = true
      dir = Direction.SOUTH
    }
  }
  if (!found) {
    // find bottom corner along W/E
    for (let i = 1; i <= PORTAL_WIDTH; i++) {
      let b = fireBlock.offset(Direction.EAST, i)
      if (b.id.equals('minecraft:air') && b.down.id.equals(PORTAL_FRAME_BLOCK)) continue
      else if (b.id.equals(PORTAL_FRAME_BLOCK)) {
        corner = b.down
        found = true
        dir = Direction.WEST
      }
    }
  }

  if (!found && dir == undefined) return false


  const adjacent = corner.offset(dir)

  //oooo
  //o  o
  //BA o
  //ba o
  //cdoo

  //c is corner
  //d is adjacent
  //b is corner.offset(Direction.UP, distance)      when distance == 1
  //a is adjacent.offset(Direction.UP, distance)   when distance == 1
  //B is corner.offset(Direction.UP, distance)      when distance == 2
  //A is adjacent.offset(Direction.UP, distance)   when distance == 2


  // we will look upward at u and a making sure that u is the PORTAL_FRAME_BLOCK and a is "minecraft:air"

  //find the height by step by step looking up until it must be the top of the portal
  let distance = 1
  while (
    adjacent.offset(Direction.UP, distance).id.equals("minecraft:air") &&
    corner.offset(Direction.UP, distance).id.equals(PORTAL_FRAME_BLOCK) &&
    distance < PORTAL_HEIGHT + 1 // plus one so if it is over and not at the max
  ) {
    distance++
  }

  if (distance > PORTAL_HEIGHT) return false // if it is too tall give up

  const portalHeight = distance-1


  //oooo
  //o  o
  //o  o
  //daAo
  //cbBo

  //c is corner
  //d is corner.up
  //b is corner.offset(dir, distance)      when distance == 1
  //a is corner.up.offset(dir, distance)   when distance == 1
  //B is corner.offset(dir, distance)      when distance == 2
  //A is corner.up.offset(dir, distance)   when distance == 2


  // we will look upward at u and a making sure that u is the PORTAL_FRAME_BLOCK and a is "minecraft:air"

  //find the height by step by step looking up until it must be the top of the portal
  distance = 1
  while (
    corner.up.offset(dir, distance).id.equals("minecraft:air") &&
    corner.offset(dir, distance).id.equals(PORTAL_FRAME_BLOCK) &&
    distance < PORTAL_WIDTH + 1 // plus one so if it is over and not at the max
  ) {
    distance++
  }

  if (distance > PORTAL_WIDTH) return false // if it is too tall give up

  const portalWidth = distance-1



  if (portalWidth < 2 || portalHeight < 3) return



  // validate portal frame and air blocks
  let portalBlocks = []
  for (let i = 0; i <= portalWidth + 1; i++) {
    for (let j = 0; j <= portalHeight + 1; j++) {
      let b = corner.offset(dir, i).offset(Direction.UP, j)

      // air
      if (i >= 1 && i <= portalWidth && j >= 1 && j <= portalHeight) {
        if (!b.id.equals('minecraft:air')) return false
        else { portalBlocks.push(b) }
      }

      // obsidian
      else if (
        (i == 0 && (j >= 1 && j <= portalHeight)) ||
        (i == portalWidth + 1 && (j >= 1 && j <= portalHeight)) ||
        (j == 0 && (i >= 1 && i <= portalWidth)) ||
        (j == portalHeight + 1 && (i >= 1 && i <= portalWidth))
      ) { if (!b.id.equals(PORTAL_FRAME_BLOCK)) return false }
    }
  }

  // place portal blocks in the air blocks
  portalBlocks.forEach(b => {
    b.set('minecraft:nether_portal', { axis: dir == Direction.WEST ? 'x' : 'z' })
  })

  return true
}

BlockEvents.placed(e => {
  if (e.block.id.equals('minecraft:fire')) {
    // portalHeight = portalHeight < 1 ? 1 : portalHeight
    // portalWidth = portalWidth < 1 ? 1 : portalWidth

    e.block.set('minecraft:air')

    let valid = validateAndCreate(e.block)

    if (!valid) e.block.set('minecraft:fire')
  }
})