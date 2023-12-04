const zodiac_signs_and_symbols = [
    {sign: "Aquarius", symbol: "water-bearer"},
    {sign: "Capricorn", symbol: "sea-goat"},
    {sign: "Leo", symbol: "lion"},
    {sign: "Taurus", symbol: "bull"},
    {sign: "Pisces", symbol: "two-fishes"},
    {sign: "Libra", symbol: "scale/panda"},
    {sign: "Cancer", symbol: "crab"},
    {sign: "Aries", symbol: "ram"},
    {sign: "Gemini", symbol: "twin-dolphins"},
    {sign: "Scorpio", symbol: "scorpion"},
    {sign: "Sagittarius", symbol: "centaur"},
    {sign: "Virgo", symbol: "fox"},
]

const personality_traits = [
    "bold and ambitious", 
    "like you're no stranger to competition",
    "relaxed", 
    "spontaneous and playful", 
    "curious", 
    "highly intuitive", 
    "emotionally protective", 
    "passionate and loyal", 
    "dramatic", 
    "logical and practical", 
    "diligent", 
    "elusive and mysterious", 
    "misunderstood", 
    "complicated but courageous", 
    "wise", 
    "timely",
    "empathetic and sensitive", 
    "tense", 
    "diplomatic", 
]

const zodiac_dos = [
    "avoid coffee",
    "take that long bath", 
    "write in your journal", 
    "take a walk in a garden", 
    "avoid perfection",
    "get that massage", 
    "pet a cat", 
    "do some computing",
    "bubbles", 
    "Dive bar", 
    "volume up", 
    "napkins", 
    "aimless stroll", 
    "patterned shirt", 
    "calendaring", 
]

const generate_idx = (array) => {
    return Math.floor(Math.random() * array.length);
}
const generate_astrology = () => {
    let sign = zodiac_signs_and_symbols[generate_idx(zodiac_signs_and_symbols)];
    // console.log(sign['sign']);  
    // OR: 
    // console.log(sign.sign);
    let trait = personality_traits[generate_idx(personality_traits)];
    // console.log(sign);
    let recommendation = zodiac_dos[generate_idx(zodiac_dos)];

    return `Your sign is ${sign.sign} and your symbol is ${sign.symbol} and this week you're feeling ${trait} and today you should ${recommendation}.`;
}
// Debugging:
console.log(generate_astrology());
