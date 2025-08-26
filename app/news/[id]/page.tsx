"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Eye, Tag, Clock, Phone } from "lucide-react"

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

export default function NewsDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [recentArticles, setRecentArticles] = useState<NewsArticle[]>([])
  const [allArticles, setAllArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/news/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch article')
        }
        const data = await response.json()
        setArticle(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    const fetchRecentArticles = async () => {
      try {
        const response = await fetch('https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/news')
        if (response.ok) {
          const data = await response.json()
          const publishedNews = data.filter((article: NewsArticle) => article.status === 'published')
          // Get 3 most recent articles, excluding current article
          const recent = publishedNews
            .filter((a: NewsArticle) => a.id !== params.id)
            .sort((a: NewsArticle, b: NewsArticle) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 3)
          setRecentArticles(recent)
          setAllArticles(publishedNews)
        }
      } catch (err) {
        console.error('Failed to fetch recent articles:', err)
      }
    }

    if (params.id) {
      fetchArticle()
      fetchRecentArticles()
    }
  }, [params.id])

  // Calculate category counts
  const getCategoryCount = (category: string) => {
    return allArticles.filter(article => article.category === category).length
  }

  // Get unique categories with counts
  const categoriesWithCounts = Array.from(new Set(allArticles.map(article => article.category).filter(Boolean)))
    .map(category => ({
      name: category!,
      count: getCategoryCount(category!)
    }))
    .sort((a, b) => b.count - a.count)

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The article you are looking for does not exist.'}</p>
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
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-32 md:h-80 lg:h-64">
        <Image
          src="/hero.png"
          alt="News Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-4">
              <div className="inline-block bg-blue-600/90 text-white px-4 py-2 rounded-lg">
                <span className="text-sm">Home - Blog Detail</span>
              </div>
            </div>
            {/* News Title */}
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content - Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category || "Health"}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.createdAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatTime(article.createdAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views} views
                  </div>
                </div>

                {article.excerpt && (
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                )}

                {article.author && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <User className="w-5 h-5" />
                    <span>By {article.author.name}</span>
                  </div>
                )}
              </div>

              {/* Featured Image */}
              {article.image && (
                <div className="mb-8">
                  <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }}
                />
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-sm text-gray-600">
                    <p>Last updated: {formatDate(article.updatedAt)}</p>
                  </div>
                  <Link href="/">
                    <Button variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Recent Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentArticles.map((recentArticle) => (
                    <Link 
                      key={recentArticle.id} 
                      href={`/news/${recentArticle.id}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={recentArticle.image || "/All-2.jpg"}
                            alt={recentArticle.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {recentArticle.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {formatDate(recentArticle.createdAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Emergency Call Section */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/dr.jpg"
                    alt="Emergency Call"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-black/90" />
                  <div className="relative p-6 text-white h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3">Emergency Call</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Lorem Ipsum is simply dummy text of the printing typesetting industry beautiful worldlorem ipsum.
                    </p>
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categoriesWithCounts.map((category) => (
                    <Link 
                      key={category.name} 
                      href={`/news?category=${category.name}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
