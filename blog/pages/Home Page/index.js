import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Blog</h1>
      <Link href="/blog">
        <a>Visit the Blog</a>
      </Link>
    </div>
  );
};

export default Home;
