'use strict';
const T = window.TRIP;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external = (url,label,cls='') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
function appleMapLink(p,directions=false){return `https://maps.apple.com/?${directions?'daddr':'q'}=${encodeURIComponent(p.mapSearch||p.search||'南京 '+p.name+' '+p.address)}`;}
function appleNav(p,label='苹果地图 ↗',cls=''){return p.navigationPending?`<span class="btn ${cls}" aria-disabled="true">门店待确认</span>`:`<a class="btn nav ${cls}" data-apple-map="${esc(p.id)}" href="${esc(appleMapLink(p))}">${esc(label)}</a>`;}
const defaultState = () => ({done:[]});
let state = defaultState();
try { const saved=JSON.parse(localStorage.getItem('nanjing-trip-2026-v2')); if(saved) state={...state,...saved}; } catch {}
if(!Array.isArray(state.done)) state.done=[];
let cur=0, selectedId=null, toastTimer;
const stepsFor = d => d.steps;
const placeFor = s => s.place ? T.places[s.place] : null;
const stepName = s => s.name || placeFor(s)?.name || '';
const weatherFor = d => T.weather.rows.find(w=>w.day===d);
const sourceLinks = keys => (keys||[]).map(k=>T.sources[k]).filter(Boolean).map(s=>external(s.url,s.title)).join(' · ');
function save(){try{localStorage.setItem('nanjing-trip-2026-v2',JSON.stringify(state));}catch{toast('浏览器未允许保存，当前选择仍可使用。');}}
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2500);}
function sourceDetails(p){return p ? `<div class="detail-label">资料与现场核对</div><div class="source-links">${sourceLinks(p.sources)}</div>${p.positionNote?`<p>${esc(p.positionNote)}</p>`:''}`:'';}
function card(s,d,index,alternative=false){
  const p=placeFor(s), reported=!!s.completed, done=reported||state.done.includes(s.id), name=stepName(s);
  const status=s.status && s.status!=='你已完成' && !(s.status.includes('已预约') && p?.reservation?.includes('已预约')) ? s.status : '';
  const badges=[reported?'<span class="chip booked">你已完成</span>':'',status?`<span class="chip ${/已预约|已订|入住/.test(status)?'booked':/必吃|必去/.test(status)?'must':'pending'}">${esc(status)}</span>`:'',p?.reservation&&!reported?`<span class="chip ${/已预约|已订/.test(p.reservation)?'booked':'pending'}">${esc(p.reservation)}</span>`:''];
  const detail=[...(s.detail||[]),...(p?.verdict?[p.verdict]:[])];
  return `<article class="timeline-item ${alternative?'alternative':''}" id="${esc(s.id)}" data-step="${esc(s.id)}"><span class="timeline-dot" aria-hidden="true"></span><div class="card ${done&&!reported?'done':''} ${reported?'reported':''} ${selectedId===s.id?'selected':''}"><div class="card-top"><span class="card-time">${alternative?'备选 · ':`${index+1} · `}${esc(s.time)}</span>${reported?'<span class="confirmed-check" aria-label="已按你的反馈记录完成">✓</span>':!alternative?`<button class="complete" data-complete="${esc(s.id)}" aria-label="${done?'取消完成':'标记完成'}：${esc(name)}" aria-pressed="${done}">${done?'✓':'○'}</button>`:''}</div>${p&&!p.navigationPending?`<button class="card-title" data-focus="${esc(s.id)}">${esc(name)}</button>`:`<h2 class="card-title">${esc(name)}</h2>`}${badges.some(Boolean)?`<div class="chips">${badges.join('')}</div>`:''}<p class="card-desc">${esc(s.desc)}</p>${p?.budget&&!reported?`<div class="chips"><span class="chip gray">${esc(p.budget)}</span></div>`:''}${p?.address?`<p class="card-address">${esc(p.address)}</p>`:''}${p&&!p.navigationPending?`<div class="links">${appleNav(p)}<button class="btn" data-nav="${esc(p.id)}">地址</button>${p.dianping?external(p.dianping,'大众点评门店','btn dp'):''}${external(`https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(p.search||p.name)}`,'小红书搜索','btn xhs')}${p.official?external(p.official,'官方信息','btn'):''}${p.phone?`<a class="btn" href="tel:${esc(p.phone)}">咨询电话</a>`:''}</div>`:''}${detail.length||p?`<details class="card-details"><summary>交通、提醒与资料</summary>${detail.map(t=>`<p>${esc(t)}</p>`).join('')}${sourceDetails(p)}</details>`:''}${p&&p.lat===null?`<p class="map-missing">${p.navigationPending?'订位已记录，确认分店后补地址和苹果地图导航。':'这处按地址导航，未放置推测标点。'}</p>`:''}</div></article>`;
}
function weatherBlock(){
  const age=(Date.now()-new Date(T.weather.queriedAt).getTime())/3600000;
  const stamp=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(T.weather.queriedAt));
  return `<section class="panel"><h3>剩余几天的天气与穿衣</h3>${age>12?`<div class="stale">这是${esc(stamp)}查询的预报，已超过12小时。出门前查看最新预报。</div>`:''}<table class="weather-table"><thead><tr><th>日期</th><th>日间 / 最高</th><th>夜间 / 最低</th><th>风力</th></tr></thead><tbody>${T.weather.rows.map(w=>`<tr><td>10.${w.day}</td><td>${w.dayIcon} ${w.high}°<small>${w.dayText}</small></td><td>${w.nightIcon} ${w.low}°<small>${w.nightText}</small></td><td><small>${w.wind}</small></td></tr>`).join('')}</tbody></table><p class="weather-note">${esc(T.weather.note)} 日间、夜间预报，不是逐小时天气。</p><div class="weather-actions"><span>查询：${esc(stamp)} · 南京城区</span>${external(T.weather.source,'查看中国天气网 ↗')}</div><details class="card-details"><summary>预报版本</summary><p>来源发布时间：${esc(T.weather.issuedAt)}。网页刷新不会把旧数据标成新查询。2—3日已结束，此处不再显示当时的旧预报。</p></details></section>`;
}
function progressBlock(){
  return `<section class="panel progress-panel"><h3>已经走过的南京</h3><p class="hint">按你10月4日的反馈同步；2—3日日期已确认。</p>${T.progressSummary.map(x=>`<div class="progress-row"><span class="confirmed-check" aria-hidden="true">✓</span><div><strong>${esc(x.title)}</strong><p>${esc(x.desc)}</p><button class="text-button" data-day="${x.day}">查看当天记录 →</button></div></div>`).join('')}<p class="weather-note">“包子”和“另一家烤鸭”的正式店名仍待确认，暂按口述保留。</p></section>`;
}
function overview(){
  const h=T.places.hotel;
  return `<header class="hero"><div class="eyebrow">NANJING · 10月4日进展已同步</div><h1>南京，慢慢走。</h1><p class="intro">${esc(T.overviewIntro)}</p><div class="chips"><span class="chip must">红山必去</span><span class="chip must">苗乡必吃</span><span class="chip booked">4号中山陵下午场已约</span><span class="chip booked">5号总统府上午场已约</span><span class="chip booked">5号富临轩12:30已订</span><span class="chip booked">6号南博上午场已约</span></div><div class="links"><button class="btn nav" data-day="4">看4号安排</button><button class="btn" data-day="5">看5号安排</button></div></header><section class="panel soft"><h3>接下来怎么走</h3><p>4号先按预约去中山陵，玄武湖、台城、中华门仍作弹性选择。5号上午总统府，12:30富临轩，午餐后直接去红山，晚上苗乡。6号专心看南博，然后取行李返程。</p><p>明天四个目标都保留，红山由原来的3—4小时改为下午重点游览；官网首页显示8:30—16:30，先按16:30前完成核心游览，不把攻略中的18:00当作已核实闭园时间。</p><div class="links">${external(T.sources.zooHours.url,'红山官方时间说明','btn small')}<a class="btn small" href="tel:025-85620178">红山咨询</a></div></section>${progressBlock()}<div class="quick-grid"><section class="quick-card wide"><div class="label">已入住 · 10.3—10.6</div><div class="value">${esc(h.name)}</div><p class="sub">${esc(h.address)} · 1号线玄武门片区<br>6号退房，出门前安排好行李。</p><div class="links">${appleNav(h,'苹果地图 · 酒店 ↗','small')}${external(h.official,'酒店信息','btn small')}</div></section><section class="quick-card"><div class="label">已到南京 · 10.2</div><div class="value">G743<br>13:04 → 16:34</div><p class="sub">北京南 → 南京南</p></section><section class="quick-card"><div class="label">回北京 · 10.6</div><div class="value">G726<br>18:31 → 23:02</div><p class="sub">南京南 → 北京南<br>建议17:15—17:30到站</p></section></div><div class="section-title">记录与剩余行程</div><div class="day-grid">${T.days.map(d=>`<button class="day-preview" data-day="${d.id}" style="--preview-color:${d.color}"><span class="date">10.${d.id}<small>${d.weekday}</small></span><span><strong>${esc(d.title)}</strong><p>${esc(d.summary)}</p></span><span class="arrow" aria-hidden="true">›</span></button>`).join('')}</div>${weatherBlock()}<section class="panel"><h3>夜景已看过，先把休息留住</h3><p>${esc(T.sunrise.summary)}</p></section><div class="section-title">吃饭，留一点弹性</div><section class="panel"><div class="restaurant-mini"><strong>${esc(T.places.fulin.name)}</strong><p>5号12:30到店已订。${esc(T.places.fulin.address)}</p>${T.places.fulin.navigationPending?'':`<div class="links">${appleNav(T.places.fulin,'苹果地图 ↗','small')}<button class="btn small" data-nav="fulin">地址</button></div>`}</div>${['miao','shizi','dapai'].map(id=>{const p=T.places[id];return `<div class="restaurant-mini"><strong>${esc(p.name)}</strong><p>${esc(p.budget)}</p><p>${esc(p.verdict)}</p><div class="links">${appleNav(p,'苹果地图 ↗','small')}<button class="btn small" data-nav="${id}">地址</button>${external(p.dianping,'已读门店详情','btn dp small')}</div></div>`;}).join('')}</section><details class="panel source-panel"><summary>资料来源与核对范围</summary><p style="margin-top:12px">已完成进展和新预约以你的反馈为准。景区规则以官方材料为主；已读取大众点评的苗乡与备选门店评论。小红书此前核对了红山官方公告，本次访问仍在浏览器权限层被拦截；其余“小红书搜索”按钮只是检索入口。时间缓冲是规划估算，交通耗时看实时导航。</p>${Object.values(T.sources).map(s=>`<div class="source-row">${external(s.url,s.title)}<p>${esc(s.note)}</p></div>`).join('')}</details><p class="weather-note">你反馈的已完成记录已写入网站，换设备也可看见；自行点○的标记只保存在当前浏览器。页面没有创建预约或付款。</p>`;
}
function renderDay(d){
  const w=weatherFor(d.id), steps=stepsFor(d);
  const age=(Date.now()-new Date(T.weather.queriedAt).getTime())/3600000;
  return `<header class="day-head"><div class="day-kicker">10月${d.id}日 · ${d.weekday}${d.id<4?' · 旅行记录':''}</div><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p>${w?`<div class="day-weather">${w.dayIcon} ${w.high}℃ / ${w.low}℃ · ${esc(w.dayText)}${age>12?' · 旧预报，出门前更新':''}</div><p class="weather-note">预报查询于10月4日，${external(T.weather.source,'查看最新天气')}</p>`:''}</header><p class="day-note">${esc(d.note)}</p><div class="timeline">${steps.map((s,i)=>card(s,d,i)).join('')}</div>${d.alternatives?.length?`<div class="section-title">${esc(d.alternativeTitle||'有余力再加')}</div>${d.alternativeNote?`<p class="day-note">${esc(d.alternativeNote)}</p>`:''}<div class="timeline">${d.alternatives.map((s,i)=>card(s,d,i,true)).join('')}</div>`:''}<div class="panel"><p>${d.id<4?'勾选的经历已按你的反馈记录。原定但未反馈的项目保留作参考。':'当天时间可调整。点地点名可对照地图，○ 可在本机标记完成；预约时段以你已有凭证为准。'} 未确定地址的经历不放推测地图点。</p><div class="links"><button class="btn small" data-day="0">回到总览</button>${d.id<6?`<button class="btn small" data-day="${d.id+1}">下一天 →</button>`:''}</div></div>`;
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
    list.forEach((s,i)=>{const p=placeFor(s);if(p?.lat!=null && p?.lng!=null){if(!pointUses.has(p.id))pointUses.set(p.id,{p,s,d,i,alternative:false});}});
    if(cur===4)(d.alternatives||[]).forEach((s,i)=>{const p=placeFor(s);if(p?.lat!=null&&p?.lng!=null&&!pointUses.has(p.id))pointUses.set(p.id,{p,s,d,i,alternative:true});});
    if(cur){let previous=null;for(const s of list){const p=placeFor(s);if(!p)continue;if(p.lat==null||p.lng==null){previous=null;continue;}if(previous&&previous.id!==p.id)L.polyline([[previous.lat,previous.lng],[p.lat,p.lng]],{color:d.color,weight:2,opacity:.48,dashArray:'5,7',interactive:false}).addTo(lineGroup);previous=p;}}
  });
  if(!pointUses.has('hotel'))pointUses.set('hotel',{p:T.places.hotel,s:null,d:{color:'#dd9855',id:cur},i:0});
  for(const {p,s,d,i,alternative} of pointUses.values()){
    if(p.approximate)L.circle([p.lat,p.lng],{radius:p.accuracyRadius,color:d.color,weight:1,dashArray:'4,6',fillOpacity:.07,interactive:false}).addTo(markerGroup);
    const m=L.marker([p.lat,p.lng],{icon:pin(p,alternative?'备':(p.approximate?'≈':'')+(cur?i+1:d.id),d.color,!!alternative||!!p.approximate||!!p.reservation?.includes('未预约'),s&&(s.completed||state.done.includes(s.id))),title:p.name+(alternative?'（备选）':p.approximate?'（片区参考）':''),keyboard:true}).addTo(markerGroup);
    const popup=document.createElement('div');
    popup.innerHTML=`<strong>${alternative?'备选 · ':''}${esc(p.name)}</strong>${p.approximate?'<br><small>≈ 门店片区参考，导航请按地址</small>':''}<br><span>${esc(p.address)}</span>${s?`<button class="map-card-link" data-show-step="${esc(s.id)}" data-day-target="${d.id}">查看行程卡片 →</button>`:appleNav(p,'苹果地图 · 酒店 ↗','small')}`;
    m.bindPopup(popup,{maxWidth:260,autoPanPaddingTopLeft:L.point(12,90)});
    m.on('click',()=>{selectedId=s?.id||null;highlightCard();});
    if(s)for(const candidate of [...d.steps,...(d.alternatives||[])])if(candidate.place===p.id)markers.set(candidate.id,m);
    if(p.id!=='airport' || cur===3)fitPoints.push([p.lat,p.lng]);
  }
  $('mapDayLabel').textContent=cur?`10.${cur} · ${selectedDays[0].title}`:'旅行记录与剩余路线 · 未定地址不放点';
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
  if(b.id==='resetPlan'){state=defaultState();save();go(cur,false);toast('已清除本机标记，你反馈的已完成记录保留。');}
});
go(0);
