import { Profile } from './profile';


export interface Article {
  slug: string;
  title:string;
  description: string;
  body: string;
  tagList:string[];
  createdAt:string;
  updatedAt :string;
  favourited:boolean;
  favouritesCount:number;
  author: Profile;
}
