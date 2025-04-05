import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "1. Tell Us Your Preferences",
    description:
      "Share your travel style, interests (adventure, culture, wellness), desired destinations, and any specific requirements.",
  },
  {
    icon: <MapIcon />,
    title: "2. We Curate Your Unique Itinerary",
    description:
      "Our expert travel curators craft a personalized itinerary filled with unique experiences, hand-picked accommodations, and local insights.",
  },
  {
    icon: <PlaneIcon />,
    title: "3. Review and Refine Your Plan",
    description:
      "We present you with the proposed itinerary for your feedback. You can review, suggest changes, and fine-tune it until it's perfect for you.",
  },
  {
    icon: <GiftIcon />,
    title: "4. Embark on Your Unforgettable Journey",
    description:
      "Once you're satisfied, we handle all the bookings and logistics, ensuring a seamless and stress-free travel experience from start to finish.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Your Journey to Unique Experiences
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover how easy it is to plan your personalized and unforgettable
        travel adventure with our curated services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};