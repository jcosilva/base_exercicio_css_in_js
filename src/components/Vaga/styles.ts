import styled from 'styled-components'

export const VagaList = styled.li`
  border: 1px solid ${(props) => props.theme.corNumero1};
  background-color: ${(props) => props.theme.corNumero2};
  color: ${(props) => props.theme.corNumero1};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.corNumero1};
    color: ${(props) => props.theme.corNumero2};
  }

  :hover a {
    border-color: ${(props) => props.theme.corNumero1};
    background-color: ${(props) => props.theme.corNumero2};
    color: ${(props) => props.theme.corNumero1};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.corNumero2};
  background-color: ${(props) => props.theme.corNumero1};
  color: ${(props) => props.theme.corNumero2};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
