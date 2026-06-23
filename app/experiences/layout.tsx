import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curated Experiences',
  description: 'Explore our curated collections of luxury experiences. From profound spiritual awakenings and royal heritage walks to gastronomic trails.',
  openGraph: {
    title: 'Curated Experiences | YatraVerse Luxury Travel',
    description: 'Explore our curated collections of luxury experiences. From profound spiritual awakenings and royal heritage walks to gastronomic trails.',
    url: 'https://yatraverse.com/experiences',
  },
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
