////
// pneumaticcraft 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})


//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Capacitor
  event.shaped('pneumaticcraft:capacitor',
    [' 1 ','121','333'], {
    1: 'kubejs:blue_paste',
    2: 'pneumaticcraft:plastic',
    3: 'createaddition:electrum_wire'}).id('pneumaticcraft:pressure_chamber/capacitor')

// Capacitor
  event.shaped('pneumaticcraft:transistor',
    [' 1 ','121','333'], {
    1: 'powah:dielectric_paste',
    2: 'pneumaticcraft:plastic',
    3: 'createaddition:electrum_wire'}).id('pneumaticcraft:pressure_chamber/transistor')


//    
})
//