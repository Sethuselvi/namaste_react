 export const LOGO_URL="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
export const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
 export const styleCard ={
    
}
//  export const SWIGGY_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.059791&lng=80.1989893&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null';
export const SWIGGY_URL ='https://namastedev.com/api/v1/listRestaurants'
export const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(SWIGGY_URL)}`;

// export const SWIGGYMENU_URL ='https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.059791&lng=80.1989893&restaurantId=10140&catalog_qa=undefined&query=Biryani&submitAction=ENTER'
export const SWIGGYMENU_URL='https://namastedev.com/api/v1/listRestaurantMenu'
export const PROXY_MENU_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(SWIGGYMENU_URL)}`;
