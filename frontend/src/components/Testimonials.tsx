import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://via.placeholder.com/150/77b1c9/FFFFFF?Text=LM", // Replace with real user image
    name: "Sarah M.",
    userName: "@sarah_travels",
    comment: "My cultural immersion trip to Kyoto was absolutely life-changing. The itinerary was perfectly crafted, and the local guides were exceptional. I wouldn't have experienced such authentic moments without them!",
  },
  {
    image: "https://via.placeholder.com/150/a1887f/FFFFFF?Text=DL", // Replace with real user image
    name: "David L.",
    userName: "@david_adventures",
    comment: "The adventure trek in Patagonia exceeded all my expectations. The planning was meticulous, the accommodations were fantastic, and the support team was always there when needed. A truly unforgettable experience!",
  },
  {
    image: "https://via.placeholder.com/150/c6978c/FFFFFF?Text=EP", // Replace with real user image
    name: "Emily P.",
    userName: "@wellness_seeker",
    comment: "The wellness retreat in Bali was exactly what I needed. The itinerary was balanced, the instructors were amazing, and I left feeling refreshed and rejuvenated. Highly recommend!",
  },
  {
    image: "https://via.placeholder.com/150/90caf9/FFFFFF?Text=TB", // Replace with real user image
    name: "Thomas B.",
    userName: "@thomas_explores",
    comment: "From start to finish, the team made planning our custom trip to Italy so easy. They listened to our interests and created a perfect blend of sightseeing and unique local experiences. We can't wait to book our next adventure!",
  },
  {
    image: "https://via.placeholder.com/150/f48fb1/FFFFFF?Text=AL", // Replace with real user image
    name: "Alice L.",
    userName: "@alice_culture",
    comment: "I was looking for a truly immersive cultural experience in Morocco, and that's exactly what I got. The itinerary was thoughtfully designed, and I appreciated the opportunity to connect with the local people and learn about their traditions.",
  },
  {
    image: "https://via.placeholder.com/150/4dd0e1/FFFFFF?Text=JR", // Replace with real user image
    name: "James R.",
    userName: "@james_the_hiker",
    comment: "The guided hiking tour in the Swiss Alps was incredible. The scenery was stunning, and our guide was knowledgeable and made sure everyone was comfortable. A fantastic adventure!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        What Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Satisfied Travelers Say
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Read about the unforgettable experiences our clients have had with our
        curated travel planning services.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};