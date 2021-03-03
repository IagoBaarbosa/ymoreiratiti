interface IModel {
  badge: string;
  label: string;
  url: URL;
}

export const socialShare: IModel[] = [
  { badge: 'https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white', label: 'LinkedIn', url: new URL('https://www.linkedin.com/in/yurititi13/') },
  { badge: 'https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white', label: 'Instagram', url: new URL('https://www.instagram.com/ymoreiratiti/') },
  { badge: 'https://img.shields.io/badge/Facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white', label: 'Facebook', url: new URL('https://www.facebook.com/yurititi13') },
  { badge: 'https://img.shields.io/badge/Spotify-%231ED760.svg?&style=flat-square&logo=spotify&logoColor=white', label: 'Spotify', url: new URL('https://open.spotify.com/user/12144027699') },
]