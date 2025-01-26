##
## Tips

1) If you have any questions, you are welcome to join us on the [Discord](https://discord.gg/Tt8sGvQRH4)! Someone will try to answer your question as soon as they can. 

2) When you first load in, there is a "Read Me" chapter of quests to get through. I suggest trying to find a world where there is a structure located near spawn (see Suggested World Seeds below). This will give you ample time to click through the "Read Me" quests before accepting the "Start Age 1" reward under "Main Progression". From here, you will start your journey in "Age 1" > "Tools"

3) 

##
## Suggested World Seeds
EASIER START
- N/A - Need to repopulate seed list with new seeds

HARD START
- N/A - Need to repopulate seed list with new seeds



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