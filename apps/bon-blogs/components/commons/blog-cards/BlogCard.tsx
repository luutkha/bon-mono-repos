import classNames from 'classnames'
import React from 'react'
import { BlogCardProps } from './blog-card.interface'
import styles from './BlogCard.module.css'

const { wrapper, container, contentContainer, titleClass, descriptionClass, imageClass, typeClass } = styles
const BlogCardConstant = {
    DEFAULT_MAX_LENGTH_TITLE: 65,
}
const listImage = ['https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80', 'https://images.unsplash.com/photo-1534196511436-921a4e99f297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1661968496716-6d3b3f719778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1661968496716-6d3b3f719778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80', 'https://images.unsplash.com/photo-1661881781609-e2b6adc0b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1661926577316-067a9b79497b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 'https://images.unsplash.com/photo-1503432697506-6986abec65ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=305&q=80', 'https://images.unsplash.com/photo-1559291001-693fb9166cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80']

const BlogCard: React.FC<BlogCardProps> = ({ title, type, description, imageUrl }) => {
    const { DEFAULT_MAX_LENGTH_TITLE } = BlogCardConstant

    const fixTitle = (string: string) => {
        if (string.length > DEFAULT_MAX_LENGTH_TITLE) {
            return (
                <>
                    {string.slice(0, DEFAULT_MAX_LENGTH_TITLE) + ' ...'}
                </>
            )
        }
        else {
            if (
                title.length * 2 + 1 <= DEFAULT_MAX_LENGTH_TITLE
            ) {
                return <>
                    {'\n' + title}
                </>
            }
            else return <>
                {string}
            </>
        }

    }
    const titleElement = fixTitle(title);

    const randomUrlIndex = Math.floor((Math.random() * 9));
    imageUrl = listImage[randomUrlIndex]

    // const handleCardClicked = () => {

    // }
    return (
        <div className={classNames(wrapper)}>

            <div className={classNames(container)} >
                <div className={classNames(imageClass)} style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                <div className={classNames(contentContainer)}>
                    <div className={classNames(titleClass)}>
                        {titleElement}
                    </div>
                    <div className={classNames(typeClass)}>{type}</div>
                </div>
            </div>
            <div className={classNames(descriptionClass)}>{description}</div>
        </div>
    )
}

export default BlogCard