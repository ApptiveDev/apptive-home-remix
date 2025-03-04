import { describe, expect, test } from 'vitest';
import { serializeResponsiveCss } from '@utils/index';
import { breakPoints } from '@styles/breakpoints';
import { css } from '@emotion/react';
describe('CSS 직렬화 메소드', () => {
  test('CSSObject 결합 테스트', () => {
    const responsiveCss = serializeResponsiveCss({
      backgroundColor: 'red',
      sm: {
        backgroundColor: 'black',
      }
    });
    const styles = responsiveCss.styles.replace(/\s+/g, '');
    expect(styles).toMatch('background-color:red');
    expect(styles).toMatch(`@media(min-width:${breakPoints.sm}){background-color:black`);
  });
  test('템플릿 리터럴로 작성된 SerializedCSS와 CSSObject에 대한 merge 테스트', () => {
    const baseStyle = css`
      background-color: red;
    `;
    const responsiveCss = serializeResponsiveCss({
      sm: {
        backgroundColor: 'blue',
      },
      ...baseStyle
    });
    const styles = responsiveCss.styles.replace(/\s+/g, '');
    expect(styles).toMatch('background-color:red');
    expect(styles).toMatch(`@media(min-width:${breakPoints.sm}){background-color:blue`);
  });

  test('템플릿 리터럴로 작성된 SerializedCSS에 대한 merge 테스트', () => {
    const baseStyle = css`
      background-color: red;
    `;
    const responsiveCss = serializeResponsiveCss({
      sm: css`background-color: blue`,
      ...baseStyle
    });
    const styles = responsiveCss.styles.replace(/\s+/g, '');
    expect(styles).toMatch('background-color:red');
    expect(styles).toMatch(`@media(min-width:${breakPoints.sm}){background-color:blue`);
  });
});
