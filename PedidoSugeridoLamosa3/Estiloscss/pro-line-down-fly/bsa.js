var _bsap={apiurl:'http:\/\/s3.buysellads.com\/r\/',dz:[],dii:[],drop:function(a,b){this.dii[b]=this.dii[b]||0;var l='bsap_'+b+(++this.dii[b]===1?'':'_'+this.dii[b]);document.write('<div id="'+l+'" class="bsap_'+b+' bsap"></div>');this.idrop(l,a,b)},idrop:function(i,a,b){this.dz[b]=this.dz[b]||[];this.dz[b].push(i);if(!document.getElementById('_bsap_js_'+a)){var c=document.createElement('script'),d=new Date();d.setMinutes(0);d.setSeconds(0);d.setMilliseconds(0);c.type='text/javascript';c.id='_bsap_js_'+a;c.src=this.apiurl+'s_'+a+'.js?v='+d.getTime();c.setAttribute('async','async');document.getElementsByTagName('head')[0].appendChild(c)}else if(this.jz)this.deploy()},exec:function(){for(var cl=function(cl){for(var n=!!document.getElementsByClassName,ret=[],els=n?document.getElementsByClassName(cl):document.getElementsByTagName('*'),p=n?false:new RegExp('(^|\\s)'+cl+'(\\s|$)'),i=0;i<els.length;i++)if(!p||p.test(els[i].className))ret.push(els[i]);return ret},bs=cl('bsarocks'),id,pk,p=/bsap_([a-f0-9]+)/i,i=0;i<bs.length&&(id=bs[i].getAttribute('id'))&&(rid=id.split('_')[1])&&(pk=bs[i].getAttribute('rel')||((pk=p.exec(bs[i].className))?pk[1]:''))&&(bs[i].className='bsap_'+rid+' bsap');i++)this.idrop(id,pk,rid)},deploy:function(){for(var zi=0,wi,z,a,b,db;zi<this.jz.length&&(z=this.jz[zi])&&(wi=1);zi++)while(++wi<10&&(db=this.dz[z.id])&&(a=db.pop())&&(b=document.getElementById(a))&&!b.innerHTML.length)new this.zone(b,z,this)},zone:function(b,z,bsa){bsa.filter(z.filterby,function(f){var zf=[],zs=z.filters,i,j;for(i=0;zs&&i<f.length;i++)zf=zf.concat(typeof zs[f[i].toLowerCase()]=='object'?zs[f[i].toLowerCase()].ads:[]);zf=!zf.length?(zs.all||z):{ads:zf};var c=(!zf||!zf.ads||!zf.ads.length)?[]:bsa.getads(zf,z.nads),d,e=c[0],t='',o='',fr,a,tf=z.format?z.format:(z.type&&z.type==1?2:0),css=function(x){var el=document.createElement('style');el.type='text/css';el.styleSheet?(el.styleSheet.cssText=x):el.appendChild(document.createTextNode(x));document.getElementsByTagName('head')[0].appendChild(el)};if(t<=1){var ah=(typeof(ShowAdHereBanner)==='object'?ShowAdHereBanner[z.id]:z.showadhere)>0,ra=(typeof(RepeatAll)==='object'?RepeatAll[z.id]:z.repeathere)>0,ta=(typeof(ShowTestAd)==='object'?ShowTestAd[z.id]:z.showtestads)}if(tf==0){if(typeof(ShowAdHereBanner)==='undefined'){var bs=z.bannerstyles,w=z.width,h=z.height,sc='div.bsap_'+z.id+'{width:'+(z.vertical>0?w+'px':'100%')+';display:block;}div.bsap_'+z.id+' a{width:'+w+'px;}div.bsap_'+z.id+' a img{padding:0;}div.bsap_'+z.id+' a em{font-style:normal;}';for(i=0;i<bs.length;i++)sc+='div.bsap_'+z.id+' '+bs[i];if(w<100)sc+='div.bsap_'+z.id+' a em{display:block;text-indent:-9000px;}div.bsap_'+z.id+' a{height:'+h+';line-height:0;}div.bsap_'+z.id+' a.adhere{font-size:0;}';sc+='div.bsap_'+z.id+' a.adhere{width:'+w+'px;height:'+h+'px;line-height:'+(h*8)+'%;}html>body div.bsap_'+z.id+' a.adhere{width:'+(w-2)+'px;height:'+(h-2)+'px;}div.bsap_'+z.id+' img.s{height:0;width:0;}';css(sc)}for(i=0,j=0;i<c.length&&(a=bsa.getads(c[i],1)[0]);i++,(Math.random()*100<(z.empties||0))||(j++,o+='<a href="'+a.link+'" class="ad'+j+' '+(j%2===0?'even':'odd')+'" onclick="_bsap.rocks(\'click\','+a.id+', '+z.id+')" title="'+a.alt+'" id="bsa_'+a.id+'" target="_blank"><img src="'+a.img+'" width="'+z.width+'" height="'+z.height+'" alt="'+a.alt+'"/></a>',t+=a.id+';')){}for(i=j;i<z.nads&&ah&&(i<(ra?z.nads:(j+1)));i++,o+='<a href="http://buysellads.com/buy/detail/'+z.siteid+'/zone/'+z.id+'" title="Advertise Here" class="adhere ad'+i+' '+(i%2===0?'even':'odd')+'" target="_blank">Advertise Here</a>'){}}else if(tf==2){for(i=0;i<ta;i++)c.push({id:-i,link:'http://buysellads.com',title:'BuySellAds.com Online Advertising',text:'Join over 1,000 high quality advertisers who advertise across 750 successful websites, and take control of your ad space!'});css('.bsa_padint{font-family:helvetica,arial,verdana,sans-serif;font-size:12px;position:relative}.bsa_padint ul.bsa_ads{list-style-type:none;margin:0;padding:0}.bsa_padint ul.bsa_ads li{margin:0;padding:0;position:relative}.bsa_padint ul.bsa_ads em.bt{color:#06c;font-size:14px;font-weight:700;text-decoration:underline}div.bsa_idb{border-top:1px solid #f1f1f1;bottom:0;color:#999;font-size:10px;height:5px;left:0;margin:0;padding:0;position:absolute;width:100%}div.bsa_idb .bsa_idl{background:#fff;bottom:2px;line-height:7px;padding:0 3px;position:absolute;right:5px}div.bsa_idb a{color:#999;height:3px;margin:0;padding:0;text-decoration:none}div.bsa_idb a em{font-style:normal}div.bsa_idb a:hover{background:none;color:#666}div.bsa_idb a:hover em{font-style:italic}ul.bsa_ads li *{cursor:pointer}.bsapvariable{overflow:hidden;visibility:visible;width:auto}.bsapvariable ul.bsa_ads li{float:left;padding:5px;text-align:left;width:250px}div.bsapvariable ul.bsa_ads li a,div.bsapvariable div.bsa_idb span.bsa_idl,div.bsapvariable div.bsa_idb{clear:both;height:auto;margin:0;position:relative;text-decoration:none;width:250px}.bsa_padint ul.bsa_ads em{display:block;font-style:normal}div.bsapvariable .bsa_padint ul.bsa_ads em.bd{color:black;text-decoration:none}div.bsapvariable div.bsa_idb a{display:block;height:13px;text-align:right;width:250px}.bsa_padint ul.bsa_ads a:hover,.bsa_padint ul.bsa_ads a:hover div.bwr{background-color:#f7f7f7}');o+='<div class="bsap_unit bsapvariable"><div class="bsa_padint"><ul class="bsa_ads">';for(i=0,a;i<c.length&&(a=bsa.getads(c[i],1)[0]);i++,o+='<li class="bsapt_'+a.id+' ad'+i+' '+(i%2===0?'even':'odd')+'"><a href="'+a.link+'" onclick="window.parent._bsap.rocks(\'click\','+a.id+','+z.id+')" target="_blank"><div class="bwr"><em class="bt">'+a.title+'</em><em class="bd">'+a.text+'</em></div></a></li>',t+=a.id+';'){}o+='</ul>';if(c.length>0)o+='<div class="bsa_idb"><span class="bsa_idl"><a href="http:\/\/buysellads.com\/buy\/detail\/'+z.siteid+'" target="_blank">ads by <em>BSA</em></a></span></div></div></div>'}b.innerHTML=o;_bsap.rocks('imp',t,z.id)})},getads:function(d,n){var b='',c,a=d.ads,tdiff=0,ret=[],got=[],i;if(!a)return[d];if(a.length<=n||a.length===1)return this.shuffle(a);for(i=0;i<a.length;i++)b+=new Array(a[i].per||(a[i].cap-a[i].current+1)).join(i+',');b=b.substr(0,b.length-1).split(',');while(ret.length<n&&i++<n*100&&(c=a[b[Math.floor(Math.random()*b.length)]]))if(n===1)return[c];else if(!got[c.id]){got[c.id]=1;ret.push(c)}return ret},shuffle:function(o){for(var j,x,i=o.length;i;j=parseInt(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);return o},filter:function(fs,fn){var s=['all'];if(!fs)fn(s);if(fs.os&&fs.os[(os=(/(win|mac|linux|iphone|blackberry|pike)/.exec(navigator.platform.toLowerCase())||['?'])[0])])s.push(os);if(fs.geo){var got=0,c=document.cookie,i=c.indexOf('country=');IAm=function(y){if(y!=='?'){var d=new Date(),nd=+d;d.setTime(30*3600000+nd);document.cookie='country='+y+'; expires='+d.toGMTString()+'; path=/'}if(!got){got=y;s.push(y);fn(s)}};if(i>=0)IAm(c.substring(i+7+1).split(';')[0]);else{var e=document.createElement('script');e.type='text/javascript';e.src=document.location.protocol+'\/\/stats.buysellads.com\/country.php';document.getElementsByTagName('head').item(0).appendChild(e);setTimeout(function(){IAm('?')},100)}}else fn(s)},interpret_json:function(a){this.jz=typeof this.jz=='object'?this.jz.concat(a.zones):a.zones;this.deploy()},rocks:function(t,b,z){var u=this.gen('bsau',30),s=this.gen('bsas',1/2),img=new Image();img.src='http://stats.buysellads.com/'+t+'.gif?z='+z+'&b='+b+'&g='+u+'&s='+s+'&sw='+screen.width+'&sh='+screen.height+'&br='+this.br()+'&r='+Math.random()},br:function(){var a=navigator.userAgent,p=navigator.platform,m=function(r,h){for(var i=0;i<h.length;i++)r=r.replace(h[i][0],h[i][1]);return r},i=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['Minefield','Firefox']]):a).toLowerCase();return[(/(camino|chrome|firefox|opera|msie|safari)/.exec(i)||['','?'])[1],parseFloat((/(camino|chrome|firefox|opera|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/.exec(i)||[0,0,0,0])[3],10)||0,(/(win|mac|linux|iphone|blackberry|pike)/.exec(p.toLowerCase())||['?'])[0]]},gen:function(w,e){var c=document.cookie,i=c.indexOf(w+'=');if(i>=0)return c.substring(i+w.length+1).split(';')[0];else{var d=new Date(),nd=+d;d.setTime(e*3600000+nd);document.cookie=w+'='+(nd+Math.random().toString().substr(2,7))+'; expires='+d.toGMTString()+'; path=/';return-1}}};_bsap_loadedme=1;if(typeof(_bsap_loadme)==='object'){for(var _bi=0;_bi<_bsap_loadme.length;_bi++){_bsap_loadme[_bi]();_bsap_loadme[_bi]=function(){}}}if(document.addEventListener)document.addEventListener('DOMContentLoaded',function(){_bsap.exec()},false);else if((/msie/.test(navigator.userAgent.toLowerCase()))&&window==top){(function(){try{document.documentElement.doScroll('left')}catch(error){setTimeout(arguments.callee,0);return}_bsap.exec()})();window.document.onreadystatechange=function(){if(window.document.readyState=='complete'){window.document.onreadystatechange=null;_bsap.exec()}}}oldonload=window.onload;window.onload=function(){_bsap.exec();if(oldonload)oldonload()};_bsap.exec();