interface IModel {
  icon: string;
  label: string;
  url: URL;
}

/**
 * TODO:
 * Inserir Vue, Quasar, 
 */
export const languageAndTools: IModel[] = [
  { icon: 'php.png', label: 'PHP', url: new URL('https://www.php.net/') },
  { icon: 'javascript.png', label: 'JavaScript', url: new URL('https://www.w3schools.com/js') },
  { icon: 'css.png', label: 'CSS', url: new URL('https://www.w3schools.com/css/') },
  { icon: 'nodejs.png', label: 'Node.js', url: new URL('https://nodejs.org/') },
  { icon: 'mysql.png', label: 'MySQL', url: new URL('https://www.mysql.com/') },
  { icon: 'html-5.png', label: 'HTML5', url: new URL('https://www.w3schools.com/html/') },
  { icon: 'docker.png', label: 'Docker', url: new URL('https://www.docker.com/') },
  { icon: 'github.png', label: 'GitHub', url: new URL('https://github.com/') },
  { icon: 'typescript.png', label: 'TypeScript', url: new URL('https://www.typescriptlang.org/') },
  { icon: 'composer.png', label: 'Composer', url: new URL('https://getcomposer.org/') },
]