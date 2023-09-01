import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  min-height: 100vh; 
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`
export const Title = styled.h1`
  text-align: center;
  font-size:16px;
  margin-top: 20px;
  margin-bottom:0;

@media screen and (min-width: 768px) {
  font-size: 28px;
}
@media screen and (min-width: 1440px) {
  font-size: 40px;
}
`;


export const Image = styled.img`
  width: 200px;

@media screen and (min-width: 768px) {
  width: 300px;
}
@media screen and (min-width: 1440px) {
  width: 430px;
}
`
