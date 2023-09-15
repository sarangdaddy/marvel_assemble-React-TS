export interface ImgUrlTypes {
  extension: string;
  path: string;
}

export interface CharacterTypes {
  id: number;
  name: string;
  thumbnail: ImgUrlTypes;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface CharacterDetailTypes {
  id: number;
  name: string;
  thumbnail: ImgUrlTypes;
  series: Series;
}
