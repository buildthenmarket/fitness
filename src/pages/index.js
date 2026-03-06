import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';


import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const CategoryList = [
  {
    title: '🤸 Bodyweight (Calisthenics)',
    description: 'Train with minimal equipment using calisthenics and bodyweight progressions',
    firstDoc: 'docs/Bodyweight',
    docCount: 8,
    image: '/lifting-schedule.png',
  },
  {
    title: '🏋️ Dumbbells',
    description: 'Strength training with dumbbells, compound moves, and minimal-equipment sessions',
    firstDoc: 'docs/Dumbbells',
    docCount: 11,
    image: '/muscle-groups.png',
  },
  {
    title: '🏛️ Gym',
    description: 'Gym-focused training for chest, shoulders, core, legs, and accessory muscle groups',
    firstDoc: 'docs/Gym/Chest',
    docCount: 7,
    image: '/muscle-groups.png',
  },
  {
    title: '⚡ Cardio & Conditioning',
    description: 'Boost endurance and athletic performance',
    firstDoc: 'docs/Cardio/HIIT',
    docCount: 4,
    image: '/core-exercises.png',
  },
  {
    title: '🧘 Flexibility & Stretching',
    description: 'Improve mobility, prevent injury, and enhance recovery',
    firstDoc: 'docs/Stretching/Flexibility',
    docCount: 3,
    image: '/stretches.png',
  },
  {
    title: '🏀 Sports',
    description: 'Learn breakdancing, boxing, MMA, and basketball training techniques',
    firstDoc: 'docs/Sports/Basketball',
    docCount: 4,
    image: '/shot-arc.png',
  },
];

function CategoryCard({title, description, firstDoc, docCount, image}) {
  const imageUrl = useBaseUrl(image);
  return (
    <div className={clsx('col col--3', styles.categoryCard)}>
      <Link to={`/${firstDoc}`} className={styles.cardLink} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="card" style={{cursor: 'pointer'}}>
          <div className="card__header">
            <Heading as="h3">{title}</Heading>
          </div>
          <div className="card__body">
            {image && (
              <img src={imageUrl} alt={title} style={{width: '100%', objectFit: 'cover', marginBottom: 12}} />
            )}
            <p>{description}</p>
            <p className={styles.docCount}>{docCount} guides available</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Bodyweight">
            Start Training →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your personal guide to fitness and wellness">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {CategoryList.map((props, idx) => (
                <CategoryCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
