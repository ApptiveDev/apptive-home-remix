import Page from '@/components/templates/Page';
import Qna from '@/components/organisms/qna/Qna';
import HeroSection from '@/components/organisms/main/HeroSection';
import MainSection from '@/components/organisms/main/MainSection';
import ActivitySection
  from '@/components/organisms/main/activity/ActivitySection';
import GallerySection from '@/components/organisms/gallery/GallerySection';

export default function Home() {
  return (
    <Page>
      <Qna />
      <HeroSection id="hero-section" />
      <MainSection id="main-section" mode="dark" />
      <ActivitySection id="activity-section" />
      <GallerySection id="gallery-section" />
    </Page>
  );
}
