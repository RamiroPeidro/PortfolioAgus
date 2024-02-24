import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../assets/logo.svg'

const navigation = [
  { name: 'Agustina Tazón', href: '#que-hacemos' },
  { name: 'Work', href: '#beneficios' },
  { name: 'Linkedin', href: '#tarifas' },
]

export default function NavBar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);


  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header className={`sticky top-0 inset-x-0 z-50 ${hasScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div className="flex lg:flex-1">
    <a href="#" className="-m-1.5">
      <span className="sr-only">Your Company</span>
      <img
        className="h-8 w-auto"
        src={Logo}
        alt=""
      />
    </a>
  </div>
  <div className="flex lg:hidden">
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={handleMenuToggle}
    >
      <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open main menu"}</span>
      {mobileMenuOpen ? (
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  </div>
  <div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
      <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
        {item.name}
      </a>
    ))}
  </div>
</nav>
<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={handleMenuToggle}>
  <div className="fixed inset-0 z-50" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src={Logo}
          alt=""
        />
      </a>
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={handleMenuClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </Dialog.Panel>
</Dialog>
</header>
  );
}