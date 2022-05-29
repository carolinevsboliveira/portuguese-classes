import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'

type ClassListProps = {
  selectedPage: number
  totalPage: number
}

function ClassListTemplate({ selectedPage, totalPage }: ClassListProps) {
  const { replace } = useRouter()
  const handlePaginationChanges = (event: React.ChangeEvent<unknown>, value: number) => {
    replace(`/classes/${value}`)
  }
  return (
    <Pagination
      page={selectedPage}
      count={totalPage}
      variant="outlined"
      color="primary"
      onChange={handlePaginationChanges}
    />
  )
}

export default ClassListTemplate
