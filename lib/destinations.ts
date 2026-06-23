export interface Destination {
  slug: string;
  name: string;
  state: string;
  heroImage: string;
  description: string;
  bestTime: string;
  estimatedBudget: string;
  topAttractions: string[];
  cultureHighlight: string;
  foodHighlight: string;
  galleryImages: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'mathura',
    name: 'Mathura',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Mathura is one of Hinduism\'s seven sacred cities and the birthplace of Lord Krishna. With its heart rooted in the ancient past, the city is a labyrinth of lanes teeming with devotees, ancient temples, and the eternal flow of the Yamuna river. The spirituality here is palpable, offering an immersive journey into India\'s rich mythological heritage.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹15,000 - ₹30,000 for 3 days',
    topAttractions: ['Shri Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Vishram Ghat', 'Kansa Qila'],
    cultureHighlight: 'The streets come alive during festivals like Janmashtami and Holi, where the entire city is painted in vibrant colors of devotion and joy.',
    foodHighlight: 'Mathura is famous for its milk-based sweets, particularly "Mathura Peda" and frothy lassi.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600080840509-563b785fcba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588614959060-4d1421160bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595844730298-b960fad9ce24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'vrindavan',
    name: 'Vrindavan',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1571536802807-3cab161687f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Vrindavan is where Lord Krishna spent his childhood days. The town echoes with the eternal romance of Radha and Krishna. It is home to over 5,000 temples, offering a transcendent experience of divine love and supreme devotion.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹12,000 - ₹25,000 for 3 days',
    topAttractions: ['Banke Bihari Temple', 'Prem Mandir', 'ISKCON Vrindavan', 'Radha Raman Temple'],
    cultureHighlight: 'The daily Sandhya Aarti and the continuous chanting of Hare Krishna mantras create an atmosphere of profound peace.',
    foodHighlight: 'Savor traditional Sattvic food, malpua, and freshly churned butter from local ashrams.',
    galleryImages: [
      'https://images.unsplash.com/photo-1623946270591-6289cf24ce10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583270425983-500b46ebf7b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589417032731-016489a2df9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561570773-455b3576082c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1564507592208-5287514a3875?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Home to the iconic Taj Mahal, Agra is a testament to the unparalleled architectural prowess of the Mughal empire. Discover grand forts, marble mausoleums, and sprawling gardens along the banks of the Yamuna.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹20,000 - ₹45,000 for 2 days',
    topAttractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
    cultureHighlight: 'Agra\'s marble inlay work (Pietra Dura) is a centuries-old craft passed down through generations of artisans.',
    foodHighlight: 'Indulge in Mughlai cuisine, especially the rich curries, kebabs, and the famous Agra Petha.',
    galleryImages: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f41cb8ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596760565866-e82200dc0f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'The Pink City of India is a flamboyant showcase of Rajasthani culture. With its majestic hilltop forts, opulent palaces, and bustling bazaars, Jaipur offers a journey into a royal past.',
    bestTime: 'Nov - Feb',
    estimatedBudget: '₹25,000 - ₹50,000 for 3 days',
    topAttractions: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar'],
    cultureHighlight: 'The vibrant textiles, block prints, and intricate jewelry designs reflect a deep-rooted heritage.',
    foodHighlight: 'Feast on Dal Baati Churma, Ghewar, and the fiery Laal Maas.',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661501632-550d42721759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533221975471-a4fb81f185db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578508608404-37fba26e82a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'kashmir',
    name: 'Kashmir',
    state: 'Jammu & Kashmir',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Often referred to as "Paradise on Earth", Kashmir boasts breathtaking valleys, serene lakes, and snow-capped Himalayan peaks. It is a destination of unparalleled natural beauty.',
    bestTime: 'Mar - Oct',
    estimatedBudget: '₹40,000 - ₹80,000 for 5 days',
    topAttractions: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    cultureHighlight: 'Experience a stay on a traditional houseboat or take a Shikara ride at dawn, surrounded by floating markets.',
    foodHighlight: 'Wazwan, a multi-course meal in Kashmiri tradition, is a royal feast not to be missed.',
    galleryImages: [
      'https://images.unsplash.com/photo-1623126938974-9b2ee0a1f0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572459952044-6a0ed7a9d3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555541571-0062b9f3ec37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    state: 'Rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'The land of Kings. Beyond Jaipur, Rajasthan offers a tapestry of desert landscapes, blue cities, and romantic lakes. It is the epitome of Indian royalty and heritage.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹50,000 - ₹1,50,000 for 7 days',
    topAttractions: ['Udaipur City Palace', 'Jaisalmer Fort', 'Mehrangarh Fort', 'Pushkar'],
    cultureHighlight: 'Desert safaris, folk dances like Ghoomar, and heritage hotel stays redefine luxury.',
    foodHighlight: 'Authentic Marwari thali showcasing a variety of rich, spicy, and sweet dishes.',
    galleryImages: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582269438706-e7e0085a1a12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582035970341-2b10a266a2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'One of the oldest continuously inhabited cities in the world, Varanasi is the spiritual capital of India. Witness the circle of life and death unfolding daily along the ghats of the River Ganges.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹15,000 - ₹35,000 for 3 days',
    topAttractions: ['Dashashwamedh Ghat', 'Kashi Vishwanath Temple', 'Sarnath', 'Assi Ghat'],
    cultureHighlight: 'The mesmerizing Ganga Aarti at dusk is a profound spiritual experience that draws thousands.',
    foodHighlight: 'Kachori Sabzi, Malaiyo, and traditional Banarasi Paan.',
    galleryImages: [
      'https://images.unsplash.com/photo-1571536802807-3cab161687f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1627896157734-4bc3e82bb2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588614959060-4d1421160bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1627850849303-34e9e0d16568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: '"God\'s Own Country" offers tranquil backwaters, lush tea gardens, pristine beaches, and rejuvenating Ayurveda resorts. It is the perfect escape for slow, mindful luxury travel.',
    bestTime: 'Sep - Mar',
    estimatedBudget: '₹40,000 - ₹90,000 for 5 days',
    topAttractions: ['Alleppey Backwaters', 'Munnar', 'Fort Kochi', 'Wayanad'],
    cultureHighlight: 'A cruise on a luxury Kettuvallam (houseboat) through the backwaters provides an intimate look at local life.',
    foodHighlight: 'Coastal delicacies with coconut, Karimeen Pollichathu, and Appam with Stew.',
    galleryImages: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582269438706-e7e0085a1a12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'goa',
    name: 'Goa',
    state: 'Goa',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'A blend of Indian and Portuguese cultures, Goa is famous for its sandy beaches, vibrant nightlife, historic churches, and opulent coastal villas.',
    bestTime: 'Nov - Feb',
    estimatedBudget: '₹30,000 - ₹1,00,000 for 4 days',
    topAttractions: ['Palolem Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Fontainhas'],
    cultureHighlight: 'The beautifully preserved Portuguese architecture and the laid-back susegad lifestyle.',
    foodHighlight: 'Fresh seafood, Goan fish curry, and the traditional dessert Bebinca.',
    galleryImages: [
      'https://images.unsplash.com/photo-1549603099-317a7e1f4229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585828068970-1b77bfd077ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'ladakh',
    name: 'Ladakh',
    state: 'Ladakh',
    heroImage: 'https://images.unsplash.com/photo-1526715174360-15f5cc1143c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'A high-altitude desert featuring dramatic landscapes, ancient Buddhist monasteries, and crystal-clear lakes. Ladakh is an adventure wrapped in serenity.',
    bestTime: 'Jun - Sep',
    estimatedBudget: '₹45,000 - ₹90,000 for 6 days',
    topAttractions: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery', 'Magnetic Hill'],
    cultureHighlight: 'The vibrant Hemis festival and the enduring Tibetan Buddhist culture found in remote monastic settlements.',
    foodHighlight: 'Thukpa, momos, and traditional butter tea (Gur Gur Chai).',
    galleryImages: [
      'https://images.unsplash.com/photo-1555541571-0062b9f3ec37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580226463990-2df551ba2f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582269438706-e7e0085a1a12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'The Yoga Capital of the World sits at the foothills of the Himalayas along the Ganges. It is a haven for spiritual seekers, yogis, and adventure enthusiasts alike.',
    bestTime: 'Sep - Jun',
    estimatedBudget: '₹15,000 - ₹40,000 for 4 days',
    topAttractions: ['Parmarth Niketan', 'Triveni Ghat', 'Laxman Jhula', 'Beatles Ashram'],
    cultureHighlight: 'Attending the evening Ganga Aarti and embarking on a deep yoga and meditation retreat.',
    foodHighlight: 'Healthy organic sattvic cafes offering globally inspired vegetarian and vegan cuisine.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600080840509-563b785fcba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588614959060-4d1421160bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595844730298-b960fad9ce24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'andaman-islands',
    name: 'Andaman Islands',
    state: 'Andaman & Nicobar',
    heroImage: 'https://images.unsplash.com/photo-1585828068970-1b77bfd077ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'A stunning archipelago offering pristine white-sand beaches, crystal-clear turquoise waters, and world-class scuba diving away from the mainland\'s hustle.',
    bestTime: 'Oct - May',
    estimatedBudget: '₹60,000 - ₹1,20,000 for 6 days',
    topAttractions: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island', 'Neil Island'],
    cultureHighlight: 'The deep historical significance of the Cellular Jail intertwines with the untouched beauty of indigenous island life.',
    foodHighlight: 'Freshly caught exotic seafood and tropical fruits.',
    galleryImages: [
      'https://images.unsplash.com/photo-1549603099-317a7e1f4229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585828068970-1b77bfd077ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'meghalaya',
    name: 'Meghalaya',
    state: 'Meghalaya',
    heroImage: 'https://images.unsplash.com/photo-1617306067098-de76ebf676dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'The "Abode of Clouds" is a surreal destination characterized by living root bridges, plunging waterfalls, and some of the cleanest villages in Asia.',
    bestTime: 'Oct - Apr',
    estimatedBudget: '₹35,000 - ₹70,000 for 5 days',
    topAttractions: ['Double Decker Root Bridge', 'Cherrapunji', 'Dawki River', 'Mawlynnong'],
    cultureHighlight: 'The matrilineal society of the Khasi tribe and their deep, sustainable connection with nature.',
    foodHighlight: 'Jadoh, traditional pork dishes, and unique fermented bamboo shoots.',
    galleryImages: [
      'https://images.unsplash.com/photo-1617306067098-de76ebf676dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572459952044-6a0ed7a9d3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555541571-0062b9f3ec37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f41cb8ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'A UNESCO World Heritage site, Hampi features the hauntingly beautiful ruins of the Vijayanagara Empire set against a surreal landscape of giant boulders.',
    bestTime: 'Oct - Mar',
    estimatedBudget: '₹20,000 - ₹45,000 for 3 days',
    topAttractions: ['Virupaksha Temple', 'Vijaya Vittala Temple', 'Matanga Hill', 'Lotus Mahal'],
    cultureHighlight: 'The intricately carved stone chariot and musical pillars showcase the zenith of ancient Indian art and architecture.',
    foodHighlight: 'South Indian thalis and fresh coconut water served at laid-back riverside cafes.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010f41cb8ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596760565866-e82200dc0f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
];
