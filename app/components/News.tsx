"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, easeOut } from "framer-motion"
import { ArrowRight, ArrowUpRight, Eye } from "lucide-react"
import { useEffect, useState } from "react"

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

export default function News() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  }

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  }

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center text-red-600">
            <p>Error loading news: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-6 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl text-heading">
            Stay Informed <span className="text-accent">About your Health</span>
          </h2>
          <p className="max-w-[700px] text-body md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
            Read our informative blog posts to learn more about the health and the medical industry
          </p>
        </motion.div>
        <motion.div 
          className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {newsArticles.length > 0 ? (
            newsArticles.map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Link
                  href={`/news/${article.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 hover:bg-slate-50"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-slate-100">
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
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                        {article.category || "Health"}
                      </span>
                      <span className="text-body/60">·</span>
                      <time className="text-body/70">{formatDate(article.createdAt)}</time>
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-heading transition-colors duration-300 group-hover:text-accent">
                      {article.title}
                    </h3>

                    <p className="line-clamp-2 text-sm leading-relaxed text-body/80">
                      {article.excerpt || article.content.substring(0, 140) + "..."}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                      <div className="flex items-center gap-1.5 text-body/60">
                        <Eye className="h-4 w-4" />
                        <span>{article.views} views</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-medium text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                        Read more
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-body text-lg">No news articles available at the moment.</p>
            </div>
          )}
        </motion.div>

        {/* View All News Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent/90"
          >
            View all news articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
