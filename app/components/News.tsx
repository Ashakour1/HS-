"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, easeOut } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export default function News() {
  const blogPosts = [
    {
      id: 1,
      imageSrc: "/All-2.jpg",
      imageAlt: "Doctors looking at an X-ray",
      category: "Radiology",
      date: "Jul 6, 2025",
      title: "Empower Yourself and Your Health",
      description: "Stay fit with our state-of-the-art gym equipment & personal training sessions.",
      link: "#",
    },
    {
      id: 2,
      imageSrc: "/All-3.jpg",
      imageAlt: "Doctors discussing medical images",
      category: "Radiology",
      date: "Jul 6, 2025",
      title: "Empower Yourself and Your Health",
      description: "Stay fit with our state-of-the-art gym equipment & personal training sessions.",
      link: "#",
    },
    {
      id: 3,
      imageSrc: "/All-4.jpg",
      imageAlt: "Medical professionals reviewing patient data",
      category: "Radiology",
      date: "Jul 6, 2025",
      title: "Empower Yourself and Your Health",
      description: "Stay fit with our state-of-the-art gym equipment & personal training sessions.",
      link: "#",
    },
  ]

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

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl">
            Stay Informed <span className="text-[#4285F4]">About your Health</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="group p-0 flex flex-col rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50 hover:from-white hover:to-blue-50/30">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={post.imageSrc || "/placeholder.svg"}
                    alt={post.imageAlt}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-sm font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm text-gray-800 shadow-sm border border-gray-200/50">
                    {post.category}
                  </span>
                  <div className="absolute bottom-4 right-4 bg-white/90 text-xs font-medium px-2.5 py-1.5 rounded-lg backdrop-blur-sm text-gray-600 shadow-sm">
                    {post.date}
                  </div>
                </div>
                <CardHeader className="space-y-3 px-6 pt-6 pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0 flex-grow flex items-end">
                  <Link href={post.link} passHref>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium py-2.5 rounded-xl group-hover:shadow-md"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
