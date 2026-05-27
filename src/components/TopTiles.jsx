import PhotoCard from "./PhotoCard";

const TopTiles = async () => {
  const res = await fetch(
    "https://tiles-gallery-project13.vercel.app/data.json",
  );
  const photos = await res.json();
  const topPhotos = photos.slice(0, 4);

  //   console.log(topPhotos);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold my-6">Top Tiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopTiles;
