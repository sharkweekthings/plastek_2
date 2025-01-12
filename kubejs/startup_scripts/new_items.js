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
  e.create('box_of_control_chip_parts')
  e.create('wire_mould')
  e.create('zinc_dust')
  e.create('fake_wisdom_scroll').tooltip('The fates are cruel.. This is nothing more than a piece of paper made to look like a Wisdom Scroll...')
  e.create('bow_grip_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/bow_grip')
  e.create('bow_limb_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/bow_limb')
  e.create('broad_axe_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/broad_axe_head')
  e.create('broad_blade_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/broad_blade')
  e.create('coin_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/coin')
  e.create('gear_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/gear')
  e.create('gem_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/gem')
  e.create('hammer_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/hammer_head')
  e.create('large_plate_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/large_plate')
  e.create('pick_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/pick_head')
  e.create('repair_kit_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/repair_kit')
  e.create('rod_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/rod')
  e.create('round_plate_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/round_plate')
  e.create('small_axe_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/small_axe_head')
  e.create('small_blade_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/small_blade')
  e.create('tool_binding_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tool_binding')
  e.create('tool_handle_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tool_handle')
  e.create('chestplate_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/chestplate_plating')
  e.create('helmet_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/helmet_plating')
  e.create('leggings_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/leggings_plating')
  e.create('boots_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/boots_plating')
  e.create('maille_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/maille')
  e.create('tough_tool_handle_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tough_handle')
  e.create('wire_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/wire')
  e.create('adze_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/adze_head')
  e.create('tough_binding_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tough_binding')

})


StartupEvents.registry('block', e => {

// NO IDEA WHY THIS ONLY WORKS WITH DIAMOND PAXEL OR AXE+
  e.create('nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
  e.create('infused_nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
})