////
// farmers delight 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'farmersdelight:wheat_dough_from_water'})
  event.remove({id: 'farmersdelight:wheat_dough_from_eggs'})
  event.remove({id: 'farmersdelight:skillet'})
  event.remove({id: 'farmersdelight:cooking_pot'})
  event.remove({id: 'farmersdelight:cutting_board'})
  event.remove({id: 'farmersdelight:organic_compost_from_tree_bark'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD


// Alternate Straw
  event.shapeless(Item.of('2x farmersdelight:straw'), ['minecraft:wheat', '#minecraft:soul_fire_base_blocks']).id('farmersdelight:straw_2')

//    
})
//