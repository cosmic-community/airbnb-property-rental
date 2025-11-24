import Link from 'next/link'
import { Property } from '@/types'

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { metadata } = property;

  return (
    <Link href={`/properties/${property.slug}`} className="group">
      <div className="card">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={`${metadata.featured_image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={metadata.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="300"
            height="300"
          />
          
          {/* Badges */}
          {metadata.is_guest_favorite && (
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Guest favorite
            </div>
          )}
          {metadata.is_new && (
            <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              New
            </div>
          )}

          {/* Heart Icon */}
          <button 
            className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <svg className="w-6 h-6 text-gray-700 hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 line-clamp-1">
              {metadata.location}
            </h3>
            {metadata.rating && (
              <div className="flex items-center gap-1 flex-shrink-0">
                <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  {metadata.rating}
                </span>
              </div>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-1">
            {metadata.property_type.value}
          </p>

          <p className="text-gray-600 text-sm mb-2">
            {metadata.beds} bed{metadata.beds > 1 ? 's' : ''} · {metadata.bedrooms} bedroom{metadata.bedrooms > 1 ? 's' : ''} · {metadata.bathrooms} bath{metadata.bathrooms > 1 ? 's' : ''}
          </p>

          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-gray-900">
              ${metadata.price_per_night}
            </span>
            <span className="text-gray-600 text-sm">night</span>
          </div>
        </div>
      </div>
    </Link>
  )
}