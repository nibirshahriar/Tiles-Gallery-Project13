import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/banner.png')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/20">
            Premium Tiles Collection
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Discover Your
            <span className="block text-gray-300">Perfect Aesthetic</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Explore modern, elegant, and stylish tile collections designed to
            transform your spaces into timeless masterpieces.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/all-tiles"
              className="px-8 py-3 rounded-full bg-white text-black text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
