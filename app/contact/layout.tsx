import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with YatraVerse. Connect with our luxury travel advisors to start planning your bespoke, deeply personal Indian experience.',
  openGraph: {
    title: 'Contact YatraVerse | Begin Your Journey',
    description: 'Get in touch with YatraVerse. Connect with our luxury travel advisors to start planning your bespoke, deeply personal Indian experience.',
    url: 'https://yatraverse.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
