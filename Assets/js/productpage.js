function showproductonproductpage(id_product) {
    let pid = id_product;
    // alert(pid); // This will display the id_product value in an alert
    // window.location.href = "searchpage.html?product=" + pid;
  localStorage.setItem("myValue", pid);
  window.location.href="productpage.html";
  }
   
  async function showdataonproductpage()
  {
    let response=await fetch("./data/searchdata.json");
    let data=await response.json();   
    for (let i = 0; i < data["searchproduct"].length; i++) {
    const product = data["searchproduct"][i];
    const productId = product["id"]; 
    let local_data = JSON.parse(localStorage.getItem('myValue'))
    let parentproductpagecontainer=document.getElementById("parentproduct-page-container")

    // Assuming local_data is an array and productId is a variable containing the product ID to check
if (local_data==productId) {

    let ihtml = `
    <div class="product-left-right-part">
    <div class="product-left-part">
        <div class="product-smalllarge-image">
            <div class="left-smallproduct-image">
                <div class="demo-img">
                    <img src="${product.img}"alt="">
                </div>
                <div class="demo-img">
                <img src="${product.img}"alt="">
                </div>
                <div class="demo-img">
                <img src="${product.img}"alt="">
                </div>
                <div class="demo-img">
                <img src="${product.img}"alt="">
                </div>
                <div class="demo-img">
                <img src="${product.img}"alt="">
                </div>
                <div class="demo-img">
                <img src="${product.img}"alt="">
                </div>
            </div>
            <div class="left-large-image">
               <div class="largeproductimage">
                   <img src="${product.img}"alt="">
                    <div class="search-hot ">
                      HOT
                    </div>
                    <div class="search-percent ">
                      -10%
                    </div>
                </div>                               
            </div>
        </div>
    </div>
    <div class="producuct-right-part">
        <div class="right-heading">
            <p onclick="tglRightHeading(this)" class="desc-active desc">DESCRIPTION</p>
            <p onclick="tglRightHeading(this)" class="desc">SPECIFICATION</p>
            <p onclick="tglRightHeading(this)" class="desc">REVIEWS</p>
            <p onclick="tglRightHeading(this)" class="desc">CUSTOM TABS</p>
        </div>
        <!-- show-more part -->
        <div class="showmore" id="showmoreid">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aperiam, velit nihil aliquam doloribus dolor esse libero vero molestias quaerat quia consequuntur dolore provident, iusto inventore natus beatae impedit? Delectus quidem suscipit illum Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span id="showmore-shadow" >Eius, at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, eos. dolorum vel quia architecto hic, fugiat sed, voluptatem 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum officiis repellat eveniet commodi veniam quisquam doloremque, id suscipit vel et.</span> 
            </p>
            <button onclick="fnshowmore()" id="product-showmore"><i class="fa-solid fa-angle-down"></i> show-more</button>
            <button onclick="fnshowless()" id="product-showless"><i class="fa-solid fa-angle-up"></i> show-less</button>
        </div>
      
        <div class="product-star">
            <i id="starcolor" class="fa-solid fa-star"></i>
            <i id="starcolor" class="fa-solid fa-star"></i>
            <i id="starcolor" class="fa-solid fa-star"></i>
            <i id="starcolor" class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <a href="">Based on 1 reviews</a> -
            <a href="">Write a review</a>
        </div>

       
        <div class="pricestock">
            <div class="pricedescription">
                <div class="previous-updated-prce">
                    <h2 id="previous-p"><strike>78.46</strike><i class="fa-solid fa-euro-sign"></i></h2> 
                    <h1 id="updated-p">70.61 <i class="fa-solid fa-euro-sign"></i></h1>
                </div>                              
               <h3>Ex Tax:70.61 <i id="ex-tax" class="fa-solid fa-euro-sign"></i></h3>
               <p>Price in reward point:400</p>
               <p>10 or more 69.04 <i class="fa-solid fa-euro-sign"></i></p>
               <p>20 or more 60.04 <i class="fa-solid fa-euro-sign"></i></p>
               <p>30 or more 51.78 <i class="fa-solid fa-euro-sign"></i></p>
            </div>
            <div class="stockpricemarket">
                <div class="in-stock">
                    <p ><i class="fa-solid fa-check"></i> IN STOCK</p>
                    <ul>
                        <li>Reward Points:100</li>
                        <li>Model:product 15</li>
                        <li>Weight:12.50kg</li>
                        <li>Dimensions:1.00cm*2.00cm*3.00cm</li>
                    </ul>
                </div>
                <div class="stock-img">
                    <div class="applestack">
                      <img src="./Assets/images/applelogo.webp" alt="">
                    </div>
                    <a href="">Apple</a>
                </div>
            </div>
        </div>

        <!-----------------select part start---------------------------->
        <div class="anotherselect">
          <label class="required-red" for="pet-select">Another Select</label><br>
          <select name="pets" id="pet-select">
              <option value="">--Please select--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
          </select>
        </div>

        <div class="anotherselect">
          <label class="required-red" for="pet-select">Another Select</label><br>
          <select name="pets" id="pet-select">
              <option value="">--Please select--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div class="radio-btn">
          <label class="required-red" for="pet-select">Another Select</label><br>
          <button>Small (+7.85<i class="fa-solid fa-euro-sign"></i>)</i></button>
          <button id="medium-btn-doller">Medium (+15.69<i class="fa-solid fa-euro-sign"></i>)</i></button>
          <button id="last-btn-doller">Large(+23.54<i class="fa-solid fa-euro-sign"></i>)</i></button>
        </div>
        <div class="product-circle">
          <label class="required-red" for="pet-select">Single choice(with image)</label>

          <div class="circle-color-choice"> 
            <div id="b-1" class="circle-one">

            </div>
            <div id="b-2" class="circle-one">
              
            </div>
            <div id="b-3" class="circle-one">
              
            </div>
            <div id="b-4" class="circle-one">
              
            </div>
          </div> 
         
        </div>

        <!-- input section start -->
        <div class="input-text">
          <div class="inputtext-padding">
            <label class="required-red" for="inputtext">Text</label><br>
            <input id="inputtext" type="text" placeholder="test"> <br>
          </div>
          <div class="textarea-padding">
            <label class="required-red" for="inputtextlarge">Textarea</label><br>
            <textarea name="largearea" id="inputtextlarge" ></textarea>
          </div>
        </div>
        <!-- file part -->   
        <div class="uploadfile">
          <label class="inputfilelab" for="inputfile">file</label><br>
          <button id="inputfile"><i class="fa-solid fa-arrow-up-from-bracket"></i> UPLOAD FILE</button>
        </div>                     
        <!-- Date time section start -->
        <div class="date">
          <div class="date-padding">
            <label class="required-red" for="inputtext">Date</label><br>
            <div class="date-calenderlogo">
              <div class="time-inpiut-time">
               <input id="inputtexttime" type="text" placeholder="22/10/2023">
              </div>
              <div class="claender-icon">
               <i class="fa-regular fa-calendar-days"></i>
              </div>
           </div>
          </div>
         
          <!-- time -->
          <div class="time-padding">
            <label class="required-red" for="inputtext">Time</label><br>
            <div class="date-calenderlogo">
               <div class="time-inpiut-time">
                <input id="inputtexttime" type="text" placeholder="22:25">
               </div>
               <div class="claender-icon">
                <i class="fa-regular fa-calendar-days"></i>
               </div>
            </div>
          </div>
         
          <!-- Date & time -->
          <div class="date-time-padding">
          <label class="required-red" for="inputtext">Date &Time</label><br>
          <div class="date-calenderlogo">
            <div class="time-inpiut-time">
             <input id="inputtexttime" type="text" placeholder="22:25/22/10/2023">
            </div>
            <div class="claender-icon">
             <i class="fa-regular fa-calendar-days"></i>
            </div>
         </div>        
          </div>
                    
        </div>

        <!-- Add to cart Buy Now and input question  section start-->
        <div class="input-addcart-buynow">
          <div class="input-count">
            <input type="number" placeholder="1">
          </div>
          <div class="last_addtocartbtn">
            <button><i class="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
          </div>
          <div class="product-buynow">
            <button><i class="fa-solid fa-dollar-sign"></i>BUY NOW</button>
          </div>
          <div class="question-ans">
            <i class="fa-solid fa-question"></i>
          </div>
        </div>
      <!-- add to whish list and comare this product-->
      <div class="add-whishlist-compare-product">
        <div class="addwishlist">
          <i class="fa-regular fa-heart"></i> <span>ADD to whish List</span>
        </div>
        <div class="compare-product">
          <i class="fa-solid fa-arrow-right-arrow-left"></i> <span>Compare this Product</span>
        </div>
      </div>
      <!-- this section describe quantity of product -->
      <div class="min-max-quantity">
        <i class="fa-solid fa-info"></i> <span>This Product has a minimum quantity of 2</span>
      </div>

      <!-- social media logo -->
      <div class="productpage-socialmedialogo">
        <div class="socialmedia-product-logo">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div class="socialmedia-product-logo">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="socialmedia-product-logo">
          <i class="fa-regular fa-envelope"></i>
        </div>
        <div class="socialmedia-product-logo">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="socialmedia-product-logo-last">
          <i id="seven-text" class="fa-solid fa-plus"></i> 
          <i id="seven" class="fa-solid fa-7"></i>
      </div>
    </div>
</div>
</div>  

            
`  
parentproductpagecontainer.innerHTML=ihtml;



    
  }  
  
   
}
   
  }
  
   
  
  
showdataonproductpage()
  