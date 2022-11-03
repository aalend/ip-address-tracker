import { useContext } from 'react';
import Loading from './components/ui/Loading';
import Card from './layout/Card';
import LeafletMap from './layout/Map';
import SiteHead from './layout/SiteHead';
import IpGeoContext from './store/ip-geo-context';

function App() {
  const ipGeoContext = useContext(IpGeoContext);
  const error = ipGeoContext.hasError;

  return (
    <>
      {error && (
        <Loading className={'loading-error'} message={'Search not found!'} />
      )}
      <SiteHead />
      <main id='main-content' tabIndex='-1'>
        <Card />
        <LeafletMap />
      </main>
    </>
  );
}

export default App;
