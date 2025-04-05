import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from 'date-fns';
import { Navbar } from './Navbar';


const RequestCustomItineraryPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [customRequests, setCustomRequests] = useState('');
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null); // To show success/error message
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button
    setSubmissionStatus(null); // Clear previous status

    const itineraryRequest = {
      name,
      email,
      destination,
      fromDate: fromDate ? format(fromDate, 'yyyy-MM-dd') : null,
      toDate: toDate ? format(toDate, 'yyyy-MM-dd') : null,
      adults: parseInt(adults),
      children: parseInt(children),
      numberOfPeople: parseInt(adults) + parseInt(children),
      customRequests,
    };

    console.log('Itinerary Request:', itineraryRequest);

    try {
      // Replace '/api/custom-itinerary-request' with your actual backend endpoint
      const response = await fetch('https://artisanjourneys.onrender.com/api/custom-itinerary-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itineraryRequest),
      });

      setIsSubmitting(false); // Re-enable button

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setDestination('');
        setAdults('');
        setChildren('');
        setCustomRequests('');
        setFromDate(undefined);
        setToDate(undefined);
      } else {
        setSubmissionStatus(`error: There was an error submitting your request. Status: ${response.status}`);
      }
    } catch (error:any) {
      setIsSubmitting(false); // Ensure button is re-enabled on error
      setSubmissionStatus(`error: An unexpected error occurred: ${error.message}`);
      console.error('Error submitting request:', error);
    }
  };

  return (
    <>
    <Navbar />
    <section className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-stretch">
        {/* Left Side: Image */}
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Custom Itinerary Planning"
            className="rounded-lg shadow-md h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Craft Your Dream Trip
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tell us your preferences, and our expert team will design a personalized itinerary just for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
              />
            </div>

            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where would you like to go?"
                required
              />
            </div>

            <div>
              <Label htmlFor="dateRange">Preferred Travel Dates</Label>
              <div className="flex items-center space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[140px] justify-start text-left font-normal",
                        !fromDate && "text-muted-foreground"
                      )}
                    >
                      {fromDate ? format(fromDate, "PPP") : <span>From</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={fromDate}
                      onSelect={setFromDate}
                    />
                  </PopoverContent>
                </Popover>
                <span>to</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[140px] justify-start text-left font-normal",
                        !toDate && "text-muted-foreground"
                      )}
                    >
                      {toDate ? format(toDate, "PPP") : <span>To</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={setToDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Optional: Provide your ideal travel window.</p>
            </div>

            <div>
              <Label>Number of Travelers</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults">Adults</Label>
                  <Input
                    type="number"
                    id="adults"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    placeholder="e.g., 2"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="children">Children (under 12)</Label>
                  <Input
                    type="number"
                    id="children"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    placeholder="e.g., 1"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="requests">Custom Requests & Preferences</Label>
              <Textarea
                id="requests"
                value={customRequests}
                onChange={(e) => setCustomRequests(e.target.value)}
                placeholder="Tell us about your interests, desired activities, accommodation preferences, or any other specific requests."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Itinerary Request"}
            </Button>
          </form>

          {submissionStatus === 'success' && (
            <p className="mt-4 text-green-500 font-semibold">
              Request submitted successfully! We'll be in touch soon.
            </p>
          )}

          {submissionStatus?.startsWith('error') && (
            <p className="mt-4 text-red-500 font-semibold">
              {submissionStatus.substring(7)}
            </p>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default RequestCustomItineraryPage;