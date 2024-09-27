////
// ores and gems loot table
//// renik
// base script by: Quentin765 / KubeJS Discord

ServerEvents.blockLootTables(event => {	
// onEvent('block.loot_tables', event => {
	let oreLoot = (fullOre, rawOre,rolls) => {
		event.addBlock(fullOre, table => {
			table.addPool(pool => {//silk touch
				pool.addItem(fullOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:silk_touch',
								levels: { min: 1 }
							}
						]
					}
				})
			})
			table.addPool(pool => {//non-silk touch or explosion
				pool.survivesExplosion()
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:inverted',
					term: {
						condition: 'minecraft:match_tool',
						predicate: {
							enchantments: [
								{
									enchantment: 'minecraft:silk_touch',
									levels: { min: 1 }
								}
							]
						}
					}
				})
			})
			table.addPool(pool => {//fortune 1 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 1 }
							}
						]
					}
				})
				pool.randomChance(0.05)
			})
			table.addPool(pool => {//fortune 2 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 2 }
							}
						]
					}
				})
				pool.randomChance(0.08)
			})
			table.addPool(pool => {//fortune 3 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 3 }
							}
						]
					}
				})
				pool.randomChance(0.10)
			})
			table.addPool(pool => {//fortune 4 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 4 }
							}
						]
					}
				})
				pool.randomChance(0.13)
			})
			table.addPool(pool => {//fortune 5 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 5 }
							}
						]
					}
				})
				pool.randomChance(0.15)
			})
			table.addPool(pool => {//fortune 6 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 6 }
							}
						]
					}
				})
				pool.randomChance(0.18)
			})
			table.addPool(pool => {//fortune 7 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 7 }
							}
						]
					}
				})
				pool.randomChance(0.20)
			})
			table.addPool(pool => {//fortune 8 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 8 }
							}
						]
					}
				})
				pool.randomChance(0.25)
			})
		})
	}

// Overworld
	oreLoot('minecraft:coal_ore', 'minecraft:coal', {min:1,max:2})
	oreLoot('minecraft:emerald_ore', 'inventorypets:nugget_emerald', {min:1,max:1})

})