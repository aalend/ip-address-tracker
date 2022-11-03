import { useContext } from 'react';
import IpGeoContext from '../../store/ip-geo-context';
import styles from './Form.module.css';
import FormGroup from './FormGroup';

function Form() {
  const ipGeoContext = useContext(IpGeoContext);

  const handleUserSearch = function (e) {
    e.preventDefault();

    ipGeoContext.fetchUserQuery();
  };

  return (
    <form onSubmit={handleUserSearch} action='' className={styles.form}>
      <FormGroup />
      <button type='submit'>
        <span className='sr-only'>Search for any IP address or domain</span>
        Search
      </button>
    </form>
  );
}

export default Form;
