// import the component JavaScript output generated via @riotjs/compiler
import character from '/character.js'
import rolenav from '/rolenav.js'

// register the riot component
riot.register('character', character)
riot.register('rolenav', rolenav)

// ROLE NAVBAR -> causes error if class not found
riot.mount('.duelist', {
    logopath: "images/valorant/logo_transparent.png",
    roles: [
        {roleimg: "images/valorant/DuelistClassSymbol.webp", curr: true},
        {roleimg: "images/valorant/InitiatorsClassSymbol.webp", name: " initiators"},
        {roleimg: "images/valorant/SentinelClassSymbol.webp", name: "sentinels"},
        {roleimg: "images/valorant/ControllerClassSymbol.webp", name: "controllers"}
    ]
})

riot.mount('.initiator', {
    logopath: "images/valorant/logo_transparent.png",
    roles: [
        {roleimg: "images/valorant/DuelistClassSymbol.webp", name: "duelists"},
        {roleimg: "images/valorant/InitiatorsClassSymbol.webp", curr: true},
        {roleimg: "images/valorant/SentinelClassSymbol.webp", name: "sentinels"},
        {roleimg: "images/valorant/ControllerClassSymbol.webp", name: "controllers"}
    ]
})

riot.mount('.sentinel', {
    logopath: "images/valorant/logo_transparent.png",
    roles: [
        {roleimg: "images/valorant/DuelistClassSymbol.webp", name: "duelists"},
        {roleimg: "images/valorant/InitiatorsClassSymbol.webp", name: "initiators"},
        {roleimg: "images/valorant/SentinelClassSymbol.webp", curr: true},
        {roleimg: "images/valorant/ControllerClassSymbol.webp", name: "controllers"}
    ]
})

riot.mount('.controller', {
    logopath: "images/valorant/logo_transparent.png",
    roles: [
        {roleimg: "images/valorant/DuelistClassSymbol.webp", name: "duelists"},
        {roleimg: "images/valorant/InitiatorsClassSymbol.webp", name: "initiators"},
        {roleimg: "images/valorant/SentinelClassSymbol.webp", name: "sentinels"},
        {roleimg: "images/valorant/ControllerClassSymbol.webp", curr: true}
    ]
}) 

// CHARACTERS
riot.mount('#Jett', { name: "JETT", namesize: "100",
    bgfromcol: "119,212,228", bgtocol: "67,86,128",
    img_fpath: "images/valorant/jett/",
    role: "0",
    charimg_url: "jett.png", charsize: "82", charloffset: "-5", charboffset: "0",
    fullname: "Han Sunwoo",
    chardesc: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can.  She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    abilities: [
        {imgurl : "jett_Cloudburst.png"},
        {imgurl : "jett_Updraft.png"},
        {imgurl : "jett_Tailwind.png"},
        {imgurl : "jett_Bladestorm.png"}
    ]
})

riot.mount('#Phoenix', { name: "PHOENIX", namesize: "65",
    bgfromcol: "234,113,52", bgtocol: "189,67,30",
    img_fpath: "images/valorant/phoenix/",
    charimg_url: "phoenix.png", charsize: "130", charloffset: "4", charboffset: "-38",
    fullname: "Jamie Adeyemi",
    chardesc: "A UK radiant of fire whose pride comes with ease, Phoenix throws himself into the fray turning the battlefield into his personal playground.",
    abilities: [
        {imgurl : "phoenix_Blaze.png"},
        {imgurl : "phoenix_Curveball.png"},
        {imgurl : "phoenix_Hot_Hands.png"},
        {imgurl : "phoenix_Run_it_Back.png"}
    ]
})

riot.mount('#Raze', { name: "RAZE", namesize: "95",
    bgfromcol: "254,197,77", bgtocol: "132,89,75",
    img_fpath: "images/valorant/raze/",
    charimg_url: "raze.png", charsize: "120", charloffset: "0", charboffset: "-35",
    fullname: "Tayane Alves",
    chardesc: "Raze has a personality reflecting her explosive and colorful playstyle, bringing happiness and positivity to the team. She often cracks bad jokes and lifts the team's spirit, all while obliterating the enemy with her kit.",
    abilities: [
        {imgurl : "Boom_Bot.webp"},
        {imgurl : "Blast_Pack.webp"},
        {imgurl : "Paint_Shells.webp"},
        {imgurl : "Showstopper.webp"}
    ]
})

