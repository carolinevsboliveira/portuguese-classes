import emailjs from 'emailjs-com'

export const sendEmailForWarnedStudents = async (
  emailsToSend: Array<string>,
  missedClass: number,
  totalClasses: number,
  link: string
) => {
  const templateParams = {
    missedClass,
    totalClasses,
    link
  }

  try {
    const promises = emailsToSend.map((email) =>
      emailjs.send(
        String(process.env.EMAIL_SERVICE_ID),
        String(process.env.EMAIL_SERVICE_TEMPLATE_ID),
        {
          ...templateParams,
          email
        },
        String(process.env.EMAIL_SERVICE_USER_ID)
      )
    )
    await Promise.all(promises)
  } catch (error) {
    console.log({ error })
  }
}
