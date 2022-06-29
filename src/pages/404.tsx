import NotFoundTemplate from 'templates/not-found-template'
import NotFoundAnimation from 'assets/lotties/404.json'

function NotFoundPage() {
  return (
    <NotFoundTemplate
      animation={NotFoundAnimation}
      title="Ops, você foi mais esperto que nós :("
      subtitle="Em breve, vamos providenciar esse conteúdo lindo!"
    />
  )
}

export default NotFoundPage
