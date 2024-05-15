import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.nameLogo}>
        {' '}
        NOTHING <span className={styles.lasts}>LASTS</span> 4EVER
      </h1>
    </header>
  );
}
