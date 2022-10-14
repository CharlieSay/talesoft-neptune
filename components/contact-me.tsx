import { useFormspark } from '@formspark/use-formspark'
import { useState } from 'react'
import {
  ContactButton,
  Form,
  FormContainer,
  Label,
  LabelSection,
  MasterContainer,
  SmallTextArea,
  SuccessText,
  TextArea,
} from '../styles/form.styles'
import { TailSpin } from 'react-loader-spinner'
import { TitleH2 } from '../styles/typography.styles'

type FormState = 'UN_SUBMITTED' | 'SUBMITTING' | 'SUBMITTED'

export default function ContactUs() {
  const [submit] = useFormspark({
    formId: 'BiS7kq4h',
  })
  const [formState, setFormState] = useState<FormState>('UN_SUBMITTED')
  const handleSubmit = async (event: any) => {
    setFormState('SUBMITTING')
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.message.value

    const submitedContent = {
      name: name,
      email: email,
      message: message,
    }
    await submit(submitedContent)
    setFormState('SUBMITTED')
  }
  return (
    <MasterContainer>
      <FormContainer>
        {formState == 'UN_SUBMITTED' && (
          <Form onSubmit={handleSubmit}>
            <TitleH2 style={{ backgroundColor: '#242429' }}>
              Lets work{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  textDecoration: 'underline',
                  backgroundColor: '#242429',
                }}
              >
                together
              </span>
            </TitleH2>
            <LabelSection>
              <Label htmlFor="name">Your Name</Label>
              <SmallTextArea
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required={true}
              />
            </LabelSection>
            <LabelSection>
              <Label htmlFor="email">Email Address</Label>
              <SmallTextArea
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required={true}
              />
            </LabelSection>
            <LabelSection>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" required={true}></TextArea>
            </LabelSection>
            <ContactButton type="submit">Contact Us</ContactButton>
          </Form>
        )}
        {formState == 'SUBMITTING' && (
          <TailSpin
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
            height="40"
            width="40"
            color="white"
          />
        )}
        {formState == 'SUBMITTED' && (
          <>
            <SuccessText>Thank you for getting in touch</SuccessText>
            <SuccessText>We will contact you soon</SuccessText>
            <SuccessText>🔥</SuccessText>
          </>
        )}
      </FormContainer>
    </MasterContainer>
  )
}
