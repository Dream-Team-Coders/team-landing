import { PageWithLayout } from '@/types/PageWithLayout'
import { Section1 } from '@/widgets/sections/Section1'
import { Section2 } from '@/widgets/sections/Section2'

const Home: PageWithLayout = () => {
    return (
        <div className='flex flex-col items-center'>
            <Section1 />
            <Section2 />
        </div >
    )
}

export default Home