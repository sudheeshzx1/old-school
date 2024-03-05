import express from "express";
import cors from "cors";

const app =express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const data = [
  //hand bag
  {
    id: 1,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/D/V/1704901517_M2821SNIO_M900_E03_ZH.jpg",
    price: "300",
    name: "Homestop",
    catagories: "Natural Jute Lunch Bag",
  },
  {
    id: 2,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/Y/S/1701452517_M1325OWHP_M900_E01_GHC.jpg?imwidth=1920 ",
    price: "300",
    name: "Homestop",
    catagories: "Natural Jute Lunch Bag",
  },
  {
    id: 3,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/Q/X/1690379120_M2820OSHJ_M900_E03_GHC.jpg?imwidth=1920",
    price: "300",
    name: "Homestop",
    catagories: "Natural Jute Lunch Bag",
  },
  {
    id: 4,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/a/U/1706107514_M2821OTKV_M911_E01_GHC.jpg?imwidth=1920",
    price: "450",
    name: "Hand Bag",
    catagories: "WavBeach Tote Bag",
  },
  {
    id: 5,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/3/d/1706525117_M0531ODHM_M82E_E01_GHC.jpg?imwidth=1920",
    price: "1030",
    name: "Hand Bag",
    catagories: "Mughal Motif Side Tote Bag",
  },
  {
    id: 6,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/d/d/1705585529_M1151OTRL_M900_E03_GHC.jpg?imwidth=1920",
    price: "567",
    name: "Hand Bag",
    catagories: "GeoOptics Tote Bag",
  },
  {
    id: 7,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/5/a/1705427220_M3352UBHM_M030_E01_GHC.jpg?imwidth=1920",
    price: "2,999",
    name: "Hand bag",
    catagories: "Pink & White Houndstooth Cosmic Tote ",
  },
  {
    id: 8,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/9/u/1686224720_M9203UTZQ_M928_E01_GHC.jpg?imwidth=1920",
    price: "1200",
    name: "Sholder Bag",
    catagories: "LINO PERROS VOYAGE SATCHEL",
  },
  {
    id: 9,
    img: "https://www.dior.com/couture/ecommerce/media/catalog/product/W/I/1705333519_M1286ZECQ_M918_E01_GHC.jpg?imwidth=1920",
    price: "2300",
    name: "Sholder Bag",
    catagories: "Voyage Satchel",
  },

  //watch

  {
    id: 10,
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T101.917.22.116.00_R_1.png?im=Resize=(1200,1200)",
    price: "62000",
    name: "TISSOT PR 100 SPORT CHIC CHRONOGRAPH",
  },
  {
    id: 11,
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T137.207.11.351.00_R_1.png?im=Resize=(1200,1200)",
    price: "66000",
    name: "TISSOT PRX POWERMATIC 80 35MM",
  },
  {
    id: 12,
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T112.210.22.113.01_R.png?im=Resize=(1200,1200)",
    price: "45000",
    name: "TISSOT T-WAVE",
  },
  {
    id: 13,
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T150.210.26.111.00_R_2.png?im=Resize=(1200,1200)",
    price: "70000",
    name: "TISSOT PR 100 34MM",
  },
  {
    id: 14,
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T137.210.11.041.00_R_1.png?im=Resize=(1200,1200)",
    price: "55000",
    name: "TISSOT PRX 35MM",
  },
  {
    id: 15,
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T143.210.11.011.00_R_1.png?im=Resize=(1200,1200)",
    price: "62000",
    name: "TISSOT EVERYTIME 34MM",
  },
  

  //shoes

  {
    id: 16,
    img: "https://cushionaire.com/cdn/shop/files/LOOP-BEIGE-2.jpg?v=1702369672&width=1000",
    price: "4999",
    name: "Loop Woven Platform Sneaker",
  },
  {
    id: 17,
    img: "https://cushionaire.com/cdn/shop/products/SCORE-WHITE_TAN-SIDE-2.jpg?v=1697139897&width=1000",
    price: "5990",
    name: "Score Lace-up Sneaker",
  },
  {
    id: 18,
    img: "https://cushionaire.com/cdn/shop/files/APOLO-T-TAUPE-1.jpg?v=1694720404&width=1000",
    price: "6790",
    name: "Apolo Knit Sneaker",
  },
  {
    id: 19,
    img: "https://cushionaire.com/cdn/shop/files/KICKS-NAVY-2.jpg?v=1702319599&width=1000",
    price: "6000",
    name: "Kicks Nylon Sneaker Dark Tones",
  },
  {
    id: 20,
    img: "https://cushionaire.com/cdn/shop/files/STRIKE-WHITE_TAN-2.jpg?v=1698435536&width=1000",
    price: "3700",
    name: "ZoomStrike Chunky Sneaker",
  },
  {
    id: 21,
    img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max-new/1000013108670-Beige-BEIGE-1000013108670_01-2100.jpg",
    name: "Women Colourblocked Sneakers",
    price: "1999",
  },
  {
    id: 22,
    img: "https://assets.ajio.com/medias/sys_master/root/20230606/4FAW/647f54e342f9e729d7297709/-473Wx593H-469420339-white-MODEL3.jpg",
    name: "Women Bobs Skipper - Woof Casual Shoes",
    price: "450",
  },
  {
    id: 23,
    img: "https://assets.ajio.com/medias/sys_master/root/20231130/R3Gl/6568a394afa4cf41f5ab6639/-473Wx593H-469551393-white-MODEL.jpg",
    name: "Women Air Max Excee Lace-Up Sneakers",
    price: "5000",
  },
  {
    id: 24,
    img: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dwf87dd75c/large/quiltyn741029_1.jpg",
    name: "Quiltyn Wommen",
    price:'1200'
  },

  //outfit

  {
    id: 25,
    img: "https://www.theoutfitclub.com/designer/post_img/1699616259DSC06535.webp",
    price: "1200",
    name: "THE ZARI DRESS",
  },
  {
    id: 26,
    img: "https://www.theoutfitclub.com/designer/post_img/1699614798DSC07108.webp",
    price: "1780",
    name: "THE ZARI SET SKIRT",
  },
  {
    id: 27,
    img: "https://img.faballey.com/images/Product/DRS05738Z/d3.jpg",
    price: "1283",
    name: " Jumpsuit",
  },
  {
    id: 28,
    img: "https://img.faballey.com/images/Product/DRS06006Z/d3.jpg",
    price: "1920",
    name: "Floral Print Jumpsuit ",
  },
  {
    id: 29,
    img: "https://img.faballey.com/images/Product/DRS05283Z/d3.jpg",
    price: "1920",
    name: "Wine Collared Trim Jumpsuit",
  },
  {
    id: 30,
    img: "https://img.faballey.com/images/Product/DRS05014Z/d3.jpg",
    price: "1920",
    name: "Black Striped Sleeveless ",
  },

  //jeans

  {
    id: 31,
    img: "https://freakins.com/cdn/shop/products/Vishaka--52.jpg?v=1674569454&width=1000",
    price: "1499",
    name: "DECOLORED STRAIGHT JEANS",
  },

  {
    id: 32,
    img: "https://freakins.com/cdn/shop/products/Migma00598.jpg?v=1680520089&width=400",
    price: "1599",
    name: "MIDNIGHT DISTRESS WIDE JEANS",
  },
  {
    id: 33,
    img: "https://freakins.com/cdn/shop/files/KnitNew02630-Edit-2.jpg?v=1686230808&width=400",
    price: "1450",
    name: "BLACK DISTRESS STRAIGHT JEANS",
  },

  {
    id: 34,
    img: "https://freakins.com/cdn/shop/products/Riddhi01221-Edit.jpg?v=1656938230&width=400",
    price: "1799",
    name: "DISTRESSED WIDE FLARE JEANS",
  },

  {
    id: 35,
    img: "https://freakins.com/cdn/shop/files/DSC06613-Edit-Edit-Edit.jpg?v=1692016206&width=400",
    price: "1609",
    name: "ECRU CARGO PANTS",
  },

  {
    id: 36,
    img: "https://freakins.com/cdn/shop/files/DSC04159.jpg?v=1693931559&width=400",
    price: "1799",
    name: "WINDY DISTRESSED WIDE JEANS",
  },

  {
    id: 37,
    img: "https://freakins.com/cdn/shop/files/ReshootBan02722-Edit-2.jpg?v=1696441880&width=400",
    price: "1799",
    name: "VINTAGE STRETCH BOOTCUT JEANS",
  },
  {
    id: 38,
    img: "https://freakins.com/cdn/shop/files/UB01827-Edit_5d2d2f5e-d42f-44af-8605-4d050662b306.jpg?v=1691851097&width=1000",
    price: "1899",
    name: " COARSE STRAIGHT JEANS",
  },

  {
    id: 39,
    img: "https://freakins.com/cdn/shop/files/Freakins--10_0146de8e-b774-497d-8154-ce652a3aa71e.jpg?v=1686956508&width=1000",
    price: "1899",
    name: "SYMBOLIC STRAIGHT JEANS",
  },

  //t-shirt
  {
    id:40,
    img:'https://levi.in/cdn/shop/files/237710454_01_Front_39469a54-be31-49b3-a7bb-4145db695206.jpg?v=1702388049',
    price:'584 ',
    name:'WOMENS GRAPHIC PRINT CREW T-shirt ',
  },

  {
    id:41,
    img:'https://levi.in/cdn/shop/files/A50910000_01_Style_Shot_c37da47f-fd51-46ae-8bc6-66ffd90f7333.jpg?v=1701407461',
    price:'854 ',
    name:'WOMENS RED TAB BRAND T-shirt '
  },
  {
    id:42,
    img:'https://levi.in/cdn/shop/files/237710345_01_Style_Shot_372ab0b1-dfbe-41e9-87d2-cdebe195d622.jpg?v=1695735103',
    price:'699',
    name:'WOMENS BRAND LOGO SLIM T-shirt'
  },
  {
    id:43,
    img:'https://sslimages.shoppersstop.com/sys-master/images/hc7/h76/31578540802078/AW23ALTTSHRT37_WHITE_alt1.jpg_2000Wx3000H',
    price:'1299 ',
    name:'Altlife'
  },
  {
    id:44,
    img:'https://sslimages.shoppersstop.com/sys-master/images/hc1/h2f/28195194306590/A22507KT101_BLUE_alt1.jpg_2000Wx3000H',
    price:'967',
    name:'Life gard t-shirt'
  },
  {
    id:45,
    img:'https://notchabove.in/cdn/shop/products/KhakhiShirt2_1296x.jpg?v=1698202797',
    price:'3000 ',
    name:'Emery Collared Shirt T-shirt'
  },
  {
    id:46,
    img:'https://www.creaturesofhabit.in/cdn/shop/files/MarshmallowWhite_S_10589400_1_540x.jpg?v=1703248819',
    price:'1599 ',
    name:'The Vintage V T-shirt'
  },
  {
    id:47,
    img:'https://www.creaturesofhabit.in/cdn/shop/files/CloudWhite_S_10132002_1_540x.jpg?v=1704782921',
    price:'2199 ',
    name:'The Vintage Crew | Sleeve T-shirt'
  },
  {
    id:48,
    img:'https://www.creaturesofhabit.in/cdn/shop/files/White_S_10142002_1_540x.jpg?v=1703677132',
    price:'1999',
    name:'The Pima Crew | Sleeve T-shirt'
  },
  {
    id:49,
    img:'https://www.creaturesofhabit.in/cdn/shop/files/PirateBlack_S_29022553_1_540x.jpg?v=1704784466',
    price:'1500 ',
    name:'The Vintage Crew Women T-shirt'
  },
];

app.get("/api/data", (req, res) =>{
  res.send(data);
  console.log("assesed");
});

const port = 3009;
app.listen(port,()=>{
  console.log(port)
});
