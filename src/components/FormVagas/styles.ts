import styled from 'styled-components'

export const AreaPesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corNumero2};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  border: 1px solid ${(props) => props.theme.corNumero1};
`

export const BotaoPesquisa = styled.button`
  background-color: ${(props) => props.theme.corNumero1};
  border: 1px solid ${(props) => props.theme.corNumero1};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corNumero2};
  margin-left: 8px;
  cursor: pointer;
`

export const InputPesquisa = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corNumero1};
`
