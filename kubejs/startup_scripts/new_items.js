////
// new items created for the pack
//// renik

StartupEvents.registry('item', e => {

  e.create('wooden_gear')
  e.create('stone_gear')
  e.create('blue_paste')
  e.create('green_paste')
  e.create('empty_box')
  e.create('enchanted_feather')
  e.create('box_of_supreme_machine_frame_parts')
  e.create('fake_wisdom_scroll').tooltip('The fates are cruel.. This is nothing more than a piece of paper made to look like a Wisdom Scroll...')

})


StartupEvents.registry('block', e => {

// NO IDEA WHY THIS ONLY WORKS WITH DIAMOND PAXEL OR AXE+
  e.create('nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
  e.create('infused_nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
})