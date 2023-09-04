import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
  width: auto;
  height:68px;
  padding: 18px 24px;
  background: var(--header-bg-color);
  color: var(--primary-text-color);

  @media (max-width: 1440px) {
    padding: 18px 32px;
  }
  @media (max-width: 768px) {
    padding: 14px 20px;
    height:60px;
  }
`;

export const ThemeContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  height: auto;
  margin-right: 14px;
  margin-left: auto;
`;

export const ThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    stroke: var(--primary-text-color);
    transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover {
    svg {
      stroke: var(--header-theme-color);
    }
    color: var(--header-theme-color);
   
  }
`;

export const ThemeUL = styled.ul`
  position: absolute;
  top: 45px;
  left: -12px;
  margin: 0px;
  max-height: 0px;
  padding: 0 44px 0 18px;
  background: var(--modal-bg-color);
  overflow: hidden;
  list-style: none;
  border-radius: 8px;
  
  &.visible {
    width: 100px;
    max-height: 107px;
    padding: 18px 44px 18px 18px;
    border: 1px solid var(--button-bg-color);
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }
  @media (max-width: 768px) {
    top: 41px;
  }
`;

export const ThemeButton = styled.button`
  border: none;
  background: transparent;
  text-transform: capitalize;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  color: ${({ selected }) =>
    selected ? 'var(--button-bg-color)' : 'var(--secondary-text-color)'};
  }
`;
