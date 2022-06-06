import { css, keyframes } from 'styled-components';

export const breakpoint = {
    xxs: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)}
    }
  `,
    xs: (...args) => css`
    @media (max-width: 767.98px) {
      ${css(...args)}
    }
  `,
    sm: (...args) => css`
    @media (max-width: 991.98px) {
      ${css(...args)}
    }
  `,
    md: (...args) => css`
    @media (max-width: 1199.98px) {
      ${css(...args)}
    }
  `,
    lg: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
};

export const truncateOneLine = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const truncateMultiline = num => css`
  overflow: hidden;
  text-overflow: ellipsis;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-line-clamp: ${num};

  /* autoprefixer: off */
  -webkit-box-orient: vertical;
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
