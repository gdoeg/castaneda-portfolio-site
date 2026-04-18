import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))

    setErrors((currentErrors) => {
      if (!currentErrors[name as keyof FormValues]) {
        return currentErrors
      }

      return {
        ...currentErrors,
        [name]: undefined,
      }
    })

    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateForm(formValues)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsLoading(true)
    setIsSubmitted(false)

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 1000)
      })

      setFormValues(initialValues)
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        {errors.name ? <p>{errors.name}</p> : null}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        {errors.email ? <p>{errors.email}</p> : null}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formValues.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message ? <p>{errors.message}</p> : null}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
        {isSubmitted ? <p>Message sent successfully.</p> : null}
      </form>
    </section>
  )
}

export default Contact