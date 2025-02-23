import { css, Global } from '@emotion/react';

import 'reset-css/reset.css';
import { colors } from '@styles/colors';

const baseStyle = css`
  ::selection {
    background-color: ${colors.light.primary.main}
  }
  body {
    font-family: 'Pretendard Variable', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(25, 27, 28);
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255);
  }

`;

function GlobalStyle() {
  return (
    <Global styles={baseStyle} />
  );
}

export default GlobalStyle;
