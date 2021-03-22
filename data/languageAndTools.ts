const ICON_URL_PREFIX = 'https://raw.githubusercontent.com/ymoreiratiti/ymoreiratiti/main/assets/icons/'
interface IModel {
  icon: string;
  label: string;
  url: URL;
}

/**
  * TODO:
* Node.JS (JavaScript e TypeScript)
  * Gerenciador de pacotes NPM e Yarn
  * FrontEnd em Vue, jQuery
  * BackEnd em NestJS, Express e Loopback 3
* HTML5/CSS
* PHP (Utilizando o CodeIgniter Framework)
  * Gerenciador de pacotes Composer
* Docker
* Bancos de dados
  * MSSQL Server
  * Postgres
  * MySQL
  * Mongo (Básico)
  * Redis
* Github
* Gitlab
  * Gitlab Workflow
  * Gitlab CI/CD (Configuração dos Runners e rotinas de deploy automatico)

* Projetos
  * GOVBR Pregão Eletrônico = 10/2020 - Sistema para integração do LC com o Pregão Eletrônico
  * CidadeMOB - 11/2018 - Aplicativo mobile voltado a exibição de informações para o cidadão
  * ITBI Online - 11/2018 - ITBI Online, rotina de controle, fiscalização e emissão de ITBI e taxa de laudêmio. Emissão de guia com chave de verificação e Qrcode
 */
export const languageAndTools: IModel[] = [
  { icon: ICON_URL_PREFIX + 'nodejs.png', label: 'Node.js', url: new URL('https://nodejs.org/') },
  { icon: ICON_URL_PREFIX + 'javascript.png', label: 'JavaScript', url: new URL('https://www.w3schools.com/js') },
  { icon: ICON_URL_PREFIX + 'typescript.png', label: 'TypeScript', url: new URL('https://www.typescriptlang.org/') },
  { icon: ICON_URL_PREFIX + 'html-5.png', label: 'HTML5', url: new URL('https://www.w3schools.com/html/') },
  { icon: ICON_URL_PREFIX + 'css.png', label: 'CSS', url: new URL('https://www.w3schools.com/css/') },
  { icon: ICON_URL_PREFIX + 'php.png', label: 'PHP', url: new URL('https://www.php.net/') },
  { icon: ICON_URL_PREFIX + 'composer.png', label: 'Composer', url: new URL('https://getcomposer.org/') },
  { icon: ICON_URL_PREFIX + 'docker.png', label: 'Docker', url: new URL('https://www.docker.com/') },
  { icon: ICON_URL_PREFIX + 'mysql.png', label: 'MySQL', url: new URL('https://www.mysql.com/') },
  { icon: ICON_URL_PREFIX + 'github.png', label: 'GitHub', url: new URL('https://github.com/') },
]