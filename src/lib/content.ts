/**
 * Mrunmayee: Authentic Puneri Food & Hospitality Brand
 * Grounded in Pune's culinary heritage, historic wadas, peth traditions,
 * and warm Maharashtrian hospitality.
 *
 * "Punyatla swaad. Manapasun."
 * "Ya, basa. Jevun ghya."
 */

export type Cafe = {
  id: string;
  name: string;
  area: string;
  blurb: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
};

export const CAFES: Cafe[] = [
  {
    id: "fc-road",
    name: "FC Road Flagship",
    area: "Shivajinagar, Pune",
    blurb:
      "Our flagship café on Fergusson College Road, where generations of Punekars have debated literature, theatre, and cricket over steaming brass cups of amruttulya chaha.",
    address: "1184, Fergusson College Road, Shivajinagar, Pune 411005, Maharashtra, India",
    hours: "7:30 am to 11:30 pm",
    phone: "+91 20 2551 0001",
    image: "/images/cafe-story.jpg",
  },
  {
    id: "sadashiv-peth",
    name: "Sadashiv Peth Wada",
    area: "Sadashiv Peth, Pune",
    blurb:
      "Tucked within an authentic restored wada courtyard, with carved teak devdis and brass hanging lamps. Here we serve slow-simmered pithla-bhakri and festive thalis in true Puneri baithak style.",
    address: "422, Sadashiv Peth, Near SP College, Pune 411030, Maharashtra, India",
    hours: "8:00 am to 10:30 pm",
    phone: "+91 20 2447 0002",
    image: "/images/place-shaniwar-real.jpg",
  },
];

