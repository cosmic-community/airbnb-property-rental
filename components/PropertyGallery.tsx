'use client'

import { Property } from '@/types'
import { useState } from 'react'

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({ property }: PropertyGalleryProps) {
  const { metadata } = property;
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const allImages = [
    metadata.featured_image,
    ...(metadata.gallery || [])
  ];

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-black/80 backdrop-blur-sm z-10">
            <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setShowAllPhotos(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="max-w-[1120px] mx-auto px-6 py-8 space-y-4">
            {allImages.map((image, index) => (
              <img
                key={index}
                src={`${image.imgix_url}?w=1200&auto=format,compress`}
                alt={`${metadata.title} - Photo ${index + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden h-[400px]">
        {/* Main Image */}
        <div className="col-span-2 row-span-2">
          <img
            src={`${metadata.featured_image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={metadata.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gallery Images */}
        {metadata.gallery && metadata.gallery.slice(0, 4).map((image, index) => (
          <div key={index} className="col-span-1 row-span-1">
            <img
              src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={`${metadata.title} - Photo ${index + 2}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Show All Photos Button */}
      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-900 text-sm font-semibold transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Show all photos
      </button>
    </div>
  )
}