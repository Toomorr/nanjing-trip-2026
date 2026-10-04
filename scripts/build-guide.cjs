const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'trip-data.js'),'utf8'),context);
const t=context.window.TRIP;
const lines=[`# ${t.title} · ${t.dates}`,'',`行程进展同步：${t.updatedAt}。`,'',t.overviewIntro,'',
 '10月2日下午已到南京，3日已入住南京玄武湖桔子水晶酒店，鼓楼区湖南路18号，6日离店。去程G743，北京南13:04出发、南京南16:34到达；返程G726，南京南18:31出发、北京南23:02到达。公开攻略不包含乘车座位、订单号或预约凭证。','',
 `已预约：4号中山陵下午场、5号总统府上午场、6号南京博物院上午场。5号${t.places.fulin.name}已订，12:30到店。红山和苗乡继续保留，5号不再启用会覆盖新预约的旧日出补觉方案。`,'',
 '## 已完成的经历',''];
for(const x of t.progressSummary)lines.push(`**${x.title}**`,'',x.desc,'');
lines.push('餐食店名不清时按用户口述保留，未猜测门店；未收到完成反馈的原计划不标成已去过。','');
function appendStep(s,alternative=false){
 const p=s.place?t.places[s.place]:null;
 lines.push(`**${alternative?'备选 · ':''}${s.time} · ${s.name||p?.name||''}${s.completed?' · 已完成':''}**`,'',s.desc,'');
 if(s.status&&s.status!=='你已完成')lines.push(s.status+'。','');
 if(p?.reservation&&!s.completed)lines.push(p.reservation+'。','');
 for(const detail of s.detail||[])lines.push(detail,'');
 if(p?.verdict)lines.push(p.verdict,'');
 if(p?.budget&&!s.completed)lines.push(p.budget+'。','');
 if(p?.address)lines.push('地址：'+p.address+'。','');
 if(p?.navigationPending)lines.push('具体分店待确认，暂不放推测地图点或发送门店导航。','');
 const sources=(p?.sources||[]).map(k=>t.sources[k]).filter(Boolean);
 if(sources.length)lines.push(sources.map(x=>`[${x.title}](${x.url})`).join('；')+'。','');
}
for(const d of t.days){
 lines.push(`## 10月${d.id}日 · ${d.title}`,'',d.intro,'',d.note,'');
 for(const s of d.steps)appendStep(s);
 if(d.alternatives?.length){lines.push(`### ${d.alternativeTitle||'有余力再加'}`,'',d.alternativeNote||'按体力选择。','');for(const s of d.alternatives)appendStep(s,true);}
}
lines.push('## 休息与日出','',t.sunrise.summary,'','## 天气','',`实际查询：${t.weather.queriedAt}。来源发布时间：${t.weather.issuedAt}。这是日间和夜间预报，不是逐小时预报；2—3日旧预报不再展示。`,'',t.weather.note,'',...t.weather.rows.map(w=>`10.${w.day}：白天${w.dayText}，最高${w.high}℃；夜间${w.nightText}，最低${w.low}℃，${w.wind}。`),'',`[中国天气网南京城区](${t.weather.source})。刷新网页不改变数据查询时间。`,'','## 地图与资料','',
 '网页连线仅表示顺序，不是可走的道路。底图与标点统一使用WGS84。景区与楼宇参考点不作为精确检票口，导航优先搜索具体名称与地址。苗乡仅有两位小数的百度公开坐标，转换后用约1.5公里范围的片区标点，店门口以已核对地址为准。未确认具体地点的已完成经历不绘制猜测轨迹。','',
 '用户反馈的完成记录已经写入网站主数据，换设备也可看见；在浏览器自行点○的标记只存在本机。清除本机标记不会清除已回填经历。网站没有代订票或付款功能。','',
 '小红书此前读到红山官方公告，本次在浏览器权限层仍被拦截；搜索入口不是已读的游客笔记。餐厅结论来自已读大众点评门店及具体评论；新订位餐厅的位置与到店时间分别核对。','');
for(const s of Object.values(t.sources))lines.push(`[${s.title}](${s.url})：${s.note}`,'');
fs.writeFileSync(path.join(root,'南京行程.md'),lines.join('\n'));
console.log('详细攻略已从网站主数据同步生成。');
