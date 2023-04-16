import Button from '@/components/Button'
import HeaderLink from '@/components/HeaderLink'
import Image from 'next/image'
import Logo from '../../public/icons/logo.svg'
import { GetStaticPaths, GetStaticProps } from 'next'

const HeaderMenu = () => {
    return (
        <div className='flex justify-between items-center w-full h-24 px-8'>
            <div className='flex items-center uppercase font w-fit'>
                <Image className='mr-4' src={Logo} alt='Logo' />
                <span className='text-2xl font-inter'>СтройКонтроль</span>
            </div>
            <div className='flex items-center gap-x-5'>
                <HeaderLink title='Главная' isActive />
                <HeaderLink title='О нас' />
                <HeaderLink title='Продукция' />
                <HeaderLink title='Процесс' />
                <HeaderLink title='Надёжность' />
                <HeaderLink title='Клинты' />
                <HeaderLink title='Связаться с нами' />
                <Button title='Заказать демо' isDark/>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {

        }
    }
}

export default HeaderMenu