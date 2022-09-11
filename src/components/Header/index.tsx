import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.participant}></div>
    </header>
  );
};
