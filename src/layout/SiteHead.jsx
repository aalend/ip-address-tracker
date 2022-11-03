import React from 'react';
import Form from '../components/form/Form';
import Brand from '../components/ui/Brand';
import styles from './SiteHead.module.css';

function SiteHead() {
  return (
    <>
      <header className={styles['site-head']}>
        <div className={`${styles['site-head__inner']} container`}>
          <Brand />
          <Form />
        </div>
      </header>
    </>
  );
}

export default SiteHead;
