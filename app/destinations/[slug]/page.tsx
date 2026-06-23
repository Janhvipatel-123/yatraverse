import { notFound } from 'next/navigation';
import { destinations } from '../../../lib/destinations';
import DestinationClient from './DestinationClient';

export function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DestinationPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  return <DestinationClient destination={destination} />;
}
