import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const menuItems = [
    'info',
    'projects',
    'resume',
    'contacts'
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Volkel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navigation}>
        <div className={styles.profile}>
          <img 
            className={styles.profilePic} 
            src="/me.jpg" 
            style={!isHovered ? {} : {filter: `brightness(0.1)`}}
          />
          <div 
            className={styles.profileText} 
            style={isHovered ? {color: 'rgb(223, 223, 223)'} : {}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
          >
            <div className={styles.textLine}> Kevin Volkel </div>
            <div className={styles.textLine}> Software Engineer </div>
          </div>
        </div>
        {menuItems.map(item => (
          <div key={item} className={`${styles.navButton} silkscreen-regular`} onClick={() => router.push(`/${item}`)}>
            {`My ${item}`}
          </div>
        ))}
      </div>
    </div>
  );
}
