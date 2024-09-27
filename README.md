##
## Tips

1) If you have any questions, you are welcome to join us on the [Discord](https://discord.gg/Tt8sGvQRH4)! Someone will try to answer your question as soon as they can. 

2) When you first load in, there is a "Read Me" chapter of quests to get through. I suggest trying to find a world where there is a structure located near spawn (see Suggested World Seeds below). This will give you ample time to click through the "Read Me" quests before accepting the "Start Age 1" reward under "Main Progression". From here, you will start your journey in "Age 1" > "Utility"

3) 

##
## Suggested World Seeds
 - N/A


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
	 - **Age 0** - "0-0.01", "10-0" - (difficulty goes up at a rate of .01 until
	   it hits 10, then stops)
	 - **Age 1** - "15" - (difficulty set to 15 in agereward.js / difficulty for Age 1 is a flat value of 15)
	 - **Age 2** - "20" - "20-0.05", "30-0" (difficulty set to 20 in
	   agereward.js / goes up at a rate of .05 until it hits 30, then stops)
	 - **Age 3** - "35" - "35-0.05", "50-0" (difficulty set to 35 in
	   agereward.js / goes up at a rate of .05 until it hits 50, then stops)
	 - **Age 4** - "55" - "55-0.05", "80-0" (difficulty set to 55 in
	   agereward.js / goes up at a rate of .05 until it hits 80, then stops)
	 - **Age 5** - "85" - "85-0.05", "100-0" (difficulty set to 85 in
	   agereward.js / goes up at a rate of .05 until it hits 100, then
	   stops)
	 - **Age 6** - "105" - "105-0.05", "200-0" (difficulty set to 105 in
	   agereward.js / goes up at a rate of .05 until it hits 200, then
	   stops)
	 - **Age 7** - "225" - "225-0.05", "250-0" (difficulty set to 225 in
	   agereward.js / goes up at a rate of .05 until it hits 250, then
	   stops)
 - You will need to update each line to correspond with it's matching
   number in the agereward.js file. The only exception for this is Age
   0/1 due to Age 0 capping at Difficulty 10.
 - Difficulty scaling beyond 250 requires you to play with the settings
   between Line 182 to 220.
 - Open the kubejs folder in the main directory
 - Open server_scripts
 - Open "agereward.js"
	 - **Age 1** - Line 9 (set 15)
	 - **Age 2** - Line 16 (set 20)
	 - **Age 3** - Line 23 (set 35)
	 - **Age 4** - Line 30 (set 20)
	 - **Age 5** - Line 37 (set 55)
 - On each line you can change the number "set ##" to your chosen
   difficulty scaling.
   
**AtomicStryker's Infernal Mobs**:
 - Navigate to your config folder
 - Open "infernalmobs.cfg"
	 - Under "modsEnabled" you can change any modifiers you dont want showing up in your world to "false"
	 - Under "permittedEntities" you can change any mobs you don't wish to have a modifier to "false"

##
## Known Issues

 - N/A