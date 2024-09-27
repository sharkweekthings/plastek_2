////
// ftb age rewards
//// renik
// The idea for this script came from a modpack called Decursio Project and was originally Authored by Lady Lexxie and Alexandr

FTBQuestsEvents.customReward('370EFDCA51E22621', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_1`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_1`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 20`) // Start Age 1 at 20
  event.server.runCommand(`tell ${event.player.username} Welcome to Age 1!`)
})

FTBQuestsEvents.customReward('3BDF4315261148F8', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} copper_equipment`)
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_2`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_2`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 35`) // 35 - 50
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 2!`)
})

FTBQuestsEvents.customReward('66EB2D3DCD1C6A4F', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_3`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_3`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 60`) // 60 - 75
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 3!`)
})

FTBQuestsEvents.customReward('0C65D4EE9C314A07', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_4`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_4`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 100`) // 100 - 250
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 4!`)
})

FTBQuestsEvents.customReward('7734F29B02A3CAC7', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_5`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_5`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 500`) // 100 - 250
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 5!`)
})



FTBQuestsEvents.customReward('699561E15B00A29C', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} copper_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip Copper tiered items!`)
})

FTBQuestsEvents.customReward('490C82F9B0A8FE7F', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} silver_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip Silver tiered items!`)
})

FTBQuestsEvents.customReward('50BB767BE0A838E9', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} iron_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip Iron tiered items!`)
})

FTBQuestsEvents.customReward('3D681E9785A8EE01', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} blue_skies_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip items from Blue Skies!`)
})

FTBQuestsEvents.customReward('2BD3AAFE9A21EE30', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} aether_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip items from Aether!`)
})

FTBQuestsEvents.customReward('2CC85F92B9FFD451', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} everything_else`)
  event.server.runCommandSilent(`tell ${event.player.username} A weight has been lifted from within you. You feel like you can wear anything. Maybe even nothing!`)
})