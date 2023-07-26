async function showaddtocartdata()
{
  let response=await fetch("./data/searchdata.json");
  let data=await response.json();   
 for (let i = 0; i < data["searchproduct"].length; i++) {
  const product = data["searchproduct"][i];
  const productId = product["id"];

  let local_data = JSON.parse(localStorage.getItem('cart'))
  let table_parent=document.getElementById("table_parent")

    if(local_data.includes(productId))
  {
    
     let ihtml = `
          <tr>
          <td >
            <img class="table_data_img" src="${product.img}">
          </td>
          <td>${product.companyname}</td>
          <td>${product.modal}</td>
          <td>
            <div class="input_cancel-arrange">
              <div class="section" id="input-number-favcart">
                <input type="number" max="10" min="1" value="1">
              </div>
              <div class="cancel_btn" onclick="replace_item_cart(${product.id})">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="refresh_btn">
                <i class="fa-solid fa-rotate-right"></i>
              </div>
            </div>

          </td>
          <td>${product.price}</td>
          <td>$300</td>
        </tr>  

                  
    `  
    table_parent.insertAdjacentHTML("beforeend",ihtml)
  }  
 
}

 
}

showaddtocartdata()



// remove the data from addto cart


function replace_item_cart(id) {
  let local_data = JSON.parse(localStorage.getItem('cart'));
  if (local_data.includes(id)) {
    const index = local_data.indexOf(id);
    local_data.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(local_data));
    location.reload();
    console.log(`Item with ID ${id} has been removed from the cart.`);
  } 
}

let item_carts = document.querySelector("#cartcount");
let item_num_count=document.querySelector(".item_num_count");

// update the cart value 

window.onload=function()
{
  
  let cart = JSON.parse(localStorage.getItem("cart"));
  let count = cart.length;
  item_carts.innerHTML = count;

  if(count==0)
  {
    item_num_count.style.display = 'block';
  }
}



// wishlist implementation 




async function showwislstdata()
{
  let response=await fetch("./data/searchdata.json");
  let data=await response.json();   
 for (let i = 0; i < data["searchproduct"].length; i++) {
  const product = data["searchproduct"][i];
  const productId = product["id"];

  let local_data_whislist = JSON.parse(localStorage.getItem('whishlist'))
  let table_parent_wish=document.getElementById("table_parent_wish")

    if(local_data_whislist.includes(productId))
  {
    
     let ihtml = `
     <tr>
     <td >
       <img class="table_data_img" src="${product.img}">
     </td>
     <td>${product.productname}</td>
     <td>${product.modal}</td>
     <td>
       <div class="input_cancel-arrange">
         <div class="wishlist_cancel_btn" onclick="remove_item_wishlist(${product.id})">
           <i class="fa-solid fa-xmark"></i>
         </div>
         <div class="wishaddcart_btn">
           <i class="fa-solid fa-cart-shopping"></i>
         </div>
       </div>

     </td>
     <td>${product.price}</td>
     
   </tr>  
                  
    `  
    table_parent_wish.insertAdjacentHTML("beforeend",ihtml)
  }  
 
}

 
}

showwislstdata()



function remove_item_wishlist(wishitemid)
{
  let local_data_wishlist = JSON.parse(localStorage.getItem('whishlist'));
  if (local_data_wishlist.includes(wishitemid)) {
    const index = local_data_wishlist.indexOf(wishitemid);
    local_data_wishlist.splice(index, 1);
    localStorage.setItem('whishlist', JSON.stringify(local_data_wishlist));
    location.reload();
    console.log(`Item with ID ${id} has been removed from the cart.`);
  } 
} 




// update the wishlistvalue value 
let wish_cart = document.querySelector("#wish_cart");
window.onload=function()
{
  
  let whishlist = JSON.parse(localStorage.getItem("whishlist"));
  let number = whishlist.length;
  wish_cart.innerHTML = number;

  if(number==0)
  {
    item_num_count.style.display = 'block';
  }
}
