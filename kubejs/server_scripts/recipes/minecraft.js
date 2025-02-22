////
// minecraft 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'minecraft:bone_meal'})
  event.remove({id: 'tconstruct:common/basalt_blast_furnace'})
  event.remove({id: 'quark:building/crafting/furnaces/blackstone_blast_furnace'})
  event.remove({id: 'quark:building/crafting/furnaces/deepslate_blast_furnace'})
  event.remove([{ type: 'minecraft:smelting', output: '#p2:ingots' }, { type: 'minecraft:blasting', output: '#p2:ingots' }])
  event.remove({id: 'hyperbox:hyperbox'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Bone to Bone Meal Smelting
  event.smelting('minecraft:bone_meal', 'minecraft:bone').id('quark:tweaks/smelting/bone_meal_utility')

// Copper Ore to Ingot
  event.blasting('minecraft:copper_ingot', 'minecraft:copper_ore').id('p2:copper_ore_to_ingot')

// Deepslate Copper Ore to Ingot
  event.blasting('minecraft:copper_ingot', 'minecraft:deepslate_copper_ore').id('p2:deepslate_copper_ore_to_ingot')

// Raw Copper to Ingot
  event.blasting('minecraft:copper_ingot', 'minecraft:raw_copper').id('p2:raw_copper_to_ingot')

// Blast Furnace
  event.shaped('minecraft:blast_furnace',
    ['323','313','333'], {
    1: 'minecraft:furnace',
    2: 'natprog:bone_shard',
    3: 'minecraft:smooth_stone'}).id('minecraft:blast_furnace')

// Chest w/ Basket
  event.shaped('minecraft:chest',
    ['111','121','111'], {
    1: '#minecraft:planks',
    2: 'farmersdelight:basket'}).id('minecraft:chest')

// Chest w/ Basket
  event.shaped('4x minecraft:chest',
    ['111','121','111'], {
    1: '#minecraft:logs',
    2: 'farmersdelight:basket'}).id('quark:tweaks/crafting/utility/chests/mixed_chest_wood_but_without_exclusions')

// Barrel w/ Basket
  event.shaped('minecraft:barrel',
    ['131','121','131'], {
    1: '#minecraft:planks',
    2: 'farmersdelight:basket',
    3: '#minecraft:wooden_slabs'}).id('minecraft:barrel')
    
// Chest w/ Basket - Skyroot
  event.shaped('minecraft:chest',
    ['111','121','111'], {
    1: 'aether:skyroot_planks',
    2: 'farmersdelight:basket'}).id('aether:skyroot_chest')
    
// Chest w/ Basket - Skyroot
  event.shaped('minecraft:barrel',
    ['111','121','131'], {
    1: 'aether:skyroot_planks',
    2: 'farmersdelight:basket',
    3: '#minecraft:wooden_slabs'}).id('aether:skyroot_barrel')
    
// Custom Chest
  event.shaped('2x minecraft:chest',
    ['1 1','121','111'], {
    1: 'mysticalagriculture:wood_essence',
    2: 'create:andesite_casing'}).id('minecraft:chest_custom')
    
// Custom Barrel
  event.shaped('2x minecraft:barrel',
    ['111','121','1 1'], {
    1: 'mysticalagriculture:wood_essence',
    2: 'create:andesite_casing'}).id('minecraft:barrel_custom')

//    
})
//