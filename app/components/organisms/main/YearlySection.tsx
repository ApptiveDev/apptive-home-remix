import {
  ExplainText,
  YearText,
  YearTextBox,
} from '@components/molecules/YearText';
import yearlyContent from '@constants/yearlyContent';
import Container from '@components/atoms/container/Container';
import { css } from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';
import { forwardRef, type ReactNode, useRef } from 'react';
import { colors } from '@styles/colors';
import { Heading } from '@components/atoms/text/TextFactory';
import { MAX_CONTENT_WIDTH } from '@styles/sizes';
import useIntersectionSlideEffect from '@/hooks/useIntersectionSlideEffect';

interface YearlySectionProps {
  mode: 'light' | 'dark';
}

function YearlySection({ mode }: YearlySectionProps) {
  const textboxStyle = css`
    margin-top: 80px;
    text-align: left;
    opacity: 0;
    @media (min-width: ${breakPoints.sm}) {
      margin-top: 200px;
    }
  `;
  const spyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useIntersectionSlideEffect({ spyRef, targetRef: titleRef, delay: 300 });
  useIntersectionSlideEffect({ spyRef, targetRef: sliderRef, delay: 600 });


  return (
    <>
      <Container size="full-width" maxWidth={MAX_CONTENT_WIDTH} cssx={textboxStyle} ref={titleRef}>
        <Heading.XLarge color={colors[mode].text.prominent}>
          Years of Apptive
        </Heading.XLarge>
      </Container>

      <div css={css`
        width: 100%;
        height: 50px;
      `}
        ref={spyRef}
      />

      <SliderWrapper mode={mode}>
        <SliderContainer ref={sliderRef}>
          {
            Object.entries(yearlyContent).reverse().map(([year, content]) => (
              <YearTextBox mode={mode} key={`yearly-${year}`}>
                <YearText mode={mode}>{year}</YearText>
                <ExplainText mode={mode}>
                  <ul>
                    {content.map((item, index) => (
                      <li key={`yearly-${year}-${index}`}>{item}</li>
                    ))}
                  </ul>
                </ExplainText>
              </YearTextBox>
            ))
          }
        </SliderContainer>
      </SliderWrapper>
    </>
  );
}

const SliderContainer =
  forwardRef<HTMLDivElement, { children?: ReactNode }>(({ children }, ref) => {
    const containerStyle = css`
      overflow-x: auto;
      overflow-y: hidden;
      padding-left: 45px;
      gap: 15px;
      opacity: 0;
      overflow-style: unset;
      &::-webkit-scrollbar {
        display: none !important;
      }
  
      @media (max-width: ${breakPoints.md}) {
        padding-left: 30px;
        gap: 10px;
      }
    
      @media (max-width: ${breakPoints.sm}) {
        padding-left: 20px;
        gap: 8px;
      }
    
      @media (max-width: ${breakPoints.xs}) {
        padding-left: 10px;
        gap: 5px;
      }
    `;
    return (
    <Container cssx={containerStyle} ref={ref}>
      {children}
    </Container>
    );
  });

function SliderWrapper({ mode, children }: YearlySectionProps & { children?: ReactNode }) {
  const containerStyle = css`
    box-sizing: border-box;
    margin: 20px 20px 150px;
    overflow: hidden;
    background-color: ${colors[mode].background.main};

    @media (max-width: ${breakPoints.md}) {
      padding: 0 30px;
    }

    @media (max-width: ${breakPoints.sm}) {
      padding: 0 20px;
    }

    @media (max-width: ${breakPoints.xs}) {
      padding: 0 10px;
    }`;
  return (
    <Container padding="0 45px" size="full-width" cssx={containerStyle}>
      {children}
    </Container>
  );
}

export default YearlySection;
