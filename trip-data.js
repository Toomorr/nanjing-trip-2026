/* 南京行程主数据，WGS84参考点；已完成记录以用户最新反馈为准。 */
window.TRIP = {
  "title": "南京慢慢走",
  "dates": "2026.10.02—10.06",
  "weather": {
    "queriedAt": "2026-10-04T15:08:32+08:00",
    "issuedAt": "2026-10-04 11:30",
    "source": "https://www.weather.com.cn/textFC/jiangsu.shtml",
    "rows": [
      {
        "day": 4,
        "dayIcon": "☁️",
        "dayText": "阴",
        "high": 23,
        "nightIcon": "☁️",
        "nightText": "多云",
        "low": 13,
        "wind": "3—4级"
      },
      {
        "day": 5,
        "dayIcon": "☀️",
        "dayText": "晴",
        "high": 21,
        "nightIcon": "🌙",
        "nightText": "晴",
        "low": 11,
        "wind": "3—4级转微风"
      },
      {
        "day": 6,
        "dayIcon": "☀️",
        "dayText": "晴",
        "high": 22,
        "nightIcon": "🌙",
        "nightText": "晴",
        "low": 11,
        "wind": "微风"
      }
    ],
    "note": "4号白天阴、夜间多云；5—6日晴。早晚11—13℃，山上和江边带外套，白天晴天防晒。"
  },
  "sources": {
    "hotel": {
      "title": "华住 · 酒店地址与服务",
      "url": "https://m.huazhu.com/Hotel/Detail/9000712",
      "note": "湖南路18号；支持行李寄存。入住日期来自用户最新订单截图，仅公开行程所需信息。"
    },
    "lake": {
      "title": "玄武湖景区官网",
      "url": "https://www.xuanwuhu.net/index.aspx",
      "note": "免费；环湖路全年24小时开放，4—10月五洲与情侣园6:00—22:00。"
    },
    "river": {
      "title": "南京房产局 · 下关滨江风貌",
      "url": "https://fcj.nanjing.gov.cn/dtxx/zwdt/201802/t20180224_537444.html",
      "note": "中山码头至南京长江大桥滨江段约3公里；2018年历史介绍不能证明当天所有临时通道开放。"
    },
    "river2026": {
      "title": "南京市政府 · 滨江岸线贯通情况",
      "url": "https://www.nanjing.gov.cn/zzb/ywdt/njxx/202601/t20260106_5757779.html",
      "note": "2026年1月称70公里滨江岸线基本贯通，不等于整条水边可以无间断通行。"
    },
    "zoo": {
      "title": "红山森林动物园官网",
      "url": "https://www.njhszoo.com/",
      "note": "和燕路168号，北门；场馆与官方入口。"
    },
    "zooPrice": {
      "title": "南京发改委 · 红山门票调整",
      "url": "https://fgw.nanjing.gov.cn/njsfzhggwyh/202301/t20230109_3797478.html",
      "note": "成人票70元；具体入园日期和售票规则以官方购买页面为准。"
    },
    "zooHoliday": {
      "title": "新华日报 · 10月2日红山报道",
      "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/nanjing/202610/t20261002_8594832.shtml",
      "note": "预测10月3—5日客流较高；非洲主题狮子馆10月1日开放。"
    },
    "zooXhs": {
      "title": "小红书 · 红山官方国庆预约公告",
      "url": "https://www.xiaohongshu.com/explore/6abcddb8000000001801b41e?xsec_token=ABl8oKi4nf4sU-ultUVzvKKKWpTCdnewTOpkFMDdSCO0s%3D&xsec_source=pc_search&source=web_explore_feed",
      "note": "10月2日读取官方笔记正文与首张图片；未把游客留言当作官方预约规则。"
    },
    "metro": {
      "title": "南京市政府 · 国庆出游交通提示",
      "url": "https://www.nanjing.gov.cn/msxx/202609/t20260930_5920084.html",
      "note": "地铁1号线红山动物园站直达北门；1号线玄武门站适合酒店与玄武湖西侧。"
    },
    "museum": {
      "title": "南京博物院 · 官方预约入口",
      "url": "https://ticket.njmuseum.com.cn/reservation/home.jsp",
      "note": "用户确认10月6日已约到上午场。10月2日读取微信官方“南京博物院预约服务”：10月1—6日9:00—20:00；上午场13:00前入馆，下午场12:00—17:00入馆，晚场17:00—19:00入馆。公开网页为预约入口，不公开个人票证。"
    },
    "miao": {
      "title": "大众点评 · 贵州苗乡牛肉馆",
      "url": "https://www.dianping.com/shop/jDRE5oSiqrBVfqdF",
      "note": "10月2日读取门店信息及具体评论：石油三村2—6号，页面人均99元、9:00—22:00；一条当日评论提及两人268元。"
    },
    "miaoMap": {
      "title": "百度地图 · 石油三村门店",
      "url": "https://map.baidu.com/poi/贵州苗乡牛肉馆/@13239317,3761133.29,13z?uid=c8b5cdef79f9307e120daaba&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&en_uid=c8b5cdef79f9307e120daaba&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl",
      "note": "10月2日核对具体门店，地址纬四路石油三村2—6号；没有将页面地图中心当成门店坐标。 百度官方坐标拾取器同名结果“纬四路石油三村2—6号”显示BD09 118.94,32.16；用gcoord 1.0.7转换为WGS84，只用作带精度说明的片区参考。"
    },
    "yins": {
      "title": "大众点评 · 尹氏汤包狮子桥店",
      "url": "https://www.dianping.com/shop/k5xHVQ48Gg2TEXs3",
      "note": "10月2日读取门店与三条评论；人均24元，6:00—21:30。页面可见套餐最早10月8日使用，不适用于本次旅行。"
    },
    "dapai": {
      "title": "大众点评 · 南京大牌档玄武湖金茂览秀城店",
      "url": "https://www.dianping.com/shop/k9oZOfvQx1km5L2O",
      "note": "10月2日读取门店与三条评论；中央路201号7层，人均74元，页面10:30—22:00且提示近期营业调整。味道评价有分歧，非必吃店。"
    },
    "osm": {
      "title": "OpenStreetMap · 地图数据",
      "url": "https://www.openstreetmap.org/copyright",
      "note": "2026年10月2日通过Nominatim与Overpass读取WGS84数据。景区/楼宇参考点与精确入口分开标记，未使用OSM中过时的营业时间或票价。"
    },
    "appleMaps": {
      "title": "Apple官方 · 地图链接",
      "url": "https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html",
      "note": "按用户要求，导航直接链接苹果地图，以名称及具体地址查找；地址面板提供路线及复制地址。使用Apple官方q与daddr参数，不把景区或门店片区点作为精确导航坐标。真实iPhone拉起尚未验证。"
    },
    "wall": {
      "title": "南京城墙官方 · 2026中秋国庆开放安排",
      "url": "https://weibo.com/2/detail/5346273911638454",
      "note": "9月23日官方公告，适用10月1—7日：北线日间8:30—17:00、30元/人；中华门所在南线日间50元/人，晚间17:00—22:00（21:30停售），演出场90元/人，无演出50元/人。不同段不可当成一张通票。"
    },
    "wallRepair": {
      "title": "南京市政府 · 玄武门至解放门恢复开放",
      "url": "https://www.nanjing.gov.cn/njxx/202508/t20250826_5635731.html",
      "note": "2025年8月26日恢复开放；玄武门至解放门段约1.4公里。当前临时封闭以现场为准。"
    },
    "zhongshan": {
      "title": "中山陵园管理局 · 中山陵预约与开放",
      "url": "https://zschina.nanjing.gov.cn/lyzx/202606/t20260618_5862979.html",
      "note": "2026年官方材料：实名预约，按时段进入；天下为公陵门以上区域8:30—17:00，墓室关闭。用户最新确认4号下午已预约，替代原6号安排，不公开预约凭证。"
    },
    "zhongshanTransit": {
      "title": "中山陵园管理局 · 景区交通与服务",
      "url": "https://zschina.nanjing.gov.cn/fjms/",
      "note": "使用景区官方公共交通与观光车信息。进入钟山景区的接驳与步行不同于到地铁站的时间。"
    },
    "zhongshanHoliday": {
      "title": "中山陵园管理局 · 2026国庆接驳与分流",
      "url": "https://zschina.nanjing.gov.cn/zszx/zsdt/202609/t20260924_5917427.html",
      "note": "9月24日官方预告节日检录口分段放行、增加接驳车辆与外围线路。提前留排队、接驳和步行余量；不把到地铁站当成到陵寝入口。"
    },
    "zhongshanRoad": {
      "title": "中山陵园管理局 · 现行交通管控通告",
      "url": "https://zschina.nanjing.gov.cn/zfxxgk/zfxxgkml/202509/t20250925_5657134.html",
      "note": "2025年9月发布的交通优化措施：节假日8:30—17:30，部分核心道路限制出租车及网约车，共享自行车也有禁入路段。2026假日外围交通和临时变化以现场指引为准。"
    },
    "president": {
      "title": "总统府官方 · 开放与到达",
      "url": "https://www.njztf.cn/index.html",
      "note": "10月4日读取：旺季8:30—18:00，17:00停止入馆；法定节假日不执行通常的周一闭馆。长江路292号，大行宫5号口。用户确认5号上午场已预约，按票面时段与原件检票。"
    },
    "presidentWorks": {
      "title": "总统府官方 · 门楼等建筑围挡施工",
      "url": "https://www.njztf.cn/open_notice/1089.html",
      "note": "7月31日公告图片已读：门楼、桐音馆自2026年8月15日起围挡施工，未给结束日期。游览和拍照以现场开放区域为准。9月18日另一通告只调整9月25日，不能套用到10月5日。"
    },
    "presidentMap": {
      "title": "高德地图 · 总统府地址与参考点",
      "url": "https://ditu.amap.com/place/B00190BMRC",
      "note": "长江路292号与官网一致。公开GCJ02点转换为WGS84，作为景区参考；导航仍用苹果地图按名称和地址搜索。"
    },
    "zooHours": {
      "title": "红山官方 · 首页开放时间",
      "url": "https://www.njhszoo.com/",
      "note": "10月4日中文页面显示开放时间8:30—16:30，首页未区分检票截止和清园时间，也未读到2026国庆延时公告。按16:30前完成重点游览规划；最终以当日官方票页和现场通知为准。咨询025-85620178。"
    },
    "fulinMap": {
      "title": "高德地图 · 富临轩集庆门大街店",
      "url": "https://www.amap.com/place/B0FFHS2ZSY",
      "note": "10月4日按用户截图确认集庆门大街店，读取地图门店信息：建邺区集庆门大街188号（凤栖路侧）。公开GCJ02点118.744289,32.029281用gcoord 1.0.7转换为WGS84作为门店参考；苹果地图导航按具体名称及地址搜索。12:30到店来自用户已订位信息。"
    }
  },
  "places": {
    "hotel": {
      "id": "hotel",
      "name": "南京玄武湖桔子水晶酒店",
      "type": "hotel",
      "address": "南京市鼓楼区湖南路18号",
      "lat": 32.0715708,
      "lng": 118.772577,
      "coordinateSystem": "WGS84",
      "positionNote": "苏宁环球购物中心楼宇参考点；酒店门口按名称与地址导航。",
      "positionSource": "https://www.openstreetmap.org/node/5446838885",
      "official": "https://m.huazhu.com/Hotel/Detail/9000712",
      "search": "南京玄武湖桔子水晶酒店 湖南路18号",
      "sources": [
        "hotel"
      ],
      "pay": {
        "wechat": 1,
        "alipay": 1
      }
    },
    "south": {
      "id": "south",
      "name": "南京南站",
      "type": "transport",
      "address": "南京南站（具体检票口以车票及车站屏幕为准）",
      "lat": 31.9712115,
      "lng": 118.7927797,
      "coordinateSystem": "WGS84",
      "positionNote": "铁路车站参考点，不指定检票口。",
      "positionSource": "https://www.openstreetmap.org/node/9164163257",
      "search": "南京南站"
    },
    "airport": {
      "id": "airport",
      "name": "南京禄口国际机场",
      "type": "transport",
      "address": "南京禄口国际机场 · 航站楼与出口待确认",
      "lat": 31.7318395,
      "lng": 118.872291,
      "coordinateSystem": "WGS84",
      "positionNote": "机场区域示意；接机先核对航站楼与出口。",
      "positionSource": "https://www.openstreetmap.org/relation/1903184",
      "search": "南京禄口国际机场"
    },
    "pier": {
      "id": "pier",
      "name": "中山码头周边滨江步道",
      "type": "spot",
      "address": "南京市鼓楼区中山码头 · 江边路公共步道",
      "lat": 32.0898355,
      "lng": 118.7283576,
      "coordinateSystem": "WGS84",
      "positionNote": "码头周边参考点；散步走公共步道，不需要乘渡轮。",
      "positionSource": "https://www.openstreetmap.org/way/321107224",
      "search": "南京中山码头",
      "sources": [
        "river",
        "river2026"
      ]
    },
    "trainpark": {
      "id": "trainpark",
      "name": "下关火车主题园",
      "type": "spot",
      "address": "南京市鼓楼区江边路 · 下关火车主题园",
      "lat": 32.1067474,
      "lng": 118.739278,
      "coordinateSystem": "WGS84",
      "positionNote": "公园参考点；公共出入口与临时围挡以现场为准。",
      "positionSource": "https://www.openstreetmap.org/way/883820987",
      "search": "南京下关火车主题园",
      "sources": [
        "river"
      ]
    },
    "lake": {
      "id": "lake",
      "name": "玄武湖西岸 · 玄武门",
      "type": "spot",
      "address": "南京市玄武区环湖路 · 玄武门",
      "lat": 32.0725734,
      "lng": 118.7823958,
      "coordinateSystem": "WGS84",
      "positionNote": "玄武门城门参考点；散步从门外或公共环湖路进入。",
      "positionSource": "https://www.openstreetmap.org/way/940335843",
      "search": "南京玄武湖玄武门",
      "official": "https://www.xuanwuhu.net/index.aspx",
      "sources": [
        "lake",
        "metro"
      ]
    },
    "shizi": {
      "id": "shizi",
      "name": "狮子桥 · 尹氏汤包备选",
      "type": "food",
      "address": "尹氏汤包：南京市鼓楼区狮子桥2号（湖北路）",
      "lat": 32.0696944,
      "lng": 118.7726458,
      "coordinateSystem": "WGS84",
      "positionNote": "地图为狮子桥街区参考点；餐厅门牌为2号。",
      "positionSource": "https://www.openstreetmap.org/way/89566369",
      "search": "南京百年尹氏汤包 湖南路狮子桥店 狮子桥2号",
      "dianping": "https://www.dianping.com/shop/k5xHVQ48Gg2TEXs3",
      "sources": [
        "yins"
      ],
      "budget": "按人均24元作参考，现场菜单结账",
      "verdict": "适合一顿轻便的汤包、鸭血粉丝汤。已读评论多次提及汤包鲜甜、老店回忆；鸭粉评价偏普通，口味偏甜可少点一笼试试。页面套餐最早10月8日能用，本次按现场菜单点。"
    },
    "dapai": {
      "id": "dapai",
      "name": "南京大牌档 · 玄武湖金茂店",
      "type": "food",
      "address": "南京市鼓楼区中央路201号 · 金茂览秀城7层",
      "lat": 32.0748172,
      "lng": 118.778126,
      "coordinateSystem": "WGS84",
      "positionNote": "金茂汇楼宇参考点；门店在7层。",
      "positionSource": "https://www.openstreetmap.org/way/553679518",
      "search": "南京大牌档 玄武湖金茂览秀城店",
      "dianping": "https://www.dianping.com/shop/k9oZOfvQx1km5L2O",
      "sources": [
        "dapai"
      ],
      "budget": "两人预留180—250元；估算，不是套餐报价",
      "verdict": "方便吃到美龄粥、盐水鸭、烤鸭包，环境有老南京气氛。当天已读评论认为味道一般，另有评论赞美龄粥和服务；适合作为顺路备选。若排队明显，换狮子桥，不为这家耗掉整晚。营业时间页面10:30—22:00，另有营业调整提示。"
    },
    "museum": {
      "id": "museum",
      "name": "南京博物院",
      "type": "spot",
      "address": "南京市玄武区中山东路321号",
      "lat": 32.0422995,
      "lng": 118.819887,
      "coordinateSystem": "WGS84",
      "positionNote": "馆区参考点；具体检票入口以预约通知为准。",
      "positionSource": "https://www.openstreetmap.org/way/319998727",
      "search": "南京博物院 中山东路321号",
      "official": "https://ticket.njmuseum.com.cn/reservation/home.jsp",
      "sources": [
        "museum"
      ],
      "reservation": "已预约 · 10月6日上午场",
      "budget": "常设展免费预约；特展如收费另核对"
    },
    "zoo": {
      "id": "zoo",
      "name": "红山森林动物园 · 北门",
      "type": "spot",
      "address": "南京市玄武区和燕路168号 · 北门",
      "lat": 32.0959002,
      "lng": 118.7947388,
      "coordinateSystem": "WGS84",
      "positionNote": "OSM园区西北侧入口参考；导航明确选择官方北门（和燕路168号）。",
      "positionSource": "https://www.openstreetmap.org/node/3438510204",
      "search": "南京红山森林动物园北门 和燕路168号",
      "official": "https://www.njhszoo.com/",
      "sources": [
        "zoo",
        "zooPrice",
        "zooHoliday",
        "metro",
        "zooXhs",
        "zooHours"
      ],
      "reservation": "必去 · 当日票与入园规则待核对",
      "budget": "成人70元/人，双人140元",
      "phone": "025-85620178"
    },
    "miao": {
      "id": "miao",
      "name": "贵州苗乡牛肉馆 · 石油三村店",
      "type": "food",
      "address": "南京市栖霞区纬四路石油三村2—6号",
      "lat": 32.15595371740244,
      "lng": 118.92852611953383,
      "search": "南京贵州苗乡牛肉馆 纬四路石油三村2-6号",
      "dianping": "https://www.dianping.com/shop/jDRE5oSiqrBVfqdF",
      "mapDetail": "https://j.map.baidu.com/t/7h4IAv",
      "sources": [
        "miao",
        "miaoMap"
      ],
      "budget": "两人预留250—300元；估算，不是套餐报价",
      "verdict": "这家就是已确认的必吃店。已读评论反复提到带皮牛肉、鲜牛肉、牛杂、蘸水与炒饭；环境普通、位置偏，专程安排晚饭比顺路硬凑合适。一条10月2日评论两人吃了268元，肉80元/份；先按食量点，再追加。大众点评页面9:00—22:00，百度地图显示8:00—22:00，晚餐时段不冲突，出发前看商家当日状态。",
      "positionNote": "地图只标门店所在片区（公开坐标仅两位小数，圆圈约1.5公里范围），并非店门口。导航按已核对的纬四路石油三村2—6号搜索。",
      "coordinateSystem": "WGS84",
      "approximate": true,
      "accuracyRadius": 1500,
      "rawCoordinate": {
        "system": "BD09",
        "lng": 118.94,
        "lat": 32.16,
        "precision": "仅显示两位小数"
      },
      "positionSource": "https://api.map.baidu.com/lbsapi/getpoint/index.html"
    },
    "xinjiekou": {
      "id": "xinjiekou",
      "name": "新街口",
      "type": "spot",
      "address": "南京市新街口商圈 · 地铁1/2号线新街口站",
      "lat": 32.0435852,
      "lng": 118.7789021,
      "coordinateSystem": "WGS84",
      "positionNote": "地铁新街口站参考点，按想去的商场选择出口。",
      "positionSource": "https://www.openstreetmap.org/node/9164163247",
      "search": "南京 新街口"
    },
    "fuzimiao": {
      "id": "fuzimiao",
      "name": "夫子庙 · 秦淮河夜景",
      "type": "spot",
      "address": "南京市秦淮区夫子庙步行街与秦淮河周边公共街道",
      "lat": 32.0204106,
      "lng": 118.7827931,
      "coordinateSystem": "WGS84",
      "positionNote": "夫子庙街区参考点；公共街道散步不等于购买大成殿或游船门票。",
      "positionSource": "https://www.openstreetmap.org/way/590937998",
      "search": "南京 夫子庙 · 秦淮河夜景",
      "mapSearch": "南京夫子庙步行街"
    },
    "taicheng": {
      "id": "taicheng",
      "name": "南京城墙 · 台城短段",
      "type": "spot",
      "address": "玄武门—解放门城墙段，解放门在鸡鸣寺路旁",
      "lat": 32.0641179,
      "lng": 118.7914376,
      "coordinateSystem": "WGS84",
      "positionNote": "标点在解放门，用作下城/登城参考。由玄武门上城后沿湖向解放门走，现场核对开放登城口。",
      "positionSource": "https://www.openstreetmap.org/way/1061607219",
      "search": "南京 南京城墙 · 台城短段",
      "mapSearch": "南京解放门 鸡鸣寺路",
      "official": "https://weibo.com/2/detail/5346273911638454",
      "sources": [
        "wall",
        "wallRepair"
      ],
      "budget": "北线日间30元/人；双人60元"
    },
    "zhonghua": {
      "id": "zhonghua",
      "name": "中华门瓮城",
      "type": "spot",
      "address": "南京市秦淮区中华路南端 · 中华门北门登城口",
      "lat": 32.0145139,
      "lng": 118.7762395,
      "coordinateSystem": "WGS84",
      "positionNote": "中华门瓮城参考点，不是中华门地铁站或铁路站；入园按中华门北门指引。",
      "positionSource": "https://www.openstreetmap.org/relation/11308636",
      "search": "南京 中华门瓮城",
      "mapSearch": "南京中华门瓮城 北门 中华路南端",
      "official": "https://weibo.com/2/detail/5346273911638454",
      "sources": [
        "wall"
      ],
      "budget": "南线日间50元/人；夜间有演出90元/人、无演出50元/人"
    },
    "zhongshan": {
      "id": "zhongshan",
      "name": "中山陵",
      "type": "spot",
      "address": "南京市玄武区钟山风景区 · 中山陵陵园路",
      "lat": 32.0601798,
      "lng": 118.8485432,
      "coordinateSystem": "WGS84",
      "positionNote": "陵寝区域参考点；上下车与接驳按官方景区交通指引。",
      "positionSource": "https://www.openstreetmap.org/relation/18303735",
      "search": "南京 中山陵",
      "official": "https://zschina.nanjing.gov.cn/lyzx/202606/t20260618_5862979.html",
      "sources": [
        "zhongshan",
        "zhongshanTransit",
        "zhongshanHoliday",
        "zhongshanRoad"
      ],
      "reservation": "已预约 · 10月4日下午场",
      "budget": "陵寝免费实名预约，景区接驳等按实际消费"
    },
    "president": {
      "id": "president",
      "name": "南京总统府",
      "type": "spot",
      "address": "南京市玄武区长江路292号",
      "lat": 32.04629374137308,
      "lng": 118.7922079889429,
      "coordinateSystem": "WGS84",
      "positionSource": "https://ditu.amap.com/place/B00190BMRC",
      "positionNote": "高德GCJ02景区点转换为WGS84，与官网长江路292号核对；这是景区参考点，临时检票通道以现场指引为准。",
      "search": "南京总统府 长江路292号",
      "official": "https://www.njztf.cn/index.html",
      "sources": [
        "president",
        "presidentWorks",
        "presidentMap"
      ],
      "reservation": "已预约 · 10月5日上午场",
      "budget": "官方普通门票35元/人；已约票按订单"
    },
    "fulin": {
      "id": "fulin",
      "name": "富临轩私房菜（集庆门大街店）",
      "type": "food",
      "address": "南京市建邺区集庆门大街188号（凤栖路侧）",
      "lat": 32.031314550571736,
      "lng": 118.73906899556181,
      "coordinateSystem": "WGS84",
      "positionSource": "https://www.amap.com/place/B0FFHS2ZSY",
      "search": "南京 富临轩私房菜 集庆门大街店 集庆门大街188号 凤栖路侧",
      "mapSearch": "南京市建邺区 富临轩私房菜 集庆门大街店 集庆门大街188号 凤栖路侧",
      "phone": "025-52267778",
      "sources": [
        "fulinMap"
      ],
      "reservation": "已订 · 10月5日12:30到店",
      "positionNote": "集庆门大街店已由你的截图确认。高德GCJ02点转换为WGS84作为门店参考，入口以凤栖路侧和现场门牌为准；导航按完整店名与地址。"
    }
  },
  "days": [
    {
      "id": 2,
      "label": "10.2",
      "weekday": "周五",
      "title": "已完成 · 抵达与沿江骑行",
      "summary": "下午到南京 → 放行李、鸭血粉丝 → 长江西岸骑行",
      "color": "#4a7ea8",
      "intro": "按你确认的实际经历回填：2号抵达南京，晚上去江边骑行。跨过零点后的紫金山夜爬记在3号。",
      "note": "这是已完成的记录。第一晚酒店名和骑行具体起终点未提供，不把原来的下关散步预案冒充你实际骑行的路线。",
      "steps": [
        {
          "id": "d2-arrive",
          "place": "south",
          "time": "下午 · 16:34到站",
          "name": "北京出发，抵达南京",
          "desc": "已从北京出发，下午抵达南京。保留原G743北京南13:04—南京南16:34的交通记录。",
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d2-bagdrop",
          "place": null,
          "time": "抵达后",
          "name": "酒店放行李",
          "desc": "已经在酒店放好行李。首晚具体住处未补充，记录进展即可。",
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d2-dinner",
          "place": null,
          "time": "放行李后",
          "name": "鸭血粉丝",
          "desc": "已经吃过鸭血粉丝；店名未提供。",
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d2-river",
          "place": null,
          "time": "晚间",
          "name": "长江西岸骑行",
          "desc": "已经完成沿江骑行。按你口述记录岸线名称，未推测具体骑行轨迹、桥名或起终点。",
          "completed": true,
          "status": "你已完成"
        }
      ],
      "alternatives": []
    },
    {
      "id": 3,
      "label": "10.3",
      "weekday": "周六",
      "title": "已完成 · 紫金山夜景与江边路",
      "summary": "蒋王庙夜爬 → 包子、江边路与玻璃栈道 → 入住、烤鸭",
      "color": "#967553",
      "intro": "凌晨走过紫金山，已经看到夜景；随后吃早餐、骑车到江边路，再办理入住。晚上吃了两家的烤鸭。",
      "note": "紫金山夜爬已经完成，但日出和白天景色未完成：大雨中没等到，不自动追加一次夜爬。店名听写不清的餐食先保留原话，避免写成另一家店。",
      "steps": [
        {
          "id": "d3-purple-night",
          "place": null,
          "time": "凌晨 · 2号晚跨日后",
          "name": "蒋王庙上下紫金山 · 看夜景",
          "desc": "已完成上下山与夜景。因为雨太大，没看成日出，也没有看到白天景色。",
          "detail": [
            "这次记录只确认蒋王庙上下山，没有推测具体峰顶、观景台或徒步轨迹。"
          ],
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d3-baozi",
          "place": null,
          "time": "下山后",
          "name": "包子早餐 · 店名待确认",
          "desc": "已经吃过你说的“薛什么包子”，暂不猜门店名称。",
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d3-riverside",
          "place": null,
          "time": "早餐后",
          "name": "骑车到江边路 · 江景与玻璃栈道",
          "desc": "已经骑车到江边路，看过江边景色和玻璃栈道。具体栈道名称未确认，暂不放推测标点。",
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d3-hotel",
          "place": "hotel",
          "time": "3号 · 随后",
          "name": "已办理入住",
          "desc": "已办理玄武湖桔子水晶酒店入住，住宿保留至6号离店。",
          "status": "已入住 · 10.3—10.6",
          "completed": true
        },
        {
          "id": "d3-duck",
          "place": null,
          "time": "晚间",
          "name": "叶新烤鸭＋另一家烤鸭",
          "desc": "叶新烤鸭已经吃过；另一家按你口述暂记为“一个瘦鸭子”，确切店名待确认。",
          "completed": true,
          "status": "你已完成"
        }
      ],
      "alternatives": [
        {
          "id": "d3-xinjiekou",
          "place": "xinjiekou",
          "time": "原定安排 · 尚未反馈",
          "desc": "原计划保留：新街口逛逛，未收到这次已完成的反馈。",
          "detail": [],
          "status": "保留原计划 · 未确认完成"
        },
        {
          "id": "d3-airport",
          "place": "airport",
          "time": "原定安排 · 尚未反馈",
          "name": "禄口会合",
          "desc": "原定17:00禄口机场会合，实际接机或会合情况尚未反馈。",
          "detail": [],
          "status": "保留原计划 · 未确认完成"
        },
        {
          "id": "d3-fuzimiao",
          "place": "fuzimiao",
          "time": "原定安排 · 尚未反馈",
          "desc": "原计划保留：夫子庙、秦淮河夜游，未收到这次已完成的反馈。",
          "detail": [],
          "status": "保留原计划 · 未确认完成"
        }
      ],
      "alternativeTitle": "原定安排 · 尚未反馈",
      "alternativeNote": "新街口、夫子庙与接机会合保留在原计划记录里，未标成已经去过，也不自动挤进后续日程。"
    },
    {
      "id": 4,
      "label": "10.4",
      "weekday": "周日",
      "title": "下午中山陵 · 已预约",
      "summary": "上午阅江楼片区用餐已完成 → 下午中山陵 → 晚饭与休息",
      "color": "#637bc0",
      "intro": "今天上午已在阅江楼片区用餐，下午按预约去中山陵。看陵寝主线与白天的钟山景色，晚上留些体力。",
      "note": "中山陵已改到4号下午，6号不再重复安排。国庆检录和接驳可能排队，先保住预约；玄武湖、台城、中华门仍保留为弹性选择，今天不要求全部补齐。",
      "steps": [
        {
          "id": "d4-morning-food",
          "place": null,
          "time": "上午",
          "name": "传湌cān家小馆（阅江楼店）",
          "desc": "上午已在这家店用餐，正式店名和阅江楼分店已按你发来的截图确认。阅江楼游览尚未收到完成反馈。",
          "completed": true,
          "status": "你已完成"
        },
        {
          "id": "d4-zhongshan",
          "place": "zhongshan",
          "time": "下午 · 按已预约时段",
          "desc": "带好预约通知和对应证件，参观中山陵陵寝主线。今天以这一处为重点，不另塞明孝陵、美龄宫和音乐台。",
          "status": "已预约 · 下午场",
          "detail": [
            "到景区仍需接驳或步行，节假日部分核心道路限制网约车和共享单车；地铁到站不等于到检录口，按当日官方接驳与现场指引走。",
            "2026国庆服务公告提到中山陵检录口等处预检录、分段放行。按票面时段提早留余量，排队时不在主通道久停拍照。",
            "官方材料列出陵门以上区域8:30—17:00、墓室关闭。临近关闭先完成陵寝，不因没看成日出再次夜爬。"
          ]
        },
        {
          "id": "d4-meal",
          "place": "hotel",
          "time": "游览后 · 晚饭与休息",
          "name": "吃晚饭，回酒店休息",
          "desc": "先找一顿顺路晚饭。明天有上午总统府和12:30午餐，今晚尽量不熬夜；还想走走再从下方原计划中任选一处。"
        }
      ],
      "alternatives": [
        {
          "id": "d4-lake",
          "place": "lake",
          "time": "傍晚或其他空档 · 就近短走",
          "desc": "玄武湖原计划保留。回酒店片区后，有余力从玄武门到西岸短走30—45分钟，不绕全湖。",
          "detail": [
            "环湖路24小时开放，五洲与情侣园10月22:00关闭。返程近、体力负担小，适合作为中山陵后的弹性散步。"
          ]
        },
        {
          "id": "d4-wall",
          "place": "taicheng",
          "time": "日间有足够余量时",
          "desc": "台城短段原计划保留；如果中山陵后已晚，就留作参考，不为了补打卡再赶一遍。",
          "detail": [
            "北线日间8:30—17:00，夜间仅玄武门、解放门登城开放指定北线段。不同票种、开放范围按官方当日说明。"
          ]
        },
        {
          "id": "d4-zhonghua",
          "place": "zhonghua",
          "time": "晚上 · 只有还想去城南时",
          "desc": "中华门原计划保留为城南夜游选择。从中山陵到城南需要另一次跨区转场，累了就回酒店；不要同晚再叠加台城。",
          "detail": [
            "2026国庆官方公告：南线日间8:30—17:00（17:00停售），50元/人；晚间17:00—22:00（21:30停售），有演出90元/人，无演出50元/人。日场转夜场是否需要另购，以当天票种为准。",
            "不要导航到“中华门站”代替瓮城；地图给的是中华门景区参考点。"
          ]
        }
      ],
      "alternativeTitle": "玄武湖、城墙、中华门 · 仍保留",
      "alternativeNote": "按当天位置和体力任选，地图上的“备”点是候选，不代表今天都要去。"
    },
    {
      "id": 5,
      "label": "10.5",
      "weekday": "周一",
      "title": "总统府、富临轩，再去红山",
      "summary": "总统府上午场 → 12:30富临轩 → 红山精选 → 苗乡火锅",
      "color": "#508a6b",
      "intro": "上午总统府和中午私房菜已经订好，红山、苗乡两个必去照常保留。今天比原计划紧一些，红山挑重点，别追全园。",
      "note": "固定顺序：总统府 → 富临轩12:30 → 红山 → 苗乡。红山官网首页标8:30—16:30，尚未区分检票与清园时间；保守按16:30前看完重点，出发前核对当日票页。国庆不承诺避开人潮。",
      "steps": [
        {
          "id": "d5-president",
          "place": "president",
          "time": "上午场 · 建议约2小时",
          "desc": "按已约时段入馆。主线参观后，争取11:00前后离开，为12:30富临轩到店留转场余量。",
          "status": "已预约 · 上午场",
          "detail": [
            "这一早起是已有预约的例外。若票面允许，可9:00前后入馆，逛到11:00左右；若你的具体入馆时段不同，按预约执行。",
            "酒店玄武门片区可乘1号线到新街口换2号线到大行宫，官网列5号口；出站后按长江路292号及现场检录指引走。",
            "先看主轴办公建筑与主要展厅，再按余量选园林。门楼、桐音馆自8月15日起围挡施工，是否已恢复以现场为准，不为正门照片堵在通道。"
          ]
        },
        {
          "id": "d5-lunch-transfer",
          "place": null,
          "time": "11:00前后—12:30",
          "name": "离开总统府，去富临轩",
          "type": "transport",
          "desc": "导航到集庆门大街188号（凤栖路侧）的富临轩集庆门大街店。12:30到店已固定，留等车和节日拥堵余量，总统府周边不再临时加景点。",
          "detail": [
            "具体分店已按你的截图确认。11:00前后离开总统府至12:30到店是转场与等候缓冲，不是实测车程；出发时用餐厅卡片中的苹果地图路线比较当天交通。"
          ]
        },
        {
          "id": "d5-fulin",
          "place": "fulin",
          "time": "12:30到店 · 已订",
          "desc": "12:30到富临轩集庆门大街店吃私房菜。午餐后直接去红山，建议13:45前后结束用餐，为下午看动物留时间。",
          "status": "已订 · 私房菜"
        },
        {
          "id": "d5-zoo-transfer",
          "place": null,
          "time": "午餐后 · 争取14:30—15:00到北门",
          "name": "从餐厅转到红山北门",
          "desc": "按已核对的北门导航，先看当日票页是否可在目标时间入园。优先比较地铁与网约车到入口的总耗时，路上不再加景点。",
          "detail": [
            "餐厅在集庆门大街，红山北门在城北和燕路168号，需要跨区转场。14:30—15:00到达是规划目标，不是官方最晚入园时间，节日路况与入口排队会影响可用游览时间。",
            "官网首页8:30—16:30与部分攻略所称18:00闭园有口径差异，本页不将18:00当作已确认规则。必要时拨官网咨询电话025-85620178核对。"
          ]
        },
        {
          "id": "d5-zoo",
          "place": "zoo",
          "time": "下午 · 16:30前完成重点",
          "desc": "精选2—3个最想看的区域。北门附近的大熊猫、唐家河等先按入口导览与现场开放情况选，不为了新狮子馆横穿全园。",
          "status": "这次必去",
          "detail": [
            "10月2日官方媒体报道预计3—5日客流较高，午后也可能排队。热门展区若队长，转向邻近想看的动物，别用时间换一张“都来过”的清单。",
            "若15:00才入园，按约1—1.5小时核心游览准备；是否能延长由当天官方闭园规则决定。园区有坡和台阶，坐下休息也计入时间。",
            "已约总统府、12:30午餐与两个必去同日，无法继续承诺原版红山3—4小时。先保留全部目标，以实际入园和体力调整园内范围。"
          ]
        },
        {
          "id": "d5-transfer",
          "place": null,
          "time": "出园后 · 留约60—90分钟缓冲",
          "name": "从红山往石油三村去",
          "type": "transport",
          "desc": "红山与苗乡跨片区，建议按实时地图选择网约车；拥堵时比较公共交通。先确认苗乡石油三村店当天营业和等位。",
          "detail": [
            "60—90分钟是出园、候车和跨区的规划缓冲，未做实时交通测量；不是保证车程。节日堵车可以推迟晚饭，不删掉这顿必吃。"
          ]
        },
        {
          "id": "d5-miao",
          "place": "miao",
          "time": "18:00前后 · 按出园与路况调整",
          "desc": "仍去已确认的纬四路石油三村2—6号店吃牛肉火锅。中午有私房菜，晚饭先少量点牛肉和牛杂，再按食量追加。",
          "status": "这次必吃"
        },
        {
          "id": "d5-back",
          "place": "hotel",
          "time": "晚饭后",
          "desc": "回酒店休息，准备6号南博上午场。晚间预报11℃，带薄外套。"
        }
      ]
    },
    {
      "id": 6,
      "label": "10.6",
      "weekday": "周二",
      "title": "南博上午场，然后回家",
      "summary": "南京博物院上午场 → 午饭与休息 → 18:31南京南返程",
      "color": "#9b7897",
      "intro": "中山陵已经调到4号，6号专心看南京博物院，不重复往钟山跑。上午场预约保留，下午留给吃饭、取行李和返程。",
      "note": "南博已预约上午场；按已有凭证入馆。G726南京南18:31发车、23:02到北京南，建议17:15—17:30到南京南，节日进站安检与找检票口另留余量。",
      "steps": [
        {
          "id": "d6-checkout",
          "place": "hotel",
          "time": "出门前",
          "name": "退房与行李安排",
          "desc": "按订单办理退房，处理好行李。寄存、取回或其他安排由你按当天情况选择。"
        },
        {
          "id": "d6-museum",
          "place": "museum",
          "time": "上午场 · 已预约",
          "desc": "到南京博物院，优先历史馆，再按兴趣选展。入馆按已有上午场凭证。",
          "status": "已预约 · 上午场",
          "detail": [
            "常设展与特展规则分别看通知，预约凭证自行保存。地图为馆区参考点，入场入口按当天指引。"
          ]
        },
        {
          "id": "d6-rest",
          "place": null,
          "time": "参观后 · 午饭与休息",
          "name": "就近吃饭，下午留白",
          "desc": "南博之后就近吃饭、坐坐。暂不自动补进没去成的旧景点，让最后一天轻松一些。"
        },
        {
          "id": "d6-luggage",
          "place": "hotel",
          "time": "16:00前后 · 按实时路线调整",
          "name": "处理好行李，再去车站",
          "desc": "若行李寄在酒店，先回酒店取好，再去南京南；按实时车程倒推，不临时跨区吃饭。行李另有安排就直接去车站。",
          "optional": true
        },
        {
          "id": "d6-station",
          "place": "south",
          "time": "建议17:15—17:30到站 · 18:31发车",
          "desc": "G726南京南18:31出发，23:02到北京南。国庆提前到站，检票口以车站屏幕与乘车凭证为准。"
        }
      ]
    }
  ],
  "sunrise": {
    "enabledByDefault": false,
    "summary": "紫金山夜景已经看过，日出因大雨未完成。5号已有总统府上午场和12:30午餐，6号已有南博上午场；本轮不再叠加日出和夜爬，也不让旧日出方案覆盖新预约。"
  },
  "updatedAt": "2026-10-04",
  "overviewIntro": "已经完成江边骑行、紫金山夜爬和几顿南京美食。接下来：4号下午中山陵，5号上午总统府、12:30富临轩、下午红山、晚上苗乡；6号上午南博，18:31返程。",
  "progressSummary": [
    {
      "day": 2,
      "title": "10.2 · 抵达与江边骑行",
      "desc": "北京出发、下午到南京，放行李后吃鸭血粉丝；晚间完成长江西岸骑行。"
    },
    {
      "day": 3,
      "title": "10.3 · 紫金山夜景与江边路",
      "desc": "凌晨从蒋王庙上下紫金山，看了夜景；大雨未看成日出和白天景色。吃包子后骑到江边路，看江景和玻璃栈道；入住后吃叶新烤鸭及另一家烤鸭。"
    },
    {
      "day": 4,
      "title": "10.4上午 · 已在阅江楼片区用餐",
      "desc": "已吃传湌cān家小馆（阅江楼店），正式店名按新截图确认；下午中山陵仍是已预约、待前往。"
    }
  ]
};
