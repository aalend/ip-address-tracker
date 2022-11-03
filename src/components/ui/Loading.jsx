import styles from './Loading.module.css';

function Loading({ className, message }) {
  return <div className={`${styles.loading} ${className}`}>{message}</div>;
}

export default Loading;
