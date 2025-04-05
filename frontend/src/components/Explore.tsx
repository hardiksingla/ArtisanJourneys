import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  // Add other relevant properties like price, duration, location, etc.
}

const ExploreExperiencesPage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experiences'); // Adjust URL if needed
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Experience[] = await response.json();
        setExperiences(data);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const handleLearnMoreClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsDialogOpen(true);
  };


  return (
    <section className="container py-24 sm:py-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Explore Our Unique Experiences
      </h1>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card key={`skeleton-${index}`}>
              <CardHeader>
                <CardTitle><Skeleton className="h-6 w-40" /></CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center">Error loading experiences: {error}</div>
      )}

      {!loading && !error && experiences.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id}>
              <CardHeader>
                <CardTitle>{experience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {experience.image && (
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full rounded-md aspect-video mb-4 object-cover"
                  />
                )}
                <p className="text-muted-foreground">{experience.description.substring(0, 150)}...</p>
                <Button onClick={() => handleLearnMoreClick(experience)} className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && !error && experiences.length === 0 && (
        <div className="text-center text-muted-foreground">
          No experiences available at the moment. Please check back later.
        </div>
      )}

      {/* Learn More Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedExperience?.title}</DialogTitle>
          </DialogHeader>
          {selectedExperience?.image && (
            <img
              src={selectedExperience.image}
              alt={selectedExperience.title}
              className="w-full rounded-md aspect-video mb-4 object-cover"
            />
          )}
          <DialogDescription>
            {selectedExperience?.description}
            {/* You can add more details here, like price, duration, etc. */}
          </DialogDescription>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExploreExperiencesPage;