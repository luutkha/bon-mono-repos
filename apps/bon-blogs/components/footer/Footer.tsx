import classNames from 'classnames'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import styles from './Footer.module.css'
const { container } = styles

export const getStaticProps: GetStaticProps = async () => {
    const x = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await x.json()
    console.log('this is sdata'+ data)
    return {
        props: {
            listImages: data
        },
    }
}
const Footer: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ listImages }) => {
    console.log(listImages)
    return (
        <div className={classNames(container)}>
            Footer
            {/* {listImages.map(a => a.url)} */}
        </div>
    )
}

export default Footer