////
// minecraft 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'minecraft:bone_meal'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// 
  event.smelting('minecraft:bone_meal', 'minecraft:bone').id('quark:tweaks/smelting/bone_meal_utility')

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
    ['111','121','111'], {
    1: 'aether:skyroot_planks',
    2: 'farmersdelight:basket',
    3: '#necraft:wooden_slabs'}).id('aether:skyroot_barrel')

//    
})
//