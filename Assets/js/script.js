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

function whyusCarousel(){
  $("#whyus").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
      responsive: {
          0: {
            items: 1
          },
          426: {
            items: 2
          },
          700:{
              items:3
          },
          900: {
            items: 4
          },
          1000:{
              items:5
          }
        }
  });
}


function featureproduct()
{
  $("#feature-product").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
  
      850:{
        items:3,
      },
      1126:{
        items:4,
      },
      1252:{
        items:4
      }
     
    }
  });

}






// ******************************************feature Product *******************
// *****************************************************************************************

function featuredcategoriesowl()
{
  $("#feature-categories").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 0,
      },
      
      400:{
        items:1,
      },
      700:{
        items:2,
      },
      890:{
        items:3
      },
      1100:{
        items:4
      }
    },
  });
}







$("#shop_brand").owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  autoplay:true,
  responsive: {
    0: {
      items: 1,
    },
    200:{
      items: 1,
    },
    300:
    {
        items:2,
    },
    450:{
        items:3,
    },
    586:{
        items: 4,
    },
    740: {
      items: 5,
    },
    864: {
      items: 6,
    },
    1032:
    {
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

function ourblog()
{
  $(".blogcr_cr").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      800:{
          items: 2,
      },
      950:{
          items: 3,
      },
    },
  });
}





function peoplesayingaboutcrosel()
{
  $(".saying_about-us").owlCarousel({
    loop: true,
    margin: 10,
    // nav:true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      300:{
        items:1,
      },
  
      700:{
        items:2,
      },
      800:{
        items:3,
      }
    },
  });
  
}



// most viewd section owl crausal
function mostviecroselfunction()
{
  $("#mostviewd").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      500:{
        items: 2,
      },
      940:{
        items:3
      },
      1218:{
        items:4
      }
    },
  });
}





// this code for learning purpose


// function Electronic_beuty_fashion(elem) {
  // elem.style.background = "blue"; 
  
  // var result=document.getElementsByClassName("btn-group").value;
  // console.log(result); 

  // document.querySelector(result).className="topcategories";

// }


// var header = document.getElementById("myDIV");
// myFunction_btn_group(header)
// var header = document.getElementById("myDIV_feature_product");
// // myFunction_btn_group(header)
// var header = document.getElementById("myDIV_our_blog");
// // myFunction_btn_group(header)


// function myFunction_btn_group(parent_id) {
//   var btns = parent_id.getElementsByClassName("btn-group");
//   for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = header.getElementsByClassName("active_btn_toogle");
//   current[0].className = current[0].className.replace(" active_btn_toogle", "");
//   this.className += " active_btn_toogle";
//   });

// }
  
// }
function toggleTopCategories(elem){
  let prevElem = document.getElementsByClassName("active_btn_toogle_categories")[0];
  prevElem.classList.remove("active_btn_toogle_categories");
  elem.classList.add("active_btn_toogle_categories")
}
 function toogle_featureproduct(elemtop)
 {
  let previouselement=document.getElementsByClassName("active_btn_toogle_top_categories")[0];
  previouselement.classList.remove("active_btn_toogle_top_categories");
  elemtop.classList.add("active_btn_toogle_top_categories");
 }

 function toogle_ourblog(blogelement)
 {
    let previousblogele=document.getElementsByClassName("active_btn_toogle_blog")[0];
    previousblogele.classList.remove("active_btn_toogle_blog");
    blogelement.classList.add("active_btn_toogle_blog");
 }

// login form show logic

// function showmudal(self)
// {
//   document.querySelector('.overlay').classList.add('showlay');

//   if (self.classList.contains('login')) {
//     document.querySelector('#loginform').classList.add('showloginform');
//   } else {
//     document.querySelector('#registerform').classList.add('showloginform'); 
//   }

// }

// function closemudal()
// {
//   const loginhide = document.querySelector('#loginform')
//   const registerhide = document.querySelector('#registerform')

//   document.querySelector('.overlay').classList.remove('showlay');
  
//   if (loginhide.classList.contains('showloginform')) {
//     loginhide.classList.remove('showloginform');
//   } else {
//     registerhide.classList.remove('showloginform');
//   }


// }


// let a=prompt("enter the key")
// let b=prompt("enter the value")

// localStorage.setItem(a,b);

// console.log(`the key is ${a} is ${localStorage.getItem(key)}`)

// registration process

// function registeruser()
// {
//   //  let name=document.getElementById('user-name').value;
//   // let username,email,password,confirmpassword
//   // localStorage.setItem("username",username)
//   // localStorage.setItem("email",email)
//   // localStorage.setItem("password",password)
//   // localStorage.setItem("confirm",confirmpassword)
//   let username,email,password,confirmpassword
//   username=document.getElementById("user-name").value,
//   email=document.getElementById("e-mail-reg").value,
//   password=document.getElementById("password-type-reg").value,
//   confirmpassword=document.getElementById("confirm-password").value

