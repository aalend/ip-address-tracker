import { useContext } from 'react';
import IpGeoContext from '../../store/ip-geo-context';
import styles from './Form.module.css';

function FormGroup() {
  const ipGeoContext = useContext(IpGeoContext);

  const handleUserInput = function (e) {
    ipGeoContext.handleSearchTerm(e.target.value);
  };

  return (
    <div className={styles.form__group}>
      <label className='sr-only' htmlFor='ip_search'>
        Search for any IP address or domain
      </label>
      <input
        onChange={handleUserInput}
        type='text'
        name='ip_search'
        id='ip_search'
        placeholder='Search for any IP address or domain'
      />
    </div>
  );
}

export default FormGroup;
