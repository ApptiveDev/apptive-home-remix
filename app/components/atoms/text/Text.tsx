import type { FontWeight, ScreenSize } from '@/types';
import { breakPoints } from '@styles/breakpoints';
import { type HTMLAttributes, type ReactNode } from 'react';
import { css, type CSSObject, jsx } from '@emotion/react';
import { serializeResponsiveCss } from '@/utils';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  weight?: FontWeight;
  responsiveSize?: { [key in ScreenSize]?: string };
  defaultSize?: string;
  color?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  cssx?: CSSObject;
}

function Text({ children, weight, defaultSize, responsiveSize, as = 'p', color, cssx, ...rest }: TextProps) {
  const cssWeight = convertWeightToCss(weight);
  const textStyle: CSSObject = {
    fontWeight: cssWeight,
    fontSize: defaultSize,
    color,
  }

  return jsx(as, {
    css: css([textStyle, serializeResponsiveSize(responsiveSize), serializeResponsiveCss(cssx)]),
    ...rest,
  }, children);
}
function serializeResponsiveSize(responsiveSize?: { [key in ScreenSize]?: string }) {
  if(! responsiveSize){
    return css``;
  }
  const ret = Object.entries(responsiveSize).map(([breakpoint, value]) => `
    @media (min-width: ${breakPoints[breakpoint as ScreenSize]}) {
      font-size: ${value};
    }
  `);
  return css(...ret);
}

function convertWeightToCss(weight?: FontWeight) {
  if (!weight) {
    return 400; // default to regular
  }
  switch (weight) {
    case 'medium':
      return 500;
    case 'bold':
      return 700;
    case 'regular':
      return 400;
    case 'lighter':
      return 300;
    case 'bolder':
      return 800;
    default:
      return weight;
  }
}

export default Text;
