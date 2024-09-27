////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //ADD

// Green Paste
  event.shaped('kubejs:green_paste',
    [' 2 ','212',' 2 '], {
    1: 'thermal:emerald_dust',
    2: 'minecraft:green_dye'}).id('p2:green_paste')

// Blue Paste
  event.shaped('kubejs:blue_paste',
    ['333','343','121'], {
    1: 'minecraft:bone_meal',
    2: 'thermal:rosin',
    3: 'minecraft:clay_ball',
    4: 'thermal:blizz_rod'}).id('p2:blue_paste')

// Wooden Gear
  event.shaped('kubejs:wooden_gear',
    [' 1 ','1 1',' 1 '], {
    1: 'minecraft:stick'}).id('p2:wooden_gear')

// Stone Gear
  event.shaped('kubejs:stone_gear',
    [' 2 ','212',' 2 '], {
    1: 'kubejs:wooden_gear',
    2: 'minecraft:stone'}).id('p2:stone_gear')

// Empty Box
  event.shaped('kubejs:empty_box',
    ['111','1 1','111'], {
    1: '#forge:dusts/wood'}).id('p2:empty_box')

// Empty Box
  event.shaped('kubejs:enchanted_feather',
    [' 1 ','121',' 1 '], {
    1: 'botania:dragonstone',
    2: 'minecraft:feather'}).id('p2:enchanted_feather')

// Infused Nether Stone
  event.shaped('kubejs:infused_nether_stone',
    [' 2 ','212',' 2 '], {
    1: 'kubejs:nether_stone',
    2: 'mob_grinding_utils:solid_xp_baby'}).id('p2:infused_nether_stone')


// Box of Supreme Machine Frame Parts
  event.shapeless(Item.of('kubejs:box_of_supreme_machine_frame_parts'), ['thermal:diamond_gear', 'create:iron_sheet', 'create:iron_sheet', 'create:sturdy_sheet', 'create:sturdy_sheet', 'pneumaticcraft:compressed_iron_gear', 'industrialforegoing:machine_frame_advanced', 'kubejs:empty_box']).id('p2:box_of_supreme_machine_frame_parts')


//    
})
//