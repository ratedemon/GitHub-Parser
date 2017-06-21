// export class User{
//   constructor(
//     public login: string,
//     public id: number,
//     public avatar_url: string,
//     public gravatar_id: string,
//     public url: string,
//     public html_url: string,
//     public followers_url: string,
//     public following_url: string,
//     public gists_url: string,
//     public starred_url: string,
//     public subscriptions_url: string,
//     public organizations_url:string,
//     public repos_url: string,
//     public events_url: string,
//     public received_events_url: string,
//     public type: string,
//     public site_admin: boolean
//   ){}
// }

export interface User{
    login: string,
    id: number,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url:string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  }