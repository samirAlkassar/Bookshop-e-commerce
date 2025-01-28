//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//================{ Header content }===========================
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const navElements = [

    {
        id:3,
        text: "Home",
        classname:"fa-solid fa-house",
        link:"/",
        addIcon: false
    },
    {
      id:2,
      text: "Wishlist",
      classname:"fa-solid fa-heart",
      link:"/whishlist",
      addIcon: true
    },
    {
      id:1,
      text: "Cart",
      classname:"fa-solid fa-cart-shopping",
      link:"/cart",
      addIcon: true
    },
    {
        id:4,
        text: "Categories",
        classname:"fa-solid fa-star",
        link:"#",
        addIcon: false
    },
    {
        id:5,
        text: "Offers",
        classname:"fa-solid fa-tag",
        link:"#",
        addIcon: false
    }

]






//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//================{ Hero page content }===========================
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=





export const heroContent = {
        h1:"",
        h3:"Ezz El-deen bookshop",
        p:"Everything you need of school book, tools, toys and gifts.",
    }

export const heroLinks =[
    {
        id:"1",
        text:"01001347513",
        icon:"fa-solid fa-phone",
        url:""
    },
    {
        id:"2",
        text:"facebook",
        icon:"fa-brands fa-facebook",
        url:""
    },
    {
        id:"3",
        text:"whatsapp",
        icon:"fa-solid fa-user-group",
        url:""
    },
    {
        id:"4",
        text:"email",
        icon:"fa-solid fa-envelope",
        url:""
    }
]


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//================{ main page content }===========================
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const mainPageLinks = [
    {
        id:"1",
        title:"All",
    },
    {
        id:"2",
        title:"Books",
    },
    {
        id:"3",
        title:"School Tools",
    },
    {
        id:"4",
        title:"Toys",
    },
    {
        id:"5",
        title:"Gifts",
    },
]




export const Special_Offers = [
    {
      "id": "offer001",
      "title": "Back to School Starter Pack",
      "description": "Everything you need to kickstart the school year, including notebooks, pens, a backpack, and more!",
      "total_price": 99,
      "percentage_off": 20,
      "items_in_offer": [
        { "name": "Premium Notebook Bundle (5 Notebooks)", "original_price": 15, "discounted_price": 12 },
        { "name": "Pack of 10 Gel Pens", "original_price": 10, "discounted_price": 7.5 },
        { "name": "Durable School Backpack", "original_price": 40, "discounted_price": 30 },
        { "name": "High-Quality Geometry Set", "original_price": 20, "discounted_price": 15 },
        { "name": "Wireless Earbuds for Study Sessions", "original_price": 50, "discounted_price": 35 }
      ],
      "stock": 50,
      "image": "https://m.media-amazon.com/images/I/611CJnMpShL._AC_SL1246_.jpg",
      "valid_until": "2025-02-28",
      "category": "School Supplies",
      "pageSpan":"60%"
    },
    {
      "id": "offer002",
      "title": "College Essentials Bundle",
      "description": "Gear up for college life with this all-in-one essentials pack.",
      "total_price": 149,
      "percentage_off": 25,
      "items_in_offer": [
        { "name": "High-Performance Laptop Backpack", "original_price": 60, "discounted_price": 45 },
        { "name": "Wireless Mouse", "original_price": 20, "discounted_price": 15 },
        { "name": "Portable Charger (20,000 mAh)", "original_price": 40, "discounted_price": 30 },
        { "name": "Noise-Canceling Headphones", "original_price": 100, "discounted_price": 75 }
      ],
      "stock": 30,
      "image": "https://m.media-amazon.com/images/I/91nEyEcC4uL._AC_SX466_.jpg",
      "valid_until": "2025-03-15",
      "category": "Tech & Accessories",
      "pageSpan":"35%"
    },
    {
      "id": "offer003",
      "title": "Study Space Setup",
      "description": "Create the perfect study space with this affordable and functional bundle.",
      "total_price": 199,
      "percentage_off": 30,
      "items_in_offer": [
        { "name": "Adjustable Study Desk", "original_price": 150, "discounted_price": 105 },
        { "name": "Ergonomic Study Chair", "original_price": 120, "discounted_price": 84 },
        { "name": "LED Desk Lamp", "original_price": 30, "discounted_price": 21 }
      ],
      "stock": 20,
      "image": "https://i.pinimg.com/736x/c5/4c/f3/c54cf319fbfafe396eaa2c6877861632.jpg",
      "valid_until": "2025-02-28",
      "category": "Furniture",
      "pageSpan":"35%"
    },
    {
      "id": "offer004",
      "title": "High School Tech Pack",
      "description": "Equip high school students with the tech they need to succeed.",
      "total_price": 299,
      "percentage_off": 25,
      "items_in_offer": [
        { "name": "Tablet with Stylus", "original_price": 300, "discounted_price": 225 },
        { "name": "Wireless Keyboard and Mouse", "original_price": 40, "discounted_price": 30 },
        { "name": "Protective Tablet Case", "original_price": 20, "discounted_price": 15 }
      ],
      "stock": 25,
      "image": "https://i.pinimg.com/736x/e2/1e/27/e21e27f58e6ab29d0cf314228667bfbc.jpg",
      "valid_until": "2025-03-10",
      "category": "Technology",
      "pageSpan":"60%"
    },
    {
      "id": "offer005",
      "title": "Art Lover's Toolkit",
      "description": "Unleash your creativity with this complete art supply kit.",
      "total_price": 89,
      "percentage_off": 20,
      "items_in_offer": [
        { "name": "Acrylic Paint Set (24 Colors)", "original_price": 40, "discounted_price": 32 },
        { "name": "Canvas Boards (Set of 5)", "original_price": 20, "discounted_price": 16 },
        { "name": "Professional Paint Brushes (Set of 12)", "original_price": 25, "discounted_price": 20 },
        { "name": "Palette and Easel", "original_price": 30, "discounted_price": 21 }
      ],
      "stock": 40,
      "image": "https://m.media-amazon.com/images/I/71CuplFETnL._AC_SL1500_.jpg",
      "valid_until": "2025-02-28",
      "category": "Art Supplies",
      "pageSpan":"100%"
    }
  ]
  