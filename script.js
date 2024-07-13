const countries = [
  {
    country: "France",
    capital: "Paris",
    famousLandmark: "Eiffel Tower",
    currency: "Euro",
    nationalLanguage: "French",
    nationalFlag: "🇫🇷",
    population: "67 million",
    nationalDish: "Coq au Vin",
    nationalAnthem: "La Marseillaise",
    timeZone: "UTC+1"
  },
  {
    country: "Spain",
    capital: "Madrid",
    famousLandmark: "Sagrada Familia",
    currency: "Euro",
    nationalLanguage: "Spanish",
    nationalFlag: "🇪🇸",
    population: "47 million",
    nationalDish: "Paella",
    nationalAnthem: "Marcha Real",
    timeZone: "UTC+1"
  },
  {
    country: "Italy",
    capital: "Rome",
    famousLandmark: "Colosseum",
    currency: "Euro",
    nationalLanguage: "Italian",
    nationalFlag: "🇮🇹",
    population: "60 million",
    nationalDish: "Pizza",
    nationalAnthem: "Il Canto degli Italiani",
    timeZone: "UTC+1"
  },
  {
    country: "Japan",
    capital: "Tokyo",
    famousLandmark: "Mount Fuji",
    currency: "Japanese Yen",
    nationalLanguage: "Japanese",
    nationalFlag: "🇯🇵",
    population: "126 million",
    nationalDish: "Sushi",
    nationalAnthem: "Kimigayo",
    timeZone: "UTC+9"
  },
  {
    country: "Brazil",
    capital: "Brasília",
    famousLandmark: "Christ the Redeemer",
    currency: "Brazilian Real",
    nationalLanguage: "Portuguese",
    nationalFlag: "🇧🇷",
    population: "212 million",
    nationalDish: "Feijoada",
    nationalAnthem: "Hino Nacional Brasileiro",
    timeZone: "UTC-2 to -5"
  },
  {
    country: "Germany",
    capital: "Berlin",
    famousLandmark: "Brandenburg Gate",
    currency: "Euro",
    nationalLanguage: "German",
    nationalFlag: "🇩🇪",
    population: "83 million",
    nationalDish: "Bratwurst",
    nationalAnthem: "Deutschlandlied",
    timeZone: "UTC+1"
  },
  {
    country: "United Kingdom",
    capital: "London",
    famousLandmark: "Big Ben",
    currency: "Pound Sterling",
    nationalLanguage: "English",
    nationalFlag: "🇬🇧",
    population: "66 million",
    nationalDish: "Fish and Chips",
    nationalAnthem: "God Save the Queen",
    timeZone: "UTC+0"
  },
  {
    country: "Australia",
    capital: "Canberra",
    famousLandmark: "Sydney Opera House",
    currency: "Australian Dollar",
    nationalLanguage: "English",
    nationalFlag: "🇦🇺",
    population: "25 million",
    nationalDish: "Meat Pie",
    nationalAnthem: "Advance Australia Fair",
    timeZone: "UTC+8 to +11"
  },
  {
    country: "India",
    capital: "New Delhi",
    famousLandmark: "Taj Mahal",
    currency: "Indian Rupee",
    nationalLanguage: "Hindi, English",
    nationalFlag: "🇮🇳",
    population: "1.3 billion",
    nationalDish: "Curry",
    nationalAnthem: "Jana Gana Mana",
    timeZone: "UTC+5.5"
  },
  {
    country: "China",
    capital: "Beijing",
    famousLandmark: "Great Wall of China",
    currency: "Chinese Yuan",
    nationalLanguage: "Mandarin",
    nationalFlag: "🇨🇳",
    population: "1.4 billion",
    nationalDish: "Peking Duck",
    nationalAnthem: "March of the Volunteers",
    timeZone: "UTC+8"
  },
  {
    country: "Canada",
    capital: "Ottawa",
    famousLandmark: "Niagara Falls",
    currency: "Canadian Dollar",
    nationalLanguage: "English, French",
    nationalFlag: "🇨🇦",
    population: "37 million",
    nationalDish: "Poutine",
    nationalAnthem: "O Canada",
    timeZone: "UTC-3.5 to -8"
  },
  {
    country: "United States",
    capital: "Washington, D.C.",
    famousLandmark: "Statue of Liberty",
    currency: "US Dollar",
    nationalLanguage: "English",
    nationalFlag: "🇺🇸",
    population: "331 million",
    nationalDish: "Hamburger",
    nationalAnthem: "The Star-Spangled Banner",
    timeZone: "UTC-5 to -10"
  },
  {
    country: "Mexico",
    capital: "Mexico City",
    famousLandmark: "Chichén Itzá",
    currency: "Mexican Peso",
    nationalLanguage: "Spanish",
    nationalFlag: "🇲🇽",
    population: "126 million",
    nationalDish: "Tacos",
    nationalAnthem: "Mexicanos, al grito de guerra",
    timeZone: "UTC-6 to -8"
  },
  {
    country: "Russia",
    capital: "Moscow",
    famousLandmark: "St. Basil's Cathedral",
    currency: "Russian Ruble",
    nationalLanguage: "Russian",
    nationalFlag: "🇷🇺",
    population: "146 million",
    nationalDish: "Pelmeni",
    nationalAnthem: "State Anthem of the Russian Federation",
    timeZone: "UTC+2 to +12"
  },
  {
    country: "Egypt",
    capital: "Cairo",
    famousLandmark: "Great Pyramid of Giza",
    currency: "Egyptian Pound",
    nationalLanguage: "Arabic",
    nationalFlag: "🇪🇬",
    population: "104 million",
    nationalDish: "Kushari",
    nationalAnthem: "Bilady, Bilady, Bilady",
    timeZone: "UTC+2"
  },
  {
    country: "Argentina",
    capital: "Buenos Aires",
    famousLandmark: "Casa Rosada",
    currency: "Argentine Peso",
    nationalLanguage: "Spanish",
    nationalFlag: "🇦🇷",
    population: "45 million",
    nationalDish: "Asado",
    nationalAnthem: "Himno Nacional Argentino",
    timeZone: "UTC-3"
  },
  {
    country: "South Africa",
    capital: "Pretoria",
    famousLandmark: "Table Mountain",
    currency: "South African Rand",
    nationalLanguage: "11 official languages including Afrikaans, English, Zulu, Xhosa",
    nationalFlag: "🇿🇦",
    population: "60 million",
    nationalDish: "Bobotie",
    nationalAnthem: "National Anthem of South Africa",
    timeZone: "UTC+2"
  },
  {
    country: "South Korea",
    capital: "Seoul",
    famousLandmark: "Gyeongbokgung Palace",
    currency: "South Korean Won",
    nationalLanguage: "Korean",
    nationalFlag: "🇰🇷",
    population: "51 million",
    nationalDish: "Kimchi",
    nationalAnthem: "Aegukga",
    timeZone: "UTC+9"
  },
  {
    country: "Indonesia",
    capital: "Jakarta",
    famousLandmark: "Borobudur Temple",
    currency: "Indonesian Rupiah",
    nationalLanguage: "Indonesian",
    nationalFlag: "🇮🇩",
    population: "273 million",
    nationalDish: "Nasi Goreng",
    nationalAnthem: "Indonesia Raya",
    timeZone: "UTC+7 to +9"
  },
  {
    country: "Nigeria",
    capital: "Abuja",
    famousLandmark: "National Mosque",
    currency: "Nigerian Naira",
    nationalLanguage: "English",
    nationalFlag: "🇳🇬",
    population: "211 million",
    nationalDish: "Jollof Rice",
    nationalAnthem: "Arise, O Compatriots",
    timeZone: "UTC+1"
  },
  {
    country: "Saudi Arabia",
    capital: "Riyadh",
    famousLandmark: "Kaaba",
    currency: "Saudi Riyal",
    nationalLanguage: "Arabic",
    nationalFlag: "🇸🇦",
    population: "35 million",
    nationalDish: "Kabsa",
    nationalAnthem: "Aash Al Maleek",
    timeZone: "UTC+3"
  },
  {
    country: "Turkey",
    capital: "Ankara",
    famousLandmark: "Hagia Sophia",
    currency: "Turkish Lira",
    nationalLanguage: "Turkish",
    nationalFlag: "🇹🇷",
    population: "84 million",
    nationalDish: "Köfte",
    nationalAnthem: "İstiklâl Marşı",
    timeZone: "UTC+3"
  },
  {
    country: "Iran",
    capital: "Tehran",
    famousLandmark: "Naqsh-e Jahan Square",
    currency: "Iranian Rial",
    nationalLanguage: "Persian",
    nationalFlag: "🇮🇷",
    population: "85 million",
    nationalDish: "Chelo Kebab",
    nationalAnthem: "Soroud-e Melli-e Jomhouri-e Eslâmi-e Irân",
    timeZone: "UTC+3:30"
  },
  {
    country: "Pakistan",
    capital: "Islamabad",
    famousLandmark: "Badshahi Mosque",
    currency: "Pakistani Rupee",
    nationalLanguage: "Urdu",
    nationalFlag: "🇵🇰",
    population: "225 million",
    nationalDish: "Biryani",
    nationalAnthem: "Qaumi Taranah",
    timeZone: "UTC+5"
  },
  {
    country: "Vietnam",
    capital: "Hanoi",
    famousLandmark: "Ha Long Bay",
    currency: "Vietnamese Dong",
    nationalLanguage: "Vietnamese",
    nationalFlag: "🇻🇳",
    population: "98 million",
    nationalDish: "Pho",
    nationalAnthem: "Tiến Quân Ca",
    timeZone: "UTC+7"
  },
  {
    country: "Thailand",
    capital: "Bangkok",
    famousLandmark: "Grand Palace",
    currency: "Thai Baht",
    nationalLanguage: "Thai",
    nationalFlag: "🇹🇭",
    population: "69 million",
    nationalDish: "Pad Thai",
    nationalAnthem: "Phleng Chat Thai",
    timeZone: "UTC+7"
  },
  {
    country: "Philippines",
    capital: "Manila",
    famousLandmark: "Intramuros",
    currency: "Philippine Peso",
    nationalLanguage: "Filipino",
    nationalFlag: "🇵🇭",
    population: "113 million",
    nationalDish: "Adobo",
    nationalAnthem: "Lupang Hinirang",
    timeZone: "UTC+8"
  },
  {
    country: "Colombia",
    capital: "Bogotá",
    famousLandmark: "Salt Cathedral of Zipaquirá",
    currency: "Colombian Peso",
    nationalLanguage: "Spanish",
    nationalFlag: "🇨🇴",
    population: "51 million",
    nationalDish: "Bandeja Paisa",
    nationalAnthem: "Oh Gloria Inmarcesible",
    timeZone: "UTC-5"
  },
  {
    country: "Peru",
    capital: "Lima",
    famousLandmark: "Machu Picchu",
    currency: "Peruvian Sol",
    nationalLanguage: "Spanish, Quechua",
    nationalFlag: "🇵🇪",
    population: "33 million",
    nationalDish: "Ceviche",
    nationalAnthem: "Himno Nacional del Perú",
    timeZone: "UTC-5"
  },
  {
    country: "Chile",
    capital: "Santiago",
    famousLandmark: "Easter Island",
    currency: "Chilean Peso",
    nationalLanguage: "Spanish",
    nationalFlag: "🇨🇱",
    population: "19 million",
    nationalDish: "Empanada",
    nationalAnthem: "Himno Nacional de Chile",
    timeZone: "UTC-3 to -5"
  },
  {
    country: "Venezuela",
    capital: "Caracas",
    famousLandmark: "Angel Falls",
    currency: "Venezuelan Bolívar",
    nationalLanguage: "Spanish",
    nationalFlag: "🇻🇪",
    population: "28 million",
    nationalDish: "Pabellón criollo",
    nationalAnthem: "Gloria al Bravo Pueblo",
    timeZone: "UTC-4"
  },
  {
    country: "Algeria",
    capital: "Algiers",
    famousLandmark: "Casbah of Algiers",
    currency: "Algerian Dinar",
    nationalLanguage: "Arabic",
    nationalFlag: "🇩🇿",
    population: "44 million",
    nationalDish: "Couscous",
    nationalAnthem: "Kassaman",
    timeZone: "UTC+1"
  },
  {
    country: "Morocco",
    capital: "Rabat",
    famousLandmark: "Jardin Majorelle",
    currency: "Moroccan Dirham",
    nationalLanguage: "Arabic, Berber",
    nationalFlag: "🇲🇦",
    population: "37 million",
    nationalDish: "Tagine",
    nationalAnthem: "Hymne Chérifien",
    timeZone: "UTC"
  },
  {
    country: "Tunisia",
    capital: "Tunis",
    famousLandmark: "The Medina of Tunis",
    currency: "Tunisian Dinar",
    nationalLanguage: "Arabic",
    nationalFlag: "🇹🇳",
    population: "12 million",
    nationalDish: "Couscous",
    nationalAnthem: "Humat al-Hima",
    timeZone: "UTC+1"
  },
  {
    country: "Libya",
    capital: "Tripoli",
    famousLandmark: "Arch of Marcus Aurelius",
    currency: "Libyan Dinar",
    nationalLanguage: "Arabic",
    nationalFlag: "🇱🇾",
    population: "7 million",
    nationalDish: "Bazeen",
    nationalAnthem: "Libya, Libya, Libya",
    timeZone: "UTC+2"
  },
  {
    country: "Sudan",
    capital: "Khartoum",
    famousLandmark: "Pyramid of Meroë",
    currency: "Sudanese Pound",
    nationalLanguage: "Arabic",
    nationalFlag: "🇸🇩",
    population: "45 million",
    nationalDish: "Ful Medames",
    nationalAnthem: "Nahnu Jund Allah Jund Al-watan",
    timeZone: "UTC+2"
  },
  {
    country: "Ethiopia",
    capital: "Addis Ababa",
    famousLandmark: "Rock-Hewn Churches of Lalibela",
    currency: "Ethiopian Birr",
    nationalLanguage: "Amharic",
    nationalFlag: "🇪🇹",
    population: "120 million",
    nationalDish: "Injera",
    nationalAnthem: "March Forward, Dear Mother Ethiopia",
    timeZone: "UTC+3"
  },
  {
    country: "Kenya",
    capital: "Nairobi",
    famousLandmark: "Masai Mara National Reserve",
    currency: "Kenyan Shilling",
    nationalLanguage: "Swahili, English",
    nationalFlag: "🇰🇪",
    population: "54 million",
    nationalDish: "Ugali",
    nationalAnthem: "Ee Mungu Nguvu Yetu",
    timeZone: "UTC+3"
  },
  {
    country: "South Sudan",
    capital: "Juba",
    famousLandmark: "Nimule National Park",
    currency: "South Sudanese Pound",
    nationalLanguage: "English",
    nationalFlag: "🇸🇸",
    population: "12 million",
    nationalDish: "Kisra",
    nationalAnthem: "South Sudan Oyee!",
    timeZone: "UTC+3"
  },
  {
    country: "Ghana",
    capital: "Accra",
    famousLandmark: "Kwame Nkrumah Mausoleum",
    currency: "Ghanaian Cedi",
    nationalLanguage: "English",
    nationalFlag: "🇬🇭",
    population: "31 million",
    nationalDish: "Fufu",
    nationalAnthem: "God Bless Our Homeland Ghana",
    timeZone: "UTC"
  },
  {
    country: "Cameroon",
    capital: "Yaoundé",
    famousLandmark: "Mount Cameroon",
    currency: "Central African CFA Franc",
    nationalLanguage: "English, French",
    nationalFlag: "🇨🇲",
    population: "27 million",
    nationalDish: "Ndolé",
    nationalAnthem: "O Cameroon, Cradle of our Forefathers",
    timeZone: "UTC+1"
  },
  {
    country: "Democratic Republic of the Congo",
    capital: "Kinshasa",
    famousLandmark: "Kinshasa Cathedral",
    currency: "Congolese Franc",
    nationalLanguage: "French",
    nationalFlag: "🇨🇩",
    population: "101 million",
    nationalDish: "Fufu",
    nationalAnthem: "Debout Congolais",
    timeZone: "UTC+1 to +2"
  },
  {
    country: "Zambia",
    capital: "Lusaka",
    famousLandmark: "Victoria Falls",
    currency: "Zambian Kwacha",
    nationalLanguage: "English",
    nationalFlag: "🇿🇲",
    population: "19 million",
    nationalDish: "Nshima",
    nationalAnthem: "Stand and Sing of Zambia, Proud and Free",
    timeZone: "UTC+2"
  },
  {
    country: "Zimbabwe",
    capital: "Harare",
    famousLandmark: "Great Zimbabwe",
    currency: "Zimbabwean Dollar",
    nationalLanguage: "Shona, Ndebele, English",
    nationalFlag: "🇿🇼",
    population: "15 million",
    nationalDish: "Sadza",
    nationalAnthem: "Blessed be the land of Zimbabwe",
    timeZone: "UTC+2"
  }
];

