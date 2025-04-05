import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of unique travel experiences do you offer?",
    answer: "We specialize in curating a wide range of unique experiences, including adventure travel, cultural immersion trips, wellness retreats, culinary journeys, wildlife expeditions, and more. Each itinerary is personalized to your interests.",
    value: "item-1",
  },
  {
    question: "How does your custom itinerary planning process work?",
    answer:
      "Our process begins with a consultation to understand your preferences. Then, our expert travel curators design a bespoke itinerary. You'll have the opportunity to review and refine the plan before we handle all the bookings and logistics.",
    value: "item-2",
  },
  {
    question: "Can you accommodate specific dietary needs or accessibility requirements?",
    answer:
      "Yes, absolutely. We strive to make our experiences accessible to everyone. Please inform us of any dietary restrictions, mobility challenges, or other specific needs during the planning process, and we will do our best to accommodate them.",
    value: "item-3",
  },
  {
    question: "What level of support do you provide during my trip?",
    answer: "We offer comprehensive support throughout your journey. This includes pre-trip planning assistance, access to local contacts, and 24/7 emergency support to ensure a smooth and worry-free experience.",
    value: "item-4",
  },
  {
    question: "How far in advance should I book my unique travel experience?",
    answer:
      "We recommend booking as early as possible, especially for popular destinations or specific travel dates, to ensure availability and allow ample time for personalized planning. However, we can also accommodate last-minute requests depending on the complexity and availability.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};