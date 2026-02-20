import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const CategoryList = [
  {
    title: '🏋️ Strength Training',
    description: 'Build muscle and strength with lifting, calisthenics, and equipment workouts',
    firstDoc: 'Lifting',
    docCount: 5,
  },
  {
    title: '👟 Muscle Groups',
    description: 'Target specific muscle groups with specialized exercises',
    firstDoc: 'Chest Pecs',
    docCount: 4,
  },
  {
    title: '⚡ Cardio & Conditioning',
    description: 'Boost endurance and athletic performance',
    firstDoc: 'HIIT',
    docCount: 2,
  },
  {
    title: '🏀 Sports',
    description: 'Learn breakdancing, boxing, MMA, and basketball training techniques',
    firstDoc: 'BOXING',
    docCount: 3,
  },
  {
    title: '🧘 Flexibility & Stretching',
    description: 'Improve mobility, prevent injury, and enhance recovery',
    firstDoc: 'Flexibility',
    docCount: 3,
  },
];

function CategoryCard({title, description, firstDoc, docCount}) {
  return (
    <div className={clsx('col col--6', styles.categoryCard)}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
          <p className={styles.docCount}>{docCount} guides available</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--primary button--block"
            to={`/${firstDoc}`}>
            Explore →
          </Link>
        </div>
      </div>
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
            to="/Lifting">
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
