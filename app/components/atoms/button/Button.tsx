import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { css, type CSSObject } from '@emotion/react';
import { colors } from '@styles/colors';
import { serializeResponsiveCss } from '@/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children?: ReactNode;
  variant: ButtonTheme;
  cssx?: CSSObject;
}

function Button({ icon, children, variant, cssx, ...rest }: ButtonProps) {
  const buttonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 10px 18px;
    border-radius: 100px;
    color: ${variant === 'dark' ? colors.light.primary.main : colors.light.text.prominent};
    border: ${getBorderStyle(variant)};
    background-color: ${getBackgroundColor(variant)};
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${getHoverBackgroundColor(variant)};
      color: ${getHoverColor(variant)};
      border-color: ${getHoverBorderColor(variant)};
    }
  `;

  const iconStyle = css`
    margin-right: 8px;
    display: flex;
    align-items: center;
  `;

  return (
    <button css={[buttonStyle, serializeResponsiveCss(cssx)]} {...rest}>
      {icon && <span css={iconStyle}>{icon}</span>}
      {children}
    </button>
  );
}

function getBackgroundColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return 'transparent';
  }
  if (theme === 'dark') {
    return colors.light.text.prominent;
  }
  return colors.light.background.main;
}

function getBorderStyle(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return `2px solid ${colors.light.absolute.black}`;
  }
  const baseStyle = '1px solid ';
  return baseStyle + (theme === 'dark' ? colors.light.primary.main : colors.light.text.subtle);
}

function getHoverBackgroundColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colors.light.text.prominent;
  }
  if (theme === 'dark') {
    return colors.light.primary.main;
  }
  return colors.light.background.darken;
}

function getHoverColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colors.light.background.main;
  }
  return colors.light.text.prominent;
}

function getHoverBorderColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colors.light.absolute.black;
  }
  return theme === 'dark' ? colors.light.primary.main : colors.light.text.prominent;
}
type ButtonTheme = 'dark' | 'light' | 'light-outlined';

export default Button;
