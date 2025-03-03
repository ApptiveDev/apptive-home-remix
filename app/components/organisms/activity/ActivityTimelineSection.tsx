import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { breakPoints } from '@/styles/breakpoints';

interface MainSectionProps {
  mode: 'light' | 'dark';
}
const ActivityTimelineSection = ({ mode }: MainSectionProps) => {
  const colorScheme = colors[mode];

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
  `;

  const TimelineContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    min-width: 120px;
    padding: 0px 20px;
    padding-top: 20px;
    box-sizing: border-box;
  `;

  const VerticalLine = styled.div`
    position: absolute;
    left: 32px;
    transform: translateX(-50%);
    width: 2px;
    height: 200px;
    background: ${colorScheme.text.prominent};
    z-index: 0;
  `;

  const Circle = styled.div<{ active: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ active }) =>
    active ? colorScheme.primary.main : colorScheme.absolute.white};
    border: 2px solid ${colorScheme.text.prominent};
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background: ${colorScheme.primary.main};
    }
    z-index: 1;
  `;

  const ActivityDetails = styled.div`
    flex: 1;
    margin-left: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 20px;
    box-sizing: border-box;

    @media (max-width: ${breakPoints.sm}) {
      margin-left: 0; 
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  `;

  const ActivityDetailItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 2px solid ${colorScheme.primary.main};
    border-radius: 30px;
    background: ${colorScheme.background.lighten};
    color: ${colorScheme.text.prominent};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: ${breakPoints.sm}) {
      font-size: 16px; 
      padding: 8px; 
    }
  `;

  const MonthsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const MonthLabel = styled.div`
    font-size: 14px;
    color: ${colorScheme.text.prominent};
    margin-left: 10px;
  `;

  const activities = [
    {
      month: '9월',
      details: [
        '신입생 OT',
        '노션, 디스코드 워크샵',
        'GIT 워크샵',
        '앱티브 MT',
      ],
    },
    { month: '10월', details: ['BITs 네트워킹 행사', '중간고사'] },
    { month: '11월', details: ['홈커밍데이', '아이디어톤'] },
    { month: '12월', details: ['기말고사', '프로젝트 팀빌딩'] },
    { month: '1월', details: ['데모데이', '2학기 활동 종료'] },
  ];

  const getCurrentMonthIndex = () => {
    const currentMonth = new Date().getMonth() + 1; // JavaScript의 월은 0부터 시작하므로 +1
    const activityMonths = ['9월', '10월', '11월', '12월', '1월'];
    return activityMonths.indexOf(`${currentMonth}월`);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const initialIndex = getCurrentMonthIndex();
    setActiveIndex(initialIndex !== -1 ? initialIndex : 0);
  }, []);
    
  return (
    <Wrapper>
      <TimelineContainer>
        <VerticalLine />
        {activities.map((activity, index) => (
          <MonthsContainer key={activity.month}
          onMouseEnter={() => setActiveIndex(index)}>
            <Circle
              active={activeIndex === index}

            />
            <MonthLabel>{activity.month}</MonthLabel>
          </MonthsContainer>
        ))}
      </TimelineContainer>
      {activeIndex !== null && (
        <ActivityDetails>
          {activities[activeIndex].details.map((detail, index) => (
            <ActivityDetailItem key={index}>{detail}</ActivityDetailItem>
          ))}
        </ActivityDetails>
      )}
    </Wrapper>
  );
};

export default ActivityTimelineSection;
