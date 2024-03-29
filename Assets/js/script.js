isUserLogin();

function toggleTopCategories(elem) {
  let prevElem = document.getElementsByClassName(
    "active_btn_toogle_categories"
  )[0];
  prevElem.classList.remove("active_btn_toogle_categories");
  elem.classList.add("active_btn_toogle_categories");
}
function toogle_featureproduct(elemtop) {
  let previouselement = document.getElementsByClassName(
    "active_btn_toogle_top_categories"
  )[0];
  previouselement.classList.remove("active_btn_toogle_top_categories");
  elemtop.classList.add("active_btn_toogle_top_categories");
}

function toogle_ourblog(blogelement) {
  let previousblogele = document.getElementsByClassName(
    "active_btn_toogle_blog"
  )[0];
  previousblogele.classList.remove("active_btn_toogle_blog");
  blogelement.classList.add("active_btn_toogle_blog");
}


// search part 


function searchproduct()
{
  var ele = document.getElementById('serch_item').value.toLowerCase();
  window.location = "searchpage.html?product="+ele
}
// login form show logic

function showmudal(self) {
  document.querySelector(".overlay").classList.add("showlay");

  if (self.classList.contains("login")) {
    document.querySelector("#loginform").classList.add("showloginform");
  } else {
    document.querySelector("#registerform").classList.add("showloginform");
  }
}

function closemudal() {
  const loginhide = document.querySelector("#loginform");
  const registerhide = document.querySelector("#registerform");

  document.querySelector(".overlay").classList.remove("showlay");

  if (loginhide.classList.contains("showloginform")) {
    loginhide.classList.remove("showloginform");
  } else {
    registerhide.classList.remove("showloginform");
  }
}

function registerUser(event) {
  event.preventDefault();

  var username = document.getElementById("user-name").value;
  var email = document.getElementById("e-mail-reg").value;
  var password = document.getElementById("password-type-reg").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Check if the username already exists in local storage
  if (localStorage.getItem(username)) {
    alert("Username already exists!");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    var user = {
      username: username,
      email: email,
      password: password,
    };
    registeredUsers.push(user);

    // Store the user object in local storage
    localStorage.setItem("users", JSON.stringify(registeredUsers));
    alert("Registration successful!");
    closemudal();
  }
}

document
  .getElementById("registerform")
  .addEventListener("submit", registerUser);

// Function to handle login
function loginFn(event) {
  event.preventDefault();

  // Get the input values
  var email = document.getElementById("e-mail").value;
  var password = document.getElementById("password-type").value;

  // Check if the user exists and the password is correct
  let user = null;
  let fetchusersdata = JSON.parse(localStorage.getItem("users"));
  console.log(fetchusersdata);

  let loggedIn = false;
  fetchusersdata.forEach((user) => {
    if (user.email === email && user.password === password) {
      loggedIn = true;
      localStorage.setItem("user", JSON.stringify(user));
    }
  });

  if (loggedIn) {
    let userregname = JSON.parse(localStorage.getItem("user")).username;
    alert("Login successful!");
    let userlogout = document.getElementById("userlogout");
    let userregistericon = document.getElementById("userregistericon");

    let displayusername = document.getElementById("dispusername");
    displayusername.innerHTML = userregname;
    userlogout.style.display = "block";
    userregistericon.style.display = "none";
    closemudal();
  } else {
    alert("Invalid email or password!");
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("loginform").classList.remove("showmodal");
}

// Add event listener to the login form
document.getElementById("loginform").addEventListener("submit", loginFn);

function showusername_login_reg() {}
function logoutuser() {
  localStorage.removeItem("user");
  let userregistericon = document.getElementById("userregistericon");
  userregistericon.style.display = "block";
  let userlogout = document.getElementById("userlogout");
  userlogout.style.display = "none";
  let displayusername = document.getElementById("dispusername");
  displayusername.innerHTML = "login";
}

function isUserLogin() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    let userlogout = document.getElementById("userlogout");
    let userregistericon = document.getElementById("userregistericon");

    let displayusername = document.getElementById("dispusername");
    displayusername.innerHTML = user.username;
    userlogout.style.display = "block";
    userregistericon.style.display = "none";
  }
}

