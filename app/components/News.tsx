"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, easeOut } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, Eye } from "lucide-react"
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
        const response = await fetch('https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/news')
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
                <Link href={`/news/${article.id}`} passHref>
                  <Card className="group p-0 flex flex-col rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-slate-50/50 hover:from-white hover:to-accent/5 cursor-pointer hover:-translate-y-2">
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={article.image || "/All-2.jpg"}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-white/90 text-sm font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm text-heading shadow-sm border border-slate-200/50">
                        {article.category || "Health"}
                      </span>
                      <div className="absolute bottom-4 right-4 bg-white/90 text-xs font-medium px-2.5 py-1.5 rounded-lg backdrop-blur-sm text-body shadow-sm">
                        {formatDate(article.createdAt)}
                      </div>
                    </div>
                    <CardHeader className="space-y-3 px-6 pt-6 pb-4">
                      <CardTitle className="text-xl font-bold text-heading leading-tight group-hover:text-accent transition-colors duration-300">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base text-body leading-relaxed">
                        {article.excerpt || article.content.substring(0, 120) + "..."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-0 flex-grow flex items-end">
                      <div className="w-full flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views} views
                        </div>
                        <Button 
                          variant="outline" 
                          className="border-accent/20 text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 font-medium py-2.5 rounded-xl group-hover:shadow-md"
                        >
                          Read More
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-body text-lg">No news articles available at the moment.</p>
            </div>
          )}
        </motion.div>
        
        {/* View All News Button */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
          <Link 
            href="/news"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-primary text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10 flex items-center gap-3">
              View All News Articles
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