//     if(password == confirmpassword)
//     {
//       let dict={
//        "username": username,
//         "email":email,
//         "password":password,
//         "loginstaus":false,
//       }
      
//       user = JSON.parse(localStorage.getItem("user"))

//       if(user) {
//         if (user.email) {
//           alert("user already exist")
//         } else {
//           user.email = dict
//           user = JSON.stringify(user)  
//           localStorage.setItem("user",user)
//         }
//       }


//     }
//      else
//      {
//      alert("plese enter the correct password");
//      }

//   }

  
 

// function login_fn()
// {
  

  // let myobj=JSON.parse(localStorage.getItem("user"));
  // // console.log(myobj);
  // // console.log(myobj.username,myobj.password);
  // let usernamelogin=myobj.email;
  // let userpassword=myobj.password;
  // let loginGmail=document.getElementById("e-mail").value,
  // let loginpassword=document.getElementById("password-type").value
 
  // if(userpassword == loginpassword && usernamelogin== loginGmail)
  // {
  //   alert("user login");
  // }
  
// }
// let myobj=JSON.parse(localStorage.getItem("user"));
//   // console.log(myobj);
//   // console.log(myobj.username,myobj.password);
//   let usernamelogin=myobj.username;
//   console.log(usernamelogin);
//   let userpassword=myobj.password;
//   console.log(userpassword);


// function login_fn()
// {
//   let myobj=JSON.parse(localStorage.getItem("user"));
//   let useremailreg=myobj.email;
//   let userregpassword=myobj.password;
//   let loginform=document.getElementById("loginform");
//   let userregname=myobj.username;  
//   let loginstaus=myobj.loginstaus;
//   let logingmail,loginpassword;
//   logingmail=document.getElementById("e-mail").value,
//   loginpassword=document.getElementById("password-type").value


//   if(logingmail ==useremailreg &&  loginpassword  ==  userregpassword)
//   {
//     alert("user successfully login");
//     let dict={
//         "username":userregname,
//         "email":useremailreg,
//         "password":userregpassword,
//         "loginstaus":true,
//      }
   
//       dictlogin = JSON.stringify(dict)  
//       localStorage.setItem("user",dictlogin)
 
   
//   }
//   else{
//     alert("user not login");
//   }
 

// }

// function showusername_login_reg()
//   {
//     let myobj=JSON.parse(localStorage.getItem("user"));
//     let userregname=myobj.username; 
//     let userlogout=document.getElementById("userlogout");
//     let userregistericon=document.getElementById("userregistericon");
    

//     let status=myobj.loginstaus;
//     if(status==true)
//     {
//       let displayusername=document.getElementById("dispusername");
//       displayusername.innerHTML=userregname;  
//       userlogout.style.display="block";
//       userregistericon.style.display="none";
//     }
   

  
   
//   }

// function logoutuser()
// {

//   let myobj=JSON.parse(localStorage.getItem("user"));
//   let status=myobj.loginstaus; 
//   let userregistericon=document.getElementById("userregistericon");
//   userregistericon.style.display="block";
//   let userlogout=document.getElementById("userlogout");
//   userlogout.style.display="none";  
//   let displayusername=document.getElementById("dispusername");
//   displayusername.innerHTML="login"; 

// }




// 

// fetch("./data/product.json")
// .then((response)=>response.json())
// .then((data)=>console.log(data));





// let response=fetch("./data/product.json");
// response.then((v)=>{
//         return v.json();
// }).then((content)=>{

//   console.log(content)

//   ihtml=""
//   for(i in content.product)
//   {
//     ihtml +=`
//     <div class="item1 img-topcategories">
//     <img src="${content.product[i].img}" alt="" />
//     <p>${content.product[i].name}</p>
//     </div>

//     `
//   }

//   b.innerHTML=ihtml;
//   whyusCarousel()
// })


let a=document.getElementsByClassName("whyus_crowsel")[0];
let b=document.querySelector(".whyus_crowsel");
let featureproductcat=document.querySelector(".featureproductcat-container");
let newfashioncrowesl=document.querySelector(".newfashioncrowesl"); 
let blogcrowsel=document.querySelector(".blog-crowsel");
let sayingaboutcarousel=document.querySelector(".saying-about-carousel");
let mostviedmainsection=document.querySelector(".mostvied-main-section");


async function dataadd(category)
{

  let response=await fetch("./data/product.json");
  let data=await response.json();
  let content = data[category]
  
  ihtml=`<div class="owl-carousel owl-theme" id="whyus">`
  for(i in content)
  {
    ihtml +=`
    <div class="item1 img-topcategories">
    <img src="${content[i].img}" alt="" />
    <p>${content[i].name}</p>
    </div>

    `
  }

  ihtml += `</div>`
  b.innerHTML=ihtml;
  whyusCarousel()
}

