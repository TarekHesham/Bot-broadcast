const Discord = require("discord.js");
const myid = ['ID MASTER'];
const prefix = ['YOUR PREFIX'];
const client = new Discord.Client();

//************************************************ Z C o o L ************************************************************
//********************************************** MY NAME IS TITO  *******************************************************

client.login(process.env.TOKEN);

//************************************************ Z C o o L ************************************************************
//********************************************** MY NAME IS TITO  *******************************************************

client.on("message", async message => {
    if (!message.guild || message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "bc")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**```fix\n⚠️ انت لا تملك الصلاحيات\n```**\n**|| ${client.user.username} ||**').then(m => m.delete(3000))
        if (message.guild.interval) return message.reply('**```fix\n⚠️ بث آخر قيد التشغيل، الرجاء الانتظار حتى ينتهي\n```**\n**|| ${client.user.username} ||**').then(m => m.delete(3000))
        let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args)
            return message.reply('**```fix\n⚠️ يرجى كتابة رسالة بعد الأمر لإرسالها\n```**\n**|| ⟨D々Ç⟩:dragon: ||**').then(m => m.delete(3000));

        message.channel
            .send(
                "**```fix\n[1] الجميع 👥\n[2] المتصلين الان 🌀\n[3] رتبة معينة 🛡️\n[0] الغاء الإرسال ❌\n```**\n**|| ${client.user.username} ||**"
            )
            .then(m => {
                message.channel
                    .awaitMessages(msg => msg.author.id === message.author.id, {
                        max: 1,
                        time: 1000 * 60 * 2,
                        errors: ["time"]
                    })
                    .then(async (c) => {
                        var members = null;
                        if (c.first().content === "1") {
                            members = message.guild.members.array();
                            c.first().delete().catch (err => null);
                            m.delete().catch (err => null);
                        }
                        if (c.first().content === "2") {
                            members = message.guild.members
                                .filter(m => m.presence.status !== "offline").array();

                            c.first().delete().catch (err => null);
                            m.delete().catch (err => null);
                        }
                        if (c.first().content == "0") {
                            c.first().delete().catch (err => null);
                            m.delete().catch (err => null);
                            message.channel.send("**```fix\n✅ تم إلغاء الامر بنجاح\n```**\n**|| ⟨D々Ç⟩:dragon: ||**").then(m => m.delete(3000));
                        }
                        if (c.first().content === "3") {
                            m.edit("**```fix\n📝 ادخل اسم الرتبة من فضلك\n```**\n**|| ⟨D々Ç⟩:dragon: ||**").then(ms => {
                                message.channel
                                    .awaitMessages(msg => msg.author.id === message.author.id, {
                                        max: 1,
                                        time: 1000 * 60 * 2,
                                        errors: ["time"]
                                    })
                                    .then(async collected => {
                                        let role = message.guild.roles.find(
                                            role => role.name === collected.first().content
                                        );
                                        if (!role)
                                            return message.channel
                                                .send("**```fix\n⛔.لا استطيع العثور على الرتبة الخاصة بالرسالة\n```**\n**|| ${client.user.username} ||**").then(m => m.delete(3000))
                                                .then(() => {
                                                    ms.delete().catch (err => null);
                                                    collected.first().delete().catch (err => null);
                                                });

                                        let roleID = role.id;
                                        members = message.guild.roles.get(roleID).members.array();
                                        if (members == null) return message.reply('**```fix\n⛔.رقم غير صالح\n```**\n**|| ${client.user.username} ||**');
                                        if (members.length == 0) return message.reply('**```fix\n⛔.لم يتم العثور على الرقم\n```**\n**|| ${client.user.username} ||**');
                                        else {
                                            const msg = await message.channel.send(`**جاري إرسال الرسالة إلى ${members.length} عضواً...📣 \n**\n**|| ${client.user.username} ||**`)
                                            var count = 0;
                                            var ycount = 0;
                                            var xcount = 0;
                                            message.guild.interval = await setInterval(() => {
                                                if (!members[count]) {
                                                    clearInterval(message.guild.inter);
                                                    msg.edit(new Discord.RichEmbed().setDescription(`** :mailbox_with_mail:  ؛ تم أرسال الرسالة الى  ${ycount} عضواً\n:lock: ؛ و لم أستطع أرسال الرسالة إلى ${xcount} عضواً**`).setTimestamp());
                                                    message.guild.interval = false;
                                                } else if (!members[count].user.bot) {
                                                    members[count].send(`${args}`).then(() => {
                                                        ycount++;
                                                    }).catch(err => {
                                                        return xcount++;
                                                    });
                                                }
                                                count++;
                                            }, 500)
                                        }
                                        collected.first().delete();
                                        m.delete();
                                    }).catch(err => {
                                        return ms.delete().catch (err => null);
                                    })
                            });
                        };
                        if (['1', '2'].includes(c.first().content)) {
                            if (members == null) return message.reply('**```fix\n⛔.رقم غير صالح\n```**\n**|| ⟨D々Ç⟩:dragon: ||**');
                            if (members.length == 0) return message.reply('**```fix\n⛔.لم يتم العثور على الرقم\n```**\n**|| ⟨D々Ç⟩:dragon: ||**');
                            else {
                                const msg = await message.channel.send(`**جاري إرسال الرسالة إلى ${members.length} عضواً...📣 \n**\n**|| ⟨D々Ç⟩:dragon: ||**`)
                                var count = 0;
                                var ycount = 0;
                                var xcount = 0;
                                message.guild.interval = await setInterval(() => {
                                    if (!members[count]) {
                                        clearInterval(message.guild.inter);
                                        msg.edit(new Discord.RichEmbed().setDescription(`** :mailbox_with_mail:  ؛ تم أرسال الرسالة الى  ${ycount} عضواً\n:lock: ؛ و لم أستطع أرسال الرسالة إلى ${xcount} عضواً**`).setTimestamp());
                                        message.guild.interval = false;
                                    } else if (!members[count].user.bot) {
                                        members[count].send(`${args}\n ${members}`).then(() => {
                                            ycount++;
                                        }).catch(err => {
                                            return xcount++;
                                        });
                                    }
                                    count++;
                                }, 500)
                            }
                        }


                    })
                    .catch((err) => {
                        return m.delete().catch (err => null);
                    });
            });
    } 
});

