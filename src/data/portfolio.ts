import type { Project, Skill } from '@/types';
import { asset } from '@/lib/asset';

const rawProjects: Project[] = [
  {
    id: 'uv-tect',
    title: 'UV-TECT新品发布会',
    subtitle: '负责品牌线上传播+线下会员拉新',
    subtitleEn: 'Brand Online Communication & Offline Membership Growth',
    tags: ['品牌传播', '活动策划', '会员增长'],
    cover: '/uvtect-cover.jpg',
    color: '#ffffff',
    description:
      '2026年5月，我深度参与策划 mont·bell UV-TECT新品发布会。考虑到线上传播需要可感知、可扩散的内容，我建议团队把整个活动设计成一场全新的装置艺术展+明星达人探店的体验事件——现场每个环节都预设了分享动机；同时邀请陆柯燃和户外博主到场体验，产出穿搭和打卡内容，线上预热引流到线下，线下体验再反哺社交传播。**整场活动落地深圳湾万象城，话题曝光量突破2亿+。**',
    showMetrics: false,
    introImage: '/uvtect-intro.jpg',
    gallery: ['/uvtect-cover.jpg', '/uvtect-1.jpg', '/uvtect-2.jpg'],
    timelineTitle: '参与工作',
    timeline: [
      { phase: '01', title: '策划阶段', description: '结合市场需求，策划活动大体方向' },
      { phase: '02', title: '设计线上传播方案', description: '根据活动策划案，设计推广方案' },
      { phase: '03', title: '线上推广', description: '公众号/抖音/小红书/线下门店分阶段集中push' },
      { phase: '04', title: '活动拉新', description: '引导用户参与现场活动，注册成为小程序会员' },
    ],
    contentModules: [
      {
        image: '/uvtect-1.jpg',
        title: '以织为盾 轻装向阳',
        subtitle: '预热释放内容',
        link: 'https://mp.weixin.qq.com/s/4buvdATKnU2yL0ffgkk0iw',
      },
      {
        image: '/uvtect-2.jpg',
        title: '当代轻量化冒险家行为大赏｜深圳篇',
        subtitle: '达人穿搭精选预热',
        link: 'https://mp.weixin.qq.com/s/glWKSbM8dthttEtDcMwbYA',
      },
      {
        image: '/uvtect-3.png',
        title: '深圳首发｜你好，UV-TECT！',
        subtitle: '活动现场报道',
        link: 'https://mp.weixin.qq.com/s/fYyFADK_2Ki7HIXox-chxw',
      },
      {
        image: '/uvtect-4.jpg',
        title: '你好，陆柯燃｜以织为盾，轻装向阳',
        subtitle: '明星个人深度专访',
        link: 'https://mp.weixin.qq.com/s/CmKjRNuSZi_SkSNXhRmODw',
      },
      {
        image: '/uvtect-5.png',
        title: '明星机场路透',
        subtitle: '预热保密阶段',
        link: 'http://xhslink.cn/o/An5HsGb7BF0',
      },
      {
        image: '/uvtect-6.png',
        title: '明星现场图文/视频等',
        subtitle: '现场报道',
        link: 'http://xhslink.cn/o/7CSIIzXlz6N',
      },
    ],
    related: ['oneday-manager', 'light-travel-salon'],
  },
  {
    id: 'oneday-manager',
    title: '轻装向阳 · 一日店长见面日活动',
    subtitle: '负责品牌线上传播+线下会员拉新',
    tags: ['品牌传播', '活动策划', '会员增长'],
    cover: '/oneday-cover.jpg',
    color: '#ffffff',
    description:
      '2026年7月，深度参与策划X院长一日店长线下活动。线上传播是本次活动的重点之一，以“发布悬念制造期待-引爆现场-沉淀口碑”为逻辑闭环，打造从线上话题到线下体验的完整营销链路。最终销售亦获得成功：活动日店长日门票售卖**22446**元，成都门店销售额超过**110000**元，同比7月其他周六日销数据增长超过**550%**。',
    showMetrics: false,
    introImage: '/oneday-intro.jpg',
    timelineTitle: '参与工作',
    timeline: [
      { phase: '01', title: '策划阶段', description: '结合市场需求，参与讨论活动大体方向' },
      { phase: '02', title: '设计线上传播方案', description: '根据活动策划案，设计推广方案' },
      { phase: '03', title: '线上推广', description: '公众号/抖音/小红书/线下门店分阶段集中push' },
      { phase: '04', title: '活动拉新', description: '引导用户参与现场活动，注册成为小程序会员' },
    ],
    gallery: ['/oneday-cover.jpg', '/oneday-intro.jpg'],
    contentModules: [
      {
        image: '/oneday-1.png',
        title: '一个男孩，一件防晒，一天',
        subtitle: '悬念造势，积蓄流量',
        link: 'https://mp.weixin.qq.com/s/XNzuLUVfzKYyVSZpfL3onA',
      },
      {
        image: '/oneday-2.jpg',
        title: '他在一日之间，成为一间店的节奏',
        subtitle: '正式预告发布',
        link: 'https://mp.weixin.qq.com/s/NuOumVHdE0d3bTDjQlrRaw',
      },
      {
        image: '/oneday-3.png',
        title: '各渠道传播扩散',
        subtitle: '公域/达人私域各渠道扩散',
        link: 'https://www.xiaohongshu.com/discovery/item/6a4c5e43000000001603e9c2?app_platform=ios&app_version=9.41.2&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CBIo4lWY_eHHT1Td6xlnTgbAsMF8WUojOlBXmqyLa-i7I=&author_share=1&xhsshare=WeixinSession&shareRedId=ODZEQjo8O0A2NzUyOTgwNjY0OTc2PUs8&apptime=1786340960&share_id=a961abc036bd4362812ab98730893e32&code=6Y2SwldXprM',
      },
      {
        image: '/oneday-4.jpg',
        title: 'mont·bell来成都大悦城办展啦',
        subtitle: '联动成都大悦城预热活动',
        link: 'https://www.xiaohongshu.com/explore/6a56ee0a000000001003e37b?app_platform=ios&app_version=9.41.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBSmrI1W3Bv72C2c1CxXZpOHRQudZgJNefaorzBa0MIRw=&author_share=1&xhsshare=WeixinSession&shareRedId=ODZEQjo8O0A2NzUyOTgwNjY0OTc2PUs8&apptime=1786341048&share_id=9720f58857bc41529c788eaea038d6a7&code=5Xtp6oHGaSQ&wechatWid=98c605f3ba0ac3f85ab8efe45b42052d&wechatOrigin=menu',
      },
      {
        image: '/oneday-5.jpg',
        title: 'OH MY GOD！你怎么连夏天都不出门了？',
        subtitle: '品牌报道，沉淀内容，延续价值',
        link: 'https://mp.weixin.qq.com/s/ZprZRXU2lRhK6LtrHNucXw',
      },
      {
        image: '/oneday-6.png',
        title: '去小熊家做客的一天',
        subtitle: '达人发布精彩回顾，持续向粉丝转化品牌口碑',
        link: 'http://xhslink.cn/o/7CSIIzXlz6N',
      },
    ],
    related: ['uv-tect', 'light-travel-salon'],
  },
  {
    id: 'light-travel-salon',
    title: '她，轻装出行会员沙龙活动',
    subtitle: '负责品牌线上传播+沙龙成员招募',
    tags: ['品牌传播', '会员运营', '沙龙活动'],
    cover: '/light-cover.jpg',
    color: '#ffffff',
    description:
      '2026年3月，为私域会员部筹备专属会员沙龙活动。区别于传统的单向品牌宣讲，我们希望在轻松、私享的氛围中，与会员进行面对面的真诚交流。活动以“轻量化”品牌理念为圆心，通过达人参与线上传播与线下互动，完成从线上招募到线下体验的完整闭环。',
    showMetrics: false,
    introImage: '/light-intro.jpg',
    timelineTitle: '参与工作',
    timeline: [
      { phase: '01', title: '策划阶段', description: '深度参与讨论活动大体方向' },
      { phase: '02', title: '设计传播方案', description: '根据活动策划案，设计线上+线下推广方案' },
      { phase: '03', title: '线上推广招募', description: '公众号/抖音/小红书/线下门店分阶段集中push' },
      { phase: '04', title: '线下落地', description: '对接门店、花艺、展陈、达人、活动现场进度等' },
    ],
    gallery: ['/light-cover.jpg', '/light-intro.jpg'],
    contentModules: [
      {
        image: '/light-1.jpg',
        title: '「她，轻装出行」品牌活动招募开启！立刻集结！',
        subtitle: '活动预热，会员精准招募',
        link: 'https://mp.weixin.qq.com/s/IS6QIs8eCKBhmxdkgxHG9w',
      },
      {
        image: '/light-2.jpg',
        title: '不必被定义，不必被束缚!',
        subtitle: '小红书/达人私域持续招募',
        link: 'https://www.xiaohongshu.com/explore/69aa7bba000000001a028221?app_platform=ios&app_version=9.41.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBkixeN74S3cvHyNHCz66GCE5cDJa__GM-DJcrnIed6EM=&author_share=1&xhsshare=WeixinSession&shareRedId=ODZEQjo8O0A2NzUyOTgwNjY0OTc2PUs8&apptime=1786350022&share_id=6229f1372de94405aa558d0a5ee6e98b&code=2XdbNatEgZX&wechatWid=24cb44007d0264ac08ae628fc0e5dfc6&wechatOrigin=menu',
      },
      {
        image: '/light-3.jpg',
        title: '达人穿搭示范预热',
        subtitle: '小红书/达人私域持续招募',
        link: 'https://www.xiaohongshu.com/explore/69a93cb1000000002602de9d?app_platform=ios&app_version=9.41.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBZG0ADfyVi5YOQH-xU0KHcko2zQOSd6v73Adq0cInxo0=&author_share=1&xhsshare=WeixinSession&shareRedId=ODZEQjo8O0A2NzUyOTgwNjY0OTc2PUs8&apptime=1786350047&share_id=6119efa35906494ba191593896d69a56&code=5d4W2CYPTF7&wechatWid=24cb44007d0264ac08ae628fc0e5dfc6&wechatOrigin=menu',
      },
      {
        image: '/light-4.jpg',
        title: '北京活动｜赴轻盈之约，聚温柔之力',
        subtitle: '活动精彩瞬间，反馈闭环',
        link: 'https://mp.weixin.qq.com/s/4aQLPbsYTXMzicm5e96I6g',
      },
    ],
    related: ['uv-tect', 'oneday-manager'],
  },
  {
    id: 'montbell-social',
    title: 'mont·bell 社交媒体运营',
    subtitle: 'mont·bell 社媒市场/会员内容',
    tags: ['社媒运营', '内容创作', '会员推广'],
    cover: '/social-cover.png',
    color: '#ffffff',
    description:
      'mont·bell 社交媒体账号负责人，制作内容涵盖：产品推广、活动推广、会员权益推广、户外攻略等。以入职为节点，**公众号端总曝光半年增幅达33%，单条内容平均完读率从36%升至46%，增长10个百分点，相对提升28%**，用户信息触达更完整，转化漏斗损耗降低。',
    showMetrics: false,
    introImage: '/social-cover.png',
    timelineTitle: '参与工作',
    timeline: [
      { phase: '01', title: '选题创作', description: '根据产品、市场、会员推广需求，进行选题并创作文案' },
      { phase: '02', title: '内容制作', description: '文案定稿，独立进行图文设计，同步输出公众号、小红书、抖音等社媒内容' },
      { phase: '03', title: 'SVG制作', description: '根据需要进行公众号SVG的调试' },
      { phase: '04', title: '发布运营', description: '发布后跟踪数据，提炼可借鉴选题' },
    ],
    gallery: ['/social-cover.png', '/social-cover.png'],
    contentModules: [
      {
        image: '/social-ext-4.jpg',
        title: '北京新店 | mont·bell 轻量户外生活美学一站体验',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/B1O4x0BeMpdrP3ZLgX9mlg',
      },
      {
        image: '/social-ext-5.jpg',
        title: '一件防风夹克，替你守住恰好',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/rVO5is0WUe4Z1qn9MLc1Og',
      },
      {
        image: '/social-ext-1.jpg',
        title: '为崇尚轻量自由的玩家而生',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/a-AyxIxAyMAz4jmScS7sNA',
      },
      {
        image: '/social-ext-2.jpg',
        title: '换季，一件刚好',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/dE1hHP9LwnqhGCoB_CNQ6w',
      },
      {
        image: '/social-1.jpg',
        title: '轻装向阳，从容逐光',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/0mbgRFh2NQmIFtXcsGqCWg',
      },
      {
        image: '/social-2.jpg',
        title: '以纸为衫，轻简换季',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/B0R7IaouXO3dAqh-e7ri9A',
      },
      {
        image: '/social-3.jpg',
        title: '长城特别限定款｜不张扬，却有分量',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/dgdTP6oKbpYMCRO6gzUKAQ?token=1029257168&lang=zh_CN',
      },
      {
        image: '/social-4.jpg',
        title: '敢晒敢行，不设限',
        subtitle: '产品方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/ch5aYLEMQzAv0Dj0hbYHKw',
      },
      {
        image: '/social-5.jpg',
        title: '会员专享价来袭！多重福利开启！',
        subtitle: '会员方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/cgo5PFwayM5HksA2sbN7EQ',
      },
      {
        image: '/social-6.png',
        title: '过年这件「重」要的事，我们想让你「轻」松点',
        subtitle: '市场方向-选题/文案/设计/SVG独立完成',
        link: 'https://mp.weixin.qq.com/s/ngWsopDbyKiS1CcgYh4IZg',
      },
    ],
    related: ['uv-tect', 'oneday-manager'],
  },
  {
    id: 'yibin-marathon',
    title: '宜宾市翠屏区迷你马拉松（两届）',
    subtitle: '负责活动策划及执行',
    tags: ['活动策划', '政府合作', '线下执行'],
    cover: '/marathon-cover.jpg',
    color: '#ffffff',
    description:
      '2024年11月及2025年9月，两次作为核心策划成员参与宜宾市翠屏区“奔跑吧·新江北”迷你马拉松系列活动（单场规模1000人+），负责活动方案策划、赛道设计、补给点及打卡点设置、现场执行统筹的工作。活动执行有序，获参与者一致好评，联动官媒跟踪报答，全网综合曝光200w+，有效提升区域知名度。',
    showMetrics: false,
    introImage: '/marathon-intro.jpg',
    timelineTitle: '参与工作',
    timeline: [
      { phase: '01', title: '策划阶段', description: '主导并参与活动大体方向设计并向上级汇报' },
      { phase: '02', title: '设计活动方案', description: '对接区政府进行活动线上+线下方案调整、深化' },
      { phase: '03', title: '活动落地', description: '场地确认、活动报批、活动公司对接、各部门工作协调' },
      { phase: '04', title: '活动结束', description: '进行汇报工作并初步确认第二届活动时间' },
    ],
    gallery: ['/marathon-cover.jpg', '/marathon-intro.jpg'],
    contentModules: [
      {
        image: '/marathon-1.jpg',
        title: '第一届活动报道',
        subtitle: '',
        link: 'https://mp.weixin.qq.com/s/aXAO8y5UMb57dusdNkeYlw',
      },
      {
        image: '/marathon-2.jpg',
        title: '第二届活动预热',
        subtitle: '',
        link: 'https://mp.weixin.qq.com/s/lK8Bvithhkqep8qVxFPCRQ',
      },
      {
        image: '/marathon-3.jpg',
        title: '第二届参赛指南',
        subtitle: '',
        link: 'https://mp.weixin.qq.com/s/8rU3HIL-77WrrdBmYIPTSg',
      },
      {
        image: '/marathon-4.jpg',
        title: '第二届活动报道',
        subtitle: '',
        link: 'https://mp.weixin.qq.com/s/9zWJ-jzpVSW58BbuMKPLIA',
      },
    ],
    related: ['montbell-social', 'uv-tect'],
  },
  {
    id: 'montbell-summit',
    title: 'mont·bell2026海峰会（筹备中）',
    subtitle: '负责品牌线上传播',
    tags: ['品牌传播', '线上传播', '峰会活动'],
    cover: '/summit-cover.jpg',
    color: '#ffffff',
    description: 'mont·bell 2026 海峰会正在筹备中，负责品牌线上传播策划与内容预热。',
    showMetrics: false,
    gallery: ['/summit-cover.jpg'],
    related: [],
    noDetail: true,
  },
];

/** 统一为 public 资源补上部署 base 前缀，保证子目录部署时图片不会 404 */
export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  cover: asset(project.cover),
  introImage: project.introImage ? asset(project.introImage) : undefined,
  gallery: project.gallery.map(asset),
  contentModules: project.contentModules?.map((module) => ({
    ...module,
    image: asset(module.image),
  })),
}));

export const skills: Skill[] = [
  { name: 'Photoshop', category: 'design' },
  { name: 'Canva可画', category: 'design' },
  { name: 'Figma', category: 'design' },
  { name: '秀米', category: 'tool' },
  { name: 'E2编辑器', category: 'tool' },
  { name: '135编辑器', category: 'tool' },
  { name: 'Premiere Pro', category: 'tool' },
  { name: 'AI', category: 'design' },
  { name: 'AE', category: 'tool' },
  { name: 'Powerpoint', category: 'tool' },
];

export const stats = [
  { label: '完成项目', value: 48, suffix: '+' },
  { label: '合作客户', value: 32, suffix: '+' },
  { label: '客户满意度', value: 98, suffix: '%' },
  { label: '代码提交', value: 1200, suffix: '+' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'Dribbble' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
];
