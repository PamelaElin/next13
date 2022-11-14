import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  }).then((res) =>
    res.json()
  )
}

export async function ListOfPost () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(({ id, title, body }) => (
    <article key={id}>
      <Link href='/posts/[id]' as={`/posts/${id}`}>
        <h2 style={{ color: '#09f' }}>{title}</h2>
        <p>{body}</p>
        <LikeButton id={id} />
      </Link>
    </article>
  ))
}
