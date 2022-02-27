import JobCard from 'components/job-card/job-card';

import styles from './job-list.module.scss';

function Joblist() {
  return (
    <main className={styles['job-list']}>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </main>
  );
}

export default Joblist;
