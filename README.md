# 🏠 Airbnb Clone - Property Rental Platform

![App Preview](https://imgix.cosmicjs.com/07590500-c970-11f0-b3ac-47cb4fae901b-photo-1605276374104-dee2a0ed3cd6-1764014344222.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern property rental marketplace built with Next.js 16 and Cosmic CMS. Browse luxury homes, modern apartments, and beachfront properties with an intuitive, Airbnb-inspired interface.

## ✨ Features

- 🏡 Dynamic property listings with detailed information
- 🏷️ Category-based filtering (Beachfront, Luxury, Modern Design, etc.)
- ⭐ Guest favorite properties with ratings
- 👤 Professional host profiles with bios and photos
- 🖼️ Beautiful image galleries with imgix optimization
- 📱 Fully responsive design for all devices
- 🔍 Search and filter capabilities
- 🎨 Clean, modern UI inspired by Airbnb

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6924b824333296f4d0366e79&clone_repository=6924ba11333296f4d0366ee5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Build an Airbnb clone. Make it exactly like the screenshot.

### Code Generation Prompt

> Based on the content model I created for "Build an Airbnb clone. Make it exactly like the screenshot.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React** - UI component library
- **imgix** - Image optimization and delivery

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the provided content model

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Properties with Categories and Host

```typescript
const response = await cosmic.objects
  .find({ type: 'properties' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const properties = response.objects as Property[]
```

### Fetching Properties by Category

```typescript
const response = await cosmic.objects
  .find({ 
    type: 'properties',
    'metadata.categories': categoryId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Property

```typescript
const response = await cosmic.objects
  .findOne({ type: 'properties', slug })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const property = response.object as Property
```

## 🎨 Cosmic CMS Integration

This application uses the following Cosmic object types:

### Properties
- Title, Description, Location
- Price per night, Beds, Bedrooms, Bathrooms
- Max guests, Rating
- Property type (Entire home, Private room, Shared room)
- Featured image and gallery
- Connected to Host and Categories
- Amenities (WiFi, Kitchen, Parking, etc.)
- Guest favorite and New property flags

### Categories
- Name, Icon (emoji), Description
- Used for filtering properties

### Hosts
- Name, Profile photo, Bio, Join date
- Connected to properties they manage

## 🌐 Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Add your Cosmic environment variables
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Add environment variables in Netlify dashboard
4. Deploy!

### Environment Variables for Deployment

Make sure to add these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

---

Built with [Cosmic](https://www.cosmicjs.com) - The Headless CMS for modern applications

<!-- README_END -->