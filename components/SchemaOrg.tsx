import { siteConfig } from '@/lib/content';

interface SchemaOrgProps {
  type: 'Organization' | 'Article' | 'FAQPage' | 'WebPage' | 'DefinedTerm';
  data?: Record<string, unknown>;
}

export default function SchemaOrg({ type, data = {} }: SchemaOrgProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  const organizationSchema = {
    ...baseSchema,
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.linkedIn],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'customer service',
    },
  };

  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return organizationSchema;
      case 'Article':
        return {
          ...baseSchema,
          '@type': 'Article',
          publisher: organizationSchema,
          ...data,
        };
      case 'FAQPage':
        return {
          ...baseSchema,
          '@type': 'FAQPage',
          ...data,
        };
      case 'DefinedTerm':
        return {
          ...baseSchema,
          '@type': 'DefinedTerm',
          ...data,
        };
      default:
        return {
          ...baseSchema,
          ...data,
        };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
