import PostsAnimation from '../assets/lotties/posts.json'
import NotFoundTemplate from '../templates/not-found-template'

function PostsPage() {
  return (
    <NotFoundTemplate
      animation={PostsAnimation}
      title="Ops, infelizmente ainda não temos posts legais para você ler :("
      subtitle="Em breve, vamos providenciar esse conteúdo lindo!"
    />
  )
}

export default PostsPage