$("#cr").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

function whyusCarousel() {
  $("#whyus").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      426: {
        items: 2,
      },
      700: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
}

function featureproduct() {
  $("#feature-product").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },

      850: {
        items: 3,
      },
      1126: {
        items: 4,
      },
      1252: {
        items: 4,
      },
    },
  });
}

// ******************************************feature Product *******************
// *****************************************************************************************

function featuredcategoriesowl() {
  $("#feature-categories").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 0,
      },

      400: {
        items: 1,
      },
      700: {
        items: 2,
      },
      890: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });
}

$("#shop_brand").owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    200: {
      items: 1,
    },
    300: {
      items: 2,
    },
    450: {
      items: 3,
    },
    586: {
      items: 4,
    },
    740: {
      items: 5,
    },
    864: {
      items: 6,
    },
    1032: {
      items: 7,
    },
    1100: {
      items: 8,
    },
    1248: {
      items: 9,
    },
  },
});
// **********************************blog section**************************************

function ourblog() {
  $(".blogcr_cr").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      950: {
        items: 3,
      },
    },
  });
}

function peoplesayingaboutcrosel() {
  $(".saying_about-us").owlCarousel({
    loop: true,
    margin: 10,
    // nav:true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },

      700: {
        items: 2,
      },
      800: {
        items: 3,
      },
    },
  });
}

// most viewd section owl crausal
function mostviecroselfunction() {
  $("#mostviewd").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      940: {
        items: 3,
      },
      1218: {
        items: 4,
      },
    },
  });
}

function toggleTopCategories(elem) {
  let prevElem = document.getElementsByClassName(
    "active_btn_toogle_categories"
  )[0];
  prevElem.classList.remove("active_btn_toogle_categories");
  elem.classList.add("active_btn_toogle_categories");
}
function toogle_featureproduct(elemtop) {
  let previouselement = document.getElementsByClassName(
    "active_btn_toogle_top_categories"
  )[0];
  previouselement.classList.remove("active_btn_toogle_top_categories");
  elemtop.classList.add("active_btn_toogle_top_categories");
}

function toogle_ourblog(blogelement) {
  let previousblogele = document.getElementsByClassName(
    "active_btn_toogle_blog"
  )[0];
  previousblogele.classList.remove("active_btn_toogle_blog");
  blogelement.classList.add("active_btn_toogle_blog");
}

let a = document.getElementsByClassName("whyus_crowsel")[0];
let b = document.querySelector(".whyus_crowsel");
let featureproductcat = document.querySelector(".featureproductcat-container");
let newfashioncrowesl = document.querySelector(".newfashioncrowesl");
let blogcrowsel = document.querySelector(".blog-crowsel");
let sayingaboutcarousel = document.querySelector(".saying-about-carousel");
let mostviedmainsection = document.querySelector(".mostvied-main-section");

async function dataadd(category) {
  let response = await fetch("./data/product.json");
  let data = await response.json();
  let content = data[category];

  ihtml = `<div class="owl-carousel owl-theme" id="whyus">`;
  for (i in content) {
    ihtml += `
    <div class="item1 img-topcategories">
    <img src="${content[i].img}" alt="" />
    <p>${content[i].name}</p>
    </div>

    `;
  }

  ihtml += `</div>`;
  b.innerHTML = ihtml;
  whyusCarousel();
}

dataadd((category = "topCategory"));

