////
// thermal 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'thermal:machine_frame'})
  event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
  event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
  event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
  event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
  event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
  event.remove({id: 'thermal:fire_charge/flux_ingot_fire_charge_from_dust'})
  event.remove({id: 'thermal:earth_charge/emerald_dust_from_emerald'})
  event.remove({id: 'thermal:earth_charge/ender_pearl_dust_from_ender_pearl'})
  event.remove({id: 'thermal:earth_charge/cinnabar_dust_from_cinnabar'})
  event.remove({id: 'thermal:earth_charge/niter_dust_from_niter'})
  event.remove({id: 'thermal:earth_charge/lapis_dust_from_lapis'})
  event.remove({id: 'thermal:earth_charge/sulfur_dust_from_sulfur'})
  event.remove({id: 'thermal:earth_charge/apatite_dust_from_apatite'})
  event.remove({id: 'thermal:earth_charge/quartz_dust_from_quartz'})
  event.remove({id: 'thermal:earth_charge/diamond_dust_from_diamond'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_blizz_rod'})
  event.remove({id: 'thermal:blizz_powder'})
  event.remove({id: 'thermal:phytogro_8'})
  event.remove({id: 'thermal:phytogro_2'})
  event.remove({id: 'thermal:phytogro_4'})
  event.remove({id: 'thermal:machines/press/press_netherite_ingot_to_plate'})
  event.remove({id: 'thermal:machines/press/press_tin_ingot_to_plate'})
  event.remove({id: 'thermal:machines/press/press_nickel_ingot_to_plate'})
  event.remove({id: 'thermal:machines/press/press_enderium_ingot_to_plate'})
  event.remove({id: 'thermal:parts/netherite_gear'})
  event.remove({id: 'thermal:parts/emerald_gear'})
  event.remove({id: 'thermal:parts/quartz_gear'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Phytogro
  event.shapeless(Item.of('5x thermal:phytogro'), ['farmersdelight:organic_compost', '#forge:dusts/niter', '#forge:dusts/apatite', 'minecraft:bone_meal']).id('thermal:phytogro_5')

// Replace Thermal Machine Frame with Industrial Foregoing
  event.replaceInput({}, 'thermal:machine_frame', 'industrialforegoing:machine_frame_advanced')


//    
})
//