import styles from './Home.module.css';
import logo from '../../public/logo.png';
import logo2 from '../../public/testando-1.jpg';
import logo3 from '../../public/testando-2.jpg';
import { useEffect, useState } from 'react';

const images = [logo, logo2, logo3];
export function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className={styles.container}>
      <div className={styles.star}>
        <img className={styles.logo} src={images[currentImage]} alt="" />
      </div>
    </main>
  );
}
