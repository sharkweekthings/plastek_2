////
// mystical agriculture 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'mysticalagriculture:machine_frame'})
  event.remove({id: 'mysticalagriculture:augment/flight'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD



// Rubber Essence 1
  event.shaped('2x industrialforegoing:dryrubber',
    ['   ','111','   '], {
    1: 'mysticalagriculture:rubber_essence'}).id('mysticalagriculture:rubber_essence')

// Rubber Essence 2
  event.shaped('2x thermal:cured_rubber',
    ['111','   ','222'], {
    1: 'mysticalagriculture:rubber_essence',
    2: '#minecraft:coals'}).id('mysticalagriculture:rubber_essence2')

//    
})
//