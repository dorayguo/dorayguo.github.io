import { PostType } from '../utils/types'; 
import Link from 'next/link'

export default function Post(props: {key: number, post: PostType} ) {
    const { slug, frontmatter } = props.post;
    return (
        <div className='card'>
            {frontmatter.date} • <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
        </div>
    )
}