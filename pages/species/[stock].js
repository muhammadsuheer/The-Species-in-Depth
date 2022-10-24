import Image from "next/image";
export default function Home({ postData }) {
  return (
    <div className="containerser">
      <div className="headingWrapper">
        <h1 className="heading"> {`${postData.name}`}</h1>
      </div>
      <div className="thumb">
        <Image
          className="heroWrapper"
          width={750}
          alt="stock"
          height={450}
          src={`${postData.image}`}
        />
      </div>
      <blockquote class="default">
        <h1>
          <span class="Cdefault"> {`${postData.quote}`}</span>{" "}
        </h1>
      </blockquote>
      <div className="quoteWrapper">
        <p className="quote"></p>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getAllstockPaths();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = getstockData(params.stock);
  return {
    props: {
      postData,
    },
  };
}

const getAllstockPaths = () => {
  return [
    {
      params: {
        stock: "AlaskanPollock",
      },
    },
    {
      params: {
        stock: "AlbacoreTuna",
      },
    },
    {
      params: {
        stock: "AlaskanPollock",
      },
    },
    {
      params: {
        stock: "AlbacoreTuna",
      },
    },

    {
      params: {
        stock: "AlligatorGar",
      },
    },
    {
      params: {
        stock: "Anchovies",
      },
    },
    {
      params: {
        stock: "Angelfish",
      },
    },
    {
      params: {
        stock: "Arapaima",
      },
    },
    {
      params: {
        stock: "ArcticChar",
      },
    },
    {
      params: {
        stock: "AsianArowana",
      },
    },
    {
      params: {
        stock: "AtlanticSalmon",
      },
    },
    {
      params: {
        stock: "AtlanticSturgeon",
      },
    },
    {
      params: {
        stock: "AustralianFlatheadPerch",
      },
    },
    {
      params: {
        stock: "Baiji",
      },
    },
    {
      params: {
        stock: "BananaEel",
      },
    },
    {
      params: {
        stock: "BanjoCatfish",
      },
    },
    {
      params: {
        stock: "Barracuda",
      },
    },
    {
      params: {
        stock: "Barb",
      },
    },
    {
      params: {
        stock: "BaskingShark",
      },
    },
    {
      params: {
        stock: "Batfish",
      },
    },
    {
      params: {
        stock: "BelugaSturgeon",
      },
    },
    {
      params: {
        stock: "BettaFish",
      },
    },
    {
      params: {
        stock: "BlackMarlin",
      },
    },
    {
      params: {
        stock: "BlacknoseShark",
      },
    },
    {
      params: {
        stock: "BlobFish",
      },
    },
    {
      params: {
        stock: "BlueCatfish",
      },
    },
    {
      params: {
        stock: "BlueEyedPleco",
      },
    },
    {
      params: {
        stock: "BlueShark",
      },
    },
    {
      params: {
        stock: "BluefinTuna",
      },
    },
    {
      params: {
        stock: "Bluegill",
      },
    },
    {
      params: {
        stock: "BonitoFish",
      },
    },
    {
      params: {
        stock: "BonnetheadShark",
      },
    },
    {
      params: {
        stock: "Bowfin",
      },
    },
    {
      params: {
        stock: "Boxfish",
      },
    },
    {
      params: {
        stock: "BronzeWhalerShark",
      },
    },
    {
      params: {
        stock: "BrookTrout",
      },
    },
    {
      params: {
        stock: "BuffaloFish",
      },
    },
    {
      params: {
        stock: "BullTrout",
      },
    },
    {
      params: {
        stock: "ButterflyFish",
      },
    },
    {
      params: {
        stock: "Carp",
      },
    },
    {
      params: {
        stock: "Catfish",
      },
    },
    {
      params: {
        stock: "Chimaera",
      },
    },
    {
      params: {
        stock: "ChinesePaddlefish",
      },
    },
    {
      params: {
        stock: "ChinookSalmon",
      },
    },
    {
      params: {
        stock: "Cichlid",
      },
    },
    {
      params: {
        stock: "Clownfish",
      },
    },
    {
      params: {
        stock: "CobiaFish",
      },
    },
    {
      params: {
        stock: "Codfish",
      },
    },
    {
      params: {
        stock: "Coelacanth",
      },
    },
    {
      params: {
        stock: "CongerEel",
      },
    },
    {
      params: {
        stock: "CookiecutterShark",
      },
    },
    {
      params: {
        stock: "CoryCatfish",
      },
    },
    {
      params: {
        stock: "CrappieFish",
      },
    },
    {
      params: {
        stock: "Danios",
      },
    },
    {
      params: {
        stock: "Discus",
      },
    },
    {
      params: {
        stock: "DragonEel",
      },
    },
    {
      params: {
        stock: "Dragonfish",
      },
    },
    {
      params: {
        stock: "DrumFish",
      },
    },
    {
      params: {
        stock: "DuskyShark",
      },
    },
    {
      params: {
        stock: "Eel",
      },
    },
  ];
};

const getstockData = (stock) => {
  const stockInfo = {
    AlaskanPollock: {
      name: "Alaskan Pollock",
      quote:"The giant alligator gar is among the biggest freshwater stock in the world, but do not let the large teeth and fearsome appearance fool you. It poses no particular risk of attack to humans.",
      image:"https://a-z-animals.com/media/2022/04/shutterstock_1583113354-400x300.jpg",
      description:"The scientific name of the giant alligator gar is Atractosteus spatula. The name spatula comes to us from a Latin word that roughly translates to “a flat piece.” The alligator gar is closely related to two other gar stock within the genus of Atractosteus: the Cuban gar and the tropical gar. There are four other stock of gar that occupy the closely related genus of Lepisosteus. Together these seven stock represent all known types of gar within the family of Lepisosteidae.",
    },

    AlbacoreTuna: {
      name: "Albacore Tuna",
      quote:"The Albacore Tuna, or longfin tuna, is a large smooth-skinned pelagic stock that roams the open oceans in massive schools.",
      image:"https://a-z-animals.com/media/2021/01/Tuna-Albacore-swimming-768x401.jpg",
      description:"The albacore is one of the smallest tuna stock. Weighing only about 80 pounds, it is only slightly larger than the skipjack. The albacore has a dark blue or gray back, fading to silver or white around the stomach. The most prominent characteristic is the massive pectoral fin on the side of the body. This is how it acquired the alternate name longfin.",
    },
    AlaskanPollock: {
      name: "Alaskan Pollock",
      quote: "It's one of the most commonly eaten fish in the world",
      image:"https://a-z-animals.com/media/2022/04/shutterstock_1583113354-400x300.jpg",
    },

    AlbacoreTuna: {
      name: "Albacore Tuna",
      quote: "The albacore is a very fast swimmer",
      image:
        "https://a-z-animals.com/media/2021/01/Tuna-Albacore-swimming-400x300.jpg",
    },

    AlligatorGar: {
      name: "Alligator Gar",
      quote: "The alligator gar has toxic eggs to protect against predators",
      image:
        "https://a-z-animals.com/media/2021/02/Alligator-gar-header-400x300.jpg",
    },

    Anchovies: {
      name: "Anchovies",
      quote: "Anchovies are small green forage fishes.",
      image: "https://a-z-animals.com/media/anchovies-1-400x300.jpg",
    },

    Angelfish: {
      name: "Angelfish",
      quote: "There are 70 different species!",
      image: "https://a-z-animals.com/media/angelfish-4-400x300.jpg",
    },

    Arapaima: {
      name: "Arapaima",
      quote: "One of the largest freshwater fish",
      image: "https://a-z-animals.com/media/Arapaima-1-400x300.jpg",
    },

    ArcticChar: {
      name: "Arctic Char",
      quote:
        "Arctic char is the northern-most fish; no other fish lives anywhere further north!",
      image:
        "https://a-z-animals.com/media/2022/08/shutterstock_1454856311-400x300.jpg",
    },
    AsianArowana: {
      name: "Asian Arowana",
      quote: "The male Asian arowana raises the eggs in its mouth",
      image:
        "https://a-z-animals.com/media/2022/04/Asian-Arowana-header-400x300.jpg",
    },
    AtlanticSalmon: {
      name: "Atlantic Salmon",
      quote:
        "These fish are known for their ability to leap and fight when hooked.",
      image:
        "https://a-z-animals.com/media/2022/04/Atlantic-salmon-displaying-spots-400x300.jpg",
    },
    AtlanticSturgeon: {
      name: "Atlantic Sturgeon",
      quote: "Atlantic Sturgeon often leap out of the water.",
      image:
        "https://a-z-animals.com/media/2022/08/Atlantic-Sturgeon-2-400x300.jpg",
    },
    AustralianFlatheadPerch: {
      name: "Australian Flathead Perch",
      quote:
        "This small fish fetches a high price tag, with individuals selling from $1,000 to $5,000.",
      image:
        "https://a-z-animals.com/media/2022/04/Rainfordia_opercularis1-400x300.jpg",
    },
    Baiji: {
      name: "Baiji",
      quote: "Baijis use echolocation to find food in the Yangtze River.",
      image: "https://a-z-animals.com/media/baiji-wikimedia-2-400x300.jpg",
    },
    BananaEel: {
      name: "Banana Eel",
      quote:
        "Named for the yellow body and brown spots that make it look like a banana.",
      image:
        "https://a-z-animals.com/media/2022/04/iStock-1084949470-400x300.jpg",
    },
    BanjoCatfish: {
      name: "Banjo Catfish",
      quote:
        "The banjo catfish is extremely shy and known for hiding from onlookers.",
      image: "https://a-z-animals.com/media/2021/02/banjo-catfish2-400x300.jpg",
    },
    Barracuda: {
      name: "Barracuda",
      quote: "Can grow to nearly 2 meters long!",
      image:
        "https://a-z-animals.com/media/animals/images/original/barracuda-400x300.jpg",
    },
    Barb: {
      name: "Barb",
      quote: "There are over 1768 known species!",
      image: "https://a-z-animals.com/media/2022/03/barb-6-400x300.jpg",
    },

    BaskingShark: {
      name: "Basking Shark",
      quote: "The second biggest fish in the world!",
      image:
        "https://a-z-animals.com/media/animals/images/original/basking_shark-400x300.jpg",
    },
    Batfish: {
      name: "Batfish",
      quote: "The batfish has a lure on its head to attract prey",
      image:
        "https://a-z-animals.com/media/2022/04/shutterstock_1257211987-400x300.jpg",
    },
    BelugaSturgeon: {
      name: "Beluga Sturgeon",
      quote:
        "The beluga sturgeon is one of the largest bony fish in the world!",
      image: "https://a-z-animals.com/media/beluga-sturgeon-5-400x300.jpg",
    },
    BettaFish: {
      name: "Betta Fish (Siamese Fighting Fish)",
      quote: "Can live in low-oxygen environments!",
      image:
        "https://a-z-animals.com/media/siamese-fighting-fish-9-400x300.jpg",
    },
    BlackMarlin: {
      name: "Black Marlin",
      quote: "Every black marlin is born as a female.",
      image:
        "https://a-z-animals.com/media/black-marlin-jumping-out-of-water-400x300.jpg",
    },
    BlacknoseShark: {
      name: "Blacknose Shark",
      quote:
        "When threatened, Blacknose sharks raise their head, arch their back, and lower their pectoral fins.",
      image:
        "https://a-z-animals.com/media/2022/07/blacknose-shark-400x300.jpg",
    },
    BlobFish: {
      name: "Blob Fish",
      quote: "One of the ugliest creatures in existence!",
      image:
        "https://a-z-animals.com/media/black-marlin-jumping-out-of-water-400x300.jpg",
    },
    BlueCatfish: {
      name : "Blue Cat Fish",
      quote: "It's a strong fighter when caught on a fishing line",
      image:
        "https://a-z-animals.com/media/2022/04/shutterstock_543365575-400x300.jpg",
    },

    BlueEyedPleco: {
      name: "Blue Eyed Pleco",
      quote: "Can live safely with many types of fish.",
      image:"https://a-z-animals.com/media/2022/04/Panaque_cochliodon_-_Blue-eyed_plec_5936849425-400x300.jpg",
    },
    BlueShark: {
      name: "Blue Shark",
      quote: "Blue sharks can have up to 135 pups at a time.",
      image:"https://a-z-animals.com/media/2021/07/Blue-Shark-header-400x300.jpg",
    },
    BluefinTuna: {
      name: "Bluefin Tuna",
      quote: "The bluefin is one of the largest fish in the world",
      image:"https://a-z-animals.com/media/2021/01/Tuna-bluefin-swimming-400x300.jpg",
    },
    Bluegill: {
      name: "Bluegill",
      link : "Bluegill",

      quote: "The world record for longest bluegill is 15 inches.",
      image:
        "https://a-z-animals.com/media/2022/04/Bluegill-header-400x300.jpg",
    },
    BonitoFish: {
      name: "Bonito Fish",
      link : "BonitoFish",

      quote: "May eat squid or other small invertebrate ocean life",
      image: "https://a-z-animals.com/media/bonito-1-400x300.jpg",
    },
    BonnetheadShark: {
      name: "Bonnethead Shark",
      link : "BonnetheadShark",

      quote:
        "Bonnetheads are the only hammerhead sharks that use their pectoral fins to swim.",
      image:
        "https://a-z-animals.com/media/2021/07/Bonnethead-Shark-header-400x300.jpg",
    },
    Bowfin: {
      name: "Bowfin",
      link : "Bowfin",
      quote:
        "The bowfin is a primitive fish that first evolved in the Jurassic.",
      image: "https://a-z-animals.com/media/bowfin-6-400x300.jpg",
    },
    Boxfish: {
      name: "Boxfish",
      link : "Boxfish",

      quote: "Can release a toxin from its skin",
      image: "https://a-z-animals.com/media/2022/03/box-fish-5-400x300.jpg",
    },
    BronzeWhalerShark: {
      name: "Bronze Whaler Shark",
      quote: "The Bronze Whaler Sharks only hunt in large groups.",
      image:"https://a-z-animals.com/media/2022/07/Bronze-Whaler-Shark-header-400x300.jpg",
    },
    BrookTrout: {
      name: "Brook Trout",

      quote:
        "The Brook Trout is actually part of the salmon family, making it not technically a trout.",
      image: "https://a-z-animals.com/media/2021/09/brook_trout-400x300.jpg",
    },
    BuffaloFish: {
      name: "Buffalo Fish",

      quote: "The oldest Buffalo fish recorded was 112 years old!",
      image: "https://a-z-animals.com/media/2022/08/Buffalo-fish-1-400x300.jpg",
    },
    BullTrout: {
      name: "Bull Trout",
      quote:
        "The bull trout is not actually a trout, but a member of the char family.",
      image:
        "https://a-z-animals.com/media/2022/04/shutterstock_593474345-400x300.jpg",
    },
    ButterflyFish: {
      name: "Butterfly Fish",
      quote: "There are more than 100 different species!",
      image:
        "https://a-z-animals.com/media/copperband-butterfly-fish-400x300.jpg",
    },
    Carp: {
      name: "Carp",
      quote: "The carp is one of the most popular pond fishes in the world",
      image: "https://a-z-animals.com/media/carp-6-400x300.jpg",
    },
    Catfish: {
      name: "Catfish",
      quote: "There are nearly 3,000 different species!",
      image:"https://a-z-animals.com/media/animals/images/original/catfish-400x300.jpg",
    },
    Chimaera: {
      name: "Chimaera",
      quote: "Also called ghost shark",
      image: "https://a-z-animals.com/media/Chimaera-1-400x300.jpg",
    },

    ChinesePaddlefish: {
      name: "Chinese Paddlefish",
      quote:"The Chinese paddlefish is one the largest freshwater fish in the world",
      image:"https://a-z-animals.com/media/2021/02/Chinese-paddlefish-in-museum-5-400x300.jpg",
    },

    ChinookSalmon: {
      name: "Chinook Salmon",
      quote:"The Chinook salmon undertakes a long migration for the spawning season",
      image:"https://a-z-animals.com/media/2022/04/Chinook-Salmon-header-400x300.jpg",
    },

    Cichlid: {
      name: "Cichlid",
      quote: "There are more than 2 000 known species!",
      image:"https://a-z-animals.com/media/animals/images/original/cichlid2-400x300.jpg",
    },

    Clownfish: {
      name: "Clownfish",
      quote: "Also known as the anemonefish!",
      image:"https://a-z-animals.com/media/animals/images/original/clown-400x300.jpg",
    },

    CobiaFish: {
      name: "Cobia Fish",
      quote:"It has teeth not only in its jaws but in its tongue and the roof of its mouth",
      image: "https://a-z-animals.com/media/2022/04/Cobia-header-400x300.jpg",
    },

    Codfish: {
      name: "Codfish",
      quote: "They eat other fish",
      image:
        "https://a-z-animals.com/media/2021/01/Codfish-close-up-400x300.jpg",
    },

    Coelacanth: {
      name: "Coelacanth",
      quote: "The coelacanth first evolved almost 400 million years ago.",
      image: "https://a-z-animals.com/media/coelacanth-underwater-400x300.jpg",
    },

    CongerEel: {
      name: "Conger Eel",
      quote:"The European Conger ( Conger conger) can weigh as much as an adult human!",
      image:"https://a-z-animals.com/media/2022/04/Conger-Eel-header-400x300.jpg",
    },

    CookiecutterShark: {
      name: "Cookiecutter Shark",
      quote:"The cookiecutter shark takes its name because it leaves a cookie-shaped bite hole in its prey.",
      image:"https://a-z-animals.com/media/2021/07/Isistius_brasiliensis-400x300.jpg",
    },

    CoryCatfish: {
      name: "Cory Catfish",
      quote:"All Cory Catfish have three pairs of barbels around their mouth that they use to detect food.",
      image:"https://a-z-animals.com/media/2022/07/shutterstock_2147569723-400x300.jpg",
    },

    CrappieFish: {
      name: "Crappie Fish",
      quote:"The crappie is one of the most popular freshwater fish in North America.",
      image:"https://a-z-animals.com/media/2021/08/crappie2-header-400x300.jpg",
    },

    Danios: {
      name: "Danios",
      quote:
        "These fish make a popular choice for aquarium hobbyists due to their hardy nature.",
      image: "https://a-z-animals.com/media/2022/03/danio-4-400x300.jpg",
    },

    Discus: {
      name: "Discus",
      quote: "One of the only schooling Cichlids!",
      image: "https://a-z-animals.com/media/discus-1-400x300.jpg",
    },

    DragonEel: {
      name: "Dragon Eel",
      quote: "Dragon eels have double jaws and two sets of razor-sharp teeth",
      image:
        "https://a-z-animals.com/media/2022/09/shutterstock_147619913-400x300.jpg",
    },

    Dragonfish: {
      name: "Dragonfish",
      quote: "Dragonfish can emit red light from their eyes",
      image: "https://a-z-animals.com/media/dragonfish-5-400x300.jpg",
    },

    DrumFish: {
      name: "Drum Fish",
      quote: "The drum fish makes a croaking sound with its swimming bladder!",
      image: "https://a-z-animals.com/media/drum-fish-1-400x300.jpg",
    },

    DuskyShark: {
      name: "Dusky Shark",
      quote: "The Dusky Shark sometimes eats trash discarded by humans.",
      image:"https://a-z-animals.com/media/2022/07/shutterstock_528523684-400x300.jpg",
    },

    Eel: {
      name: "Eel",
      quote: "Eels can be a mere few inches long to 13 feet!",
      image: "https://a-z-animals.com/media/eel-1-400x300.jpg",
    },
  };
  return stockInfo[stock];
};
