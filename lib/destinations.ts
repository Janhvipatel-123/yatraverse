export interface Destination {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  heroImage: string;
  description: string;
  history: string;
  bestTime: string;
  estimatedBudget: string;
  topAttractions: string[];
  cultureHighlight: string;
  foodHighlight: string;
  travelTips: string[];
  faq: { question: string, answer: string }[];
  galleryImages: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'mathura',
    name: 'Mathura',
    state: 'Uttar Pradesh',
    tagline: 'The Sacred Birthplace of Divinity',
    heroImage: '/images/destinations/mathura.jpg',
    description: 'Mathura is one of Hinduism\'s seven sacred cities and the birthplace of Lord Krishna. With its heart rooted in the ancient past, the city is a labyrinth of lanes teeming with devotees, ancient temples, and the eternal flow of the Yamuna river. The spirituality here is palpable, offering an immersive journey into India\'s rich mythological heritage.',
    history: 'Mathura\'s history dates back to at least the 6th century BCE. As the legendary capital of the Surasena Kingdom, it was a pivotal center of trade, art, and religion. Over millennia, it flourished under the Mauryan and Kushan empires, becoming a beacon of Buddhist and Jain art before re-establishing itself as a core Hindu pilgrimage site.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹15,000 - ₹30,000 for 3 days',
    topAttractions: ['Shri Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Vishram Ghat', 'Kansa Qila'],
    cultureHighlight: 'The streets come alive during festivals like Janmashtami and Holi, where the entire city is painted in vibrant colors of devotion and joy.',
    foodHighlight: 'Mathura is famous for its milk-based sweets, particularly "Mathura Peda" and frothy lassi.',
    travelTips: [
      'Hire a private guide for an exclusive tour of the Janmabhoomi complex.',
      'Book a private boat ride on the Yamuna river during the evening Aarti at Vishram Ghat.',
      'Dress modestly as it is a deeply religious town.'
    ],
    faq: [
      { question: 'Is Mathura safe for solo luxury travelers?', answer: 'Yes, Mathura is generally safe. We recommend booking a private chauffeur and guide to navigate the bustling streets with ease.' },
      { question: 'How far is Mathura from Delhi?', answer: 'Mathura is approximately 150 km from Delhi, making it a comfortable 2.5-hour drive via the Yamuna Expressway.' },
      { question: 'What is the best time to experience Holi?', answer: 'Holi in Mathura starts almost a week before the main festival. Plan your visit for late February or March, and book accommodations well in advance.' }
    ],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'vrindavan',
    name: 'Vrindavan',
    state: 'Uttar Pradesh',
    tagline: 'The Transcendent Town of Divine Love',
    heroImage: '/images/destinations/vrindavan.jpg',
    description: 'Vrindavan is where Lord Krishna spent his childhood days. The town echoes with the eternal romance of Radha and Krishna. It is home to over 5,000 temples, offering a transcendent experience of divine love and supreme devotion.',
    history: 'Once a dense forest (Vrinda meaning basil, van meaning forest), Vrindavan was lost to time until it was rediscovered in the 16th century by Chaitanya Mahaprabhu. Since then, it has been the epicenter of the Bhakti movement, drawing mystics, poets, and royals who built its magnificent temples.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹12,000 - ₹25,000 for 3 days',
    topAttractions: ['Banke Bihari Temple', 'Prem Mandir', 'ISKCON Vrindavan', 'Radha Raman Temple'],
    cultureHighlight: 'The daily Sandhya Aarti and the continuous chanting of Hare Krishna mantras create an atmosphere of profound peace.',
    foodHighlight: 'Savor traditional Sattvic food, malpua, and freshly churned butter from local ashrams.',
    travelTips: [
      'Experience the spectacular evening illumination at Prem Mandir.',
      'Be wary of monkeys; avoid wearing loose sunglasses or carrying exposed food.',
      'Start your day early to attend the mesmerizing Mangala Aarti at ISKCON.'
    ],
    faq: [
      { question: 'Can I visit Mathura and Vrindavan in a single day?', answer: 'While possible, we recommend allocating at least two days to fully absorb the spiritual essence of both cities without rushing.' },
      { question: 'What is the dress code for the temples?', answer: 'Conservative attire is required. Men and women should cover their shoulders and knees. Some temples may require covering your head.' },
      { question: 'Are there luxury accommodations in Vrindavan?', answer: 'Vrindavan has a growing number of premium boutique stays and heritage properties that offer luxury while maintaining a spiritual atmosphere.' }
    ],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    tagline: 'The Pinnacle of Mughal Grandeur',
    heroImage: '/images/destinations/agra.jpg',
    description: 'Home to the iconic Taj Mahal, Agra is a testament to the unparalleled architectural prowess of the Mughal empire. Discover grand forts, marble mausoleums, and sprawling gardens along the banks of the Yamuna.',
    history: 'Agra reached its zenith under the Mughal emperors Akbar, Jahangir, and Shah Jahan. It served as the capital of the Mughal Empire for over a century, during which it was adorned with magnificent forts, palaces, and mausoleums, cementing its legacy as a center of art and culture.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹20,000 - ₹45,000 for 2 days',
    topAttractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
    cultureHighlight: 'Agra\'s marble inlay work (Pietra Dura) is a centuries-old craft passed down through generations of artisans.',
    foodHighlight: 'Indulge in Mughlai cuisine, especially the rich curries, kebabs, and the famous Agra Petha.',
    travelTips: [
      'Visit the Taj Mahal at sunrise for a magical, crowd-free experience.',
      'Book a private guided tour of Agra Fort to fully appreciate its complex history.',
      'Enjoy an exclusive high tea at a luxury hotel with uninterrupted views of the Taj Mahal.'
    ],
    faq: [
      { question: 'Is the Taj Mahal open every day?', answer: 'No, the Taj Mahal is closed to the public on Fridays.' },
      { question: 'What is the best way to travel from Delhi to Agra?', answer: 'The Gatimaan Express train offers a fast, premium journey, or you can opt for a chauffeur-driven luxury car via the Yamuna Expressway.' },
      { question: 'Can I do a night viewing of the Taj Mahal?', answer: 'Yes, night viewings are permitted for five nights a month (during the full moon, and two days before and after), subject to advance ticketing.' }
    ],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'The Regal Pink City',
    heroImage: '/images/destinations/jaipur.jpg',
    description: 'The Pink City of India is a flamboyant showcase of Rajasthani culture. With its majestic hilltop forts, opulent palaces, and bustling bazaars, Jaipur offers a journey into a royal past.',
    history: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India’s first planned city. It was painted pink in 1876 to welcome the Prince of Wales (King Edward VII), as pink denotes the color of hospitality. Today, it remains a vibrant symbol of royal Rajputana heritage.',
    bestTime: 'Nov - Feb',
    estimatedBudget: '₹25,000 - ₹50,000 for 3 days',
    topAttractions: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar'],
    cultureHighlight: 'The vibrant textiles, block prints, and intricate jewelry designs reflect a deep-rooted heritage.',
    foodHighlight: 'Feast on Dal Baati Churma, Ghewar, and the fiery Laal Maas.',
    travelTips: [
      'Stay in an authentic heritage palace hotel for an immersive royal experience.',
      'Shop for exquisite gems and block-printed textiles at Johari Bazaar and Bapu Bazaar.',
      'Book a private hot air balloon ride over Amber Fort at dawn.'
    ],
    faq: [
      { question: 'Why is Jaipur called the Pink City?', answer: 'The city was painted terracotta pink in 1876 to welcome the Prince of Wales, a tradition that is maintained by law in the old city to this day.' },
      { question: 'Is Jaipur part of the Golden Triangle?', answer: 'Yes, Jaipur, along with Delhi and Agra, forms India’s famous Golden Triangle tourist circuit.' },
      { question: 'What is the most luxurious experience in Jaipur?', answer: 'Dining in a private, candle-lit courtyard at the City Palace or staying in the Maharaja’s suite at a heritage hotel.' }
    ],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'kashmir',
    name: 'Kashmir',
    state: 'Jammu & Kashmir',
    tagline: 'Paradise on Earth',
    heroImage: '/images/packages/kashmir.jpg',
    description: 'Often referred to as "Paradise on Earth", Kashmir boasts breathtaking valleys, serene lakes, and snow-capped Himalayan peaks. It is a destination of unparalleled natural beauty.',
    history: 'A historic crossroads of the Silk Road, Kashmir has been a center for Hinduism, Buddhism, and later Islam, shaping its unique and diverse cultural heritage over millennia.',
    bestTime: 'Mar - Oct',
    estimatedBudget: '₹40,000 - ₹80,000 for 5 days',
    topAttractions: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    cultureHighlight: 'Experience a stay on a traditional houseboat or take a Shikara ride at dawn, surrounded by floating markets.',
    foodHighlight: 'Wazwan, a multi-course meal in Kashmiri tradition, is a royal feast not to be missed.',
    travelTips: ['Stay on a luxury houseboat on Nigeen Lake for a quieter experience.'],
    faq: [{ question: 'Is it safe to travel?', answer: 'Yes, the main tourist circuits are highly secured and welcoming.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    state: 'Rajasthan',
    tagline: 'The Land of Kings',
    heroImage: '/images/packages/rajasthan.jpg',
    description: 'The land of Kings. Beyond Jaipur, Rajasthan offers a tapestry of desert landscapes, blue cities, and romantic lakes. It is the epitome of Indian royalty and heritage.',
    history: 'Forged by fierce Rajput warriors, Rajasthan\'s history is written in the imposing walls of its forts and the opulent halls of its palaces, a legacy of valor and romance.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹50,000 - ₹1,50,000 for 7 days',
    topAttractions: ['Udaipur City Palace', 'Jaisalmer Fort', 'Mehrangarh Fort', 'Pushkar'],
    cultureHighlight: 'Desert safaris, folk dances like Ghoomar, and heritage hotel stays redefine luxury.',
    foodHighlight: 'Authentic Marwari thali showcasing a variety of rich, spicy, and sweet dishes.',
    travelTips: ['Charter a private flight between cities to maximize your time.'],
    faq: [{ question: 'What is the best way to travel?', answer: 'A luxury chauffeur-driven SUV is highly recommended.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    tagline: 'The Spiritual Capital of India',
    heroImage: '/images/destinations/varanasi.jpg',
    description: 'One of the oldest continuously inhabited cities in the world, Varanasi is the spiritual capital of India. Witness the circle of life and death unfolding daily along the ghats of the River Ganges.',
    history: 'According to mythology, Varanasi was founded by Lord Shiva. Historically, it has been a center of learning, philosophy, and mysticism for over 3,000 years.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹15,000 - ₹35,000 for 3 days',
    topAttractions: ['Dashashwamedh Ghat', 'Kashi Vishwanath Temple', 'Sarnath', 'Assi Ghat'],
    cultureHighlight: 'The mesmerizing Ganga Aarti at dusk is a profound spiritual experience that draws thousands.',
    foodHighlight: 'Kachori Sabzi, Malaiyo, and traditional Banarasi Paan.',
    travelTips: ['Book a private sunset boat cruise on the Ganges.'],
    faq: [{ question: 'Are there luxury hotels on the Ghats?', answer: 'Yes, several restored heritage palaces offer luxury stays right on the river.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    tagline: 'God\'s Own Country',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: '"God\'s Own Country" offers tranquil backwaters, lush tea gardens, pristine beaches, and rejuvenating Ayurveda resorts. It is the perfect escape for slow, mindful luxury travel.',
    history: 'A prominent spice exporter since 3000 BCE, Kerala\'s history is a melting pot of global influences—from the Phoenicians and Romans to the Portuguese and Dutch.',
    bestTime: 'Sep - Mar',
    estimatedBudget: '₹40,000 - ₹90,000 for 5 days',
    topAttractions: ['Alleppey Backwaters', 'Munnar', 'Fort Kochi', 'Wayanad'],
    cultureHighlight: 'A cruise on a luxury Kettuvallam (houseboat) through the backwaters provides an intimate look at local life.',
    foodHighlight: 'Coastal delicacies with coconut, Karimeen Pollichathu, and Appam with Stew.',
    travelTips: ['Indulge in a certified Ayurvedic wellness retreat.'],
    faq: [{ question: 'Is the monsoon a good time to visit?', answer: 'Yes, the monsoon is considered the best time for Ayurvedic treatments.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'goa',
    name: 'Goa',
    state: 'Goa',
    tagline: 'The Pearl of the Orient',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: 'A blend of Indian and Portuguese cultures, Goa is famous for its sandy beaches, vibrant nightlife, historic churches, and opulent coastal villas.',
    history: 'Ruled by the Portuguese for over 450 years until 1961, Goa\'s distinct architectural and cultural footprint makes it uniquely different from the rest of India.',
    bestTime: 'Nov - Feb',
    estimatedBudget: '₹30,000 - ₹1,00,000 for 4 days',
    topAttractions: ['Palolem Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Fontainhas'],
    cultureHighlight: 'The beautifully preserved Portuguese architecture and the laid-back susegad lifestyle.',
    foodHighlight: 'Fresh seafood, Goan fish curry, and the traditional dessert Bebinca.',
    travelTips: ['Rent a private luxury villa in South Goa for ultimate privacy.'],
    faq: [{ question: 'Is Goa only for parties?', answer: 'Not at all. South Goa and the hinterlands offer incredibly serene luxury retreats.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'ladakh',
    name: 'Ladakh',
    state: 'Ladakh',
    tagline: 'The Land of High Passes',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: 'A high-altitude desert featuring dramatic landscapes, ancient Buddhist monasteries, and crystal-clear lakes. Ladakh is an adventure wrapped in serenity.',
    history: 'An independent kingdom for much of its history, Ladakh was heavily influenced by Tibet. Its remote geography preserved its unique Mahayana Buddhist culture.',
    bestTime: 'Jun - Sep',
    estimatedBudget: '₹45,000 - ₹90,000 for 6 days',
    topAttractions: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery', 'Magnetic Hill'],
    cultureHighlight: 'The vibrant Hemis festival and the enduring Tibetan Buddhist culture found in remote monastic settlements.',
    foodHighlight: 'Thukpa, momos, and traditional butter tea (Gur Gur Chai).',
    travelTips: ['Spend the first two days acclimatizing to the high altitude in Leh.'],
    faq: [{ question: 'Do I need permits?', answer: 'Yes, Inner Line Permits are required for many areas, which our concierge can arrange.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    tagline: 'The Yoga Capital of the World',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: 'The Yoga Capital of the World sits at the foothills of the Himalayas along the Ganges. It is a haven for spiritual seekers, yogis, and adventure enthusiasts alike.',
    history: 'A legendary pilgrimage site where sages have meditated since antiquity. It gained global fame when the Beatles visited the Maharishi Mahesh Yogi ashram in 1968.',
    bestTime: 'Sep - Jun',
    estimatedBudget: '₹15,000 - ₹40,000 for 4 days',
    topAttractions: ['Parmarth Niketan', 'Triveni Ghat', 'Laxman Jhula', 'Beatles Ashram'],
    cultureHighlight: 'Attending the evening Ganga Aarti and embarking on a deep yoga and meditation retreat.',
    foodHighlight: 'Healthy organic sattvic cafes offering globally inspired vegetarian and vegan cuisine.',
    travelTips: ['Book a luxury wellness retreat like Ananda in the Himalayas.'],
    faq: [{ question: 'Is alcohol available?', answer: 'No, Rishikesh is a holy city; alcohol and non-vegetarian food are strictly prohibited.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'andaman-islands',
    name: 'Andaman Islands',
    state: 'Andaman & Nicobar',
    tagline: 'Untouched Tropical Paradise',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: 'A stunning archipelago offering pristine white-sand beaches, crystal-clear turquoise waters, and world-class scuba diving away from the mainland\'s hustle.',
    history: 'Historically known for the infamous Cellular Jail used by the British to exile political prisoners, today it is a peaceful refuge characterized by indigenous tribes and natural beauty.',
    bestTime: 'Oct - May',
    estimatedBudget: '₹60,000 - ₹1,20,000 for 6 days',
    topAttractions: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island', 'Neil Island'],
    cultureHighlight: 'The deep historical significance of the Cellular Jail intertwines with the untouched beauty of indigenous island life.',
    foodHighlight: 'Freshly caught exotic seafood and tropical fruits.',
    travelTips: ['Charter a private yacht to explore uninhabited islands.'],
    faq: [{ question: 'Do I need a passport?', answer: 'Indian nationals do not need a passport, but foreigners require one with an Indian visa.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'meghalaya',
    name: 'Meghalaya',
    state: 'Meghalaya',
    tagline: 'The Abode of Clouds',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: 'The "Abode of Clouds" is a surreal destination characterized by living root bridges, plunging waterfalls, and some of the cleanest villages in Asia.',
    history: 'The state was carved out of Assam and is inhabited by the Khasi, Jaintia, and Garo tribes, who follow a unique matrilineal system where lineage and inheritance pass through women.',
    bestTime: 'Oct - Apr',
    estimatedBudget: '₹35,000 - ₹70,000 for 5 days',
    topAttractions: ['Double Decker Root Bridge', 'Cherrapunji', 'Dawki River', 'Mawlynnong'],
    cultureHighlight: 'The matrilineal society of the Khasi tribe and their deep, sustainable connection with nature.',
    foodHighlight: 'Jadoh, traditional pork dishes, and unique fermented bamboo shoots.',
    travelTips: ['Hire a local guide for treks to the living root bridges.'],
    faq: [{ question: 'Is it hard to reach?', answer: 'You can fly into Guwahati and take a scenic luxury car transfer to Shillong.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  },
  {
    slug: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    tagline: 'The Forgotten Empire',
    heroImage: '/images/experiences/heritage-walk.jpg',
    description: 'A UNESCO World Heritage site, Hampi features the hauntingly beautiful ruins of the Vijayanagara Empire set against a surreal landscape of giant boulders.',
    history: 'Once the capital of the prosperous Vijayanagara Empire in the 14th century, it was one of the largest and wealthiest cities in the world before being conquered and abandoned in 1565.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹20,000 - ₹45,000 for 3 days',
    topAttractions: ['Virupaksha Temple', 'Vijaya Vittala Temple', 'Matanga Hill', 'Lotus Mahal'],
    cultureHighlight: 'The intricately carved stone chariot and musical pillars showcase the zenith of ancient Indian art and architecture.',
    foodHighlight: 'South Indian thalis and fresh coconut water served at laid-back riverside cafes.',
    travelTips: ['Stay at a luxury resort like Evolve Back for a regal experience.'],
    faq: [{ question: 'How much time is needed?', answer: 'At least 3 full days to explore both the sacred and royal centers.' }],
    galleryImages: [
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg',
      '/images/experiences/heritage-walk.jpg', '/images/experiences/luxury-travel.jpg', '/images/experiences/spiritual-tour.jpg', '/images/experiences/photography-tour.jpg'
    ]
  }
];
