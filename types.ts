// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Property type literal
type PropertyType = 'entire_home' | 'private_room' | 'shared_room';

// Host interface
export interface Host extends CosmicObject {
  type: 'hosts';
  metadata: {
    name: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    join_date?: string;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    icon?: string;
    description?: string;
  };
}

// Property interface
export interface Property extends CosmicObject {
  type: 'properties';
  metadata: {
    title: string;
    description: string;
    location: string;
    price_per_night: number;
    beds: number;
    bedrooms: number;
    bathrooms: number;
    max_guests: number;
    rating?: string;
    property_type: {
      key: PropertyType;
      value: string;
    };
    featured_image: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    host: Host;
    categories?: Category[];
    amenities?: string[];
    is_guest_favorite?: boolean;
    is_new?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}