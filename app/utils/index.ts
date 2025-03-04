import {
  css,
  type CSSObject,
  keyframes,
  type SerializedStyles,
} from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';
import type {
  ResponsiveCSSObject,
} from '@/types';

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
  cssObject = cssObject as ResponsiveCSSObject;
  const { xs, sm, md, lg, ...baseStyle } = cssObject as ResponsiveCSSObject;
  const baseCss: CSSObject = { ...baseStyle };
  const ret: SerializedStyles[] = [];
  Object.entries(breakPoints).forEach(([key, value]) => {
    if(! (key in cssObject)) {
      return;
    }
    const styleValue = cssObject[key];
    const style = css`
      @media (min-width: ${value}) {
        ${styleValue}
      }
    `;
    ret.push(style);
  });
  return css(baseCss, ...ret);
}
