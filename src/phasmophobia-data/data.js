var data = {
	"patchVersion": "0.7.0.0 - Apocalypse",
	"ghosts": [
		{
			"name": "Spirit",
			"primaryEvidences": [
				"EMF Level 5",
				"Ghost Writing",
				"Spirit Box"
			],
			"secondaryEvidences": [
				"Smudge sticks stop attacks for 3 min instead of 1.5"
			]
		},
		{
			"name": "Wraith",
			"primaryEvidences": [
				"EMF Level 5",
				"Spirit Box",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Stepping in salt leaves no UV footprints",
				"Can become more active after stepping in salt",
				"Can teleport to a random player (while not hunting) which will do EMF lvl 2 or 5 and do interactions"
			]
		},
		{
			"name": "Phantom",
			"primaryEvidences": [
				"Spirit Box",
				"Fingerprints",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Looking at the ghost drops sanity by 0.4% each second instead of 0.2%",
				"Taking a photo makes the ghost temporarily disappear (while not hunting)",
				"Blinks slower during hunts (1s to 2s instead of 0.3s to 1s)",
				"Can walk to a random player anywhere on the map (while not hunting) and do interactions"
			]
		},
		{
			"name": "Poltergeist",
			"primaryEvidences": [
				"Spirit Box",
				"Ghost Writing",
				"Fingerprints"
			],
			"secondaryEvidences": [
				"Chance to throw objects with more force so they fly further (2 - 6 power, instead of 1 - 3 power)",
				"Only ghost that can throw multiple objects at once",
				"Every thrown object makes players loose 2% sanity instead of 1%",
				"Very inactive in rooms without items",
				"While hunting, guaranteed to throw an object in range every 0.5 seconds"
			]
		},
		{
			"name": "Banshee",
			"primaryEvidences": [
				"Ghost Orbs",
				"Fingerprints",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Targets and hunts one player until killed (If the player is not in the building, it does a regular hunt)",
				"Only checks their targets sanity % for initiating a hunt in multiplayer",
				"Will often wander toward their target when roaming",
				"Singing ghost events will now drain an extra 5% sanity on the Banshee's target",
				"Preferes singing ghost events over other events",
				"Can sometimes be heard wailing with a parabolic microphone"
			]
		},
		{
			"name": "Jinn",
			"primaryEvidences": [
				"Freezing Temperature",
				"EMF Level 5",
				"Fingerprints"
      		],
			"secondaryEvidences": [
		        "Cannot use any abilities when the breaker is turned off",
				"During a hunt it travels faster (2.1m/s) when chasing a target until a distance of 10m",
				"Ability: Can lower the sanity of all players by 25%, when within a 3m radius or in the same room as the ghost",
				"When using their ability, Jinns will leave EMF at the breaker rather than where they currently stood.",
				"Cannot turn off the breaker directly. (Unless by turning on too many lights)"
			]
		},
		{
			"name": "Mare",
			"primaryEvidences": [
				"Ghost Orbs",
				"Spirit Box",
				"Ghost Writing"
			],
			"secondaryEvidences": [
				"Can hunt at 60 % avg sanity when lights in the room are turned off",
				"This is not affected by candles, torches or other equipment",
				"Tiny chance to turn off a light immediately after it was turned on by a player",
				"Cannot turn on lights",
				"More likely to roam to adjacent dark rooms when the lights in the current room are on",
				"More likely to turn of lights the doing other ghost interactions",
				"Preferes light events (red light & shattering) over other ghost events"
			]
		},
		{
			"name": "Revenant",
			"primaryEvidences": [
				"Freezing Temperature",
				"Ghost Orbs",
				"Ghost Writing"
			],
			"secondaryEvidences": [
				"Very fast when chasing a player during a hunt (2x normal speed)",
				"Very slow when not chasing anyone during a hunt (1/2 of normal speed)"
			]
		},
		{
			"name": "Shade",
			"primaryEvidences": [
				"Freezing Temperature",
				"EMF Level 5",
				"Ghost Writing"
			],
			"secondaryEvidences": [
				"Can only initiate a hunt at an avarage sanity of 35%",
				"Less chance of ghost activity and ghost events when more than 1 player is nearby",
				"Lower chance of initiating a hunt when more than 1 players are in the same room",
				"For every 1% of average sanity lost, ghost event chance is increased by 2% (capped at 100%)"
			]
		},
		{
			"name": "Demon",
			"primaryEvidences": [
				"Freezing Temperature",
				"Fingerprints",
				"Ghost Writing"
			],
			"secondaryEvidences": [
				"Can initiate a hunt at an avarage sanity of 70%",
				"Insta-hunt: Low chance to start a hunt regardless the avarage sanity",
				"Using cursed objects lowers sanity less than by other ghosts",
				"The Crucifixes effective radius is 5m instead of 3m",
				"Loose less sanity (80% of original loss) by answering to the Ouija board"
			]
		},
		{
			"name": "Yurei",
			"primaryEvidences": [
				"Freezing Temperature",
				"Ghost Orbs",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Ghost event drops sanity by 0.4% per second instead of 0.2%",
				"This also applies when a player is within 10m during a hunt",
				"Smudging will make it to stay in the room for 1.5 min",
				"Can close doors randomly without doing a ghost event"
			]
		},
		{
			"name": "Oni",
			"primaryEvidences": [
				"Freezing Temperature",
				"EMF Level 5",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"More ghost activity and events when there are more people are nearby",
				"Does not do the Ghost Myst event",
				"Drains double the sanity of a normal ghost during ghost events",
				"Can be seen for longer periods of time when flickering during hunts"
			]
		},
		{
			"name": "Yokai",
			"primaryEvidences": [
				"Ghost Orbs",
				"Spirit Box",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Can initiate an early hunt at an avarage sanity of 80% if players are talking nearby",
				"During a hunt it only can hear sounds in a radius of 2m"
			]
		},
		{
			"name": "Hantu",
			"primaryEvidences": [
				"Freezing Temperature",
				"Ghost Orbs",
				"Fingerprints"
			],
			"secondaryEvidences": [
				"Walking speed is affected by room temperature when hunting",
				"1.4 m/s= 15°C+ | 1.75 m/s= 12°C | 2.1 m/s= 9°C | 2.3 m/s= 6°C | 2.5 m/s= 3°C | 2.7 m/s= 0°C",
				"Shows their breath in room temperatures of 3°C or lower",
				"Has double the chance to turn off the breaker",
				"Can no longer turn on the breaker, as this would stop them accelerating"
			]
		},
		{
			"name": "Goryo",
			"primaryEvidences": [
				"EMF Level 5",
				"Fingerprints",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"D.O.T.S. only visible through a video cam and no players in the room",
				"Less likely to roam when not hunting",
				"D.O.T.S. evidence are guaranteed on nightmare difficulty"
			]
		},
		{
			"name": "Myling",
			"primaryEvidences": [
				"EMF Level 5",
				"Fingerprints",
				"Ghost Writing"
			],
			"secondaryEvidences": [
				"More sounds on the parabolic mic",
				"During a hunt footstep sounds can only be heard when 10m or closer (similar to electronic interference)"
			]
		},
		{
			"name": "Onryo",
			"primaryEvidences": [
				"Spirit Box",
				"Ghost Orbs",
				"Freezing Temperature"
			],
			"secondaryEvidences": [
				"Can initiate a hunt when any flames are extinguished regardless of average sanity",
				"Chance for the ability increases everytime a player is killed",
				"Lit candles act as crucifixes. Blown out when successfuly prevented a hunt"
			]
		},
		{
			"name": "The Twins",
			"primaryEvidences": [
				"EMF Level 5",
				"Spirit Box",
				"Freezing Temperature"
			],
			"secondaryEvidences": [
				"Main twin primary stays in the ghost room, makes freezing and spirit box",
				"Secondary twin wanders around interacting with the environment",
				"Secondary twin cannot interact with motion sensors, spirit box or make freezing",
				"Either Twin can initiate a Hunt but not simultaneously",
				"Crucifix only checks for main twin regardless of which will hunt",
				"During hunts the main twin is slower (by 10%) and the decoy is faster (by 10%)"
			]
		},
		{
			"name": "Raiju",
			"primaryEvidences": [
				"EMF Level 5",
				"Ghost Orbs",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"While hunting it has an increased movement speed when it touches electronic equipment",
				"It doesn't matter if the equipment lies on the floor or held by a player",
				"Abilities only affected by player equipment and not location electrics like TVs or lights",
				"Head mounted cameras, motion sensors and sound sensors do not count towards the speed boost",
				"Can initiate a hunt at an avarage sanity of 65% if there is electrical equipment nearby"
			]
		},
		{
			"name": "Obake",
			"primaryEvidences": [
				"EMF Level 5",
				"Fingerprints",
				"Ghost Orbs"
			],
			"secondaryEvidences": [
				"Reduced chance of 75% to leave fingerprints",
				"Low chance to leave fingerprints with 6 fingers,",
				"double fingerprints on light switches, and 5 finger on prison doors and keyboards",
				"Fingerprints have a 50% chance to disappear earlier (60s) than of other ghosts (120s)",
				"Always gives the Fingerprints evidence on nightmare difficulty"
			]
		},
		{
			"name": "The Mimic",
			"primaryEvidences": [
				"Freezing Temperature",
				"Spirit Box",
				"Fingerprints",
				"Ghost Orbs"
			],
			"secondaryEvidences": [
				"Picks another ghost type to imitate and changes it occasionally",
				"Copies almost all abilities and behaviour of the picked ghost",
				"Cannot switch picked ghost during a hunt",
				"Has ghost orbs as 4th evidence which are always present, regardless of which ghost being imitated"
			]
		},
		{
			"name": "Moroi",
			"primaryEvidences": [
				"Spirit Box",
				"Ghost Writing",
				"Freezing Temperature"
			],
			"secondaryEvidences": [
				"When smudged during a hunt it wanders for around 12s",
				"Curses any player whom it responds over the Spirit Box",
				"Cursed players constantly loose sanity over time (0.3%/s)",
				"When leaving the house, the sanity drain stops until entering again",
				"A curse can only be lifted by taking sanity pills",
				"Players can be cursed again after cured",
				"Walking speed is affected by avarage team sanity",
				"1.4 m/s sanity <= 45% | 1.7 m/s sanity <= 30% | 1.8 m/s sanity <= 23% | 1.95 m/s sanity <= 13% | 2.1 m/s sanity = 0%"
			]
		},
		{
			"name": "Deogen",
			"primaryEvidences": [
				"Spirit Box",
				"Ghost Writing",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Can only initiate a hunt at an avarage sanity below 40%",
				"Targets the closest player (not line of sight but really the closest player)",
				"Moves very rapidly to its target (2.7 m/s) ignoring wherever the player hides",
				"Approx. 4m before its target it becomes super slow",
				"Unique Spirit Box interaction: Heavy breathing. You must stand on the exact position of the ghost"
			]
		},
		{
			"name": "Thaye",
			"primaryEvidences": [
				"Ghost Orbs",
				"Ghost Writing",
				"D.O.T.S. Projector"
			],
			"secondaryEvidences": [
				"Can initiate a hunt at an avarage sanity of 70% but decreases with age",
				"At its oldest age it only can initiate a hunt at an avarage sanity below 15%",
				"Ages over time while a player is either in the same room as the ghost or in the ghost room",
				"Becomes less active and slower the older it gets"
			]
		}
	],
	"voicelines": {
		"general": [
			"What do you want?",
			"Why are you here?",
			"Do you want to hurt us?",
			"Are you angry?",
			"Do you want us here?",
			"Shall we leave?",
			"Should we leave?",
			"Do you want us to leave?",
			"What should we do?",
			"Can we help?",
			"Are you friendly?",
			"What are you?",
			"Are you close?",
			"Can you show yourself?",
			"Give us a sign.",
			"Let us know you are here.",
			"Show yourself.",
			"Can you talk?",
			"Speak to us.",
			"Are you here?",
			"Are you with us?",
			"Anybody with us?",
			"Is anyone here?",
			"Anybody in the room?",
			"Anybody here?",
			"Is there a spirit here?",
			"Is there a Ghost here?",
			"Are you a girl?",
			"Are you a boy?",
			"Are you male?",
			"Are you female?",
			"Who are you?",
			"What are you?",
			"Who is this?",
			"Who are we talking to?",
			"Who am I talking to?",
			"Hello?",
			"What is your name?",
			"Can you give me your name?",
			"How old are you?",
			"How young are you?",
			"What is your age?",
			"When were you born?",
			"Are you a child?",
			"Are you old?",
			"Are you young?",
			"What is your location?",
			"What is your gender?",
			"Are you male or female?",
			"Are you a woman?"
		],
		"ouija": [
			"Who did you kill?",
			"Who is your victim?",
			"What is the name of the person you killed?",
			"What is the name of the person you murdered?",
			"What is your victim?",
			"Did you murder?",
			"Who did you murder?",
			"Who died?",
			"How old are you?",
			"What is your age?",
			"Are you old?",
			"Are you young?",
			"How long have you been dead?",
			"How many years ago did you die?",
			"How long have you been here?",
			"How long ago did you die?",
			"When did you die?",
			"How many are in this room?",
			"How many people are in this room?",
			"How many people are in here?",
			"How many ghosts are in this room?",
			"How many ghosts are in here?",
			"Are you alone?",
			"Are we alone?",
			"Who is here?",
			"Who is in this room?",
			"Where are you?",
			"What is your favorite room?",
			"Where is your room?",
			"What is your room?",
			"Are you here?",
			"Are you close?",
			"Are there any spirits?",
			"Are you near?",
			"Are you around?",
			"Do you have a big pen**?",
			"Do you want to play hide and seek?",
			"Are you insym?",
			"Where is the bone?",
			"How many people are in this room?",
			"Knock knock",
			"Marco (answers polo)",
			"What is my sanity? (Healthy >80% | Good >60% | Avg >40% | Bad >20% | Awful <20%)",
			"How insane am I? (Not very >50% | Very >20% | Insane <20%)",
			"Am I insane? (Maybe >0%, Yes 0%)",
			"How did you die?",
			"Before you stop using it, you have to say 'Goodbye'"
		],
		"spiritbox": [
			"Can you speak?",
			"Can you speak to us?",
			"Make a noise.",
			"Open a door.",
			"Open this door.",
			"Turn on the light.",
			"Turn off the light.",
			"Are there any ghosts?",
			"Give us a sign.",
			"Show us.",
			"Let us know you are here.",
			"Do something.",
			"Is there anyone with me?",
			"Scream.",
			"Can we speak?",
			"Would like to speak to you.",
			"Is there anyone here?",
			"May I ask you?",
			"Would you like to talk?",
			"Are you the only one here?",
			"Are you waiting?",
			"Is there anything I can do?",
			"Do you know who we are?",
			"Are you happy?",
			"Are you here all the time?",
			"Are you male or female?",
			"Do you want us to leave?",
			"Can I ask you?",
			"Can you make a sound?",
			"Show us your presence.",
			"Knock something.",
			"Make a sound.",
			"Open the door.",
			"Throw something.",
			"Talk to me.",
			"Talk to us.",
			"We mean you no harm.",
			"We are friends.",
			"Is this you're home?",
			"Can you speak to us?",
			"How did you die?",
			"Where is the bone?"
		],
		"attacktrigger": [
			"<The Ghosts Name>",
			"I'm scared.",
			"I am scared.",
			"Scared.",
			"Scary.",
			"Spooky.",
			"Horror.",
			"Scare.",
			"Frighten.",
			"Panic.",
			"Fright.",
			"Hide.",
			"Run.",
			"Show your presence.",
			"Show us.",
			"Show me.",
			"Fuck",
			"Bitch",
			"Shit",
			"Cunt",
			"Ass",
			"Bastard",
			"Motherfucker (high response)",
			"Arsehole",
			"Crap",
			"Pussy",
			"Dickhead",
			"Bloody Mary"
		]
	}
};
export default data;
