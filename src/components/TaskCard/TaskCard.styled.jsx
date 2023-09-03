import styled from '@emotion/styled';
const getPriorityColor = priority => {
  switch (priority) {
    case 3:
      return '#BEDBB0';
    case 1:
      return '#8FA1D0';
    case 2:
      return '#E09CB5';
    default:
      return '#bababa';
  }
};
export const TypographyStylesTitle = {
  color: '#FFF',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '-0.28px',
  marginBottom: '8px',
};
export const TypographyStylesDescription = {
  color: 'rgba(255, 255, 255, 0.50)',
  fontSize: '12px',
  fontWeight: '400',
  letterSpacing: '-0.24px',
  whitespace: 'nowrap',
  lineHeight: '16px',
  width: '290px' /* Задаємо фіксовану ширину, де текст буде обрізаний */,
  whiteSpace: 'nowrap' /* Забороняємо перенесення тексту на новий рядок */,
  overflow:
    'hidden' /* Приховуємо будь-який текст, який не поміщається в обрізаному вікні */,
  textOverflow: 'ellipsis',
};
export const TypographyStylesPriority = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: '4px',
  color: ' rgba(255, 255, 255, 0.50)',
  fontFamily: 'Poppins',
  fontSize: '8px',

  fontWeight: '400',
  lineHeigt: 'normal',
  letterSpacing: '-0.16px',
};
export const CardContentStyles = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
  padding: '0px',
  paddingBottom: '14px',
  marginBottom: '14px',
};
export const ActionsBox = {
  display: 'flex',
  alignItems: 'base-line',
  justifyContent: 'center',
  gap: '14px',
};
export const CardActionsStyled = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => getPriorityColor(props.priority)};
`;
export const CardStyles = styled.div`
  width: 334px;
  height: 154px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 20px;
  background-color: #121212;
  border-radius: 8px;
  border-left: 4px solid ${props => getPriorityColor(props.priority)};
`;
export default getPriorityColor;
