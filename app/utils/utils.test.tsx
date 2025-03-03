import { describe, expect, test } from 'vitest';
import { serializeResponsiveCss } from '@utils/index';
import { breakPoints } from '@styles/breakpoints';
describe('css serialize method', () => {
  test('result of the serialized css should be correct', () => {
    const responsiveCss = serializeResponsiveCss({
      backgroundColor: 'red',
      sm: {
        backgroundColor: 'black',
      }
    });
    const styles = responsiveCss.styles.replace(/\s+/g, '');
    expect(styles).toMatch('background-color:red');
    expect(styles).toMatch(`@media(min-width:${breakPoints.sm}){background-color:black`);
  })
});
