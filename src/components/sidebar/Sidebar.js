import { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';

const DEFAULT_CITIES = [
  { id: 1, name: 'Lodon' },
  { id: 2, name: 'Amsterdam' },
  { id: 3, name: 'New York' },
  { id: 4, name: 'Berlin' },
];

function Sidebar() {
  const [fullTime, setFullTime] = useState(false);
  const [defaultCity, setDefaultCity] = useState('');

  useEffect(() => {
    setDefaultCity(DEFAULT_CITIES[0]);
  }, []);

  const fullTimeCheckHandler = () => {
    setFullTime(!fullTime);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.fulltime} onClick={fullTimeCheckHandler}>
        <span className="material-icons">
          {fullTime ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <label className={styles.fulltime__label}>Full time</label>
      </div>

      <h2 className={styles.sidebar__title}>Location</h2>
      <form className={styles.search}>
        <span className="material-icons">public</span>
        <input
          autoFocus
          type="search"
          className={styles.search__input}
          placeholder="City, state, zip code or country"
        />
      </form>

      <ul className={styles['cities']}>
        {DEFAULT_CITIES.map((city) => (
          <li
            key={city.id}
            className={styles.city}
            onClick={() => setDefaultCity(city)}
          >
            <span className="material-icons">
              {defaultCity.name === city.name
                ? 'radio_button_checked'
                : 'radio_button_unchecked'}
            </span>
            <span className={styles.city__name}>{city.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
