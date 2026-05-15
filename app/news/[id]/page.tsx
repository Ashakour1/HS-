"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Tag,
  Clock,
  Phone,
  ChevronRight,
  FileText,
} from "lucide-react"

interface NewsArticle {
  id: string
  title: string
  content: string
  excerpt?: string
  category?: string
  status: string
  authorId?: string
  author?: {
    id: string
    name: string
    username: string
  }
  views: number
  tags: string[]
  image?: string
  imagePublicId?: string
  createdAt: Date
  updatedAt: Date
}

const API_BASE = "https://cms-hospitalunisoso-production-3ec8.up.railway.app/api"

const formatDate = (dateString: string | Date) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

const initialOf = (text?: string) => (text || "N").trim()[0]?.toUpperCase() || "N"

const estimateReadingTime = (html: string) => {
  const plain = (html || "").replace(/<[^>]+>/g, " ")
  const words = plain.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 220))
  return `${minutes} min read`
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
        const response = await fetch(`${API_BASE}/news/${params.id}`)
        if (!response.ok) throw new Error("Failed to fetch article")
        const data = await response.json()
        setArticle(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    const fetchRecentArticles = async () => {
      try {
        const response = await fetch(`${API_BASE}/news`)
        if (!response.ok) return
        const data = await response.json()
        const publishedNews = data.filter(
          (a: NewsArticle) => a.status === "published",
        )
        const recent = publishedNews
          .filter((a: NewsArticle) => a.id !== params.id)
          .sort(
            (a: NewsArticle, b: NewsArticle) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          .slice(0, 4)
        setRecentArticles(recent)
        setAllArticles(publishedNews)
      } catch (err) {
        console.error("Failed to fetch recent articles:", err)
      }
    }

    if (params.id) {
      fetchArticle()
      fetchRecentArticles()
    }
  }, [params.id])

  const categoriesWithCounts = useMemo(() => {
    const counts = new Map<string, number>()
    allArticles.forEach((a) => {
      if (!a.category) return
      counts.set(a.category, (counts.get(a.category) || 0) + 1)
    })
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }, [allArticles])

  const readingTime = useMemo(
    () => (article ? estimateReadingTime(article.content) : "1 min read"),
    [article],
  )

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-blue-600" />
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
            <FileText className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Article not found
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {error || "The article you are looking for does not exist."}
          </p>
          <Link
            href="/news"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to news
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-5">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to news
          </Link>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="hidden items-center gap-1.5 text-xs text-gray-500 sm:flex"
          >
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
            <Link href="/news" className="hover:text-gray-900">
              News
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
            <span className="max-w-[200px] truncate text-gray-900">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Article column */}
          <article className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">
                    {article.category || "Health"}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(article.createdAt)}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {readingTime}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5" />
                    {article.views.toLocaleString()} views
                  </span>
                </div>

                <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
                  {article.title}
                </h1>

                {article.excerpt && (
                  <p className="mt-5 text-lg leading-relaxed text-gray-600">
                    {article.excerpt}
                  </p>
                )}

                {article.author && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                      {initialOf(article.author.name)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {article.author.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Published on {formatDate(article.createdAt)}
                      </p>
                    </div>
                  </div>
                )}
              </header>

              {/* Featured image — only if present */}
              {article.image && (
                <figure className="mb-10 overflow-hidden rounded-2xl bg-gray-100">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(min-width: 1024px) 768px, 100vw"
                    />
                  </div>
                </figure>
              )}

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-img:rounded-xl">
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content.replace(/\n/g, "<br>"),
                  }}
                />
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-10">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                    <Tag className="h-3.5 w-3.5" />
                    Tags
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <footer className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white px-5 py-4 sm:flex-row sm:items-center">
                <p className="text-xs text-gray-500">
                  Last updated {formatDate(article.updatedAt)}
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all news
                </Link>
              </footer>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6 lg:sticky lg:top-6"
            >
              {/* Recent posts */}
              <section className="rounded-2xl bg-white p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  Recent posts
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Latest stories from our team
                </p>

                <div className="mt-4 space-y-1">
                  {recentArticles.length === 0 && (
                    <p className="py-4 text-center text-xs text-gray-400">
                      No other posts yet.
                    </p>
                  )}
                  {recentArticles.map((post) => (
                    <Link
                      key={post.id}
                      href={`/news/${post.id}`}
                      className="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-gray-50"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="56px"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-base font-semibold text-blue-700">
                            {initialOf(post.title)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="line-clamp-2 text-sm font-medium leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
                          {post.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500">
                          {formatDate(post.createdAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Emergency call */}
              <section className="overflow-hidden rounded-2xl bg-blue-600 p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-100">
                  <Phone className="h-3.5 w-3.5" />
                  24/7 helpline
                </div>
                <h3 className="mt-2 text-lg font-semibold">
                  Need urgent care?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/90">
                  Speak with our emergency desk anytime. We're here whenever
                  you need us.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full rounded-full bg-white text-blue-700 shadow-none hover:bg-blue-50"
                >
                  <Link href="tel:+0000000000">
                    <Phone className="h-4 w-4" />
                    Call us now
                  </Link>
                </Button>
              </section>

              {/* Categories */}
              {categoriesWithCounts.length > 0 && (
                <section className="rounded-2xl bg-white p-5">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Categories
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Browse by topic
                  </p>

                  <ul className="mt-4 space-y-1">
                    {categoriesWithCounts.map((category) => (
                      <li key={category.name}>
                        <Link
                          href={`/news?category=${encodeURIComponent(category.name)}`}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          <span className="capitalize">{category.name}</span>
                          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-700">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  )
}
