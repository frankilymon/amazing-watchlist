export class Episode {
  id: number;
  name: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate: Date;
  summary: string;
  fullNumber: string;

  constructor(episodeInfo) {
    this.id = episodeInfo.id;
    this.name = (episodeInfo.name) ? episodeInfo.name : 'TBD';
    this.seasonNumber = (episodeInfo.season) ? episodeInfo.season : 0;
    this.episodeNumber = (episodeInfo.number) ? episodeInfo.number : 0;
    this.airDate = new Date(episodeInfo.airdate) ? episodeInfo.airdate : new Date(0);
    this.summary = (episodeInfo.summary) ? episodeInfo.summary : 'TBD';
    this.fullNumber = `S${(Number(episodeInfo.season) > 9) ? episodeInfo.season : '0' + episodeInfo.season }` +
                      `E${(Number(episodeInfo.number) > 9) ? episodeInfo.number : '0' + episodeInfo.number }`;
  }
}


