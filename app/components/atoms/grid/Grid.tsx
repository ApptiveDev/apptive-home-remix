import { css, type CSSObject } from '@emotion/react';
import { serializeResponsiveColumns, serializeResponsiveCss } from '@/utils';
import type { GridProps } from '@/types/props';

function Grid({
  children,
  columns = 'auto',
  responsiveColumns,
  rows = 'auto',
  gap = 0,
  columnGap,
  rowGap,
  style,
  responsiveStyle,
}: GridProps) {
  const gridStyle: CSSObject = {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    gap,
    columnGap,
    rowGap,
    ...style,
  };

  return (
    <div css={[css(gridStyle),
      serializeResponsiveColumns(responsiveColumns),
      serializeResponsiveCss(responsiveStyle)]}
    >
      {children}
    </div>
  );
}

export default Grid;
