////
// pneumaticcraft 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})
  event.remove({id: 'pneumaticcraft:pressure_chamber/etching_acid'})


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

// Drill Program
  event.shaped('pneumaticcraft:assembly_program_drill',
    [' 2 ','212',' 2 '], {
    1: 'create:mechanical_drill',
    2: 'create:crafting_blueprint'}).id('pnematiccraft:drill_program_custom')


//    
})
//