riot.mount('#Reyna', { name: "REYNA", namesize: "80",
    bgfromcol: "254,102,240", bgtocol: "152,53,134",
    img_fpath: "images/valorant/reyna/",
    charimg_url: "reyna.png", charsize: "120", charloffset: "0", charboffset: "-30",
    fullname: "Zyanya Mondragón",
    chardesc: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
    abilities: [
        {imgurl : "Leer.webp"},
        {imgurl : "Devour.webp"},
        {imgurl : "Dismiss.webp"},
        {imgurl : "Empress.webp"}
    ]
})

riot.mount('#Yoru', { name: "YORU", namesize: "90",
    bgfromcol: "74,96,182", bgtocol: "57,56,109",
    img_fpath: "images/valorant/yoru/",
    charimg_url: "yoru.png", charsize: "110", charloffset: "0", charboffset: "-30",
    fullname: "Kiritani Ryo",
    chardesc: "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
    abilities: [
        {imgurl : "Fakeout.webp"},
        {imgurl : "Blindside.webp"},
        {imgurl : "Gatecrash.webp"},
        {imgurl : "Dimensional_Drift.webp"}
    ]
})

riot.mount('#Neon', { name: "NEON", namesize: "90",
    bgfromcol: "154,222,255", bgtocol: "86,88,255",
    img_fpath: "images/valorant/neon/",
    charimg_url: "neon.webp", charsize: "120", charloffset: "0", charboffset: "-30",
    fullname: "Tala Nicole Dimaapi Valdez",
    chardesc: "Filipino Agent, Neon, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
    abilities: [
        {imgurl : "Fast_Lane.webp"},
        {imgurl : "Relay_Bolt.webp"},
        {imgurl : "High_Gear.webp"},
        {imgurl : "Overdrive.webp"}
    ]
})

riot.mount('#Iso', { name: "ISO", namesize: "90",
    bgfromcol: "177,129,255", bgtocol: "109,51,180",
    img_fpath: "images/valorant/iso/",
    charimg_url: "iso.png", charsize: "125", charloffset: "-5", charboffset: "-39",
    fullname: "Li Zhao Yu",
    chardesc: "Chinese fixer for hire Iso goes into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.",
    abilities: [
        {imgurl : "Contingency.webp"},
        {imgurl : "Undercut.webp"},
        {imgurl : "Double_Tap.webp"},
        {imgurl : "Kill_Contract.webp"}
    ]
})

riot.mount('#Viper', { name: "VIPER", namesize: "80",
    bgfromcol: "0,180,65", bgtocol: "39,75,53",
    img_fpath: "images/valorant/viper/",
    charimg_url: "viper.png", charsize: "120", charloffset: "5", charboffset: "-40",
    fullname: "Sabine Callas",
    chardesc: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    abilities: [
        {imgurl : "Snake_Bite.webp"},
        {imgurl : "Poison_Cloud.webp"},
        {imgurl : "Toxic_Screen.webp"},
        {imgurl : "Viper's_Pit.webp"}
    ]
})

riot.mount('#Brimstone', { name: "BRIMSTONE", namesize: "47",
    bgfromcol: "240,138,51", bgtocol: "61,16,6",
    img_fpath: "images/valorant/brimstone/",
    charimg_url: "Brimstone_Artwork_Full.webp", charsize: "120", charloffset: "-2", charboffset: "-28",
    fullname: "Liam Byrne",
    chardesc: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
    abilities: [
        {imgurl : "Stim_Beacon.webp"},
        {imgurl : "Incendiary2.webp"},
        {imgurl : "Sky_Smoke3.webp"},
        {imgurl : "Orbital_Strike4.webp"}
    ]
})

riot.mount('#Omen', { name: "OMEN", namesize: "90",
    bgfromcol: "49,91,185", bgtocol: "64,58,86",
    img_fpath: "images/valorant/omen/",
    charimg_url: "Omen_Artwork_Full.webp", charsize: "120", charloffset: "3", charboffset: "-28",
    fullname: "???",
    chardesc: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
        {imgurl : "Shrouded_Step.webp"},
        {imgurl : "Paranoia2.webp"},
        {imgurl : "Dark_Cover3.webp"},
        {imgurl : "From_the_Shadows4.webp"}
    ]
})

