import React from 'react'
import './App.css'
const cradData = [
  {
    tittle: "Realme Buds Air 5 with 50dB ANC, 12.4mm Dynamic Bass",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/p/c/n/airdoze-s40-earbuds-with-13mm-drivers-40h-playtime-rage-mode-enc-original-imah2srqqycdu36y.jpeg?q=70&crop=false",
    tagline: "Deep Sea Blue, True Wireless",
    price: "₹2,299",
    actual_price: "₹5,999",
    offer: "61% off",
    bank: "Bank offer"
  },
  
  
  {
    "tittle": "Noise ColorFit Pulse Grand Smart Watch",
    "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70",
    "tagline": "1.78\" AMOLED Display, 60 Sports Modes",
    "price": "₹3,499",
    "actual_price": "₹6,999",
    "offer": "50% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "Mi Smart Band 6",
    "image": "https://rukminim2.flixcart.com/image/312/312/kpmy8i80/smart-band-tag/z/r/o/no-regular-xmsh10hm-yes-android-ios-mi-yes-original-imag3twy9daq8rmq.jpeg?q=70",
    "tagline": "1.56 AMOLED Display, SpO2 Monitor",
    "price": "₹2,499",
    "actual_price": "₹4,999",
    "offer": "50% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/3/a/x/-original-imah5vwjcqzync4j.jpeg?q=70",
    "tagline": "Industry Leading Noise Cancellation",
    "price": "₹28,499",
    "actual_price": "₹42,749",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Noise ColorFit Pulse Grand Smart Watch",
    "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/t/x/-original-imah6s6prqw3w883.jpeg?q=70&crop=false",
    "tagline": "1.78\" AMOLED Display, 60 Sports Modes",
    "price": "₹3,499",
    "actual_price": "₹6,999",
    "offer": "50% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    "image": "https://picsum.photos/200/300?random=3",
    "tagline": "Industry Leading Noise Cancellation",
    "price": "₹28,499",
    "actual_price": "₹42,749",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Noise ColorFit Pulse Grand Smart Watch",
    "image": "https://picsum.photos/200/300?random=2",
    "tagline": "1.78\" AMOLED Display, 60 Sports Modes",
    "price": "₹3,499",
    "actual_price": "₹6,999",
    "offer": "50% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    "image": "https://picsum.photos/200/300?random=3",
    "tagline": "Industry Leading Noise Cancellation",
    "price": "₹28,499",
    "actual_price": "₹42,749",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Apple iPhone 14 Pro Max (256 GB)",
    "image": "https://picsum.photos/200/300?random=4",
    "tagline": "A16 Bionic Chip, Dynamic Island",
    "price": "₹1,29,999",
    "actual_price": "₹1,94,999",
    "offer": "33% off",
    "bank": "5% Cashback on Flipkart Axis Bank Card"
  },
  {
    "tittle": "Samsung Galaxy S23 Ultra (512 GB)",
    "image": "https://picsum.photos/200/300?random=5",
    "tagline": "200MP Camera, S Pen Support",
    "price": "₹1,49,999",
    "actual_price": "₹2,24,999",
    "offer": "33% off",
    "bank": "Extra ₹500 off on HDFC Bank Debit Cards"
  },
  {
    "tittle": "Boat Airdopes 441 ANC Earbuds",
    "image": "https://picsum.photos/200/300?random=6",
    "tagline": "40 Hours Playtime, ENC Technology",
    "price": "₹1,799",
    "actual_price": "₹3,999",
    "offer": "55% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "JBL Flip 6 Portable Bluetooth Speaker",
    "image": "https://picsum.photos/200/300?random=7",
    "tagline": "IP67 Waterproof, JBL Signature Sound",
    "price": "₹9,999",
    "actual_price": "₹14,999",
    "offer": "33% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "Canon EOS R6 Mark II Mirrorless Camera",
    "image": "https://picsum.photos/200/300?random=8",
    "tagline": "20 FPS, 4K Video Recording",
    "price": "₹1,89,999",
    "actual_price": "₹2,84,999",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "HP Pavilion Gaming Laptop (16GB RAM, 1TB SSD)",
    "image": "https://picsum.photos/200/300?random=9",
    "tagline": "NVIDIA GeForce RTX 3050, 144Hz Display",
    "price": "₹89,999",
    "actual_price": "₹1,34,999",
    "offer": "33% off",
    "bank": "5% Cashback on Flipkart Axis Bank Card"
  },
  {
    "tittle": "LG 55-inch 4K Ultra HD Smart TV",
    "image": "https://picsum.photos/200/300?random=10",
    "tagline": "Dolby Vision, AI ThinQ",
    "price": "₹54,999",
    "actual_price": "₹82,499",
    "offer": "33% off",
    "bank": "Extra ₹500 off on HDFC Bank Debit Cards"
  },
  {
    "tittle": "OnePlus Nord Buds 2",
    "image": "https://picsum.photos/200/300?random=11",
    "tagline": "Active Noise Cancellation, 30H Playtime",
    "price": "₹2,999",
    "actual_price": "₹5,999",
    "offer": "50% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "OnePlus Nord Buds 2",
    "image": "https://picsum.photos/200/300?random=11",
    "tagline": "Active Noise Cancellation, 30H Playtime",
    "price": "₹2,999",
    "actual_price": "₹5,999",
    "offer": "50% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "Apple AirPods Pro (2nd Gen)",
    "image": "https://picsum.photos/200/300?random=26",
    "tagline": "Active Noise Cancellation, Spatial Audio",
    "price": "₹24,999",
    "actual_price": "₹37,499",
    "offer": "33% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "Apple Watch Series 8",
    "image": "https://picsum.photos/200/300?random=13",
    "tagline": "ECG App, Always-On Retina Display",
    "price": "₹41,999",
    "actual_price": "₹62,999",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Samsung Galaxy Buds 2 Pro",
    "image": "https://picsum.photos/200/300?random=14",
    "tagline": "Intelligent ANC, 360 Audio",
    "price": "₹14,999",
    "actual_price": "₹22,499",
    "offer": "33% off",
    "bank": "5% Cashback on Flipkart Axis Bank Card"
  },
  {
    "tittle": "Dell XPS 13 Laptop",
    "image": "https://picsum.photos/200/300?random=15",
    "tagline": "InfinityEdge Display, 16GB RAM",
    "price": "₹1,29,999",
    "actual_price": "₹1,94,999",
    "offer": "33% off",
    "bank": "Extra ₹500 off on HDFC Bank Debit Cards"
  },
  {
    "tittle": "Sony Bravia 65-inch 4K Smart TV",
    "image": "https://picsum.photos/200/300?random=16",
    "tagline": "Dolby Atmos, Google TV",
    "price": "₹1,19,999",
    "actual_price": "₹1,79,999",
    "offer": "33% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "Boat Rockerz 550 Headphones",
    "image": "https://picsum.photos/200/300?random=17",
    "tagline": "50 Hours Playback, Soft Padded Earcups",
    "price": "₹1,499",
    "actual_price": "₹2,999",
    "offer": "50% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "LG Tone Free FN7 Earbuds",
    "image": "https://picsum.photos/200/300?random=18",
    "tagline": "UVnano Charging Case, Meridian Audio",
    "price": "₹9,999",
    "actual_price": "₹14,999",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Asus ROG Zephyrus G14 Laptop",
    "image": "https://picsum.photos/200/300?random=19",
    "tagline": "AMD Ryzen 9, RTX 3060, 16GB RAM",
    "price": "₹1,49,999",
    "actual_price": "₹2,24,999",
    "offer": "33% off",
    "bank": "5% Cashback on Flipkart Axis Bank Card"
  },
  {
    "tittle": "Sony PlayStation 5",
    "image": "https://picsum.photos/200/300?random=20",
    "tagline": "4K Gaming, 825GB SSD",
    "price": "₹54,999",
    "actual_price": "₹82,499",
    "offer": "33% off",
    "bank": "Extra ₹500 off on HDFC Bank Debit Cards"
  },
  {
    "tittle": "Xbox Series X",
    "image": "https://picsum.photos/200/300?random=21",
    "tagline": "4K Gaming, 1TB SSD",
    "price": "₹49,999",
    "actual_price": "₹74,999",
    "offer": "33% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "Nikon Z6 II Mirrorless Camera",
    "image": "https://picsum.photos/200/300?random=22",
    "tagline": "24.5MP, 4K Video, Dual Card Slots",
    "price": "₹1,79,999",
    "actual_price": "₹2,69,999",
    "offer": "33% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "GoPro Hero 11 Black",
    "image": "https://picsum.photos/200/300?random=23",
    "tagline": "5.3K Video, HyperSmooth 5.0",
    "price": "₹49,999",
    "actual_price": "₹74,999",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Amazon Echo Dot (4th Gen)",
    "image": "https://picsum.photos/200/300?random=24",
    "tagline": "Smart Speaker with Alexa",
    "price": "₹3,999",
    "actual_price": "₹5,999",
    "offer": "33% off",
    "bank": "5% Cashback on Flipkart Axis Bank Card"
  },
  {
    "tittle": "Google Nest Hub (2nd Gen)",
    "image": "https://picsum.photos/200/300?random=25",
    "tagline": "7\" Smart Display, Google Assistant",
    "price": "₹7,999",
    "actual_price": "₹11,999",
    "offer": "33% off",
    "bank": "Extra ₹500 off on HDFC Bank Debit Cards"
  },
  {
    "tittle": "Apple AirPods Pro (2nd Gen)",
    "image": "https://picsum.photos/200/300?random=26",
    "tagline": "Active Noise Cancellation, Spatial Audio",
    "price": "₹24,999",
    "actual_price": "₹37,499",
    "offer": "33% off",
    "bank": "Bank offer"
  },
  {
    "tittle": "Samsung Galaxy Watch 5",
    "image": "https://picsum.photos/200/300?random=27",
    "tagline": "Bioelectrical Impedance Analysis, Sapphire Crystal",
    "price": "₹24,999",
    "actual_price": "₹37,499",
    "offer": "33% off",
    "bank": "10% off on Axis Bank Cards"
  },
  {
    "tittle": "Fitbit Charge 5",
    "image": "https://picsum.photos/200/300?random=28",
    "tagline": "Stress Management, ECG App",
    "price": "₹14,999",
    "actual_price": "₹22,499",
    "offer": "33% off",
    "bank": "No Cost EMI on ICICI Bank Credit Cards"
  },
  {
    "tittle": "Garmin Forerunner 245",
    "image": "https://picsum.photos/200/300?random=29",
    "tagline": "GPS Running Watch, Advanced Dynamics",
    "price": "₹29,999",
    "actual_price": "₹44,999",
    "offer": "33% off",
    "bank": "5% Cashback on Flipkart Axis Bank Card"
  },


];

