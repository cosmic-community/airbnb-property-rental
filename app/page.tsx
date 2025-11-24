import { getProperties, getCategories } from '@/lib/cosmic'
import { Property, Category } from '@/types'
import PropertyGrid from '@/components/PropertyGrid'
import CategoryFilter from '@/components/CategoryFilter'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const properties = await getProperties() as Property[];
  const categories = await getCategories() as Category[];

  // Sort properties: guest favorites first, then new, then by rating
  const sortedProperties = [...properties].sort((a, b) => {
    if (a.metadata.is_guest_favorite && !b.metadata.is_guest_favorite) return -1;
    if (!a.metadata.is_guest_favorite && b.metadata.is_guest_favorite) return 1;
    if (a.metadata.is_new && !b.metadata.is_new) return -1;
    if (!a.metadata.is_new && b.metadata.is_new) return 1;
    
    const ratingA = parseFloat(a.metadata.rating || '0');
    const ratingB = parseFloat(b.metadata.rating || '0');
    return ratingB - ratingA;
  });

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="max-w-[1760px] mx-auto px-6 lg:px-20">
        <CategoryFilter categories={categories} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">
            Explore amazing stays
          </h2>
          <PropertyGrid properties={sortedProperties} />
        </div>
      </div>
    </div>
  )
}