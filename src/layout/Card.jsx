import { useContext } from 'react';
import CardItem from '../components/card/CardItem';
import IpGeoContext from '../store/ip-geo-context';
import styles from './Card.module.css';

function Card() {
  const ipGeoContext = useContext(IpGeoContext);

  return (
    <>
      <section
        className={styles.card}
        aria-label='Search results for IP address or domain'
      >
        <div className={`${styles.card__inner} container`}>
          <CardItem type={'IP Address'} content={ipGeoContext.ipData.query} />
          <CardItem
            type={'Location'}
            content={`${ipGeoContext.ipData.regionName}, ${ipGeoContext.ipData.country}`}
          />
          <CardItem type={'Timezone'} content={ipGeoContext.ipData.timezone} />
          <CardItem type={'ISP'} content={ipGeoContext.ipData.isp} />
        </div>
      </section>
    </>
  );
}

export default Card;
