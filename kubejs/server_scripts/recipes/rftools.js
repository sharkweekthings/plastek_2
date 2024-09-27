////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'rftoolsbase:machine_frame'})
  event.remove({id: 'rftoolsutility:flight_module'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Replace Wheat Dough w/ Create Dough
  event.replaceInput({}, 'rftoolsbase:machine_frame', 'industrialforegoing:machine_frame_advanced')


//    
})
//