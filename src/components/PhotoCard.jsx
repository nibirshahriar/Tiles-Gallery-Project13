import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border border-gray-200 rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <Image
          src={photo.image}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />

        <Chip className="absolute top-3 right-3 capitalize bg-white/90 backdrop-blur-md text-black font-medium">
          {photo.category}
        </Chip>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {photo.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {photo.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-xl font-bold text-gray-900">${photo.price}</p>

          <p className="text-xs text-gray-500">{photo.dimensions}</p>
        </div>

        <div className="flex items-center gap-2 text-red-500">
          <FaHeart />
          <span className="text-sm text-gray-700">
            {photo.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      <Link href={`/all-tiles/${photo.id}`} className="mt-5 block">
        <Button
          className="w-full bg-[#2A3C50] text-white font-medium hover:opacity-90"
          radius="lg"
        >
          <FaShoppingCart />
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
