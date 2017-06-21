import {User} from './user';

export interface Person extends User{
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}