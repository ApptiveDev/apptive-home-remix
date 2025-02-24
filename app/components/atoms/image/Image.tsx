import { css, type SerializedStyles } from '@emotion/react';
import type { ImgHTMLAttributes } from 'react';
import type { ResponsiveCSSObjects } from '@/types/styles';
import { serializeResponsiveCss } from '@/utils';

type AspectRatio = '1:1' | '4:3' | '16:9' | '21:9';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  cssStyle?: SerializedStyles;
  responsiveStyle?: ResponsiveCSSObjects;
}

function Image({
  src,
  alt,
  aspectRatio,
  cssStyle,
  responsiveStyle,
  ...rest
}: ImageProps) {
  const getAspectRatioStyle = (ratio: AspectRatio): SerializedStyles => {
    const ratioMap = {
      '1:1': 100,
      '4:3': 75,
      '16:9': 56.25,
      '21:9': 42.85,
    };

    return css`
      position: relative;
      width: 100%;
      padding-top: ${ratioMap[ratio]}%;
      overflow: hidden;
  
      img {
        position: absolute;
        
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }`
    ;
  };

  const imageStyle = css`
    max-width: 100%;
    height: auto;
  ;`;

  const responsiveCss = serializeResponsiveCss(responsiveStyle);


  return (
    <div css={[aspectRatio && getAspectRatioStyle(aspectRatio), cssStyle, responsiveCss]}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        {...rest}
        css={[imageStyle]}
      />
    </div>
  );
}

export default Image;
