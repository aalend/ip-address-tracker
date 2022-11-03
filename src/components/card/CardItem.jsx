import styles from './CardItem.module.css';

function CardItem({ type, content }) {
  return (
    <div className={styles.card__item}>
      <p>{type}</p>
      <p>{content}</p>
    </div>
  );
}

export default CardItem;
