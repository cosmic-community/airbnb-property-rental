interface PropertyAmenitiesProps {
  amenities: string[];
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  // Amenity icons mapping
  const amenityIcons: Record<string, string> = {
    'WiFi': '📶',
    'Kitchen': '🍳',
    'Parking': '🚗',
    'Pool': '🏊',
    'Hot tub': '🛁',
    'Air conditioning': '❄️',
    'Workspace': '💼',
    'TV': '📺',
    'Washer': '🧺',
    'Dryer': '👕',
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">What this place offers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-4 py-3">
            <span className="text-2xl">{amenityIcons[amenity] || '✓'}</span>
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}