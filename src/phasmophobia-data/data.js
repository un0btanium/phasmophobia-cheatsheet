const DOTS = "DOTS Projector";
const EMF5 = "EMF Level 5";
const FINGERPRINTS = "Fingerprints";
const FREEZING = "Freezing Temperature";
const ORBS = "Ghost Orbs";
const WRITING = "Ghost Writing";
const BOX = "Spirit Box";

var data = {
	"primaryevidence": [
		DOTS,
		EMF5,
		FINGERPRINTS,
		FREEZING,
		ORBS,
		WRITING,
		BOX
	],
	"secondaryevidence": [
		"objects moved at great speeds",
		"more active when people are nearby",
		"smudge stick stops attacks for a long time",
		"flying, no footprints",
		"toxic reaction to salt",
		"travelling through walls",
		"looking at the ghost drops sanity considerably",
		"taking a photo makes the ghost temporarily disappear",
		"summoned by a Ouija Board",
		"possesses the living",
		"throws multiple objects at once",
		"targets and hunts one person at a time",
		"scared off easily by the Crucifix",
		"territorial ghost that attacks when threatened",
		"travels fast when victim is far away",
		"turning off the locations power source slows down ghost movement",
		"most powerful in the dark",
		"increased chance of an attack in the dark",
		"lower chance of an attack when lights are on",
		"travels at significantly high speeds when hunting",
		"hiding slows down the ghost significantly",
		"shy ghost with no activity/hunting when multiple people are nearby",
		"attacks often and without reason",
		"sanity is not lowered when asking successful Ouija Board questions",
		"reduces sanity more quickly",
		"smudging the room will stop it from wandering around for a long time",
		"attracted to human voices",
		"haunts family homes",
		"talking near ghost increases chance of attack",
		"while hunting only hears voices closeby",
		"rare ghost, found in hot climates",
		"attack often during cold weather",
		"moves faster at lower temperatures",
		"moves slower in warm areas"
	],
	"ghosts": [
		{
			"name": "Spirit",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				EMF5,
				WRITING,
				BOX,
				
				"smudge stick stops attacks for a long time"
			]
		},
		{
			"name": "Wraith",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				EMF5,
				BOX,

				"flying, no footprints",
				"toxic reaction to salt",
				"travelling through walls"
			]
		},
		{
			"name": "Phantom",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				FINGERPRINTS,
				BOX,

				"looking at the ghost drops sanity considerably",
				"taking a photo makes the ghost temporarily disappear",
				"summoned by a Ouija Board",
				"possesses the living"
			]
		},
		{
			"name": "Poltergeist",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				FINGERPRINTS,
				WRITING,
				BOX,

				"throws multiple objects at once"
			]
		},
		{
			"name": "Banshee",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				FINGERPRINTS,
				ORBS,

				"targets and hunts one person at a time",
				"scared off easily by the Crucifix"
			]
		},
		{
			"name": "Jinn",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				EMF5,
				FINGERPRINTS,
				FREEZING,
				
				"territorial ghost that attacks when threatened",
				"travels fast when victim is far away",
				"turning off the locations power source slows down ghost movement"
			]
		},
		{
			"name": "Mare",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				ORBS,
				WRITING,
				BOX,

				"most powerful in the dark",
				"increased chance of an attack in the dark",
				"lower chance of an attack when lights are on"
			]
		},
		{
			"name": "Revenant",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				FREEZING,
				ORBS,
				WRITING,

				"travels at significantly high speeds when hunting",
				"hiding slows down the ghost significantly"
			]
		},
		{
			"name": "Shade",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				EMF5,
				FREEZING,
				WRITING,

				"shy ghost with no activity/hunting when multiple people are nearby"
			]
		},
		{
			"name": "Demon",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				FINGERPRINTS,
				FREEZING,
				WRITING,

				"attacks often and without reason",
				"sanity is not lowered when asking successful Ouija Board questions"
			]
		},
		{
			"name": "Yurei",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				FREEZING,
				ORBS,

				"reduces sanity more quickly",
				"smudging the room will stop it from wandering around for a long time"
			]
		},
		{
			"name": "Oni",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				EMF5,
				FREEZING,

				"objects moved at great speeds",
				"more active when people are nearby"
			]
		},
		{
			"name": "Yokai",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				ORBS,
				BOX,

				"attracted to human voices",
				"haunts family homes",
				"talking near ghost increases chance of attack",
				"while hunting only hears voices closeby"
			]
		},
		{
			"name": "Hantu",
			"description":"",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				FINGERPRINTS,
				FREEZING,
				ORBS,

				"rare ghost, found in hot climates",
				"attack often during cold weather",
				"moves faster at lower temperatures",
				"moves slower in warm areas"
			]
		},
		{
			"name": "Myling",
			"description": "",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				EMF5,
				FINGERPRINTS,
				WRITING
			]
		},
		{
			"name": "Goryo",
			"description": "",
			"uniquestrength": "",
			"weaknesses": "",
			"evidence": [
				DOTS,
				EMF5,
				FINGERPRINTS
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
			"Are you around?"
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