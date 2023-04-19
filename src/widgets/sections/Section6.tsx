import BesixLogo from '%/images/section-6-1.png'
import EchoLogo from '%/images/section-6-3.png'
import Image from 'next/image'
import KajimaLogo from '%/images/section-6-4.png'
import LafargeLogo from '%/images/section-6-5.png'
import SixConstructLogo from '%/images/section-6-2.png'
import SkanskaLogo from '%/images/section-6-6.png'

export const Section6 = () => {
    return (
        <section className='w-full mt-32 flex flex-col items-center'>
            <div className='w-full items-center flex flex-row justify-between'>
                <Image
                    className='w-[180px]'
                    src={BesixLogo}
                    alt='BesixLogo'
                />
                <Image
                    className='w-[180px]'
                    src={SixConstructLogo}
                    alt='SixConstructLogo'
                />
                <Image
                    className='w-[180px]'
                    src={EchoLogo}
                    alt='EchoLogo'
                />
                <Image
                    className='w-[180px]'
                    src={KajimaLogo}
                    alt='BesixLogo'
                />
                <Image
                    className='w-[180px]'
                    src={LafargeLogo}
                    alt='LafargeLogo'
                />
            </div>
            <Image
                className='w-[180px] mt-3'
                src={SkanskaLogo}
                alt='SkanskaLogo'
            />
        </section>
    )
}