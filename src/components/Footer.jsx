import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-[#2A3C50] text-white">
      {/* Top Divider */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

      {/* Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/10 via-transparent to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Tiles Gallery logo"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />

              <h2 className="text-2xl font-bold tracking-tight text-white">
                Tiles Gallery
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
              Discover stunning tile designs for every space. Built for speed,
              style, and creativity.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Product</h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/all-tiles"
                  className="hover:text-white transition duration-200"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="hover:text-white transition duration-200"
                >
                  Latest Collection
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="hover:text-white transition duration-200"
                >
                  Room Visualizer
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Company</h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition duration-200"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition duration-200"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition duration-200"
                >
                  Terms
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition duration-200"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">
              Ready to get started?
            </h3>

            <p className="text-sm leading-relaxed text-gray-300">
              Join thousands of creatives using Tiles Gallery to bring their
              vision to life with premium tile collections.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full 
              bg-white text-[#2A3C50] text-sm font-semibold
              hover:bg-gray-200 transition-all duration-300 
              hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition duration-200"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
