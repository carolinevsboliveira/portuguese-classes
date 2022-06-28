import admin from 'firebase-config/admin'
import client from 'graphql/client'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import nookies from 'nookies'
import { VerifyAuthorizationQuery } from 'generated/graphql'
import { GET_IF_USER_IS_AUTHORIZED } from 'graphql/queries'

export type UserData = {
  uid: string
  email: string
}

export function withSSRAuth<P>(
  fn: (ctx: GetServerSidePropsContext, userData: UserData) => Promise<GetServerSidePropsResult<P>>
): GetServerSideProps<P> {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    try {
      const cookies = nookies.get(ctx)
      const token = await admin.auth().verifyIdToken(cookies.token)
      const { uid, email } = token
      const isActive = await client.request<VerifyAuthorizationQuery>(GET_IF_USER_IS_AUTHORIZED, { email: email })

      if (!isActive.nextUser?.active) {
        return {
          redirect: {
            permanent: false,
            destination: '/posts'
          }
        }
      }
      return await fn(ctx, { uid, email: email as string })
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
