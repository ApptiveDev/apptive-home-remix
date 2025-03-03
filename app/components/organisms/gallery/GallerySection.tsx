import Container from '@/components/atoms/container/Container';
import GalleryCard from './GalleryCard';
import { Heading } from '@/components/atoms/text/TextFactory';
import { MAX_CONTENT_WIDTH } from '@/styles/sizes';
import { type ReactNode } from 'react';

import image1 from '@assets/images/sample/image-1.png';
import image2 from '@assets/images/sample/image-2.png';
import image3 from '@assets/images/sample/image-3.png';
import image4 from '@assets/images/sample/image-4.png';
import image5 from '@assets/images/sample/image-5.png';
import image6 from '@assets/images/sample/image-6.png';
import image7 from '@assets/images/sample/image-7.png';
import image8 from '@assets/images/sample/image-8.png';
import image9 from '@assets/images/sample/image-9.png';
import image10 from '@assets/images/sample/image-10.png';
import image11 from '@assets/images/sample/image-11.png';

const cardData = [
  {
    title: '2024-1 APPTIVE X WAP<br/>연합 해커톤',
    url: '',
    image: image1,
  },
  {
    title: '2024-1 아이디어톤 / 팀빌딩',
    url: '',
    image: image2,
  },
  {
    title: '2024-1 MT',
    url: '',
    image: image3,
  },
  {
    title: '2024-1 현직자 간담회',
    url: '',
    image: image4,
  },
  {
    title: '2024-1 정기 세미나',
    url: '',
    image: image5,
  },
  {
    title: '2024-1 협업툴 워크샵',
    url: '',
    image: image6,
  },
  {
    title: '2024-1 신입기수 오리엔테이션',
    url: '',
    image: image7,
  },
  {
    title: '2024-1 아카데미 학군별 스터디',
    url: '',
    image: image8,
  },
  {
    title: '2024-1 부산 연합동아리<br/>네트워킹',
    url: '',
    image: image9,
  },
  {
    title: '2024-1 OT&데모데이',
    url: '',
    image: image10,
  },
  {
    title: '2023-1 홈커밍데이',
    url: '',
    image: image11,
  },
];

const evenIndexCards = cardData.filter((_, index) => index % 2 === 0);
const oddIndexCards = cardData.filter((_, index) => index % 2 !== 0);

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
              md: { display: 'none' }, // sm 화면 이상에서는 숨김
            }}
          >
            {cardData.map((card, index) => (
              <GalleryCard key={`${card.title}-${index}`} title={card.title} url={card.url} image={card.image} />
            ))}
          </Container>
          <Container
            cssx={{
              display: 'none',
              md: { display: 'flex' }, // sm 화면 이상에서는 보임
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
