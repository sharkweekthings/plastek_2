////
// silent 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'silentgear:glowing_dust'})
  event.remove({id: 'silentgear:blazing_dust'})
  event.remove({id: 'silentgear:glittery_dust'})
  event.remove({id: 'silentgear:azure_silver_dust_smelting'})
  event.remove({id: 'silentgear:blaze_gold_dust_smelting'})
  event.remove({id: 'silentgear:azure_silver_dust_blasting'})
  event.remove({id: 'silentgear:blaze_gold_dust_blasting'})
  event.remove({id: 'minecraft:voidmetal_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_voidmetal_to_ingot_blasting'})
  event.remove({id: 'minecraft:voidmetal_ore_to_ingot'})
  event.remove({id: 'minecraft:raw_voidmetal_to_ingot'})
  event.remove({id: 'minecraft:plasteel_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_plasteel_to_ingot_blasting'})
  event.remove({id: 'minecraft:plasteel_ore_to_ingot'})
  event.remove({id: 'minecraft:raw_plasteel_to_ingot'})
  event.remove({id: 'minecraft:solarmetal_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_solarmetal_to_ingot_blasting'})
  event.remove({id: 'minecraft:solarmetal_ore_to_ingot'})
  event.remove({id: 'minecraft:raw_solarmetal_to_ingot'})
  event.remove({id: 'minecraft:arcmetal_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_arcmetal_to_ingot_blasting'})
  event.remove({id: 'minecraft:arcmetal_ore_to_ingot'})
  event.remove({id: 'minecraft:raw_arcmetal_to_ingot'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Nutritional Liquifier
  event.shaped('silentcompat:source_steel_ingot',
    ['456','213','789'], {
    1: '#forge:ingots/steel',
    2: 'mysticalagriculture:air_essence',
    3: 'mysticalagriculture:earth_essence',
    4: 'mysticalagriculture:water_essence',
    5: 'mysticalagriculture:fire_essence',
    6: 'mysticalagriculture:stone_essence',
    7: 'mysticalagriculture:dirt_essence',
    8: 'mysticalagriculture:wood_essence',
    9: 'mysticalagriculture:ice_essence'}).id('silentcompat:source_steel_ingot')

// Box of Supreme Machine Frame Parts
  event.shapeless(Item.of('silentcompat:capsid_alloy_ingot'), ['minecraft:diamond', 'minecraft:diamond', 'minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'silentcompat:sculk_alloy_ingot']).id('silentcompat:capsid_alloy_ingot')



//    
})
//