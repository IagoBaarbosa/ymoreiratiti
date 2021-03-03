const ICON_URL_PREFIX = 'https://raw.githubusercontent.com/ymoreiratiti/ymoreiratiti/main/assets/icons/'
interface IModel {
  icon: string;
  label: string;
  url: URL;
}

/**
 * TODO:
 * Inserir Vue, Quasar, 
 * Reordenar
 */
export const languageAndTools: IModel[] = [
  { icon: ICON_URL_PREFIX + 'php.png', label: 'PHP', url: new URL('https://www.php.net/') },
  { icon: ICON_URL_PREFIX + 'javascript.png', label: 'JavaScript', url: new URL('https://www.w3schools.com/js') },
  { icon: ICON_URL_PREFIX + 'css.png', label: 'CSS', url: new URL('https://www.w3schools.com/css/') },
  { icon: ICON_URL_PREFIX + 'nodejs.png', label: 'Node.js', url: new URL('https://nodejs.org/') },
  { icon: ICON_URL_PREFIX + 'mysql.png', label: 'MySQL', url: new URL('https://www.mysql.com/') },
  { icon: ICON_URL_PREFIX + 'html-5.png', label: 'HTML5', url: new URL('https://www.w3schools.com/html/') },
  { icon: ICON_URL_PREFIX + 'docker.png', label: 'Docker', url: new URL('https://www.docker.com/') },
  { icon: ICON_URL_PREFIX + 'github.png', label: 'GitHub', url: new URL('https://github.com/') },
  { icon: ICON_URL_PREFIX + 'typescript.png', label: 'TypeScript', url: new URL('https://www.typescriptlang.org/') },
  { icon: ICON_URL_PREFIX + 'composer.png', label: 'Composer', url: new URL('https://getcomposer.org/') },
]