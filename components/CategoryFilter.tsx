'use client'

import Link from 'next/link'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-6 overflow-x-auto pb-4 border-b border-gray-200 scrollbar-hide">
      <Link
        href="/"
        className={`flex flex-col items-center gap-2 min-w-fit px-4 py-2 transition-colors ${
          !activeCategory 
            ? 'border-b-2 border-gray-900 text-gray-900' 
            : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
        }`}
      >
        <span className="text-2xl">🏠</span>
        <span className="text-xs font-medium whitespace-nowrap">All</span>
      </Link>
      
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className={`flex flex-col items-center gap-2 min-w-fit px-4 py-2 transition-colors ${
            activeCategory === category.slug
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
          }`}
        >
          <span className="text-2xl">{category.metadata.icon || '🏠'}</span>
          <span className="text-xs font-medium whitespace-nowrap">
            {category.metadata.name}
          </span>
        </Link>
      ))}
    </div>
  )
}