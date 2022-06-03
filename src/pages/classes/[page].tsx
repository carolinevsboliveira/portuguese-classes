import { IndexedClassesQueryQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_INDEXED_CLASSES } from 'graphql/queries'
import { GetServerSideProps } from 'next'
import ClassListTemplate from 'templates/class-list'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
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
        count={Math.ceil((count - 1) / 2)}
        variant="outlined"
        color="primary"
        onChange={handlePaginationChanges}
      />
    </>
  )
}

export default ClassesList

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
