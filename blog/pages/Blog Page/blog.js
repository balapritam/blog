import Link from 'next/link';
import { blogData } from '../data/blogData.json';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <a className={styles.postLink}>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
