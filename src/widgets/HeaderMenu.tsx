import { GetStaticPaths, GetStaticProps } from 'next'

const HeaderMenu = () => {
    return (
        <div>
            Header Menu
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

export default HeaderMenu