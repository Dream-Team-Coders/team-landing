import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/layouts/MainLayout'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const { getLayout } = Component
    
    if (!getLayout)
        return <MainLayout>
            <Component {...pageProps} />
        </MainLayout>

    return getLayout(<Component {...pageProps} />)
}
