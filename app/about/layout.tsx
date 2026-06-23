import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about YatraVerse. We are dedicated to providing meaningful spiritual and luxury journeys across India, blending rich heritage with unparalleled comfort.',
  openGraph: {
    title: 'About YatraVerse | Reimagining Travel Through Meaningful Journeys',
    description: 'Learn about YatraVerse. We are dedicated to providing meaningful spiritual and luxury journeys across India.',
    url: 'https://yatraverse.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
