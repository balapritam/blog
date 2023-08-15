[id].jsimport { useRouter } from 'next/router';
import { blogData } from '../../data/blogData.json';
import styles from '../../styles/Post.module.css';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((post) => post.id === id);

  return (
    <div className={styles.container}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDate}>Date: {post.date}</p>
      <p className={styles.postContent}>{post.content}</p>
    </div>
  );
};

export default Post;
