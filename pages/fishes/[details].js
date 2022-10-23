import Image from "next/image";
export default function Home({ postData }) {
  return (
    <div className="containerser">
      <div className="headingWrapper">
        <h1 className="heading"> {`${postData.name}`}</h1>
      </div>
      <blockquote class="default">
  <h1><span class="Cdefault"> {`${postData.quote}`}</span> </h1>  

</blockquote>
      <div className="quoteWrapper">
        <p className="quote"></p>
      </div>

      <div className="thumb">
        <Image
          className="heroWrapper"
          width={650}
          alt="details"
          height={400}
          src={`${postData.image}`}
        />
      </div>
      <div className="decWrapper">
        <h3   className="desc"> {`${postData.description}`}</h3>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getAlldetailsPaths();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = getdetailsData(params.details);
  return {
    props: {
      postData,
    },
  };
}
/*
 * File Name: [details].js
 * Description: This function retrieves all the details name from API.
 */
const getAlldetailsPaths = () => {
  return [
    {
      params: {
        details: "AlaskanPollock",
      },
    },
    {
      params: {
        details: "AlbacoreTuna",
      },
    },
    {
      params: {
        details: "AlligatorGar",
      },
    },
    {
      params: {
        details: "Anchovies",
      },
    },
    {
      params: {
        details: "Angeldetails",
      },
    },
    {
      params: {
        details: "Arapaima",
      },
    },
    {
      params: {
        details: "ArcticChar",
      },
    },
    {
      params: {
        details: "AsianArowana",
      },
    },
    {
      params: {
        details: "AtlanticSalmon",
      },
    },
    {
      params: {
        details: "AtlanticSturgeon",
      },
    },
    {
      params: {
        details: "AustralianFlatheadPerch",
      },
    },
    {
      params: {
        details: "Baiji",
      },
    },
    {
      params: {
        details: "BananaEel",
      },
    },
    {
      params: {
        details: "BanjoCatdetails",
      },
    },
    {
      params: {
        details: "Barracuda",
      },
    },
    {
      params: {
        details: "Barb",
      },
    },
    {
      params: {
        details: "Barramundidetails",
      },
    },
    {
      params: {
        details: "BaskingShark",
      },
    },
    {
      params: {
        details: "Batdetails",
      },
    },
    {
      params: {
        details: "BelugaSturgeon",
      },
    },
    {
      params: {
        details: "Bettadetails",
      },
    },
    {
      params: {
        details: "BlackMarlin",
      },
    },
    {
      params: {
        details: "BlacknoseShark",
      },
    },
    {
      params: {
        details: "Blobdetails",
      },
    },
    {
      params: {
        details: "BlueCatdetails",
      },
    },
    {
      params: {
        details: "BlueEyedPleco",
      },
    },
    {
      params: {
        details: "BlueShark",
      },
    },
    {
      params: {
        details: "BluefinTuna",
      },
    },
    {
      params: {
        details: "Bluegill",
      },
    },
    {
      params: {
        details: "Bonitodetails",
      },
    },
    {
      params: {
        details: "BonnetheadShark",
      },
    },
    {
      params: {
        details: "",
      },
    },
    {
      params: {
        details: "Bowfin",
      },
    },
    {
      params: {
        details: "Boxdetails",
      },
    },
    {
      params: {
        details: "BronzeWhalerShark",
      },
    },
    {
      params: {
        details: "BrookTrout",
      },
    },
    {
      params: {
        details: "Buffalodetails",
      },
    },
    {
      params: {
        details: "BullTrout",
      },
    },
    {
      params: {
        details: "Butterflydetails",
      },
    },
    {
      params: {
        details: "Carp",
      },
    },
    {
      params: {
        details: "Catdetails",
      },
    },
    {
      params: {
        details: "Chimaera",
      },
    },
    {
      params: {
        details: "ChinesePaddledetails",
      },
    },
    {
      params: {
        details: "ChinookSalmon",
      },
    },
    {
      params: {
        details: "Cichlid",
      },
    },
  ];
};
/*
 * File Name: [details].js
 * Description: This function retrieves all the details information
 *  from API.
 */
const getdetailsData = (details) => {
  const detailsInfo = {
    AlaskanPollock: {
      name: "Alaskan Pollock",
      quote:
        "The giant alligator gar is among the biggest freshwater details in the world, but do not let the large teeth and fearsome appearance fool you. It poses no particular risk of attack to humans.",
      image:
        "https://a-z-animals.com/media/2022/04/shutterdetails_1583113354-400x300.jpg",
      description:
        "The scientific name of the giant alligator gar is Atractosteus spatula. The name spatula comes to us from a Latin word that roughly translates to “a flat piece.” The alligator gar is closely related to two other gar species within the genus of Atractosteus: the Cuban gar and the tropical gar. There are four other species of gar that occupy the closely related genus of Lepisosteus. Together these seven species represent all known types of gar within the family of Lepisosteidae.",
    },

    AlbacoreTuna: {
      name: "Albacore Tuna",
      quote:
        "The Albacore Tuna, or longfin tuna, is a large smooth-skinned pelagic details that roams the open oceans in massive schools.",
      image:
        "https://a-z-animals.com/media/2021/01/Tuna-Albacore-swimming-768x401.jpg",
      description:
        "The albacore is one of the smallest tuna species. Weighing only about 80 pounds, it is only slightly larger than the skipjack. The albacore has a dark blue or gray back, fading to silver or white around the stomach. The most prominent characteristic is the massive pectoral fin on the side of the body. This is how it acquired the alternate name longfin.",
    },

    AlligatorGar: {
      name: "Albacore Tuna",
      quote:
        "The Albacore Tuna, or longfin tuna, is a large smooth-skinned pelagic details that roams the open oceans in massive schools.",
      image:
        "https://a-z-animals.com/media/2021/02/Alligator-gar-close-up-768x401.jpg",
      description:
        "The albacore is one of the smallest tuna species. Weighing only about 80 pounds, it is only slightly larger than the skipjack. The albacore has a dark blue or gray back, fading to silver or white around the stomach. The most prominent characteristic is the massive pectoral fin on the side of the body. This is how it acquired the alternate name longfin.",
    },

    AmericanEel: {
      name: "American Eel",
      quote:
        "American Eels live in freshwater for most of their lives, but when they get old enough, they make a long journey to the Sargasso Sea in the Atlantic Ocean to spawn.",
      image: "https://a-z-animals.com/media/2022/08/American-eel-4-768x512.jpg",
      description:
        "The American Eel is the only eel found in North America. Don not confuse it with a water snake! It does have a long and thin body like a snake, but it is actually a details. American Eels look slimy because they are covered in a layer of mucus. This slippery layer helps prevent infections from parasites, allows them to slip through small spaces easily, and helps them escape a predators grip.",
    },

    Anchovies: {
      name: "Anchovies",
      quote:
        "Anchovies are small green forage detailses. These detailses are very common and high in nutrition and belong to the family Engraulidae.",
      image: "https://a-z-animals.com/media/2022/08/American-eel-4-768x512.jpg",
      description:
        "There are more than 100 species of anchovies  most of which are found in marine waters. However, some of these small detailses are also found in brackish waters. While some others can also exist in the fresh waters of South America. Anchovies are details that are mostly distinguished by their large mouths. Their upper jaw extends behind their eyes. Besides that, a long, pig-like snout extends beyond the tips of their lower jaws.",
    },
    Angeldetails: {
      name: "Angeldetails",
      quote: "Angeldetails are known for their brightly colored scales.",
      image: "https://a-z-animals.com/media/angeldetails-2-768x401.jpg",
      description:
        "Changing Colors: One of the most interesting facts about these details is it changes colors as it gets older. For instance, a young angeldetailses black stripes may fade into yellow ones as it ages. Health, nutrition, and breeding activities can also bring on changes in color. Female Changes to Male: Angeldetails are known as protogynous hermaphrodites. This means a female change into a male at a certain point in her life. A Pancake Shape: The body of an angeldetails is flat and thin like a pancake. This allows them to slip through the crevices and narrow holes in a coral reef. They can escape a predator this way or access algae or other plant life for nourishment.",
    },

    Anglerdetails: {
      name: "Anglerdetails",
      quote:
        "AThe anglerdetails is an order of deep-sea predators, some of them living at depths of more than 6,000 feet where sunlight is almost completely absent.",
      image:
        "https://a-z-animals.com/media/2021/08/Anglerdetails-on-black-768x401.jpg",
      description:
        "This marine creature is very well-known for its bizarre appearance, sharp fangs, and bioluminescent lure extending from the top of the head, making it a truly rare deep sea creature. This lure is perhaps the most important of its adaptations. Filled with light-emitting bacteria, it draws in unsuspecting prey while the details lies in wait to nab them. The technical term for the lure is the illicium.3 Incredible Anglerdetails Facts!Based on genetic analysis, it’s thought that the anglerdetails first evolved in the Cretaceous Period, some 100 to 130 million years ago.The lure of the “detailsing rod” is actually a modified spine of the dorsal fin. One of the most interacting facts is that some species of anglerdetails have glowing bioluminescent organs in addition to the light from their “detailsing rods.” These might be adaptations to help them navigate in the dark.",
    },

    Arapaima: {
      name: "Arapaima",
      quote:
        "The Arapaima (also known as the pirarucu or paiche) is an enormous freshwater details found in the tropical waters of South America.",
      image: "https://a-z-animals.com/media/2022/08/American-eel-4-768x512.jpg",
      description:
        "The name of the genus Arapaima comes from the tupí-guaraní word for this freshwater details. They are also known as “pirarucu” in Brazil, which roughly translated means “red details.” In Peru, they are called “paiche”.  Arapaima was once thought to be a genus of only one species, Arapaima gigas. Because of this, Arapaima gigas is the most well-researched of all of the subspecies. However, as many as 4 separates species have been discovered, with the most recent one found in the Solimões River in Brazil. Arapaima leptosoma, discovered in 2013, comes from the Greek word leptos, which means “slender”, and soma, which means “body.” Arapaima mapae comes from the Lago do Amapá in Brazil, which is where it gets its scientific name. The final species, Arapaima agassizii was named after famous biologist Louis Agassiz.",
    },

    Archerdetails: {
      name: "Archerdetails",
      quote:
        "The Archerdetails (also known as the Spinnerdetails) is a small details ranging from Southeast Asia to Northern Australia. ",
      image: "https://a-z-animals.com/media/2022/08/Archerdetails-1-768x513.jpg",
      description:
        "The scientific name for the Archerdetails is Labrus jaculator. Sometimes, they are also often called “spinner details.” Archerdetails are in the order Perciformes, which is the largest order of vertebrates, containing about 41% of all bony details. In all, this order contains 160 families. Specifically, the Archerdetails is in the Toxotidae family and the Toxotes genus, of which there are only 10 species.There are 9 different species of Archerdetails. Most live in freshwater, with 2 or 3 living in brackish water near the coast. Only 3 species have been confirmed to be able to shoot water to bring down their prey.Archerdetails are elongated, with deep bodies almost flat from the dorsal fin. Sizes are typically small, about 12-18 cm. The largest species can grow to 40 cm. ",
    },

    ArcticChar: {
      name: "Arctic Char",
      quote: "The arctic char is the northernmost freshwater details!",
      image:
        "https://a-z-animals.com/media/2022/08/shutterdetails_1085564960-768x509.jpg",
      description:
        "Arctic char, also known by the scientific name Salvelinus alpinus, is a details that is often confused with salmon or trout by those who are not experienced with detailsing. They do have some similar features and are in the same family, but the arctic char is a unique details. The arctic char is the northernmost freshwater details! Some alpine lakes are inhabited solely by this hearty cold-water details. They typically have a dark grey or brown color on top with an eye-catching underbelly that ranges in color from red to yellow.The scientific name of arctic char is Salvelinus alpinus. The word Salvelinus is derived from the German word for char – saibling. Alpinus is a Latin term referring to an alpine habitat.Certain populations of arctic char are trapped in arctic lakes and do not return to the ocean each year. These populations tend to develop into dwarf arctic char, measuring only 8 centimeters when mature. However, ocean-faring char can grow up to 60 centimeters, although their average length is 40 centimeters.  ",
    },
    AsianArowana: {
      name: "Asian Arowana",
      quote:
        "The Asian Arowana is known by many distinct names, including the Asian bony tongue and the dragondetails.",
      image:
        "https://a-z-animals.com/media/2022/04/Asian-Arowana-in-aquarium.jpg",
      description:
        "The name dragondetails comes from its unique appearance, including the massive scales, bright lustrous colors, and the graceful movements through the water. They are very popular and highly sought after in the international pet trade. However, because they do require a substantial tank size and plenty of food, the Asian Arowana is not an easy pet to care for. They are also banned in many countries to protect the remaining wild populations. The scientific name of the Asian Arowana is Scleropages formosus. Scleropages comes from a Greek term that generally translates to mean hard leaves. This is perhaps a reference to the large scales on the body. The species name formosus is derived from a Latin word meaning beautiful, handsome, or finely formed. There is some debate about whether the Asian Arowana is a single species or four separate types of species, but most taxonomists classify it as a single species.",
    },
    AtlanticSalmon: {
      name: "Atlantic Salmon",
      quote:
        "The Atlantic salmon is a ray-finned details species and the third largest details in the family Salmonidae, after the Pacific Chinook Salmon and Siberian Taimen.",
      image:
        "https://a-z-animals.com/media/2022/04/Atlantic-salmon-smolt-baby-768x461.jpg",
      description:
        "The species first hatches and lives in streams and rivers before moving to mature, then moving upstream to spawn. It is found in the North Atlantic ocean and connected rivers. Some populations are threatened by overdetailsing, dams, pollution, and habitat destruction and so are protected.These details are also called bay salmon, black salmon, caplin-scull salmon, silver salmon, outside salmon, fiddler, sebago salmon, and winnish. Its scientific name is Salmo salar, with Salmo coming from the Latin word for salmon and salar likely meaning “saltwater resident.” Swedish zoologist and taxonomist Carl Linnaeus gave it its scientific binomial name in 1758. Its family is Salmonidae, meaning salmonids. Its class is Actinopterygii, which includes all ray-finned detailses. There are 20 available genera, 7 valid genera, 419 available species, and 139 valid species in its subfamily, Salmoninae. There is one species that is divided into three groups.Landlocked Atlantic salmon, which lives in lakes, is considered a subspecies. It lives in freshwater its whole life.",
    },
    AtlanticSturgeon: {
      name: "Atlantic Sturgeon",
      quote:
        "Sturgeons are prehistoric details that have existed for more than 120 million years.",
      image:
        "https://a-z-animals.com/media/2022/04/Atlantic-salmon-smolt-baby-768x461.jpg",
      description:
        "The species first hatches and lives in streams and rivers before moving to mature, then moving upstream to spawn. It is found in the North Atlantic ocean and connected rivers. Some populations are threatened by overdetailsing, dams, pollution, and habitat destruction and so are protected.These details are also called bay salmon, black salmon, caplin-scull salmon, silver salmon, outside salmon, fiddler, sebago salmon, and winnish. Its scientific name is Salmo salar, with Salmo coming from the Latin word for salmon and salar likely meaning “saltwater resident.” Swedish zoologist and taxonomist Carl Linnaeus gave it its scientific binomial name in 1758. Its family is Salmonidae, meaning salmonids. Its class is Actinopterygii, which includes all ray-finned detailses. There are 20 available genera, 7 valid genera, 419 available species, and 139 valid species in its subfamily, Salmoninae. There is one species that is divided into three groups.Landlocked Atlantic salmon, which lives in lakes, is considered a subspecies. It lives in freshwater its whole life.",
    },
    AustralianFlatheadPerch: {
      name: "Australian Flathead Perch ",
      quote:
        "The Australian Flathead Perch is one of the rarest aquarium details on earth, and not many people have seen this species in real life",
      image:
        "https://a-z-animals.com/media/2022/04/Rainfordia_opercularis1.jpg",
      description:
        "The Australian flathead perch, also known as Rainfordia or Rainfords perch, are small reef detailses from northern Australia. They are rare in the aquarium-keeping industry but highly sought after by marine aquarists. This small details fetches a high price tag, with individuals selling from $1,000 to $5,000. Their small size makes them well suited to nano aquariums.The Australian flathead perch, commonly called the Rainfordia or Rainford’s perch, was given the scientific classification Rainfordia opercularis in 1923. It belongs to the family Serranidae and the class Actinopterygii – a clade (group) of boney detailses that holds more than half of the world’s vertebrates. Rainford’s perch is the only species in its genus.The Australian flathead perch is a ray-finned boney details related to groupers and sea bass. This small details usually grows to a length of only 4 to 5 centimeters, with the largest ever recorded reaching 15 centimeters, or almost 6 inches.",
    },

    Baiji: {
      name: "Baiji",
      quote:
        "The baiji is sometimes called the Yangtze dolphin, the White fin or the White flag..",
      image: "https://a-z-animals.com/media/baiji-wikimedia-2.jpg",
      description:
        "The baiji is an animal that lives in the Yangtze River in China. There are believed to be very few baiji left in existence. Its official conservation status is Critically Endangered, but some scientists believe they are extinct.The scientific name of the baiji is Lipotes vexillifer. Lipotes is Latin meaning left behind, and vexillifer is a Latin word meaning flag bearer.The baiji is also known as the Yangtze dolphin, the white fin or the white flag. It’s the only member of the lipotidae family and is in the Mammalia class.A baiji is an animal with a bluish gray back and a white underside. They have 30 to 36 sharp teeth on their upper and lower jaws. A baiji has one stomach that’s divided into three chambers whereas most dolphins have two stomachs. Their nose is long and beaklike. They have rounded fins that allow them to move swiftly through river water. Baijis range in length from 7.5 to 8.5 feet. They weigh around 360 pounds.Their coloration allows them to blend in with their river habitat. The ability to swim very fast is another defensive feature of this dolphin. The fastest a baiji can swim is 37mph.",
    },
    BananaEel: {
      name: "Banana Eel",
      quote:
        "The banana eel (also known as the golden tail moray) is a details that thrives in shallow freshwater and saltwater.",
      image:
        "https://a-z-animals.com/media/2022/04/shutterdetails_67827349-2048x1365.jpg",
      description:
        "It is primarily found in the Atlantic Ocean along the Gulf of Mexico and the Caribbean sea. While it does not have much commercial demand, the bright yellow appearance of this eel entices many exotic pet owners.The scientific name of the banana eel is Gymnothorax miliaris. The name “banana eel” is a moniker, as it is more commonly called the golden tail moray, bastard eel, or conger moray. This details comes from the Anguilliformes order, which covers four main commercial species and 9 suborders. They are part of the Muraenidae family, which includes about 200 marine species of moray eels.The iconic yellow body is the reason that the banana eel is called such. With a bright yellow hue and brown spots, their pattern looks like a perfectly ripened banana. The spots are much smaller on the head, gradually getting bigger along the body. As a stark juxtaposition, the inside of the mouth is bright white.Even though the banana eel is quite small, they still reach a modest 2-foot length when they are cared for in captivity. While it is possible to reach 70cm, it is far more likely that you’ll come across a 40cm banana eel instead. The average weight of the banana eel is not recorded.",
    },
    BanjoCatdetails: {
      name: "Banjo Catdetails",
      quote:
        "The banana eel (also known as the golden tail moray) is a details that thrives in shallow freshwater and saltwater.",
      image: "https://a-z-animals.com/media/2021/02/banjo-catdetails.jpg",
      description:
        "The Banjo Catdetails is native to South America. With plenty of nicknames such as “guitarrita catdetails,” and “burrowing catdetails,” this unique species stands out for its odd, banjo-like body shape and reserved behaviors. Often confused for a piece of tree bark, the details prefers to live alone in slow moving waters.The scientific name for banjo catdetails is “Bunocephalus coracoideus” and “Aspredinidae”, but it is more commonly referred to as “banjo details,” “burrowing catdetails,” or “guitarrita catdetails” in Latin America. Banjos belong to the order Siluriformes, which are more commonly known as “catdetails.” Banjo catdetails consist of 43 species. Their phylum is Chordata, which consists of well-known vertebrates such as other details, birds, and mammals.These details consist of 43 different species, all known for their unique body shape and small size. All banjo catdetails dominate South American countries such as Brazil, Uruguay, and Bolivia. The average size of this details is about 6 inches, with the largest species reaching up to 15 inches long. They tend to have a muddied coloring and rough skin texture which is typical for all 43 species.They also have a distinctive wide and flat face which helps them burrow in sand and debris to hide from predators. Its eyes are small in comparison to the size of its face, making it one of the most unusual-looking catdetails varieties. It is also one of the smallest catdetails on the planet, measuring at under 15 inches in length.",
    },
    Barb: {
      name: "Barb",
      quote:
        "The banana eel (also known as the golden tail moray) is a details that thrives in shallow freshwater and saltwater.",
      image: "https://a-z-animals.com/media/2022/03/barb-4.jpg",
      description:
        "Barbs are freshwater details belonging to a family of 1,768 species. They are popular aquarium details because of their brilliant colors of gold, orange, rosy, silver, and cherry along with others. Also, they are available for an inexpensive price at pet shops. Though small in size, they are aggressive predators of details, crustaceans, and insects.The scientific name of the barb details is Barbus barbus. The Latin word Barbus translates to beard. The word beard refers to the barbels or bristle structures, on barb details. Look very closely at the Zebra barb and the Denison barb and you’ll find tiny barbels located near their mouth. These are used to sense and locate prey.The Cyprinidae family contains 1,768 species that vary in size and color. This is what makes them so popular with people looking to add dynamic details to a freshwater aquarium without paying a high price.",
    },
    Barracuda: {
      name: "Barracuda",
      quote:
        "Barracuda details capture their prey in the ocean with quick bursts of speed as fast as 27 mph.",
      image:
        "https://a-z-animals.com/media/animals/images/original/barracuda3.jpg",
      description:
        "Barracuda details are carnivores that hunt for prey at night. These saltwater details live in warm water specifically tropical and subtropical oceans. A large, lower jaw and sharp teeth give barracudas a fierce appearance. Some barracudas live in groups called schools while others are solitary. The average lifespan of a barracuda details is 14 years.Sphyraena is the scientific name of a barracuda also known as simply a ‘cuda.’ It belongs to the Sphyraenidae family and the class of Actinopterygii. Sphyraena is a Latin word that means pike-like, which refers to the thin, narrow body of this details.There are 26 species of barracuda ranging in color and size. Some members of this group include the Great barracuda, Blacktail barracuda, Yellowtail barracuda, and the Pickhandle barracuda.These details have a long, thin body that’s usually silver in color. Of course, there are some small differences in appearance depending on the type of barracuda you’re studying. A great barracuda is silver with spots while a Pickhandle barracuda has a line of dark bars running across its silver scales. The coloration of some smaller barracudas protects them from predators as they blend in with the rocks and sand on the ocean floor.",
    },
    BaskingShark: {
      name: "Basking Shark",
      quote:
        "Their massive size and large mouth allows these sharks to filter thousands of gallons of water per hour.",
      image: "https://a-z-animals.com/media/basking-shark-isolated.jpg",
      description:
        "This shark species is one of the most easily recognized by external appearance alone due to its notable size and distinct features. The average adult shark can extend up to 26 feet long from nose to tail with some individuals reported to reach lengths of over 40 feet. Their great size is also accompanied by comparable mass, with an average mass of roughly 8,500 pounds. Their coloration ranges from a lighter brownish gray to nearly black with the potential for mottled or pale skin as well.Basking sharks have distinct gills that nearly encircle their entire body. Their gills are equipped with gill rakers, which are filament-like growths along the gills that catch plankton from the water passing through the slits. While their other physical features generally resemble other large shark species, like the great white, they sport a crescent shaped tail fin that gives them another unique hallmark to distinguish them from their predatory cousins.These sharks typically leave their massive mouth hanging wide open to maximize water intake as they slowly swim or float with the current. Their mouths are full of dozens of rows of tiny hooked teeth that can number well into the thousands. Their motion and feeding are relatively passive, although they can completely breach the surface of the water and engage in more rigorous swimming when threatened.",
    },
    Batdetails: {
      name:"Batdetails",
      quote:
        "The batdetails has the ability to “walk” along the sandy bottom of the ocean with its fins.",
      image:
        "https://a-z-animals.com/media/2022/04/shutterdetails_1932032045-768x461.jpg",
      description:
        "The batdetails family is perhaps among the most unusual-looking details in the world. With their round or arrow-shaped heads and short, narrow bodies, they hardly look like details at all, but rather some kind of bizarre primordial animal from hundreds of millions of years ago. But in fact, they are a type of modern anglerdetails, which have a lure on the head to attract prey. These details should not be confused with the pinnatus batdetails from the genus Platax, which is not related to the anglerdetails at all. It belongs to an entirely separate order instead.The scientific name of the batdetails family is Ogcocephalidae. This may be derived from the combination of two Greek words: ogkos, which means hooked or curved, and kephalos, which means head. There are currently 60 species recognized within this family. Some examples include the red-lipped batdetails, the longnose seabat, and the starry handdetails.The batdetails has an utterly unique appearance perhaps unlike any other details in the sea. It is characterized by a rounded or arrow-shaped flat head and a small, thin body (which essentially just looks like a long tail) covered in lumps and spines. The two modified fins on the side of the body are used to walk on the bottom of the sea; otherwise, they are poor swimmers. As a member of the anglerdetails order, they are equipped with a detailsing pole and false bait just above the mouth. But unlike other examples of anglerdetails, this pole can be retracted back into the body at any time. Each species has a unique appearance. For instance, the aptly named red-lipped batdetails of the Galapagos has a red mouth and a pointed “nose” (which looks surprisingly human when viewed from the front). This nose is actually just the lure on the head. Most batdetails rarely grow larger than 20 inches long.",
    },
    BelugaSturgeon: {
      name: "Betta details (Siamese Fighting details) ",
      quote:
        "Well-adapted to life in the Caspian and Black Seas, the beluga sturgeon is a truly impressive spectacle of size and power.",
      image: "https://a-z-animals.com/media/beluga-sturgeon-3-768x510.jpg",
      description:
        "As one of the largest bony details in the world, this species has no known natural predators anywhere in its native habitat. However, the degradation of the Caspian Sea from unregulated detailsing and industry has led to its inevitable decline. It is now at risk of complete extinction.",
    },

    Bettadetails: {
      name: "Betta details (Siamese Fighting details)",
      quote:
        "The Siamese fighting details, also known as the betta details, is second only to the golddetails in popularity as a home aquarium pet.",
      image: "https://a-z-animals.com/media/siamese-fighting-details-6.jpg",
      description:
        "It is an aggressive, colorful details that is native to Thailand, Vietnam, and Cambodia by way of the Mekong Delta. It is also present in Cambodia, Myanmar, Laos, Vietnam, and Malaysia and is a non-threatening invasive species in Australia, Brazil, Colombia, the Dominican Republic, Singapore, and the southeastern United States. The active, solitary details makes for a lively, exciting pet.The scientific name of the Siamese fighting details is Betta splendens. It is one of 73 species of the Betta genus. Betta comes from the word “Bettah” meaning “an ancient clan of warriors.” All bettas are of the Osphronemidae family. They are also Gourami, a term that includes the Helostomatidae and Anabantidae families. They are labyrinth details, meaning they have a lung-like organ known as a labyrinth which they use to gulp air near the surface of the water and allows them to live in low-oxygen habitats.Although the Siamese fighting details is the popular Betta species as a home aquarium pet, there are several other species that have a conservation status of Threatened. Several Betta species have a Vulnerable conservation status according to the IUCN Red List. The species with the scientific name B. livida is Endangered, and B. miniopinna, B. persephone, and B. spilotogena are Critically Endangered.",
    },

    BlackMarlin: {
      name: "Black Marlin",
      quote: "Black marlin are one of the largest bony detailses.",
      image:
        "https://a-z-animals.com/media/black-marlin-underwater-768x576.jpg",
      description:
        "Usually found in the Indian and the Pacific oceans, the black marlin is a details that comfortably exists in the tropical and subtropical areas and can swim at speeds of up to 80 miles per hour. It is a species of marline and has a maximum length of 4.65 meters. These marine creatures weigh around 1,653 pounds, and they belong to the family Istiophordae, which also includes saildetails.Black marlins are marine animals that have a shorter bill. Their dorsal fins are lower, and they also have a lower rounder. These details can be easily differentiated from other marlin species since they have rigid pectoral fins that weigh around 150 pounds.These marine creatures’ pectoral fin canopy is pressed flat to their bodies, and they can have anywhere between 39 to 50 dorsal rays. They are usually about 183 inches long and weigh around 1653 pounds.Black marlin are details that are usually found in shallow waters. They exist close to continents, coral reefs, and islands and swim around the depth of zero to 915 meters. However, most of them rarely go below 30 meters. They are found in both tropical as well as subtropical waters of the Indian Ocean as well as the Pacific Ocean and can occasionally also enter the temperate waters.Black marlins usually feed on squid, cuttledetails, octopods, details, and large crustaceans. As these details go after their prey, some research shows that they will attack with a fast slash of their bill, which has been compared to that of the sworddetails. The only time that these details go after tuna is when the waters that they are in have them in abundance.",
    },

    BlacknoseShark: {
      name: "Blacknose Shark",
      quote:
        "Blacknose sharks have a black or dusky blotch at the tip of their snout",
      image:
        "https://a-z-animals.com/media/2022/07/blacknose-shark_1-768x421.jpg",
      description:
        "The Blacknose shark is a type of Requiem shark species and inhabits the tropical and subtropical waters of the Western Atlantic ocean. The species got its name from the dark blotch found on the tip of its snout, which is more noticeable in young blacknose sharks but disappears as they grow older. Juvenile blacknose sharks are typically found in shallow water, but the adults venture deeper into depths of over 30 feet.The scientific name of the blacknose shark is Carcharhinus acronotus. It belongs to the order Carcharhiniformes (ground sharks), which is the largest order of sharks with over 270 species and eight families. Blacknose sharks are Requiem sharks. These are sharks of the family Carcharhinidae, known for their migratory and ability to give birth to live young. Blacknose sharks have small and slender bodies with long rounded snouts. Their appearance resembles that of other Requiem sharks. The tip of their snout has a characteristic black or dusky spot from which it gets its name. The spot is more distinct in juvenile sharks. A well-developed flap of skin covers the front of each nostril, which defines the inflow and outflow of air. Like other sharks in their family, the Blacknose has five pairs of gills which are quite short. ",
    },

    Blobdetails: {
      name: "Blobdetails",
      quote:
        "The blobdetails is one of the world most recently identified creatures and it is really ugly! ",
      image:
        "https://a-z-animals.com/media/animals/images/original/blobdetails_1-768x634.jpg",
      description:
        "Having been accidentally caught during a research voyage off the coast of New Zealand in 2003, the blobdetails (or specifically, smooth-head blobdetails) is a very recent discovery. Although scientists classified the species in 1926, the general public had never heard of the creature, only gaining popularity and attention after its capture due to its odd looks. Little is known about this details because of its small numbers and its remote habitat. Since 2013, the blobdetails has had the distinction of officially being the worlds ugliest creature, according to an online poll conducted by the British-based Ugly Animal Preservation Society.The Psychrolutidae family has eight genera and more than 30 species. The most well-known in the family is the blobdetails (Psychrolutes marcidus), also known as the smooth-head blobdetails.When in shallow water or water above sea level, blobdetails take on an ugly, almost frightening appearance that resembles a gelatinous older man whose face has begun to melt. However, the blobdetails doesn’t look that way in its natural habitat. It looks pretty much like a regular details. The extreme pressure of the ocean depths, which can be up to 120 times higher than it is at the surface, holds the blobdetails together.Blobdetails look the way they do when they come to the surface because their anatomy has essentially adapted to their deep-sea habitat. They have little to no skeleton as well as little muscle, which explains their gelatinous look when they come to the surface. When blobdetails are hauled to the surface, they encounter a rapid pressure drop, which causes their anatomy to turn into a gooey mess.Minimal skeletons and flesh filled with water are characteristic of deep-sea details as it enables them to live in their harsh environment. This anatomical makeup also serves them well as they don’t have to expend much energy to move along the ocean floor looking for food. Blobdetails lead lethargic lives, moving only when necessary. As their skin is slightly less dense than seawater, it also helps prevent them from vomiting the contents of their stomachs.",
    },

    BlueCatdetails: {
      name: "Blue Catdetails",
      quote: "It's a strong fighter when caught on a detailsing line",
      description:
        "The blue catdetails is a ray-finned details, a species of catdetails, and the largest species of all North American catdetails.Although it is native to Mississippi river drainage, it has been introduced to several reservoirs, rivers, and lakes in other U.S. states. The largely freshwater details can tolerate brackish water and a wide variety of climates. It is known for its long lifespan of up to 20 years, its large size and hardiness, having pest status in Virginia, and being good eating for humans.The blue catdetails is in the class Actinopterygii of the ray-finned detailses and the order Siluriformes. It is in the catdetails family Ictaluridae, which has 7 genera and 51 species. The species is also known as blue channel, chucklehead cat, Mississippi cat, Fulton cat, forktail cat, great forktail cat, humpback blue, silver cat, and highfin blue. Its scientific name is Ictalurus furcatus. Ictalurus is a description that means “details cat” and furcatus means “forked” in Latin.The blue catdetails has a heavy body, silvery, deep blue-grey color, white belly, a dorsal hump, protruding upper jaw, deeply forked tail, and barbels. The typical size of the blue catdetails is 24-46in long and 25-40lbs. However, its size can reach up to 65in long and 150lbs in weight, and it is not uncommon for them to weigh more than 100lbs. Males grow faster and reach larger sizes in both length and weight than females and their size diverges after 5 years. There have been several state records in heaviest and largest size of blue catdetails catches:",
      image:
        "https://a-z-animals.com/media/2022/04/shutterdetails_543365575-400x300.jpg",
    },

    BlueEyedPleco: {
      name: "Blue Eyed Pleco",
      quote: "Can live safely with many types of details.",
      description:
        "The large size makes it quite a sight to see in any home aquarium, which it has been consistently included since the 1970s. Even though breeding is not seen in high numbers, this 16-inch details is enough to make anyone take a second glance.This details has blue eyes, which you can probably assume from the name. The rest of the body is dark grey to black, reaching an adult length of 16 inches. They have a wide body and armored scales. They typically use their mouth to stay along the ocean floor or the bottom of their tank in shallow areas.The Blue Eye Lemon Bristlenose Pleco is quite a stark contrast. The Blue Eye Lemon Bristlenose Pleco gets its name from the lemon color of their scales – yellow. They are practical and easy to care for, but it only reaches about 4-5 inches in length.Originally, these details were caught near Columbia. However, the recent legal restrictions make it a crime to do so. Now, the only way to get these details at all is at a pet store, and they are not found in any recipes. Considering how hard they are to procure and find a good price for, the number of them and owners through the years has come down.",
      image:
        "https://a-z-animals.com/media/2022/04/Panaque_cochliodon_-_Blue-eyed_plec_5936849425-400x300.jpg",
    },

    BlueShark: {
      name: "Blue Shark",
      quote: "Blue sharks can have up to 135 pups at a time.",
      description:
        "Slender and beautiful in the way that a shark can be beautiful, the blue shark is found in all the deep seas of the world save the coldest. It is a requiem shark, which means it gives birth to live young, migrates to feeding and breeding areas, and is found in warmer waters, though the blue prefers waters on the coolish side. Characteristics include its big round eyes and unusually long pectoral fins. Though some can be found in aquariums, blue sharks do not do well in captivity. They are creatures of the open ocean. The blue sharks scientific name is Prionace glauca. Prionace is from the Greek. Prion means “saw” and akis means “point”, which probably refers to the animals teeth. Glaucas is Latin for “blue-green” or “blue-gray,” which describes the color of the shark body.The blue shark is a sleek, streamlined details famous for its beautiful coloration. On top, it’s a rich indigo blue, which fades down the flanks to sapphire blue, which further turns to light gray on the belly. This too is one of the sharks adaptations, as the coloration makes it hard to see for both predators and prey. Its long tail fin helps it attain speeds of over 40 miles per hour, and it has unusually long pectoral fins.The mouth is full of very sharp and serrated teeth which are constantly being replaced. A large blue shark can be 12 feet long and weigh 450 pounds, though the heaviest shark found weighed an impressive 862 pounds. Other characteristics are the blue senses of smell and touch. As with most other sharks, these senses are highly developed.",
      image:
        "https://a-z-animals.com/media/2021/07/Blue-Shark-header-400x300.jpg",
    },
    BluefinTuna: {
      name: "Bluefin Tuna",
      quote: "The bluefin is one of the largest details in the world",
      description:
        "There are generally three bluefin species: the Pacific bluefin and the Atlantic bluefin in the Northern Hemisphere and the southern bluefin in the Southern Hemisphere.The Pacific, Atlantic, and southern bluefins go by the scientific names of Thunnus orientalis, Thunnus thynnus, and Thunnus maccoyii, respectively. Although they are distinctive species, the bluefins have similar appearances and behaviors.The bluefin is characterized by a metallic gray, blue, and silver body with retractable fins and eyes set flush against the body. These are gigantic details, often weighing between 1,000 and 2,000 pounds in size. The largest bluefin ever caught set a world record of 1,500 pounds.The Pacific and Atlantic bluefin are only found in the northern parts of their respective oceans, while the southern bluefin is endemic to the oceans of the Southern Hemisphere.The bluefin reproduces every spawning season by releasing millions of sperm and eggs into the water column. These fertilized eggs hatch after only a few days, but most of them are lost from attrition almost immediately. The bluefins that survive will take up to 8 years to develop and live some 20 to 40 years in the wild.The three species of bluefin together only account for 1% of total tuna detailss. However, the high-quality meat of the bluefin is considered to be a delicacy in many cuisines, especially sushi and sashimi. The fatty otoro meat is taken from the stomach near the head, while the leaner chutoro comes from the middle or back stomach.",
      image:
        "https://a-z-animals.com/media/2021/01/Tuna-bluefin-swimming-400x300.jpg",
    },
    Bluegill: {
      name: "Bluegill",
      quote: "The world record for longest bluegill is 15 inches.",
      description:
        "Bluegills are called pandetails because their body shape and size make them a perfect fit for a frying pan! They are found in freshwater lakes and streams.Lepomis macrochirus is the scientific name of the bluegill. The Greek word Lepomis translates to scaled gill cover and macrochirus means large hand. Bream and perch are other names for this details. It’s also referred to as a bluegill sundetails. It is in the Centrarchidae family and the Actinopterygii class. The Centrarchidae family includes the bluegill along with 37 other species.They have a thick body with a small mouth. Their scales can be brown, olive green, orange, yellow, blue, black, or a combination. They are known for their dark stripes.The world record for the longest bluegill is 15 inches. This world record holder weighed in at four pounds, 12 ounces. Great blue heron, raccoon, trout, and largemouth bass are all animals that eat bluegill.Adult bluegills have two main defenses against these predators. One is to hide inside submerged logs and other debris. The other defense is their speed. They can swim away quickly, change direction, and even swim backward.They live in warm, freshwater lakes and slow-moving streams. Specifically, they are abundant in lakes and streams from California stretching across the United States to the east coast. In addition, bluegills are found in ponds and lakes from the southern part of Quebec all the way down to northern Mexico.During the breeding season, bluegills move to shallow areas of water measuring three to five feet deep. This is where the male makes a nest in the sand. As the cold weather season sets in, these details venture to deeper parts of the lake. They stay near the bottom as their metabolism slows to conserve energy.",
      image:
        "https://a-z-animals.com/media/2022/04/Bluegill-header-400x300.jpg",
    },
    Bonitodetails: {
      name: "Bonito details",
      quote: "The Bonito details is a medium size, predatory details.",
      description:
        "Bonito details have stripes on their back with a silver underside. There are four different species of Bonito details that can be found across the globe.There are four main species of Bonito details that are most commonly recognized. They are the Atlantic Bonito, the Pacific Bonito, the Indo-Pacific Bonito, and the Australian Bonito. The scientific names for these species are Sarda Sarda, Sarda Chiliensis, Sarda Orientalis, and Sarda Australis, respectively. The term Sarda refers to the genus that Bonita details belongs to. The second word in the scientific name for each species refers to the area where the Bonito details can be found.These details can grow to be up to 30 inches long. They have a more streamlined body that is similar to that of a tuna. Their backs are blue with longitudinal stripes, and their undersides are silver. A Bonito details’s tail is forked with a narrow base.The four different species are spread out in different areas of the globe. Pacific Bonitos can be found between Chile and the Gulf of Alaska, though most are located in warmer areas near southern California and Mexico.These details choose different areas for their habitats. Some can be found in more open water areas, whereas others frequent kelp forests that are closer to the shoreline. In general, younger details are more common to be found closer to the shore. They may also swim into bays or harbors. Larger adult Bonitos may swim up to 300 feet below the surface.Bonito details face a lot of natural predators. Striped Marlin, Sworddetails, Bluefin Tuna, and other large details like to eat Bonitos. Additionally, marine malls like Dolphins, Pelagic Sharks, Thresher Sharks, Shortfin Mako Sharks, and Sea Lions also prey on them.Bonitos are broadcast spawners. This means that they release the sperm and eggs (also known as gametes) into the water where they will be fertilized. After the eggs are released, neither the male or female does anything to watch over the eggs or care for the young. Approximately three days after being released, the eggs will hatch.These details are detailsed both recreationally and commercially. Some people catch smaller Bonitos to use as bait for larger details, such as mackerel. Additionally, people often share that catching a Bonito is good practice for tackles detailsing. While these details are caught all year long, more are around during the spring or summer.While their names sound very similar, a Bonita details is different from a Bonito details. Bonitas are also in the Scombridae family. The scientific name for Bonita details is Euthynnus Alletturaturs. Whereas Bonito details are closely related to mackerels, Bonita details are more closely related to tuna.These details are sometimes used in cooking, but many people find that they have too strong of a flavor combined with an unpleasant oily texture. The meat of a Bonito is dark red.",
      image: "https://a-z-animals.com/media/bonito-1-400x300.jpg",
    },
    BonnetheadShark: {
      name: "Bonnethead Shark",
      quote:
        "Bonnetheads are the only hammerhead sharks that use their pectoral fins to swim.",
      description:
        "Of all the details in the ocean save those who live where the sun doesn’t shine, nature seems to have taken special pleasure in rearranging the shark over eons. There have been sharks with what look like anvils on their heads and sharks with curlicuing lower jaws. In modern times, there are sharks with heads that look like hammers or demilunes. The latter describes the bonnethead shark, or shovelhead, a small and shy details found in coastal tropical and temperate waters.The bonnethead shark’s scientific name is Sphyrna tiburo. Sphyrna comes from the Greek for “hammer,” and tiburón is the Spanish word for “shark.” It belongs to the Sphyrna genus, which encompasses the hammerhead sharks and the Carcharhiniformes order. Most sharks belong to this order. They have two fins on their back, five gill openings, an anal fin, and eyes that are protected by nictitating membranes.One look at the bonnethead shark identifies it instantly. It is the only shark with a demilune-shaped head. Its eyes are on either end of its head. The head is smaller than those of other hammerheads, and the price of this is that the shark is a bit less hydrodynamic than its cousins. It has to roll its head around and use its pectoral fins to swim properly. The bonnet shark also must continually swim lest it sinks.Males are 20 to 30 inches in length, while females can grow as large as 39 inches. They are brown or greenish-brown on top, and their hide, made rough through dermal denticles, can be spotted. The shark has one large dorsal fin and a smaller one near the tail, an anal fin, a pair of pectoral fins, and a pair of pelvic fins. The tail is long, with one long lobe and a shorter lobe. The teeth of the bonnethead shark are sharp in the front. The back teeth are molars used to grind down the shells of the crustaceans it prefers.The bonnethead is found in the temperate and tropical coastal waters off the eastern and western United States, Central America, the Gulf of Mexico, and the Caribbean, off the coast of Ecuador and the eastern coast of South America down to Argentina. It can be found in schools in reefs, channels, bays, and estuaries. It has even been found in mudflats.Bonnethead sharks are partial to mollusks and crustaceans, especially the blue crab, and their teeth are made for grabbing the prey then grinding up the shells. One of the reasons the bonnethead moves its head the way it does as it swims is to sense prey that may be hiding beneath the sand. It will also eat bony details. The bonnethead is also notable in that it’s the only shark known that eat plant material. It eats seaweed and seagrass. Some scientists believe the shark does this to protect its gut against the sharp edges of crab shells.Scientists don’t know much about the mating behavior of bonnethead sharks, but like all sharks, fertilization is internal. The female may also store the sperm for a few months until the time is optimal for her to become pregnant. She’ll move to a location that’s best for the pups, which is shallow water near the shore. When birth occurs also depends on the location and can happen from mid-August to late September. Once she is pregnant the female bonnethead stays that way for only four to five months. This is a very short gestation period for a shark.",

      image:
        "https://a-z-animals.com/media/2021/07/Bonnethead-Shark-header-400x300.jpg",
    },
    Bowfin: {
      name: "Bowfin",
      quote:
        "The bowfin is a primitive details that first evolved in the Jurassic.",
      description:
        "The modern bowfin species descends from an ancient line of details that dates back to the Jurassic period some 145 to 200 million years ago. It is sometimes called a “primitive details” or “living fossil” because it has changed relatively little compared to its ancestors many millions of years ago, but this in fact a modern species.The scientific name of the bowfin is Amia calva. Amia appears to be the Greek name for an unknown details unrelated to the bowfin. Calva appears to derive from the Latin word for scalp or skull, or alternatively smooth, perhaps referring to the bowfin’s unusual scale-less head. The bowfin is the only currently living members of its entire genus, family, and order. Many other species are known from the fossil record, but they appeared to have gone extinct a long time ago.The bowfin details and snakehead are often mistaken for each other because they bear remarkable similarities in appearance, but they are actually part of entirely separate and barely related orders. If it has a narrow head and a very long anal fin near the back underside, then it’s probably a snakehead.The bowfin details is characterized by a mottled green and brown appearance (becoming almost yellow near the belly) and a black spot near that tail that might serve the purpose of distracting other animals. The dorsal fin, which covers almost half the back with 46 to 50 soft undulating rays, gives this details its common name. It also has a pair of pectoral fins near the head, a pair of pelvic fins around the mid part of the lower body, and a short anal fin near the back. The skull is composed of two different layers, one on top of the other for extra protection, and contains large teeth.The bowfin has a comparatively long body. From head to fin, it measures 20 or 30 inches long and weighs around 4 to 10 pounds. The largest specimen ever recorded had grown up to 43 inches and some 21 pounds. The male of this species is generally smaller than the female and has an orange circle around its black tail spot.he bowfin inhabits a large range in America that extends between the Great Lakes in the north and the Gulf of Mexico in the south (with the exception of the Appalachian Mountains). It prefers temperate lakes, ponds, rivers, wetlands, and streams: almost anywhere with a sufficient amount of prey to eat and space to roam.The bowfin is an apex predator that occupies the top of the food chain in almost every ecosystem it inhabits. It hunts in different locations throughout the day, moving from deep water during the daytime to shallower water at night.The bowfin is a slow but highly aggressive ambush predator that waits patiently in the shadows to stalk and then strike out at its quarry. This species consumes a wide variety of crustaceans, insects, amphibians, and other details, including bowfins. The rapid motion of its mouth provides enough suction to easily capture and suck in prey.",
      image: "https://a-z-animals.com/media/bowfin-6-400x300.jpg",
    },
    Boxdetails: {
      name: "Boxdetails",
      quote:
        "The bowfin details is a large and tenacious predator that lurks within America’s freshwater bodies, gobbling up smaller prey that passes by.",
      description:
        "It’s easy to see how a boxdetails got its name. Its body is the shape of a small box! These are saltwater details living on coral reefs in the Pacific and Indian Oceans as well as the southeastern Atlantic Ocean. They’re sometimes sold as colorful additions to an aquarium.Ostracion cubicus is the scientific name of a boxdetails. The Latin word Ostracion means shell which refers to the carapace or shell structure of this details. Cubicus means cube-like.The appearance of a boxdetails changes as it grows older. If you see a brilliant yellow boxdetails spotted with black, you know it’s a juvenile. But, if you see one with a blue/gray, dull yellow or even brownish body with faded spots, you know it’s an adult boxdetails.Their boxy shape is due to the shell structure beneath its scales. This odd shape makes them very slow swimmers. In fact, some describe their movement as hovering, instead of swimming.Large details and sharks are predators of the boxdetails. Considering its small size, it would seem like easy prey. But one of the most interesting facts about the boxdetails is it has a few effective ways to defend itself.For one, this details has a bright yellow body spotted with black. The brilliant, ornate color of its scales is a warning to predators that it contains poison. Indeed, if this details becomes stressed, it releases poison into the water around it. This poison can make a predator sick or even kill it.These details reproduce in the late spring in warm water. They form groups including one male and two to four females. The females lay eggs that float near the surface. The male boxdetails releases sperm to fertilize the eggs. A female boxdetails can lay eggs every day for a month. The gestation period is unknown. Boxdetails live four years on average.",
      image: "https://a-z-animals.com/media/2022/03/box-details-5-400x300.jpg",
    },
    BronzeWhalerShark: {
      name: "Bronze Whaler Shark",
      quote: "The Bronze Whaler Sharks only hunt in large groups.",
      description:
        "Also known as the Copper Shark, the Bronze Whaler Shark’s scientific name is Carcharhinus brachyurus. It may also be referred to as the narrow-tooth shark. This shark is a species of requiem shark known to exhibit viviparity. This means birth to live young as mammals do. The Carcharhinus is also one of the few species of shark that live in temperate waters instead of tropical waters.The Bronze Whaler Shark goes by the scientific name of Carcharhinus brachyurus. It belongs to the order Carcharhiniformes, which is considered the largest order of sharks on earth. It belongs to the family Carcharhinidae along with seven other shark families. The family Carcharhinidae, where is shark belongs is also known as Requiem sharks. These migratory sharks live most of their life in the warm seas. However, they may also live in brackish or even fresh water. Requiem sharks are known to give birth to live young. The bronze whaler shark is a large details with a classic shark appearance. It features a long and moderately rounded snout with narrow hook-shaped teeth. The male and female have similar appearances, although the male is slightly bigger. The males also have proportionately longer teeth. Bronze whaler sharks typically grow to a maximum size of around 295 cm. However, there are rare records of lengths as high as 350cm. Copper sharks have circular and relatively large eyes. Their pectoral fins are moderately large and typically feature narrowly rounded or pointed tips. They do not have an inner dorsal fin. However, their caudal fin typically features a bulge close to the base of its front edge. The dorsal side of the Bronze whaler shark is bronzy gray or olive-gray, which is where the name comes from. The ventral surface is white. They have some dark markings on the edge of their fins. These markings are quite similar to that of the blacktip shark or spinner shark. This is why both species are often confused with each other. Their main distinguishing feature is the distinctive upper teeth and the lack of pronounced markings. They also don’t have an inner dorsal ridge like these other species. The Bronze Whaler Shark is typically found in temperate waters and live together in large groups. You’re likely to find them in the deep waters of the Atlantic, usually off the coast of Australia, South Africa, and New Zealand. However, they may also venture close to the coastlines of various offshore islands, artificial harbors, and inlet waterways. Some populations of Copper Sharks have been spotted in the Mediterranean, off the coast of Argentina, around the Gulf of Mexico, and in the Indo-Pacific regions. Bronze Whalers are highly migratory. They change locations with the seasons and may also move due to changes in salinity. Males and females do not live together except during mating season. The UN has designated the Bronze Whaler shark as near threatened because the species population is growing thinner due to commercial detailsing. Like most sharks, the species also has a low reproduction rate which is another reason for the declining population. Currently, there is a catch and release program in New Zealand and Namibia to preserve the population of copper sharks. Commercial detailsing is not allowed in these places, and hobby or recreational detailsers must release their catch back to the sea. Bronze whaler sharks are fast-swimming predators that feed mainly on cephalopods and bony detailses. However, they may also feed on other cartilaginous detailses. Copper sharks hunt in large groups, which allows them to utilize their numbers to their advantage.",
      image:
        "https://a-z-animals.com/media/2022/07/Bronze-Whaler-Shark-header-400x300.jpg",
    },
    BrookTrout: {
      name: "Brook Trout",
      quote:
        "This popular details is a star in recreational detailsing” sums up the feeling anglers have about the Brook Trout.",
      description:
        "Brook Trout is a freshwater details native to Eastern North America, specifically the northern areas of the United States and Canada. It is a popular sport details, especially for fly detailsermen. It lives in cool, clear water in remote and mountainous areas. Also known as the speckled trout, it has unique coloring with yellow spots over an olive-green background, transitioning to orange and red along its sides and belly.Brook Trout is the state details of nine states in the United States: Michigan, New Hampshire, New Jersey, New York, North Carolina, Pennsylvania, Vermont, Virginia, and West Virginia.Some Brook Trout called “salters” along the Atlantic coast will travel into the ocean to feed for months at a time. In the ocean, they lose their color somewhat and turn to more of a silver color. Once they return to freshwater to spawn, their color returns within 2 weeks.Brook Trout only thrive in the cleanest and coldest freshwater streams and rivers. They can be used as a good indicator of the purity of the water.Brook Trout have a dark olive green color with lighter yellow dots or speckles. Their body is wide in the middle and tapers to both ends. Its head has a large mouth and a rounded snout. They have a marbled pattern along their back, also called vermiculation. The belly and lower fins are orange-reddish, with the fins having a white leading edge. Full-grown lengths can vary between 10 to 25 inches and weigh between 0.6 to 6.6 pounds. However, most detailsermen catch details that are much smaller.Brook Trout are a popular details for both sport detailserman and raising commercially. The meat is light and delicate and has a slightly sweet flavor compared to other trout. They are most popular in their native regions. However, they are commercially sold as smoked trout in many areas.Since Brook Trout require cool, clear water, they are usually found in remote mountainous areas, which can be challenging to reach. They reside in mountain streams and rivers and congregate in small areas where the water flow is slow, along the back side of boulders. They can be caught with spinning rods with light tackle, but the most popular is with a fly rod. With fly detailsing, targeting these small areas where Brook Trout rests in slower water is easier.Brook Trout will spawn in the fall, from October to early November.  The female will create a shallow, “redd” nest in a clean area with small gravel or stones.  She will lay around 100-400 eggs, and multiple males will fertilize the eggs. ",
      image: "https://a-z-animals.com/media/2021/09/brook_trout-400x300.jpg",
    },
    Buffalodetails: {
      name: "Buffalo details",
      quote:
        "Buffalo details have been known to live more than one hundred years!",
      description:
        "The Buffalo details, also known as the Ictiobus, is a large genus of freshwater details that is one of the largest North American sucker details. They can be found throughout the United States, Mexico, Guatemala, and Canada. Buffalo details are often mistaken for carp due to the two details’s similarities in appearance. These large details thrive in a variety of different water systems, such as ponds, creeks, and lakes with temperate freshwater. They are native to North America and the genus belongs to five different species of Ictiobus.The Buffalo details has an olive coloration that is usually mixed with dark gray or golden scales. The appearance of the Buffalo details differs according to the species, as the Southern Buffalo details is considerably lighter in appearance than the Black Buffalo details. Buffalo details can reach a length of 4 feet; however, most species rarely exceed 2 feet in length.This popular gamedetails has a long dorsal fin that appears angular; their bodies are quite detailsy, and they can weigh up to 82 pounds. However, most Buffalo details only reach half their maximum weight. Although they are related to suckerdetails, they do not have any barbels. Instead, they have an upturned mouth with thin sucker lips that they use to scrape algae off from rocks.Buffalo details are native to North America, and they are distributed throughout Canada, Mexico, and Guatemala. Some species of Buffalo details are found in larger regions, while others stick to a smaller geographical area. Each of the five species in the Ictiobus genus has its own geographical distribution, but they are all primarily from parts of Northern America from river basins or the Mississippi river.The Buffalo details lives in freshwater rivers, lakes, ponds, and creeks throughout North America. They live in shallow, sluggish waters where they swim at the bottom of the body of water, foraging through the muddy substrate and vegetation for food. Buffalo details prefer to live in waters that contain a lot of vegetation because this is where they lay their eggs. The waters they inhabit are usually murky and contain mud as the main substrate.Buffalo detailses were originally thought to be terrible gamedetails because they were difficult to catch by a hook and line. Legal changes in 2010 have made Buffalo details a target for bow detailsing, which is why certain laws and detailsing regulations were enacted in certain places. Buffalo details are now considered to be a popular game details and are great for fly-detailsermen because they put up a fight. They can be caught with a fly rod and barbed hooks.The Bigmouth Buffalo details has been recorded to live up to 112 years, according to the measurement of their otolith ear bone by scientists. The Buffalo details can live as short as 18 years of age, but the average lifespan reaches around 25 years. In captivity, the smallmouth buffalo details only lives between 8 to 10 years, mainly because their environment is not as adequate as their large natural rivers and lakes that allow them to reach their full adult size.Buffalo details reproduce in waters that contain plenty of vegetation for their eggs to hatch and be hidden from predators. They travel upstream to reproduce and will usually migrate for this to be possible. Most Buffalo details will travel in large groups to breeding grounds, where the females will release eggs and the males will fertilize them during spawning.",
      image: "https://a-z-animals.com/media/2022/08/Buffalo-details-1-400x300.jpg",
    },
    BullTrout: {
      name: "Bull Trout",
      quote:
        "The bull trout’s coloring and markings resemble that of the brook and brown trout, but it is actually a char and related to the salmon.",
      description:
        "The bull trout is a fascinating details. Its limited range means that many anglers never see this interesting species. Ironically, serious anglers may first spot the bull trout while reeling in their catch. The bull trout’s diet of fresh details means that it is often attracted to the sight of a details struggling on the end of an angler’s line.The bull trout has the scientific name Salvelinus confluentus. It is in the order Salmoniformes. It is called bull trout due to its large head. Its pattern is similar to that of the brook trout, although it is actually a char.Dark body with lighter colored spots. The body color ranges from olive to blue-gray. The spots can be any combination of red, pink, orange, and yellow. These colors become more vibrant in the breeding male, with the underside becoming red or orange. There is a white stripe along the leading edge of the ventral, or pelvic, fins.The bull trout requires a specific habitat to thrive. They live in the clear, cold waters of the coastal rivers and high mountains of northwestern North America. In the United States, they can be found in Montana, Idaho, Oregon, Nevada, and Washington. In Canada, they are found in British Columbia and Yukon.Bull trout spawn for the first time between the ages of five and seven. The cold water and unforgiving conditions they call home influence their reproduction. They often go through resting periods between spawning cycles, so each details does not reproduce each spawning season.Despite its vulnerable status, it is possible to keep bull trout that you catch. It is important to check local laws; there is often a special license required. For example, in Montana, detailsermen must have a specific catch card for the water they are detailsing. Some areas allow harvesting, while others are catch and release only.The estimated population of bull trout is between 500,000 and one million. According to the IUCN Redlist, this species is listed as Vulnerable.",
      image:
        "https://a-z-animals.com/media/2022/04/shutterdetails_593474345-400x300.jpg",
    },
    Butterflydetails: {
      name: "Butterfly details",
      quote: "There are more than 100 different species!",
      description:
        "The butterfly details is a family of tropical marine animals that have adapted to life in and around coral reefs. The seemingly endless permutations of beautiful colors and patterns give each species an entirely distinctive appearance, much like the famous insect for which it’s named. In fact, the vivid appearance and rather docile personality have made them a very popular type of aquarium details.The scientific name for the butterfly details family is Chaetodontidae. This is a combination of two Ancient Greek words: chaite, meaning hair, and odontos, meaning tooth. This is probably a reference to the rows of brush-like teeth in the mouth. This family should not be confused with the freshwater butterflydetails (also known as the African butterflydetails). Endemic to the West African region, the freshwater butterflydetails belongs to an entirely different order. Given their different appearance, distribution, and behavior, they are not closely related at all. The freshwater buterflydetails is more closely related to other African details in the order of Osteoglossiformes.The butterfly details sometimes looks like the wings of a butterfly. It has a big, round but flat body with prominent fins around the back and pelvis. The dorsal fin on the back sometimes features sharp spines which provide a defense against potential predators. As mentioned previously, this family is named for the small rows of bristle-like teeth in the mouth. Some have long snouts and jaws (up to 25% of the body length) for grasping prey in small crevices. The most common colors are blue, yellow, orange, and white with dark contrasting bands and large spots near the back. This spot may serve the purpose of confusing predators. The largest species of butterfly details measures up to a foot long, but most don’t exceed more than 8 inches.The butterfly details is one of the most common types of coral reef details in the world. It is very well adapted to life in the narrow confines of vast coral reef systems, though a few species also inhabit seagrass beds, lagoons, and mudflats. The greatest concentration of species is found in a stretch of Pacific territory between Australia and Taiwan. Only four species occur in the Eastern Pacific and 13 in the Atlantic Ocean. Their preferred habitat is the shallow warm water less than 65 feet deep near shores or estuaries, but a few species reside in deep water habitats up to 650 feet.The butterfly details mates at a very specific time of the year. In the tropics, the spawning season usually peaks in winter or early spring. In temperate climates, the spawning season takes place in the summer. The butterfly details forms stable monogamous pairs for at least three years and sometimes their entire lives.After growing to about the size of a coin, the details will soon enter into a juvenile stage and exhibit different color patterns from its adult form. It will usually find a temporary home within small tidal pools or shallow areas before moving out to the corals. After about a year, the butterfly details can expect to begin breeding. It has a full life expectancy of five to 10 years in the wild.",
      image:
        "https://a-z-animals.com/media/copperband-butterfly-details-400x300.jpg",
    },
    Carp: {
      name: "Carp",
      quote:
        "The carp is an oily ray-finned freshwater details that has played a role in human culture for thousands of years.",
      description:
        "As one of the most popular types of pond or aquarium details in the world, many species of carp have undergone selective breeding for shape, color, and resistance to disease. This practice probably originated somewhere in China and then spread out to the rest of the world. Today carp details are common in artificial ponds, aquaculture, and recreational and commercial detailsing.There is a lot of confusion surrounding the name “carp,” because it’s actually an informal term and not a scientific one. The closest thing to a scientific classification is the family of Cyprinidae (which actually derives from the Ancient Greek name for the carp, kuprinos; this may have some connection to Aphrodite, the goddess of procreation and love). Think of it this way. Every single species of carp belong to a single family. However, not every member of the family is a carp. It also includes the minnows and the barbells.This is a very diverse group of details, but there are a few characteristics that unite them. Most of these details have a big, round body. They have a unique structure that connects the swim bladder with the auditory system to enhance and amplify vibrations and sounds. Most carp details have barbels (long whiskers) for sensing the surrounding environment, but a few species lack them entirely.In the wild, carp details tend to have duller colors such as brown, green, silver, black, and white. But occasionally, a brighter orange or red carp will arise. These specimens have been selected by humans for their appearance to create domesticated species like the golddetails. The average details grows to 14 inches in length, but the largest specimens measure some 39 inches and 49 pounds. Crucian carp are the smallest types and usually weigh no more than 4 pounds.The carp is a freshwater details that first evolved in the lakes, rivers, and ponds of Europe and Asia, though some species may venture out into salt or brackish water for parts of the year. It was gradually introduced to other continents as a means of controlling annoying pests and plants. But due to its habit of disturbing local habitats and out-competing native details, these details quickly became an annoying pest itself. As concern grew that the details would gradually take over and transform waterways, the United States began to construct a series of electric details barriers to prevent the carp from entering the Great Lakes and disturbing the ecosystem there.",
      image: "https://a-z-animals.com/media/carp-6-400x300.jpg",
    },
    Catdetails: {
      name: "Catdetails",
      quote:
        "Feeding at the depths of the lake or river, the catdetails is always aware of its surroundings thanks to the prominent whiskers on its face and an elaborate network of chemical receptors all over its body.",
      description:
        "This amazing sensory apparatus on this species relays important information about the composition of its surrounding environment. The catdetails has also served as a common delicacy in many human cultures around the world. This is both a blessing and a curse. When there is no regulation on hunting, the catdetails may be driven to the brink of extinction. But when humans take an interest in its survival, the catdetails is allowed to thrive.The order of Siluriformes possesses a truly staggering amount of diversity. It contains around 3,000 species across 35 different families. By comparison, the primate order, which includes all humans, apes, and monkeys, is only composed of a few hundred species.This details comes in a diverse range of different colors, shapes, and characteristics, but there are a few distinct traits that unite all species together. The most prominent physical characteristic is the pair of long barbels (the whiskers or feelers) along the upper jaw that act as sensory organs. Most actually have receptors all over the body that allow them to taste or smell various chemicals in the water, but the barbels are the main instruments through which they sense the surrounding environment. A single pair is standard, but some may have up to four pairs of whiskers arranged along the mouth, snout, and chin.Most have a long body and flattened head to allow for bottom feeding. With their tendency to sink rather than float, they spend most of their time sifting the floor for food, usually during the night but sometimes during the day as well. Their mouths are widely spaced to take in large quantities of food at a single time. Most species are gray, white, yellow, brown, or green in color. The skin consists of bony plates or a lining of mucus instead of scales. A spine near the fins is present in some species to ward off dangerous predators. It usually delivers either a sharp sting or a very painful and debilitating venom.",
      image:
        "https://a-z-animals.com/media/animals/images/original/catdetails-400x300.jpg",
    },
    Chimaera: {
      name: "Chimaera",
      quote:
        "The chimaera is a unique, cartilaginous details that lives in the depths of the ocean and is closely related to sharks, skates and rays.",
      description:
        "Each family of chimaera details has a distinctive, somewhat gruesome appearance, and they are often collectively referred to as “ghost sharks” because of their strange, pale coloring.Because there are so many species of chimaeras that live in the deep waters of oceans around the globe, there are many variations of size, shape, coloring and distinguishing features. This means that it would be impossible to describe every known species of chimaera.This family of chimaeras is also commonly referred to as “elephant details.” They are the only surviving members of the Callorhinchus genus. While they behave similarly to the other members of the chimaera order, they are distinguished by their long, flexible and fleshy snouts. These “trunks” are used to search the sea bottom for the small invertebrates that it feeds on. Their snouts can also sense movement and electrical fields, which makes them better hunters.Short-nosed chimaeras are often called “ratdetails” because of their long, tapering tails. They can grow to be between 1 and 5 feet long, including their tails, and they have a distinctive, venomous spine on their backs that is potent enough to injure a human. Most are brown in color.Long-nosed chimaeras have the long, paddle-like snouts of elephant details as well as the long, tapering tails of rat details. They are typically pale in color and can grow up to 4.5 feet in length. Like the short-nosed chimaera, they also have a small, venomous dorsal spine.Chimaeras can be found in all of the world’s oceans except the Arctic. They typically live between 650-8,500 feet below the ocean’s surface. This means that they are considered deep-sea creatures because they reside in the twilight and midnight zones of the ocean.Like some of their skate and shark relatives, chimaeras lay eggs onto flat, muddy sea beds. Females lay eggs in pairs, and they can lay multiple pairs during each breeding season. The number of eggs laid depends on the species, and researchers believe that it takes anywhere from 6 to 12 months for the eggs to hatch.Chimaeras are edible, but they are not a common food source for humans. Like many details, they have parasite colonies that live on their skin and in their gills. The rabbit details in particular is thought of as a novelty seafood dish, and some people will also eat ghost details alongside mussels, clams or shrimp. In the past, chimaera liver oil was valuable as a lubricant for guns and certain instruments.",
      image: "https://a-z-animals.com/media/Chimaera-1-400x300.jpg",
    },

    ChinesePaddledetails: {
      name: "Chinese Paddledetails",
      quote:
        "The Chinese paddledetails is a large freshwater predator, appropriately named for the paddle-shaped snout extending from the face.",
      description:
        "Large numbers of these details once roamed the mighty Yangtze River of China. But after years of rapid decline, the Chinese paddledetails is believed to be extinct, a victim of human activity.The scientific name of the Chinese paddledetails is Psephurus gladius. Gladius is the name of a Roman short sword, which resembles the details’s nose. The paddledetails was the only living member of its genus and the only other member of its family besides the American paddledetails. More distantly, it occupies the same order as the sturgeon, which is another big predatory details with a large snout.There are many facts about the Chinese paddledetails that make it unique. It is one of the largest species of freshwater details in the world. It measures up to 23 feet (though more commonly about 10 feet) and weighs up to 992 pounds. The paddle nose alone, which is the distinguishing feature of this details, takes up a full third of the body length. It has a silver-grey back, fading to a white underbelly, with pink or red-colored fins. White ridges also extend along the side of the body. The smooth skin mostly lacks scales except near the fins.The Chinese paddledetails was once endemic to the entire Yangtze River and its tributaries and connected lakes, including the Yellow River. Running between the mountains of Western China and the East China Sea near Shanghai, the Yangtze is the third largest river in the world and contains an enormous amount of aquatic diversity. An adult paddledetails will also sometimes spend part of its life in the brackish (salty) estuaries and coastal waters of the East China Sea.The Chinese paddledetails had a spawning season that traditionally lasted between March and April. Like many freshwater details, it migrated every year to its upriver spawning grounds, which also made it vulnerable to dam construction and detailsing. Once they arrived, the males and females released their sperm and eggs into the water, which mixed and fertilized together.The Chinese paddledetails were heavily hunted in the 1970s and 1980s. Its predictable spawning behavior made the Chinese paddledetails relatively easy to catch in large nets as they swan along the river in schools toward the breeding grounds. The flesh was not the only desirable part of this details, however. The roe (or eggs) were also considered to be a delicacy. It was made into caviar and sold at a high price.",
      image:
        "https://a-z-animals.com/media/2021/02/Chinese-paddledetails-in-museum-5-400x300.jpg",
    },

    ChinookSalmon: {
      name: "Chinook Salmon",
      quote:
        "The Chinook salmon is the largest species of salmon in the Pacific; this is why they are also called the king salmon.",
      description:
        "The Chinook salmon is among the most important details in its region. It is a linchpin of the local ecosystem. Each year these salmon make an annual migration inland for the spawning season. They are concentrated in such great numbers in the streams that people and other hungry animals gather to catch them. However, because of the popularity of their meat, there is evidence that the details of Chinook is being depleted in some areas of the world.The scientific name for the Chinook salmon is Oncorhynchus tshawytscha. The genus name Oncorhynchus is derived from two Greek terms: onkos, meaning lump or bend, and rhunkhos, meaning snout. This refers to the hooked snout that the male will grow in the reproductive season. Tshawytscha is the Russian name for this species in the far eastern part of the country. The Chinook is closely related to the sockeye salmon, rainbow trout, and pink salmon.For most of their adult lives, the Chinook salmon has a long, tapered body with a blue-green back, a silver sheen on their sides, and a white belly. This is accompanied by black spots on the upper half of the body and the lobes of the tail fin. Another black streak along the gum line gives them the alternate name of blackmouth. In preparation for the spawning season, the Chinook suddenly changes color to an olive-brown, red, or purple-hued body, and the males develop the hook on their upper jaw. The females, by contrast, can be identified by their blunt nose and larger mid-section. The Chinook is among the largest of all salmon. They typically measure about 3 feet long and 30 pounds in weight, but the world record was nearly 5 feet long and weighed almost 130 pounds.The Chinook salmon is native to the Northern Pacific region, from California to Alaska in the east and Japan and Russia in the west. This species has also been introduced to New Zealand, the Great Lakes region, and Patagonia in South America. They spend a great deal of their time at the bottom of the seafloor, hiding among grass and seaweed. Cool, clean water with plenty of oxygen is usually required for optimal health.The spawning season usually takes place each year between September and December. The annual migration upstream is an arduous journey that requires a great deal of strength. Upon reaching their spawning location inland, the Chinook will dig out a gravel nest called a redd at the bottom of the stream. The female will guard her nest for up to 25 days, but the eggs can take three to five months before fully hatching.",
      image:
        "https://a-z-animals.com/media/2022/04/Chinook-Salmon-header-400x300.jpg",
    },

    Cichlid: {
      name: "Cichlid",
      quote: "There are more than 2 000 known species!",
      description:
        "One of the most important things to learn about cichlids is there are lots of them! Officially, there are 1,732 known species of cichlid, but biologists believe there are many more. This freshwater details is an omnivore, eating larvae, brine shrimp, and algae. They’re best known for their colorful scales.With so many types of cichlids in existence, this details can claim practically any color on the spectrum. As an example, an African butterfly peacock cichlid has brilliant yellow scales with bright blue fins. Alternatively, a Livingstonii cichlid, also a mbuna, has a silver body with black splotches.These details can be as small as two inches in length and as large as 36 inches. The Neolamprologus ocellatus is a dwarf African cichlid growing to two inches. Alternatively, the African giant cichlid is the biggest type measuring 36 inches.Most cichlids live in freshwater rivers and lakes in Africa, Central America, and South America. Specifically, biologists estimate that Lake Malawi in Africa is home to over 1,000 types.Cichlids vary between being fully herbivorous and fully carnivorous, depending on the species. This dietary strategy is almost always reflected in the details’s physical characteristics. Many cichlids cruise through algae beds or the muddy floor and passively filter out small prey from the surrounding water such as zooplankton (tiny marine animals) and phytoplankton (small photosynthetic plant matter). Larger cichlid species consume hard-shelled mollusks by crushing the shell with their strong jaws or sucking out the prey.A select few species will consume entire eggs or larvae of other cichlids. They have adapted the unique strategy of targeting a mother who keeps the eggs stored safely in her mouth. They will ram her repeatedly in an effort to make her release the eggs so it can gobble them up.Besides members of its own kind, cichlids also face predation from humans and other types of details. Overdetailsing, habitat change, and invasive species have all posed dangers to cichlids. The introduction of the Nile perch into some areas of its natural range has driven a few species to extinction. Many are listed as least concern though and do not face any particular population pressures.",
      image:
        "https://a-z-animals.com/media/animals/images/original/cichlid2-400x300.jpg",
    },
  };
  return detailsInfo[details];
};
