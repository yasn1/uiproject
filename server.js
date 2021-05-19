const DBD = require("aoi.js");
const bot = new DBD.Bot({
  token: process.env.token,
  prefix: "?",
 })



bot.onMessage()
bot.onJoined()
bot.onLeave()

// Giriş Komutu //

bot.joinCommand({
  channel: "811881652291764274",
  code:`
  $if[$checkContains[$getVar[kliste];$authorID]==true]
  $dm[465097169917968386]
  $authorID idli üye, yasaklı üyeler listesinde olduğu için sunucudan atıldı.
  $kick[$authorID]
  $else
  $title[<a:akatildi:768162853945081866> | Hoş Geldin $username#$discriminator[$authorID]]
  $description[$thumbnail[$authorAvatar]
  
<a:eglence:768163352236523520> | Seninle beraber **$membersCount** kişiyiz.

<a:acooldog:768162744540069919> | **"?doğrula"** yazarak rolünü alabilirsin.

<a:aa__:768163079254441985> | <#795221277396303902>'ı okumayı unutma!

<a:aguard:768163123055034369> | Hesap kuruluş tarihi: $replaceText[$replaceText[$creationDate[$authorID;date];PM;;1];AM;;1]
]
$color[$getServerVar[renk]]
$endif
`
  })

// Giriş Komutu //

// Çıkış Komutu //

bot.leaveCommand({
  channel: "811881652291764274",
  code:`
  $color[$getServerVar[renk]]
  $title[<a:aayrildi:768162938829668392> | $username#$discriminator[$authorID] İsimli üye sunucudan çıkış yaptı.]
  $description[<a:aktif:768163308187549726> | **$membersCount** kişi kaldık]
  `
  })


// Çıkış Komutu //

bot.command({
  name: "$alwaysExecute",
  code:`
  $if[$checkContains[$getVar[kliste];$authorID]==true]
  $deletecommand
  <@$authorID> Kara listede olduğun için yazı yazamazsın.
  $deleteIn[2s]
  $else
  $if[$checkContains[$getVar[kliste];$authorID]==true]
  <@$authorID> Kara listede olduğun için yazı yazamazsın.
  $deleteIn[5s]
  $cooldown[5s;]
  $else
  $endif
  
  $endif
  `
  })

bot.command({
  name: "$alwaysExecute",
  code:`
  $if[$mentioned[1]==]
  
  $else
  $if[$getUserVar[afk;$mentioned[1]]==kapalı]
  
  $else
  $color[$getServerVar[renk]]
  $title[Kullanıcı Klavyeden Uzak Modunda]
  $description[<@$mentioned[1]> isimli kullanıcı **"$getUserVar[afksebep;$mentioned[1]]"** sebebi ile afk modundadır.]
  $deletecommand
  $deleteIn[6s]
  $endif
  $endif
  `,
  })
bot.command({
  name: "$alwaysExecute",
  code:`
  $if[$getUserVar[afk;$authorID]==açık]
  $if[$message[1] $message[2]==? afk]
  
  $else
  $if[$message[1]==?afk]
  $else
  $color[$getServerVar[renk]]
  $title[Afk Modundan Çıktın]
  $setUserVar[afk;kapalı;$authorID]
  $setUserVar[afksebep;;$authorID]
  $endif
  $endif
  $else
  $endif
  `,
  nonPrefixed: true
  })

