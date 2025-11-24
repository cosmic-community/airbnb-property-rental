import { Property } from '@/types'

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const { metadata } = property;

  return (
    <div>
      {/* Property Type & Guests */}
      <div className="pb-6 border-b">
        <h2 className="text-2xl font-semibold mb-2">
          {metadata.property_type.value} hosted by {metadata.host.metadata.name}
        </h2>
        <div className="flex items-center gap-2 text-gray-600">
          <span>{metadata.max_guests} guest{metadata.max_guests > 1 ? 's' : ''}</span>
          <span>·</span>
          <span>{metadata.bedrooms} bedroom{metadata.bedrooms > 1 ? 's' : ''}</span>
          <span>·</span>
          <span>{metadata.beds} bed{metadata.beds > 1 ? 's' : ''}</span>
          <span>·</span>
          <span>{metadata.bathrooms} bath{metadata.bathrooms > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Description */}
      <div className="py-8 border-b">
        <p className="text-gray-700 leading-relaxed">
          {metadata.description}
        </p>
      </div>

      {/* Categories */}
      {metadata.categories && metadata.categories.length > 0 && (
        <div className="py-8 border-b">
          <h3 className="text-xl font-semibold mb-4">Property Features</h3>
          <div className="flex flex-wrap gap-3">
            {metadata.categories.map((category) => (
              <div 
                key={category.id}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full"
              >
                <span className="text-xl">{category.metadata.icon}</span>
                <span className="text-sm font-medium">{category.metadata.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}