import emailjs from 'emailjs-com'

export const sendEmailForWarnedStudents = async (
  emailsToSend: Array<{ email: string; missedClass: number }>,
  totalClasses: number,
  link: string
) => {
  const templateParams = {
    totalClasses,
    link
  }

  try {
    const promises = emailsToSend.map((emailData) =>
      emailjs.send(
        String(process.env.EMAIL_SERVICE_ID),
        String(process.env.EMAIL_SERVICE_TEMPLATE_ID),
        {
          ...templateParams,
          email: emailData.email,
          missedClass: emailData.missedClass
        },
        String(process.env.EMAIL_SERVICE_USER_ID)
      )
    )
    await Promise.all(promises)
  } catch (error) {
    console.error({ error })
  }
}
