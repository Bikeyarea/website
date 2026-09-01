const BASE: string = import.meta.env.BASE_URL;

/**
 * 将 public 目录下的绝对路径转换为带 base 前缀的路径。
 * 站点部署在子目录（如 GitHub Pages 的 /my-website/）时，
 * "/hero.jpg" 会指到域名根目录导致 404，这里统一补上 base。
 * 远程地址（http/https）保持原样。
 */
export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path.slice(1)}`;
}
