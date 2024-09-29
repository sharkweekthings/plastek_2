////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  // event.remove({id: 'cataclysm:bone_meal'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Wisdom Scroll
  event.shaped('skilltree:wisdom_scroll',
    ['232','313','232'], {
    1: 'minecraft:paper',
    2: 'mysticalagradditions:insanium_gemstone',
    3: 'mob_grinding_utils:solid_xp_baby'}).id('skilltree:wisdom_scroll')

//    
})
//