////
// plastek 2 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'biomancy:bio_forging/fertilizer'})

//
})
//

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

// Infused Nether Stone
  event.shaped('kubejs:infused_nether_stone',
    [' 2 ','212',' 2 '], {
    1: 'kubejs:nether_stone',
    2: 'mob_grinding_utils:solid_xp_baby'}).id('p2:infused_nether_stone')

// Wire Mould
  event.shaped('kubejs:wire_mould',
    [' 1 ','121',' 1 '], {
    1: 'pneumaticcraft:ingot_iron_compressed',
    2: '#forge:wires'}).id('p2:wire_mould')


// Box of Supreme Machine Frame Parts
  event.shapeless(Item.of('kubejs:box_of_supreme_machine_frame_parts'), ['thermal:diamond_gear', 'create:iron_sheet', 'create:iron_sheet', 'create:sturdy_sheet', 'create:sturdy_sheet', 'pneumaticcraft:compressed_iron_gear', 'industrialforegoing:machine_frame_advanced', 'kubejs:empty_box']).id('p2:box_of_supreme_machine_frame_parts')

// Box of Control Chip Parts
  event.shapeless(Item.of('kubejs:box_of_control_chip_parts'), ['create:precision_mechanism', 'create:electron_tube', 'create:electron_tube', 'thermal:copper_gear', 'kubejs:empty_box']).id('p2:box_of_control_chip_parts')

// Box of Bow Grip Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_bow_grip_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:bow_grip', 'kubejs:empty_box']).id('p2:box_of_bow_grip_steel_cast_parts')
  
// Box of Bow Limb Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_bow_limb_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:bow_limb', 'kubejs:empty_box']).id('p2:box_of_bow_limb_steel_cast_parts')
  
// Box of Broad Axe Head Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_broad_axe_head_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:broad_axe_head', 'kubejs:empty_box']).id('p2:box_of_broad_axe_head_steel_cast_parts')
  
// Box of Broad Blade Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_broad_blade_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:broad_blade', 'kubejs:empty_box']).id('p2:box_of_broad_blade_steel_cast_parts')
  
// Box of Coin Steel Cast parts
  event.shapeless(Item.of('kubejs:box_of_coin_steel_cast_parts'), ['kubejs:blank_steel_cast', '#forge:coins', 'kubejs:empty_box']).id('p2:box_of_coin_steel_cast_parts')
  
// Box of Gear Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_gear_steel_cast_parts'), ['kubejs:blank_steel_cast', '#forge:gears', 'kubejs:empty_box']).id('p2:box_of_gear_steel_cast_parts')
  
// Box of Gem Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_gem_steel_cast_parts'), ['kubejs:blank_steel_cast', '#forge:gems', 'kubejs:empty_box']).id('p2:box_of_gem_steel_cast_parts')
  
// Box of Hammer Head Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_hammer_head_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:hammer_head', 'kubejs:empty_box']).id('p2:box_of_hammer_head_steel_cast_parts')
  
// Box of Large Plate Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_large_plate_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:large_plate', 'kubejs:empty_box']).id('p2:box_of_large_plate_steel_cast_parts')
  
// Box of Pick Head Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_pick_head_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:pick_head', 'kubejs:empty_box']).id('p2:box_of_pick_head_steel_cast_parts')
  
// Box of Repair Kit Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_repair_kit_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:repair_kit', 'kubejs:empty_box']).id('p2:box_of_repair_kit_steel_cast_parts')
  
// Box of Rod Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_rod_steel_cast_parts'), ['kubejs:blank_steel_cast', '#forge:rods', 'kubejs:empty_box']).id('p2:box_of_rod_steel_cast_parts')
  
// Box of Round Plate Steel Cast Parts
  // event.shapeless(Item.of('kubejs:box_of_round_plate_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:', 'kubejs:empty_box']).id('p2:box_of_round_plate_steel_cast_parts')
  
// Box of Small Axe Head Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_small_axe_head_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:small_axe_head', 'kubejs:empty_box']).id('p2:box_of_small_axe_head_steel_cast_parts')
  
// Box of Small Blade Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_small_blade_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:small_blade', 'kubejs:empty_box']).id('p2:box_of_small_blade_steel_cast_parts')
  
// Box of Tool Binding Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_tool_binding_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:tool_binding', 'kubejs:empty_box']).id('p2:box_of_tool_binding_steel_cast_parts')
  
// Box of Tool Handle Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_tool_handle_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:tool_handle', 'kubejs:empty_box']).id('p2:box_of_tool_handle_steel_cast_parts')
  
// Box of Chestplate Plating Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_chestplate_plating_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:chestplate_plating', 'kubejs:empty_box']).id('p2:box_of_chestplate_plating_steel_cast_parts')
  
// Box of Helmet Plating Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_helmet_plating_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:helmet_plating', 'kubejs:empty_box']).id('p2:box_of_helmet_plating_steel_cast_parts')
  
// Box of Leggings Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_leggings_plating_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:leggings_plating', 'kubejs:empty_box']).id('p2:box_of_leggings_plating_steel_cast_parts')
  
// Box of Boots Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_boots_plating_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:boots_plating', 'kubejs:empty_box']).id('p2:box_of_boots_plating_steel_cast_parts')
  
// Box of Maille Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_maille_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:maille', 'kubejs:empty_box']).id('p2:box_of_maille_steel_cast_parts')
  
// Box of Tough Handle Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_tough_handle_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:tough_handle', 'kubejs:empty_box']).id('p2:box_of_tough_handle_steel_cast_parts')
  
// Box of Wire Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_wire_steel_cast_parts'), ['kubejs:blank_steel_cast', '#forge:wires', 'kubejs:empty_box']).id('p2:box_of_wire_steel_cast_parts')
  
// Box of Adze Head Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_adze_head_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:adze_head', 'kubejs:empty_box']).id('p2:box_of_adze_head_steel_cast_parts')
  
// Box of Tough Binding Steel Cast Parts
  event.shapeless(Item.of('kubejs:box_of_tough_binding_steel_cast_parts'), ['kubejs:blank_steel_cast', 'tconstruct:tough_binding', 'kubejs:empty_box']).id('p2:box_of_tough_binding_steel_cast_parts')
  
//    
})
//