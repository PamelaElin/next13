
export default function PostLayout ({ children }) {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>Home &bull; Posts</marquee>
      {children}
    </div>
  )
}
