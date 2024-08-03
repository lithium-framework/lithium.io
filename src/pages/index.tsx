import * as React from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import Logo from '../../static/img/logo.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style = {{ display : 'grid' , justifyContent : 'center' }} >
          <div style={{ display : "flex" , width : "fit-content" , alignItems : "center" }} >
            {siteConfig.title}
            <Logo style = {{ aspectRatio : '1/1' , height : '100px' }} />
          </div>
        </Heading>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Apprendre Lithium
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style = {{ flex : 1 , display : 'flex' , alignItems : 'center' }} >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
