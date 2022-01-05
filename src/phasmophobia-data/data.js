var data = {
	"patchVersion": "0.5.0 - Cursed Possessions",

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
				"Can teleport to a random player when not hunting which will do EMF lvl 2 or 5"
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
				"Taking a photo makes the ghost temporarily disappear",
				"Blinks slower during hunts (1s to 2s instead of 0.3s to 1s)"
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
				"Throws multiple objects at once and reduces sanity by the number of thrown items times 2"
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
				"The Crucifixs effective radius is 5m instead of 3m",
				"Only choosen player can finish the 'Repel a ghost while it is chasing' objective",
				"Preferes singing ghost events over other events",
				"Low chance for a unique sound (distorted scream) over the parabolic microphone"
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
				"During a hunt it travels faster (2.1m/s) when chasing a target until a distance of 10m",
				"Can lower the sanity of all players within a certain range by 25%",
				"Cannot use abilities when the locations power is turned off",
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
				"Can hunt at 60 % avg sanity when lights are turned off",
				"This is not affected by candles, torches or other equipment",
				"Has a chance of turning off a light immediately after it was turned on by a player",
				"Cannot turn on lights",
				"More likely to roam to adjacent dark rooms when the lights in the current room are on",
				"More likely to turn of lights the doing other ghost interactions",
				"Preferes shattering lights over other ghost events"
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
				"Less chance of ghost activity and ghost events when more than 1 player is nearby",
				"Lower chance of initiating a hunt when more than 1 players are in the same room"
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
				"Successful answers from the ouja board lowers sanity by 40% instead of 50%",
				"Can start a hunt early regardless the avarage sanity",
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
				"Smudging will make it to no leave the room for 1.5 min"
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
				"Chance to throw objects with more force so they fly further",
				"More ghost activity and events when there are more people are nearby"
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
				"Can initiate a hunt at an avarage sanity of 80% if players are talking nearby",
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
				"Walking speed is affected by room temperature when hunting and not chasing",
				"Faster (1.8 m/s) below 10°C/50°F - slower (~1.4 m/s) above 10°C/50°F",
				"Shows cold breath during a hunt in rooms with freezing temperature"
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
				"Always gives the D.O.T.S. evidence on nightmare difficulty"
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
				"Can initiate a hunt at an avarage sanity of 70% if there is electrical equipment nearby"
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
				"Reduced chance to leave fingerprints",
				"Low chance to leave fingerprints with 6 fingers",
        "Fingerprints have a 50% chance to disappear earlier (60s) than of other ghosts (120s)",
				"Always gives the Fingerprints evidence on nightmare difficulty"
			]
		},
		{
			"name": "The Mimic",
			"primaryEvidences": [
				"Freezing Temperature",
				"Spirit Box",
				"Fingerprints"
			],
			"secondaryEvidences": [
				"Has ghost orbs as 4th evidence",
				"Picks a ghost to mimic and changes it occasionally",
				"Copies all abilities and behaviour of the picked ghost"
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
