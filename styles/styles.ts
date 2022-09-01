import styled from 'styled-components'

export const CardWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("https://www.xtrafondos.com/wallpapers/planetas-en-el-espacio-3897.jpg");
  background-repeat: no-repeat;
`;

export const Card = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid #8252e5;
  cursor: pointer;
  background: #000;
  border-radius: 20px;
  margin: 2rem 4rem;
  overflow: hidden;
  box-shadow: #000 0px 3px 8px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  span {
    font-size: 14px;
    color: white;
  }

  strong {
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #8252e5;
  border-radius: 8px;
  border: 0;
  padding: 10px;
  cursor: pointer;
  font-weight: 900;
`