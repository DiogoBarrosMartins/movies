export class Movies {
    constructor(
        public title: string,
        public description: string, 
        public releaseDate: Date, 
        public genre: string[]
    ) {}
}