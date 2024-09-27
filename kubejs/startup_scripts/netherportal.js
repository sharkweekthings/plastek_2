////
// disables nether portal spawn event via setting obsidian on fire.
//// renik
// Author: ʇʎouıplɐuop

ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent', e => e.setCancelled(true))