dataadd(category = "topCategory")





//  function btn_electronic()
// {
//   alert("hello shubham");

//   let response=fetch("./data/product.json");
// response.then((v)=>{
//         return v.json();
// }).then((content)=>{

//   console.log(content)

//   ihtml=""
//   for(i in content.product)
//   {
//     ihtml +=`
//     <div class="item1 img-topcategories">
//     <img src="${content.product[i].img}" alt="" />
//     <p>${content.product[i].name}</p>
//     </div>

//     `
//   }
  
//   b.innerHTML=ihtml;
//   whyusCarousel()
  
// })

// }


async function featurproductadd(productdata)
{

  let response=await fetch("./data/featureproduct.json");
  let data=await response.json();
  let content = data[productdata]
  
  ihtml=` <div class="owl-carousel owl-theme" id="feature-product">`
  for(i in content)
  {     
          ihtml +=`
          <div class="headphone">
          <div class="image">
            <img src="${content[i].img}"" alt="" />
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
            <div class="htxt">${content[i].productname}</div>
            <div class="strike">${content[i].price} <strike>${content[i].discount}</strike></div>
          </div>
          <div class="favcart">
            <div class="input-addtocart">
              <div class="section" id="input-number-favcart">
                <input type="number" max="10" min="1" value="1" />
              </div>
              <button>ADD TO CART</button>
            </div>
           
            <div class="whislist">
              <i id="fav-whislist" class="fa-regular fa-heart"></i>
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

          `
  }

  ihtml += `</div>`
  featureproductcat.innerHTML=ihtml;
  featureproduct()
}

featurproductadd(productdata = "topCategory")



// new fasion datapart


async function newfasionadddata(category)
{

  let response=await fetch("./data/featureproduct.json");
  let data=await response.json();
  let content = data[category]
  
  ihtml=`<div class="owl-carousel owl-theme" id="feature-categories">`
  for(i in content)
  {
    ihtml +=`
    <div class="item_fashin_crowesl img-dresssweter">
        <img src="${content[i].img}" alt="" />
            <div class="customlabels_newfashion">2-3 DAYS</div>
            <div class="bodycorndressfirst">
               <div class="bdncross">${content[i].productname}</div>
               <div class="bdn-doller">${content[i].price}</div>
                <hr />
              <div class="btnbd_addto_cart">
                   <div class="btn_addcart_fashion">
                     <button>Add to cart</button>
                     <div class="fashion_addcart_whislist">
                       <i
                         id="heartimage-logo"
                         class="fa-regular fa-heart"
                       ></i>
                       <i
                         id="compare-product"
                         class="fa-solid fa-arrow-right-arrow-left"
                       ></i>
                     </div>
                   </div>
              </div>
            </div>
  </div>

    `
  }

  ihtml += `</div>`
  newfashioncrowesl.innerHTML=ihtml;
  featuredcategoriesowl()
}

newfasionadddata(category = "newfashion")


// our blog section


async function addblogdata(category)
{

  let response=await fetch("./data/blog.json");
  let data=await response.json();
  let content = data[category]
  
  ihtml=`<div class="owl-carousel owl-theme blogcr_cr">`
  for(i in content)
  {
    ihtml +=`
    
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

    `
  }

  ihtml += `</div>`
  blogcrowsel.innerHTML=ihtml;
  ourblog()
}

addblogdata(category = "latestpost")



// people saying section start

async function peoplefeedbackdata(category)
{

  let response=await fetch("./data/blog.json");
  let data=await response.json();
  let content = data[category]
  
  ihtml=`<div class="owl-carousel owl-theme saying_about-us owl-loaded owl-drag">`
  for(i in content)
  {
    ihtml +=`
    <div class="item-saying-about-comma">
    <div class="comma">
      <i id="comma-symbal" class="fa-solid fa-quote-left"></i>
      <p class="junrnal-blog-longpara">
       ${content[i].statement}
      </p>

      <p id="user">- ${content[i].name}</p>
    </div>
  </div>   
          

    `
  }

  ihtml += `</div>`
  sayingaboutcarousel.innerHTML=ihtml;
  peoplesayingaboutcrosel()
}

peoplefeedbackdata(category = "feedback")

// Mostviewd section Start dynamic data


async function mostviewddata(category)
{

  let response=await fetch("./data/featureproduct.json");
  let data=await response.json();
  let content = data[category]
  
  ihtml=`<div class="owl-carousel owl-theme" id="mostviewd">`
  for(i in content)
  {
    ihtml +=`      
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
          

    `
  }

  ihtml += `</div>`
  mostviedmainsection.innerHTML=ihtml;
  mostviecroselfunction()
}

mostviewddata(category = "mostviewd")

