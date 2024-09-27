////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({ mod: 'inventorypets' })

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Feed Bag
  event.shaped('inventorypets:feed_bag',
    ['424','414','434'], {
    1: 'minecraft:diamond',
    2: 'minecraft:string',
    3: '#forge:chests',
    4: 'minecraft:leather'}).id('inventorypets:feed_bag')

// Feed Bag
  event.shaped('minecraft:obsidian',
    ['111','111','111'], {
    1: 'inventorypets:nugget_obsidian'}).id('inventorypets:obsidian')

// Petrifier
  event.shapeless(Item.of('inventorypets:item_petrifier'), ['#inventorypets:legendary_pets', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot']).id('inventorypets:item_petrifier')

// Coal Nugget
  event.shapeless(Item.of('8x inventorypets:nugget_coal'), ['minecraft:coal', 'minecraft:dirt']).id('inventorypets:nugget_coal')

// Diamond Nugget
  event.shapeless(Item.of('8x inventorypets:nugget_diamond'), ['minecraft:diamond', 'minecraft:dirt']).id('inventorypets:nugget_diamond')

// Emerald Nugget
  event.shapeless(Item.of('8x inventorypets:nugget_emerald'), ['minecraft:emerald', 'minecraft:dirt']).id('inventorypets:nugget_emerald')

// Ender Nugget
  event.shapeless(Item.of('8x inventorypets:nugget_ender'), ['minecraft:ender_pearl', 'minecraft:dirt']).id('inventorypets:nugget_ender')

// Lapis Nugget
  event.shapeless(Item.of('8x inventorypets:nugget_lapis'), ['minecraft:lapis_lazuli', 'minecraft:dirt']).id('inventorypets:nugget_lapis')

// Lapis Nugget
  event.shapeless(Item.of('8x inventorypets:nugget_obsidian'), ['minecraft:obsidian', 'minecraft:dirt']).id('inventorypets:nugget_obsidian')

//    
})
//