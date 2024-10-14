////
// create 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'create:crafting/appliances/dough'})
  event.remove({id: 'create:mixing/compat/ae2/fluix_crystal'})
  event.remove({id: 'create:crafting/materials/andesite_alloy'})
  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
  event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
  event.remove({id: 'create:mixing/andesite_alloy'})
  event.remove({id: 'sliceanddice:mixing/fertilizer/from_tree_fertilizer'})
  event.remove({id: 'sliceanddice:mixing/fertilizer/from_tree_fertilizer'})
  event.remove({id: 'sliceanddice:mixing/fertilizer/from_phyto'})
  event.remove({id: 'sliceanddice:mixing/fertilizer/from_compost'})
  event.remove({id: 'create:crafting/kinetics/large_cogwheel_from_little'})
  event.remove({id: 'createaddition:crafting/modular_accumulator_electrum'})
  event.remove({id: 'createaddition:crafting/modular_accumulator_electrum'})
  event.remove({id: 'create:sequenced_assembly/precision_mechanism'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')

// Replace Pam Dough w/ Create Dough
  event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')

//    
})
//