// Array of mythical creatures and their corresponding time thresholds
const mythicalCreatures = [
  {
    time: 1,
    creature: "Fairy",
    info: {
      origin: "Various folklore, often European",
      speed: "Quick and agile",
      lifespan: "Long, though exact duration varies"
    }
  },
  {
    time: 2,
    creature: "Leprechaun",
    info: {
      origin: "Irish folklore",
      speed: "Fast, especially when evading capture",
      lifespan: "Very long, potentially immortal"
    }
  },
  {
    time: 3,
    creature: "Basilisk",
    info: {
      origin: "European mythology",
      speed: "Slithering, but can move swiftly",
      lifespan: "Long-lived, possibly centuries"
    }
  },
  {
    time: 4,
    creature: "Unicorn",
    info: {
      origin: "Various mythologies, notably European",
      speed: "Swift and graceful",
      lifespan: "Long-lived, potentially immortal"
    }
  },
  {
    time: 5,
    creature: "Dragon",
    info: {
      origin: "Celtic and European folklore",
      speed: "Variable, depending on size and type",
      lifespan: "Hundreds to thousands of years"
    }
  },
  {
    time: 6,
    creature: "Pegasus",
    info: {
      origin: "Greek mythology",
      speed: "Extremely fast, capable of flight",
      lifespan: "Long-lived, potentially immortal"
    }
  },
  {
    time: 7,
    creature: "Werewolf",
    info: {
      origin: "Various mythologies, notably European",
      speed: "Fast and agile, especially in wolf form",
      lifespan: "Long, possibly tied to human lifespan"
    }
  },
  {
    time: 8,
    creature: "Goblin",
    info: {
      origin: "European folklore",
      speed: "Quick and elusive",
      lifespan: "Long, though not immortal"
    }
  },
  {
    time: 9,
    creature: "Cyclops",
    info: {
      origin: "Greek mythology",
      speed: "Powerful but slow-moving",
      lifespan: "Long-lived, but exact duration varies"
    }
  },
  {
    time: 10,
    creature: "Phoenix",
    info: {
      origin: "Ancient Egypt and Greek mythology",
      speed: "Uncertain, but likely fast",
      lifespan: "Regenerates after death, essentially immortal"
    }
  },
  {
    time: 11,
    creature: "Chimera",
    info: {
      origin: "Greek mythology",
      speed: "Variable, depending on the animal parts",
      lifespan: "Long-lived, but varies by configuration"
    }
  },
  {
    time: 12,
    creature: "Banshee",
    info: {
      origin: "Irish mythology",
      speed: "Swift and ethereal",
      lifespan: "Very long, tied to its wailing nature"
    }
  },
  {
    time: 13,
    creature: "Hydra",
    info: {
      origin: "Greek mythology",
      speed: "Multiple heads, can attack swiftly",
      lifespan: "Regenerates heads, possibly immortal"
    }
  },
  {
    time: 14,
    creature: "Kelpie",
    info: {
      origin: "Scottish folklore",
      speed: "Swift in water, can transform",
      lifespan: "Long-lived, tied to its aquatic nature"
    }
  },
  {
    time: 15,
    creature: "Griffin",
    info: {
      origin: "Ancient Mesopotamia and Greek mythology",
      speed: "Fast, able to fly and run",
      lifespan: "Unknown, but likely long"
    }
  },
  {
    time: 16,
    creature: "Troll",
    info: {
      origin: "Scandinavian folklore",
      speed: "Strong and resilient",
      lifespan: "Very long, potentially immortal"
    }
  },
  {
    time: 17,
    creature: "Gorgon",
    info: {
      origin: "Greek mythology",
      speed: "Variable, depending on the creature",
      lifespan: "Long-lived, but not immortal"
    }
  },
  {
    time: 18,
    creature: "Vampire",
    info: {
      origin: "Various mythologies, notably European",
      speed: "Swift and agile",
      lifespan: "Very long, potentially immortal"
    }
  },
  {
    time: 19,
    creature: "Fenghuang",
    info: {
      origin: "Chinese mythology",
      speed: "Uncertain, often depicted as majestic",
      lifespan: "Very long, possibly immortal"
    }
  },
  {
    time: 20,
    creature: "Mermaid",
    info: {
      origin: "Various cultures, including Greek and Norse mythology",
      speed: "Swift swimmers",
      lifespan: "Unknown, but possibly long due to connection to the sea"
    }
  },
  {
    time: 21,
    creature: "Jinn",
    info: {
      origin: "Arabian mythology",
      speed: "Can move at supernatural speeds",
      lifespan: "Very long, potentially immortal"
    }
  },
  {
    time: 22,
    creature: "Siren",
    info: {
      origin: "Greek mythology",
      speed: "Captivating singers, swift in water",
      lifespan: "Long-lived, tied to the sea"
    }
  },
  {
    time: 23,
    creature: "Golem",
    info: {
      origin: "Jewish folklore",
      speed: "Slow and deliberate",
      lifespan: "Lives until its purpose is fulfilled"
    }
  },
  {
    time: 24,
    creature: "Wendigo",
    info: {
      origin: "Algonquian folklore",
      speed: "Fast and relentless",
      lifespan: "Long-lived, driven by hunger"
    }
  },
  {
    time: 25,
    creature: "Centaur",
    info: {
      origin: "Greek mythology",
      speed: "Fast runners, able to gallop",
      lifespan: "Unknown, but likely long due to their connection to horses"
    }
  },
  {
    time: 26,
    creature: "Nymph",
    info: {
      origin: "Greek mythology",
      speed: "Swift and graceful",
      lifespan: "Long-lived, tied to nature"
    }
  },
  {
    time: 27,
    creature: "Manticore",
    info: {
      origin: "Persian mythology",
      speed: "Fast and ferocious",
      lifespan: "Long-lived, formidable predator"
    }
  },
  {
    time: 28,
    creature: "Faun",
    info: {
      origin: "Roman mythology",
      speed: "Nimble and agile",
      lifespan: "Long-lived, tied to nature and revelry"
    }
  },
  {
    time: 29,
    creature: "Jackalope",
    info: {
      origin: "North American folklore",
      speed: "Fast and elusive",
      lifespan: "Long-lived, known for mischief"
    }
  },
  {
    time: 30,
    creature: "Sasquatch",
    info: {
      origin: "North American folklore",
      speed: "Fast and elusive",
      lifespan: "Long-lived, adapted to wilderness"
    }
  }
];

