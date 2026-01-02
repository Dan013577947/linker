export interface Contents{
  posts:ContentType[];
  total:number;
  skip:number;
  limit:number;
}

export interface ContentType {
  body:string;
  id:number;
  reactions:Reaction;
  tags:string[];
  title:string;
  userId:number;
  views:number;
}

export interface Reaction {
  likes:number;
  dislikes:number;
}