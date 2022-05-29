import { IndexedClassesQueryQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_INDEXED_CLASSES } from 'graphql/queries'
import { GetServerSideProps } from 'next'
import ClassListTemplate from 'templates/class-list'
import WithAuth from 'hocs/with-auth/with-auth'
//TODO: Change 1 to be the first in the query
function ClassesList({ classesConnection, page }: any) {
  const {
    aggregate: { count }
  } = classesConnection
  return <ClassListTemplate selectedPage={page} totalPage={Math.ceil(count / 2)} />
}

export default WithAuth(ClassesList)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { classesConnection } = await client.request<IndexedClassesQueryQuery>(GET_INDEXED_CLASSES, {
    offset: parseInt(params?.page as string) - 1
  })

  if (!classesConnection || parseInt(params?.page as string) > Math.ceil(classesConnection.aggregate.count / 2))
    return { notFound: true }

  return {
    props: {
      classesConnection,
      page: parseInt(params?.page as string)
    }
  }
}
