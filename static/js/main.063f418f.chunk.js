(this["webpackJsonpphasmophobia-cheatsheet"]=this["webpackJsonpphasmophobia-cheatsheet"]||[]).push([[0],{41:function(e,t,n){e.exports=n.p+"static/media/ghost.c97139a7.svg"},48:function(e,t,n){e.exports=n(62)},53:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),i=n.n(r),s=n(16),c=(n(53),n(20)),l=n(26),h=n(7),d=n(9),p=n(10),u=n(14),y=n(12),m=n(11),g=n(5),v=(n(54),n(55),n(23)),f=n(21),b=n(40),E=n(64),w=n(65),k=n(66),x=n(67),C=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data.primaryevidence.map((function(t,n){var a=o.a.createElement(b.a,{className:"evidence-header"+(e.props.remainingEvidence[t]?"":" grey")},t),r=e.props.ghostNames.map((function(n){var a=" grey";return e.props.ignoredGhosts[n]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[n]||(a=""),o.a.createElement(b.a,{className:"ghost-evidence"+a,key:"col-"+n+"-"+t},e.props.ghostHasEvidence[n][t]?"X":"")})),i="evidence-row";return e.props.selectedEvidence[t]?i+=" green-background":e.props.ignoredEvidence[t]?i+=" red-background":n%2===0&&(i+=" darkgrey-background"),o.a.createElement(E.a,{className:i,onClick:function(n){return e.props.onEvidenceClick(n,t)},onContextMenu:function(n){return e.props.onEvidenceClick(n,t)},key:"row-"+t},a,r)})),n=0,a=null;(this.props.selectedEvidenceAmount>1||this.props.selectedSecondaryEvidenceAmount>0||this.props.showAllSecondaryEvidence)&&(a=this.props.data.secondaryevidence.map((function(t){var a,r=!1,i=Object(h.a)(e.props.ghostNames);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(e.props.selectedGhosts[s]&&e.props.ghostHasEvidence[s][t]){r=!0;break}}}catch(p){i.e(p)}finally{i.f()}if(r||e.props.ignoredEvidence[t]||e.props.selectedEvidence[t]||e.props.showAllSecondaryEvidence){var c=o.a.createElement(b.a,{className:"evidence-header"+(e.props.remainingEvidence[t]?"":" grey"),key:"header-"+t},t),l=e.props.ghostNames.map((function(n){return o.a.createElement(b.a,{className:"ghost-evidence"+(0===e.props.selectedEvidenceAmount||e.props.selectedGhosts[n]?"":" grey"),key:"col-"+n+"-"+t},e.props.ghostHasEvidence[n][t]?"X":"")})),d="evidence-row";return e.props.selectedEvidence[t]?d+=" green-background":e.props.ignoredEvidence[t]?d+=" red-background":n%2===0&&(d+=" darkgrey-background"),n++,o.a.createElement(E.a,{className:d,onClick:function(n){return e.props.onEvidenceClick(n,t)},onContextMenu:function(n){return e.props.onEvidenceClick(n,t)},key:"row-"+t},c,l)}return null})));var r=this.props.ghostNames.map((function(t,n){var a=" grey";return e.props.ignoredGhosts[t]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[t]||(a=""),1===e.props.selectedGhostAmount&&e.props.selectedGhosts[t]&&(a=" green"),o.a.createElement(b.a,{className:"ghost-header"+a,key:"header-"+t},o.a.createElement("div",{className:"rotated45"},t))}));return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},o.a.createElement(w.a,{style:{padding:"0",margin:"20px",marginTop:"0px",maxWidth:"100000px"}},o.a.createElement(E.a,null,o.a.createElement(b.a,{style:{textAlign:"center"}},o.a.createElement("b",null,"Leftclick: Select/Unselect Evidence.",o.a.createElement("br",null),"Rightclick: Ignore/Unignore Evidence."))),o.a.createElement(E.a,null,o.a.createElement(b.a,{className:"evidence-header"},o.a.createElement(k.a,{variant:"danger",onClick:function(){return e.props.resetEvidence()}},"Unselect All Evidence"))),o.a.createElement(E.a,{style:{width:"100%"}},o.a.createElement(b.a,{className:"evidence-header"},"EVIDENCE"),r),t,o.a.createElement(x.a.Check,{id:"toggleSecondaryEvidence",draggable:!1,type:"checkbox",custom:"true",label:"Always show all Secondary Evidence",checked:this.props.showAllSecondaryEvidence,style:{margin:"15px"},onChange:function(t){return e.props.toggleSetting("showAllSecondaryEvidence")}}),null!==a&&o.a.createElement(E.a,{style:{width:"100%",marginTop:"25px"}},o.a.createElement(b.a,{className:"evidence-header"},"SECONDARY EVIDENCE")),a)))}}]),n}(a.Component),O=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,t={marginTop:"5px",marginLeft:"5px"},n=function(e,n){return n<e.length?o.a.createElement(b.a,{style:t,key:"voiceline-"+e[n]},e[n]):o.a.createElement(b.a,null)},a=function(t){return o.a.createElement(E.a,{key:"voicelines-row-"+t},n(e.props.data.voicelines.general,t),n(e.props.data.voicelines.ouija,t),n(e.props.data.voicelines.spiritbox,t),n(e.props.data.voicelines.attacktrigger,t))};if(this.state.width>1e3){for(var r=[],i=0,s=Math.max(this.props.data.voicelines.general.length,this.props.data.voicelines.ouija.length,this.props.data.voicelines.spiritbox.length,this.props.data.voicelines.attacktrigger.length);i<s;)r.push(a(i++));var c=["General Questions","Ouija Board Questions","Spirit Box Questions","Anger and Attack Trigger Words"].map((function(e,t){return o.a.createElement(b.a,{key:"header-"+e},o.a.createElement("h3",null,e))}));return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},o.a.createElement(w.a,{style:{padding:"0",margin:"20px",maxWidth:"90%"}},o.a.createElement(E.a,{style:{width:"100%"}},c),r)))}var l=[],h={general:"General Questions",ouija:"Ouija Board Questions",spiritbox:"Spirit Box Questions",attacktrigger:"Anger and Attack Trigger Words"};for(var d in this.props.data.voicelines){console.log(d);var p=[];p.push(o.a.createElement(b.a,{key:"header-"+h[d],style:{marginTop:"35px"}},o.a.createElement("h3",null,h[d])));for(var u=0;u<this.props.data.voicelines[d].length;u++)p.push(n(this.props.data.voicelines[d],u)),u++;l.push(p)}return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",margin:"25px 0px 15px 0px"}},o.a.createElement(w.a,{style:{marginLeft:"20px"}},l)))}}]),n}(a.Component),j=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},o.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},o.a.createElement("h2",{style:{textAlign:"center"}},"About Phasmophobia CheatSheet"),o.a.createElement("br",null),o.a.createElement("p",null,"Phasmophobia CheatSheet provides an interactive 2D grid overview about all ghost types and their evidence. Add evidence to rule out ghosts and narrow down your search. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game."),o.a.createElement("p",null,"Special thanks to BotiKis, Redforce04, aschlick, thijnmens & Buguslavv for contributing on GitHub and keeping the project up-to-date."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Phasmophobia CheatSheet isn\u2019t endorsed by Kinetic Games and doesn\u2019t reflect the views or opinions of Kinetic Games or anyone officially involved in producing or managing Phasmophobia."))))}}]),n}(a.Component),A=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},o.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},o.a.createElement("h2",{style:{textAlign:"center"}},"Contact"),o.a.createElement("br",null),o.a.createElement("p",null,"Hi, I am unobtanium. I created this project in my freetime. You can find the project repository with the source code on my GitHub page ",o.a.createElement("a",{href:"https://github.com/un0btanium/phasmophobia-cheatsheet"},"here"),"."),o.a.createElement("p",null,"If you want to send me some feedback, feel free to write me an ",o.a.createElement("a",{href:"mailto:unobtaniumlol@gmail.de?subject=Phasmophobia-Cheatsheet%20Feedback"},"eMail"),"."))))}}]),n}(a.Component),S=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{margin:"25px auto auto",width:"600px"}},o.a.createElement("div",{className:"component-wrapper"},o.a.createElement("h3",null,"Photo Rewards"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{padding:"5px 15px 5px"}}," Photo # "),o.a.createElement("th",{style:{padding:"5px 15px 5px"}}," Photo Type "),o.a.createElement("th",{style:{padding:"5px 15px 5px"}}," Star Ranking "),o.a.createElement("th",{style:{padding:"5px 15px 5px"}}," Estimated Money "))),o.a.createElement("tbody",null,Object.values(this.props.photos).map((function(t){return o.a.createElement("tr",{key:"photo-"+t.id,style:t.id%2===0?{backgroundColor:"#324254"}:{}},o.a.createElement("td",{style:{padding:"5px 15px 5px"}},t.id),o.a.createElement("td",{style:{padding:"5px 15px 5px"}},o.a.createElement("select",{className:"form-control selection-box",name:"type-selection",style:{backgroundColor:"#4E5D6C",color:"white",cursor:"pointer"},value:e.props.photos[t.id].type,onChange:function(n){return e.props.onPhotoGhostTypeChange(t.id,n.target.value)}},Object.keys(e.props.photoTypeMoneyReward).map((function(t){var n=-1!==e.props.photoTypeMaxAmount[t]&&e.props.photoTypeAmount[t]>=e.props.photoTypeMaxAmount[t];return o.a.createElement("option",{value:t,key:"type-"+t,disabled:n},t," ",n?"(Max)":"")})))),o.a.createElement("td",{style:{padding:"5px 15px 5px"}},o.a.createElement("div",{style:{fontSize:"1.6rem"}},o.a.createElement("button",{style:{backgroundColor:"transparent",border:"none",outline:"none"},className:"selection-box",name:"rating-"+t.id+"-1",onClick:function(n){return e.props.onPhotoRatingChange(t.id,1)}},o.a.createElement("span",{style:e.props.photos[t.id].rating>=1?{color:"gold"}:0===e.props.photos[t.id].rating?{color:"grey"}:{color:"white"},className:"star"},"\u2605")),o.a.createElement("button",{style:{backgroundColor:"transparent",border:"none",outline:"none"},className:"selection-box",name:"rating-"+t.id+"-2",onClick:function(n){return e.props.onPhotoRatingChange(t.id,2)}},o.a.createElement("span",{style:e.props.photos[t.id].rating>=2?{color:"gold"}:0===e.props.photos[t.id].rating?{color:"grey"}:{color:"white"},className:"star"},"\u2605")),o.a.createElement("button",{style:{backgroundColor:"transparent",border:"none",outline:"none"},className:"selection-box",name:"rating-"+t.id+"-3",onClick:function(n){return e.props.onPhotoRatingChange(t.id,3)}},o.a.createElement("span",{style:e.props.photos[t.id].rating>=3?{color:"gold"}:0===e.props.photos[t.id].rating?{color:"grey"}:{color:"white"},className:"star"},"\u2605")))),o.a.createElement("td",{style:{padding:"5px 15px 5px"}},"$",t.money))})),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:2,style:{padding:"10px 0px 5px"}},o.a.createElement(k.a,{variant:"danger",onClick:function(){return e.props.resetPhotos()}},"Clear All Photos")),o.a.createElement("td",{style:{padding:"5px 15px 5px"}}," Total Money:"),o.a.createElement("td",{style:{padding:"5px 15px 5px",fontWeight:"bold",fontSize:"1rem"}},"$",this.props.totalMoney))))))}}]),n}(a.Component),T={patchVersion:"0.8.0.0 - Tempest",photoTypeMoneyReward:{None:[0,0,0,0],"Dead Body":[0,1,2,5],Interaction:[0,1,2,5],Fingerprint:[0,1,2,5],Footstep:[0,1,2,5],"Cursed Possession":[0,1,2,5],"Salt Pile":[0,1,2,5],Dots:[0,1,2,5],"Ghost Writing":[0,1,2,5],"Used Crucifix":[0,2,5,10],"Dirty Water":[0,2,5,10],Bone:[0,2,5,10],Ghost:[0,5,10,20]},photoTypeMaxAmount:{None:-1,"Dead Body":3,Interaction:-1,Fingerprint:-1,Footstep:-1,"Cursed Possession":6,"Salt Pile":-1,Dots:-1,"Ghost Writing":2,"Used Crucifix":4,"Dirty Water":-1,Bone:1,Ghost:1},ghosts:[{name:"Spirit",primaryEvidences:["EMF Level 5","Ghost Writing","Spirit Box"],secondaryEvidences:["Smudge sticks stop attacks for 3 min instead of 1.5"]},{name:"Wraith",primaryEvidences:["EMF Level 5","Spirit Box","D.O.T.S. Projector"],secondaryEvidences:["Cannot step into salt and will never leave fotprints","Cannot have the 'Step into salt'-objective","Can teleport to a random player (while not hunting) which will do EMF lvl 2 or 5 and do interactions"]},{name:"Phantom",primaryEvidences:["Spirit Box","Fingerprints","D.O.T.S. Projector"],secondaryEvidences:["Looking at the ghost drops sanity by 0.4% each second instead of 0.2%","Taking a photo makes the ghost temporarily disappear (while not hunting)","Blinks slower during hunts (1s to 2s instead of 0.3s to 1s)","Can walk to a random player anywhere on the map (while not hunting) and do interactions"]},{name:"Poltergeist",primaryEvidences:["Spirit Box","Ghost Writing","Fingerprints"],secondaryEvidences:["Chance to throw objects with more force so they fly further (2 - 6 power, instead of 1 - 3 power)","Only ghost that can throw multiple objects at once","Every thrown object makes players loose 2% sanity instead of 1%","Very inactive in rooms without items","While hunting, guaranteed to throw an object in range every 0.5 seconds"]},{name:"Banshee",primaryEvidences:["Ghost Orbs","Fingerprints","D.O.T.S. Projector"],secondaryEvidences:["Targets and hunts one player until killed (If the player is not in the building, it does a regular hunt)","Only checks their targets sanity % for initiating a hunt in multiplayer","Will often wander toward their target when roaming","Singing ghost events will now drain an extra 5% sanity on the Banshee's target","Preferes singing ghost events over other events","Can sometimes be heard wailing with a parabolic microphone"]},{name:"Jinn",primaryEvidences:["Freezing Temperature","EMF Level 5","Fingerprints"],secondaryEvidences:["Cannot use any abilities when the breaker is turned off","During a hunt it travels faster (2.1m/s) when chasing a target until a distance of 10m","Ability: Can lower the sanity of all players by 25%, when within a 3m radius or in the same room as the ghost","When using their ability, Jinns will leave EMF at the breaker rather than where they currently stood.","Cannot turn off the breaker directly. (Unless by turning on too many lights)"]},{name:"Mare",primaryEvidences:["Ghost Orbs","Spirit Box","Ghost Writing"],secondaryEvidences:["Can hunt at 60 % avg sanity when lights in the room are turned off","This is not affected by candles, torches or other equipment","Tiny chance to turn off a light immediately after it was turned on by a player","Cannot turn on lights","More likely to roam to adjacent dark rooms when the lights in the current room are on","More likely to turn of lights the doing other ghost interactions","Preferes light events (red light & shattering) over other ghost events"]},{name:"Revenant",primaryEvidences:["Freezing Temperature","Ghost Orbs","Ghost Writing"],secondaryEvidences:["Very fast when chasing a player during a hunt (2x normal speed)","Very slow when not chasing anyone during a hunt (1/2 of normal speed)","When it loses line of sight during a hunt it keeps their increaased speed until reaching the targets last known position","Their speed will decrease gradually over 2.7 seconds"]},{name:"Shade",primaryEvidences:["Freezing Temperature","EMF Level 5","Ghost Writing"],secondaryEvidences:["Can only initiate a hunt at an avarage sanity of 35%","Less chance of ghost activity and ghost events when more than 1 player is nearby","Lower chance of initiating a hunt when more than 1 players are in the same room","For every 1% of average sanity lost, ghost event chance is increased by 2% (capped at 100%)"]},{name:"Demon",primaryEvidences:["Freezing Temperature","Fingerprints","Ghost Writing"],secondaryEvidences:["Can initiate a hunt at an avarage sanity of 70%","Insta-hunt: Low chance to start a hunt regardless the avarage sanity","Using cursed objects lowers sanity less than by other ghosts","The Crucifixes effective radius is 5m instead of 3m","Loose less sanity (80% of original loss) by answering to the Ouija board"]},{name:"Yurei",primaryEvidences:["Freezing Temperature","Ghost Orbs","D.O.T.S. Projector"],secondaryEvidences:["Ghost event drops sanity by 0.4% per second instead of 0.2%","This also applies when a player is within 10m during a hunt","Smudging will make it to stay in the room for 1.5 min","Can close doors randomly without doing a ghost event","Cannot use their ability when there is no door in its current room"]},{name:"Oni",primaryEvidences:["Freezing Temperature","EMF Level 5","D.O.T.S. Projector"],secondaryEvidences:["More ghost activity and events when there are more people are nearby","Does not do the Ghost Myst event","Drains double the sanity of a normal ghost during ghost events","Can be seen for longer periods of time when flickering during hunts"]},{name:"Yokai",primaryEvidences:["Ghost Orbs","Spirit Box","D.O.T.S. Projector"],secondaryEvidences:["Can initiate an early hunt at an avarage sanity of 80% if players are talking nearby","During a hunt it only can hear sounds in a radius of 2m"]},{name:"Hantu",primaryEvidences:["Freezing Temperature","Ghost Orbs","Fingerprints"],secondaryEvidences:["Walking speed is affected by room temperature when hunting","1.4 m/s= 15\xb0C+ | 1.75 m/s= 12\xb0C | 2.1 m/s= 9\xb0C | 2.3 m/s= 6\xb0C | 2.5 m/s= 3\xb0C | 2.7 m/s= 0\xb0C","Shows their breath on the ghost model in any room during hunts if the breaker is off","Has double the chance to turn off the breaker","Can no longer turn on the breaker, as this would stop them accelerating"]},{name:"Goryo",primaryEvidences:["EMF Level 5","Fingerprints","D.O.T.S. Projector"],secondaryEvidences:["D.O.T.S. only visible through a video cam and no players in the room","D.O.T.S. evidence are guaranteed on nightmare difficulty","Cannot change favorite room or roam long distances"]},{name:"Myling",primaryEvidences:["EMF Level 5","Fingerprints","Ghost Writing"],secondaryEvidences:["More sounds on the parabolic mic","During a hunt all hunting sounds can only be heard when 10m or closer"]},{name:"Onryo",primaryEvidences:["Spirit Box","Ghost Orbs","Freezing Temperature"],secondaryEvidences:["Can initiate a hunt when any flames are extinguished regardless of average sanity","Chance for the ability increases everytime a player is killed","Lit candles act as crucifixes. Blown out when successfuly prevented a hunt"]},{name:"The Twins",primaryEvidences:["EMF Level 5","Spirit Box","Freezing Temperature"],secondaryEvidences:["Main twin primary stays in the ghost room, makes freezing and spirit box","Secondary twin wanders around interacting with the environment","Secondary twin cannot interact with motion sensors, spirit box or make freezing","Either Twin can initiate a Hunt but not simultaneously","Crucifix only checks for main twin regardless of which will hunt","During hunts the main twin is slower (by 10%) and the decoy is faster (by 10%)"]},{name:"Raiju",primaryEvidences:["EMF Level 5","Ghost Orbs","D.O.T.S. Projector"],secondaryEvidences:["While hunting it has an increased movement speed when it touches electronic equipment","It doesn't matter if the equipment lies on the floor or held by a player","Abilities only affected by player equipment and not location electrics like TVs or lights","Head mounted cameras, motion sensors and sound sensors do not count towards the speed boost","Can initiate a hunt at an avarage sanity of 65% if there is electrical equipment nearby","Hunting affects light flicker for a longer range than oder ghosts (15 m instead of 10 m)"]},{name:"Obake",primaryEvidences:["EMF Level 5","Fingerprints","Ghost Orbs"],secondaryEvidences:["During a hunt it has a 6.66% chance each time it flickers to shapeshift into a different ghost form and back","Shapeshift is guaranteed to happen at least once per hunt","Reduced chance of 75% to leave fingerprints","Low chance to leave fingerprints with 6 fingers,","double fingerprints on light switches, and 5 finger on prison doors and keyboards","Fingerprints have a 50% chance to disappear earlier (60s) than of other ghosts (120s)","Always gives the Fingerprints evidence on nightmare difficulty"]},{name:"The Mimic",primaryEvidences:["Freezing Temperature","Spirit Box","Fingerprints","Ghost Orbs"],secondaryEvidences:["Picks another ghost type to imitate and changes it occasionally","Copies almost all abilities and behaviour of the picked ghost","Cannot switch picked ghost during a hunt","Has ghost orbs as 4th evidence which are always present, regardless of which ghost being imitated"]},{name:"Moroi",primaryEvidences:["Spirit Box","Ghost Writing","Freezing Temperature"],secondaryEvidences:["When smudged during a hunt it wanders for around 12s","Curses any player whom it responds over the Spirit Box","Cursed players constantly loose sanity over time (0.3%/s)","When leaving the house, the sanity drain stops until entering again","A curse can only be lifted by taking sanity pills","Players can be cursed again after cured","Walking speed is affected by avarage team sanity","1.4 m/s sanity <= 45% | 1.7 m/s sanity <= 30% | 1.8 m/s sanity <= 23% | 1.95 m/s sanity <= 13% | 2.1 m/s sanity = 0%"]},{name:"Deogen",primaryEvidences:["Spirit Box","Ghost Writing","D.O.T.S. Projector"],secondaryEvidences:["Can only initiate a hunt at an avarage sanity below 40%","Targets the closest player (not line of sight but really the closest player)","Moves very rapidly to its target (2.7 m/s) ignoring wherever the player hides","Approx. 4m before its target it becomes super slow","Unique Spirit Box interaction: Heavy breathing. You must stand on the exact position of the ghost"]},{name:"Thaye",primaryEvidences:["Ghost Orbs","Ghost Writing","D.O.T.S. Projector"],secondaryEvidences:["Can initiate a hunt at an avarage sanity of 70% but decreases with age","At its oldest age it only can initiate a hunt at an avarage sanity below 15%","Ages over time while a player is either in the same room as the ghost or in the ghost room","Becomes less active and slower the older it gets"]}],voicelines:{general:["What do you want?","Why are you here?","Do you want to hurt us?","Are you angry?","Do you want us here?","Shall we leave?","Should we leave?","Do you want us to leave?","What should we do?","Can we help?","Are you friendly?","What are you?","Are you close?","Can you show yourself?","Give us a sign.","Let us know you are here.","Show yourself.","Can you talk?","Speak to us.","Are you here?","Are you with us?","Anybody with us?","Is anyone here?","Anybody in the room?","Anybody here?","Is there a spirit here?","Is there a Ghost here?","Are you a girl?","Are you a boy?","Are you male?","Are you female?","Who are you?","What are you?","Who is this?","Who are we talking to?","Who am I talking to?","Hello?","What is your name?","Can you give me your name?","How old are you?","How young are you?","What is your age?","When were you born?","Are you a child?","Are you old?","Are you young?","What is your location?","What is your gender?","Are you male or female?","Are you a woman?"],ouija:["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favorite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?","Do you have a big pen**?","Do you want to play hide and seek?","Are you insym?","Where is the bone?","How many people are in this room?","Knock knock","Marco (answers polo)","What is my sanity? (Healthy >80% | Good >60% | Avg >40% | Bad >20% | Awful <20%)","How insane am I? (Not very >50% | Very >20% | Insane <20%)","Am I insane? (Maybe >0%, Yes 0%)","How did you die?","Before you stop using it, you have to say 'Goodbye'"],spiritbox:["Can you speak?","Can you speak to us?","Make a noise.","Open a door.","Open this door.","Turn on the light.","Turn off the light.","Are there any ghosts?","Give us a sign.","Show us.","Let us know you are here.","Do something.","Is there anyone with me?","Scream.","Can we speak?","Would like to speak to you.","Is there anyone here?","May I ask you?","Would you like to talk?","Are you the only one here?","Are you waiting?","Is there anything I can do?","Do you know who we are?","Are you happy?","Are you here all the time?","Are you male or female?","Do you want us to leave?","Can I ask you?","Can you make a sound?","Show us your presence.","Knock something.","Make a sound.","Open the door.","Throw something.","Talk to me.","Talk to us.","We mean you no harm.","We are friends.","Is this you're home?","Can you speak to us?","How did you die?","Where is the bone?"],attacktrigger:["<The Ghosts Name>","I'm scared.","I am scared.","Scared.","Scary.","Spooky.","Horror.","Scare.","Frighten.","Panic.","Fright.","Hide.","Run.","Show your presence.","Show us.","Show me.","Fuck","Bitch","Shit","Cunt","Ass","Bastard","Motherfucker (high response)","Arsehole","Crap","Pussy","Dickhead","Bloody Mary"]}},W=n(41),G=n.n(W),M=T.patchVersion,P=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(d.a)(this,n),a=t.call(this,e),T.primaryevidence=[],T.secondaryevidence=[];var o,r=[],i={},s={},c={},l={},p={},y={},m={},g={},v=Object(h.a)(T.ghosts);try{for(v.s();!(o=v.n()).done;){var f=o.value;f.evidence=f.primaryEvidences.concat(f.secondaryEvidences);var b,E=Object(h.a)(f.primaryEvidences);try{for(E.s();!(b=E.n()).done;){var w=b.value;T.primaryevidence.includes(w)||T.primaryevidence.push(w)}}catch(R){E.e(R)}finally{E.f()}var k,x=Object(h.a)(f.secondaryEvidences);try{for(x.s();!(k=x.n()).done;){var C=k.value;T.secondaryevidence.includes(C)||T.secondaryevidence.push(C)}}catch(R){x.e(R)}finally{x.f()}s[f.name]=!1,c[f.name]=!1,i[f.name]=f,r.push(f.name)}}catch(R){v.e(R)}finally{v.f()}var O=function(e,t){return e<t?-1:e>t?1:0};for(var j in T.primaryevidence.sort(O),r.sort(O),T.voicelines)T.voicelines[j].sort(O);var A,S=Object(h.a)(T.primaryevidence);try{for(S.s();!(A=S.n()).done;){var W=A.value;p[W]=!1,y[W]=!1,m[W]=!0}}catch(R){S.e(R)}finally{S.f()}var G,M=Object(h.a)(T.secondaryevidence);try{for(M.s();!(G=M.n()).done;){var P=G.value;p[P]=!1,y[P]=!1,m[P]=!0}}catch(R){M.e(R)}finally{M.f()}for(var D=0,F=r;D<F.length;D++){var N=F[D];l[N]={};var B,H=Object(h.a)(i[N].evidence);try{for(H.s();!(B=H.n()).done;){var I=B.value;l[N][I]=!0}}catch(R){H.e(R)}finally{H.f()}}for(var L in T.photoTypeMoneyReward)g[L]=0;return a.onEvidenceClick=a.onEvidenceClick.bind(Object(u.a)(a)),a.resetEvidence=a.resetEvidence.bind(Object(u.a)(a)),a.toggleSetting=a.toggleSetting.bind(Object(u.a)(a)),a.onPhotoGhostTypeChange=a.onPhotoGhostTypeChange.bind(Object(u.a)(a)),a.onPhotoRatingChange=a.onPhotoRatingChange.bind(Object(u.a)(a)),a.resetPhotos=a.resetPhotos.bind(Object(u.a)(a)),a.state={showAllSecondaryEvidence:!1,data:T,ghostNames:r,ghostsByName:i,selectedGhosts:s,ignoredGhosts:c,selectedEvidence:p,ignoredEvidence:y,remainingEvidence:m,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0,ghostHasEvidence:l,photos:{1:{id:1,type:"None",rating:0,money:0}},totalMoney:0,photoTypeAmount:g,photoTypeMoneyReward:T.photoTypeMoneyReward,photoTypeMaxAmount:T.photoTypeMaxAmount,onEvidenceClick:a.onEvidenceClick,toggleSetting:a.toggleSetting,resetEvidence:a.resetEvidence,onPhotoGhostTypeChange:a.onPhotoGhostTypeChange,onPhotoRatingChange:a.onPhotoRatingChange,resetPhotos:a.resetPhotos},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,null,o.a.createElement("div",{className:"full-screenable-node"},o.a.createElement(v.a,{bg:"dark",variant:"dark",expand:"xl",style:{boxShadow:"0px 2px 5px #000000"}},o.a.createElement(v.a.Brand,{style:{marginLeft:"15%"}},o.a.createElement("a",{href:"http://un0btanium.github.io/phasmophobia-cheatsheet/"},o.a.createElement("img",{src:G.a,width:"35",height:"35",alt:"Logo"}),o.a.createElement("b",null," Phasmophobia CheatSheet"))),o.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(v.a.Collapse,{id:"basic-navbar-nav",style:{marginRight:"10%"}},o.a.createElement(f.a,{className:"mr-auto"},o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/ghostsandevidence"},o.a.createElement("b",null,"Ghosts & Evidence")),o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/voicelines"},o.a.createElement("b",null,"Voicelines")),o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/photorewards"},o.a.createElement("b",null,"Photo Rewards"))),o.a.createElement(f.a,null,o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/about"},o.a.createElement("b",null,"About")),o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/contact"},o.a.createElement("b",null,"Contact")),o.a.createElement(v.a.Text,{style:{color:"rgb(223, 105, 26)",marginLeft:"20px"}},o.a.createElement("b",null,"Patch ",o.a.createElement("i",null,M)))))),o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/ghostsandevidence",render:function(t){return o.a.createElement(C,Object.assign({},t,e.state))}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/voicelines",render:function(t){return o.a.createElement(O,Object.assign({},t,e.state))}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/photorewards",render:function(t){return o.a.createElement(S,Object.assign({},t,e.state))}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/about",render:function(e){return o.a.createElement(j,e)}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/contact",render:function(e){return o.a.createElement(A,e)}}),o.a.createElement(g.a,{render:function(t){return o.a.createElement(C,Object.assign({},t,e.state))}}))))}},{key:"preventEvent",value:function(e){e.preventDefault()}},{key:"toggleSetting",value:function(e){localStorage.setItem(e,!this.state[e]),this.setState(Object(l.a)({},e,!this.state[e]))}},{key:"onEvidenceClick",value:function(e,t){e.preventDefault();var n=Object(c.a)({},this.state.selectedEvidence),a=Object(c.a)({},this.state.ignoredEvidence);"click"===e.type?(n[t]=!n[t],n[t]&&(a[t]=!1)):"contextmenu"===e.type&&(a[t]=!a[t],a[t]&&(n[t]=!1));var o=0,r=0;for(var i in n)!0!==n[i]&&!0!==a[i]||(o++,this.state.data.secondaryevidence.includes(i)&&r++);var s,l={},d={},p=0,u={},y=Object(h.a)(this.state.data.ghosts);try{for(y.s();!(s=y.n()).done;){var m=s.value,g=!0;for(var v in n)if(n[v]&&!m.evidence.includes(v)){g=!1;break}for(var f in a)if(a[f]&&m.evidence.includes(f)){d[m.name]=!0,g=!1;break}if(g){l[m.name]=!0,p++;var b,E=Object(h.a)(m.evidence);try{for(E.s();!(b=E.n()).done;){u[b.value]=!0}}catch(w){E.e(w)}finally{E.f()}}else l[m.name]=!1}}catch(w){y.e(w)}finally{y.f()}this.setState({selectedGhosts:l,ignoredGhosts:d,selectedEvidence:n,ignoredEvidence:a,remainingEvidence:u,selectedGhostAmount:p,selectedEvidenceAmount:o,selectedSecondaryEvidenceAmount:r})}},{key:"resetEvidence",value:function(){var e,t={},n={},a=Object(c.a)({},this.state.selectedEvidence),o=Object(c.a)({},this.state.ignoredEvidence),r={},i=Object(h.a)(T.ghosts);try{for(i.s();!(e=i.n()).done;){var s=e.value;t[s.name]=!1,n[s.name]=!1}}catch(g){i.e(g)}finally{i.f()}var l,d=Object(h.a)(T.primaryevidence);try{for(d.s();!(l=d.n()).done;){var p=l.value;a[p]=!1,o[p]=!1,r[p]=!0}}catch(g){d.e(g)}finally{d.f()}var u,y=Object(h.a)(T.secondaryevidence);try{for(y.s();!(u=y.n()).done;){var m=u.value;a[m]=!1,o[m]=!1,r[m]=!0}}catch(g){y.e(g)}finally{y.f()}this.setState({selectedGhosts:t,ignoredGhosts:n,selectedEvidence:a,ignoredEvidence:o,remainingEvidence:r,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0})}},{key:"onPhotoGhostTypeChange",value:function(e,t){var n=Object(c.a)({},this.state.photos),a=Object(c.a)({},this.state.photoTypeAmount),o=n[e].type;if(o!==t){var r=this.state.photoTypeMaxAmount[t];if(!(-1!==r&&a[t]>=r)){a[t]+=1,a[o]-=1,n[e].type=t,n[e].rating="None"===t?0:3,n[e].money=this.state.photoTypeMoneyReward[t][n[e].rating];var i=0;Object.values(n).forEach((function(e){i+=e.money}));var s=Object.keys(n).length;e===s&&(n[s+1]={id:s+1,type:"None",rating:0,money:0}),this.setState({photos:n,photoTypeAmount:a,totalMoney:i})}}}},{key:"onPhotoRatingChange",value:function(e,t){if("None"!==this.state.photos[e].type){var n=Object(c.a)({},this.state.photos);n[e].rating=t,n[e].money=this.state.photoTypeMoneyReward[n[e].type][t];var a=0;Object.values(n).forEach((function(e){a+=e.money})),this.setState({photos:n,totalMoney:a})}}},{key:"resetPhotos",value:function(){var e={};for(var t in T.photoTypeMoneyReward)e[t]=0;this.setState({photos:{1:{id:1,type:"None",rating:0,money:0}},photoTypeAmount:e,totalMoney:0})}}]),n}(a.Component),D=Object(g.f)(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.063f418f.chunk.js.map