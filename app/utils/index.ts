import {
  css,
  type CSSObject,
  keyframes,
  type SerializedStyles,
} from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';
import type {
  ResponsiveColumns,
  ResponsiveCSSObject,
  ScreenSize,
} from '@/types/styles';

export function getLandingKeyframesArray(reverse: boolean = false, fromY: string = '20px') {
  return [
    {
      transform: `translateY(${reverse ? `-${fromY}` : fromY})`,
      opacity: 0,
    },
    {
      transform: 'translateY(0)',
      opacity: 1,
    },
  ];
}

export function getLandingKeyframes(reverse: boolean = false, fromY: string = '20px') {
  return keyframes`
    from {
      transform: translateY(${reverse ? `-${fromY}` : fromY});
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;
}

export function serializeResponsiveCss(cssObject?: ResponsiveCSSObject | SerializedStyles): SerializedStyles {
  if(! cssObject) {
    return css``;
  }
  if(cssObject.name) { // SerializedStyles check
    return cssObject as SerializedStyles;
  }
  cssObject = cssObject as ResponsiveCSSObject;
  const { xs, sm, md, lg, ...baseStyle } = cssObject as ResponsiveCSSObject;
  const baseCss: CSSObject = css({ ...baseStyle });
  const ret: SerializedStyles[] = [];
  Object.entries(breakPoints).forEach(([key, value]) => {
    if(! (key in cssObject)) {
      return;
    }
    const styleValue = cssObject[key];
    const style = css`
      @media (min-width: ${value}) {
        ${css(styleValue)}
      }
    `;
    ret.push(style);
  });
  return css(baseCss, ...ret);
}

export function serializeResponsiveColumns(responsiveColumns?: ResponsiveColumns): SerializedStyles {
  if (!responsiveColumns) {
    return css``;
  }

  const ret: SerializedStyles[] = [];
  Object.entries(responsiveColumns).forEach(([sizeKey, columns]) => {
    const key = sizeKey as ScreenSize;
    const colCss = typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns;
    const style = css`
      @media (min-width: ${breakPoints[key]}) {
        grid-template-columns: ${colCss};
      }
    `;
    ret.push(style);
  });

  return css(ret);
}
