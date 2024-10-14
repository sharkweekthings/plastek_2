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
      item: "minecraft:clock",},
     results: [{
      item: "create:precision_mechanism",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:clock",},[{ // incomplete item
      item: "create:brass_sheet",},],], // item to deploy
     results: [{
      item: "mekanism:creative_bin",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:clock",},[{ // incomplete item
      item: "kubejs:stone_gear",},],], // item to deploy
     results: [{
      item: "minecraft:clock",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:clock",},[{ // incomplete item
      item: "create:cogwheel",},],], // item to deploy
     results: [{
      item: "minecraft:clock",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:clock",},],
     results: [{
      item: "minecraft:clock",},],
},
],
    transitionalItem: {
      item: "minecraft:clock",
    },
  });

//
})
//