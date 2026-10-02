'use strict';
const T = window.TRIP;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external = (url,label,cls='') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
function appleMapLink(p,directions=false){return `https://maps.apple.com/?${directions?'daddr':'q'}=${encodeURIComponent(p.search||'南京 '+p.name+' '+p.address)}`;}
function appleNav(p,label='苹果地图 ↗',cls=''){return `<a class="btn nav ${cls}" data-apple-map="${esc(p.id)}" href="${esc(appleMapLink(p))}">${esc(label)}</a>`;}
const defaultState = () => ({day2:'river',day4:'full',sunrise:false,done:[]});
let state = defaultState();
try { const saved=JSON.parse(localStorage.getItem('nanjing-trip-2026-v2')); if(saved) state={...state,...saved}; } catch {}
if(!Array.isArray(state.done)) state.done=[];
const allowedModes={day2:['river','lake'],day4:['full','easy']};
for(const [key,values] of Object.entries(allowedModes)) if(!values.includes(state[key])) state[key]=values[0];
let cur=0, selectedId=null, toastTimer;
const stepsFor = d => {
  let steps=d.steps;
  if(d.id===5 && state.sunrise) steps=T.sunrise.day5Steps;
  const mode=state[`day${d.id}`];
  return steps.filter(s=>!s.modes || s.modes.includes(mode));
};
const placeFor = s => s.place ? T.places[s.place] : null;
const stepName = s => s.name || placeFor(s)?.name || '';
const weatherFor = d => T.weather.rows.find(w=>w.day===d);
const sourceLinks = keys => (keys||[]).map(k=>T.sources[k]).filter(Boolean).map(s=>external(s.url,s.title)).join(' · ');
function save(){try{localStorage.setItem('nanjing-trip-2026-v2',JSON.stringify(state));}catch{toast('浏览器未允许保存，当前选择仍可使用。');}}
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2500);}
function sourceDetails(p){return p ? `<div class="detail-label">资料与现场核对</div><div class="source-links">${sourceLinks(p.sources)}</div>${p.positionNote?`<p>${esc(p.positionNote)}</p>`:''}`:'';}
function card(s,d,index,alternative=false){
  const p=placeFor(s), done=state.done.includes(s.id), name=stepName(s);
  const status=s.status && !(s.status.includes('已预约') && p?.reservation?.includes('已预约')) ? s.status : '';
  const badges=[status?`<span class="chip ${/已预约|入住/.test(status)?'booked':/必吃|必去/.test(status)?'must':'pending'}">${esc(status)}</span>`:'',p?.reservation?`<span class="chip ${p.reservation.includes('已预约')?'booked':'pending'}">${esc(p.reservation)}</span>`:''];
  const pay=p?.pay?Object.keys(p.pay).filter(k=>p.pay[k]===1).map(k=>`<span class="chip booked">${k==='wechat'?'微信支付':'支付宝'}</span>`).join(''):'';
  const detail=[...(s.detail||[]),...(p?.verdict?[p.verdict]:[])];
  return `<article class="timeline-item ${alternative?'alternative':''}" id="${esc(s.id)}" data-step="${esc(s.id)}"><span class="timeline-dot" aria-hidden="true"></span><div class="card ${done?'done':''} ${selectedId===s.id?'selected':''}"><div class="card-top"><span class="card-time">${alternative?'备选':`${index+1} · `}${esc(s.time)}</span>${!alternative?`<button class="complete" data-complete="${esc(s.id)}" aria-label="${done?'取消完成':'标记完成'}：${esc(name)}" aria-pressed="${done}">${done?'✓':'○'}</button>`:''}</div><button class="card-title" data-focus="${esc(s.id)}">${esc(name)}</button>${badges.some(Boolean)||pay?`<div class="chips">${badges.join('')}${pay}</div>`:''}<p class="card-desc">${esc(s.desc)}</p>${p?.budget?`<div class="chips"><span class="chip gray">${esc(p.budget)}</span></div>`:''}${p?.address?`<p class="card-address">${esc(p.address)}</p>`:''}${p?`<div class="links">${appleNav(p)}<button class="btn" data-nav="${esc(p.id)}">地址</button>${p.dianping?external(p.dianping,'大众点评门店','btn dp'):''}${external(`https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(p.search||p.name)}`,'小红书搜索','btn xhs')}${p.official?external(p.official,p.reservation?'官方预约说明':'官方信息','btn'):''}</div>`:''}${detail.length||p?`<details class="card-details"><summary>交通、提醒与资料</summary>${detail.map(t=>`<p>${esc(t)}</p>`).join('')}${sourceDetails(p)}</details>`:''}${p&&p.lat===null?'<p class="map-missing">这处门店按核对过的地址导航，未在小地图上放置推测标点。</p>':''}</div></article>`;
}
function weatherBlock(){
  const age=(Date.now()-new Date(T.weather.queriedAt).getTime())/3600000;
  return `<section class="panel"><h3>天气与穿衣</h3>${age>12?'<div class="stale">这是10月2日查询的预报，已超过12小时。出门前查看最新预报再选晴雨安排。</div>':''}<table class="weather-table"><thead><tr><th>日期</th><th>日间 / 最高</th><th>夜间 / 最低</th><th>风力</th></tr></thead><tbody>${T.weather.rows.map(w=>`<tr><td>10.${w.day}</td><td>${w.dayIcon} ${w.high===null?'—':w.high+'°'}<small>${w.dayText}</small></td><td>${w.nightIcon} ${w.low}°<small>${w.nightText}</small></td><td><small>${w.wind}</small></td></tr>`).join('')}</tbody></table><p class="weather-note">日间、夜间预报，不是逐小时天气。2—3日有雨，5—6日晚间仅11℃；薄外套、伞和好走的鞋都带上。</p><div class="weather-actions"><span>查询：10月2日 21:36 · 南京城区</span>${external(T.weather.source,'查看中国天气网 ↗')}</div><details class="card-details"><summary>预报版本</summary><p>来源发布时间：${esc(T.weather.issuedAt)}。网页刷新不会把旧数据标成新查询。</p></details></section>`;
}
function overview(){
  const h=T.places.hotel;
  return `<header class="hero"><div class="eyebrow">NANJING · A SLOW TRIP</div><h1>南京，慢慢走。</h1><p class="intro">住在玄武湖旁，从中午开始逛。3号新街口与夫子庙，4号湖、城墙和中华门，5号红山与苗乡，6号中山陵和南博。按当天体力调整，留时间一起吃饭。</p><div class="chips"><span class="chip">多数日子12点出门</span><span class="chip must">红山必去</span><span class="chip must">苗乡必吃</span><span class="chip booked">6号南博上午场已约</span></div></header><div class="quick-grid"><section class="quick-card wide"><div class="label">10.3—10.6 · 已订酒店</div><div class="value">${esc(h.name)}</div><p class="sub">${esc(h.address)} · 1号线玄武门片区<br>10月2日晚住宿未定，优先选同片区。</p><div class="links">${appleNav(h,'苹果地图 · 酒店 ↗','small')}${external(h.official,'酒店信息','btn small')}</div></section><section class="quick-card"><div class="label">到南京 · 10.2</div><div class="value">G743<br>13:04 → 16:34</div><p class="sub">北京南 → 南京南</p></section><section class="quick-card"><div class="label">回北京 · 10.6</div><div class="value">G726<br>18:31 → 23:02</div><p class="sub">南京南 → 北京南</p></section></div><div class="section-title">五天的主线</div><div class="day-grid">${T.days.map(d=>`<button class="day-preview" data-day="${d.id}" style="--preview-color:${d.color}"><span class="date">10.${d.id}<small>${d.weekday}</small></span><span><strong>${esc(d.title)}</strong><p>${esc(d.summary)}</p></span><span class="arrow" aria-hidden="true">›</span></button>`).join('')}</div>${weatherBlock()}<section class="panel soft"><h3>6号已预约 · 中山陵与南博</h3><p>按你确认的顺序，中山陵之后去南京博物院。南博标记为上午场，具体入馆按已有通知；返程保留18:31南京南发车。</p><div class="links"><button class="btn" data-day="6">查看6号地图</button></div></section><section class="panel"><h3>晴天日出，先给补觉留位置</h3><p>只在5号天气与体力允许时加玄武湖西岸日出。上午和12:00—14:00留给补觉，红山改成14:30后的两小时精选，苗乡仍在晚上。想在红山多待一会儿，就保持普通方案。</p><div class="links"><button id="sunriseToggle" class="btn ${state.sunrise?'alt':''}" aria-pressed="${state.sunrise}">${state.sunrise?'已选日出＋补觉 · 点此取消':'选择日出＋补觉方案'}</button></div></section><div class="section-title">吃饭，留一点弹性</div><section class="panel">${['miao','shizi','dapai'].map(id=>{const p=T.places[id];return `<div class="restaurant-mini"><strong>${esc(p.name)}</strong><p>${esc(p.budget)}</p><p>${esc(p.verdict)}</p><div class="links">${appleNav(p,'苹果地图 ↗','small')}<button class="btn small" data-nav="${id}">地址</button>${external(p.dianping,'已读门店详情','btn dp small')}</div></div>`;}).join('')}</section><details class="panel source-panel"><summary>资料来源与核对范围</summary><p style="margin-top:12px">地点规则以官方材料为主；餐厅读取了大众点评门店和具体评论。小红书目前核对了红山官方公告，其余“小红书搜索”按钮只是检索入口。营业与入园规则仍以当天通知为准。</p>${Object.values(T.sources).map(s=>`<div class="source-row">${external(s.url,s.title)}<p>${esc(s.note)}</p></div>`).join('')}</details><p class="weather-note">方案选择和完成标记只保存在当前浏览器，换设备不会自动同步。没有通过这个页面创建预约或付款。</p>`;
}
function dayOptions(d){
  const configs={
    2:['今晚走哪一段？','day2',[['river','下关滨江 · 想看看江'],['lake','玄武湖西岸 · 下雨或想走近一点']],'看雨势选择，都是参考散步，不是全岸线徒步。'],
    4:['今天的城墙走法','day4',[['full','玄武湖＋台城短段＋中华门'],['easy','玄武湖＋中华门城墙 · 少一次登城']],'台城与中华门分属不同收费段；轻松版保留中华门的登城体验。'],
    6:['行李怎么处理？','day6',[['hotel','酒店寄存，游玩后回去取 · 默认'],['delivery','已确认送站服务，不回酒店 · 12点出发']],'选择送站仅修改计划，不会自动下单；先在12306确认收件时段、件数、价格与车站取件办法。']
  };
  const c=configs[d.id];if(!c || d.id===6)return '';
  return `<div class="day-options"><label for="modeSelect">${c[0]}</label><select id="modeSelect" data-mode="${c[1]}">${c[2].map(([v,l])=>`<option value="${v}" ${state[c[1]]===v?'selected':''}>${l}</option>`).join('')}</select><p class="hint">${c[3]}</p></div>`;
}
function renderDay(d){
  const w=weatherFor(d.id), steps=stepsFor(d);
  return `<header class="day-head"><div class="day-kicker">10月${d.id}日 · ${d.weekday}${d.id===5&&state.sunrise?' · 日出补觉方案':''}</div><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><div class="day-weather">${w.dayIcon} ${w.high===null?w.low:w.high}℃${w.high===null?'':` / ${w.low}℃`} · ${esc(w.dayText==='日间已过'?w.nightText:w.dayText)}</div></header><p class="day-note">${esc(d.note)}</p>${dayOptions(d)}${d.id===5&&state.sunrise?'<p class="day-note">已选日出：12:00—14:00补觉，红山14:30—16:30只看少量区域。5号的红山和苗乡顺序保留。</p>':''}<div class="timeline">${steps.map((s,i)=>card(s,d,i)).join('')}</div>${d.alternatives?.length?`<div class="section-title">有余力再加</div><div class="timeline">${d.alternatives.map((s,i)=>card(s,d,i,true)).join('')}</div>`:''}<div class="panel"><p>当天时间可调整。点地点名可对照地图，○ 可标记完成；导航优先按名称和具体地址查找。</p><div class="links"><button class="btn small" data-day="0">回到总览</button>${d.id<6?`<button class="btn small" data-day="${d.id+1}">下一天 →</button>`:''}</div></div>`;
}
const map=L.map('map',{center:[32.07,118.78],zoom:12,zoomControl:false,scrollWheelZoom:false,touchZoom:true,dragging:false,doubleClickZoom:true,attributionControl:true});
L.control.zoom({position:'bottomright'}).addTo(map);
L.control.scale({position:'bottomleft',imperial:false,maxWidth:75}).addTo(map);
const tile=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
let tileErrors=0;
tile.on('tileerror',()=>{tileErrors++;if(tileErrors>2)$('tileNotice').hidden=false;});
tile.on('tileload',()=>{$('tileNotice').hidden=true;tileErrors=0;});
const markerGroup=L.layerGroup().addTo(map), lineGroup=L.layerGroup().addTo(map);
let markers=new Map(), fitPoints=[];
function pin(p,label,color,pending=false,done=false){return L.divIcon({className:'',html:`<span class="pin ${p.type==='hotel'?'hotel':''} ${pending?'pending':''} ${done?'done':''}" style="--pin-color:${color}">${p.type==='hotel'?'⌂':esc(label)}</span>`,iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]});}
function drawMap(){
  markerGroup.clearLayers();lineGroup.clearLayers();markers.clear();fitPoints=[];
  const selectedDays=cur?T.days.filter(d=>d.id===cur):T.days;
  const pointUses=new Map();
  selectedDays.forEach(d=>{
    const list=stepsFor(d);
    list.forEach((s,i)=>{const p=placeFor(s);if(p?.lat!=null && p?.lng!=null){if(!pointUses.has(p.id))pointUses.set(p.id,{p,s,d,i});}});
    if(cur)for(let i=1;i<list.length;i++){
      const a=placeFor(list[i-1]),b=placeFor(list[i]);
      if(a?.lat!=null&&b?.lat!=null&&a.id!==b.id)L.polyline([[a.lat,a.lng],[b.lat,b.lng]],{color:d.color,weight:2,opacity:.48,dashArray:'5,7',interactive:false}).addTo(lineGroup);
    }
  });
  if(!pointUses.has('hotel'))pointUses.set('hotel',{p:T.places.hotel,s:null,d:{color:'#dd9855',id:cur},i:0});
  for(const {p,s,d,i} of pointUses.values()){
    if(p.approximate)L.circle([p.lat,p.lng],{radius:p.accuracyRadius,color:d.color,weight:1,dashArray:'4,6',fillOpacity:.07,interactive:false}).addTo(markerGroup);
    const m=L.marker([p.lat,p.lng],{icon:pin(p,(p.approximate?'≈':'')+(cur?i+1:d.id),d.color,!!p.approximate||!!p.reservation?.includes('未预约'),s&&state.done.includes(s.id)),title:p.name+(p.approximate?'（片区参考）':''),keyboard:true}).addTo(markerGroup);
    const popup=document.createElement('div');
    popup.innerHTML=`<strong>${esc(p.name)}</strong>${p.approximate?'<br><small>≈ 门店片区参考，导航请按地址</small>':''}<br><span>${esc(p.address)}</span>${s?`<button class="map-card-link" data-show-step="${esc(s.id)}" data-day-target="${d.id}">查看行程卡片 →</button>`:appleNav(p,'苹果地图 · 酒店 ↗','small')}`;
    m.bindPopup(popup,{maxWidth:260,autoPanPaddingTopLeft:L.point(12,90)});
    m.on('click',()=>{selectedId=s?.id||null;highlightCard();});
    if(s)markers.set(s.id,m);
    if(p.id!=='airport' || cur===3)fitPoints.push([p.lat,p.lng]);
  }
  $('mapDayLabel').textContent=cur?`10.${cur} · ${selectedDays[0].title}`:'市区安排 · 机场会合见10.3';
  fitMap();
}
function fitMap(){if(fitPoints.length)map.fitBounds(fitPoints,{paddingTopLeft:[42,100],paddingBottomRight:[60,85],maxZoom:14,animate:false});}
function highlightCard(){document.querySelectorAll('.timeline-item').forEach(el=>el.querySelector('.card')?.classList.toggle('selected',el.id===selectedId));}
function focusStep(id){selectedId=id;highlightCard();const m=markers.get(id);if(m){map.panTo(m.getLatLng(),{animate:false});m.openPopup();}else toast('这处按地址导航，未使用推测坐标。');}
function go(id,scroll=false){
  if(id!==0&&!T.days.some(d=>d.id===id))id=0;
  cur=id;selectedId=null;
  const d=T.days.find(x=>x.id===id);
  document.documentElement.style.setProperty('--day-color',d?.color||'#0071e3');
  document.querySelectorAll('.tab').forEach(b=>{const active=Number(b.dataset.day)===cur;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  $('content').innerHTML=id===0?overview():renderDay(d);
  const b=document.querySelector(`.tab[data-day="${id}"]`);if(b)b.scrollIntoView({block:'nearest',inline:'nearest'});
  if(scroll)window.scrollTo({top:Math.round(viewportHeight*.4),behavior:'auto'});
  resizeMapByScroll();drawMap();
}
const labels=[{id:0,label:'总览',weekday:'五天' },...T.days];
$('tabs').innerHTML=labels.map(d=>`<button class="tab ${d.id===0?'active':''}" data-day="${d.id}" aria-pressed="${d.id===0}">${d.label}<small>${d.weekday}</small></button>`).join('');
let viewportHeight=window.innerHeight,tick=false;
function resizeMapByScroll(){
  const sc=Math.max(0,window.scrollY),h=Math.max(viewportHeight*.4,viewportHeight*.8-sc);
  document.documentElement.style.setProperty('--map-h',`${Math.round(h)}px`);
  $('spacer').style.height=`${Math.min(Math.round(sc),Math.round(viewportHeight*.4))}px`;
  map.invalidateSize({pan:false});tick=false;
}
window.addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(resizeMapByScroll);}},{passive:true});
window.addEventListener('resize',()=>{viewportHeight=window.innerHeight;resizeMapByScroll();});
$('map').addEventListener('wheel',e=>{if(e.ctrlKey){e.preventDefault();map.setZoom(map.getZoom()+(e.deltaY<0?1:-1));}},{passive:false});
$('mapDrag').addEventListener('click',()=>{const active=$('mapDrag').getAttribute('aria-pressed')!=='true';$('mapDrag').setAttribute('aria-pressed',String(active));$('mapDrag').textContent=active?'退出移动':'移动地图';$('map').style.touchAction=active?'none':'pan-y';if(active){map.dragging.enable();toast('可拖动地图；点“退出移动”恢复单指滚动。');}else map.dragging.disable();});
$('fitMap').addEventListener('click',fitMap);
function openNav(id){
  const p=T.places[id];if(!p)return;
  $('navContent').innerHTML=`<h2>${esc(p.name)}</h2><p>${esc(p.address)}</p>${appleNav(p)}<a class="btn" href="${esc(appleMapLink(p,true))}">苹果地图路线 ↗</a><button class="btn" data-copy-address="${esc(p.id)}">复制名称与地址</button><div class="nav-copy">${esc(p.name+'\n'+p.address)}</div><p class="dialog-hint">苹果地图内核对名称与地址后选择路线。微信若未拉起地图，可在Safari打开此页，或复制地址到苹果地图搜索。</p>`;
  $('navDialog').showModal();
}
async function copyAddress(id){const p=T.places[id];try{await navigator.clipboard.writeText(p.name+' '+p.address);toast('名称与地址已复制。');}catch{toast('请长按下方地址文字复制。');}}
$('navDialog').addEventListener('click',e=>{if(e.target===$('navDialog'))$('navDialog').close();});
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.day!==undefined){go(Number(b.dataset.day),true);return;}
  if(b.dataset.nav){openNav(b.dataset.nav);return;}
  if(b.dataset.copyAddress){copyAddress(b.dataset.copyAddress);return;}
  if(b.dataset.focus){focusStep(b.dataset.focus);return;}
  if(b.dataset.complete){const id=b.dataset.complete;state.done=state.done.includes(id)?state.done.filter(x=>x!==id):[...state.done,id];save();const d=T.days.find(x=>x.id===cur);$('content').innerHTML=renderDay(d);drawMap();toast(state.done.includes(id)?'已标记完成。':'已取消完成标记。');return;}
  if(b.dataset.showStep){const day=Number(b.dataset.dayTarget),id=b.dataset.showStep;if(cur!==day)go(day,false);selectedId=id;highlightCard();document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  if(b.id==='sunriseToggle'){state.sunrise=!state.sunrise;save();go(0,false);toast(state.sunrise?'5号已留出补觉，红山改为两小时精选。':'恢复中午出发、红山3—4小时方案。');return;}
  if(b.id==='resetPlan'){state=defaultState();save();go(cur,false);toast('已恢复初始选择与完成标记。');}
});
document.addEventListener('change',e=>{const select=e.target.closest('select[data-mode]');if(select){state[select.dataset.mode]=select.value;save();const d=T.days.find(x=>x.id===cur);$('content').innerHTML=renderDay(d);drawMap();}});
go(0);
