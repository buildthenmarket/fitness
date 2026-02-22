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
    title: '🏋️ Strength Training',
    description: 'Build muscle and strength with lifting, calisthenics, and equipment workouts',
    firstDoc: 'docs/lift/Lifting',
    docCount: 6,
    image: '/images/lifting-schedule.png',
  },
  {
    title: '👟 Muscle Groups',
    description: 'Target specific muscle groups with specialized exercises',
    firstDoc: 'docs/muscle-groups/chest-pecs',
    docCount: 6,
    image: '/images/muscle-groups.png',
  },
  {
    title: '⚡ Cardio & Conditioning',
    description: 'Boost endurance and athletic performance',
    firstDoc: 'docs/cardio/HIIT',
    docCount: 2,
    image: '/images/core-exercises.png',
  },
  {
    title: '🧘 Flexibility & Stretching',
    description: 'Improve mobility, prevent injury, and enhance recovery',
    firstDoc: 'docs/yoga/Flexibility',
    docCount: 2,
    image: '/images/stretches.png',
  },
  {
    title: '🏀 Sports',
    description: 'Learn breakdancing, boxing, MMA, and basketball training techniques',
    firstDoc: 'docs/sports/basketball',
    docCount: 4,
    image: '/images/shot-arc.png',
  },
];

function CategoryCard({title, description, firstDoc, docCount, image}) {
  const imageUrl = useBaseUrl(image);
  return (
    <div className={clsx('col col--6', styles.categoryCard)}>
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
            to="docs/lift/Lifting">
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
