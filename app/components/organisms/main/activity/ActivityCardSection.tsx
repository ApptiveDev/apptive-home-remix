import ActivityCard from '@components/organisms/main/activity/ActivityCard';
import Grid from '@components/atoms/grid/Grid';
import useActivityCardImage from '@/hooks/activity/useActivityCardImage';
import { activities } from '@constants/activities';

function ActivityCardSection() {
  const getActivityCards = () => {
    const { images } = useActivityCardImage();

    return images.map((path, index) => {
      return (
        <ActivityCard
          title={activities[index].title}
          order={index + 1}
          icon={path}
          paragraph={activities[index].content}
          key={path}
        />
      );
    });
  };

  return (
    <Grid
      columns={1}
      responsiveColumns={{ md: 2 }}
      style={{
        width: '100%',
      }}
      responsiveStyle={{ md: { gap: '32px' } }}
      gap="16px"
    >
      {getActivityCards()}
    </Grid>
  );
}

export default ActivityCardSection;
