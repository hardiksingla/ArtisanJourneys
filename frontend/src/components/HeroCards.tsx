import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Adventure Experience */}
      <Card className="absolute w-[340px] -top-[40px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-orange-200 text-orange-700 rounded-full p-2">
            {/* Placeholder for Adventure Icon */}
            <LightBulbIcon />
          </div>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Thrilling Treks</CardTitle>
            <CardDescription>Patagonia Expedition</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Embark on an unforgettable journey through the breathtaking landscapes
          of Patagonia. Expert-led treks and stunning views await.
        </CardContent>
      </Card>

      {/* Cultural Immersion */}
      <Card className="absolute right-[20px] top-2 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <CardTitle className="text-center">Kyoto Traditions</CardTitle>
          <CardDescription className="font-normal text-primary">
            Immersive Cultural Journey
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Discover the ancient temples, serene gardens, and vibrant traditions
            of Kyoto. Experience authentic tea ceremonies and local crafts.
          </p>
        </CardContent>

        <CardFooter>
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </CardFooter>
      </Card>

      {/* Wellness Retreat */}
      <Card className="absolute top-[200px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Rejuvenate in Bali
            {/* <Badge variant="secondary" className="text-sm text-primary">
              Popular
            </Badge> */}
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">7</span>
            <span className="text-muted-foreground"> Days</span>
          </div>

          <CardDescription>
            Indulge in yoga, meditation, and spa treatments amidst the tranquil
            beauty of Bali.
          </CardDescription>
        </CardHeader>

        {/* <CardContent>
          <Button className="w-full">Explore Retreat</Button>
        </CardContent> */}

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Daily Yoga & Meditation", "Spa Treatments", "Healthy Cuisine"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Curated Itinerary Example */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-blue-200 text-blue-700 rounded-2xl">
            {/* Placeholder for Planning Icon */}
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Personalized Planning</CardTitle>
            <CardDescription className="text-md mt-2">
              Let our experts craft a unique itinerary tailored to your interests
              and preferences.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};