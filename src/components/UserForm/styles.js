import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 95%;
  margin: 5px auto;
  &[disabled] {
    opacity: .3;
  }
`

export const Button = styled.button`
  background: #ED262A;
  border-radius: 3px;
  color: #fff;
  height: 35px;
  display: block;
  width: 95%;
  margin: 17px auto;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  margin-left: 10px;
`
export const Error = styled.span`
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin-left: 10px;
`
