////
// train track sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'create:sequenced_assembly/track'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:stone_slab",},
     results: [{
      item: "create:track",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stone_slab",},[{ // incomplete item
      item: "create:andesite_alloy",},],], // item to deploy
     results: [{
      item: "minecraft:stone_slab",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stone_slab",},[{ // incomplete item
      item: "minecraft:dirt",},],], // item to deploy
     results: [{
      item: "minecraft:stone_slab",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stone_slab",},[{ // incomplete item
      item: "minecraft:dirt",},],], // item to deploy
     results: [{
      item: "minecraft:stone_slab",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:stone_slab",},],
     results: [{
      item: "minecraft:stone_slab",},],
},
],
    transitionalItem: {
      item: "minecraft:stone_slab",
    },
  });

//
})
//