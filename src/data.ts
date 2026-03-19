const ORDER_URL = "https://knockit.in/order/knockit-east-of-kailash-delhi";
const IMG_BASE = `${import.meta.env.BASE_URL}food_item_images`;

// ──────────────────────────────────────────────
// MENU ITEMS — Add, remove, or reorder entries here.
// Each item needs: name, image filename, and section_slug.
// ──────────────────────────────────────────────
export const CATEGORIES = [
  { name: 'Chicken Tikki Burger', image: `${IMG_BASE}/burger.jpeg`,               slug: 'burger' },
  { name: 'Paneer Wrap',          image: `${IMG_BASE}/wrap.jpeg`,                  slug: 'wrap' },
  { name: 'Classic Sandwich',     image: `${IMG_BASE}/Sandwich.jpeg`,              slug: 'sandwiches' },
  { name: 'Hakka Noodles',        image: `${IMG_BASE}/noddles.jpeg`,               slug: 'noodle-fried-rice' },
  { name: 'Crispy Snacks',        image: `${IMG_BASE}/snacks.jpeg`,                slug: 'snacks' },
  { name: 'Chilli Manchurian',    image: `${IMG_BASE}/chilli-and-manchurian.jpeg`,  slug: 'chaat' },
  { name: 'White Sauce Pasta',    image: `${IMG_BASE}/pasta.jpeg`,                 slug: 'pasta' },
  { name: 'Chocolate Milkshake',  image: `${IMG_BASE}/milshakes.jpeg`,             slug: 'milkshakes' },
  { name: 'Fresh Mocktails',      image: `${IMG_BASE}/mocktails.jpeg`,             slug: 'mocktails' },
  { name: 'Thandai',              image: `${IMG_BASE}/thandai.jpeg`,               slug: 'kalls' },
  { name: 'Winter Special',       image: `${IMG_BASE}/winter-special.jpeg`,        slug: 'value-meals' },
  { name: 'Spring Rolls',         image: `${IMG_BASE}/snacks(1).jpeg`,             slug: 'spring-roll' },
  { name: 'Breakfast Sandwich',   image: `${IMG_BASE}/Sandwich(1).jpeg`,           slug: 'all-day-breakfast' },
].map(item => ({
  ...item,
  href: `${ORDER_URL}?section_slug=${item.slug}`,
}));

// ──────────────────────────────────────────────
// LINKS
// ──────────────────────────────────────────────
export const ANDROID_LINK = "https://play.google.com/store/apps/details?id=com.app.uengage.knockit";
export const IOS_LINK = "https://apps.apple.com/us/app/knockit/id6757302462";
export const LOGO_URL = "https://cdn.uengage.io/brand_logo/logo-66841-1766483116.png";
export const ORDER_URL_FULL = ORDER_URL;

// ──────────────────────────────────────────────
// HIGHLIGHTS — Add, remove, or reorder sections.
// ──────────────────────────────────────────────
export const HIGHLIGHTS = [
  {
    title: 'Health & Hygiene',
    image: `${IMG_BASE}/burger.jpeg`,
    points: [
      'High-quality ingredients for great taste and nutrition.',
      'Balanced, delicious meals for all kinds of dietary needs.',
      'Prepared in hygienic kitchens with strict safety standards.',
    ],
  },
  {
    title: 'Sustainability',
    image: `${IMG_BASE}/pasta.jpeg`,
    points: [
      'Eco-friendly, recyclable packaging.',
      'Responsibly sourced, transparent ingredients.',
      'Reduced carbon footprint with green practices.',
    ],
  },
  {
    title: 'Speed',
    image: `${IMG_BASE}/wrap.jpeg`,
    points: [
      'Food and beverages delivered at your doorstep.',
      'Live order tracking for real-time updates.',
      'Quick prep, seamless delivery every time.',
    ],
  },
];