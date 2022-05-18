import * as React from 'react';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

import * as config from 'lib/config';

import styles from './styles.module.css';

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}

        {config.mail && (
          <a
            className={styles.mail}
            href={`mailto:{config.mail}`}
            title={`Email ${config.mail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  );
};

export const Footer = React.memo(FooterImpl);
