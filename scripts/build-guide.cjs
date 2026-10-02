const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'trip-data.js'),'utf8'),context);
const t=context.window.TRIP;
const mode={2:'river',4:'full'};
const lines=[`# ${t.title} · ${t.dates}`,'',
 '以用户最新确认的顺序为准：3号新街口、夫子庙，4号玄武湖、城墙、中华门，5号红山动物园与苗乡火锅，6号中山陵与南京博物院。多数日子从中午开始；6号两处已预约，南博为上午场，具体入馆按已有通知。','',
 '10月3日至6日住南京玄武湖桔子水晶酒店，鼓楼区湖南路18号。10月2日晚住宿未定，建议优先选同片区。去程G743，北京南13:04出发、南京南16:34到达；返程G726，南京南18:31出发、北京南23:02到达。3号同行人17:00到禄口机场，航站楼与出口按航班确认。',''];
for(const d of t.days){
 lines.push(`## 10月${d.id}日 · ${d.title}`,'',d.intro,'',d.note,'');
 for(const s of d.steps.filter(s=>!s.modes||s.modes.includes(mode[d.id]))){
  const p=s.place?t.places[s.place]:null;
  lines.push(`**${s.time} · ${s.name||p?.name||''}**`,'',s.desc,'');
  if(p?.reservation)lines.push(p.reservation+'。','');
  for(const detail of s.detail||[])lines.push(detail,'');
  if(p?.verdict)lines.push(p.verdict,'');
  if(p?.budget)lines.push(p.budget+'。','');
  if(p?.address)lines.push('地址：'+p.address+'。','');
  const sources=(p?.sources||[]).map(k=>t.sources[k]).filter(Boolean);
  if(sources.length)lines.push(sources.map(x=>`[${x.title}](${x.url})`).join('；')+'。','');
 }
 if(d.id===2)lines.push('雨天近处备选：玄武门与环湖路短走30—45分钟，雨大就在湖南路室内活动。环湖路24小时开放不等于岛洲24小时开放。','');
 if(d.id===4)lines.push('轻松版：保留玄武湖与中华门城墙，省去台城那一次登城和北线门票。','');
}
lines.push('## 晴天日出备选','',t.sunrise.summary,'','只有选择这个分支才改成两小时红山游览；普通方案仍是中午出门、红山3—4小时。精确日出分钟未核实，前一晚看天气应用，不设未经核对的闹钟。','','## 天气','',`实际查询：${t.weather.queriedAt}。来源发布时间：${t.weather.issuedAt}。这是日间和夜间预报，不是逐小时预报。`,'',...t.weather.rows.map(w=>`10.${w.day}：${w.high===null?'日间已过':w.dayText+'，最高'+w.high+'℃'}；夜间${w.nightText}，最低${w.low}℃，${w.wind}。`),'',`[中国天气网南京城区](${t.weather.source})。刷新网页不改变数据查询时间。`,'','## 地图与资料','',
 '网页连线仅表示顺序，不是可走的道路。底图与标点统一使用WGS84。景区/楼宇参考点不作为精确检票口，导航优先搜索具体名称与地址。苗乡仅有两位小数的百度公开坐标，转换后用带约1.5公里范围的片区标点，店门口以已核对地址为准。','',
 '餐厅结论来自已读大众点评门店和具体评论；小红书目前读到红山官方公告，其余搜索按钮只是再次检索入口。网站没有代订票或付款功能。方案和完成标记只存在当前浏览器，换设备不会自动同步。','');
for(const s of Object.values(t.sources))lines.push(`[${s.title}](${s.url})：${s.note}`,'');
fs.writeFileSync(path.join(root,'南京行程.md'),lines.join('\n'));
console.log('详细攻略已从网站主数据同步生成。');
