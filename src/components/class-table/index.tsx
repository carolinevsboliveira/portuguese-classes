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
        {classes.map((currentClass) => {
          const thisClass = currentClass.node
          return (
            <S.Cell key={thisClass.id}>
              <ClassCard
                meetLink={thisClass.meetLink}
                teachers={thisClass.teachers}
                name={thisClass.name}
                shortDescription={thisClass.shortDescription}
                scheduledTime={thisClass.scheduledTime}
                imageUrl={thisClass.image?.url}
                availableSlideUrl={thisClass.avaliableSlides?.url}
              />
            </S.Cell>
          )
        })}
      </S.Row>
    </S.Table>
  )
}

export default ClassesTable
