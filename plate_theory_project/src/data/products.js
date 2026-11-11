const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;
export const products = [
{id:'p1',category:'Pizza',name:'Truffle Mushroom Pizza',price:449,images:[photo('photo-1579751626657-72bc17010498')],description:'A crisp, stone-baked base layered with roasted mushrooms, creamy mozzarella, herbs and a delicate truffle finish.',badge:'CHEF FAVOURITE'},
{id:'p2',category:'Pizza',name:'Smoky Paneer Tikka Pizza',price:389,images:[photo('photo-1513104890138-7c749659a591')],description:'Tandoori-spiced paneer, peppers, red onion and a bright mint drizzle over bubbling cheese.'},
{id:'p3',category:'Burgers',name:'The Double Stack Burger',price:329,images:[photo('photo-1568901346375-23c9450c58cd')],description:'Two juicy grilled patties, cheddar, house pickles, lettuce and our signature Plate Theory sauce.',badge:'BESTSELLER'},
{id:'p4',category:'Burgers',name:'Crispy Crunch Chicken Burger',price:289,images:[photo('photo-1606755962773-d324e0a13086')],description:'Golden crunchy chicken, cool slaw and pepper mayo tucked into a toasted brioche bun.'},
{id:'p5',category:'Momos',name:'Classic Steamed Momos',price:179,images:[photo('photo-1563245372-f21724e3856d')],description:'Soft hand-folded dumplings served hot with our punchy house tomato-chilli chutney.'},
{id:'p6',category:'Momos',name:'Tandoori Crunch Momos',price:229,images:[photo('photo-1496116218417-1a781b1c416c')],description:'Smoky tandoori-marinated momos finished in the oven with a creamy coriander dip.',badge:'CROWD PICK'},
{id:'p7',category:'Bowls',name:'Korean Street Rice Bowl',price:319,images:[photo('photo-1512621776951-a57141f2eefd')],description:'A colourful bowl of rice, crisp vegetables, sesame and a sweet-savoury gochujang glaze.'},
{id:'p8',category:'Bowls',name:'Paneer Power Bowl',price:299,images:[photo('photo-1547592180-85f173990554')],description:'Grilled paneer, greens, grains and crunchy seasonal vegetables with a lemon herb dressing.'},
{id:'p9',category:'Sides',name:'Loaded Peri Peri Fries',price:189,images:[photo('photo-1573080496219-bb080dd4f877')],description:'Crispy golden fries tossed in peri peri seasoning with a side of creamy dip.'},
{id:'p10',category:'Sides',name:'Cheesy Garlic Bread',price:169,images:[photo('photo-1619531040576-f9416740661b')],description:'Toasted garlic bread with bubbling cheese, parsley and a little kitchen magic.'},
{id:'p11',category:'Desserts',name:'Chocolate Lava Cake',price:199,images:[photo('photo-1606313564200-e75d5e30476c')],description:'A warm chocolate cake with a soft molten centre. Best enjoyed straight away.'},
{id:'p12',category:'Drinks',name:'Mango Mint Cooler',price:129,images:[photo('photo-1544145945-f90425340c7e')],description:'A refreshing mango and mint cooler with a bright citrus finish.'}
];
export const featuredProducts=['p1','p3','p5','p9'].map(id=>products.find(p=>p.id===id));
