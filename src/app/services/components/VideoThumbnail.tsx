"use client";
import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function VideoThumbnail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative group mx-auto">
      {/* Thumbnail Image */}
      <Image
        src="/assets/images/banner/2.jpg" // Replace with your actual image path
        width={1000}
        height={400}
        alt="Video Thumbnail"
        className="rounded-lg h-[400px] object-cover w-full"
      />

      {/* Play Button (Appears on Hover) */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <PlayCircle className="w-20 h-20 text-[#FF3811] bg-white/30 rounded-full p-2" />
      </button>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg w-[80%] max-w-[800px]">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-[#FF3811] hover:text-[#f94d4b] text-4xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/P7fi4hP_y80?si=66YhRaP5IozE52An"
              title="Car Doctor"
              frameBorder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
