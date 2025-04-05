import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Our Curated Travel Planning
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                [Your Agency Name] specializes in crafting unique and
                personalized travel experiences that go beyond the typical
                tourist trail. We focus on creating unforgettable journeys centered
                around your specific interests, whether it's adventure travel to
                remote corners of the globe, immersive cultural experiences that
                connect you with local traditions, or rejuvenating wellness
                retreats designed to restore your mind and body.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                We believe that travel should be transformative. Our expert
                travel curators take the time to understand your desires and
                preferences, meticulously planning every detail to ensure a
                seamless and enriching experience.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};