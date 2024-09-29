////
// born in chaos 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'born_in_chaos_v1:fused_bone_k'})
  event.remove({id: 'born_in_chaos_v1:nightmarestalkerskullk'})
  event.remove({id: 'born_in_chaos_v1:shattered_skull_k_1'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

//  Fused Bone to BOne Meal
  event.smelting('3x minecraft:bone_meal', 'born_in_chaos_v1:fused_bone').id('born_in_chaos_v1:fused_bone_k')

// Stalker Skull to Bone Meal
  event.smelting('5x minecraft:bone_meal', 'born_in_chaos_v1:nightmare_stalker_skull').id('born_in_chaos_v1:nightmarestalkerskullk')

// Shattered Skull to Bone Meal
  event.smelting('6x minecraft:bone_meal', 'born_in_chaos_v1:shattered_skull').id('born_in_chaos_v1:shattered_skull_k_1')

//    
})
//