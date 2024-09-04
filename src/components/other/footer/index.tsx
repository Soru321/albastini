import { CopyrightIcon } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

import Container from '@/components/ui/other/container';
import { getFooterLinks } from '@/data/get-footer-links';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-primary py-16">
      <Container className="flex flex-col justify-between gap-4 md:flex-row md:gap-20">
        <Links />

        <div className="space-y-4">
          <Copyright />
          <SocialMediaHandles />
        </div>
      </Container>
    </footer>
  );
}

function Links() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  return (
    <div className="hidden flex-wrap justify-center gap-4 sm:flex md:justify-start md:gap-6">
      {getFooterLinks.map((link) => (
        <Link
          key={`footer-link-${link.id}`}
          href={link.href}
          className={cn(
            "whitespace-nowrap transition hover:text-light-3",
            pathname === link.href ? "text-light-3" : "text-light-2",
          )}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

function Copyright() {
  return (
    <p className="flex items-center justify-center gap-1 whitespace-nowrap text-light-2 md:justify-start">
      <CopyrightIcon className="size-4" /> {new Date().getFullYear()} By
      Download Albastini
    </p>
  );
}

function SocialMediaHandles() {
  return (
    <div className="flex justify-center gap-2 md:justify-end">
      <RiInstagramFill className="size-6 text-light-2 hover:text-light-3" />
      <FaFacebook className="size-6 text-light-2 hover:text-light-3" />
      <IoLogoWhatsapp className="size-6 text-light-2 hover:text-light-3" />
      <FaTelegram className="size-6 text-light-2 hover:text-light-3" />
      <FaYoutube className="size-6 text-light-2 hover:text-light-3" />
    </div>
  );
}
