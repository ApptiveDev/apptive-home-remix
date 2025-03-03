import { css, type CSSObject } from '@emotion/react';
import {
  serializeResponsiveColumns,
  serializeResponsiveCss,
} from '@/utils';
import type { ReactNode } from 'react';
import type { ResponsiveColumns, ResponsiveCSSObject } from '@/types';

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

export default Grid;
