import React from 'react';
import styles from 'Card.module.scss';

export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};
