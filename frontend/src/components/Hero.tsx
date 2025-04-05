import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GlobeIcon } from "@radix-ui/react-icons"; // Changed icon to something travel-related

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Curated
            </span>{" "}
            Travel
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Unique
            </span>{" "}
            Experiences
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Discover extraordinary destinations and immerse yourself in tailor-made
          adventures, cultural journeys, and rejuvenating wellness retreats.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="custom"><Button className="w-full md:w-1/3">Request Your Custom Itinerary</Button></a>

          {/* You might want to change this link to your contact or services page */}
          <a
            rel="noreferrer noopener"
            href="explore" // Replace with your actual link
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Explore Our Experiences
            <GlobeIcon className="ml-2 w-5 h-5" /> {/* Updated icon */}
          </a>
        </div>
      </div>

      {/* Hero cards sections - You'll need to update the content within HeroCards.js as well */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};