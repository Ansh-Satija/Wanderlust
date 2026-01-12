const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "wanderlust_DEV/qjqjlyldxwxw9qquteg0",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716987958/wanderlust_DEV/qjqjlyldxwxw9qquteg0.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-118.68517, 34.034378],
    },
    category: "Beach",
    __v: 4,
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "wanderlust_DEV/namhk5ymo5bnicfmcjlk",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991317/wanderlust_DEV/namhk5ymo5bnicfmcjlk.webp",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-74.0059945, 40.7127492],
    },
    category: "Iconic-Cities",
    __v: 5,
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "wanderlust_DEV/by9ikfxvff10rzennoqx",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988379/wanderlust_DEV/by9ikfxvff10rzennoqx.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-106.819885, 39.18869],
    },
    category: "Mountains",
    __v: 4,
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "wanderlust_DEV/bvzxglqyickrvjipdmlx",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988478/wanderlust_DEV/bvzxglqyickrvjipdmlx.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [11.256129, 43.771485],
    },
    category: "Historical-Homes",
    __v: 4,
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "wanderlust_DEV/hutflk3nyzaupi9x0ptm",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988577/wanderlust_DEV/hutflk3nyzaupi9x0ptm.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-122.6789, 45.52068],
    },
    category: "Campsite",
    __v: 4,
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "wanderlust_DEV/wme2xvhlclk68mfp0in5",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989163/wanderlust_DEV/wme2xvhlclk68mfp0in5.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-86.85176, 21.16188],
    },
    category: "Beach",
    __v: 4,
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "wanderlust_DEV/gfofvk7cupd3npjo8heu",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989294/wanderlust_DEV/gfofvk7cupd3npjo8heu.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [-120.12787, 39.267319],
      type: "Point",
    },
    category: "Lake",
    __v: 4,
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "wanderlust_DEV/fcwnhmpnm7jqh1u43ca7",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990160/wanderlust_DEV/fcwnhmpnm7jqh1u43ca7.webp",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-118.24168, 34.054077],
    },
    category: "Trending",
    __v: 4,
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "wanderlust_DEV/k1cmlc5qzwss3ifxhpuy",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989774/wanderlust_DEV/k1cmlc5qzwss3ifxhpuy.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [7.229043, 46.096067],
    },
    category: "Ski-in-out",
    __v: 4,
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "wanderlust_DEV/djqdlt09pkxr2ulo3brg",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990353/wanderlust_DEV/djqdlt09pkxr2ulo3brg.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [30.536625, 38.820522],
      type: "Point",
    },
    category: "Woodlands",
    __v: 4,
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "wanderlust_DEV/ddv5nd4vmimrm2nlhyni",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990541/wanderlust_DEV/ddv5nd4vmimrm2nlhyni.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [4.9, 52.378],
    },
    category: "Historical-Homes",
    __v: 4,
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "wanderlust_DEV/llidawturxcrg8qhnyys",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990827/wanderlust_DEV/llidawturxcrg8qhnyys.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [120.782905, 23.831716],
    },
    category: "Boat",
    __v: 5,
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "wanderlust_DEV/yiymbouxckg3tg9zos1t",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990989/wanderlust_DEV/yiymbouxckg3tg9zos1t.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-0.22985, 51.74913],
    },
    category: "Rooms",
    __v: 4,
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "wanderlust_DEV/e6uxmyfmpaheyy0k75ad",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991126/wanderlust_DEV/e6uxmyfmpaheyy0k75ad.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-71.0568, 42.35888],
    },
    category: "Iconic-Cities",
    __v: 4,
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "wanderlust_DEV/a0rvxo84act3vfznez98",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991187/wanderlust_DEV/a0rvxo84act3vfznez98.jpg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [115.2191175, -8.6524973],
    },
    category: "Amazing-Pools",
    __v: 4,
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "wanderlust_DEV/a328pyw9dmpsgnnq7x0p",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991388/wanderlust_DEV/a328pyw9dmpsgnnq7x0p.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-115.57096, 51.176613],
    },
    category: "Mountains",
    __v: 4,
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "wanderlust_DEV/oscydu4gaq1h1lgls8gz",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991773/wanderlust_DEV/oscydu4gaq1h1lgls8gz.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [-80.18537321875, 25.76513515625],
      type: "Point",
    },
    category: "Apartment",
    __v: 4,
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "wanderlust_DEV/zbvktayoqzlmha4iv8ai",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991878/wanderlust_DEV/zbvktayoqzlmha4iv8ai.jpg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [98.390863, 7.882835],
    },
    category: "Bed-and-Breakfasts",
    __v: 4,
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "wanderlust_DEV/vuo9zehyodtdo6dhsqsr",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992061/wanderlust_DEV/vuo9zehyodtdo6dhsqsr.webp",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [-4.228937, 57.477415],
      type: "Point",
    },
    category: "Castles",
    __v: 4,
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "wanderlust_DEV/uxnuhzyo6ozuy6visfqj",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992304/wanderlust_DEV/uxnuhzyo6ozuy6visfqj.jpg",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [55.293941, 25.265941],
    },
    category: "Amazing-Pools",
    __v: 4,
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "wanderlust_DEV/mz8iufrrve3dxv4qsd4t",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992388/wanderlust_DEV/mz8iufrrve3dxv4qsd4t.jpg",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-109.172599073804, 47.0725146587006],
    },
    category: "Cabins",
    __v: 4,
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "wanderlust_DEV/iqqmjypakdk6azfn21x1",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992552/wanderlust_DEV/iqqmjypakdk6azfn21x1.jpg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [25.328008, 37.446178],
    },
    category: "New",
    __v: 5,
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "wanderlust_DEV/arvhjg9y8ehc8heq5dqi",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992704/wanderlust_DEV/arvhjg9y8ehc8heq5dqi.webp",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [-84.092347, 9.932191],
      type: "Point",
    },
    category: "Camping",
    __v: 4,
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "wanderlust_DEV/k9qiqwbzo55fimvfay8q",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992900/wanderlust_DEV/k9qiqwbzo55fimvfay8q.jpg",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-79.93863, 32.789284],
    },
    category: "Farm",
    __v: 4,
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "wanderlust_DEV/igwuigcrdfgaisf1e4zn",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993101/wanderlust_DEV/igwuigcrdfgaisf1e4zn.jpg",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [139.1485991, 35.76478424],
    },
    category: "Trending",
    __v: 4,
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "wanderlust_DEV/evpuwtpctsbdnxnqvgox",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993292/wanderlust_DEV/evpuwtpctsbdnxnqvgox.jpg",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-71.5783054333969, 43.6898878153712],
    },
    category: "Countryside",
    __v: 4,
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "wanderlust_DEV/m0hwiwvtmhi4kbtorztw",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993352/wanderlust_DEV/m0hwiwvtmhi4kbtorztw.jpg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [100.58672, 13.772545],
      type: "Point",
    },
    category: "Amazing-Pools",
    __v: 4,
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "wanderlust_DEV/ckriqwxzfzourxeyilbv",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993504/wanderlust_DEV/ckriqwxzfzourxeyilbv.webp",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      type: "Point",
      coordinates: [-106.819885, 39.18869],
    },
    category: "Arctic",
    __v: 4,
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "wanderlust_DEV/zyqegxq7wfomfzg9pioq",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993785/wanderlust_DEV/zyqegxq7wfomfzg9pioq.webp",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    reviews: [
         "685a4cabbb5cd59f6ec10c00",
         "685a65d647f1e008b89fe66a",
         "68f8acb712d733394245b718",
         "696361ec74421d56550fdab5",
    ],
    geometry: {
      coordinates: [-84.092347, 9.932191],
      type: "Point",
    },
    category: "Beach",
    __v: 4,
  },
];

module.exports = { data: sampleListings };