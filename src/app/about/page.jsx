
const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900">
          About Tiles Gallery
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
          Tiles Gallery is your destination for discovering premium-quality
          tiles designed to transform homes, offices, and commercial spaces.
          From elegant marble finishes to modern geometric patterns, we bring
          together style, durability, and innovation.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src="/bed.jpg"
            alt="Tiles Collection"
            className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Mission</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to help customers find the perfect tile solutions for
            every project. We carefully curate collections that combine timeless
            aesthetics with exceptional quality, ensuring every space looks
            beautiful and lasts for years.
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <h3 className="font-semibold text-lg">Premium Quality</h3>
              <p className="text-gray-500 mt-1">
                Carefully selected materials for long-lasting durability.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <h3 className="font-semibold text-lg">Modern Designs</h3>
              <p className="text-gray-500 mt-1">
                Contemporary styles that suit every interior and exterior.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <h3 className="font-semibold text-lg">Trusted Collection</h3>
              <p className="text-gray-500 mt-1">
                A diverse gallery of tiles loved by homeowners and designers.
              </p>
            </div>
          </div>
        </div>
      </div>
     
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
          <h3 className="text-3xl font-black text-[#2A3C50]">15+</h3>
          <p className="text-gray-500 mt-2">Tile Collections</p>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
          <h3 className="text-3xl font-black text-[#2A3C50]">500+</h3>
          <p className="text-gray-500 mt-2">Happy Customers</p>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
          <h3 className="text-3xl font-black text-[#2A3C50]">10+</h3>
          <p className="text-gray-500 mt-2">Categories</p>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
          <h3 className="text-3xl font-black text-[#2A3C50]">99%</h3>
          <p className="text-gray-500 mt-2">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
