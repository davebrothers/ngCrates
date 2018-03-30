import { Url } from "url";

export class Album {
    constructor(public title: string, 
        public artist: string,
        public coverImage: Url,
        public releaseYear: number,
        public tracks: string[],
        public discogsMasterReleaseUrl: Url) { }
}
