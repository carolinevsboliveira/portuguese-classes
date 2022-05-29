import { useRouter } from 'next/router'
import React, { ElementType } from 'react'

const WithAuth = (WrappedComponent: ElementType) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { replace } = useRouter()

      if (!localStorage.getItem('isLoggedUser')) {
        replace('/')
        return null
      }

      return <WrappedComponent {...props} />
    }

    return null
  }
}

export default WithAuth
