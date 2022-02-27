import Header from 'components/header/header';
import Sidebar from 'components/sidebar/sidebar';
import Joblist from 'components/job-list/job-list';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>
        Github <span>Jobs</span>
      </h1>
      <Header />
      <section className={styles.main}>
        <Sidebar />
        <Joblist />
      </section>
    </div>
  );
}

export default App;
