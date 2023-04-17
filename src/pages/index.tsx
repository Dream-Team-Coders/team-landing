import { PageWithLayout } from '@/types/PageWithLayout'
import { Section1 } from '@/widgets/sections/Section1'
import { Section2 } from '@/widgets/sections/Section2'
import { Section3 } from '@/widgets/sections/Section3'

const Home: PageWithLayout = () => {
    return (
        <div className='flex flex-col items-center'>
            123
            <Section1 />
            <Section2 />
            <Section3 />
        </div >
    )
}

export default Home