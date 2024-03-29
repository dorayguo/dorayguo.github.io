import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'

export default function PostPage({frontmatter: {title, date, excerpt, cover_image, image_caption, alt_text}, slug, content}) {
    return <div className='post'>
        <Head>
            <title>Dora&apos;s blog | {title}</title>
            <meta name="description" content={"Blog of Dora Guo: " + title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="card">
            <h1 className="post-title">{title}</h1>
            <div className="post-date">{date}</div>
            <hr></hr>
            <img className='post-img' src={cover_image} alt={alt_text} />
            <div className='caption'>{image_caption}</div>
            <div className="post-body">
                <div dangerouslySetInnerHTML={{__html: marked (content) }}></div>
            </div>
        </div>
    </div>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug }}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    
    const { data:frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}