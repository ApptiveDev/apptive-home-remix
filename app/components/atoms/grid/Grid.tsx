import { css, type CSSObject, type SerializedStyles } from '@emotion/react';
import {
  serializeResponsiveCss,
} from '@/utils';
import type { ReactNode } from 'react';
import type {
  ResponsiveColumns,
  ResponsiveCSSObject,
  ScreenSize,
} from '@/types';
import { breakPoints } from '@styles/breakpoints';

export interface GridProps {
  children: ReactNode;
  columns?: string | number;
  responsiveColumns?: ResponsiveColumns;
  rows?: string | number;
  gap?: number | string;
  columnGap?: number | string;

  rowGap?: number | string;
  cssx?: ResponsiveCSSObject;
}

function Grid({
  children,
  columns = 'auto',
  responsiveColumns,
  rows = 'auto',
  gap = 0,
  columnGap,
  rowGap,
  cssx,
}: GridProps) {
  const gridStyle: CSSObject = {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    gap,
    columnGap,
    rowGap,
  };

  return (
    <div css={[css(gridStyle),
      serializeResponsiveColumns(responsiveColumns),
      serializeResponsiveCss(cssx)]}
    >
      {children}
    </div>
  );
}

function serializeResponsiveColumns(responsiveColumns?: ResponsiveColumns): SerializedStyles {
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

export default Grid;
