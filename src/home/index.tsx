import { AboutPreview } from "./AboutPreview";
import { FeaturedProducts } from "./FeaturedProducts";

export function HomePage() {
  return (
    <div className="flex-grow">
      <FeaturedProducts />
      <AboutPreview />
    </div>
  );
}
