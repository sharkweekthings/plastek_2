##
## Tips

1) If you have any questions, you are welcome to join us on the [Discord](https://discord.gg/b2NAFyCu)! Someone will try to answer your question as soon as they can. 

2) When you first load in, there is a "Read Me" chapter of quests to get through. I suggest trying to find a world where there is a structure located near spawn (see Suggested World Seeds below). This will give you ample time to click through the "Read Me" quests before accepting the "Start Age 1" reward under "Main Progression". From here, you will start your journey in "Age 1" > "Tools"

3) 

##
## Suggested World Seeds
EASIER START
1) -4052349078916629433 - Start in a Plains with a Beekeepers house nearby.
2) 3684454708010785943 - Start in a Clover Patch with a tiny home nearby.
3) -8380276173941303126 - Start in a Maple Woods next to a Tower.
4) 4888906723522008824 - Start in a Swamp at an Apothecary Hut.
5) -1422910910800544248 - Start in a Snowy Taiga at a Tavern Village.
6) -177377764378369927 - Start in a Lush Desert at an Oasis Village.
7) -7403332326440007590 - Start in a Coniferous Forest at a Bathhouse.
8) 2495452373623989788 - Start in a Plains at a village, with a Battletower nearby.
9) 295671984905287247 - Start with an armada of ships in the sky, next to a Tinker Citadel.

HARD START
1) 4643090097723104334 - Start in a Dark Forest, but you're in a Sky Village.
2) -2899808716149027100 - Start in a Snowblossom Grove with no structures around.
3) -7144639993473530893 - Start in a Grassland with a Volcano nearby, and no structures around.


##
## Difficulty Adjustment

**Option 1** - *Disable difficulty change entirely*:
 - Open your "config" folder
 - Open the "improvedmobs" folder
 - Open the "common.toml" file
 - Change Line 5 (Enable difficulty scaling) and Line 27 (Difficulty
   toggle) to = false
   
**Option 2** - *Adjust difficulty scaling*
 - Open your "config" folder
 - Open the "improvedmobs" folder
 - Open the "common.toml" file
 - Line 14 (Difficulty Increase)

 	"Difficulty Increase" = ["0-0.15", "10-0", "35-0.15", "50-0", "60-0.15", "75-0", "100-0.15", "150-0", "200-0.15", "250-0"]'

	 - **Age 0** - "0-0.15", "10-0" - (difficulty goes up at a rate of .15 until it hits 10, then stops)
	 - **Age 1** - "20" - (difficulty set to 20 in agereward.js / difficulty for Age 1 is a flat value of 20)
	 - **Age 2** - "35" - "35-0.15", "50-0" (difficulty set to 35 in agereward.js / goes up at a rate of .15 until it hits 50, then stops)
	 - **Age 3** - "60" - "60-0.15", "75-0" (difficulty set to 60 in agereward.js / goes up at a rate of .15 until it hits 75, then stops)
	 - **Age 4** - "100" - "100-0.15", "150-0" (difficulty set to 100 in agereward.js / goes up at a rate of .15 until it hits 150, then stops)
	 - **Age 5** - "200" - "200-0.15", "250-0" (difficulty set to 200 in agereward.js / goes up at a rate of .15 until it hits 250, then stops)

 - You will need to update each line to correspond with it's matching
   number in the agereward.js file. The only exception for this is Age
   0/1 due to Age 0 capping at Difficulty 10.
 - Open the kubejs folder in the main directory
 - Open server_scripts
 - Open "agereward.js"
	 - **Age 1** - Line 9 (set 20)
	 - **Age 2** - Line 17 (set 35)
	 - **Age 3** - Line 24 (set 60)
	 - **Age 4** - Line 31 (set 100)
	 - **Age 5** - Line 38 (set 200)
 - On each line you can change the number "set ##" to your chosen
   difficulty scaling.
 - For more help, please reach out on Discord. I may refer you to the Improved Mobs Discord if I cannot assist.
   
**AtomicStryker's Infernal Mobs**:
 - Navigate to your config folder
 - Open "infernalmobs.cfg"
	 - Under "modsEnabled" you can change any modifiers you dont want showing up in your world to "false"
	 - Under "permittedEntities" you can change any mobs you don't wish to have a modifier to "false"

##
## Known Issues

 - Some of the Everlasting Ability totems show that they require a specific amount of experience, but they actually require more. If you can't learn the ability try to gain 1 extra level to see if that lets you learn it.