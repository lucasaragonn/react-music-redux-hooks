import React from 'react';
import useArtists from 'components/hooks/artists';
import ArtistItem from 'components/ArtistItem';
import Loading from 'components/Loading';
import { IArtist } from 'interfaces';
import styles from './index.module.scss';

interface ArtistsProps {
  genre: number;
}

const Artists = ({ genre }: ArtistsProps) => {
  const { artists, loading } = useArtists(genre);

  return (
    <div className={styles.artists}>
      {loading ? (
        <Loading />
      ) : (
        artists.map((artist: IArtist, i: number) => (
          <ArtistItem key={i} data={artist} />
        ))
      )}
    </div>
  );
};

export default Artists;
