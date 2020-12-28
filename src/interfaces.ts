export interface IGenre {
  id: number;
  parent_id: number;
  name: string;
}

export interface IArtist {
  id: number;
  name: string;
  image: string;
  popularity: number;
  genres: { id: number; name: string; is_primary: number }[];
  favorited?: boolean;
}
