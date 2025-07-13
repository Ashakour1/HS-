import Image from "next/image"
import Link from "next/link"
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

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl">
            Stay Informed <span className="text-[#4285F4]">About your Health</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Read our informative blog posts to learn more about the health and the medical industry
          </p>
        </div>
        <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-48">
                <Image
                  src={post.imageSrc || "/placeholder.svg"}
                  alt={post.imageAlt}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-3 left-3 bg-white/80 text-sm font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              <CardHeader className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Link href={post.link} passHref>
                  <Button variant="link" className="px-0 text-[#4285F4] hover:text-[#356dc9]">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
