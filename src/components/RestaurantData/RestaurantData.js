import Ada_Header_image from '../../assets/Ada_Header_image.jpg';
import Ada_logo from '../../assets/Ada_logo.jpg';
import Akassa_logo from '../../assets/Akassa_logo.jpg';
import akassa_header_image from '../../assets/akassa_header_image.jpg';
import Header_image from '../../assets/Header_image.jpg'; 
import ElixirLounge from '../../assets/ElixirLounge.png';
import Vanillamoon_logo from '../../assets/Vanillamoon_logo.png';
import Vanilla_Header_image from '../../assets/Vanilla_Header_image.jpg';

import Asun from '../../assets/Asun.jpg';
import Avacado_toast from '../../assets/Avacado_toast.png';
import BEEF from '../../assets/BEEF.jpg';
import Blue_night from '../../assets/Blue_night.jpg';
import chicken from '../../assets/chicken.jpg';
import Chicken_parmigiana from '../../assets/Chicken_parmigiana.png';
import Crispy_golden_prawns from '../../assets/Crispy_golden_prawns.png';
import croaker_fish from '../../assets/croaker_fish.jpg';
import eba from '../../assets/eba.jpg';
import efo from '../../assets/efo.jpg';
import Fried_Rice from '../../assets/Fried_Rice.jpg';
import gizzard from '../../assets/gizzard.jpg';
import Grilledsausage from '../../assets/Grilledsausage.jpg';
import Jellof_rice from '../../assets/Jellof_rice.jpg';
import lobster_thermido from '../../assets/lobster_thermido.png';
import MiniChops from '../../assets/MiniChops.jpg';
import patatas_Bravas from '../../assets/patatas_Bravas.png';
import Pink_Lady from '../../assets/Pink_Lady.png';
import pomo from '../../assets/pomo.jpg';
import porriade_beans from '../../assets/porriade_beans.jpg';
import Porridage_Yam from '../../assets/Porridage_Yam.jpg';
import SpringRoll from '../../assets/SpringRoll.jpg';
import titus_fish_n_Beans from '../../assets/titus_fish_n_Beans.jpg';
import turkey from '../../assets/turkey.jpg';
import wheat_n_egusi from '../../assets/wheat_n_egusi.jpg';
import White_rice from '../../assets/White_rice.jpg';
import Vegetable_biryani from '../../assets/Vegetable_biryani.jpg';



