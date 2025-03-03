import Container from '@components/atoms/container/Container';
import { MAX_CONTENT_WIDTH } from '@styles/sizes';
import { Heading } from '@components/atoms/text/TextFactory';
import { colors } from '@styles/colors';
import { type ReactNode } from 'react';
import ActivityTimelineSection from './ActivityTimelineSection';
import ActivityCardSection
  from '@components/organisms/activity/ActivityCardSection';

function ActivitySection({ id }: { id?: string }) {
  return (
    <section id={id}>
      <Container
        size="full-width"
        justify="center"
        cssx={{
          backgroundColor: colors.light.background.darken,
        }}
      >
        <ActivityContainer>
          <Container size="full-width" justify="flex-end">
            <Heading.XLarge>Activity of APPTIVE</Heading.XLarge>
          </Container>
          <Container size="full-width" padding="40px 0">
            <ActivityCardSection />
          </Container>
          <Container size="full-width">
            <Heading.XSmall>Activity of 2nd semester 2024</Heading.XSmall>
          </Container>
          <Container size="full-width">
            <ActivityTimelineSection mode="light" />
          </Container>
        </ActivityContainer>
      </Container>
    </section>

  );
}

function ActivityContainer({ children }: ActivityContainerProps) {
  return (
    <Container
      size="full-width"
      maxWidth={MAX_CONTENT_WIDTH}
      direction="column"
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

export default ActivitySection;
