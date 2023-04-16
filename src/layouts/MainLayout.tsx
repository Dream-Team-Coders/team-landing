import HeaderMenu from '@/widgets/HeaderMenu'
import { ReactNode } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => { 
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center w-[1440px]'>
                <HeaderMenu />
                <div className='flex flex-col justify-center items-center w-[1056px]'>
                    {children}
                </div>
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

export const getStaticProps: GetStaticProps = async () =>{
    return {
        props:{

        }
    }
}

export default MainLayout