riot.mount('#Astra', { name: "ASTRA", namesize: "80",
    bgfromcol: "203,51,178", bgtocol: "112,19,228",
    img_fpath: "images/valorant/astra/",
    charimg_url: "Astra_Artwork_Full.webp", charsize: "120", charloffset: "8", charboffset: "-28",
    fullname: "Efia Danso",
    chardesc: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.",
    abilities: [
        {imgurl : "Gravity_Well.webp"},
        {imgurl : "Nova_Pulse2.webp"},
        {imgurl : "Nebula_-_Dissipate3.webp"},
        {imgurl : "Cosmic_Divide4.webp"}
    ]
})

riot.mount('#Harbor', { name: "HARBOR", namesize: "70",
    bgfromcol: "118,221,208", bgtocol: "50,90,77",
    img_fpath: "images/valorant/harbor/",
    charimg_url: "Harbor_Artwork_Full.webp", charsize: "120", charloffset: "-2", charboffset: "-28",
    fullname: "Varun Batra",
    chardesc: "Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
    abilities: [
        {imgurl : "Cascade.webp"},
        {imgurl : "Cove2.webp"},
        {imgurl : "High_Tide3.webp"},
        {imgurl : "Reckoning4.webp"}
    ]
})

riot.mount('#Clove', { name: "CLOVE", namesize: "80",
    bgfromcol: "250,220,49", bgtocol: "225,136,252",
    img_fpath: "images/valorant/clove/",
    charimg_url: "Clove_Artwork_Full.webp", charsize: "120", charloffset: "-2", charboffset: "-28",
    fullname: "UNKNOWN",
    chardesc: "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.",
    abilities: [
        {imgurl : "Pick-me-up.webp"},
        {imgurl : "Meddle2.webp"},
        {imgurl : "Ruse3.webp"},
        {imgurl : "Not_Dead_Yet4.webp"}
    ]
})

// ---------------------- INITIATORS -----------------------------

riot.mount('#Sova', { name: "SOVA", namesize: "95",
    bgfromcol: "56,179,221", bgtocol: "16,37,92",
    img_fpath: "images/valorant/sova/",
    charimg_url: "Sova_Artwork_Full.webp", charsize: "120", charloffset: "-2", charboffset: "-28",
    fullname: "Alexander (Sasha) Novikov",
    chardesc: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    abilities: [
        {imgurl : "Owl_Drone.webp"},
        {imgurl : "Shock_Bolt2.webp"},
        {imgurl : "Recon_Bolt3.webp"},
        {imgurl : "Hunter's_Fury4.webp"}
    ]
})

riot.mount('#Breach', { name: "BREACH", namesize: "69",
    bgfromcol: "255,246,130", bgtocol: "108,51,24",
    img_fpath: "images/valorant/breach/",
    charimg_url: "Breach_Artwork_Full.webp", charsize: "120", charloffset: "0", charboffset: "-28",
    fullname: "Erik Torsten",
    chardesc: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
    abilities: [
        {imgurl : "Aftershock.webp"},
        {imgurl : "Flashpoint2.webp"},
        {imgurl : "Fault_Line3.webp"},
        {imgurl : "Rolling_Thunder4.webp"}
    ]
})

riot.mount('#Skye', { name: "SKYE", namesize: "95",
    bgfromcol: "57,216,166", bgtocol: "79,58,57",
    img_fpath: "images/valorant/skye/",
    charimg_url: "Skye_Artwork_Full.webp", charsize: "120", charloffset: "4", charboffset: "-28",
    fullname: "Kirra Foster",
    chardesc: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
    abilities: [
        {imgurl : "Regrowth.webp"},
        {imgurl : "Trailblazer2.webp"},
        {imgurl : "Guiding_Light3.webp"},
        {imgurl : "Seekers4.webp"}
    ]
})

riot.mount('#KAYO', { name: "KAY/O", namesize: "80",
    bgfromcol: "110,149,169", bgtocol: "34,44,52",
    img_fpath: "images/valorant/kayo/",
    charimg_url: "KAYO_Artwork_Full.webp", charsize: "120", charloffset: "3", charboffset: "-28",
    fullname: "GRENADIER",
    chardesc: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    abilities: [
        {imgurl : "FRAG-ment.webp"},
        {imgurl : "FLASH-drive2.webp"},
        {imgurl : "ZERO-point3.webp"},
        {imgurl : "NULL-cmd4.webp"}
    ]
})

