////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  // event.remove({id: 'blue_skies:bone_meal_from_azulfo'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// 
  event.smelting('2x minecraft:bone_meal', 'blue_skies:azulfo_horn').id('blue_skies:bone_meal_from_azulfo')

// Blue Bright Chest w/ Basket
  event.shaped('blue_skies:bluebright_chest',
    ['111','121','111'], {
    1: 'blue_skies:bluebright_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:bluebright_chest')

// Starlit Chest w/ Basket
  event.shaped('blue_skies:starlit_chest',
    ['111','121','111'], {
    1: 'blue_skies:starlit_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:starlit_chest')

// Frostbright Chest w/ Basket
  event.shaped('blue_skies:frostbright_chest',
    ['111','121','111'], {
    1: 'blue_skies:frostbright_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:frostbright_chest')

// Comet Chest w/ Basket
  event.shaped('blue_skies:comet_chest',
    ['111','121','111'], {
    1: 'blue_skies:comet_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:comet_chest')

// Lunar Chest w/ Basket
  event.shaped('blue_skies:lunar_chest',
    ['111','121','111'], {
    1: 'blue_skies:lunar_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:lunar_chest')

// Dusk Chest w/ Basket
  event.shaped('blue_skies:dusk_chest',
    ['111','121','111'], {
    1: 'blue_skies:dusk_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:dusk_chest')

// Maple Chest w/ Basket
  event.shaped('blue_skies:maple_chest',
    ['111','121','111'], {
    1: 'blue_skies:maple_planks',
    2: 'farmersdelight:basket'}).id('blue_skies:maple_chest')


//    
})
//