import React from 'react';
import { DC_DOMAIN_HOST, MAIN_DOMAIN_HOST } from "../../constants/env";
import styles from './styles.module.scss';

type LogoProp = {
  noLabel?: boolean;
  onClick?: () => any;
};

const Logo = ({noLabel, onClick}: LogoProp) => {
  return <div className={styles.logoContainer} onClick={onClick}>
    <a className={styles.logoImage} target="_blank" href={MAIN_DOMAIN_HOST}>
      <img src='/img/logo.svg' alt="TapTap" />
    </a>
    {!noLabel && <div className={styles.divider} />}
    {!noLabel && <a className={styles.label} target="_blank" href={DC_DOMAIN_HOST}> Developer Center </a>}
  </div>;
};

export default Logo;