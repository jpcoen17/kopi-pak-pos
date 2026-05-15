export const menuCategories = [
  {
    id: 'coffee',
    label: 'Coffee Based',
    icon: '☕',
    items: [
      // Classic
      { name: 'Espresso', price: 18000, desc: 'Single / Double shot', tag: 'Classic', badge: null },
      { name: 'Americano', price: 23000, desc: 'Espresso + hot water, bold & clean', tag: 'Classic', badge: null },
      { name: 'Piccolo', price: 25000, desc: 'Ristretto with steamed milk', tag: 'Classic', badge: null },
      { name: 'Cappuccino', price: 28000, desc: 'Espresso + steamed milk foam', tag: 'Classic', badge: null },
      { name: 'Latte', price: 28000, desc: 'Espresso + creamy steamed milk', tag: 'Classic', badge: 'Favorit' },
      { name: 'Flat White', price: 30000, desc: 'Double ristretto + microfoam', tag: 'Classic', badge: null },
      { name: 'Affogato', price: 32000, desc: 'Espresso poured over vanilla ice cream', tag: 'Classic', badge: null },
      // Fusion
      { name: 'Butter Scotch Latte', price: 32000, desc: 'Butterscotch + espresso + milk', tag: 'Fusion', badge: null },
      { name: 'Hazelnut Latte', price: 32000, desc: 'Hazelnut syrup + espresso + milk', tag: 'Fusion', badge: null },
      { name: 'Caramel Latte', price: 32000, desc: 'Caramel drizzle + espresso + milk', tag: 'Fusion', badge: 'Populer' },
      { name: 'Vanilla Latte', price: 32000, desc: 'Vanilla bean + espresso + milk', tag: 'Fusion', badge: null },
      { name: 'Rum Latte', price: 32000, desc: 'Rum essence + espresso + milk', tag: 'Fusion', badge: null },
      { name: 'Popcorn Latte', price: 32000, desc: 'Popcorn syrup + espresso + milk', tag: 'Fusion', badge: 'Unik' },
      // Manual Brew
      { name: 'V60 / Japanese', price: 28000, desc: 'Pour over, light & fruity notes', tag: 'Manual Brew', badge: null },
      { name: 'Vietnam Drip', price: 28000, desc: 'Slow drip, rich & bold', tag: 'Manual Brew', badge: null },
      { name: 'Tubruk', price: 25000, desc: 'Traditional Indonesian coffee', tag: 'Manual Brew', badge: 'Heritage' },
    ]
  },
  {
    id: 'signature',
    label: 'Signature Pakpos',
    icon: '✦',
    items: [
      { name: 'Caramel Huis', price: 35000, desc: 'Cranberry Juice + Lemon + Caramel + Honey + Creamy Milk', tag: 'Signature', badge: 'Best Seller' },
      { name: 'Cinnamon Java Breeze', price: 33000, desc: 'Palm Sugar + Rumbollion Flavour Mint + Cinnamon + Lemon Slice + Sparkling Water', tag: 'Signature', badge: null },
      { name: 'Summertime', price: 33000, desc: 'Cold Brew + Cranberry + Lemon + Orange Juice + Honey', tag: 'Signature', badge: 'Segar' },
      { name: 'Sourberry Sweetheart', price: 35000, desc: 'Strawberry Jam + Strawberry + Lemon + Honey + Sparkling Water', tag: 'Signature', badge: null },
      { name: 'Carribian', price: 33000, desc: 'Rumbollion + Cranberry + Orange + Lemon + Honey + Sparkling Water', tag: 'Signature', badge: null },
      { name: 'Bloody Mary', price: 33000, desc: 'Cold Brew + Lemon Juice + Honey + Strawberry Syrup', tag: 'Signature', badge: null },
      { name: 'Americano Lemon', price: 32000, desc: 'Double Ristretto + Lemon Juice + Flavour Lemon', tag: 'Signature', badge: null },
    ]
  },
  {
    id: 'traditional',
    label: 'Traditional & Heritage',
    icon: '🌿',
    items: [
      { name: 'Strawberry Juice', price: 33000, desc: 'Fresh strawberry blended juice', tag: 'Jus Buah', badge: null },
      { name: 'Manggo Juice', price: 35000, desc: 'Fresh mango blended juice', tag: 'Jus Buah', badge: null },
      { name: 'Cucumber Juice', price: 30000, desc: 'Refreshing cucumber juice', tag: 'Jus Buah', badge: null },
      { name: 'Mixberry Juice', price: 35000, desc: 'Blueberry + Raspberry + Mulberry + Strawberry', tag: 'Jus Buah', badge: null },
      { name: 'Wedang Uwuh', price: 30000, desc: 'Secang, Bayleaf Salam, Ginger, Lemon Grass', tag: 'Herbal', badge: 'Heritage' },
      { name: 'Susu Jahe', price: 30000, desc: 'Condensed Milk + Ginger Powder + Ginger + Lemon Grass', tag: 'Herbal', badge: 'Hangat' },
      { name: 'Jahe Lemon', price: 30000, desc: 'Ginger, Lemon Slice, Lemon Grass', tag: 'Herbal', badge: null },
    ]
  },
  {
    id: 'maincourse',
    label: 'Main Course',
    icon: '🍽',
    items: [
      { name: 'Nasi Goreng Kecombrang', price: 38000, desc: 'Fried rice with kecombrang flower', tag: 'Nasi Goreng', badge: 'Spesial' },
      { name: 'Nasi Goreng Seafood', price: 38000, desc: 'Fried rice with mixed seafood', tag: 'Nasi Goreng', badge: null },
      { name: 'Nasi Goreng Ayam', price: 35000, desc: 'Classic chicken fried rice', tag: 'Nasi Goreng', badge: null },
      { name: 'Kwetiau Goreng', price: 35000, desc: 'Stir-fried flat rice noodles', tag: 'Mie', badge: null },
      { name: 'Mie Goreng', price: 35000, desc: 'Indonesian style fried noodles', tag: 'Mie', badge: null },
      { name: 'Mie Gordog', price: 36000, desc: 'Special fried noodle Pakpos style', tag: 'Mie', badge: 'Rekomendasi' },
      { name: 'Aglio Olio', price: 35000, desc: 'Garlic & olive oil spaghetti', tag: 'Pasta', badge: null },
      { name: 'Bolognese', price: 35000, desc: 'Classic meat sauce pasta', tag: 'Pasta', badge: null },
      { name: 'Carbonara', price: 35000, desc: 'Creamy egg & cheese pasta', tag: 'Pasta', badge: null },
      { name: 'Rice Bowl Ayam', price: 35000, desc: 'Black pepper chicken rice bowl', tag: 'Rice Bowl', badge: null },
      { name: 'Rice Bowl Sapi', price: 42000, desc: 'Teriyaki beef rice bowl', tag: 'Rice Bowl', badge: 'Premium' },
      { name: 'Rice Bowl Dori', price: 38000, desc: 'Sambal matah dory fish rice bowl', tag: 'Rice Bowl', badge: null },
    ]
  },
  {
    id: 'snack',
    label: 'Snack & Pastry',
    icon: '🥐',
    items: [
      { name: 'Bitterballen', price: 35000, desc: 'Dutch-style crispy fried snack balls', tag: 'Snack', badge: 'Favorit' },
      { name: 'Paket Pakpos', price: 37000, desc: 'Kantong Goreng + Sosis + Lumpia + Onion Rings', tag: 'Snack', badge: 'Hemat' },
      { name: 'Pisang Goreng', price: 25000, desc: 'Crispy fried banana', tag: 'Snack', badge: null },
      { name: 'Kentang Goreng', price: 25000, desc: 'Fries with choice of original, cheese, or truffle sauce', tag: 'Snack', badge: null },
      { name: 'Nachos', price: 27000, desc: 'With bolognese or cheese sauce', tag: 'Snack', badge: null },
      { name: 'Lumpia', price: 25000, desc: 'Indonesian crispy spring roll', tag: 'Snack', badge: null },
      { name: 'Choco Dust Toast', price: 35000, desc: 'Toast with premium chocolate dust', tag: 'Toast', badge: null },
      { name: 'Peanutty Toast', price: 35000, desc: 'Peanut butter drizzle toast', tag: 'Toast', badge: null },
      { name: 'Strawberry Delight Toast', price: 35000, desc: 'Fresh strawberry compote toast', tag: 'Toast', badge: null },
      { name: 'Tiramisu Toast', price: 35000, desc: 'Tiramisu cream toast', tag: 'Toast', badge: 'Baru' },
      { name: 'Cheesecake', price: 35000, desc: 'Blueberry, Biscoff, or Burn Cheesecake', tag: 'Pastry', badge: null },
      { name: 'Croissant', price: 35000, desc: 'Almond, chocolate, or cheese', tag: 'Pastry', badge: null },
      { name: 'Cinnamon Roll', price: 35000, desc: 'Warm classic cinnamon roll', tag: 'Pastry', badge: null },
      { name: 'Cromboloni', price: 35000, desc: 'Tiramisu, chocolate, green tea, or hazelnut', tag: 'Pastry', badge: 'Trending' },
    ]
  },
  {
    id: 'poffertjes',
    label: 'Poffertjes',
    icon: '🫔',
    items: [
      { name: 'Poffertjes Original', price: 33000, desc: 'Traditional Dutch mini pancakes, light & fluffy', tag: 'Poffertjes', badge: null },
      { name: 'Poffertjes Caramel', price: 33000, desc: 'Dutch mini pancakes with caramel sauce', tag: 'Poffertjes', badge: null },
      { name: 'Poffertjes Chocolate', price: 33000, desc: 'Dutch mini pancakes with chocolate drizzle', tag: 'Poffertjes', badge: null },
      { name: 'Poffertjes Matcha', price: 33000, desc: 'Dutch mini pancakes with premium matcha', tag: 'Poffertjes', badge: 'Populer' },
    ]
  },
]

