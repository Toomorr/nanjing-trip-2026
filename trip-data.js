/* 南京行程主数据，WGS84参考点；具体入口与导航地址分别说明。 */
window.TRIP = {
  "title": "南京慢慢走",
  "dates": "2026.10.02—10.06",
  "weather": {
    "queriedAt": "2026-10-02T21:36:23+08:00",
    "issuedAt": "2026-10-02 18:00",
    "source": "https://www.weather.com.cn/weather/101190101.shtml",
    "rows": [
      {
        "day": 2,
        "dayIcon": "—",
        "dayText": "日间已过",
        "high": null,
        "nightIcon": "🌧️",
        "nightText": "小雨",
        "low": 16,
        "wind": "3—4级"
      },
      {
        "day": 3,
        "dayIcon": "🌧️",
        "dayText": "小雨",
        "high": 18,
        "nightIcon": "🌧️",
        "nightText": "小雨",
        "low": 16,
        "wind": "3—4级"
      },
      {
        "day": 4,
        "dayIcon": "☁️",
        "dayText": "阴",
        "high": 21,
        "nightIcon": "☁️",
        "nightText": "多云",
        "low": 13,
        "wind": "3—4级"
      },
      {
        "day": 5,
        "dayIcon": "☀️",
        "dayText": "晴",
        "high": 20,
        "nightIcon": "🌙",
        "nightText": "晴",
        "low": 11,
        "wind": "3—4级转微风"
      },
      {
        "day": 6,
        "dayIcon": "☀️",
        "dayText": "晴",
        "high": 21,
        "nightIcon": "🌙",
        "nightText": "晴",
        "low": 11,
        "wind": "微风"
      }
    ]
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
      "note": "2026年官方材料：实名预约，按时段进入；天下为公陵门以上区域8:30—17:00，墓室关闭。用户确认6号已预约，不公开预约凭证。"
    },
    "zhongshanTransit": {
      "title": "中山陵园管理局 · 景区交通与服务",
      "url": "https://zschina.nanjing.gov.cn/fjms/",
      "note": "使用景区官方公共交通与观光车信息。进入钟山景区的接驳与步行不同于到地铁站的时间。"
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
        "zooXhs"
      ],
      "reservation": "必去 · 出发前检查日期票与入园规则",
      "budget": "成人70元/人，双人140元"
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
      "search": "南京 夫子庙 · 秦淮河夜景"
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
        "zhongshanTransit"
      ],
      "reservation": "已预约 · 10月6日",
      "budget": "陵寝免费实名预约，景区接驳等按实际消费"
    }
  },
  "days": [
    {
      "id": 2,
      "label": "10.2",
      "weekday": "周五",
      "title": "到南京，去江边走走",
      "summary": "16:34到南京南 → 安顿与晚饭 → 下关滨江或玄武湖",
      "color": "#4a7ea8",
      "intro": "独行的一晚，把散步当作第一件小事。先处理行李和住宿，再决定沿江走多远。",
      "note": "2日晚预报小雨、16℃。下关有江风，带薄外套和伞；雨势明显就选酒店附近的室内晚餐。",
      "steps": [
        {
          "id": "d2-arrive",
          "place": "south",
          "time": "16:34",
          "desc": "G743到南京南。出站后先安顿行李，不带大包去江边。",
          "detail": [
            "如果第一晚住湖南路、玄武门附近，地铁1号线可直达玄武门片区。车站出站、乘车与步行整体预留约一小时，具体以实时导航为准。"
          ]
        },
        {
          "id": "d2-nightstay",
          "place": "hotel",
          "time": "17:30—19:00",
          "name": "先选今晚住处，再吃晚饭",
          "desc": "10月2日住宿未定。优先住湖南路、玄武门附近，第二天换到已订酒店方便。",
          "status": "住宿未定",
          "detail": [
            "已订桔子水晶是10月3日开始，不能把10月2日当成已包含的一晚。先问同店能否补一晚及总价；不合适再选附近的正规酒店，本页没有实时房价。",
            "若选洗浴或网吧过夜，先向商家确认国庆过夜费、离店截止、是否有可躺的休息位及行李存放。第二天下午仍要接机，能睡好比多逛一个地方有用。"
          ]
        },
        {
          "id": "d2-dinner",
          "place": "shizi",
          "time": "18:00—19:00",
          "desc": "在住宿片区简单吃汤包或鸭血粉丝汤。吃完看雨势再出发，别为小吃排长队。"
        },
        {
          "id": "d2-river",
          "place": "trainpark",
          "time": "19:30—21:00",
          "name": "下关滨江散步 · 轻松版",
          "desc": "打车到下关火车主题园周边，在公共滨江步道走45—60分钟。体力和雨势允许，再朝长江大桥方向延长。",
          "detail": [
            "可以在这段公共步道连续走，但不保证整个南京沿江都能无间断通行。到围挡、封闭或施工口就回到公共道路，以现场标识为准。",
            "想走完整一些，可从中山码头向下关火车主题园、长江大桥方向走。官方历史介绍称码头至大桥滨江段约3公里；这是岸线段长，不是本次实测步行导航，慢走预留1.5—2小时。",
            "夜里沿灯光与正常开放步道走。无需乘渡轮，也不把工业铁路或未开放岸线当作散步路线。"
          ],
          "modes": [
            "river"
          ]
        },
        {
          "id": "d2-lake",
          "place": "lake",
          "time": "19:30—20:30",
          "name": "近处备选 · 玄武湖西岸",
          "desc": "小雨但仍想走走，就在玄武门与环湖路短走30—45分钟，结束后回住宿处。",
          "detail": [
            "环湖路全年24小时开放，五洲和情侣园10月22:00关闭，两者不是同一个范围。雨大时直接留在湖南路室内活动。"
          ],
          "modes": [
            "lake"
          ]
        }
      ],
      "alternatives": [
        {
          "id": "d2-pier",
          "place": "pier",
          "time": "延长散步时",
          "desc": "想走更长的岸线，可用中山码头周边作起点。先在实时地图核对开放公共步道，再往火车主题园、大桥方向走。"
        }
      ]
    },
    {
      "id": 3,
      "label": "10.3",
      "weekday": "周六",
      "title": "新街口逛逛，夫子庙看夜景",
      "summary": "中午酒店安顿 → 新街口 → 机场会合 → 夫子庙",
      "color": "#967553",
      "intro": "上午睡饱，中午从酒店片区出发。白天新街口随意逛，晚上会合后再去秦淮河边。",
      "note": "女友17:00到禄口机场。新街口放白天、夫子庙放会合后；接机和出机场留出弹性，饭后累了就缩短夜游。",
      "steps": [
        {
          "id": "d3-hotel",
          "place": "hotel",
          "time": "12:00前后",
          "name": "酒店安顿与午饭",
          "desc": "先办理入住或寄存行李，简单吃午饭。提前拿房以当天房态为准。",
          "status": "10.3入住—10.6离店",
          "detail": [
            "若晚些才回酒店入住，可自行提前告知酒店到店时间。不要带着大件行李逛商圈或接机。"
          ]
        },
        {
          "id": "d3-xinjiekou",
          "place": "xinjiekou",
          "time": "13:00—14:30",
          "desc": "逛新街口商圈、找个地方坐坐。你已经来过，这次按想逛的商场和吃的东西随意走，不补打卡清单。",
          "detail": [
            "酒店片区可乘地铁1号线到新街口；商圈出口多，按商场名称导航。雨天把这段放室内。"
          ]
        },
        {
          "id": "d3-airport",
          "place": "airport",
          "time": "15:00前后出发 · 17:00落地",
          "name": "禄口会合",
          "desc": "若去接机，从新街口直接往机场走；若她自行进城，就约好市区会合点。先确认航站楼与出口。",
          "detail": [
            "公共交通可由1号线到南京南换S1机场线。17:00是落地时间，行李与走到出口另留30—60分钟，交通耗时看实时导航。"
          ]
        },
        {
          "id": "d3-fuzimiao",
          "place": "fuzimiao",
          "time": "会合后 · 晚饭与夜游",
          "desc": "在夫子庙、秦淮河周边吃晚饭，沿公共街道和河边看看灯光。想轻松就走一小段，不把游船、收费展馆都加进去。",
          "detail": [
            "已经去过夫子庙，重点放在两人一起散步和吃饭。国庆人多，选择现场排队能接受的店；本页没有核实这个片区的具体新餐厅，不强推某家网红店。",
            "回酒店按实时地图选择地铁或网约车。下雨、排队或接机晚点时，缩短夜游。"
          ]
        },
        {
          "id": "d3-back",
          "place": "hotel",
          "time": "夜游结束后",
          "desc": "回玄武湖酒店休息，明天再去湖与城墙。"
        }
      ]
    },
    {
      "id": 4,
      "label": "10.4",
      "weekday": "周日",
      "title": "玄武湖、城墙，再到中华门",
      "summary": "12:00午饭 → 玄武湖 → 台城短段 → 中华门",
      "color": "#637bc0",
      "intro": "沿你暂定的顺序，先看湖，再走一段临湖城墙，下午转去中华门。把城墙体验控制在短段，给晚饭留体力。",
      "note": "玄武门—解放门与中华门分属两段收费城墙。默认都去；想减少登城和门票，可选“玄武湖＋中华门城墙”。别把两段当作能一路走过去的连续路线。",
      "steps": [
        {
          "id": "d4-lunch",
          "place": "shizi",
          "time": "12:00—12:40",
          "desc": "先在湖南路、狮子桥附近吃午饭，再去玄武门。"
        },
        {
          "id": "d4-lake",
          "place": "lake",
          "time": "13:00—14:00",
          "desc": "从玄武门进湖边，散步、坐坐，看西岸与城墙。不绕全湖，把体力留给后面的登城。",
          "detail": [
            "环湖路与岛洲开放时间不同；本段下午安排不涉及闭园边界。起风带好外套。"
          ]
        },
        {
          "id": "d4-wall",
          "place": "taicheng",
          "time": "14:00—15:15",
          "desc": "从玄武门一侧按现场登城口上城，向解放门走约1.4公里。临湖段看湖与城市天际线，到解放门下城。",
          "detail": [
            "官方报道显示该段2025年8月恢复开放，长度约1.4公里；当前入口和临时限制以现场为准。北线日间票30元/人。",
            "若这会儿已经走累，改选轻松版：湖边休息后直接坐车去中华门，把登城留在中华门。"
          ],
          "modes": [
            "full"
          ]
        },
        {
          "id": "d4-transfer",
          "place": null,
          "time": "15:15—16:00",
          "name": "下城，坐车去中华门",
          "type": "transport",
          "desc": "从玄武湖片区转到城南。用地铁或网约车，不沿城墙徒步跨城。轻松版可把这段提前。"
        },
        {
          "id": "d4-zhonghua",
          "place": "zhonghua",
          "time": "16:00—17:00",
          "desc": "到中华门北门，参观瓮城与城墙。日间看建筑细节，晚饭后是否留下看夜景按体力决定。",
          "detail": [
            "2026国庆官方公告：南线日间8:30—17:00（17:00停售），50元/人；晚间17:00—22:00（21:30停售），有演出90元/人，无演出50元/人。日场转夜场是否需要另购，以当天票种为准。",
            "不要导航到“中华门站”代替瓮城；地图给的是中华门景区参考点。"
          ]
        },
        {
          "id": "d4-meal",
          "place": "zhonghua",
          "time": "傍晚 · 晚饭和休息",
          "name": "中华门周边吃晚饭",
          "desc": "在城南附近找一顿顺路饭，愿意再走可往门东公共街区看看。不上第二遍城墙也能结束得很舒服。"
        }
      ]
    },
    {
      "id": 5,
      "label": "10.5",
      "weekday": "周一",
      "title": "红山慢逛，苗乡吃火锅",
      "summary": "12:00出发 → 红山3—4小时 → 18:00苗乡牛肉火锅",
      "color": "#508a6b",
      "intro": "这次的两个必去放在同一天：白天看动物，晚上专程去石油三村吃牛肉火锅。",
      "note": "红山国庆预计3—5日客流较高。中午出发符合你们作息，但不承诺因此避开人潮；先确认入园票，再按体力挑区域。",
      "steps": [
        {
          "id": "d5-depart",
          "place": "hotel",
          "time": "12:00",
          "name": "中午出门",
          "desc": "吃点午饭、带水，穿好走的鞋。酒店所在玄武门片区到红山北门优先考虑地铁1号线。"
        },
        {
          "id": "d5-zoo",
          "place": "zoo",
          "time": "12:30—16:30",
          "desc": "用3—4小时挑重点，不追求全园。唐家河、冈瓦纳等按现场园内地图选择，非洲主题狮子馆也可作为加选。",
          "detail": [
            "官方地址为和燕路168号，北门；地铁1号线红山动物园站直达北门。入口别导航到同名南门。",
            "时间为游览建议，16:30准备出园。节日售票、最后入园与闭园时刻在出发当天看官方页面，不把旧地图资料中的时间写成已确认规则。",
            "新非洲主题狮子馆10月1日开放；若排队或绕路明显，就选你们更想看的动物，不必追新馆。"
          ]
        },
        {
          "id": "d5-transfer",
          "place": null,
          "time": "16:30—18:00",
          "name": "出园，往石油三村去",
          "type": "transport",
          "desc": "给出园与跨区交通留缓冲。建议按实时地图选网约车或公共交通，先确认苗乡门店当天营业状态。",
          "detail": [
            "动物园与苗乡不是相邻的一片街区。这里预留约一小时以上转场与等候，实际车程未实时测量；节日堵车就推迟晚饭，不删掉这顿必吃。"
          ]
        },
        {
          "id": "d5-miao",
          "place": "miao",
          "time": "18:00—19:30",
          "desc": "到已确认的纬四路石油三村店吃牛肉火锅。带皮牛肉、鲜牛肉、牛杂先少量搭配，蘸水、白萝卜与炒饭按口味加。",
          "status": "这次必吃"
        },
        {
          "id": "d5-back",
          "place": "hotel",
          "time": "晚饭后",
          "desc": "回酒店休息。晚间预报11℃，别只穿白天那一件薄衣服。"
        }
      ]
    },
    {
      "id": 6,
      "label": "10.6",
      "weekday": "周二",
      "title": "中山陵、南博，然后回家",
      "summary": "中山陵 → 南京博物院上午场 → 18:31南京南返程",
      "color": "#9b7897",
      "intro": "两处已经约好，按你确认的中山陵、南博顺序走。南博是上午场，这一天跟着已有预约通知安排。",
      "note": "中山陵与南博均按已预约处理；南博标记上午场。页面记录地点顺序和票的状态，具体入馆时间按你手里的通知。",
      "steps": [
        {
          "id": "d6-checkout",
          "place": "hotel",
          "time": "出门前",
          "name": "退房与行李安排",
          "desc": "按订单办理退房，处理好行李。寄存、取回或其他安排由你按当天情况选择。"
        },
        {
          "id": "d6-zhongshan",
          "place": "zhongshan",
          "time": "按已约时段",
          "desc": "到中山陵，沿陵寝主线参观。今天不另加明孝陵、美龄宫或音乐台。",
          "status": "已预约",
          "detail": [
            "预约与具体入园时间以你已有通知为准。景区交通到达点与陵寝入口之间还有接驳或步行，导航搜索中山陵。",
            "官方2026年材料列出陵门以上8:30—17:00、墓室关闭。爬台阶按体力停留，不默认开放墓室。"
          ]
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
          "id": "d6-luggage",
          "place": "hotel",
          "time": "返程前 · 按行李安排",
          "name": "处理好行李，再去车站",
          "desc": "若行李仍寄存在酒店，回去取好；若已经另作安排，直接去南京南。",
          "optional": true
        },
        {
          "id": "d6-station",
          "place": "south",
          "time": "18:31发车",
          "desc": "G726南京南出发，23:02到北京南。检票口以车站屏幕与乘车凭证为准。"
        }
      ]
    }
  ],
  "sunrise": {
    "enabledByDefault": false,
    "summary": "只在5号晴天且愿意早起时加玄武湖西岸日出，上午和12:00—14:00补觉，红山改成14:30—16:30精选，苗乡仍留晚上。",
    "day5Steps": [
      {
        "id": "d5-sunrise",
        "place": "lake",
        "time": "清晨 · 按当天日出预报",
        "name": "玄武湖西岸等天亮",
        "desc": "只在晴天、云量和体力合适时执行。就近去湖西岸，精确日出分钟请看前一晚天气应用。"
      },
      {
        "id": "d5-sleep",
        "place": "hotel",
        "time": "上午和12:00—14:00",
        "name": "回酒店补觉",
        "desc": "把中午也腾出来睡觉。今天红山缩成两小时精选，不叠加完整3—4小时游览。"
      },
      {
        "id": "d5-zoo-sun",
        "place": "zoo",
        "time": "14:30—16:30",
        "desc": "起床、吃饭后去北门，精选少量区域。若想慢逛更久，就取消日出，恢复普通方案。"
      },
      {
        "id": "d5-transfer-sun",
        "place": null,
        "time": "出园后",
        "name": "往石油三村去",
        "type": "transport",
        "desc": "给跨区转场留缓冲，按实时地图选择交通。"
      },
      {
        "id": "d5-miao-sun",
        "place": "miao",
        "time": "18:00前后",
        "desc": "必吃的苗乡牛肉火锅照常保留，门店是纬四路石油三村2—6号。",
        "status": "这次必吃"
      },
      {
        "id": "d5-back-sun",
        "place": "hotel",
        "time": "晚饭后",
        "desc": "回酒店休息。"
      }
    ]
  }
};