const restaurants = [
  {
    name: 'Elixir Lounge',
    logo: ElixirLounge,
    headerImage: Header_image,
    rating: 4.5,
    cuisine: 'African, Snacks, Sweet',
    menu: [
      {
        category: 'SIDES 1',
        items: [
          { name: 'SpringRoll', price: 1800, isNew: true, image: SpringRoll },
          { name: 'Asun', price: 1000, isNew: true, image: Asun },
          { name: 'Grilledsausage', price: 3000, isNew: true, image: Grilledsausage },
        ],
      },
      // Add more categories and items if needed
    ],
    reviews: [
      {
        name: 'Sarah',
        comment: "The grilled salmon at Ocean's Bounty was absolutely divine! Perfectly cooked with a crispy skin and tender flesh. The lemon butter sauce complemented it beautifully. A solid 5/5!",
      },
      {
        name: 'Mike T.',
        comment: "I tried the spicy chicken tacos at Taco Fiesta. While the flavors were good, I found them a bit too greasy. The homemade salsa was a standout though. 3/5 stars.",
      },
      {
        name: 'Emily R.',
        comment: "The vegetarian lasagna at Mama Mia's was a delightful surprise! Packed with fresh veggies and a creamy bechamel sauce. It didn't make me miss meat at all. 4.5/5",
      },
    ],
    info: {
      address: '12 Alakija Street, Somolu Lagos 100252, Lagos State',
      openingHours: {
        Sunday: '09:00 AM - 05:00 PM',
        Monday: '09:00 AM - 05:00 PM',
        Tuesday: '09:00 AM - 05:00 PM',
        Wednesday: '09:00 AM - 05:00 PM',
        Thursday: '09:00 AM - 05:00 PM',
        Friday: '09:00 AM - 05:00 PM',
        Saturday: '09:00 AM - 05:00 PM',
      },
      otherInfo: {
        minimumAmount: '₦0.00',
        deliveryCharge: '₦0.00',
        estDeliveryTime: '0 min.',
        branchStatus: 'Closed',
      },
    },
  },
  {
    name: 'Chops By Ada',
    logo: Ada_logo,
    headerImage: Ada_Header_image,
    rating: 4.2,
    cuisine: 'Snacks',
    menu: [
      {
        category: 'PROTEIN',
        items: [
          { name: 'turkey', price: 3800, isNew: true, image: turkey },
          { name: 'titus_fish_n_Beans', price: 4000, isNew: true, image: titus_fish_n_Beans },
          { name: 'gizzard', price: 3000, isNew: true, image: gizzard },
          { name: 'Asun', price: 1000, isNew: true, image: Asun },
        ],
      },
      {
        category: 'RICE',
        items: [
          { name: 'Fried_Rice', price: 4800, isNew: true, image: Fried_Rice },
          { name: 'White_rice', price: 3500, isNew: true, image: White_rice },
        ],
      },
    ],
    reviews: [
      {
        name: 'David L.',
        comment: "I was disappointed by the steak at Prime Cut. Ordered medium-rare but it came well-done. The sides were good, but for the price, I expected better. 2/5 stars.",
      },
      {
        name: 'Aisha K.',
        comment: "The sushi platter at Sakura was a work of art! Fresh fish, perfectly seasoned rice, and creative combinations. The dragon roll was particularly impressive. 5/5!",
      },
      {
        name: 'Tom B.',
        comment: "Tried the famous burger at Patty's Place. It was good, but not mind-blowing. Juicy patty, fresh toppings, but the bun was a bit soggy. 3.5/5 stars.",
      },
    ],
    info: {
      address: '6th Avenue Festac town, Lagos State',
      openingHours: {
        Sunday: '09:00 AM - 05:00 PM',
        Monday: '09:00 AM - 05:00 PM',
        Tuesday: '09:00 AM - 05:00 PM',
        Wednesday: '09:00 AM - 05:00 PM',
        Thursday: '09:00 AM - 05:00 PM',
        Friday: '09:00 AM - 05:00 PM',
        Saturday: '09:00 AM - 05:00 PM',
      },
      otherInfo: {
        minimumAmount: '₦500.00',
        deliveryCharge: '₦200.00',
        estDeliveryTime: '30 min.',
        branchStatus: 'Open',
      },
    },
  },
  {
    name: 'Akassa Kitchen',
    logo: Akassa_logo,
    headerImage: akassa_header_image,
    rating: 3.5,
    cuisine: 'Yum Yum',
    menu: [
      {
        category: 'MENU',
        items: [
          { name: 'Porriade_beans', price: 3800, isNew: true, image: porriade_beans },
          { name: 'Fried_Rice', price: 4000, isNew: true, image: Fried_Rice },
          { name: 'Grilledsausage', price: 3000, isNew: true, image: Grilledsausage },
        ],
      },
      {
        category: 'COCKTAIL',
        items: [
          { name: 'Blue_night', price: 8000, isNew: true, image: Blue_night },
          { name: 'Pink_Lady', price: 10000, isNew: true, image: Pink_Lady },
        ],
      },
    ],
    reviews: [
      {
        name: 'Tom Brown',
        comment: "Tried the meal at Patty's Place. It was good, but not mind-blowing. Juicy patty, fresh toppings, but the bun was a bit soggy.",
      },
      {
        name: 'Lisa M.',
        comment: "The tiramisu at Dolce Vita was heavenly! Perfect balance of coffee flavor, creamy mascarpone, and cocoa. Best dessert I've had in months.",
      },
      {
        name: 'Robert W.',
        comment: "The pad thai at Thai Spice was disappointing. Noodles were overcooked and the sauce lacked depth. The spring rolls were crispy though.",
      },
    ],
    info: {
      address: 'Road 311, Festac town, Lagos State',
      openingHours: {
        Sunday: '09:00 AM - 05:00 PM',
        Monday: '09:00 AM - 05:00 PM',
        Tuesday: '09:00 AM - 05:00 PM',
        Wednesday: '09:00 AM - 05:00 PM',
        Thursday: '09:00 AM - 05:00 PM',
        Friday: '09:00 AM - 05:00 PM',
        Saturday: '09:00 AM - 05:00 PM',
      },
      otherInfo: {
        minimumAmount: '₦0.00',
        deliveryCharge: '₦0.00',
        estDeliveryTime: '0 min.',
        branchStatus: 'Closed',
      },
    },
  },
  {
    name: 'Vanilla Moon',
    logo: Vanillamoon_logo,
    headerImage: Vanilla_Header_image,
    rating: 4.5,
    cuisine: 'Intercontinental Delicacy',
    menu: [
      {
        category: 'MENU',
        items: [
          { name: 'Avacado_toast', price: 6000, isNew: true, image: Avacado_toast },
          { name: 'Chicken_parmigiana', price: 10000, isNew: true, image: Chicken_parmigiana },
          { name: 'Crispy_golden_prawns', price: 3000, isNew: true, image: Crispy_golden_prawns },
          { name: 'lobster_thermido', price: 12000, isNew: true, image: lobster_thermido },
          { name: 'patatas_Bravas', price: 10000, isNew: true, image: patatas_Bravas },
        ],
      },
    ],
    reviews: [
      {
        name: 'John Doe',
        comment: "The ramen at Oishii Ramen was delicious! The broth was rich and flavorful, and the noodles had the perfect texture. Definitely coming back for more!",
      },
      {
        name: 'Jane Smith',
        comment: "I tried the seafood paella at La Mariscada. It was bursting with flavor and the seafood was perfectly cooked. The portion size was generous too. Highly recommend!",
      },
      {
        name: 'Chris Johnson',
        comment: "The BBQ ribs at Smokehouse Grill were phenomenal! Tender, smoky, and falling off the bone. The sides were great too. Can't wait to go back!",
      },
    ],
    info: {
      address: '33A Karimu Kotun Street, Victoria Island, Lagos',
      openingHours: {
        Sunday: '11:30 AM - 10:00 PM',
        Monday: '11:30 AM - 10:00 PM',
        Tuesday: '11:30 AM - 10:00 PM',
        Wednesday: '11:30 AM - 10:00 PM',
        Thursday: '11:30 AM - 10:00 PM',
        Friday: '11:30 AM - 10:00 PM',
        Saturday: '11:30 AM - 10:00 PM',
      },
      otherInfo: {
        minimumAmount: '₦2000.00',
        deliveryCharge: '₦300.00',
        estDeliveryTime: '45 min.',
        branchStatus: 'Open',
      },
    },
  },
];

export default restaurants;

