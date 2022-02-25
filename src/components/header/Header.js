import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <form className={styles.search}>
        <span className="material-icons">work_outline</span>
        <input
          autoFocus
          type="search"
          className={styles.search__input}
          placeholder="Title, companies, expertise or benefits"
        />
        <button className={styles.search__button}>Search</button>
      </form>
    </header>
  );
}

export default Header;
