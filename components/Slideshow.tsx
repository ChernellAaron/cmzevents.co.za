"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/event2.jpg",
  "/event5.jpg",
  "/event6.jpg",
  "/event7.jpg",
  "/event8.jpg",
  "/event10.jpg",
  "/event11.jpg",
  "/event12.jpg",
  "/event13.jpg",
  "/event14.jpg",
  "/event15.jpg",
  "/event16.jpg",
  "/event17.jpg",
  "/event18.jpg",
  "/event19.jpg",
  "/event22.jpg",
  "/event24.jpg",
  "/event25.jpg",
  "/event26.jpg",
  "/event27.jpg",
  "/event28.jpg",
  "/event29.jpg",
]

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative w-full" style={{ paddingTop: "75%" }}>
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Event ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
