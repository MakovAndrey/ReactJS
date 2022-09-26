export interface Message {
  author: AUTHOR;
  message: string;
}

export type Messages = Record<string, Message[]>;

export enum AUTHOR {
    USER = "USER",
    BOT = "Administrator",
}
export interface Chat {
    id: string;
    name: string;
}