export type MenuItem = {
  name: string;
  marathiName?: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  marathiTitle: string;
  description: string;
  items: MenuItem[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "pethatla-nashta",
    title: "Pethatla Nashta",
    marathiTitle: "पेठातला नाश्ता",
    description:
      "Served from 7:30 am to 11:30 am. Morning rituals of the peths: freshly fried kothimbir vadi, fiery misal, steaming pohe, and hand-patted thalipeeth with homemade white loni.",
    items: [
      {
        name: "Puneri Misal Pav",
        marathiName: "पुणेरी मिसळ पाव",
        description:
          "Sprouted matki cooked in a fragrant, spicy tarri broth, topped with crunchy chivda farsan, chopped onions, fresh coriander, and a wedge of lime. Served with soft bakery pav and extra kat.",
        price: "₹ 140",
        tags: ["House Special", "Puneri Classic", "Spicy"],
      },
      {
        name: "Kande Pohe",
        marathiName: "कांदे पोहे",
        description:
          "Puffed flattened rice tempered with black mustard, curry leaves, green chillies, golden turmeric, and roasted groundnuts. Finished with fresh coconut and lime.",
        price: "₹ 80",
        tags: ["Peth Classic", "Vegetarian"],
      },
      {
        name: "Bhajaniche Thalipeeth",
        marathiName: "भाजणीचे थालिपीठ",
        description:
          "Traditional multi-grain roasted flour dough mixed with finely chopped onion, coriander, and ajwain, hand-patted on tawa and griddled crisp. Served with fresh white butter (loni) and garlic thecha.",
        price: "₹ 130",
        tags: ["Heirloom Recipe", "Vegetarian"],
      },
      {
        name: "Crispy Kothimbir Vadi",
        marathiName: "कोथिंबीर वडी",
        description:
          "Fresh country cilantro and spiced besan steamed into tender cakes, then pan-crisped with toasted white sesame seeds. Served with green mint-coriander chutney.",
        price: "₹ 120",
        tags: ["Crispy", "Vegetarian"],
      },
      {
        name: "Sabudana Khichdi",
        marathiName: "साबुदाणा खिचडी",
        description:
          "Plump sago pearls tempered with roasted crushed peanuts, cumin seeds, and slit green chillies in pure cow ghee. Served with chilled dahi.",
        price: "₹ 110",
        tags: ["Upvas Special", "Vegetarian"],
      },
      {
        name: "Dadpe Pohe",
        marathiName: "दडपे पोहे",
        description:
          "Delicate raw thin pohe cured under grated fresh coconut, finely minced onion, lemon juice, and a smoking mustard-curry leaf tadka. A light, refreshing morning favourite.",
        price: "₹ 90",
        tags: ["Light & Fresh", "Vegetarian"],
      },
      {
        name: "Batata Vada (2 pcs)",
        marathiName: "पुणेरी बटाटा वडा",
        description:
          "Spiced mashed potato with ginger, green chilli, and fresh coriander, coated in crisp chickpea batter and golden-fried. Served with fiery dry lasun-khobra chutney.",
        price: "₹ 70",
        tags: ["Street Classic", "Hot"],
      },
      {
        name: "Bun Maska & Amruttulya Chaha",
        marathiName: "बन मस्का आणि अमृततुल्य चहा",
        description:
          "Freshly baked soft bun lavished with salted butter, served alongside a piping-hot brass cup of our slow-simmered ginger-cardamom tea.",
        price: "₹ 85",
        tags: ["Café Essential"],
      },
    ],
  },
  {
    id: "gharghuti-jevan",
    title: "Gharghuti Jevan",
    marathiTitle: "घरगुती जेवण",
    description:
      "Served from 11:30 am to 10:30 pm. Hearty, wholesome meals rooted in Maharashtrian wada kitchens. Hand-patted rustic bhakris, stone-ground masalas, and slow-cooked earthen pot curries.",
    items: [
      {
        name: "Garama-Garam Pithla Bhakri",
        marathiName: "गरमागरम पिठलं भाकरी",
        description:
          "Slow-simmered besan seasoned with garlic, green chillies, and cumin, served bubbling hot with your choice of hand-patted Jowar or Bajra bhakri, fresh onion, and fiery kharda.",
        price: "₹ 190",
        tags: ["Signature Dish", "Rustic Maharashtrian"],
      },
      {
        name: "Zunka Bhakri",
        marathiName: "झुणका भाकरी",
        description:
          "Dry-roasted gram flour seasoned with crushed garlic cloves, spring onions, curry leaves, and red chillies. Served with hot bhakri and sweet sliced onion.",
        price: "₹ 180",
        tags: ["Vegetarian", "Traditional"],
      },
      {
        name: "Puneri Bharli Vangi",
        marathiName: "पुणेरी भरली वांगी",
        description:
          "Tender baby brinjals stuffed with roasted peanut, sesame, dry coconut, and stone-ground Puneri goda masala, gently braised in a rich, dark gravy.",
        price: "₹ 210",
        tags: ["Heirloom Recipe", "Vegan"],
      },
      {
        name: "Varan Bhaat with Sajuk Tup",
        marathiName: "वरण भात आणि साजूक तूप",
        description:
          "Steamed fragrant Kolam rice topped with mild, slow-simmered yellow toor dal, a generous swirl of pure golden cow ghee (sajuk tup), and fresh lemon.",
        price: "₹ 160",
        tags: ["Soul Food", "Mild"],
      },
      {
        name: "Puneri Masale Bhaat",
        marathiName: "पुणेरी मसाले भात",
        description:
          "Festive spiced rice cooked with ivy gourd (tindora), green peas, cashews, whole cloves, and heirloom goda masala, garnished with fresh coconut and coriander.",
        price: "₹ 195",
        tags: ["Festive Classic", "Vegetarian"],
      },
      {
        name: "Katachi Amti & Rice Plate",
        marathiName: "कट्याची आमटी आणि भात",
        description:
          "Tangy, spicy, and deeply aromatic chana dal broth flavored with kokum, jaggery, and goda masala. Served with steaming rice, kurdai, and roasted papad.",
        price: "₹ 175",
        tags: ["Vegetarian"],
      },
      {
        name: "Shev Bhaji (Khandeshi / Puneri Style)",
        marathiName: "झणझणीत शेव भाजी",
        description:
          "Spicy, thin roasted onion-garlic rassa served with a generous bowl of crisp ghatiya shev to be folded in at the table.",
        price: "₹ 190",
        tags: ["Spicy"],
      },
      {
        name: "Sukka Batata Bhaji with Puri (5 pcs)",
        marathiName: "बटाटा भाजी आणि पुरी",
        description:
          "Homestyle dry potato preparation tempered with mustard seeds, green chillies, and turmeric, served with five freshly puffed whole wheat puris.",
        price: "₹ 160",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "god-ghoshti",
    title: "God Ghoshti",
    marathiTitle: "गोड गोष्टी",
    description:
      "Sweet endings, celebratory preparations, and the pride of Maharashtrian confectionery. Made with pure ghee, organic jaggery, saffron, and slow-reduced milk.",
    items: [
      {
        name: "Ukadiche Modak (2 pcs)",
        marathiName: "उकडीचे मोदक",
        description:
          "Hand-pleated steamed rice flour parcels filled with freshly grated coconut, cardamom, and organic jaggery. Drizzled tableside with warm sajuk ghee.",
        price: "₹ 150",
        tags: ["Ganpati Prasad", "Heirloom Special"],
      },
      {
        name: "Puran Poli with Katachi Amti",
        marathiName: "पुरणपोळी आणि आमटी",
        description:
          "Paper-thin, golden griddled flatbread stuffed with sweet cooked chana dal, jaggery, and nutmeg. Served with warm milk or spicy katachi amti and ghee.",
        price: "₹ 160",
        tags: ["Festive Special", "Vegetarian"],
      },
      {
        name: "Pune Mango Mastani",
        marathiName: "पुणेरी मँगो मस्तानी",
        description:
          "Pune's world-famous dessert drink: velvety Alphonso mango shake topped with a generous scoop of ice cream, slivered pistachios, almonds, and glazed cherries.",
        price: "₹ 180",
        tags: ["Iconic Pune", "Cold"],
      },
      {
        name: "Kesar Pista Shrikhand",
        marathiName: "केशर पिस्ता श्रीखंड",
        description:
          "Thick, strained hung curd slowly folded with pure Kashmiri saffron strands, green cardamom, and charoli nuts. Smooth, tangy, and subtly sweet.",
        price: "₹ 120",
        tags: ["Vegetarian"],
      },
      {
        name: "Badam Pista Basundi",
        marathiName: "बदाम पिस्ता बासुंदी",
        description:
          "Full-cream milk simmered patiently in an open kadai until rich and dense, perfumed with saffron, crushed cardamom, and roasted almond slivers.",
        price: "₹ 140",
        tags: ["Rich & Creamy"],
      },
      {
        name: "Gulkand Mastani",
        marathiName: "गुलकंद मस्तानी",
        description:
          "Fragrant milkshake prepared with sun-cured damask rose petal preserve (gulkand), topped with cream, rose petals, and chopped nuts.",
        price: "₹ 170",
        tags: ["Cooling", "Cold"],
      },
    ],
  },
  {
    id: "chaha-ani-bakery",
    title: "Chaha Ani Bakery",
    marathiTitle: "चहा आणि बेकरी",
    description:
      "The pulse of everyday Pune. From the bubbling pots of Amruttulya chaha to the nostalgic butter biscuits of Pune Camp bakeries.",
    items: [
      {
        name: "Puneri Amruttulya Chaha",
        marathiName: "पुणेरी अमृततुल्य चहा",
        description:
          "The signature tea of Pune: slow-boiled strong Assam tea leaves steeped with fresh ginger, crushed green cardamom, and lemongrass in thick milk.",
        price: "₹ 30",
        tags: ["All Day", "Hot"],
      },
      {
        name: "Masala Dudh",
        marathiName: "मसाला दूध",
        description:
          "Warming sweetened milk infused with saffron, nutmeg, green cardamom, roasted almond slivers, and charoli. The classic Kojagiri tradition.",
        price: "₹ 80",
        tags: ["Traditional"],
      },
      {
        name: "Pune Camp Shrewsbury Biscuits (4 pcs)",
        marathiName: "पुणे कॅम्प श्रुजबरी बिस्किटे",
        description:
          "Authentic melt-in-the-mouth, buttery shortbread biscuits crafted using the historic Pune Camp recipe dating back decades.",
        price: "₹ 70",
        tags: ["Bakery Classic"],
      },
      {
        name: "Irani Maska Pav",
        marathiName: "मस्का पाव",
        description:
          "Freshly baked crusty laadi pav smeared generously with pure salted dairy butter. Perfect for dunking into hot chaha.",
        price: "₹ 45",
        tags: ["Adda Classic"],
      },
      {
        name: "Crispy Jeera Khari (4 pcs)",
        marathiName: "जिरा खारी",
        description:
          "Flaky, golden-layered puff pastry seasoned with roasted cumin seeds. Crisp, airy, and baked fresh every morning.",
        price: "₹ 50",
        tags: ["Bakery Classic"],
      },
      {
        name: "South Deccan Filter Coffee",
        marathiName: "फिल्टर कॉफी",
        description:
          "Freshly ground dark roast coffee brewed in a traditional brass filter, frothed with boiled whole milk and served in a brass dabarah.",
        price: "₹ 65",
        tags: ["Hot"],
      },
    ],
  },
  {
    id: "pethchi-baithak",
    title: "Pethchi Baithak",
    marathiTitle: "पेठची बैठक",
    description:
      "Traditional digestive drinks, summer refreshers, and artisanal local coolers served chilled in clay kulhads and brassware.",
    items: [
      {
        name: "Kokum Solkadhi",
        marathiName: "कोकम सोलकढी",
        description:
          "Freshly pressed coconut milk churned with wild red kokum agal, crushed garlic, coriander, and green chillies. The consummate Maharashtrian digestive.",
        price: "₹ 90",
        tags: ["Digestive", "Cold"],
      },
      {
        name: "Chilled Piyush",
        marathiName: "थंडगार पियुष",
        description:
          "A celebrated Maharashtrian cooler made by whisking creamy shrikhand with fresh churned buttermilk, infused with nutmeg and saffron.",
        price: "₹ 95",
        tags: ["Cooling", "Rich"],
      },
      {
        name: "Kairi Panha",
        marathiName: "कैरीचे पन्हे",
        description:
          "Slow-cooked raw mango pulp blended with organic jaggery, roasted cumin, black salt, and cardamom. The quintessential Pune summer elixir.",
        price: "₹ 80",
        tags: ["Seasonal", "Cold"],
      },
      {
        name: "Kokum Sharbat with Sabja",
        marathiName: "कोकम सरबत आणि सबजा",
        description:
          "Wild kokum nectar with roasted cumin, rock salt, fresh mint, and cooling soaked sweet basil seeds.",
        price: "₹ 70",
        tags: ["Refreshing"],
      },
      {
        name: "Masala Taak (Buttermilk)",
        marathiName: "मसाला ताक",
        description:
          "Churned curd seasoned with ginger, green chilli paste, roasted jeera powder, coriander, and rock salt.",
        price: "₹ 50",
        tags: ["Digestive"],
      },
    ],
  },
  {
    id: "puneri-mejwani",
    title: "Puneri Mejwani",
    marathiTitle: "पुणेरी मेजवानी (थाळी)",
    description:
      "Joyful, abundant feasts for the whole table. Served on traditional bronze kansa plates with unlimited hospitality.",
    items: [
      {
        name: "Puneri Wada Thali",
        marathiName: "पुणेरी वाडा थाळी",
        description:
          "A complete Maharashtrian spread: Pithla, 2 hot Jowar Bhakris, Bharli Vangi, Varan Bhaat with sajuk ghee, Katachi Amti, Kothimbir Vadi, Thecha, Koshimbir, Papad, and Ukadiche Modak.",
        price: "₹ 380",
        tags: ["Complete Meal", "Vegetarian"],
      },
      {
        name: "Peshwai Mejwani (Serves 4)",
        marathiName: "पेशवाई मेजवानी (४ व्यक्तींसाठी)",
        description:
          "Grand banquet feast for tables of four or more: Puneri Masale Bhaat, Shahi Puran Poli, Bharli Vangi, Sukka Batata, Pithla Bhakri, Solkadhi, Kurdai, Koshimbir, and endless refills of Amruttulya Chaha.",
        price: "₹ 1,480",
        tags: ["Feast For 4", "Traditional"],
      },
      {
        name: "Ganeshotsav Festive Thali",
        marathiName: "गणेशोत्सव विशेष थाळी",
        description:
          "Special seasonal festive meal: 2 Ukadiche Modak, Puran Poli with katachi amti, Matki Usal, Aluchi Vadi, Masale Bhaat, Varan Bhaat, and fragrant saffron kheer.",
        price: "₹ 420",
        tags: ["Festive Special", "Vegetarian"],
      },
    ],
  },
  {
    id: "chhotyansathi-pan-khas-ghas",
    title: "Chhotyansathi Pan Khas Ghas",
    marathiTitle: "छोट्यांसाठी पण खास घास",
    description:
      "Gentle, delicious, and lovingly prepared plates for our younger guests. Chhotyansathi pan khas ghas, made with wholesome ingredients.",
    items: [
      {
        name: "Bal Gopal Varan Bhaat",
        marathiName: "बाल गोपाळ वरण भात",
        description:
          "Gentle, soft-cooked fragrant rice with mild yellow toor dal, a generous spoonful of sweet ghee, and a crispy mini papad.",
        price: "₹ 95",
        tags: ["Kids", "Mild"],
      },
      {
        name: "Cheese Thalipeeth Bites",
        marathiName: "चीझ थालिपीठ",
        description:
          "Crispy multi-grain mini thalipeeth topped with mild melted cheese, served with sweet tomato chutney.",
        price: "₹ 120",
        tags: ["Kids Favourite"],
      },
      {
        name: "Mini Batata Vada (Mild)",
        marathiName: "छोटा बटाटा वडा",
        description:
          "Two golden mini potato vadas made without harsh chillies, served with fresh coconut chutney and warm milk.",
        price: "₹ 80",
        tags: ["Kids"],
      },
      {
        name: "Mastani Junior",
        marathiName: "मस्तानी ज्युनिअर",
        description:
          "A delightful smaller glass of fresh mango mastani topped with vanilla ice cream and rainbow sprinkles.",
        price: "₹ 110",
        tags: ["Kids", "Cold"],
      },
    ],
  },
];

export type Recipe = {
  id: string;
  title: string;
  marathiTitle: string;
  category: string;
  blurb: string;
  image: string;
  read: string;
};

export const RECIPES: Recipe[] = [
  {
    id: "thalipeeth",
    title: "Bhajaniche Thalipeeth",
    marathiTitle: "भाजणीचे थालिपीठ",
    category: "Heirloom · Nashta",
    blurb:
      "The secrets of roasting grains for authentic Puneri bhajani, hand-patting on cast iron, and griddling crisp with white loni.",
    image: "/images/recipe-thalipeeth.jpg",
    read: "7 min read",
  },
  {
    id: "kothimbir-vadi",
    title: "Crispy Kothimbir Vadi",
    marathiTitle: "खुसखुशीत कोथिंबीर वडी",
    category: "Wada Kitchen · Snacks",
    blurb:
      "How to balance fresh country cilantro and besan, achieve the perfect two-stage steam and shallow crisp, and temper with sesame.",
    image: "/images/recipe-kothimbir-vadi.jpg",
    read: "6 min read",
  },
  {
    id: "bharli-vangi",
    title: "Puneri Bharli Vangi",
    marathiTitle: "पुणेरी भरली वांगी",
    category: "Traditional · Mains",
    blurb:
      "Slow-braising baby brinjals in a dark, rich paste of roasted peanuts, sesame seeds, and traditional stone-ground goda masala.",
    image: "/images/recipe-bharli-vangi.jpg",
    read: "9 min read",
  },
  {
    id: "masale-bhaat",
    title: "Festive Masale Bhaat",
    marathiTitle: "सणासुदीचा मसाले भात",
    category: "Peshwai Feast · Rice",
    blurb:
      "A fragrant, layered rice prepared with ivy gourd, tender green peas, whole roasted spices, and sajuk ghee.",
    image: "/images/recipe-masale-bhaat.jpg",
    read: "8 min read",
  },
  {
    id: "dadpe-pohe",
    title: "Traditional Dadpe Pohe",
    marathiTitle: "पारंपरिक दडपे पोहे",
    category: "Peth Classic · Nashta",
    blurb:
      "No-cook delicacy of raw thin poha cured under grated coconut and fresh lime, crowned with a crackling mustard-curry leaf tadka.",
    image: "/images/recipe-dadpe-pohe.jpg",
    read: "5 min read",
  },
  {
    id: "alu-vadi",
    title: "Patra Alu Vadi",
    marathiTitle: "अळूची वडी",
    category: "Heirloom · Snacks",
    blurb:
      "Colocasia leaves layered with spiced sweet-and-tangy tamarind-jaggery besan paste, rolled tight, steamed, and crisped in peanut oil.",
    image: "/images/recipe-alu-vadi.jpg",
    read: "8 min read",
  },
  {
    id: "amti-bhaat",
    title: "Katachi Amti & Kolam Rice",
    marathiTitle: "झणझणीत कट्याची आमटी",
    category: "Soul Food · Mains",
    blurb:
      "The quintessential festival companion: extracting the rich essence of chana dal with kokum, dried coconut, and warm spices.",
    image: "/images/recipe-amti-bhaat.jpg",
    read: "6 min read",
  },
  {
    id: "thecha",
    title: "Shengdana Kharda (Thecha)",
    marathiTitle: "शेंगदाणा खर्डा",
    category: "Accompaniments",
    blurb:
      "Green chillies, garlic pods, and roasted peanuts crushed coarsely in a stone khalbatta with rock salt and cold-pressed oil.",
    image: "/images/recipe-chutney.jpg",
    read: "4 min read",
  },
];

export type Festival = {
  id: string;
  title: string;
  marathiTitle: string;
  when: string;
  blurb: string;
  image: string;
  cta: string;
};

export const FESTIVALS: Festival[] = [
  {
    id: "ganesh-chaturthi",
    title: "Ganeshotsav & Modak Seva",
    marathiTitle: "पुण्याचा गणेशोत्सव आणि मोदक सेवा",
    when: "Bhadrapada (Aug – Sep)",
    blurb:
      "Pune is the spiritual home of public Ganeshotsav. For ten glorious days, the peths reverberate with dhol-tasha, fragrant dhoop, and the arrival of Ganpati Bappa. At Mrunmayee, our kitchens steam thousands of fresh ukadiche modaks drenched in warm cow ghee.",
    image: "/images/fest-ganesh-dagdusheth.png",
    cta: "Reserve Ganpati feast table",
  },
  {
    id: "diwali-pahat",
    title: "Diwali Pahat & Faral",
    marathiTitle: "पुणेरी दिवाळी पहाट आणि फराळ",
    when: "Ashwin – Kartika (Oct – Nov)",
    blurb:
      "At dawn, as the bells ring across Sarasbaug and misty morning ragas commence, Punekars gather for Diwali Pahat. We celebrate with freshly rolled anarse, crunchy chaklis, besan ladoos, and cups of steaming amruttulya chaha.",
    image: "/images/fest-diwali.jpg",
    cta: "Order Diwali Faral hamper",
  },
  {
    id: "sawai-gandharva",
    title: "Sawai Gandharva Bhimsen Mahotsav",
    marathiTitle: "सवाई गंधर्व भीमसेन संगीत महोत्सव",
    when: "Margashirsha (December)",
    blurb:
      "The crown jewel of Indian classical music founded by Bharat Ratna Pandit Bhimsen Joshi. Three nights and mornings of sublime ragas under the winter sky; we keep our stoves glowing through the night to serve hot chaha and thalipeeth to music lovers.",
    image: "/images/hero-pune.jpg",
    cta: "Late-night chaha & baithak",
  },
];

export type Place = {
  id: string;
  name: string;
  marathiName: string;
  kind: string;
  blurb: string;
  image: string;
};

export const PUNE_PLACES: Place[] = [
  {
    id: "shaniwar-wada",
    name: "Shaniwar Wada",
    marathiName: "शनिवार वाडा",
    kind: "Peshwa Seat of Power, 1732",
    blurb:
      "The historic fortress and palace of the Peshwas. Its towering Dilli Darwaza, spiked teak gates, stone foundations, and tranquil lotus fountains stand as eternal monuments to Maratha bravery and Pune's sovereign heritage.",
    image: "/images/place-shaniwar-real.jpg",
  },
  {
    id: "vishrambaug-wada",
    name: "Vishrambaug Wada",
    marathiName: "विश्रामबाग वाडा",
    kind: "Carved Teak Wada Architecture, 1807",
    blurb:
      "Famous for its ornate teakwood carved balconies, classical cypress-wood pillars, and grand Peshwa-period wada craftsmanship in the heart of Sadashiv Peth.",
    image: "/images/place-pune-heritage.jpg",
  },
  {
    id: "sinhagad",
    name: "Sinhagad Fort",
    marathiName: "सिंहगड किल्ला",
    kind: "Historic Maratha Hill Fortress",
    blurb:
      "The Lion's Fort high in the Sahyadri range. Generations of Punekars climb its stone steps at sunrise to relish earthen pots of thick curd (dahi-handi), piping-hot kanda bhaji, and freshly roasted bhakri.",
    image: "/images/place-sinhagad.jpg",
  },
  {
    id: "dagdusheth",
    name: "Dagdusheth Halwai Ganpati",
    marathiName: "श्रीमंत दगडूशेठ हलवाई गणपती",
    kind: "Living Heart of Pune's Faith",
    blurb:
      "Founded in 1893, this revered temple sits right in the beating heart of Budhwar Peth. The golden idol draws pilgrims from across the world, radiating peace, benevolence, and festive grace.",
    image: "/images/place-dagdusheth.jpg",
  },
];

export type FoodItem = {
  id: string;
  name: string;
  marathiName: string;
  caption: string;
  blurb: string;
  image: string;
};

export const PUNE_FOODS: FoodItem[] = [
  {
    id: "misal-pav",
    name: "Puneri Misal Pav",
    marathiName: "पुणेरी मिसळ",
    caption: "Spicy matki, crunchy farsan, steaming pav",
    blurb:
      "A bowl of sprouted moth beans simmered in a dark, fiery tarri, topped with crisp farsan and freshly diced onions. Pune's undisputed culinary heartbeat.",
    image: "/images/food-misal.jpg",
  },
  {
    id: "vada-pav",
    name: "Puneri Vada Pav",
    marathiName: "बटाटा वडा पाव",
    caption: "Golden batata vada with garlic thecha",
    blurb:
      "Spiced yellow potato mash dipped in golden besan batter and fried crisp, tucked inside soft pav with spicy garlic-coconut chutney.",
    image: "/images/food-vadapav.jpg",
  },
  {
    id: "mastani",
    name: "Pune Mango Mastani",
    marathiName: "पुणेरी मँगो मस्तानी",
    caption: "Thick mango shake, ice cream, roasted nuts",
    blurb:
      "Invented on Pune's M.G. Road and named in honour of Princess Mastani: a rich, velvety glass of Alphonso mango pulp, ice cream, cream, and crunchy dry fruits.",
    image: "/images/food-mastani.jpg",
  },
  {
    id: "bhakri-pithla",
    name: "Pithla Bhakri & Kharda",
    marathiName: "पिठलं भाकरी आणि खर्डा",
    caption: "Rustic jowar bhakri, bubbling pithla",
    blurb:
      "Hand-patted jowar bhakri baked over direct flame, accompanied by slow-simmered garlic pithla and raw onion with fiery stone-crushed thecha.",
    image: "/images/food-bhakri-pithla.jpg",
  },
  {
    id: "modak",
    name: "Ukadiche Modak",
    marathiName: "उकडीचे मोदक",
    caption: "Steamed rice parcels with coconut and jaggery",
    blurb:
      "Delicate rice flour dumplings pleated by hand, filled with grated coconut and organic jaggery, drenched in melted golden sajuk ghee.",
    image: "/images/food-modak.jpg",
  },
  {
    id: "puran-poli",
    name: "Puran Poli with Amti",
    marathiName: "पुरणपोळी आणि आमटी",
    caption: "Nutmeg-infused flatbread with katachi amti",
    blurb:
      "Tender, golden flatbread filled with sweet cooked chana dal and nutmeg-cardamom jaggery, paired with spicy katachi amti. The quintessential feast.",
    image: "/images/food-puran-poli.jpg",
  },
];

export type MarathiPhrase = {
  phrase: string;
  meaning: string;
  when: string;
};

export const MARATHI_PHRASES: MarathiPhrase[] = [
  {
    phrase: "पुण्यातला स्वाद. मनापासून.",
    meaning: "Punyatla swaad. Manapasun.",
    when: "The essence of our café: true flavors of Pune, straight from our heart",
  },
  {
    phrase: "या, बसा. जेवून घ्या.",
    meaning: "Ya, basa. Jevun ghya.",
    when: "Our unconditional welcome: come in, take a seat, and share a meal",
  },
  {
    phrase: "पुणे तिथे काय उणे!",
    meaning: "Pune tithe kay une!",
    when: "What could ever be lacking in Pune! The eternal Puneri pride",
  },
  {
    phrase: "एक कप अमृततुल्य चहा, भाऊ.",
    meaning: "Ek cup amruttulya chaha, bhau.",
    when: "One hot cutting tea, brother: Pune's fuel for thoughtful conversation",
  },
  {
    phrase: "दोन ते चार शांतता.",
    meaning: "Don te char shantata.",
    when: "2 to 4 PM: the city's sacred afternoon pause, when Pune recharges",
  },
  {
    phrase: "काय मग? कसं चाललंय?",
    meaning: "Kay mag? Kasa chalalay?",
    when: "The classic casual greeting across every peth and corner adda",
  },
  {
    phrase: "भाऊ, गरमागरम पिठलं-भाकरी आणा!",
    meaning: "Bhau, garamagaram pithla-bhakri aana!",
    when: "Brother, bring piping-hot pithla-bhakri right off the tawa",
  },
  {
    phrase: "अतिथी देवो भव.",
    meaning: "Atithi Devo Bhava.",
    when: "The sacred Indian code of heartfelt, generous hospitality",
  },
];

export type Award = {
  title: string;
  body: string;
  year: string;
};

export const AWARDS: Award[] = [
  {
    title: "Heritage Culinary Excellence Award",
    body: "Awarded by the Maharashtra Tourism & Heritage Board for preserving authentic Puneri wada recipes and community culinary traditions.",
    year: "2025",
  },
  {
    title: "Best Traditional Maharashtrian Café",
    body: "Recognised at the Pune Food & Hospitality Honours for excellence in authentic regional nashta and artisanal amruttulya tea brewing.",
    year: "2024",
  },
  {
    title: "Ganeshotsav Seva Sanmaan",
    body: "Honoured by the Pune Peth Samiti for our annual community Modak Seva and traditional festive meal distribution.",
    year: "2024",
  },
  {
    title: "Authentic Wada Hospitality Honour",
    body: "Celebrated by Pune Heritage Guild for sensitive wada interior restoration and respectful celebration of Deccan craftsmanship.",
    year: "2023",
  },
];

export type ShopProduct = {
  id: string;
  name: string;
  marathiName: string;
  category: string;
  price: string;
  blurb: string;
  image: string;
  badge?: string;
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "goda-masala",
    name: "Artisanal Puneri Goda Masala (250g)",
    marathiName: "पुणेरी गोडा मसाला",
    category: "Masale & Pantry",
    price: "₹ 280",
    blurb:
      "Heirloom stone-ground spice blend made with roasted dagad phool (stone flower), sesame, dry coconut, coriander, and whole Deccan spices.",
    image: "/images/product-goda-masala.jpg",
    badge: "Wada Recipe",
  },
  {
    id: "house-chai",
    name: "Amruttulya Chaha Blend (500g)",
    marathiName: "अमृततुल्य चहा पावडर",
    category: "Chaha & Bakery",
    price: "₹ 340",
    blurb:
      "Our proprietary single-estate Assam CTC blend infused with freshly crushed dried ginger, green cardamom pods, and wild lemongrass.",
    image: "/images/product-amruttulya-chaha.jpg",
    badge: "House Blend",
  },
  {
    id: "brass-strainer",
    name: "Tambat Ali Handcrafted Brass Chai Set",
    marathiName: "तांबट आळी पितळी चहा सेट",
    category: "Homeware & Brass",
    price: "₹ 1,850",
    blurb:
      "Hand-beaten brass tea strainer, brass pourer, and saucer set crafted by master coppersmiths of Pune's historic Tambat Ali.",
    image: "/images/product-brass-chai-set.jpg",
    badge: "Heritage Craft",
  },
  {
    id: "pune-shrewsbury",
    name: "Classic Camp Shrewsbury Biscuits (400g)",
    marathiName: "पुणे कॅम्प श्रुजबरी बिस्किटे",
    category: "Chaha & Bakery",
    price: "₹ 260",
    blurb:
      "Crisp, rich, buttery shortbread biscuits baked in small batches following the vintage Pune Camp recipe.",
    image: "/images/product-shrewsbury-biscuits.jpg",
    badge: "Pune Favourite",
  },
  {
    id: "sajuk-tup",
    name: "Pure A2 Gir Cow Sajuk Tup (500ml)",
    marathiName: "शुद्ध साजूक तूप",
    category: "Masale & Pantry",
    price: "₹ 750",
    blurb:
      "Traditional bilona-churned golden cow ghee, slow-cooked in small brass vats for unbeatable nutty aroma and richness.",
    image: "/images/product-sajuk-tup.jpg",
    badge: "Farm Direct",
  },
  {
    id: "pune-tote",
    name: "Peth Market Canvas Tote Bag",
    marathiName: "पेठ मार्केट कॅनव्हास पिशवी",
    category: "Bhet Khas (Gifts)",
    price: "₹ 490",
    blurb:
      "Heavyweight natural unbleached cotton tote, screen-printed with traditional Puneri patya calligraphy and wada arch motifs.",
    image: "/images/product-canvas-tote.jpg",
    badge: "100% Cotton",
  },
  {
    id: "festive-wada-hamper",
    name: "Puneri Wada Mejwani Festive Hamper",
    marathiName: "पुणेरी सण उत्सव मेजवानी हॅम्पर",
    category: "Festive Hampers",
    price: "₹ 2,450",
    blurb:
      "Curated celebration gift set with handcrafted Tambat Ali brassware, pure A2 Gir cow ghee, stone-ground goda masala, and Camp biscuits in an authentic wada box.",
    image: "/images/product-canvas-tote-trio.jpg",
    badge: "Utsav Special",
  },
];

export type PuneriPaatStory = {
  id: string;
  title: string;
  marathiTitle: string;
  meta: string;
  blurb: string;
  image: string;
};

export const PUNERI_PAAT: PuneriPaatStory[] = [
  {
    id: "wada-architecture",
    title: "The Wada Courtyard: Architecture of Hospitality",
    marathiTitle: "वाडा संस्कृती आणि आतिथ्य",
    meta: "Heritage Stories · Issue I",
    blurb:
      "How the central courtyards (chowk), carved teakwood devdis, and stone sit-outs of 18th-century Pune wadas shaped Maharashtrian hospitality and communal dining.",
    image: "/images/place-shaniwar-real.jpg",
  },
  {
    id: "goda-masala-secret",
    title: "The Alchemy of Authentic Goda Masala",
    marathiTitle: "गोडा मसाल्याचे रहस्य",
    meta: "Culinary Heritage · Issue II",
    blurb:
      "A deep dive into slow-roasting dagad phool, white sesame, dry coconut, and cinnamon over gentle charcoal fires to produce the signature aroma of Pune.",
    image: "/images/cafe-story.jpg",
  },
  {
    id: "two-to-four-siesta",
    title: "2 to 4 PM: Pune's Sacred Afternoon Pause",
    marathiTitle: "दोन ते चार: पुण्याची दुपार",
    meta: "Peth Chronicles · Issue III",
    blurb:
      "Why Pune's legendary afternoon slumber is not laziness, but a civilized philosophical commitment to quietude, reading, and savoring the evening.",
    image: "/images/hero-pune.jpg",
  },
];
