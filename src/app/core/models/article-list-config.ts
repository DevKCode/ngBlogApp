export interface ArticleListConfig {
  type: string;

  filters :{
    tag?: string,
    author?:string,
    favourited?:string;
    limit?:number;
    offset?:number
  }
}
