import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageCard({ src, alt, width, height }: ImageCardProps) {
  return (
    <div className="image-card">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
