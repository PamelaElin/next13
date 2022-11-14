
export default function PostLayout ({ children }) {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>App &bull; NextJs 13</marquee>
      {children}
    </div>
  )
}
