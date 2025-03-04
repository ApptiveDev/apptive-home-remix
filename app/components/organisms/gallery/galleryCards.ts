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

export const cardData = [
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

export const evenIndexCards = cardData.filter((_, index) => index % 2 === 0);
export const oddIndexCards = cardData.filter((_, index) => index % 2 !== 0);
