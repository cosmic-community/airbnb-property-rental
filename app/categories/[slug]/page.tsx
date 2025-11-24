import { getCategories, getPropertiesByCategory } from '@/lib/cosmic'
import { Property, Category } from '@/types'
import { notFound } from 'next/navigation'
import PropertyGrid from '@/components/PropertyGrid'
import CategoryFilter from '@/components/CategoryFilter'

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories() as Category[];
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = await getCategories() as Category[];
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  const properties = await getPropertiesByCategory(category.id) as Property[];

  return (
    <div className="min-h-screen">
      <div className="max-w-[1760px] mx-auto px-6 lg:px-20 py-8">
        <CategoryFilter categories={categories} activeCategory={slug} />
        
        <div className="mt-8">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">
              {category.metadata.icon} {category.metadata.name}
            </h1>
            <p className="text-gray-600">
              {category.metadata.description}
            </p>
          </div>
          
          {properties.length > 0 ? (
            <PropertyGrid properties={properties} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No properties found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}