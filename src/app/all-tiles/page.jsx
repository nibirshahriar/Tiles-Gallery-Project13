import PhotoCard from "@/components/PhotoCard";

const AllTilesPage = async ({ searchParams }) => {
  const searchParamsData = await searchParams;

  const search = searchParamsData.search || "";

  const res = await fetch(
    "https://tiles-gallery-project13.vercel.app/data.json",
    {
      next: { revalidate: 60 },
    },
  );

  const photos = await res.json();

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            All Tiles
          </h2>

          <p className="text-gray-500 mt-1">
            Explore our premium tiles collection
          </p>
        </div>

        <form className="flex items-center gap-3 w-full lg:w-auto">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search tiles..."
            className="w-full lg:w-80 border border-gray-300 bg-white rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-black shadow-sm"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 transition shadow-md"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-700">No tiles found</h3>

          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllTilesPage;
