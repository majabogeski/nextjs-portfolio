import React from 'react';
import { VscArrowSmallRight } from 'react-icons/vsc';
import styles from './card.module.css';

const Card = ({ className, icon, title, description }) => {
  const bulletPoints =
    description && typeof description === 'string'
      ? description.split(/[,\n]+/).map((point, index) => (
          <li key={index}>
            <VscArrowSmallRight className={styles.arrowIcon} />
            {point.trim()}
          </li>
        ))
      : null;

  return (
    <div className={`${styles.card} ${className}`}>
      {icon && <span>{icon}</span>}
      {title && <h5>{title}</h5>}
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className={styles.bulletPoints}>{bulletPoints}</ul>
      )}
    </div>
  );
};

export default Card;