export const branches = [
  {
    id: 1,
    name: 'Kopi Pakpos Nol Km',
    address: 'Jl. Panembahan Senopati No.2',
    city: 'Yogyakarta',
    hours: '07:00 – 01:00',
    phone: '+62 812-0000-0001',
    mapUrl: 'https://maps.google.com/?q=KOPI+PAKPOS+NOL+KM+Jl.+Panembahan+Senopati+Yogyakarta',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5!2d110.3652848!3d-7.801429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDgnMDUuMSJTIDExMMKwMjEnNTUuMCJF!5e0!3m2!1sen!2sid!4v1700000000000',
    tag: 'Flagship',
    desc: 'Berlokasi di jantung kota Jogja, dekat Kraton Yogyakarta. Buka hingga dini hari, tempat favorit nongkrong malam Jogja.',
  },
  {
    id: 2,
    name: 'Kopi Pakpos Toegoe',
    address: 'Jl. Jend. Sudirman No.19',
    city: 'Yogyakarta',
    hours: '09:00 – 00:00',
    phone: '+62 812-0000-0002',
    mapUrl: 'https://maps.google.com/?q=KOPI+PAKPOS+TOEGOE+Jl.+Sudirman+Yogyakarta',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1!2d110.3700!3d-7.7900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDcnMjQuMCJTIDExMMKwMjInMTIuMCJF!5e0!3m2!1sen!2sid!4v1700000000001',
    tag: 'Cabang',
    desc: 'Berlokasi strategis di kawasan Tugu Yogyakarta. Suasana elegan dengan view ikonik kota.',
  },
]