async function featurproductadd(productdata) {
  let response = await fetch("./data/featureproduct.json");
  let data = await response.json();
  let content = data[productdata];

  ihtml = ` <div class="owl-carousel owl-theme" id="feature-product">`;
  for (i in content) {
    ihtml += `
          <div class="headphone">
          <div class="image">
          <a href="productpage.html" onclick="showproductonproductpage(${content[i].id})">
          <img src="${content[i].img}" alt="" /></a>
            <div class="customlabels">CUSTOM LABELS</div>
            <div class="hot_per">
              <div class="prcent">-70%</div>
              <div class="hot">HOT</div>
            </div>
          </div>
          <div class="erykson">
            <div>${content[i].companyname}</div>
            <div class="model">${content[i].modal}</div>
          </div>
          <div class="headphone-txt">
            <div id="product-name" class="htxt ">${content[i].productname}</div>
            <div class="strike">${content[i].price} <strike>${content[i].discount}</strike></div>
          </div>
          <div class="favcart">
            <div class="input-addtocart">
              <div class="section" id="input-number-favcart">
                <input type="number" max="10" min="1" value="1" />
              </div>
              <button class="shop-item-button" onclick="addToCart(${content[i].id}),refreshPage()" >ADD TO CART</button>
            </div>
           
            <div class="whislist">
              <i id="fav-whislist" class="fa-regular fa-heart"onclick="addToWhishlist(${content[i].id}),refreshPage()"></i> 
              <i
                id="compare-product"
                class="fa-solid fa-arrow-right-arrow-left"
              ></i>
            </div>
          </div>

          <div class="buy-now">
            <div class="byu-now-doller">
              <i  class="fa-solid fa-dollar-sign"></i>
              <span class="buynow-doller-symbal">buy now</span>
            </div>
            <div class="question">
              <i class="fa-solid fa-question"></i>
              <span class="buynow-doller-symbal">Question</span>
            </div>
          </div>
        </div>

          `;
  }

  ihtml += `</div>`;
  featureproductcat.innerHTML = ihtml;
  featureproduct();
}

featurproductadd((productdata = "topCategory"));

// new fasion datapart

async function newfasionadddata(category) {
  let response = await fetch("./data/featureproduct.json");
  let data = await response.json();
  let content = data[category];

  ihtml = `<div class="owl-carousel owl-theme" id="feature-categories">`;
  for (i in content) {
    ihtml += `
    <div class="item_fashin_crowesl img-dresssweter">
           <a href="productpage.html" onclick="showproductonproductpage(${content[i].id})">
            <img src="${content[i].img}" alt="" /></a>
            <div class="customlabels_newfashion">2-3 DAYS</div>
            <div class="bodycorndressfirst">
               <div class="bdncross">${content[i].productname}</div>
               <div class="bdn-doller">${content[i].price}</div>
                <hr />
              <div class="btnbd_addto_cart">
                   <div class="btn_addcart_fashion">
                     <button id="btn-hover" onclick="addToCart(${content[i].id})">Add to cart</button>
                     <div class="fashion_addcart_whislist">
                     <i
                     id="heartimage-logo"
                     class="fa-regular fa-heart" onclick="addToWhishlist(${content[i].id})" ></i>
                       <i
                         id="compare-product"
                         class="fa-solid fa-arrow-right-arrow-left"
                       ></i>
                     </div>
                   </div>
              </div>
            </div>
  </div>

    `;
  }

  ihtml += `</div>`;
  newfashioncrowesl.innerHTML = ihtml;
  featuredcategoriesowl();
}

newfasionadddata((category = "newfashion"));

// our blog section

async function addblogdata(category) {
  let response = await fetch("./data/blog.json");
  let data = await response.json();
  let content = data[category];

  ihtml = `<div class="owl-carousel owl-theme blogcr_cr">`;
  for (i in content) {
    ihtml += `
    
           <div class="blog_img_1">
                  <div class="jornalblog_img">
                    <img src="${content[i].img}" alt="" />
                    <div class="aug">
                      <p class="number-two">02</p>
                      <p class="month">Aug</p>
                    </div>
                  </div>
                  <div class="adminmessage">
                    <i class="fa-solid fa-user"></i>
                    <span>admin</span>
                    <i class="fa-solid fa-comment-dots"></i>
                    <span>${content[i].comment}</span>
                    <i class="fa-solid fa-eye"></i>
                    <span>${content[i].view}</span>
                  </div>
                  <div class="jurnal-p-long-para">
                    <p class="jurnal-blog-p">Jornal Blog</p>
                    <p class="junrnal-blog-longpara">
                      ${content[i].descriptionheadin}
                    </p>
                    <div class="blog-anchar">
                      <a href="">Read More</a>
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
          </div>

    `;
  }

  ihtml += `</div>`;
  blogcrowsel.innerHTML = ihtml;
  ourblog();
}

addblogdata((category = "latestpost"));

// people saying section start

