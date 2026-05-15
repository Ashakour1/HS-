"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, Eye, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category?: string;
  status: string;
  authorId?: string;
  author?: {
    id: string;
    name: string;
    username: string;
  };
  views: number;
  tags: string[];
  image?: string;
  imagePublicId?: string;
  createdAt: Date;
  updatedAt: Date;
}

function NewsPageContent() {
  const searchParams = useSearchParams()
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/news')
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        const data = await response.json()
        // Filter only published news
        const publishedNews = data.filter((article: NewsArticle) => article.status === 'published')
        setNewsArticles(publishedNews)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(newsArticles.map(article => article.category).filter(Boolean)))]

  // Filter articles based on search and category
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (article.excerpt && article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (article.content && article.content.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading News</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Latest news
            </h1>
            <div className="w-[120px]" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white">
        <div className="container mx-auto px-4 pb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search news articles…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full bg-gray-100 py-2.5 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category || "all")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-10">
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/news/${article.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 hover:bg-gray-50"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-gray-100">
                    <Image
                      src={article.image || "/All-2.jpg"}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">
                        {article.category || "Health"}
                      </span>
                      <span className="text-gray-300">·</span>
                      <time className="text-gray-500">{formatDate(article.createdAt)}</time>
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {article.title}
                    </h3>

                    <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {article.excerpt || article.content.substring(0, 140) + "..."}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Eye className="h-4 w-4" />
                        <span>{article.views} views</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-medium text-blue-600 transition-transform duration-300 group-hover:translate-x-0.5">
                        Read more
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white py-16 text-center">
            <p className="text-base text-gray-500">No news articles found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function NewsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <NewsPageContent />
    </Suspense>
  )
}
