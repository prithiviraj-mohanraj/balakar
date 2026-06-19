// SEO and Schema configurations for Balakar Sparklers

export const SITE_URL = "https://balakarsparklers.com";
export const COMPANY_NAME = "Balakar Sparklers Factory";
export const BRAND_NAME = "Balakar Sparklers";
export const TRADEMARK = "Phoenix Brand";
export const CERTIFICATION = "Green Fireworks Certified (CSIR-NEERI License NE/TN/201-01/2019)";
export const EMAIL = "balakarsparklersmrsj@gmail.com";
export const PHONES = ["+91 9443868706", "+91 8248268349", "+91 8072431283"];

export const DEFAULT_SEO = {
  title: "Balakar Sparklers | Premium Quality Sparklers Manufacturer Sivakasi",
  description: "Official manufacturer of Balakar Sparklers & Phoenix Brand sparklers in Sivakasi. Green Fireworks Certified. Wholesale, bulk orders, and factory direct pricing.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: "Balakar Sparklers | Premium Quality Sparklers Manufacturer Sivakasi",
    description: "Buy premium sparklers direct from the Sivakasi factory. High quality, green certified, wholesale, and bulk orders available.",
    images: [
      {
        url: `${SITE_URL}/images/branding/Screenshot 2026-06-19 112211.png`,
        width: 1200,
        height: 630,
        alt: "Balakar Sparklers Banner",
      },
    ],
  },
  twitter: {
    handle: "@balakarsparklers",
    site: "@balakarsparklers",
    cardType: "summary_large_image",
  },
};

// 1. Organization Schema
export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_NAME,
    "alternateName": BRAND_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/branding/balakar-logo.png`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9443868706",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta", "hi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8248268349",
        "contactType": "sales",
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8072431283",
        "contactType": "customer support",
        "areaServed": "IN"
      }
    ]
  };
};

// 2. Local Business Schema
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    "name": COMPANY_NAME,
    "image": `${SITE_URL}/images/branding/Screenshot 2026-06-19 112211.png`,
    "telephone": "+91-9443868706",
    "email": EMAIL,
    "url": SITE_URL,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alamarathupatti",
      "addressLocality": "Sivakasi",
      "addressRegion": "Tamil Nadu",
      "postalCode": "626130",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.4208",
      "longitude": "77.8183"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
};

// 3. Product Schema
export const getProductSchema = (
  name: string,
  imagePath: string,
  description: string,
  sku: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": `${SITE_URL}${imagePath}`,
    "description": description,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": BRAND_NAME
    },
    "manufacturer": {
      "@type": "Organization",
      "name": COMPANY_NAME
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "10",
      "highPrice": "500",
      "offerCount": "1",
      "priceRange": "Wholesale Direct Pricing",
      "seller": {
        "@type": "Organization",
        "name": COMPANY_NAME
      }
    }
  };
};

// 4. FAQ Schema
export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// 5. Breadcrumb Schema
export interface BreadcrumbItem {
  name: string;
  item: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`
    }))
  };
};
