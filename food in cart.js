const product = [ 
   {
       id: 0, 
       image: 'https://th.bing.com/th/id/OIP.MOUpChuQl_o9imMW391pvgHaKG?w=184&h=250&c=7&r=0&o=5&pid=1.7',
       title: 'Napoleon',
       price: 11,
   },

   {
      id: 1, 
      image: 'https://lilluna.com/wp-content/uploads/2020/06/chiffon-cake-resize-9-683x1024.jpg', 
      title: 'Chiffon Cake',
      price: 8,
   },

   {
      id: 2, 
      image: 'https://th.bing.com/th/id/OIP.LVfjuAGA-ISvCw6GdkMiqQHaHa?rs=1&pid=ImgDetMain', 
      title: 'Chocolate Brownie',
      price: 8,
   },

   {
      id: 3, 
      image: 'https://th.bing.com/th/id/OIP.cvzKksDUQZn9ifA4EN_9ggHaE8?rs=1&pid=ImgDetMain', 
      title: 'Bavarious',
      price: 7,
   },

   {
      id: 4, 
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Raspberry-Mousse_EXPS_FT20_29659_F_1014_1.jpg', 
      title: 'Mousse',
      price: 6,
   },

   {
      id: 5, 
      image: 'https://th.bing.com/th/id/OIP.PgJngZgjB8eDaXDr3pQKbgHaHa?rs=1&pid=ImgDetMain', 
      title: 'Stollen',
      price: 7,
   },

   {
      id: 6, 
      image: 'https://th.bing.com/th/id/R.a5dfb3421f64fd0827ab3f9e3f4de8da?rik=dQdbM9UyRp9l0A&riu=http%3a%2f%2fdaisyt13.files.wordpress.com%2f2012%2f01%2flemon-souffle-2.jpg&ehk=dg7mVS1vq88uYPkD53iazBZ7LTrcLJRbYH1RovBW0iY%3d&risl=&pid=ImgRaw&r=0', 
      title: 'Souffle',
      price: 5,
   },

   {
      id: 7, 
      image: 'https://zhangcatherine.com/wp-content/uploads/2022/03/strawberry-roll-cake.jpg', 
      title: 'Roll Cake',
      price: 8,
   },

   {
      id: 8, 
      image: 'https://fabeveryday.com/wp-content/uploads/2022/11/Tembleque-Puerto-Rican-Coconut-Pudding-4.jpg', 
      title: 'Tembleque',
      price: 5,
   },

   {
      id: 9, 
      image: 'https://th.bing.com/th/id/OIP.jDwDYTwAt0f9_RKKPIyOvAHaEh?rs=1&pid=ImgDetMain', 
      title: 'Kazandibi',
      price: 5,
   },

   {
      id: 10, 
      image: 'https://i1.wp.com/www.cosiitaliano.com/wp-content/uploads/2020/06/Panna-Cotta-with-Berries-scaled.jpg?fit=2560%2C1709', 
      title: 'Panna Cotta',
      price: 7,
   },

   {
      id: 11, 
      image: 'https://th.bing.com/th/id/OIP.GMc1IGa_9RRzi-rG0VZLDwHaHG?pid=ImgDet&w=191&h=183&c=7',
      title: 'Budino',
      price: 5,
   },

   {
      id: 12, 
      image: 'https://w4s8p5t8.rocketcdn.me/wp-content/uploads/2021/11/vegan-creme-caramel-22.jpg.webp', 
      title: 'Rozata',
      price: 5,
   },

   {
      id: 13, 
      image: 'https://th.bing.com/th/id/OIP.aprGR2CLg-qAj9oa9BzWQAHaFb?rs=1&pid=ImgDetMain', 
      title: 'Christmas Pudding',
      price: 5,
   },

   {
      id: 14, 
      image: 'https://th.bing.com/th/id/OIP.-jWc2C24evz9xduKD40IKQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7', 
      title: 'Macaron',
      price: 5,
   },

   {
      id: 15, 
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Mayan-Chocolate-Biscotti_EXPS_FBMZ19_58142_B05_01_8b-1.jpg', 
      title: 'Biscotti',
      price: 4,
   },

   {
      id: 16, 
      image: 'https://th.bing.com/th/id/OIP.uLBTQbk_WqsUcrlzBLWS1wHaHa?rs=1&pid=ImgDetMain', 
      title: 'Alfajore',
      price: 4,
   },

   {
      id: 17, 
      image: 'https://th.bing.com/th/id/OIP.aMXXt9kVQZfGMQw4z0tHBgHaE0?rs=1&pid=ImgDetMain', 
      title: 'Jammie Dodgers',
      price: 5,
   },

   {
      id: 18, 
      image: 'https://media2.fishtank.my/media/syokenglish/assets/2020/september/screenshot-2023-02-21-at-8-24-31-am.png', 
      title: 'Roti Canai',
      price: 3,
   },

   {
      id: 19, 
      image: 'https://th.bing.com/th/id/OIP.1oFrrM81Gw3ERNd-jIL1RAHaHR?w=1200&h=1178&rs=1&pid=ImgDetMain', 
      title: 'Brezel',
      price: 5,
   },

   {
      id: 20, 
      image: 'https://th.bing.com/th/id/OIP.eDabTdH18yZmkWhudAQrKwAAAA?w=189&h=189&c=7&r=0&o=5&pid=1.7', 
      title: 'Bagel',
      price: 3,
   },

   {
      id: 21, 
      image: 'https://th.bing.com/th/id/OIP.jRjRdTRuXxxKnP213cSzkwHaE8?rs=1&pid=ImgDetMain', 
      title: 'Lagana',
      price: 9,
   },

   {
      id: 22, 
      image: 'https://www.kingarthurbaking.com/sites/default/files/2020-02/kaiser-rolls.jpg', 
      title: 'Kaiser Roll',
      price: 5,
   },

   {
      id: 23, 
      image: 'https://www.mygreekdish.com/wp-content/uploads/2014/07/Extra-syrupy-Tulumba-recipe-Fried-dough-pastries-scaled.jpg', 
      title: 'Tulumba',
      price: 5,
   },

   {
      id: 24, 
      image: 'https://th.bing.com/th/id/OIP.f4J9OGuCXIsDNxuSNrK20QAAAA?rs=1&pid=ImgDetMain', 
      title: 'Croissant',
      price: 5,
   },

   {
      id: 25, 
      image: 'https://th.bing.com/th/id/OIP.mGYY1gchRgQnEv-cum9CMAHaHa?rs=1&pid=ImgDetMain', 
      title: 'Fokasha',
      price: 5,
   },

   {
      id: 26, 
      image: 'https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Pumpkin-Knot-Rolls_EXPS_UGFBMZ17_16214_B05_03_5b.jpg', 
      title: 'Knot',
      price: 4,
   },

   {
      id: 27, 
      image: 'https://cdn.shopify.com/s/files/1/0408/3544/8983/products/KuihLapis-maki_1200x1200.jpg?v=1595453631', 
      title: 'Kuih Lapis',
      price: 1,
   },

   {
      id: 28, 
      image: 'https://whattocooktoday.com/wp-content/uploads/2020/11/pulut-tai-tai-26.jpg', 
      title: 'Pulut Tekan',
      price: 1,
   },

   {
      id: 29, 
      image: 'https://th.bing.com/th/id/R.4f7d238dd62ee3f9b3393977119b3de2?rik=3QgW91y4%2frQSXw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_OTkUQ94eCQ8%2fS8_q7XvU8DI%2fAAAAAAAACnE%2fh3N5_1Fm3FA%2fs1600%2fkuih%2bsago.jpg&ehk=DiCMo3ZfsjCVNO1DKADwzSm2z9xCDF8PnVPq3rvUTGI%3d&risl=&pid=ImgRaw&r=0', 
      title: 'Kuih Sagu',
      price: 1,
   },

   {
      id: 30, 
      image: 'https://th.bing.com/th/id/OIP.TON0_P-Ww0QmElVgN2OndAHaD4?rs=1&pid=ImgDetMain', 
      title: 'Kuih Kaswi',
      price: 2,
   },

   {
      id: 31, 
      image: 'https://rasamalaysia.com/wp-content/uploads/2021/02/onde-onde8.jpg', 
      title: 'Onde-Onde',
      price: 1,
   },

   {
      id: 32, 
      image: 'https://th.bing.com/th/id/OIP.VBpdzfBgK04Lmrnhh68jqwHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7', 
      title: 'Kuih Talam',
      price: 1,
   },

   {
      id: 33, 
      image: 'https://th.bing.com/th/id/OIP.287HtibU6Tj5AJ_n4u0qWgAAAA?w=199&h=188&c=7&r=0&o=5&pid=1.7', 
      title: 'Kuih Ketayap',
      price: 1,
   },

   {
      id: 34, 
      image: 'https://assets.hmetro.com.my/images/articles/talam01_1489552383.jpg', 
      title: 'Kuih Talam Suji',
      price: 1,
   },

   {
      id: 35, 
      image: 'https://th.bing.com/th/id/OIP.Th_i7WwXVQJTYVHJCYv8RwHaE7?rs=1&pid=ImgDetMain', 
      title: 'Kuih Seri Muka',
      price: 1,
   },

   {
      id: 36, 
      image: 'https://bakingamoment.com/wp-content/uploads/2019/08/IMG_5627-chocolate-ice-cream.jpg', 
      title: 'Chocolate Ice-Cream',
      price: 1,
   },

   {
      id: 37, 
      image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg', 
      title: 'Vanilla Ice-Cream',
      price: 1,
   },

   {
      id: 38, 
      image: 'https://th.bing.com/th/id/OIP.hjTLEi6OL6Z7ZpS-M5C73QHaHa?w=500&h=500&rs=1&pid=ImgDetMain', 
      title: 'Mint Ice-Cream',
      price: 1,
   },

   
   {
    id: 39,
    image: 'https://www.thecountrycook.net/wp-content/uploads/2022/05/thumbnail-No-Churn-Strawberry-Ice-Cream.jpg', 
    title: 'Strawberry Ice-Cream',
    price: 1,
 },

 {
    id: 40, 
    image: 'https://www.thelittleepicurean.com/wp-content/uploads/2019/08/ube-ice-cream-2.jpg', 
    title: 'Yam Ice-Cream',
    price: 1,
 },

 {
    id: 41, 
    image: 'https://th.bing.com/th/id/OIP.-KOs8Mht3NaYHmwymeKyQgHaHa?rs=1&pid=ImgDetMain', 
    title: 'Blueberry Ice-Cream',
    price: 1,
 },

 {
    id: 42, 
    image: 'https://th.bing.com/th/id/OIP.u_BUINCyZxKH2j4WFXeTJwHaLH?rs=1&pid=ImgDetMain', 
    title: 'Oreo Ice-Cream',
    price: 1,
 },

 {
    id: 43, 
    image: 'https://th.bing.com/th/id/OIP.2dcrhWpPWiS9G6EUvkJ9lAHaHa?rs=1&pid=ImgDetMain', 
    title: 'Coffee Ice-Cream',
    price: 2,
 },

 {
    id: 44, 
    image: 'https://th.bing.com/th/id/OIP.JggEotYvKf4HP0ZGbUEDQwAAAA?rs=1&pid=ImgDetMain', 
    title: 'Matcha Ice-Cream',
    price: 1,
 },

 {
    id: 45, 
    image: 'https://th.bing.com/th/id/OIP.hyJ2ir6EGiewfdnlkgHH3wHaJQ?rs=1&pid=ImgDetMain', 
    title: 'Mango Ice-Cream',
    price: 1,
 },

 {
    id: 46, 
    image: 'https://www.modernhoney.com/wp-content/uploads/2018/07/Salted-Caramel-Ice-Cream-1.jpg', 
    title: 'Caramel Ice-Cream',
    price: 2,
 },

 {
    id: 47, 
    image: 'https://th.bing.com/th/id/OIP.2Ng-pa4S9zE_7mOymU1xKgHaHa?rs=1&pid=ImgDetMain', 
    title: 'Lavender Ice-Cream',
    price: 1,
 },

 {
    id: 48, 
    image: 'https://th.bing.com/th/id/OIP.V-PTl-1q3FP0KYnh7TEqDAHaE8?rs=1&pid=ImgDetMain', 
    title: 'Sea Salt Ice-Cream',
    price: 2,
 },

 {
    id: 49, 
    image: 'https://th.bing.com/th/id/OIP._YsXaTw5iTZ6lclZn3MF2gHaEw?w=301&h=193&c=7&r=0&o=5&pid=1.7', 
    title: 'Pu Er Tea',
    price: 5,
 },

 {
    id: 50, 
    image: 'https://th.bing.com/th/id/R.6d4b37a839ca5f9cec078c0ace910118?rik=2tE57YvY1jVhHg&riu=http%3a%2f%2fi.huffpost.com%2fgadgets%2fslideshows%2f279128%2fslide_279128_2070172_free.jpg&ehk=C9OzHghP447VBsM9EuYSjKcrK%2fjGaOx4%2frHf%2blWvFWU%3d&risl=&pid=ImgRaw&r=0', 
    title: 'Russian Caravan',
    price: 5,
 },

 {
    id: 51, 
    image: 'https://th.bing.com/th/id/OIP.cLmtqSeGR7BD-uLvo_-IQQHaHa?rs=1&pid=ImgDetMain', 
    title: 'Masala Chai',
    price: 5,
 },

 {
    id: 52, 
    image: 'https://th.bing.com/th/id/OIP.VToV9RekIby1cISxqHZfegHaI6?rs=1&pid=ImgDetMain', 
    title: 'Karkade',
    price: 5,
 },

 {
    id: 53, 
    image: 'https://www.wandercooks.com/wp-content/uploads/2016/03/malaysian-teh-tarik-16.jpg', 
    title: 'Teh Tarik',
    price: 4,
 },

 {
    id: 54, 
    image: 'https://th.bing.com/th/id/OIP.d_Fs1KhaD5zw9Q2AhQdRpQHaHa?rs=1&pid=ImgDetMain', 
    title: 'Turkey Chai',
    price: 5,
 },

 {
    id: 55, 
    image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte-1080x1080.jpg', 
    title: 'Matcha',
    price: 5,
 },

 {
    id: 56, 
    image: 'https://www.allrecipes.com/thmb/sJqixvCXkk8ETplBIEXyams0ek0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-109190-SmothSweetTea-0162-1x1-1-6737e3fd63f24ae2af55ffac895534cc.jpg', 
    title: 'Sweet Tea',
    price: 5,
 },

 {
    id: 57, 
    image: 'https://lh3.googleusercontent.com/ruy2w_seUCD_jWm-V4uLo8Xm7P93B9yYCYq4i78CDgCUXBUYYhk1GCmSEsBLDH0oxuwRVZd9RchajiJ1zp5OlhtdLUUOBWObTDKSPZk=w900-l68', 
    title: 'Butter Tea',
    price: 5,
 },

 {
    id: 58, 
    image: 'https://www.liveeatlearn.com/wp-content/uploads/2020/07/moroccan-mint-tea-16-400x440.jpg', 
    title: 'Maghrebi Mint Tea',
    price: 5,
 },

 {
    id: 59, 
    image: 'https://th.bing.com/th/id/OIP.7e2BCh04Zpzmr9iIECLudAHaE8?rs=1&pid=ImgDetMain', 
    title: 'Cortado',
    price: 5,
 },

 {
    id: 60, 
    image: 'https://www.hhtk.my/wp-content/uploads/2020/04/D704HC_KopiO_HC.png', 
    title: 'Kopi',
    price: 3,
 },

 {
    id:61, 
    image: 'https://www.stefanofaita.com/wp-content/uploads/2023/07/PAT0126-scaled.jpg', 
    title: 'Affogato',
    price: 5,
 },

 {
    id: 62, 
    image: 'https://th.bing.com/th/id/OIP.ZDQcLJZV2Wi6ilxGn_9ZBgHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7', 
    title: 'Frappe',
    price: 5,
 },

 {
    id: 63, 
    image: 'https://th.bing.com/th/id/OIP.7wowymcLuqAMKv5imW8g2AHaE7?rs=1&pid=ImgDetMain', 
    title: 'Mazagran',
    price: 5,
 },

 {
    id: 64, 
    image: 'https://img-global.cpcdn.com/recipes/4983fd4024f8188f/680x482cq70/aisu-kohi-es-kopi-ala-jepang-foto-resep-utama.jpg', 
    title: 'Aisu Kohi',
    price: 5,
 },

 {
    id: 65, 
    image: 'https://th.bing.com/th/id/OIP.M1OP2zAmnmZu_X8-QzAQoQHaHa?rs=1&pid=ImgDetMain', 
    title: 'Irish Coffee',
    price: 5,
 },

 {
    id: 66, 
    image: 'https://foodandjourneys.net/wp-content/uploads/2021/07/German-Iced-Coffee-Recipe-PIC4.jpg', 
    title: 'Eiskaffee',
    price: 5,
 },

 {
    id: 67, 
    image: 'https://i.pinimg.com/originals/9b/4f/45/9b4f452b27b5fed38c3773259932a666.jpg', 
    title: 'Mocha Cola',
    price: 5,
 },

 {
    id: 68, 
    image: 'https://th.bing.com/th/id/OIP.cJTVlt3ASn9FVIwGFZuwIQAAAA?rs=1&pid=ImgDetMain', 
    title: 'Flat White',
    price: 6,
 },

 {
    id: 69, 
    image: 'https://th.bing.com/th/id/R.9fc73f88bfa96e9100fd1c49b843f62c?rik=Um6i18zun35q8w&riu=http%3a%2f%2fclipart-library.com%2fimages%2frTjrd7Xyc.jpg&ehk=NkBojLhtUVN7jgMmQvDOP%2fOLThX9kn0p8%2bgSbBojuUU%3d&risl=&pid=ImgRaw&r=0', 
    title: 'Black Hole Latte',
    price: 7,
 },

 {
    id: 70, 
    image: 'https://th.bing.com/th/id/R.9fc73f88bfa96e9100fd1c49b843f62c?rik=Um6i18zun35q8w&riu=http%3a%2f%2fclipart-library.com%2fimages%2frTjrd7Xyc.jpg&ehk=NkBojLhtUVN7jgMmQvDOP%2fOLThX9kn0p8%2bgSbBojuUU%3d&risl=&pid=ImgRaw&r=0', 
    title: 'Earth Latte',
    price: 7,
 },

 {
    id: 71, 
    image: 'https://th.bing.com/th/id/R.9fc73f88bfa96e9100fd1c49b843f62c?rik=Um6i18zun35q8w&riu=http%3a%2f%2fclipart-library.com%2fimages%2frTjrd7Xyc.jpg&ehk=NkBojLhtUVN7jgMmQvDOP%2fOLThX9kn0p8%2bgSbBojuUU%3d&risl=&pid=ImgRaw&r=0', 
    title: 'Hazelnut Iced Latte',
    price: 7,
 },

 {
    id: 72, 
    image: 'https://th.bing.com/th/id/R.9fc73f88bfa96e9100fd1c49b843f62c?rik=Um6i18zun35q8w&riu=http%3a%2f%2fclipart-library.com%2fimages%2frTjrd7Xyc.jpg&ehk=NkBojLhtUVN7jgMmQvDOP%2fOLThX9kn0p8%2bgSbBojuUU%3d&risl=&pid=ImgRaw&r=0', 
    title: 'Cheese Banana Latte',
    price: 7,
 },


 ];
 
 const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>RM ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "RM "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "RM "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>RM ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
