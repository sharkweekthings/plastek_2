////
// skill tree 
//// renik
//
ServerEvents.recipes(event => {
//

  //ADD

// Wisdom Scroll
  event.shaped('skilltree:wisdom_scroll',
    ['242','313','232'], {
    1: 'minecraft:paper',
    2: 'mysticalagradditions:insanium_gemstone',
    3: 'mob_grinding_utils:solid_xp_baby',
    4: 'mysticalagradditions:nether_star_shard'}).id('skilltree:wisdom_scroll')

// Amnesia Scroll
  event.shaped('skilltree:amnesia_scroll',
    ['323','212','323'], {
    1: 'minecraft:paper',
    2: 'mysticalagradditions:insanium_gemstone',
    3: 'mob_grinding_utils:solid_xp_baby'}).id('skilltree:amnesia_scroll')

//    
})
//