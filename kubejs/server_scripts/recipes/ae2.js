////
// ae2 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'ae2:transform/fluix_crystals'})
  event.remove({id: 'ae2:transform/fluix_crystal'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Sky Stone Chest w/ Basket
  event.shaped('ae2:sky_stone_chest',
    ['111','121','111'], {
    1: 'ae2:sky_stone_block',
    2: 'farmersdelight:basket'}).id('ae2:misc/chests_sky_stone')

// Sky Stone Block Chest w/ Basket
  event.shaped('ae2:sky_stone_chest',
    ['111','121','111'], {
    1: 'ae2:smooth_sky_stone_block',
    2: 'farmersdelight:basket'}).id('ae2:misc/chests_smooth_sky_stone')

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal')

//    
})
//