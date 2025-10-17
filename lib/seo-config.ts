import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "DDM Peinture - Artisan Peintre Marne, Aube, Aisne, Ardennes depuis 2024",
  description: "DDM Peinture, artisan peintre spécialisé en peinture, enduit, papier peint et parquet depuis 2024. Service personnalisé dans la Marne (51), Aube (10), Aisne (02), Ardennes (08). Devis gratuit.",
  keywords: [
    "peintre Marne 51",
    "peinture Reims",
    "artisan peintre Aube 10",
    "peinture Troyes",
    "enduit décoratif Aisne 02",
    "papier peint Laon",
    "parquet Ardennes 08",
    "peinture Charleville-Mézières",
    "DDM Peinture",
    "peintre professionnel",
    "devis gratuit peinture",
    "micro-entreprise peinture",
    "revêtements muraux",
    "finitions peinture",
    "décoration intérieure",
    "peinture extérieure"
  ],
  author: "Damien de Magalhaes",
  siteUrl: "https://ddmpeinture.fr",
  siteName: "DDM Peinture - Artisan Peintre",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@ddmpeinture"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "DDM Peinture",
  "legalName": "DDM Peinture",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Damien de Magalhaes"
  },
  "foundingDate": "2024",
  "numberOfEmployees": "1",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Marne, Aube, Aisne, Ardennes",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33699374263",
    "contactType": "customer service",
    "email": "contact@ddmpeinture.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Marne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Aube"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Aisne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ardennes"
    }
  ],
  "serviceType": [
    "Peinture intérieure",
    "Peinture extérieure", 
    "Enduit décoratif",
    "Papier peint",
    "Parquet",
    "Revêtements"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Painting Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de peinture et décoration",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peinture Intérieure & Extérieure",
          "description": "Peinture de murs, plafonds, boiseries, façades avec finitions soignées"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Enduit & Papier Peint",
          "description": "Enduits décoratifs, crépis, pose de papier peint pour décoration murale"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Parquet & Revêtements",
          "description": "Pose et rénovation de parquet, revêtements de sols et murs"
        }
      }
    ]
  }
};
