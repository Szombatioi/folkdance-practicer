import { Dance } from "./dance";

export class Figure{
    constructor(
        public id: number,
        public name: string, //e.g. Árus bevonulás, Erdélyi csapó...
        //public description: string???
        public dance: Dance,
        public dance_part: string, //e.g. csárdás, sűrű csárdás
        public figure_category: string, //e.g. vezetgető, páros forgás, eldobás, csapás, bevonulás

        //public video_url: string, //e.g. https://www.youtube.com/watch?v=9Q2v1q5kK8E
    ){}
}