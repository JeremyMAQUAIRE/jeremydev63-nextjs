import React from 'react';
import { Facebook, GitHub, Linkedin } from 'react-feather';

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100094957867296',
    icon: Facebook,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/JeremyMAQUAIRE',
    icon: GitHub,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9my-maquaire/',
    icon: Linkedin,
  },
];

const FooterPage = () => {
  return (
    <footer className="bg-nightBlue border-t-4 border-yellow-600 ">
      <div className="flex flex-wrap-reverse items-center justify-between mx-auto max-w-7xl">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="py-4 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
          &copy; 2025 Jérémy DEV 63, tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
