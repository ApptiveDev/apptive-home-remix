import Page from '@/components/templates/Page';
import Qna from '@/components/organisms/qna/Qna';
import HeroSection from '@/components/organisms/main/HeroSection';
import MainSection from '@/components/organisms/main/MainSection';
import ActivitySection
  from '@/components/organisms/main/activity/ActivitySection';
import GallerySection from '@/components/organisms/gallery/GallerySection';
import { ClientOnly } from 'remix-utils/client-only';
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Apptive' },
    { description: '부산대학교 IT 서비스 개발, 출시 동아리 Apptive' },
    { 'og:title': 'Apptive' },
    { 'og:description': '부산대학교 IT 서비스 개발, 출시 동아리' },
    { 'og:image': '/logo.svg' },
    // { 'og:url': 'https://apptive.club' }
  ];
};

export default function Home() {
  return (
    <Page>
      {/*<Qna />*/}
      <HeroSection id="hero-section" />
      <ClientOnly>
        {/* TODO: fallback UI 추가 */}
        {
          () => (
            <MainSection id="main-section" mode="dark" />
          )
        }
      </ClientOnly>
      <ActivitySection id="activity-section" />
      <GallerySection id="gallery-section" />
    </Page>
  );
}
