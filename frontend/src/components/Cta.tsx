import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Ready to Plan Your{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Unique Travel Experience?
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Stop dreaming and start exploring! Let our expert team curate a
            personalized itinerary that matches your passions and creates
            memories that will last a lifetime.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Custom Itinerary</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Explore Our Experience Types
          </Button>
        </div>
      </div>
    </section>
  );
};