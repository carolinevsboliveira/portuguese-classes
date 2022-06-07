import { IndexedClassesQueryQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_INDEXED_CLASSES } from 'graphql/queries'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import ClassListTemplate from 'templates/class-list'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import admin from 'firebase-config/admin'

//TODO: Change 1 to be the first in the query
function ClassesList({ classesConnection, page }: any) {
  const { replace } = useRouter()

  const handlePaginationChanges = (event: React.ChangeEvent<unknown>, value: number) => {
    replace(`/classes/${value}`)
  }
  const {
    aggregate: { count },
    classes
  } = classesConnection

  return (
    <>
      <ClassListTemplate classes={classes} />
      <Pagination
        page={page}
        count={Math.ceil((count - 2) / 2)}
        variant="outlined"
        color="primary"
        onChange={handlePaginationChanges}
      />
    </>
  )
}

export default ClassesList

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    console.log(JSON.stringify(cookies, null, 2))
    const token = await admin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    const { classesConnection } = await client.request<IndexedClassesQueryQuery>(GET_INDEXED_CLASSES, {
      offset: parseInt(ctx.params?.page as string) - 1
    })
    return {
      props: { userEmail: email, userId: uid, classesConnection, page: parseInt(ctx.params?.page as string) }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {} as never
    }
  }
}
