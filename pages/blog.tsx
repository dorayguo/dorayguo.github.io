/* eslint-disable react/no-unescaped-entities */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { InferGetServerSidePropsType } from 'next'
import { sortByDate } from '../utils'

export default function Blog({posts}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Dora's Blog</title>
        <meta name="description" content="Blog of Dora Guo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <img src="tree.jpg" alt='Dying oak tree still standing, surrounded by foliage.'></img>
      <p className="caption">Photo taken at the Bloedel Reserve in Bainbridge Island, WA.</p>
      <hr></hr>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')
    
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data:frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}