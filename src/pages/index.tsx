import { PageWithLayout } from '@/types/PageWithLayout'
import { Section1 } from '@/widgets/sections/Section1'
import Section10 from '@/widgets/sections/Section10'
import { Section2 } from '@/widgets/sections/Section2'
import { Section3 } from '@/widgets/sections/Section3'
import { Section4 } from '@/widgets/sections/Section4'
import Section5 from '@/widgets/sections/Section5'
import { Section6 } from '@/widgets/sections/Section6'
import { Section7 } from '@/widgets/sections/Section7'
import Section8 from '@/widgets/sections/Section8'
import Section9 from '@/widgets/sections/Section9'

const Home: PageWithLayout = () => {
    return (<>
        <div className='bg-white flex flex-col justify-center items-center'>
            <div className='w-[1056px]'>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
            </div >
        </div>
        <div className='bg-black flex flex-col justify-center items-center'>
            <div className='w-[1056px]'>
                <Section10 />
            </div>          
        </div>
    </>)
}

export default Home