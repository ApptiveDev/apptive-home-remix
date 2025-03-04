import Grid from '@components/atoms/grid/Grid';
import useActivityCardImage from '@/hooks/activity/useActivityCardImage';
import ActivityCard from '@components/organisms/activity/ActivityCard';
import { activities } from '@components/organisms/activity/activities';

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
      cssx={{
        width: '100%',
        md: { gap: '32px' }
      }}
      gap="16px"
    >
      {getActivityCards()}
    </Grid>
  );
}

export default ActivityCardSection;