let score = 0;
let timeRemaining = 45;
let timerInterval;

document.addEventListener("DOMContentLoaded", function() {
  startGame();
});

function startGame() {
  // Choose a random country from the array
  const randomIndex = Math.floor(Math.random() * countries.length);
  const currentCountry = countries[randomIndex];

  // Choose a random category
  const categories = ["capital", "nationalLanguage", "nationalFlag", "population", "famousLandmark", "nationalDish", "nationalAnthem", "timeZone", "currency"];

  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const chosenCategory = categories[randomCategoryIndex];

  // Display the hint based on the chosen category
  document.getElementById("hints").textContent = `Hint: ${currentCountry[chosenCategory]}`;

  // Store the information for checking the guess
  window.currentCountryIndex = randomIndex;
  window.chosenCategory = chosenCategory;

  // Reset the result message
  document.getElementById("result").textContent = "";

  // Clear the input field
  document.getElementById("userInput").value = "";

  // Focus on the input field
  document.getElementById("userInput").focus();

  // Display the chosen category (already capitalized)
  document.getElementById("category").textContent = `Category: ${chosenCategory.charAt(0).toUpperCase() + chosenCategory.slice(1)}`;

  // Show the navbar when the game starts
  const navbar = document.querySelector(".navbar");
  navbar.style.display = "flex";

  // Reset timer
  timeRemaining = 30;
  document.getElementById("timer").textContent = `Time: ${timeRemaining}`;

  // Start timer
  clearInterval(timerInterval); // Clear any existing interval
  timerInterval = setInterval(updateTimer, 1000);

  // Hide the next button
  document.getElementById("nextButton").style.display = "none";

  // Reset the mythical creature display
  document.getElementById("mythicalCreature").innerHTML = ""; 
  document.getElementById("creatureInfo").innerHTML = ''; // Clear previous info
}

