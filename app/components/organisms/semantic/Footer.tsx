import Container from '@/components/atoms/container/Container';
import Image from '@components/atoms/image/Image';
import headerLogo from '@assets/images/header-logo.svg';
import smallLogo from '/logo.svg';
import linkIcon from '@assets/images/link-icon.svg';
import { TextBody } from '@/components/atoms/text/TextFactory';
import { MAX_CONTENT_WIDTH } from '@styles/sizes';

function Footer() {
  return (
    <Container
      size="full-width"
      justify="center"
      style={{ backgroundColor: '#1B1B1B' }}
    >
      <Container
        size={{ width: '100%', height: '320px' }}
        justify="space-between"
        align="center"
        padding="0 40px"
        maxWidth={MAX_CONTENT_WIDTH}
      >
        <Container
          gap="12px"
          direction="column"
          style={{ display: 'none' }}
          responsiveStyle={{
            sm: { display: 'flex' }, // xs 화면 이상에서는 숨김
          }}
        >
          <Image src={headerLogo} alt="header logo" />
          <TextBody.Medium weight="bold" color="white">
            APPTIVE
          </TextBody.Medium>

          <TextBody.Medium weight="bold" color="white">
            부산대학교 대표 IT 프로젝트 동아리
          </TextBody.Medium>
        </Container>
        <Container gap="12px" direction="column">
          <Container
            gap="12px"
            direction="column"
            responsiveStyle={{
              xs: { display: 'flex' }, // xs 화면 이상에서는 숨김
              sm: { display: 'none' }, // xs 화면 이상에서는 숨김
            }}
          >
            <Container gap="5px" direction="row" align="center">
              <TextBody.Large weight="bold" color="white">
                APPTIVE
              </TextBody.Large>
              <Image src={smallLogo} alt="header small logo" />
            </Container>
          </Container>
          <a
            rel="stylesheet"
            href=""
            style={{ textDecoration: 'underline', color: 'white' }}
          >
            <Container gap="5px">
              Notion
              <Image src={linkIcon} alt="link icon" />
            </Container>
          </a>
          <a
            rel="stylesheet"
            href=""
            style={{ textDecoration: 'underline', color: 'white' }}
          >
            <Container gap="5px">
              Discord
              <Image src={linkIcon} alt="link icon" />
            </Container>
          </a>
          <a
            rel="stylesheet"
            href=""
            style={{ textDecoration: 'underline', color: 'white' }}
          >
            <Container gap="5px">
              Instagram
              <Image src={linkIcon} alt="link icon" />
            </Container>
          </a>
        </Container>
      </Container>
    </Container>
  );
}

export default Footer;
