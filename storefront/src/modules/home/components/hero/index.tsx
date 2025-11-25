"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const heroImages = [
  {
    url: "https://bucket-production-95b8.up.railway.app/medusa-media/iphone17-1-01KARY2DKJPX2TV5TK58YZ7RJD.jpeg",
    alt: "Product image 1",
    className: "col-span-2 row-span-2",
  },
  {
    url: "https://bucket-production-95b8.up.railway.app/medusa-media/iphone17-1-01KARY2DKJPX2TV5TK58YZ7RJD.jpeg",
    alt: "Product image 2",
    className: "col-span-1 row-span-1",
  },
  {
    url: "https://bucket-production-95b8.up.railway.app/medusa-media/iphone17-1-01KARY2DKJPX2TV5TK58YZ7RJD.jpeg",
    alt: "Product image 3",
    className: "col-span-1 row-span-1",
  },
  {
    url: "https://bucket-production-95b8.up.railway.app/medusa-media/iphone17-1-01KARY2DKJPX2TV5TK58YZ7RJD.jpeg",
    alt: "Product image 4",
    className: "col-span-1 row-span-1",
  },
  {
    url: "https://bucket-production-95b8.up.railway.app/medusa-media/iphone17-1-01KARY2DKJPX2TV5TK58YZ7RJD.jpeg",
    alt: "Product image 5",
    className: "col-span-1 row-span-1",
  },
]

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-l from-slate-300 to-slate-500 from-gray-50 to-white border-b border-ui-border-base">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900"
            >
              Welcome to{" "} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-slate-900 to-slate-500">
                WellFit Mobile
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-xl"
            >
              Discover the latest mobile technology and accessories. 
              Experience innovation, quality, and style in every product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 h-auto"
                asChild
              >
                <a href="/store">Shop Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 h-auto"
                asChild
              >
                <a href="/products">Explore Products</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-3 lg:gap-4 aspect-square max-w-2xl mx-auto">
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={cn(
                    "relative overflow-hidden rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",
                    image.className
                  )}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
