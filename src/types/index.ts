export interface Project {
  id: string;
  title: string;
  subtitle: string;
  subtitleEn?: string;
  tags: string[];
  cover: string;
  color: string;
  description: string;
  challenge?: string;
  solution?: string;
  result?: string;
  metrics?: { label: string; value: string }[];
  timeline?: { phase: string; title: string; description: string }[];
  gallery: string[];
  related: string[];
  /** 是否显示「关键数据」一栏，默认显示 */
  showMetrics?: boolean;
  /** 「项目历程 / 参与工作」等区块标题 */
  timelineTitle?: string;
  /** 详情页内容模块（外链卡片），3:2 横图 */
  contentModules?: {
    image: string;
    title: string;
    subtitle: string;
    link: string;
  }[];
  /** 详情页「项目简介」大图，提供则替换原文字+小图布局 */
  introImage?: string;
  /** 是否在作品网格中禁用详情页入口 */
  noDetail?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tool';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
