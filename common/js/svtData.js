﻿sortByElmentNo(master.mstSvt);
function svtDataTable(d){var f=["","0000ff","ff0000","00ff00"],m=" A B C D E EX ? ? \uff0d".split(" "),l="  + ++ ? ? ? ? ? ".split(" "),n=[[2E3,"\u795e\u6027"],[2001,"\u4eba\u578b"],[2002,"\u9f8d"],[2004,"\u7f85\u99ac"],[2005,"\u731b\u7378"],[2007,"\u963f\u723e\u6258\u8389\u4e9e\u81c9"],[2008,"\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"],[2009,"\u9a0e\u4e58"],[2010,"\u4e9e\u745f"],[2011,"\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"],[2012,
"\u611b\u4eba"],[2018,"\u6b7b\u9748\u8207\u60e1\u9b54"],[2019,"\u9b54\u6027"]],c,k;for(k=0;k<master.mstSvt.length&&master.mstSvt[k].id!=d;k++);var p;for(p=0;p<master.mstSvtLimit.length&&master.mstSvtLimit[p].svtId!=d;p++);var b="",b="<tr><td rowspan=7 align=center style='width:25%;height:300px;'>",b=5==master.mstSvt[k].type||9==master.mstSvt[k].type||99==master.mstSvt[k].type?b+("<img src=common/images/Servant/"+d+"_status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 />"):b+("<div class='slide'><div><img src=common/images/Servant/"+
d+"_status_servant_1.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></div><div><img src=common/images/Servant/"+d+"_status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></div><div><img src=common/images/Servant/"+d+"_status_servant_3.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></div></div>"),b=b+("</td><th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:35%;'><b>\u540d\u7a31</b></th><th style='width:15%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+
master.mstSvt[k].collectionNo+'</td><td class="star">');for(c=0;c<master.mstSvtLimit[p].rarity;c++)b+="\u2605";0==master.mstSvtLimit[p].rarity&&(b+="\uff0d");b+="</td><td colspan=2>";b=(c=findSvtNameZh(master.mstSvt[k].id))&&!document.getElementById("isJpTxt").checked?b+("<div class=ruby>"+master.mstSvt[k].ruby+"</div>"+c):b+master.mstSvt[k].name;b+="</td>";document.title=findSvtNameZh2(d)+" - Servant\u8cc7\u6599\u67e5\u8a62";for(c=0;c<mstClass.length;c++)if(mstClass[c].id==master.mstSvt[k].classId){b+=
"<td>"+mstClass[c].name+"</td>";break}b+="<td>"+"\uff1f\u4eba\u5929\u5730\u661f\u7378".split("")[master.mstSvt[k].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:10%;'><b>\u7e6a\u5e2b</b></th><th style='width:10%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+master.mstSvtLimit[p].hpBase+" / "+master.mstSvtLimit[p].hpMax+"</td><td>"+master.mstSvtLimit[p].atkBase+" / "+master.mstSvtLimit[p].atkMax+"</td>";for(c=0;c<
master.mstIllustrator.length;c++)if(master.mstIllustrator[c].id==master.mstSvt[k].illustratorId){b+="<td><a href='illustrator.html#"+master.mstSvt[k].illustratorId+"'>"+master.mstIllustrator[c].name.replace(/\(/g,"<br>(")+"</a></td>";break}b+="<td>";if(-1!=master.mstSvt[k].cvId)for(c=0;c<master.mstCv.length;c++){if(master.mstCv[c].id==master.mstSvt[k].cvId){b+="<a href='cv.html#"+master.mstSvt[k].cvId+"'>"+master.mstCv[c].name.replace(/\uff06/g,"<br>\uff06<br>")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";
var b=b+"</td>"+("<td>"+" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" ")[master.mstSvtLimit[p].policy]+"\u30fb"+" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 ? \u82b1\u5ac1".split(" ")[master.mstSvtLimit[p].personality]+"</td><td>"+["","\u7537\u6027","\u5973\u6027","\u7121"][master.mstSvt[k].genderType]+"</td></tr>"),r=[];for(c in master.mstSvt[k].individuality)for(var a in n)master.mstSvt[k].individuality[c]==n[a][0]&&r.push(n[a][1]);b+="<tr><th>\u7279\u6027</th><td colspan=5 align=center>"+
r+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=b;n='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th><b>\u57fa\u672cNP\u7372\u5f97\u7387(Atk / Def)</b></th></tr><tr align="center">';
for(a=1;4>=a;a++){n+="<td>";for(c=b=0;c<master.mstSvt[k].cardIds.length;c++)master.mstSvt[k].cardIds[c]==a&&b++;4!=a&&(n+=b+"\u5f35");for(c=0;c<master.mstSvtCard.length;c++)master.mstSvtCard[c].svtId==master.mstSvt[k].id&&master.mstSvtCard[c].cardId==a&&(4!=a&&(n+=" \u5404"),n+=master.mstSvtCard[c].normalDamage.length+"Hit",1<master.mstSvtCard[c].normalDamage.length&&(n+="s"));n+="</td>"}n+="<td>"+master.mstSvt[k].starRate/10+"%</td><td>"+master.mstSvt[k].deathRate/10+"%</td><td>"+master.mstSvtLimit[p].criticalWeight+
"</td><td>";for(c=0;c<master.mstTreasureDeviceLv.length;c++)if(Math.floor(master.mstTreasureDeviceLv[c].treaureDeviceId/100)==Math.floor(master.mstSvt[k].id/100)){n+=master.mstTreasureDeviceLv[c].tdPoint/100+"% / "+master.mstTreasureDeviceLv[c].tdPointDef/100+"%";break}n+="</td></tr>";document.getElementById("svtCtrlData").innerHTML=n;b=n="";r=1;for(c=0;c<master.mstSvtSkill.length;c++)if(master.mstSvtSkill[c].svtId==master.mstSvt[k].id){r++;for(a=0;a<master.mstSkill.length;a++)if(master.mstSvtSkill[c].skillId==
master.mstSkill[a].id){b+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[a].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[a].name+"</b></td>";break}for(a=0;a<master.mstSkillLv.length;a++)master.mstSvtSkill[c].skillId==master.mstSkillLv[a].skillId&&1==master.mstSkillLv[a].lv&&(b+="<td colspan=5>\u51b7\u537b"+master.mstSkillLv[a].chargeTurn+"\u56de\u5408</td>");b+="<td colspan=5>";-1==master.mstSvtSkill[c].condLimitCount?
b+="\u6d3b\u52d5":(0==master.mstSvtSkill[c].condLimitCount&&0==master.mstSvtSkill[c].condQuestId&&0==master.mstSvtSkill[c].condLv&&(b+="\u521d\u671f"),0!=master.mstSvtSkill[c].condLimitCount&&(b+="\u9748\u57fa\u518d\u81e8\u7b2c"+master.mstSvtSkill[c].condLimitCount+"\u968e\u6bb5<br>"),0!=master.mstSvtSkill[c].condLv&&(b+="Lv."+master.mstSvtSkill[c].condLv+"<br>"),0!=master.mstSvtSkill[c].condQuestId&&(b+="\u901a\u904e\u4efb\u52d9 "+questRea(master.mstSvtSkill[c].condQuestId)+"<br>"));var b=b+"</td></tr>",
h=[];for(a=0;a<skDetail.length;a++)if(master.mstSvtSkill[c].skillId==skDetail[a][0]){h=skDetail[a].slice(0);break}if(document.getElementById("isJpTxt").checked||!h[1])for(a=0;a<master.mstSkillDetail.length;a++)if(master.mstSvtSkill[c].skillId==master.mstSkillDetail[a].id){h[1]=master.mstSkillDetail[a].detail;break}var q=[];document.getElementById("isJpTxt").checked?q[0]=h[1].slice(0):(h[1]=h[1].replace(/ |\u3000/g,""),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),q=h[1].split(/\uff06|\uff0b/));for(var r=
r+q.length,e=0;e<q.length;e++){q[e].search(/\{0\}|Lv/);q[e]=q[e].replace(/\{0\}/g,"Lv.");q[e]=q[e].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');q[e]=q[e].replace(/\u3010/g,'<font color="#006400 ">\u3010');q[e]=q[e].replace(/\u3011/g,"\u3011</font>");if(document.getElementById("isJpTxt").checked)b+="<tr><td colspan=12>"+q[e]+"</td>";else if(b+="<tr><td colspan=2>"+q[e]+"</td>",h[2+e]&&1<h[2+e].split("/").length-1){var t=[],t=h[2+e].split(/\//);for(a in t)b+="<td align=center style='width:50px'>"+
t[a]+"</td>"}else b+="<td colspan=10>",b=h[2+e]?b+("\u3000"+h[2+e].replace(/\//g," / ")):"undefined"!==typeof h[2+e]&&0==h[2+e].length?b+"\u3000---":b+"\u3000\u5f85\u88dc";b+="</td></tr>"}}0<b.length&&(n+="<tr><th style='width:60px' rowspan="+r+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+b+"");if(0!=master.mstSvt[k].classPassive.length){b=
"";for(c=r=0;c<master.mstSvt[k].classPassive.length;c++){r++;for(a=0;a<master.mstSkill.length;a++)if(master.mstSvt[k].classPassive[c]==master.mstSkill[a].id){b+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[a].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[a].name+"</b></td>";break}h=[];for(a=0;a<skDetail.length;a++)if(master.mstSvt[k].classPassive[c]==skDetail[a][0]){h=skDetail[a].slice(0);
break}if(document.getElementById("isJpTxt").checked||!h[1])for(a=0;a<master.mstSkillDetail.length;a++)if(master.mstSvt[k].classPassive[c]==master.mstSkillDetail[a].id){h[1]=master.mstSkillDetail[a].detail;break}q=[];document.getElementById("isJpTxt").checked?q[0]=h[1].slice(0):(h[1]=h[1].replace(/ |\u3000/g,""),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),q=h[1].split(/\uff06|\uff0b|\+/));b+="<td colspan=10>";for(e=0;e<q.length;e++)if(q[e].search(/\{0\}|Lv/),q[e]=q[e].replace(/\{0\}/g,"Lv."),q[e]=
q[e].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>'),q[e]=q[e].replace(/\u3010/g,'<font color="#006400 ">\u3010'),q[e]=q[e].replace(/\u3011/g,"\u3011</font>"),document.getElementById("isJpTxt").checked)b+=q[e];else if(0!=e&&(b+="<br>"),b+=q[e],h[2+e]&&1<h[2+e].split("/").length-1)for(a in b+=q[e]+"\uff1a",t=[],t=h[2+e].split(/\//),t)b+=t[a];else b=h[2+e]?b+("\uff1a"+h[2+e].replace(/\//g," / ")):"undefined"!==typeof h[2+e]&&0==h[2+e].length?b+"":b+"\uff1a\u5f85\u88dc";b+="</td></tr>"}n+="<tr><th rowspan="+
master.mstSvt[k].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+b+""}b="";for(c=r=0;c<master.mstTreasureDevice.length;c++)if(master.mstTreasureDevice[c].seqId==master.mstSvt[k].id){r+=2;a=0;b+="<th colspan=2><b>\u540d\u7a31</b></th><th colspan=2><b>\u7b49\u7d1a</b></th><th colspan=2><b>\u7a2e\u985e</b></th><th colspan=4><b>\u89e3\u653e\u4efb\u52d9</b></th><th colspan=2>\u653b\u64ca\u6b21\u6578</th></tr>";b+='<tr align="center"><td colspan=2><div class=ruby>'+master.mstTreasureDevice[c].ruby+
"</div>";for(a=0;a<master.mstSvtTreasureDevice.length;a++)if(master.mstTreasureDevice[c].id==master.mstSvtTreasureDevice[a].treasureDeviceId){b+='<b><font color="#'+f[master.mstSvtTreasureDevice[a].cardId]+'">'+master.mstTreasureDevice[c].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[c].rank+"</td><td colspan=2>"+master.mstTreasureDevice[c].typeText.replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,
"Saber")+"</td><td colspan=4>";b=0==master.mstSvtTreasureDevice[a].condQuestId&&0==master.mstSvtTreasureDevice[a].condLv&&0==master.mstSvtTreasureDevice[a].condFriendshipRank?b+"\u521d\u671f":null!=findName(master.mstQuest,master.mstSvtTreasureDevice[a].condQuestId)?b+questRea(master.mstSvtTreasureDevice[a].condQuestId):0!=master.mstSvtTreasureDevice[a].condLv?b+("Lv."+master.mstSvtTreasureDevice[a].condLv+"\u89e3\u653e"):0!=master.mstSvtTreasureDevice[a].condFriendshipRank?b+("\u7d46\u7b49\u7d1a"+
master.mstSvtTreasureDevice[a].condFriendshipRank+"\u89e3\u653e"):b+"\u672a\u958b\u653e";b+="</td>";break}h=[];for(e in tdDetail)if(master.mstTreasureDevice[c].id==tdDetail[e][0]){h=tdDetail[e].slice(0);break}if(document.getElementById("isJpTxt").checked||!h[1])for(e in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[c].id==master.mstTreasureDeviceDetail[e].id){h[1]=master.mstTreasureDeviceDetail[e].detail;break}b+="<td colspan=2>";-1==h[1].search(/\u653b\u64ca[^\u529b]|\u653b\u6483[^\u529b]/)?
b+="\uff0d":(b=0<master.mstSvtTreasureDevice[a].damage.length?b+master.mstSvtTreasureDevice[a].damage.length:b+"1",b+="Hit",1<master.mstSvtTreasureDevice[a].damage.length&&(b+="s"));b+="</td></tr>";a=[];document.getElementById("isJpTxt").checked?a[0]=h[1].slice(0):(h[1]=h[1].replace(/ |\u3000/g,""),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),a=h[1].split(/\uff06|\uff0b/));r+=a.length;for(e=0;e<a.length;e++){a[e].search(/\{0\}|Lv/);a[e].search(/<O|<\u30aa/);a[e]=a[e].replace(/\{0\}/g,"Lv.");a[e]=a[e].replace(/<O/g,
'<font color="#CC6600"><br>< O');a[e]=a[e].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');a[e]=a[e].replace(/P>/g,"P></font>");a[e]=a[e].replace(/\u30d7>/g,"\u30d7></font>");a[e]=a[e].replace(/\u3010/g,'<font color="#006400 ">\u3010');a[e]=a[e].replace(/\u3011/g,"\u3011</font>");a[e]=a[e].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');a[e]=a[e].replace(/\n/g,"<br>");if(document.getElementById("isJpTxt").checked)b+="<td colspan=12>"+a[e]+"</td>";else if(0!=e&&(b+="<tr>"),b+="<td colspan=2>"+
a[e]+"</td>",h[2+e]&&1<h[2+e].split("/").length-1)for(g in t=[],t=h[2+e].split(/\//),t)b+="<td align=center colspan=2>"+t[g]+"</td>";else b+="<td colspan=10>",b=h[2+e]?b+("\u3000"+h[2+e]):"undefined"!==typeof h[2+e]&&0==h[2+e].length?b+"\u3000---":b+"\u3000\u5f85\u88dc";b+="</td></tr>"}}n+="<tr><th rowspan="+r+"><b>\u5bf6\u5177</b></th>"+b+"";document.getElementById("svtSkTdData").innerHTML=n;a="";a="<tr><th rowspan=2 style='width:250px'>\u80fd\u529b\u503c</th><th style='width:80px'>\u7b4b\u529b</th><th style='width:80px'>\u8010\u4e45</th><th style='width:80px'>\u654f\u6377</th><th style='width:80px'>\u9b54\u529b</th><th style='width:80px'>\u5e78\u904b</th><th style='width:80px'>\u5bf6\u5177</th></tr><tr align=\"center\"><td>"+
m[Math.floor(master.mstSvtLimit[p].power/10)]+l[master.mstSvtLimit[p].power%10]+"</td><td>"+m[Math.floor(master.mstSvtLimit[p].defense/10)]+l[master.mstSvtLimit[p].defense%10]+"</td><td>"+m[Math.floor(master.mstSvtLimit[p].agility/10)]+l[master.mstSvtLimit[p].agility%10]+"</td><td>"+m[Math.floor(master.mstSvtLimit[p].magic/10)]+l[master.mstSvtLimit[p].magic%10]+"</td><td>"+m[Math.floor(master.mstSvtLimit[p].luck/10)]+l[master.mstSvtLimit[p].luck%10]+"</td><td>"+m[Math.floor(master.mstSvtLimit[p].treasureDevice/
10)]+l[master.mstSvtLimit[p].treasureDevice%10]+"</td></tr>";m=findSvtFs(master.mstSvt[k].id);l=5;f=[];m!=master.mstSvt[k].friendshipId&&(l=10);a+="<tr><th rowspan="+2*l/5+'>\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th></th></tr><tr align="center">';for(c in master.mstFriendship)master.mstFriendship[c].id==m&&10>master.mstFriendship[c].rank&&(f[master.mstFriendship[c].rank]=master.mstFriendship[c].friendship);for(c=0;5>c;c++)a=0==c?
a+("<td>"+f[c]+"</td>"):a+("<td>"+(f[c]-f[c-1])+"<br>("+f[c]+")</td>");a+="<td></td></tr>";if(10==l){a+='<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th><th></th></tr><tr align="center">';for(c=5;10>c;c++)a+="<td>"+(f[c]-f[c-1])+"<br>("+f[c]+")</td>";a+="<td></td></tr>"}for(c=0;c<master.mstSvtComment.length;c++)m="",master.mstSvt[k].id==master.mstSvtComment[c].svtId&&(a+="<tr><th width=150>",0==master.mstSvtComment[c].condValue?a+="<b>\u89d2\u8272\u8a73\u7d30</b>":6>master.mstSvtComment[c].condValue?
a+="<b>\u7d46\u7b49\u7d1a"+master.mstSvtComment[c].condValue+"</b>":1==master.mstSvtComment[c].condType&&(a+="<b>\u901a\u904e\u4efb\u52d9</b><br>"+questRea(master.mstSvtComment[c].condValue)),a+="</th>",m=0==master.mstSvtComment[c].condValue%2?' bgcolor=" #ECF2F3"':"",a+="<td colspan=6"+m+">"+master.mstSvtComment[c].comment.replace(/\n/g,"<br>"),a+="</td></tr>");document.getElementById("svtInfoData").innerHTML=a;l="";l="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(f=0;4>f;f++){m="";
0==f%2&&(m=' bgcolor=" #ECF2F3"');0!=f&&(l+="<tr>");l+="<td width=80 "+m+">\u7b2c"+(f+1)+"\u968e\u6bb5</td><td width=450"+m+">";for(c=0;c<master.mstCombineLimit.length;c++)if(master.mstCombineLimit[c].id==master.mstSvt[k].id&&master.mstCombineLimit[c].svtLimit==f){for(a=0;a<master.mstCombineLimit[c].itemIds.length;a++)l+="<a href='item_drop.html#"+master.mstCombineLimit[c].itemIds[a]+"'><img src='common/images/icon/items/"+master.mstCombineLimit[c].itemIds[a]+".png' title='"+findItemName(master.mstCombineLimit[c].itemIds[a])+
"' onerror=\"javascript:this.src='common/images/icon/faces/0.png'\" class='itemM' /></a>x"+master.mstCombineLimit[c].itemNums[a]+"\u3000";l+=addCommas(master.mstCombineLimit[c].qp)+"QP"}l+="</td></tr>"}l+="<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";for(c=f=0;c<master.mstCombineSkill.length;c++)if(m="",0==c%2&&(m=' bgcolor=" #ECF2F3"'),master.mstCombineSkill[c].id==master.mstSvt[k].id){1!=master.mstCombineSkill[c].skillLv&&(l+="<tr>");l+="<td"+m+">Lv."+master.mstCombineSkill[c].skillLv+
"\u2192Lv."+(master.mstCombineSkill[c].skillLv+1)+"</td><td"+m+">";for(a=0;a<master.mstCombineSkill[c].itemIds.length;a++)l+="<a href='item_drop.html#"+master.mstCombineSkill[c].itemIds[a]+"'><img src='common/images/icon/items/"+master.mstCombineSkill[c].itemIds[a]+".png' title='"+findItemName(master.mstCombineSkill[c].itemIds[a])+"' onerror=\"javascript:this.src='common/images/icon/faces/0.png'\" class='itemM' /></a>x"+master.mstCombineSkill[c].itemNums[a]+"\u3000";l+=addCommas(master.mstCombineSkill[c].qp)+
"QP</td></tr>";f++}0==f&&(l+="<td colspan=2>\u7121</td></tr>");document.getElementById("svtCmbnData").innerHTML=l;document.getElementById("svtImgData").innerHTML="";document.getElementById("svtImgData").innerHTML="<tr><td><img src=common/images/Servant/"+d+"_card_servant_1.png onerror=\"this.style='display:none'\"></img><img src=common/images/Servant/"+d+"_card_servant_2.png onerror=\"this.style='display:none'\"></img><img src=common/images/Servant/"+d+"_card_servant_3.png onerror=\"this.style='display:none'\"></img><br><img src=common/images/CharaGraph/"+
d+"a.png onerror=\"this.style='display:none'\" width=1024></img><br><img src=common/images/CharaGraph/"+d+"b.png onerror=\"this.style='display:none'\" width=1024></img><br><img src=common/images/CharaGraph/"+d+"c.png onerror=\"this.style='display:none'\"></img></td></tr>";d="";if(99==master.mstSvt[k].type)$("#chart_div").css("display","none");else for($("#chart_div").css("display","block"),d="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>",c=0;c<master.mstSvt[k].rewardLv;c++)for(f=
0;f<master.mstSvtExp.length;f++)if(master.mstSvt[k].expType==master.mstSvtExp[f].type&&master.mstSvtExp[f].lv==c+1){m="";1==master.mstSvtExp[f].lv%2&&(m=' bgcolor=" #ECF2F3"');d+='<tr align="center"><td'+m+">Lv."+master.mstSvtExp[f].lv+"</td><td"+m+">"+Math.floor(master.mstSvtLimit[p].atkBase+(master.mstSvtLimit[p].atkMax-master.mstSvtLimit[p].atkBase)*master.mstSvtExp[f].curve/1E3)+"</td><td"+m+">"+Math.floor(master.mstSvtLimit[p].hpBase+(master.mstSvtLimit[p].hpMax-master.mstSvtLimit[p].hpBase)*
master.mstSvtExp[f].curve/1E3)+"</td><td"+m+">"+(master.mstSvtExp[f].curve-master.mstSvtExp[f-1].curve)/10+"%</td></tr>";break}document.getElementById("svtLvData").innerHTML=d;$("img").error(function(){$(this).css({visibility:"hidden"})});$(function(){$(".slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2E3})})}
function classidChange(){var d;for(d=svtid.options.length-1;0<=d;d--)svtid.remove(d);if(0==classid.value)for(d=0;d<master.mstSvt.length;d++){if(1==master.mstSvt[d].type||2==master.mstSvt[d].type||5==master.mstSvt[d].type||9==master.mstSvt[d].type||99==master.mstSvt[d].type){var f=findSvtNameZh(master.mstSvt[d].id);f?svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+" "+f,master.mstSvt[d].id)):svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+" "+master.mstSvt[d].name,
master.mstSvt[d].id))}}else for(d=0;d<master.mstSvt.length;d++)master.mstSvt[d].classId!=classid.value||1!=master.mstSvt[d].type&&2!=master.mstSvt[d].type&&5!=master.mstSvt[d].type&&9!=master.mstSvt[d].type&&99!=master.mstSvt[d].type||((f=findSvtNameZh(master.mstSvt[d].id))?svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+" "+f,master.mstSvt[d].id)):svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+" "+master.mstSvt[d].name,master.mstSvt[d].id)));0!=classid.value&&svtlocation(svtid[0].value)}
function svtidset(){classidChange();svtlocation(svtid[0].value)}function svtidChange(){var d;for(d=svtlv.options.length-1;0<=d;d--)svtlv.remove(d);for(d in master.mstSvtLimit)if(master.mstSvtLimit[d].svtId==svtid.value&&4==master.mstSvtLimit[d].limitCount){for(var f=1;f<=master.mstSvtLimit[d].lvMax;f++)svtlv.options.add(new Option("Lv."+f,f));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(d){d="";for(var f in master.mstSvt)if(master.mstSvt[f].id==svtid.value){d=0!=master.mstSvt[f].collectionNo?d+("?no="+master.mstSvt[f].collectionNo):d+("?id="+master.mstSvt[f].id);break}"file:"==location.protocol?changeURL(location.protocol+"//"+location.pathname+d):changeURL(location.protocol+"//"+location.hostname+location.pathname+d);svtidChange()}
function svtlvChange(){for(var d in master.mstSvtLimit)if(master.mstSvtLimit[d].svtId==svtid.value){for(var f in master.mstSvt)if(master.mstSvt[f].id==svtid.value){for(var m in master.mstSvtExp)if(atk.value=master.mstSvtLimit[d].atkBase,hp.value=master.mstSvtLimit[d].hpBase,four(),master.mstSvt[f].expType==master.mstSvtExp[m].type&&master.mstSvtExp[m].lv==svtlv.value){atk.value=Math.floor(master.mstSvtLimit[d].atkBase+(master.mstSvtLimit[d].atkMax-master.mstSvtLimit[d].atkBase)*master.mstSvtExp[m].curve/
1E3);hp.value=Math.floor(master.mstSvtLimit[d].hpBase+(master.mstSvtLimit[d].hpMax-master.mstSvtLimit[d].hpBase)*master.mstSvtExp[m].curve/1E3);four();break}break}break}}function four(){hpp.value=parseInt(hp.value)+990;atkp.value=parseInt(atk.value)+990}
function urlId(){$("#classid").val(0);classidChange();var d="1",f="";getUrl("no")&&(d=getUrl("no"));getUrl("id")&&(f=getUrl("id"));if(d){if(0!=f.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&f==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||
99==master.mstSvt[i].type)&&d==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};