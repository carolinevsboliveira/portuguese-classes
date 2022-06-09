import admin from 'firebase-config/admin'
import { VerifyAuthorizationQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_IF_STUDENT_IS_AUTHORIZED } from 'graphql/queries'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import nookies from 'nookies'

type FnReturnType = {
  uid: string
  email: string
}

export function withSSRAuth<P>(
  fn: (ctx: GetServerSidePropsContext, userData: FnReturnType) => Promise<GetServerSidePropsResult<P>>
): GetServerSideProps<P> {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    try {
      const cookies = nookies.get(ctx)
      const token = await admin.auth().verifyIdToken(cookies.token)
      const { uid, email } = token
      const isActive = await client.request<VerifyAuthorizationQuery>(GET_IF_STUDENT_IS_AUTHORIZED, { email: email })

      if (!email) {
        throw new Error()
      }
      if (!isActive.nextUser?.active) {
        return {
          redirect: {
            permanent: false,
            destination: '/posts'
          }
        }
      }
      return await fn(ctx, { uid, email: email })
    } catch (e) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }
    }
  }
}
