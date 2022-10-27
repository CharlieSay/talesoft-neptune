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
  background-color: #242429;
`

export const Label = styled.label`
  padding-bottom: 8px;
  background-color: #242429;
`

export const ContactButton = styled.button`
  border: solid var(--primary);
  background-color: transparent;
  padding: 8px 20px;
  border-radius: 16px;
  border-width: 0.075rem;
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
  background-color: #242429;
`

export const FormContainer = styled.section`
  padding: 16px;
  flex: 1;
  background-color: #242429;
  border-radius: 8px;
  max-width: 500px;
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
  border-width: 0.075rem;
`

export const TextArea = styled.textarea`
  font-family: inherit;
  display: block;
  border-radius: 8px;
  border-color: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  resize: none;
  color: var(--white);
  border: solid var(--primary);
  background-color: transparent;
  border-width: 0.075rem;
  min-height: 100px;
`
