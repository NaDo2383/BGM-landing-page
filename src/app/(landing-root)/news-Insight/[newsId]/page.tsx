import NewsDetailPage from "@/components/news-insight/NewsDetailPage"

interface NewsPageProps {
  params: Promise<{ newsId: string }>
}

const page = async ({ params }: NewsPageProps) => {
  const { newsId } = await params

  return <NewsDetailPage />
}

export default page
