import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Travel Guide',
  description: 'Meet the YatraVerse AI Guide. Your personal spiritual and cultural travel companion to help you plan your dream journey to India.',
  openGraph: {
    title: 'AI Travel Guide | YatraVerse',
    description: 'Meet the YatraVerse AI Guide. Your personal spiritual and cultural travel companion to help you plan your dream journey to India.',
    url: 'https://yatraverse.com/ai-guide',
  },
};

export default function AIGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
