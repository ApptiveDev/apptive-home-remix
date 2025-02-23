import { Heading } from '@/components/atoms/text/TextFactory';
import IntroText from '@/components/molecules/IntroText';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { breakPoints } from '@/styles/breakpoints';
import boyIntro from '@assets/images/main/boyIntro.png';
import girlIntro from '@assets/images/main/girlIntro.png';
import Container from '@components/atoms/container/Container';
import { type ReactNode, useRef } from 'react';
import { MAX_CONTENT_WIDTH } from '@styles/sizes';
import useIntersectionSlideEffect from '@/hooks/useIntersectionSlideEffect';
import YearlySection from '@components/organisms/main/YearlySection';

interface MainSectionProps {
  id?: string;
  mode: 'light' | 'dark';
}

const MainSection = ({ id, mode }: MainSectionProps) => {
  const colorScheme = colors[mode];

  const spyRef = useRef<HTMLDivElement>(null);
  const introTitleRef = useRef<HTMLDivElement>(null);
  const boyIntroRef = useRef<HTMLDivElement>(null);
  const girlIntroRef = useRef<HTMLDivElement>(null);


  useIntersectionSlideEffect({ spyRef, targetRef: introTitleRef });
  useIntersectionSlideEffect({ spyRef, targetRef: boyIntroRef, delay: 300 });
  useIntersectionSlideEffect({ spyRef, targetRef: girlIntroRef, delay: 600 });

  return (
    <section id={id}>
      <Container
        padding="0 35px"
        style={{ backgroundColor: colorScheme.background.main }}
        align="center"
        justify="center"
        direction="column"
      >
        <TextBox css={{ opacity: 0 }} ref={introTitleRef}>
          <Heading.XLarge color={colorScheme.text.prominent}>
            What is Apptive?
          </Heading.XLarge>
        </TextBox>
        <MainTitleContainer>
          <Section ref={boyIntroRef}>
            <Image src={boyIntro} alt='boyIntro' />
            <IntroText mode={mode}>
              2013년에 개설된 APPTIVE는 학과 및 학년 제한없이 서비스 제작과 창업에
              관심있는 분들과 함께합니다. 기획자, 개발자, 디자이너로 구성된 팀으로
              활동하며 팀 단위 서비스 개발, 창업 프로젝트와 부서별 스터디를 통해
              전체 실력 향상을 목표로 합니다.
            </IntroText>
          </Section>

          <div
            ref={spyRef}
            style={{
              width: '100%',
              height: '10px',
            }}
          />
          <SectionReversed ref={girlIntroRef}>
            <IntroText mode={mode}>
              동아리 활동은 1년을 주기로 하며, 활동 이후 명예회원으로 전환하고
              동문회에 속하게 됩니다. 이후에도 현직자 네트워킹, 연합동아리 활동,
              테크 세미나 참석 등 자유로운 동아리 활동이 가능합니다.
            </IntroText>
            <Image src={girlIntro} alt='girlIntro' />
          </SectionReversed>
        </MainTitleContainer>
        <YearlySection mode={mode} />
      </Container>
    </section>
  );
};

const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    opacity: 0;

    @media (max-width: ${breakPoints.md}) {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }
  `;
const TextBox = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
    display: flex;
    max-width: ${MAX_CONTENT_WIDTH};
    width: 100%;
    text-align: left;
    @media (min-width: ${breakPoints.sm}) {
      margin-top: 200px;
      margin-bottom: 50px;
    }
  `;
const Image = styled.img`
    width: 250px;
    height: 250px;

    @media (max-width: ${breakPoints.sm}) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: ${breakPoints.xs}) {
      width: 150px;
      height: 150px;
    }
  `;

const SectionReversed = styled(Section)`
  @media (max-width: ${breakPoints.md}) {
     flex-direction: column-reverse;
  }
`;
function MainTitleContainer({ children }: { children: ReactNode }) {
  return (
    <Container
      direction="column"
      gap="20px"
      maxWidth={MAX_CONTENT_WIDTH}
      size="full-width"
    >
      {children}
    </Container>
  );
}

export default MainSection;