// تغيير الاسم و الصورة
client.on("message", async message => {
	if (message.content.startsWith(prefix + "setName")) {
		let args = message.content
		.split(" ")
		.slice(1)
		.join(" ");
		if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
			client.user.setUsername(args);
			message.channel.send(`✅ تم تغيير الاسم الى ..**${args}** `).then(m => m.delete(3000))
	} else if (message.content.startsWith(prefix + "setAvatar")) {
		let args = message.content
		.split(" ")
		.slice(1)
		.join(" ");
		if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
			client.user.setAvatar(args).catch(err => message.reply("```⛔.الرابط لا يعمل```")).then(m => m.delete(3000));
			message.channel.send(`**✅ تم تغيير الصورة**`).then(m => m.delete(3000))
	}
});

// عمل ريستارت
client.on("message", async message => {
	if (message.content.startsWith(prefix + "restart")) {
	if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
	message.delete()
	message.channel.send("```✅ ...جاري عمل ريستارت```").then(m => m.delete(3000))
	client.destroy();
    }
});

//تغير الحالة

client.on("message", async message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
      message.delete(1)
      client.user.setGame(argresult, 'https://twitch.tv/⟨D々C⟩');
	let e = '\```✅.تم تغيير الحالة\```'
	message.reply(e).then(m => m.delete(3000))
	    
    } else if(message.content.startsWith(prefix + 'setWatching')) {
	if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
      	message.delete(1)
        client.user.setActivity(argresult,{type: 'WATCHING'});
	let e = '\```✅.تم تغيير الحالة\```'
	message.reply(e).then(m => m.delete(3000))
	    
      } else if(message.content.startsWith(prefix + 'setListening')) {
	if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
      	message.delete(1)
        client.user.setActivity(argresult,{type: 'LISTENING'});
	let e = '\```✅.تم تغيير الحالة\```'
	message.reply(e).then(m => m.delete(3000))
	      
      } else if(message.content.startsWith(prefix + 'setPlaying')) {
	if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
      	message.delete(1)
        client.user.setActivity(argresult,{type: 'PLAYING'});
	let e = '\```✅.تم تغيير الحالة\```'
	message.reply(e).then(m => m.delete(3000))

      } else if(message.content.startsWith(prefix + 'setStatus')) {
	if(message.author.id !== "369810939165409280") return message.channel.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
      	message.delete(1)
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);
	let e = '\```✅.تم تغيير الحالة\```'
	message.reply(e).then(m => m.delete(3000))
      } else if(message.content === prefix + 'help'){
	if(message.author.id !== "369810939165409280") return message.reply.send("```🔥.انت لا تملك الصلاحيات```").then(m => m.delete(3000))
	let e = '\```✅.تم ارسال الاوامر خاص\```'
	message.reply(e).then(m => m.delete(3000))
	message.author.send(`\```CS\n ⇛ Welcome to BC ${client.user.username} ✱\n✱ This is HELP BC ${client.user.username} ✱\n1- ${prefix}setName (New-Name) / لتغيير الاسم\n2- ${prefix}setAvatar (LINK-Photo) / لتغيير الصورة\n3- ${prefix}setStreaming (Any Think) / لتغيير الحالة للاستريم\n4- ${prefix}setWatching (Any Think) / لتغيير الحالة للمشاهدة\n5- ${prefix}setListening (Any Think) / لتغيير الحالة للاستماع\n6- ${prefix}setPlaying (Any Think) / لتغيير حالة للعب\n7- ${prefix}setStatus (online , dnd , idel , offline) / لتغيير الحالة\n8- ${prefix}help / لإظهار هذه الواجهة\n9- ${prefix}BC (Any Think ) / لإرسال البوردكاست\n```\`)    
      
      }
	
  });




//************************************************ Z C o o L ************************************************************
//********************************************** MY NAME IS TITO  *******************************************************
