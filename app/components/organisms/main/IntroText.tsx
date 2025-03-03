import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { breakPoints } from '@/styles/breakpoints';
import type { ReactNode } from 'react';

interface TextBoxProps {
  children: ReactNode;
  mode: 'light' | 'dark';
}

const IntroText = styled.div<TextBoxProps>`
  display: flex;
  padding: 60px 45px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  border: 4px solid ${({ mode }) => colors[mode].primary.darken};
  background: ${({ mode }) => colors[mode].background.darken};
  color: ${({ mode }) => colors[mode].text.prominent};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;

  @media (max-width: ${breakPoints.md}) {
    padding: 50px 35px;
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: ${breakPoints.sm}) {
    padding: 40px 25px;
    font-size: 15px;
    line-height: 26px;
  }

  @media (max-width: ${breakPoints.xs}) {
    padding: 30px 20px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 24px;
  }
`;

export default IntroText;
