import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import type { CSSObject } from '@emotion/react';
import { serializeResponsiveCss } from '@/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  size?: ContainerSize;
  maxWidth?: string;
  padding?: string;
  gap?: number | string;
  cssx?: CSSObject;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((
  {
    children,
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    size,
    maxWidth,
    padding,
    gap = 0,
    cssx: cssStyle,
    ...rest
  }: ContainerProps,
  ref,
) => {
  const fixedSize = getFixedSize(size);
  const containerStyle: CSSObject = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    maxWidth,
    padding,
    width: fixedSize.width,
    height: fixedSize.height,
    gap,
  };

  return (
    <div ref={ref} css={[containerStyle, serializeResponsiveCss(cssStyle)]} {...rest}>
      {children}
    </div>
  );
});

function getFixedSize(size?: ContainerSize) {
  if (! size) {
    return {
      width: 'auto',
      height: 'auto',
    };
  }
  if (size === 'match-parent') {
    return {
      width: '100%',
      height: '100%',
    };
  }
  if (size === 'full-width') {
    return {
      width: '100%',
      height: 'auto',
    };
  }
  return size;
}

type ContainerSize = 'match-parent' | 'full-width' | { width: string, height: string };

export default Container;
