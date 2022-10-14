import styled from 'styled-components'

export const MasterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 32px;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`

export const Label = styled.label`
  padding-bottom: 8px;
`

export const ContactButton = styled.button`
  border: solid var(--primary);
  background-color: transparent;
  padding: 8px 20px;
  border-radius: 16px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`

export const SuccessText = styled.p`
  color: var(--white);
`

export const LabelSection = styled.section`
  padding: 8px 4px;
  display: grid;
  grid-template-columns: 1fr;
`

export const FormContainer = styled.section`
  padding: 16px;
  min-width: 60%;
  background-color: #242429;
  border-radius: 8px;
`

export const SmallTextArea = styled.input`
  display: block;
  padding: 10px;
  border-radius: 8px;
  border-color: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: var(--white);
  border: solid var(--primary);
  background-color: transparent;
`

export const TextArea = styled.textarea`
  display: block;
  border-radius: 8px;
  border-color: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: var(--white);
  border: solid var(--primary);
  background-color: transparent;
`
