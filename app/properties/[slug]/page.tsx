import { getProperty, getProperties } from '@/lib/cosmic'
import { Property } from '@/types'
import { notFound } from 'next/navigation'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyGallery from '@/components/PropertyGallery'
import HostInfo from '@/components/HostInfo'
import PropertyAmenities from '@/components/PropertyAmenities'
import BookingCard from '@/components/BookingCard'

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const properties = await getProperties() as Property[];
  
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = await getProperty(slug) as Property;

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8 py-6">
        {/* Property Title */}
        <div className="mb-4">
          <h1 className="text-3xl font-semibold mb-2">
            {property.metadata.title}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            {property.metadata.rating && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{property.metadata.rating}</span>
              </span>
            )}
            <span className="text-gray-600">{property.metadata.location}</span>
          </div>
        </div>

        {/* Gallery */}
        <PropertyGallery property={property} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <PropertyDetails property={property} />
            
            {/* Host Info */}
            <div className="mt-12 pt-12 border-t">
              <HostInfo host={property.metadata.host} />
            </div>

            {/* Amenities */}
            <div className="mt-12 pt-12 border-t">
              <PropertyAmenities amenities={property.metadata.amenities || []} />
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingCard property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}