const Card = ({ tittle, image, tagline, price, actual_price, offer, bank }) => {
  return (
    <div className='card w-56 h-auto p-3 shadow-lg hover:shadow-xl hover:rounded-xl border-2 rounded-lg'>
      <img id='image' className='p-2 object-contain ' src={image}
        alt="airpods"
      />
      <p className='text-sm pt-4 text-wrap'>{tittle}</p>
      <p className='text-xs py-1  text-slate-500 font-medium'>{tagline}</p>
      <p className='font-medium text-sm'>{price} &nbsp; <span className='line-through text-slate-500'>{actual_price}</span> &nbsp; <span className='text-green-600'>{offer}</span></p>
      <p className='text-green-600'>{bank}</p>
      <button className='p-1 px-2 mt-2 content-center bg-green-600 text-white rounded-md'>Add to card  <i class="bi bi-cart4"></i> </button>
    </div>
  );
};

function App() {
  return (
    <>
     <nav class="bg-gray-800 shadow-xl fixed w-full ">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          
          <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
          {/* <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
          <p className='text-white font-medium text-xl'>Express Bees</p>
        </div>
        
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">      
        <div class="relative ml-3">
          <div>
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
           <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        </div>
          </div>

         
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2 hidden">
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
    </div>
  </div>
</nav>
<br/>
<br/>
<br/>

      <div className='p-2 pt-5 flex flex-wrap gap-3 justify-around '>
        {cradData.map((card, index) => (
          <Card
            key={index}
            tittle={card.tittle}
            image={card.image}
            tagline={card.tagline}
            price={card.price}
            actual_price={card.actual_price}
            offer={card.offer}
            bank={"No Bank offers"}
          />
        ))}
      </div>
    </>
  );
};

export default App