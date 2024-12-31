'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import logo from '../../public/logo.png';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'A propos', href: '/about' },
  { name: 'Portofolio', href: '/portfolio' },
  { name: 'Tarif', href: '/price' },
  { name: 'Contact', href: '/contact' },
];

const HeaderPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-nightBlue border-b-4 border-yellow-600">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button type="button" className="-m-1.5 p-1.5">
          <Image alt="" src={logo} width={32} height={32} className="h-8 w-auto rounded-full" />
        </button>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative w-20 text-center text-base/6 font-semibold text-yellow-600 group transition-all pb-3 ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-yellow-600 after:w-full' : ''}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-600 transition-all duration-300 group-hover:w-full group-focus-visible:w-full group-active:w-full">
                  <span className="absolute inset-0 animate-laser" />
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="test" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default HeaderPage;
