////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'industrialforegoing:mob_slaughter_factory'})
  event.remove({id: 'industrialforegoing:mob_crusher'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/pink_slime_ingot'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/pity_machine_frame'})
  event.remove({id: 'industrialforegoing:machine_frame_pity'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'})
  event.remove({id: 'industrialforegoing:plastic'})
  event.remove({id: 'industrialforegoing:iron_gear'})
  event.remove({id: 'industrialforegoing:gold_gear'})
  event.remove({id: 'industrialforegoing:diamond_gear'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Item Pipe
  // event.shaped('pipez:item_pipe',
  //   [' 2 ','111',' 2 '], {
  //   1: 'prettypipes:pipe',
  //   2: 'minecraft:chest'}).id('pipez:item_pipe')

// Pink Slime Ball
  // event.shapeless(Item.of('industrialforegoing:pink_slime'), ['minecraft:slime_ball', 'minecraft:pink_dye']).id('industrialforegoing:dissolution_chamber/pink_slime_ball')

//    
})
//