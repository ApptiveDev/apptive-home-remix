import Container from '@components/atoms/container/Container';
import Image from '@components/atoms/image/Image';
import linkIconOrange from '@assets/images/link-icon-orange.svg';
import { css } from '@emotion/react';

interface GalleryCardProps {
  title: string;
  url: string;
  image: string;
}

function GalleryCard({ title, image }: GalleryCardProps) {
  return (
    <Container
      direction="column"
      size="full-width"
      maxWidth="440px"
      justify="space-between"
      cssx={{ boxSizing: 'border-box' }}
    >
      <Container
        size="full-width"
        direction="column"
        align="center"
        gap={9}
      >
        <Container
          size="full-width"
          align="flex-end"
          justify="space-between"
        >
          <Container
            size={{ width: 'auto', height: '52px' }}
            padding="0 20px"
            cssx={{
              borderLeft: '2px solid #000',
              fontSize: '22px',
              lineHeight: '26px',
              whiteSpace: 'pre-wrap',
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Container>
          <Image cssx={{ width: '18px' }} src={linkIconOrange} alt="link icon" />
        </Container>
        <Container
          cssx={{
            flexGrow: 1,
          }}
        >
          <GalleryImage image={image} />
        </Container>
      </Container>
    </Container>
  );
}

function GalleryImage({ image }: Partial<GalleryCardProps>) {
  const imageStyle = css`
    flex-grow: 1;
    max-width: 100%;
  `;
  return (
    <img src={image} alt="gallery image" css={imageStyle} />
  );
}

export default GalleryCard;