bot.command({
name:"$alwaysExecute",
code:`
$if[$getServerVar[küfür]==kapalı]

$else

$if[$hasPerms[$authorID;admin]==true]

$else
$if[$toLowercase[$message[1]]==sg]
$deletecommand
<@$authorID>, Küfür etmemelisin 
$channelSendMessage[837328158490361927;<@$authorID> ($authorID), sunucuda $sum[$getUserVar[küfüruyarı;$authorID];1] kere küfür etti.]
$deleteIn[5s]
$setUserVar[küfüruyarı;$sum[$getUserVar[küfüruyarı;$authorID];1];$authorID]


$else
$if[$toLowercase[$message[1]]==aq]
$deletecommand
<@$authorID>, Küfür etmemelisin 
$channelSendMessage[837328158490361927;<@$authorID> ($authorID), sunucuda $sum[$getUserVar[küfüruyarı;$authorID];1] kere küfür etti.
$deleteIn[5s]
$setUserVar[küfüruyarı;$sum[$getUserVar[küfüruyarı;$authorID];1];$authorID]


$else
$if[$toLowercase[$message[1]]==mk]
$deletecommand
<@$authorID>, Küfür etmemelisin 
$channelSendMessage[837328158490361927;<@$authorID> ($authorID), sunucuda $sum[$getUserVar[küfüruyarı;$authorID];1] kere küfür etti.]
$deleteIn[5s]
$setUserVar[küfüruyarı;$sum[$getUserVar[küfüruyarı;$authorID];1];$authorID]


$else
$if[$toLowercase[$message[1]]==mq]
$deletecommand
<@$authorID>, Küfür etmemelisin
$channelSendMessage[837328158490361927;<@$authorID> ($authorID), sunucuda $sum[$getUserVar[küfüruyarı;$authorID];1] kere küfür etti.]
$deleteIn[5s]
$setUserVar[küfüruyarı;$sum[$getUserVar[küfüruyarı;$authorID];1];$authorID]


$else
$if[$checkContains[$toLowercase[$message];amk;amq;amcık;amcik;göt;pipi;yarrak;yarak;yrrk;y@rrak;amını;amini;siktir;sikerim;sktr;skrm;orospu;orspu;owoppu ç;sex;porn;sikiş;sikmek;amını]==true]
$deletecommand
<@$authorID>, Küfür etmemelisin
$deleteIn[5s]
$channelSendMessage[837328158490361927;<@$authorID> ($authorID), sunucuda $sum[$getUserVar[küfüruyarı;$authorID];1] kere küfür etti.]
$setUserVar[küfüruyarı;$sum[$getUserVar[küfüruyarı;$authorID];1];$authorID]
$else
$endif
$endif
$endif
$endif
$endif
$endif
$endif
`
})

bot.command({
  name: "$alwaysExecute",
  code:`
  $if[$channelID!=811881652291764274]
  
  $else
  $if[$getUserVar[dkodyn;$authorID]==hayır]
  
  $else
  $if[$checkContains[$getVar[kliste];$authorID]==true]
  $deletecommand
  $deleteIn[8s]
  $modifyChannelPerms[$channelID;-sendmessages;$authorID]
  $color[FF0000]
  $description[<@$authorID>, Yasaklı üyeler listesinde olduğun için uzak diyarlara gönderiyorum seni.]
  $else
  $if[$message[1] $message[2]==? doğrula]
  
  $else
  $if[$message[1]==?doğrula]

  $else
  $if[$getUserVar[dkod;$authorID]!=$message]
  $title[**Yanlış Kod Girdin**]
  $color[FF0000]
  $deletecommand
  $deleteIn[5s]
  $else
  $deletecommand
  $deleteIn[5s]
  $giveRole[$authorID;794543800861065226]
  $color[$getServerVar[renk]]
  $channelSendMessage[794544679496187936;<@$authorID>, doğrulama işlemini tamamladı ve aramıza katıldı.]
  $title[Doğrulama İşlemi Başarılı]
  $description[Rolünüz verildi. İyi eğlenceler dileriz.]
  $setUserVar[dkodyn;hayır;$authorID]
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  `
  })


const fs = require('fs')
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}
bot.variables({
  renk: "FFFFFF",
  afksebep: "",
  afk: "kapalı",
  küfür: "kapalı",
  reklam: "kapalı",
  küfüruyarı: "0",
  reklamuyarı: "0",
  dkod: "",
  dkodyn: "hayır",
  kliste: ""
  })
