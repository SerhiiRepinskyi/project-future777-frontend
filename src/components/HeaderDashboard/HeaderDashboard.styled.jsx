import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.2);
  font-family: Poppins;

  //   @media (min-width: 1280px) {
  //       height: 48px;
  //   };
  //   @media (min-width: 768px) {
  //       height: 80px;
  //   };
  //   @media (min-width: 375px) {
  //       height: 134px;
  //   };
  //   @media (max-width: 374px) {
  //       max-height: 134px;
  //   };
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const TitleDashBoard = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin: 0;
  color: var(--primary-text-color);
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  background-color: transparent;
  border: none;
  outline: none;
  opacity: 0.8;
  cursor: pointer;
`;
export const TitleFilter = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: var(--secondary-text-color);
  margin-left: 8px;
  font-family: Poppins;
`;
