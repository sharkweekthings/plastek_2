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
      item: "create:brass_casing",},
     results: [{
      item: "industrialforegoing:machine_frame_pity",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "create:brass_casing",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "mekanism:creative_bin",},],
},
{
    type: "create:cutting",
     ingredients: [{
      item: "create:brass_casing",},],
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:brass_casing",},[{ // incomplete item
      item: "kubejs:wooden_gear",},],], // item to deploy
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:brass_casing",},[{ // incomplete item
      item: "create:iron_sheet",},],], // item to deploy
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "create:brass_casing",},],
     results: [{
      item: "create:brass_casing",},],
},
],
    transitionalItem: {
      item: "create:brass_casing",
    },
  });

//
})
//