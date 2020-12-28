import React from 'react';
import { IArtist } from 'interfaces';
import Favorite from 'components/Favorite';
import styles from './index.module.scss';

interface ArtistItemProps {
  data: IArtist;
  favorites?: boolean;
}

const ArtistItem = ({ data, favorites }: ArtistItemProps) => {
  const primaryGenre = data.genres.find((g) => g.is_primary === 1);

  return (
    <div className={styles.artist}>
      <div className={styles.item}>
        <a className={styles.imageLink} href={`/details/${data.id}`}>
          <img alt={data.name} src={data.image} />
        </a>
        <div className={styles.head}>
          <div className={styles.title}>
            <a href={`/details/${data.id}`}>{data.name}</a>
          </div>
          <div className={styles.favorites}>
            <Favorite removeCallback={favorites} artist={data} />
          </div>
        </div>
        <div className={styles.genre}>
          {primaryGenre ? primaryGenre.name : null}
        </div>
      </div>
    </div>
  );
};

export default ArtistItem;
