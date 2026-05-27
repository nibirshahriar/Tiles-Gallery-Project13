import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://tiles-gallery-project13.vercel.app/data.json",
    {
      next: { revalidate: 60 },
    },
  );

  const photos = await res.json();

  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return (
      <div className="text-center py-20 text-2xl font-bold">Tile Not Found</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
     
        <div className="relative w-full aspect-square overflow-hidden rounded-3xl border border-gray-200 shadow-lg bg-white">
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            className="object-cover"
          />
        </div>

        
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              {photo.category}
            </p>

            <h1 className="text-4xl font-black text-gray-900 mt-2">
              {photo.title}
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {photo.description}
          </p>
 
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-black">
              ${photo.price}
            </span>

            <span className="text-gray-500">{photo.currency}</span>
          </div>
 
          <div className="space-y-3 border-t border-b border-gray-200 py-6">
            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Material</span>

              <span className="font-semibold text-gray-900">
                {photo.material}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Dimensions</span>

              <span className="font-semibold text-gray-900">
                {photo.dimensions}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Availability</span>

              <span
                className={`font-semibold ${
                  photo.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {photo.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
              {photo.category}
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
              {photo.material}
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
              Modern
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
              Premium
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
