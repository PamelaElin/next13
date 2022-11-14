import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((res) =>
    res.json()
  )
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article style={{ background: 'gray', padding: 15 }}>
      <h1>{post.title}</h1>
      <p style={{ color: 'black' }}>{post.body}</p>
      <Link href={`/posts/${id}/comments`} style={{ background: 'green', padding: 10 }}>Ver comentarios</Link>
      {children}
    </article>
  )
}
