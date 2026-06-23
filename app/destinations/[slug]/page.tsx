import { notFound } from 'next/navigation';
import { destinations } from '../../../lib/destinations';
import DestinationClient from './DestinationClient';

import { Metadata } from 'next';

export function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${destination.name} | YatraVerse Luxury Travel`,
    description: destination.description || destination.tagline,
    openGraph: {
      title: `${destination.name} | ${destination.state} | YatraVerse`,
      description: destination.description || destination.tagline,
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
      url: `https://yatraverse.com/destinations/${destination.slug}`,
    },
  };
}

export default async function DestinationPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  return <DestinationClient destination={destination} />;
}
