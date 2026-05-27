import ReactFastMarquee from "react-fast-marquee";

const MarqueeBanner = async () => {
  const res = await fetch(
    "https://tiles-gallery-project13.vercel.app/data.json",
    {
      next: { revalidate: 60 },
    },
  );

  const photos = await res.json();

  return (
    <div className="overflow-hidden bg-[#2A3C50] py-3 text-white">
      <ReactFastMarquee speed={40}>
        <div className="flex gap-10 whitespace-nowrap text-sm font-medium">
          {photos.map((photo) => (
            <div key={photo.id}>
              ✨ New Arrivals: {photo.title}
              &nbsp;&nbsp;|&nbsp;&nbsp; Weekly Feature: Modern Geometric
              Patterns &nbsp;&nbsp;|&nbsp;&nbsp; Join the Community
            </div>
          ))}
        </div>
      </ReactFastMarquee>
    </div>
  );
};

export default MarqueeBanner;
