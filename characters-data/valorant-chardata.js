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