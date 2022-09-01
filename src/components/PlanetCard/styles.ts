import styled from 'styled-components'

export const Container = styled.div``

export const Card = styled.div`
  cursor: pointer;
  background: #000;
  border: 1px solid #8252e5;
  border-radius: 20px;
  margin: 2rem 4rem;
  
  overflow: hidden;
  box-shadow: #000 0px 3px 8px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const CardImage = styled.div`
  width: 200px;
  height: 200px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardInfo = styled.div`
  margin-top: 1rem;
`

export const Title = styled.h2`
  margin-bottom: 10px;
  color: white;
`

export const Description = styled.h3`
  color: #272727; 
`