export const testimonials = [
  { name: 'Dara M.', role: 'Food Blogger Jogja', rating: 5, text: 'Kopi Pakpos tuh beneran hidden gem Jogja! Konsepnya heritage banget, apalagi Wedang Uwuh-nya... hangat dan otentik. Wajib balik lagi.' },
  { name: 'Rizky A.', role: 'Photographer', rating: 5, text: 'Malam hari di Pakpos itu magis. Atmosfer vintage Jogja, kopi enak, dan buka sampe jam 1. Ini tempat favorit gue buat nongkrong.' },
  { name: 'Putri S.', role: 'Mahasiswa UGM', rating: 5, text: 'Poffertjes-nya juara! Matcha poffertjes sama Caramel Huis jadi combo sempurna. Harganya juga masuk akal buat kantong mahasiswa.' },
  { name: 'Bimo H.', role: 'Arsitek', rating: 5, text: 'Interior Pakpos vibes-nya Jogja banget — kayu, vintage, hangat. Seneng banget bisa nugas atau meeting di sini, WiFi kenceng pula.' },
  { name: 'Layla K.', role: 'Content Creator', rating: 5, text: 'Setiap sudut Pakpos instagramable. Kopi signature Caramel Huis-nya photogenic sekaligus enak. Perfect buat konten!' },
  { name: 'Fajar W.', role: 'Software Engineer', rating: 5, text: 'Butuh tempat coding malam? Pakpos jawabannya. Buka sampai jam 1, kopi mantap, dan suasananya bikin produktif.' },
]
