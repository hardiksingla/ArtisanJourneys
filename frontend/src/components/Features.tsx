import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Personalized Itinerary Design",
    description:
      "Our expert travel curators work closely with you to design a unique itinerary that perfectly matches your interests, budget, and travel style.",
    image: image4,
  },
  {
    title: "Exclusive Access & Insider Knowledge",
    description:
      "Benefit from our extensive network of local partners and insider knowledge to access hidden gems and authentic experiences beyond the typical tourist spots.",
    image: image3,
  },
  {
    title: "Seamless & Stress-Free Planning",
    description:
      "From initial consultation to on-the-ground support, we handle all the details, so you can relax and focus on enjoying your curated journey.",
    image: image,
  },
];

const featureList: string[] = [
  "Adventure Travel",
  "Cultural Immersion Trips",
  "Wellness Retreats",
  "Custom Itineraries",
  "Expert Guidance",
  "Unique Activities",
  "Hand-picked Accommodations",
  "24/7 Support",
  "Sustainable Options",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Explore the{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Benefits of Our Services
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};