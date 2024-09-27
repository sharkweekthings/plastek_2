////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'create:crafting/appliances/dough'})
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

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Item Pipe
  // event.shaped('4x pipez:item_pipe',
  //   [' 2 ','111',' 2 '], {
  //   1: 'prettypipes:pipe',
  //   2: 'minecraft:chest'}).id('pipez:item_pipe')


// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')

// Replace Pam Dough w/ Create Dough
  event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')

//    
})
//