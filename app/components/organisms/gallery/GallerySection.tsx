import Container from '@/components/atoms/container/Container';
import GalleryCard from './GalleryCard';
import { Heading } from '@/components/atoms/text/TextFactory';
import { MAX_CONTENT_WIDTH } from '@/styles/sizes';
import { type ReactNode } from 'react';
import {
  cardData,
  evenIndexCards, oddIndexCards,
} from '@components/organisms/gallery/galleryCards';

function GallerySection({ id }: { id?: string }) {
  return (
    <section id={id}>
      <Container size="full-width" justify="center">
        <GalleryContainer>
          <Container size="full-width" justify="flex-end">
            <Heading.XLarge>APPTIVE Gallery</Heading.XLarge>
          </Container>
          <Container
            direction="column"
            size="full-width"
            justify="center"
            align="center"
            gap="40px"
            padding="20px 0"
            cssx={{
              display: 'flex',
              md: { display: 'none' },
            }}
          >
            {cardData.map((card, index) => (
              <GalleryCard key={`${card.title}-${index}`} title={card.title} url={card.url} image={card.image} />
            ))}
          </Container>
          <Container
            cssx={{
              display: 'none',
              md: { display: 'flex' },
            }}
            gap="32px"
          >
            <Container direction="column" gap="60px">
              {evenIndexCards.map((card, index) => (
                <GalleryCard
                  key={`${card.title}-${index}`}
                  title={card.title}
                  url={card.url}
                  image={card.image}
                />
              ))}
            </Container>
            <Container direction="column" gap="32px" padding="230px 0 0 0 ">
              {oddIndexCards.map((card, index) => (
                <GalleryCard
                  key={`${card.title}-${index}`}
                  title={card.title}
                  url={card.url}
                  image={card.image}
                />
              ))}
            </Container>
          </Container>
        </GalleryContainer>
      </Container>
    </section>

  );
}

function GalleryContainer({ children }: ActivityContainerProps) {
  return (
    <Container
      size="full-width"
      maxWidth={MAX_CONTENT_WIDTH}
      direction="column"
      align="center"
      padding="20px"
      cssx={{
        padding: '50px 20px',
        lg: { padding: '100px 20px' },
      }}
    >
      {children}
    </Container>
  );
}

interface ActivityContainerProps {
  children?: ReactNode;
}

export default GallerySection;