riot.mount('#Fade', { name: "FADE", namesize: "100",
    bgfromcol: "168,60,73", bgtocol: "45,61,89",
    img_fpath: "images/valorant/fade/",
    charimg_url: "Fade_Artwork_Full.webp", charsize: "125", charloffset: "-2", charboffset: "-30",
    fullname: "Hazal Eyletmez",
    chardesc: "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
    abilities: [
        {imgurl : "Prowler.webp"},
        {imgurl : "Seize2.webp"},
        {imgurl : "Haunt3.webp"},
        {imgurl : "Nightfall4.webp"}
    ]
})

riot.mount('#Gekko', { name: "GEKKO", namesize: "85",
    bgfromcol: "236,209,46", bgtocol: "100,186,158",
    img_fpath: "images/valorant/gekko/",
    charimg_url: "Gekko_Artwork_Full.webp", charsize: "105", charloffset: "-2", charboffset: "-28",
    fullname: "Mateo Armendáriz De la Fuente",
    chardesc: "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
    abilities: [
        {imgurl : "Mosh_Pit.webp"},
        {imgurl : "Wingman2.webp"},
        {imgurl : "Dizzy3.webp"},
        {imgurl : "Thrash4.webp"}
    ]
})

// --------------------- SENTINELS ---------------------------

riot.mount('#Sage', { name: "SAGE", namesize: "95",
    bgfromcol: "59,224,195", bgtocol: "21,18,17",
    img_fpath: "images/valorant/sage/",
    charimg_url: "Sage_Artwork_Full.webp", charsize: "120", charloffset: "3", charboffset: "-28",
    fullname: "Wei Ling Ying",
    chardesc: "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    abilities: [
        {imgurl : "Barrier_Orb.webp"},
        {imgurl : "Slow_Orb2.webp"},
        {imgurl : "Healing_Orb3.webp"},
        {imgurl : "Resurrection4.webp"}
    ]
})

riot.mount('#Cypher', { name: "CYPHER", namesize: "70",
    bgfromcol: "185,185,185", bgtocol: "19,19,25",
    img_fpath: "images/valorant/cypher/",
    charimg_url: "Cypher_Artwork_Full.webp", charsize: "120", charloffset: "2", charboffset: "-28",
    fullname: "Amir El Amari",
    chardesc: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    abilities: [
        {imgurl : "Trapwire.webp"},
        {imgurl : "Cyber_Cage2.webp"},
        {imgurl : "Spycam3.webp"},
        {imgurl : "Neural_Theft4.webp"}
    ]
})

riot.mount('#Killjoy', { name: "KILLJOY", namesize: "70",
    bgfromcol: "250,220,49", bgtocol: "104,178,130",
    img_fpath: "images/valorant/killjoy/",
    charimg_url: "Killjoy_Artwork_Full.webp", charsize: "120", charloffset: "0", charboffset: "-28",
    fullname: "Klara Böhringer",
    chardesc: "The genius of Germany, Killjoy effortlessly secures key battlefield positions with her arsenal of inventions. If their damage doesn't take her enemies out, the debuff her robots provide will make short work of them.",
    abilities: [
        {imgurl : "Nanoswarm.webp"},
        {imgurl : "Alarmbot2.webp"},
        {imgurl : "Turret3.webp"},
        {imgurl : "Lockdown4.webp"}
    ]
})

riot.mount('#Chamber', { name: "CHAMBER", namesize: "55",
    bgfromcol: "255,215,0", bgtocol: "124,46,113",
    img_fpath: "images/valorant/chamber/",
    charimg_url: "Chamber_Artwork_Full.webp", charsize: "120", charloffset: "0", charboffset: "-28",
    fullname: "Vincent Fabron",
    chardesc: "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
    abilities: [
        {imgurl : "Trademark.webp"},
        {imgurl : "Headhunter2.webp"},
        {imgurl : "Rendezvous3.webp"},
        {imgurl : "Tour_De_Force4.webp"}
    ]
})

riot.mount('#Deadlock', { name: "DEADLOCK", namesize: "55",
    bgfromcol: "185,185,185", bgtocol: "19,19,25",
    img_fpath: "images/valorant/deadlock/",
    charimg_url: "Deadlock_Artwork_Full.webp", charsize: "120", charloffset: "1", charboffset: "-28",
    fullname: "Iselin",
    chardesc: "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
    abilities: [
        {imgurl : "GravNet.webp"},
        {imgurl : "Sonic_Sensor2.webp"},
        {imgurl : "Barrier_Mesh3.webp"},
        {imgurl : "Annihilation4.webp"}
    ]
})