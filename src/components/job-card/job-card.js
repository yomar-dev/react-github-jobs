import styles from './job-card.module.scss';

function JobCard() {
  return (
    <div className={styles.card}>
      <figure className={styles['card-logo']}>
        <img
          src="http://placeimg.com/90/90/any"
          alt="Random pic from internet"
          className={styles['card-logo__image']}
        />
      </figure>

      <article className={styles['card-description']}>
        <h3 className={styles['card-description__company-name']}>Kasisto</h3>
        <p className={styles['card-description__position']}>
          Front-End Software Engineer
        </p>
        <footer className={styles['card-footer']}>
          <span className={styles['card-footer__job-type']}>Full time</span>
          <div className={styles['card-footer-location']}>
            <address className={styles['card-footer-location__city']}>
              <span className="material-icons md-18">public</span>
              New York
            </address>
            <time className={styles['card-footer-location__date']}>
              <span className="material-icons">schedule</span>5 days ago
            </time>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default JobCard;
