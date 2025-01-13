////
// hide stuff from jei / jei cleanup
//// renik

//
JEIEvents.hideItems(event => {
//

// AE2 Facade
	event.hide('ae2:facade')

// FARMERS DELIGHT
	event.hide('farmersdelight:wheat_dough')

// PAMS
	event.hide('pamhc2foodcore:doughitem')

// RF TOOLS
	event.hide('rftoolsbase:machine_frame')

// MYSTICAL AGRICULTURE
	event.hide('mysticalagriculture:machine_frame')
	event.hide('mysticalagriculture:flight_augment')

// THERMAL
	event.hide('thermal:machine_frame')
	event.hide('thermal:latex')
	event.hide('thermal:latex_bucket')
	event.hide('thermal:netherite_plate')
	event.hide('thermal:tin_plate')
	event.hide('thermal:nickel_plate')
	event.hide('thermal:enderium_plate')
	event.hide('thermal:netherite_gear')
	event.hide('thermal:emerald_gear')
	event.hide('thermal:quartz_gear')
	event.hide('thermal:ruby_gear')
	event.hide('thermal:sapphire_gear')

// DRACONIC EVOLUTION
	event.hide('draconicevolution:item_wyvern_flight')
	event.hide('draconicevolution:item_draconic_flight')

// INDUSTRIAL FOREGOING
	event.hide('industrialforegoing:mob_slaughter_factory')
	event.hide('industrialforegoing:mob_crusher')

// POWAH
	event.hide('powah:furnator_hardened')
	event.hide('powah:furnator_blazing')
	event.hide('powah:furnator_niotic')
	event.hide('powah:furnator_spirited')
	event.hide('powah:furnator_nitro')
	event.hide('powah:magmator_hardened')
	event.hide('powah:magmator_blazing')
	event.hide('powah:magmator_niotic')
	event.hide('powah:magmator_spirited')
	event.hide('powah:magmator_nitro')
	event.hide('powah:thermo_generator_hardened')
	event.hide('powah:thermo_generator_blazing')
	event.hide('powah:thermo_generator_niotic')
	event.hide('powah:thermo_generator_spirited')
	event.hide('powah:thermo_generator_nitro')

// PRODUCTIVE BEES
	event.hide('productivebees:experience')
	event.hide('productivebees:emerald')

// APOTHEOSIS
	event.hide('apotheosis:potion_charm')

// METAL BARRELS
	event.hide('metalbarrels:silver_to_diamond')
	event.hide('metalbarrels:silver_to_netherite')
	event.hide('metalbarrels:wood_to_netherite')
	event.hide('metalbarrels:wood_to_diamond')
	event.hide('metalbarrels:wood_to_obsidian')
	event.hide('metalbarrels:iron_to_gold')
	event.hide('metalbarrels:copper_to_obsidian')
	event.hide('metalbarrels:copper_to_silver')
	event.hide('metalbarrels:iron_to_diamond')
	event.hide('metalbarrels:silver_to_obsidian')
	event.hide('metalbarrels:copper_to_netherite')
	event.hide('metalbarrels:gold_to_obsidian')
	event.hide('metalbarrels:wood_to_gold')
	event.hide('metalbarrels:gold_to_netherite')
	event.hide('metalbarrels:iron_to_obsidian')
	event.hide('metalbarrels:wood_to_silver')
	event.hide('metalbarrels:iron_to_netherite')
	event.hide('metalbarrels:wood_to_iron')
	event.hide('metalbarrels:copper_to_gold')
	event.hide('metalbarrels:copper_to_diamond')
	event.hide('metalbarrels:diamond_to_netherite')
	event.hide('metalbarrels:wood_to_crystal')
	event.hide('metalbarrels:copper_to_crystal')
	event.hide('metalbarrels:iron_to_crystal')
	event.hide('metalbarrels:silver_to_crystal')
	event.hide('metalbarrels:gold_to_crystal')
	event.hide('metalbarrels:diamond_to_crystal')
	event.hide('metalbarrels:crystal_barrel')

// MEKANISM
	event.hide('mekanism:hdpe_elytra')
	event.hide('mekanism:sawdust')
	event.hide('mekanism:induction_casing')
	event.hide('mekanism:induction_port')
	event.hide('mekanism:dust_quartz')
	event.hide('mekanismgenerators:fusion_reactor_controller')
	event.hide('mekanismgenerators:fusion_reactor_frame')
	event.hide('mekanismgenerators:fusion_reactor_port')
	event.hide('mekanismgenerators:fusion_reactor_logic_adapter')

// STORAGE NETWORK
	event.remove({id: 'storagenetwork:exchange'})
	event.remove({id: 'storagenetwork:collector'})
	event.remove({id: 'storagenetwork:picker_remote'})
	event.remove({id: 'storagenetwork:collector_remote'})
	event.remove({id: 'storagenetwork:inventory'})
	event.remove({id: 'storagenetwork:builder_remote'})
	event.remove({id: 'storagenetwork:crafting_remote'})

// TINKERS CONSTRUCT (not working for some reason eh?)
	event.remove({id: 'tconstruct:plate_cast'})
	event.remove({id: 'tconstruct:gem_cast'})
	event.remove({id: 'tconstruct:repair_kit_cast'})
	event.remove({id: 'tconstruct:coin_cast'})
	event.remove({id: 'tconstruct:pick_head_cast'})
	event.remove({id: 'tconstruct:small_axe_head_cast'})
	event.remove({id: 'tconstruct:small_blade_cast'})
	event.remove({id: 'tconstruct:adze_head_cast'})
	event.remove({id: 'tconstruct:hammer_head_cast'})
	event.remove({id: 'tconstruct:broad_axe_head_cast'})
	event.remove({id: 'tconstruct:broad_blade_cast'})
	event.remove({id: 'tconstruct:large_plate_cast'})
	event.remove({id: 'tconstruct:tool_handle_cast'})
	event.remove({id: 'tconstruct:tough_binding_cast'})
	event.remove({id: 'tconstruct:bow_limb_cast'})
	event.remove({id: 'tconstruct:bow_grip_cast'})
	event.remove({id: 'tconstruct:helmet_plating_cast'})
	event.remove({id: 'tconstruct:chestplate_plating_cast'})
	event.remove({id: 'tconstruct:leggings_plating_cast'})
	event.remove({id: 'tconstruct:boots_plating_cast'})
	event.remove({id: 'tconstruct:maille_cast'})

	event.remove({id: 'tconstruct:plate_sand_cast'})
	event.remove({id: 'tconstruct:gem_sand_cast'})
	event.remove({id: 'tconstruct:repair_kit_sand_cast'})
	event.remove({id: 'tconstruct:coin_sand_cast'})
	event.remove({id: 'tconstruct:pick_head_sand_cast'})
	event.remove({id: 'tconstruct:small_axe_head_sand_cast'})
	event.remove({id: 'tconstruct:small_blade_sand_cast'})
	event.remove({id: 'tconstruct:adze_head_sand_cast'})
	event.remove({id: 'tconstruct:hammer_head_sand_cast'})
	event.remove({id: 'tconstruct:broad_axe_head_sand_cast'})
	event.remove({id: 'tconstruct:broad_blade_sand_cast'})
	event.remove({id: 'tconstruct:large_plate_sand_cast'})
	event.remove({id: 'tconstruct:tool_handle_sand_cast'})
	event.remove({id: 'tconstruct:tough_binding_sand_cast'})
	event.remove({id: 'tconstruct:bow_limb_sand_cast'})
	event.remove({id: 'tconstruct:bow_grip_sand_cast'})
	event.remove({id: 'tconstruct:helmet_plating_sand_cast'})
	event.remove({id: 'tconstruct:chestplate_plating_sand_cast'})
	event.remove({id: 'tconstruct:leggings_plating_sand_cast'})
	event.remove({id: 'tconstruct:boots_plating_sand_cast'})
	event.remove({id: 'tconstruct:maille_sand_cast'})

	event.remove({id: 'tconstruct:plate_red_sand_cast'})
	event.remove({id: 'tconstruct:gem_red_sand_cast'})
	event.remove({id: 'tconstruct:repair_kit_red_sand_cast'})
	event.remove({id: 'tconstruct:coin_red_sand_cast'})
	event.remove({id: 'tconstruct:pick_head_red_sand_cast'})
	event.remove({id: 'tconstruct:small_axe_head_red_sand_cast'})
	event.remove({id: 'tconstruct:small_blade_red_sand_cast'})
	event.remove({id: 'tconstruct:adze_head_red_sand_cast'})
	event.remove({id: 'tconstruct:hammer_head_red_sand_cast'})
	event.remove({id: 'tconstruct:broad_axe_head_red_sand_cast'})
	event.remove({id: 'tconstruct:broad_blade_red_sand_cast'})
	event.remove({id: 'tconstruct:large_plate_red_sand_cast'})
	event.remove({id: 'tconstruct:tool_handle_red_sand_cast'})
	event.remove({id: 'tconstruct:tough_binding_red_sand_cast'})
	event.remove({id: 'tconstruct:bow_limb_red_sand_cast'})
	event.remove({id: 'tconstruct:bow_grip_red_sand_cast'})
	event.remove({id: 'tconstruct:helmet_plating_red_sand_cast'})
	event.remove({id: 'tconstruct:chestplate_plating_red_sand_cast'})
	event.remove({id: 'tconstruct:leggings_plating_red_sand_cast'})
	event.remove({id: 'tconstruct:boots_plating_red_sand_cast'})
	event.remove({id: 'tconstruct:maille_red_sand_cast'})

//
})
//