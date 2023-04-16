import '@/styles/globals.css'
import { AppPropsWithLayout } from '@/types/PageWithLayout'
import MainLayout from '@/layouts/MainLayout'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const { getLayout } = Component
    
    if (!getLayout)
        return <MainLayout>
            <Component {...pageProps} />
        </MainLayout>

    return getLayout(<Component {...pageProps} />)
}
