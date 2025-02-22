////
// mekanism 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'mekanism:factory/basic/smelting'})
  event.remove({id: 'mekanism:factory/basic/enriching'})
  event.remove({id: 'mekanism:factory/basic/crushing'})
  event.remove({id: 'mekanism:factory/basic/compressing'})
  event.remove({id: 'mekanism:factory/basic/combining'})
  event.remove({id: 'mekanism:factory/basic/purifying'})
  event.remove({id: 'mekanism:factory/basic/injecting'})
  event.remove({id: 'mekanism:factory/basic/infusing'})
  event.remove({id: 'mekanism:factory/basic/sawing'})
  event.remove({id: 'mekanism:factory/advanced/smelting'})
  event.remove({id: 'mekanism:factory/advanced/enriching'})
  event.remove({id: 'mekanism:factory/advanced/crushing'})
  event.remove({id: 'mekanism:factory/advanced/compressing'})
  event.remove({id: 'mekanism:factory/advanced/combining'})
  event.remove({id: 'mekanism:factory/advanced/purifying'})
  event.remove({id: 'mekanism:factory/advanced/injecting'})
  event.remove({id: 'mekanism:factory/advanced/infusing'})
  event.remove({id: 'mekanism:factory/advanced/sawing'})
  event.remove({id: 'mekanism:factory/elite/smelting'})
  event.remove({id: 'mekanism:factory/elite/enriching'})
  event.remove({id: 'mekanism:factory/elite/crushing'})
  event.remove({id: 'mekanism:factory/elite/compressing'})
  event.remove({id: 'mekanism:factory/elite/combining'})
  event.remove({id: 'mekanism:factory/elite/purifying'})
  event.remove({id: 'mekanism:factory/elite/injecting'})
  event.remove({id: 'mekanism:factory/elite/infusing'})
  event.remove({id: 'mekanism:factory/elite/sawing'})
  event.remove({id: 'mekanism:factory/ultimate/smelting'})
  event.remove({id: 'mekanism:factory/ultimate/enriching'})
  event.remove({id: 'mekanism:factory/ultimate/crushing'})
  event.remove({id: 'mekanism:factory/ultimate/compressing'})
  event.remove({id: 'mekanism:factory/ultimate/combining'})
  event.remove({id: 'mekanism:factory/ultimate/purifying'})
  event.remove({id: 'mekanism:factory/ultimate/injecting'})
  event.remove({id: 'mekanism:factory/ultimate/infusing'})
  event.remove({id: 'mekanism:factory/ultimate/sawing'})
  event.remove({id: 'mekanism:hdpe_elytra'})
  event.remove({id: 'mekanism:processing/steel/ingot/from_dust_blasting'})
  event.remove({id: 'mekanism:processing/steel/ingot/from_dust_smelting'})
  event.remove({id: 'mekanismgenerators:reactor/controller'})
  event.remove({id: 'mekanismgenerators:reactor/frame'})
  event.remove({id: 'mekanismgenerators:reactor/port'})
  event.remove({id: 'mekanismgenerators:reactor/logic_adapter'})
  event.remove({id: 'mekanism:induction/casing'})
  event.remove({id: 'mekanism:induction/port'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Nutritional Liquifier
  event.shaped('mekanism:nutritional_liquifier',
    ['131','242','151'], {
    1: 'minecraft:redstone',
    2: 'minecraft:bowl',
    3: 'mekanism:basic_control_circuit',
    4: 'industrialforegoing:machine_frame_advanced',
    5: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:nutritional_liquifier')

// Osmium Compressor
  event.shaped('mekanism:osmium_compressor',
    ['131','242','151'], {
    1: 'mekanism:alloy_infused',
    2: 'minecraft:bucket',
    3: 'mekanism:advanced_control_circuit',
    4: 'industrialforegoing:machine_frame_advanced',
    5: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:osmium_compressor')

// Painting Machine
  event.shaped('mekanism:painting_machine',
    ['131','242','151'], {
    1: 'mekanism:alloy_infused',
    2: 'mekanism:dye_base',
    3: 'mekanism:advanced_control_circuit',
    4: 'industrialforegoing:machine_frame_advanced',
    5: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:painting_machine')

// Pressure Disperser
  event.shaped('mekanism:pressure_disperser',
    ['121','232','141'], {
    1: '#forge:ingots/steel',
    2: 'minecraft:iron_bars',
    3: 'industrialforegoing:machine_frame_advanced',
    4: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:pressure_disperser')

// Quantum Entangloporter
  event.shaped('mekanism:quantum_entangloporter',
    ['121','242','135'], {
    1: 'minecraft:redstone',
    2: 'minecraft:iron_bars',
    3: 'mekanism:alloy_infused',
    4: 'industrialforegoing:machine_frame_supreme',
    5: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:quantum_entangloporter')

// Resistive Heater
  event.shaped('mekanism:resistive_heater',
    ['121','242','135'], {
    1: '#forge:ingots/tin',
    2: 'minecraft:redstone',
    3: 'mekanism:energy_tablet',
    4: 'industrialforegoing:machine_frame_advanced',
    5: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:resistive_heater')

// Rotary Condensentrator
  event.shaped('mekanism:rotary_condensentrator',
    ['141','253','161'], {
    1: '#forge:glass/silica',
    2: 'mekanism:basic_chemical_tank',
    3: 'mekanism:basic_fluid_tank',
    4: 'mekanism:basic_control_circuit',
    5: 'industrialforegoing:machine_frame_advanced',
    6: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:rotary_condensentrator')

// Security Desk
  event.shaped('mekanism:security_desk',
    ['121','353','146'], {
    1: '#forge:ingots/steel',
    2: '#forge:glass/silica',
    3: 'mekanism:elite_control_circuit',
    4: 'mekanism:teleportation_core',
    5: 'industrialforegoing:machine_frame_advanced',
    6: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:security_desk')

// Solar Neutron Activator
  event.shaped('mekanism:solar_neutron_activator',
    ['121','353','464'], {
    1: 'mekanism:alloy_reinforced',
    2: 'mekanism:hdpe_sheet',
    3: 'mekanism:elite_control_circuit',
    4: '#forge:ingots/bronze',
    5: 'industrialforegoing:machine_frame_supreme',
    6: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:solar_neutron_activator')

// Super Heating Element
  event.shaped('mekanism:superheating_element',
    ['121','232','141'], {
    1: 'minecraft:redstone',
    2: '#forge:ingots/copper',
    3: 'industrialforegoing:machine_frame_advanced',
    4: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:superheating_element')

// Teleporter
  event.shaped('mekanism:teleporter',
    ['121','232','141'], {
    1: 'mekanism:basic_control_circuit',
    2: 'mekanism:teleportation_core',
    3: 'industrialforegoing:machine_frame_supreme',
    4: 'pneumaticcraft:printed_circuit_board'}).id('mekanism:teleporter')

// Replace Mekanism Quartz Dust with Thermal Quartz Dust
  event.replaceInput({}, 'mekanism:dust_quartz', 'thermal:quartz_dust')    


//    
})
//