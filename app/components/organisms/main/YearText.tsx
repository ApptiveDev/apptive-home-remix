import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { breakPoints } from '@/styles/breakpoints';

interface ModeProps {
  mode: 'light' | 'dark';
}

const YearText = styled.div<ModeProps>`
  color: ${({ mode }) => colors[mode].primary.darken};
  font-size: 100px;
  font-weight: 1000;
  position: absolute;
  top: -15px;
  left: -5px;

  @media (max-width: ${breakPoints.md}) {
    font-size: 80px;
  }

  @media (max-width: ${breakPoints.sm}) {
    font-size: 60px;
    top: -10px;
    left: -2px;
  }

  @media (max-width: ${breakPoints.xs}) {
    font-size: 50px;
    top: -8px;
    left: -5px;
  }
`;

const YearTextBox = styled.div<ModeProps>`
  position: relative;
  flex: 0 0 auto;
  width: 390px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 4px solid ${({ mode }) => colors[mode].primary.darken};
  background: ${({ mode }) => colors[mode].background.darken};
  scroll-snap-align: start;
  padding-top: 100px;

  @media (max-width: ${breakPoints.md}) {
    width: 350px;
    height: 450px;
    padding-top: 80px;
  }

  @media (max-width: ${breakPoints.sm}) {
    width: 350px;
    height: 420px;
    padding-top: 60px;
  }

  @media (max-width: ${breakPoints.xs}) {
    width: 300px;
    height: 400px;
    padding-top: 50px;
  }
`;

const ExplainText = styled.div<ModeProps>`
  ul {
    font-size: 15px;
    list-style-type: disc;
    padding-left: 25px;
    padding-right: 10px;
    line-height: 35px;
    color: ${({ mode }) => colors[mode].text.prominent};

    @media (max-width: ${breakPoints.md}) {
      font-size: 14px;
      line-height: 30px;
    }

    @media (max-width: ${breakPoints.sm}) {
      font-size: 13px;
      line-height: 28px;
    }

    @media (max-width: ${breakPoints.xs}) {
      font-size: 12px;
      line-height: 25px;
    }
  }
`;

export { YearText, ExplainText, YearTextBox };
