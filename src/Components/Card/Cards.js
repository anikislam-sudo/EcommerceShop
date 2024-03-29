import React, { useEffect, useState } from 'react';
import CardDetail from '../CardDetails/CardDetail';

const Cards = () => {
  const cards=[
    {
        "_id": "01",
        "name": "Inalsa Air Fryer Fry-Light-1400W",
        "picture": "https://drive.google.com/uc?export=view&id=1CICIzNM7lx7SlwwdMfq8FJMhau6RN7ma",
        "price": "4,627.00",
        "discount": 40
    },
    {
        "_id": "02",
        "name": "Oneplus Bullets Z2 Bluetooth Wireless",
        "picture": "https://drive.google.com/uc?export=view&id=1CuhprKitoV9rUDvmIDDQ4PCr7eLiiZUt",
        "price": "1,699.00",
        "discount": 26
    },
    {
        "_id": "03",
        "name": "New Fastrack Reflex Play|AMOLED Display",
        "picture": "https://drive.google.com/uc?export=view&id=1tbKEQdoPpoMEWysFQUSeg3ZxzachVkNH",
        "price": "5,699.00",
        "discount": 23
    },
    {
        "_id": "04",
        "name": "Apple iPhone 13 (128GB) - Green",
        "picture": "https://drive.google.com/uc?export=view&id=1YSQY7RSFCor3YhfUH1tBjl4dLjebFYE8",
        "price": "66,900.00",
        "discount": 16
    },
    {
        "_id": "05",
        "name": "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
        "picture": "https://drive.google.com/uc?export=view&id=17QZBPPTVjApP1VyfP6ySTjqkUfmxO-bH",
        "price": "74,998.00",
        "discount": 13
    },
    {
        "_id": "06",
        "name": "Kodak Mini Shot 3 Retro - Yellow, Bluetooth",
        "picture": "https://drive.google.com/uc?export=view&id=1AdEmhVm8W6mZRc9mzC9PLyqAAxk54yWy",
        "price": "74,998.00",
        "discount": 13
    },
    {
        "_id": "07",
        "name": "ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse",
        "picture": "https://drive.google.com/uc?export=view&id=1HhgU8ogBOZklbJgED6JDiDaT6tCEQZgU",
        "price": "1,599.00",
        "discount": 40
    },
    {
        "_id": "08",
        "name": "Zebronics Zeb-Transformer-k USB Gaming Keyboard | RGB LED lighting",
        "picture": "https://drive.google.com/uc?export=view&id=1ZTSMVZ7SyoBKY_gqigsCaXO3FzpYQ7Ge",
        "price": "999.00",
        "discount": 36
    },
    {
        "_id": "09",
        "name": "TP-Link Powered USB Hub with 7 Data Smart Charging hub",
        "picture": "https://drive.google.com/uc?export=view&id=1CkPmlqY3SB8sZfCFGkwIK1fZwbx34UFQ",
        "price": "1,999.00",
        "discount": 36
    },
    {
        "_id": "10",
        "name": "Scarters Mouse Pad, Deskmat Extended for Work from Home/Office/Gaming",
        "picture": "https://drive.google.com/uc?export=view&id=1l5st44gfQqdsNjZs84n5qOXoxDwhS13H",
        "price": "1,599.00",
        "discount": 30
    },
    {
        "_id": "11",
        "name": "HyperX Streamer Starter Pack (HBNDL0001), Black",
        "picture": "https://drive.google.com/uc?export=view&id=1oLlcf8MT7YrIVOtXmAvGIoFaW1CLSABE",
        "price": "11,599.00",
        "discount": 26
    },
    {
        "_id": "12",
        "name": "UHUD CRAFTS Beautiful Antique Wooden Fold-able Side Table",
        "picture": "https://drive.google.com/uc?export=view&id=1mYYBivb3sVWKu-MHIV1QcpZmR0dvjBpU",
        "price": "599.00",
        "discount": 40
    },
    {
        "_id": "13",
        "name": "STAR WORK C Shaped End Table, Slim Couch Side Tables Slide Under Sofa Bed",
        "picture": "https://drive.google.com/uc?export=view&id=1jaSY7iMG0kvCHtC0K8khsYhCU1m5_8vb",
        "price": "1,599.00",
        "discount": 40
    },
    {
        "_id": "14",
        "name": "Furniture Kart wrought iron Single Seater Swing Chair with Stand",
        "picture": "https://drive.google.com/uc?export=view&id=1gFRYGEOzAeAY-gmMace1JFR1FREcSnKa",
        "price": "9,499.00",
        "discount": 36
    },
    {
        "_id": "15",
        "name": "Lukzer Engineered Wood Coffee Center Tea Table 3 Tier Rack Sofa Side Table",
        "picture": "https://drive.google.com/uc?export=view&id=11Eaytwy1xQ0Awu_IdRrBr7_VGHMdYFc6",
        "price": "2,599.00",
        "discount": 30
    },
    {
        "_id": "16",
        "name": "Kusum Handicrafts Wooden 6 Seater Sofa Set for Living Room | 3+2+1 Seater Sofa",
        "picture": "https://drive.google.com/uc?export=view&id=1hhRY7kETN9a7sGSh7Gdkwn36G7b3wi6v",
        "price": "31,599.00",
        "discount": 26
    }
]
    return (
        <div>
            <p className='text-3xl mt-2'>Top Deals</p>
        
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                
              {
      cards.slice(0,6).map(Card=><CardDetail
      key={Card._id}
      Card={Card}
      ></CardDetail>)
     } 
        </div>
        </div> 
        
    );
};

export default Cards;