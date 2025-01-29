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
  




export const Comments_list = [
    {
        "userName": "Samir Elkassar",
        "email": "samir.alkcar@gmail.com",
        "comment": "this item is very good i highly recommend it, it is as described and comes in super good quality, been using it for the best week and haven't faced any issues with it just yet, would just say it gets really hot after long periods but i guess that's a problem with most devices, highly recommend it if you think about buying it.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/6a/65/0a/6a650a727b258752c02a8df6222ac52c.jpg"
    },
    {
        "userName": "John Doe",
        "email": "john.doe@example.com",
        "comment": "Excellent product! Works great and easy to use. It could be a little more durable, but overall satisfied.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/c5/73/8e/c5738e72245084779201b2e31454c6c4.jpg"
    },
    {
        "userName": "Alice Smith",
        "email": "alice.smith@example.com",
        "comment": "The product is good, but I wish it had better features for the price. It gets the job done though.",
        "verified_purchase": false,
        "profile_pic": "https://i.pinimg.com/736x/df/3a/c1/df3ac121a29f56c20fea5d5711e11dbb.jpg"
    },
    {
        "userName": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "comment": "Perfect for everyday use. I use it daily and haven't had any issues. Highly recommend!",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/42/ff/5d/42ff5dc2753cc0c440f8734d3b7644e5.jpg"
    },
    {
        "userName": "Emma Wilson",
        "email": "emma.wilson@example.com",
        "comment": "It's an okay product, but I was expecting a bit more. It works fine for now, but there could be improvements.",
        "verified_purchase": false,
        "profile_pic": undefined
    },
    {
        "userName": "Chris Martin",
        "email": "chris.martin@example.com",
        "comment": "This is an amazing product! Totally worth the price. Will definitely buy again!",
        "verified_purchase": true,
        "profile_pic": undefined
    },
    {
        "userName": "Sophia Brown",
        "email": "sophia.brown@example.com",
        "comment": "Good value for money, but it could be more durable. Still happy with my purchase overall.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/2a/0b/22/2a0b2216788c4e596c594d27dfae3139.jpg"
    },
    {
        "userName": "James Davis",
        "email": "james.davis@example.com",
        "comment": "Not impressed with the product. It did not work as expected, and I had issues from the start.",
        "verified_purchase": false,
        "profile_pic": "https://i.pinimg.com/736x/55/80/5e/55805e4aa3c42e91d39d1e1fd2013e60.jpg"
    },
    {
        "userName": "Isabella Harris",
        "email": "isabella.harris@example.com",
        "comment": "Amazing quality! I use it every day, and it works like a charm. Very happy with my purchase.",
        "verified_purchase": true,
        "profile_pic": undefined
    },
    {
        "userName": "Ethan White",
        "email": "ethan.white@example.com",
        "comment": "I had high expectations, but the product didn't live up to the hype. It's decent, but not exceptional.",
        "verified_purchase": false,
        "profile_pic": "https://i.pinimg.com/736x/bd/c1/50/bdc15000ada45164f3975acca59c8559.jpg"
    },
    {
        "userName": "Amelia Clark",
        "email": "amelia.clark@example.com",
        "comment": "Great value for the price! Works well, no complaints so far. I would buy it again.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/ac/09/e9/ac09e91aee0b430542612d9153a434fc.jpg"
    },
    {
        "userName": "Liam Taylor",
        "email": "liam.taylor@example.com",
        "comment": "Good product, but could use some improvements. I would recommend it with some reservations.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/8e/d9/7d/8ed97d56198f486044d3b2e8ff87ab6d.jpg"
    },
    {
        "userName": "Charlotte Lewis",
        "email": "charlotte.lewis@example.com",
        "comment": "I really like it! It works well for my needs, though it could be improved in some areas.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/cf/6e/c4/cf6ec445df41899479978aa16f05c996.jpg"
    },
    {
        "userName": "Benjamin Young",
        "email": "benjamin.young@example.com",
        "comment": "Not great. The product has some issues that need to be addressed. I would not recommend it.",
        "verified_purchase": false,
        "profile_pic": "https://i.pinimg.com/736x/f7/6c/c5/f76cc594ef8b20314e2eeb595374b926.jpg"
    },
    {
        "userName": "Mason Allen",
        "email": "mason.allen@example.com",
        "comment": "This is a solid product, does what it says. Would buy again.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/34/7a/15/347a15a10ed75222022f2b3fad5f4dc3.jpg"
    },
    {
        "userName": "Harper Scott",
        "email": "harper.scott@example.com",
        "comment": "Really good product! Very impressed with its functionality and ease of use. Highly recommend!",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/e9/56/49/e95649cf83a8928b394352373647e2de.jpg"
    },
    {
        "userName": "Alexander King",
        "email": "alexander.king@example.com",
        "comment": "Good for the most part, but I found it lacking in certain features. Still, it does the job.",
        "verified_purchase": false,
        "profile_pic": undefined
    },
    {
        "userName": "Madison Perez",
        "email": "madison.perez@example.com",
        "comment": "I absolutely love it! Best purchase I've made in a while.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/43/71/0f/43710f32c6fc09258dc246870064ace3.jpg"
    },
    {
        "userName": "Jack Moore",
        "email": "jack.moore@example.com",
        "comment": "It works well but gets really hot after some time. It's a minor issue though.",
        "verified_purchase": true,
        "profile_pic": "https://i.pinimg.com/736x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg"
    },
    {
        "userName": "Victoria Lee",
        "email": "victoria.lee@example.com",
        "comment": "I had to return this because it was not what I expected. Would not recommend it.",
        "verified_purchase": false,
        "profile_pic":undefined 
    }
]
