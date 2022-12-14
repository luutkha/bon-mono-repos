import { CommonComponents } from 'libs/common-components/src'
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BaseProps } from '../../interface/common'

type Blog = {
    createdAt: string;
    name: string;
    avatar: string;
    id: number;
}
type Props = BaseProps<{
    post: Blog
}>
// This also gets called at build time
export const getServerSideProps: Props = async (context: GetServerSidePropsContext) => {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const { params } = context
    let post: Blog = { createdAt: '', name: '', avatar: '', id: -1 }
    if (params) {

        const res = await fetch(`https://621640007428a1d2a360b721.mockapi.io/luutkha/blogs/${params.id}`)
        post = await res.json()

        // Pass post data to the page via props
    }
    return { props: { post: post } }
}
const BlogDetail = ({ post }: InferGetStaticPropsType<typeof getServerSideProps>) => {
    const router = useRouter()
    console.log(router.query)
    return (
        <>
            <div>{post.id.toString()}</div>
            <div>{post.name.toString()}</div>
            <Image src={post.avatar} alt="just an img" />
        </>
    )
}

export default BlogDetail