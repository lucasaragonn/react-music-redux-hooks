import React from 'react';
import ArtistItem from 'components/ArtistItem';
import useDetails from 'components/hooks/details';
import { useParams } from 'react-router-dom';
import { IArtist } from 'interfaces';
import Favorite from 'components/Favorite';
import Menu from 'components/Menu';
import styles from './index.module.scss';

const ArtistInfo = ({ artist }: { artist: IArtist }) => {
  let primaryGenre = { name: '' };
  let genres = '';

  if (artist) {
    primaryGenre = artist.genres.find((genre) => genre.is_primary === 1);
    genres = artist.genres.map((genre) => genre.name).join(', ');
  }

  return (
    <div className={styles.info}>
      <h1>{artist.name}</h1>
      <p>
        <span>Genre:</span> {primaryGenre.name}
      </p>
      <p>
        <span>Popularity:</span> {artist.popularity}
      </p>
      <p>
        <span>Additional Genres:</span>
      </p>
      <p>{genres}</p>
    </div>
  );
};

const DetailsPage = () => {
  const { id } = useParams();
  const { details, relatedArtists } = useDetails(id);

  return (
    <div className={styles.details}>
      <Menu
        items={[
          { text: 'home', link: '/' },
          { text: 'favorites', link: '/favorites' },
        ]}
      />
      {details && (
        <div>
          <div className={styles.artist}>
            <div className={styles.favorites}>
              <Favorite artist={details} />
            </div>
            <img src={details.image} alt={details.name} />
            <ArtistInfo artist={details} />
          </div>

          <h3>Related Artists:</h3>
          <div className={styles.related}>
            {relatedArtists.map((related, i) => (
              <ArtistItem key={i} data={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
