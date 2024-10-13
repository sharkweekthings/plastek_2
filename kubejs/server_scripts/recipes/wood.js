////
// various wood stuff
//// renik

//
ServerEvents.recipes(event => {
//

event.shapeless(Item.of('quark:stripped_ancient_log'), ['#natprog:saw', 'quark:ancient_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('quark:ancient_planks', 4), ['#natprog:saw', 'quark:stripped_ancient_log']).id('quark:world/crafting/woodsets/ancient/planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('quark:ancient_planks', 4), ['#natprog:saw', 'quark:stripped_ancient_wood']).id('quark:world/crafting/woodsets/ancient/saw/stripped_ancient_wood_to_ancient_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('quark:stripped_azalea_log'), ['#natprog:saw', 'quark:azalea_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('quark:azalea_planks', 4), ['#natprog:saw', 'quark:stripped_azalea_log']).id('quark:world/crafting/woodsets/azalea/planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('quark:azalea_planks', 4), ['#natprog:saw', 'quark:stripped_azalea_wood']).id('quark:world/crafting/woodsets/azalea/saw/stripped_azalea_wood_to_azalea_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('quark:stripped_blossom_log'), ['#natprog:saw', 'quark:blossom_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('quark:blossom_planks', 4), ['#natprog:saw', 'quark:stripped_blossom_log']).id('quark:world/crafting/woodsets/blossom/planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('quark:blossom_planks', 4), ['#natprog:saw', 'quark:stripped_blossom_wood']).id('quark:world/crafting/woodsets/blossom/saw/stripped_blossom_wood_to_blossom_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_bluebright_log'), ['#natprog:saw', 'blue_skies:bluebright_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:bluebright_planks', 4), ['#natprog:saw', 'blue_skies:stripped_bluebright_log']).id('blue_skies:bluebright_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:bluebright_planks', 4), ['#natprog:saw', 'blue_skies:stripped_bluebright_wood']).id('blue_skies:saw/stripped_bluebright_wood_to_bluebright_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_comet_log'), ['#natprog:saw', 'blue_skies:comet_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:comet_planks', 4), ['#natprog:saw', 'blue_skies:stripped_comet_log']).id('blue_skies:comet_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:comet_planks', 4), ['#natprog:saw', 'blue_skies:stripped_comet_wood']).id('blue_skies:saw/stripped_comet_wood_to_comet_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('vinery:stripped_dark_cherry_log'), ['#natprog:saw', 'vinery:dark_cherry_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('vinery:dark_cherry_planks', 4), ['#natprog:saw', 'vinery:stripped_dark_cherry_log']).id('vinery:dark_cherry_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('vinery:dark_cherry_planks', 4), ['#natprog:saw', 'vinery:stripped_dark_cherry_wood']).id('vinery:saw/stripped_dark_cherry_wood_to_dark_cherry_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_dusk_log'), ['#natprog:saw', 'blue_skies:dusk_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:dusk_planks', 4), ['#natprog:saw', 'blue_skies:stripped_dusk_log']).id('blue_skies:dusk_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:dusk_planks', 4), ['#natprog:saw', 'blue_skies:stripped_dusk_wood']).id('vinery:stripped_dark_cherry_wood_to_dark_cherry_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_frostbright_log'), ['#natprog:saw', 'blue_skies:frostbright_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:frostbright_planks', 4), ['#natprog:saw', 'blue_skies:stripped_frostbright_log']).id('blue_skies:frostbright_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:frostbright_planks', 4), ['#natprog:saw', 'blue_skies:stripped_frostbright_wood']).id('blue_skies:saw/stripped_frostbright_wood_to_frostbright_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_lunar_log'), ['#natprog:saw', 'blue_skies:lunar_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:lunar_planks', 4), ['#natprog:saw', 'blue_skies:stripped_lunar_log']).id('blue_skies:lunar_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:lunar_planks', 4), ['#natprog:saw', 'blue_skies:stripped_lunar_wood']).id('blue_skies:saw/stripped_lunar_wood_to_lunar_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_maple_log'), ['#natprog:saw', 'blue_skies:maple_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:maple_planks', 4), ['#natprog:saw', 'blue_skies:stripped_maple_log']).id('blue_skies:maple_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:maple_planks', 4), ['#natprog:saw', 'blue_skies:stripped_maple_wood']).id('blue_skies:saw/stripped_maple_wood_to_maple_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('silentgear:stripped_netherwood_log'), ['#natprog:saw', 'silentgear:netherwood_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('silentgear:netherwood_planks', 4), ['#natprog:saw', 'silentgear:stripped_netherwood_log']).id('silentgear:netherwood_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('silentgear:netherwood_planks', 4), ['#natprog:saw', 'silentgear:stripped_netherwood_wood']).id('silentgear:netherwood_planks_from_stripped_wood').damageIngredient('#natprog:saw')

event.shapeless(Item.of('thermal:stripped_rubberwood_log'), ['#natprog:saw', 'thermal:rubberwood_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('thermal:rubberwood_planks', 4), ['#natprog:saw', 'thermal:stripped_rubberwood_log']).id('thermal:rubberwood_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('thermal:rubberwood_planks', 4), ['#natprog:saw', 'thermal:stripped_rubberwood_wood']).id('thermal:rubberwood_planks_from_stripped_wood').damageIngredient('#natprog:saw')

event.shapeless(Item.of('aether:stripped_skyroot_log'), ['#natprog:saw', 'aether:skyroot_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('aether:skyroot_planks', 4), ['#natprog:saw', 'aether:stripped_skyroot_log']).id('aether:skyroot_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('aether:skyroot_planks', 4), ['#natprog:saw', 'aether:stripped_skyroot_wood']).id('aether:saw/stripped_skyroot_wood_to_skyroot_planks').damageIngredient('#natprog:saw')

event.shapeless(Item.of('blue_skies:stripped_starlit_log'), ['#natprog:saw', 'blue_skies:starlit_log']).damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:starlit_planks', 4), ['#natprog:saw', 'blue_skies:stripped_starlit_log']).id('blue_skies:starlit_planks').damageIngredient('#natprog:saw')
event.shapeless(Item.of('blue_skies:starlit_planks', 4), ['#natprog:saw', 'blue_skies:stripped_starlit_wood']).id('blue_skies:saw/stripped_starlit_wood_to_starlit_planks').damageIngredient('#natprog:saw')

//
});
//