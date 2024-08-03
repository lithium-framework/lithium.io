import * as React from 'react';

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Fast, Scale Seamlessly',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <p style = {{ fontSize : "12px" }} >
        Lithium est conçu pour permettre aux développeurs de créer rapidement des applications web performantes qui peuvent facilement évoluer à mesure que les besoins de l'application grandissent.
      </p>
    ),
  },
  {
    title: 'Write Less, Achieve More',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <p style = {{ fontSize : "12px" }} >
        Avec ses fonctionnalités avancées comme les templates déclaratifs et les directives, Lithium réduit le code nécessaire pour créer des interfaces complexes, permettant ainsi de se concentrer sur la logique métier.
      </p>
    ),
  },
  {
    title: 'Modern Tools, Timeless Efficiency',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <p style = {{ fontSize : "12px" }} >
        En utilisant des technologies modernes comme les Web Components et un système de bundling flexible, Lithium offre une expérience de développement à la pointe tout en garantissant des pratiques durables et efficaces.
      </p>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style = {{ display : 'flex' , alignItems : 'center' }} >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
