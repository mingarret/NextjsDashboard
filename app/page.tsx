import ImageCard from '@/app/ui/ImageCard';

export default function HomePage() {
  return (
    <div>
      <h1>Galería</h1>
      <ImageCard
        src="/images/example.jpg"
        alt="Ejemplo de imagen"
        width={500}
        height={300}
      />
    </div>
  );
}
