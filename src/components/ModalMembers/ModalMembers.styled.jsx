import styled from '@emotion/styled';
import { styled as MUI } from '@mui/material/styles';


export const MemberList = MUI('form')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '0px',
    width: '700px',
  });

// export const MemberList = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 16px;
//     justify-content: center;
//     list-style-type: none;
//     padding: 0;
// `;

export const MemberItem = styled.li`
    flex-basis: calc((100% - 4 * (30px)) / 5); 
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.02), 1px 3px 4px rgba(0, 0, 0, 0.08);

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
       
        transform: scale(1.02);
    }
`;

export const MemberImage = styled.img`
    width: 100%;
    height: 175px;
    display: block;
    object-fit: cover;
    border-radius: 5px;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`;

export const MemberName = styled.p`
color: 'var(--sidebar-primary-text-color)',
    font-size: 15px;
    line-height: 1.16;
    text-align: center;
    margin-top: 8px;
`;

export const MemberPosition = styled.p`
color: 'var(--sidebar-primary-text-color)',
    font-size: 12px;
    margin-top: 7px;
    line-height: 1.16;
    text-align: center;
`;

export const MemberGit = styled.p`
   
    font-size: 12px;
    margin-top: 8px;
    color: var(--primary-text-color);
    line-height: 1.16;
    text-align: center;
`;

export const IconGit = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  
`;