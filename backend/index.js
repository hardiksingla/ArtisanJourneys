const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;


mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const itineraryRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  fromDate: Date,
  toDate: Date,
  adults: Number,
  children: Number,
  numberOfPeople: Number,
  customRequests: String,
  submissionDate: { type: Date, default: Date.now },
});

const ItineraryRequest = mongoose.model('ItineraryRequest', itineraryRequestSchema);

app.use(cors());
app.use(express.json());


app.get('/api/experiences', (req, res) => {
  res.json(experiences);
});

app.post('/api/custom-itinerary-request', async (req, res) => {
  try {
    const { name, email, destination, fromDate, toDate, adults, children, numberOfPeople, customRequests } = req.body;

    const newRequest = new ItineraryRequest({
      name,
      email,
      destination,
      fromDate,
      toDate,
      adults: parseInt(adults),
      children: parseInt(children),
      numberOfPeople: parseInt(numberOfPeople),
      customRequests,
    });

    const savedRequest = await newRequest.save();
    console.log('Custom itinerary request saved:', savedRequest);
    res.status(201).json({ message: 'Request submitted successfully!', data: savedRequest });
  } catch (error) {
    console.error('Error saving custom itinerary request:', error);
    res.status(500).json({ message: 'Failed to submit request. Please try again later.', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


const experiences = [
    {
      id: '1',
      title: 'Andaman Island Scuba Diving Adventure',
      description: 'Explore the vibrant underwater world of the Andaman Islands with our guided scuba diving excursions. Discover colorful coral reefs and diverse marine life.',
      image: 'https://adventureandaman.com/upload/articles_img/scuba-adventure.JPG',
    },
    {
      id: '2',
      title: 'Rajasthan Cultural Heritage Tour',
      description: 'Immerse yourself in the rich history and vibrant culture of Rajasthan. Visit majestic forts, palaces, and bustling markets on this unforgettable journey.',
      image: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/0a610066-d998-5f29-9eb6-8d34e16fb6e6/0d5a5d8c-3dad-557a-bf73-ec6587dbfaa5.jpg',
    },
    {
      id: '3',
      title: 'Kerala Backwaters Kayaking & Village Stay',
      description: 'Experience the serene beauty of the Kerala backwaters with a leisurely kayaking trip and an authentic stay in a local village. Enjoy traditional cuisine and warm hospitality.',
      image: 'https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=612x612&w=0&k=20&c=G432lmdUz9qrW6D4sZYxLe6K-Km85OEmZg0qpcGyRCI=',
    },
    {
      id: '4',
      title: 'Himalayan Trekking Expedition',
      description: 'Embark on a challenging yet rewarding trekking expedition in the majestic Himalayas. Witness breathtaking mountain views and experience the unique Sherpa culture.',
      image: 'https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/91259-Ali-Bedni-Bugyal-Trek-ABB-February-2021-Indiahikes-Snow-Clearings-Oak-trees-Ravi-Ranjan-Winter-trek-6.jpg?w=1000&q=50&org_if_sml=1',
    },
    {
      id: '5',
      title: 'Tea Plantation Tour in Darjeeling',
      description: 'Discover the lush green tea gardens of Darjeeling. Learn about the tea-making process from leaf to cup and enjoy panoramic views of the surrounding hills.',
      image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/df/5a/53.jpg',
    },
    {
      id: '6',
      title: 'Goa Beach Relaxation & Yoga Retreat',
      description: 'Unwind on the golden beaches of Goa with a relaxing vacation that includes daily yoga and meditation sessions. Rejuvenate your mind and body in a tranquil setting.',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdzq2WKSoVM9rW3ye67JpOZASZkur295D5OW7jcPf7NXczWBOfOsV62-9z2K5wFfafbFJ7hh6tvKGLtMclnAp1BznVwI19JaMu759sys2EP_na1xgvx845KXkE47A-nD8BFTwAORumqoEyvPIlKIsPIHjo?key=Bm0JTPHvkEKKfUXFEGArpQ',
    }
  ];