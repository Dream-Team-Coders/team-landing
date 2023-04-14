import HeaderMenu from '@/widgets/HeaderMenu';
import { GetStaticPaths,GetStaticProps } from 'next';
import React, { PropsWithChildren } from 'react';

type Props = {
  children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-[1440px]'>
      <HeaderMenu />
      {children}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {


  return {
    paths:[],
    fallback:false
  }
}
export const getStaticProps: GetStaticProps = async (ctx) =>{


  return {
    props:{

    }
  }
}

export default MainLayout;