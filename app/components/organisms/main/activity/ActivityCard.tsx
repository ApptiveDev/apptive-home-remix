import { css } from '@emotion/react';
import { Paragraph } from '@components/atoms/text/TextFactory';
import { colors } from '@styles/colors';
import Container from '@components/atoms/container/Container';
import styled from '@emotion/styled';
import { BREAKPOINT_SM } from '@styles/breakpoints';

interface ActivityCardProps {
  title: string;
  order: number;
  icon: string;
  paragraph: string;
}

function ActivityCard({ title, order, icon, paragraph }: ActivityCardProps) {
  const cardStyle = css`
    background-color: ${colors.light.background.main};
    border-radius: 32px;
  `;

  const orderStyle = css`
    font-weight: bold;
    color: #ff7f24;
    margin-right: 10px;
  `;

  return (
    <Container size="full-width" style={cardStyle}>
      <Container
        responsiveStyle={{
          sm: {
            padding: '48px 52px',
          },
        }}
        gap="48px"
        justify="space-between"
        padding="30px 40px"
      >
        <Container direction="column" gap="8px">
          <Paragraph.Large weight="bold">
            <span css={orderStyle}>{order < 10 ? `0${order}` : order}</span>
            {title}
          </Paragraph.Large>
          <Paragraph.Small style={{
            lineHeight: '1.2',
          }}
          >
            {paragraph}
          </Paragraph.Small>
        </Container>
        <Container
          size={{ width: '80px', height: '80px' }}
          justify="center"
          align="center"
          responsiveStyle={{
            sm: {
              height: '100px',
            },
          }}
        >
          <CardImage src={icon} alt="icon" />
        </Container>
      </Container>
    </Container>
  );
}

const CardImage = styled.img`
  height: 40px;
  @media (min-width: ${BREAKPOINT_SM}) {
    height: 60px;
  }
`;

export default ActivityCard;