function checkGuess() {
  const userGuess = document.getElementById("userInput").value.trim().toLowerCase();
  const correctCountry = countries[window.currentCountryIndex].country.toLowerCase();
  const resultElement = document.getElementById("result");

  if (userGuess === correctCountry) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";

    const correctSound = new Audio("./ding-126626.mp3");
    correctSound.play();

    score++;
    document.getElementById("score").textContent = `Score: ${score}`;

    // Find the first mythical creature that should be awarded
    let awardedCreature = null;
    mythicalCreatures.forEach(creature => {
      if (timeRemaining <= creature.time && !awardedCreature) {
        awardedCreature = creature;
      }
    });

    if (awardedCreature) {
      alert(`You've earned a ${awardedCreature.creature}!`);

      // Display mythical creature information
      const creatureElement = document.getElementById("mythicalCreature");
      creatureElement.textContent = `Mythical Creature: ${awardedCreature.creature}`;

      const creatureInfo = document.getElementById("creatureInfo");
      creatureInfo.innerHTML = `
        <p><strong>Origin:</strong> ${awardedCreature.info.origin}</p>
        <p><strong>Speed:</strong> ${awardedCreature.info.speed}</p>
        <p><strong>Lifespan:</strong> ${awardedCreature.info.lifespan}</p>
      `;
    }
  } else {
    resultElement.textContent = "Incorrect.";
    resultElement.style.color = "red";

    const incorrectSound = new Audio("./buzzer-or-wrong-answer-20582.mp3");
    incorrectSound.play();
  }

  clearInterval(timerInterval);
  document.getElementById("nextButton").style.display = "block";
}


function updateTimer() {
  timeRemaining--;
  document.getElementById("timer").textContent = `Time: ${timeRemaining}`;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    document.getElementById("result").textContent = "Time's up!";
    document.getElementById("result").style.color = "red";
  }
}

function nextRound() {
  clearInterval(timerInterval);
  startGame();
}

// Display the mythical creature section by default
document.getElementById("mythicalCreatureSection").style.display = "block";