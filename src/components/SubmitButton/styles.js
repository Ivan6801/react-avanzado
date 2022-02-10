import styled from 'styled-components'

export const Button = styled.button`
  background: #ED262A;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 95%;
  margin: 17px auto;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`
