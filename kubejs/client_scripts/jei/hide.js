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
	event.hide('powah:solar_panel_blazing')
	event.hide('powah:solar_panel_niotic')
	event.hide('powah:solar_panel_spirited')
	event.hide('powah:solar_panel_nitro')

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

//
})
//