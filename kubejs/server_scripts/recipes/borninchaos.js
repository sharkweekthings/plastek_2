////
// pipez 
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

// 
  event.smelting('3x minecraft:bone_meal', 'born_in_chaos_v1:fused_bone').id('born_in_chaos_v1:fused_bone_k')

//
  event.smelting('5x minecraft:bone_meal', 'born_in_chaos_v1:nightmare_stalker_skull').id('born_in_chaos_v1:nightmarestalkerskullk')

//
  event.smelting('6x minecraft:bone_meal', 'born_in_chaos_v1:shattered_skull').id('born_in_chaos_v1:shattered_skull_k_1')

//    
})
//