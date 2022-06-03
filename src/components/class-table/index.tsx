import ClassCard from 'components/class-card'
import React from 'react'
import * as S from './styles'

type ClassesTableProps = {
  classes: Array<any>
}

function ClassesTable({ classes }: ClassesTableProps) {
  return (
    <S.Table>
      <S.Row>
        {classes.map((currentClass) => (
          <S.Cell key={currentClass.node.id}>
            <ClassCard
              teachers={currentClass.node.teachers}
              name={currentClass.node.name}
              shortDescription={currentClass.node.shortDescription}
              scheduledTime={currentClass.node.scheduledTime}
            />
          </S.Cell>
        ))}
      </S.Row>
    </S.Table>
  )
}

export default ClassesTable
