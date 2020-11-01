import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Icon, Surface } from '@newrelic/gatsby-theme-newrelic';

const LandingPageTile = ({ children, title, icon, href }) => (
  <Surface
    as={href ? Link : 'div'}
    interactive={Boolean(href)}
    base={Surface.BASE.SECONDARY}
    to={href}
    css={css`
      padding: ${icon ? '3rem' : '1rem'} 1rem 1rem;
      color: currentColor;
      position: relative;
      min-height: 200px;

      .light-mode & {
        border: 1px solid var(--border-color);
      }

      &:hover {
        color: currentColor;
      }
    `}
  >
    {icon && (
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -35%);
          background: var(--primary-background-color);
          border-radius: 50%;
          width: 4.5rem;
          height: 4.5rem;
          border: 1px solid var(--border-color);

          .dark-mode & {
            border: 3px solid var(--color-dark-100);
          }
        `}
      >
        <Icon
          name={icon}
          size="2.5rem"
          css={css`
            stroke: var(--heading-text-color);
          `}
        />
      </div>
    )}
    <h3
      css={css`
        margin-top: 0 !important;
        margin-bottom: 1rem;
        text-align: center;
      `}
    >
      {title}
    </h3>
    <p
      css={css`
        margin-bottom: 0 !important;
      `}
    >
      {children}
    </p>
  </Surface>
);

LandingPageTile.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
};

export default LandingPageTile;
