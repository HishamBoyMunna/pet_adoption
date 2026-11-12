export const SPECIES = ["dog", "cat", "rabbit", "bird"] as const;
export type Species = (typeof SPECIES)[number];

export const SIZES = ["small", "medium", "large"] as const;
export type Size = (typeof SIZES)[number];

export type Sex = "male" | "female";

export type Pet = {
  /** URL segment for /pets/[id]. Stable — do not rename once published. */
  id: string;
  name: string;
  species: Species;
  breed: string;
  ageMonths: number;
  size: Size;
  sex: Sex;
  shelter: string;
  location: string;
  /** One line, used on cards and list rows. */
  summary: string;
  /** Long-form copy for the detail page. */
  description: string;
  traits: string[];
  /** Household or animal compatibilities, e.g. "kids", "cats". */
  goodWith: string[];
  vaccinated: boolean;
  neutered: boolean;
  /** Path under /public so the image is precached for offline use. */
  image: string;
  imageAlt: string;
};

export const pets: Pet[] = [
  {
    id: "miso",
    name: "Miso",
    species: "cat",
    breed: "Domestic Shorthair",
    ageMonths: 14,
    size: "small",
    sex: "female",
    shelter: "Lantern Street Shelter",
    location: "Brooklyn, NY",
    summary: "Sits in the sunny window and waits for exactly one person.",
    description:
      "Miso came in as a stray with an ear injury that has long since healed. She is quiet in a way that reads as polite: she will approach you, sit down at a careful distance, and wait to be invited. Once she decides you are hers, she is all of that attention at once. She would do best in a quiet home without a drafty porch and without expectations of constant entertainment.",
    traits: ["Lap cat", "Shy at first", "Vocal once bonded"],
    goodWith: ["Adults", "Calm homes", "Other cats"],
    vaccinated: true,
    neutered: true,
    image: "/pets/miso.svg",
    imageAlt: "Illustration of Miso, a small brown-and-white cat",
  },
  {
    id: "barnaby",
    name: "Barnaby",
    species: "dog",
    breed: "Beagle mix",
    ageMonths: 38,
    size: "medium",
    sex: "male",
    shelter: "Lantern Street Shelter",
    location: "Brooklyn, NY",
    summary: "Nose-first, forever. Will find the sandwich you left on the counter.",
    description:
      "Barnaby is three years old and still convinced that every interesting thing in the world is slightly out of reach. He walks well on a leash, tolerates enthusiastic children, and has a strong, pleasant opinion about every food smell in a ten-block radius. He needs a securely fenced yard or an owner who enjoys long walks, because a beagle's nose is a genuine leash-breaking hazard.",
    traits: ["Food motivated", "Good with kids", "Noisy"],
    goodWith: ["Kids", "Dogs", "Active homes"],
    vaccinated: true,
    neutered: true,
    image: "/pets/barnaby.svg",
    imageAlt: "Illustration of Barnaby, a tricolor beagle",
  },
  {
    id: "juniper",
    name: "Juniper",
    species: "rabbit",
    breed: "Holland Lop",
    ageMonths: 9,
    size: "small",
    sex: "female",
    shelter: "Second Chances Rabbit Rescue",
    location: "Queens, NY",
    summary: "Litter-trained, endlessly curious, and a champion flopper.",
    description:
      "Juniper is nine months old and just discovering that cardboard is a building material. She is litter-trained and reliably hand-tame, though she still prefers to come to you rather than be lifted. Rabbits are social animals that need daily out-of-cage time and do poorly when left alone for long stretches, so we are looking for a household that is home a lot.",
    traits: ["Litter trained", "Floppy", "Needs daily handling"],
    goodWith: ["Adults", "Indoor only"],
    vaccinated: true,
    neutered: true,
    image: "/pets/juniper.svg",
    imageAlt: "Illustration of Juniper, a cream-colored lop-eared rabbit",
  },
  {
    id: "pepper",
    name: "Pepper",
    species: "cat",
    breed: "Tuxedo",
    ageMonths: 84,
    size: "medium",
    sex: "female",
    shelter: "Second Chances Rabbit Rescue",
    location: "Queens, NY",
    summary: "Seven years old and entirely unbothered by your schedule.",
    description:
      "Pepper is a senior with a calm, low-maintenance temperament. She has no interest in windowsill acrobatics or 3am zoomies; her ideal day is a sunny spot, a reliable meal, and a few minutes of chin scratches. Senior cats are frequently overlooked, and we would like to be clear that she is not a project or a compromise. She is simply a quiet, easy cat who will be a friend for a long time.",
    traits: ["Senior", "Low energy", "Lap-seeking"],
    goodWith: ["Adults", "Kids", "Other cats", "Dogs"],
    vaccinated: true,
    neutered: true,
    image: "/pets/pepper.svg",
    imageAlt: "Illustration of Pepper, a tuxedo-patterned senior cat",
  },
  {
    id: "tumbleweed",
    name: "Tumbleweed",
    species: "dog",
    breed: "Australian Cattle Dog",
    ageMonths: 22,
    size: "medium",
    sex: "male",
    shelter: "Second chances Working Dogs",
    location: "Hoboken, NJ",
    summary: "Knows sit, stay, and spin. Does not know why you would ask.",
    description:
      "Tumbleweed arrived from a farm that could no longer keep him and he has a working-dog brain that needs a job. He learns quickly, has excellent recall, and will absolutely use that recall to run off after a squirrel if the fence is short. He would thrive with a hiking partner, an agility class, or any household that treats structure as enrichment rather than punishment.",
    traits: ["Highly trainable", "High energy", "Loves a job"],
    goodWith: ["Adults", "Dogs", "Active homes"],
    vaccinated: true,
    neutered: true,
    image: "/pets/tumbleweed.svg",
    imageAlt: "Illustration of Tumbleweed, a blue speckled cattle dog",
  },
  {
    id: "willow",
    name: "Willow",
    species: "cat",
    breed: "Ragdoll mix",
    ageMonths: 26,
    size: "medium",
    sex: "female",
    shelter: "Lantern Street Shelter",
    location: "Brooklyn, NY",
    summary: "Goofily affectionate. Will meet you at the door every time.",
    description:
      "Willow is two and has never met a person she didn't immediately like. She greets visitors, supervises cooking, and sleeps in the one spot on the couch you were saving for yourself. Ragdoll mixes tend to be large and soft and somewhat convinced they belong on your lap, which she has made clear is a standing arrangement.",
    traits: ["Very affectionate", "Dog-like", "Chatty"],
    goodWith: ["Kids", "Adults", "Other cats", "Dogs"],
    vaccinated: true,
    neutered: true,
    image: "/pets/willow.svg",
    imageAlt: "Illustration of Willow, a fluffy cream-colored ragdoll mix cat",
  },
  {
    id: "biscuit",
    name: "Biscuit",
    species: "dog",
    breed: "Corgi mix",
    ageMonths: 6,
    size: "small",
    sex: "male",
    shelter: "Second chances Working Dogs",
    location: "Hoboken, NJ",
    summary: "Six months old, four legs too short, zero awareness of this fact.",
    description:
      "Biscuit is a young, ridiculous puppy with a corgi's confidence and a herding dog's opinions. He is house-trained, crate-trained, and learning that barking at the neighbor's rooster achieves nothing. He needs a household ready for the chewed-shoe phase, the yard-to-reefing phase, and a great deal of patient repetition. In exchange you get a very funny dog who will be your shadow for a decade.",
    traits: ["Young", "Playful", "Needs training"],
    goodWith: ["Kids", "Adults", "Dogs"],
    vaccinated: true,
    neutered: false,
    image: "/pets/biscuit.svg",
    imageAlt: "Illustration of Biscuit, a short-legged orange and white puppy",
  },
  {
    id: "clover",
    name: "Clover",
    species: "rabbit",
    breed: "Mini Rex",
    ageMonths: 47,
    size: "small",
    sex: "male",
    shelter: "Second Chances Rabbit Rescue",
    location: "Queens, NY",
    summary: "Velvet coat, gentle manners, and a very specific taste for parsley.",
    description:
      "Clover is four years old and the most relaxed rabbit we have met. He has a plush Rex coat that requires surprisingly little grooming despite its density, and a temperament that tolerates children and other rabbits without any fuss. He does need unlimited hay, a proper exercise pen, and a rabbit-savvy adopter who knows that a rabbit is a ten-to-twelve-year commitment.",
    traits: ["Gentle", "Good with kids", "Hungry"],
    goodWith: ["Kids", "Adults", "Other rabbits", "Indoor only"],
    vaccinated: true,
    neutered: true,
    image: "/pets/clover.svg",
    imageAlt: "Illustration of Clover, a soft gray rex rabbit",
  },
  {
    id: "saffron",
    name: "Saffron",
    species: "bird",
    breed: "Cockatiel",
    ageMonths: 31,
    size: "small",
    sex: "male",
    shelter: "Feathered Friends Adoption",
    location: "Jersey City, NJ",
    summary: "Whistles the dishwasher. Not a word of it is useful.",
    description:
      "Saffron is a hand-tame cockatiel who steps up onto a finger willingly and will settle against your neck if you are patient. He whistles the two-note pattern of a dishwasher he heard once, in 2019, and will apparently keep doing this forever. Cockatiels are social birds with a genuine need for out-of-cage time daily, and they are a long-term commitment in a way it is easy to underestimate.",
    traits: ["Hand tame", "Whistler", "Needs daily out-of-cage time"],
    goodWith: ["Adults", "Quiet homes"],
    vaccinated: false,
    neutered: false,
    image: "/pets/saffron.svg",
    imageAlt: "Illustration of Saffron, a gray cockatiel with a yellow crest",
  },
  {
    id: "olive",
    name: "Olive",
    species: "dog",
    breed: "Greyhound",
    ageMonths: 60,
    size: "large",
    sex: "female",
    shelter: "Second chances Working Dogs",
    location: "Hoboken, NJ",
    summary: "Retired racer who runs three miles and then sleeps for nineteen hours.",
    description:
      "Olive is five, and her racing career is over. That is not sad news for her: race kennels are loud, crowded, and physically punishing, and she has the deep, long sleep of an animal who finally feels safe. She is still young enough to enjoy a walk or two but she is not an athlete anymore, and she would like a soft bed, a short walk, and no stairs if you can manage it.",
    traits: ["Quiet", "Gentle", "Low stamina"],
    goodWith: ["Kids", "Adults", "Cats", "Calm homes"],
    vaccinated: true,
    neutered: true,
    image: "/pets/olive.svg",
    imageAlt: "Illustration of Olive, a slender gray greyhound",
  },
];

const byId = new Map(pets.map((pet) => [pet.id, pet]));

export function getPet(id: string): Pet | undefined {
  return byId.get(id);
}

export function getPetIds(): string[] {
  return pets.map((pet) => pet.id);
}

export function getSpeciesLabel(species: Species): string {
  return { dog: "Dog", cat: "Cat", rabbit: "Rabbit", bird: "Bird" }[species];
}

export function getSizeLabel(size: Size): string {
  return { small: "Small", medium: "Medium", large: "Large" }[size];
}

export function formatAge(ageMonths: number): string {
  if (ageMonths < 12) return `${ageMonths} mo`;
  const years = Math.floor(ageMonths / 12);
  const months = ageMonths % 12;
  return months === 0 ? `${years} yr` : `${years} yr ${months} mo`;
}

export function getAgeBand(ageMonths: number): string {
  if (ageMonths < 12) return "Baby";
  if (ageMonths < 36) return "Young";
  if (ageMonths < 84) return "Adult";
  return "Senior";
}