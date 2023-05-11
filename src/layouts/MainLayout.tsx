import HeaderMenu from '@/widgets/HeaderMenu'
import { ReactNode } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => { 
    return (
        <div className='flex flex-col justify-center items-center'>
            <HeaderMenu />
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths:[],
        fallback:false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props:{

        }
    }
}

export default MainLayout