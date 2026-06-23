import fs from 'fs';
import https from 'https';

const places = [
  { title: 'Krishna Janmasthan Temple Complex', file: 'public/images/destinations/mathura.jpg' },
  { title: 'Prem Mandir, Vrindavan', file: 'public/images/destinations/vrindavan.jpg' },
  { title: 'Taj Mahal', file: 'public/images/destinations/agra.jpg' },
  { title: 'Hawa Mahal', file: 'public/images/destinations/jaipur.jpg' },
  { title: 'Krishna Janmasthan Temple Complex', file: 'public/images/highlights/janmabhoomi.jpg' },
  { title: 'Dwarkadheesh temple, Mathura', file: 'public/images/highlights/dwarkadhish.jpg' },
  { title: 'Vishram Ghat', file: 'public/images/highlights/vishram_ghat.jpg' },
  { title: 'Prem Mandir, Vrindavan', file: 'public/images/highlights/prem_mandir.jpg' },
  { title: 'Bankey Bihari Temple, Vrindavan', file: 'public/images/highlights/banke_bihari.jpg' },
  { title: 'Krishna Balaram Mandir', file: 'public/images/highlights/iskcon.jpg' }
];

const options = {
  headers: {
    'User-Agent': 'YatraVerseBot/1.0 (test@example.com)'
  }
};

async function fetchImage(title, file) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(title)}&pithumbsize=1000&format=json`;
  
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          const imgUrl = pages[pageId].thumbnail?.source;
          
          if (!imgUrl) {
            console.log(`No image found for ${title}`);
            return resolve();
          }

          https.get(imgUrl, options, (imgRes) => {
            const fileStream = fs.createWriteStream(file);
            imgRes.pipe(fileStream);
            fileStream.on('finish', () => {
              fileStream.close();
              console.log(`Downloaded ${title} to ${file}`);
              resolve();
            });
          }).on('error', reject);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const place of places) {
    try {
      await fetchImage(place.title, place.file);
    } catch (e) {
      console.error(`Error fetching ${place.title}:`, e.message);
    }
  }
}

run();