async function peoplefeedbackdata(category) {
  let response = await fetch("./data/blog.json");
  let data = await response.json();
  let content = data[category];

  ihtml = `<div class="owl-carousel owl-theme saying_about-us owl-loaded owl-drag">`;
  for (i in content) {
    ihtml += `
    <div class="item-saying-about-comma">
    <div class="comma">
      <i id="comma-symbal" class="fa-solid fa-quote-left"></i>
      <p class="junrnal-blog-longpara">
       ${content[i].statement}
      </p>

      <p id="user">- ${content[i].name}</p>
    </div>
  </div>   
          

    `;
  }

  ihtml += `</div>`;
  sayingaboutcarousel.innerHTML = ihtml;
  peoplesayingaboutcrosel();
}

peoplefeedbackdata((category = "feedback"));

// Mostviewd section Start dynamic data

async function mostviewddata(category) {
  let response = await fetch("./data/featureproduct.json");
  let data = await response.json();
  let content = data[category];

  ihtml = `<div class="owl-carousel owl-theme" id="mostviewd">`;
  for (i in content) {
    ihtml += `      
    <div class="sunglasses">
    <div class="image-sunglass">
      <img src="${content[i].img}" alt="" />
    </div>
    <div class="oversized-sunglasses">
      <p class="aboutus-para">
        ${content[i].productname}
      </p>
      <p class="most-viewed-doller">${content[i].price}</p>
      <div class="most-viewed-whishlist_add-tocart_comapare">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-arrow-right-arrow-left"></i>
      </div>
    </div>
  </div>
          

    `;
  }

  ihtml += `</div>`;
  mostviedmainsection.innerHTML = ihtml;
  mostviecroselfunction();
}

mostviewddata((category = "mostviewd"));







let item_carts = document.querySelector("#cartcount");
let wish_cart = document.querySelector("#wish_cart");

// localStorage.setItem("cart",cartItems)
function addToCart(a) {
  const cartItems = [a];

  let local_data = localStorage.getItem("cart");

  if (local_data == null) {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    local_data = JSON.parse(local_data);
    if (!local_data.includes(a)) {
      local_data.push(a);

      localStorage.setItem("cart", JSON.stringify(local_data));

      // wish_cart.innerHTML = count;
    } else {
      alert("all ready having in cart");
    }
  }
}

function addtocartcount() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let count = cart.length;
  item_carts.innerHTML = count;
}
addtocartcount();



function refreshPage() {
  window.scrollTo(0, 0);
  window.location.reload();
}



// whishlist functionality



function addToWhishlist(wishlist_product_id) {

  const wishlistItems = [wishlist_product_id];

  let local_data_whislist = localStorage.getItem("whishlist");

  if (local_data_whislist == null) {
    localStorage.setItem("whishlist", JSON.stringify(wishlistItems));
  } else {
    local_data_whislist = JSON.parse(local_data_whislist);
    if (!local_data_whislist.includes(wishlist_product_id)) {
      local_data_whislist.push(wishlist_product_id);

      localStorage.setItem("whishlist", JSON.stringify(local_data_whislist));

      // wish_cart.innerHTML = count;
    } else {
      alert("all ready having in cart");
    }
  }
}



function whislistcount() {
  let whishlist = JSON.parse(localStorage.getItem("whishlist"));
  let number = whishlist.length;
  wish_cart.innerHTML = number;
}
whislistcount();


function opennav()
{
  let menubarmegamenu=document.querySelector(".menubar-megamenu");
  menubarmegamenu.style.setProperty("display","block");

}

function closenav()
{
  let menubarmegamenu=document.querySelector(".menubar-megamenu");
  menubarmegamenu.style.setProperty("display","none");
}

function showproductonproductpage(id_product) {
  let pid = id_product;
  // alert(pid); // This will display the id_product value in an alert
  // window.location.href = "searchpage.html?product=" + pid;
localStorage.setItem("myValue", pid);
window.location.href="productpage.html";
}




// const searchInput = document.getElementById("searchInput");

// Function to handle the search action
function performSearch() {
  // const searchTerm = searchInput.value;
  var ele = document.getElementById('searchInput').value.toLowerCase();
  window.location = "searchpage.html?product="+ele
  // alert(`You searched for: ${searchTerm}`);
}

// Event listener for the Enter key press
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});
