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

// Essence to Tar
  event.shaped('2x thermal:tar',
    ['   ','121','212'], {
    1: 'mysticalagriculture:rubber_essence',
    2: 'mysticalagriculture:fire_essence'}).id('mysticalagriculture:tar_ps')

// Essence to Powdered Obsidian
  event.shaped('2x create:powdered_obsidian',
    ['   ','121','212'], {
    1: 'mysticalagriculture:obsidian_essence',
    2: 'mysticalagriculture:fire_essence'}).id('mysticalagriculture:powdered_obsidian_ps')

// Essence to Andesite Alloy
  event.shaped('2x create:andesite_alloy',
    ['212','121','212'], {
    1: 'mysticalagriculture:stone_essence',
    2: 'mysticalagriculture:iron_essence'}).id('mysticalagriculture:andesite_alloy_ps')

//    
})
//