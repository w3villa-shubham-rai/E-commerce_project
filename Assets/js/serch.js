
let sete=document.querySelector("#se-te");

async function searchitemfun(category)
{
  
  const search = new window.URLSearchParams(window.location.search);
  const product = search.get("product");
  let response=await fetch("./data/searchdata.json");
  let data=await response.json();
  let content=data[category]
 
  for(i in content)
  {
    let a=content[i].productname;

    if(a.includes(product))  
    {
      showdataonproductpage(content[i])
    }
    else{
     
    }
   
  }

}

searchitemfun(category = "searchproduct")


 function showdataonproductpage(search_data)
{
  finaldiv=''
  ihtml=``
      ihtml+=`
      <div class="search-televesion">
      <div class="search-tv-apple">
       <img src="${search_data.img}">
       <div class="search-hot ">
         HOT
       </div>
       <div class="search-percent ">
         -10%
       </div>
      </div>
      <div class="search-grid-buttom">
         <div class="producd-name_model">
           <p> <u>${search_data.companyname}</u></p>
           <p>${search_data.modal}</p>
         </div>
         <div class="productname-price">
          <p>${search_data.productname}</p>
          <span id="Search-price">${search_data.price}</span> 
          <span id="strike-price"><strike>${search_data.discount}</strike></span>
         </div>
        <div class="searchadd_to_cart">
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
         <!--favcart-end  -->  
         </div>
         <!-- searchadd_to_cart end -->

        <div class="search-buynow-question">
           <div class="search_Buy_Now">
             <i class="fa-regular fa-dollar-sign"></i>
             <span id="buy-now">Buy Now</span>
           </div>
           <div class="search_Question">
             <i class="fa-solid fa-question"></i>
             <span id="question-txt">Question</span>
           </div>
        </div>
      </div>  
      
      <div class="search-listview">
       <div class="listview-brand_model">
          <div class="ls-brand">
            <span>Brand: <u id="ls-bd">Apple</u></span>
          </div>
          <div class="ls-product">
            <span>Model:Product 15</span>
          </div>
       </div>
       <div class="ls-cinemapara">
        <h1>Apple Cinema 30"</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam, eius, voluptate tempore recusandae alias exercitationem repellat porro suscipit magnam enim, assumenda nihil ratione repudiandae quia ullam impedit debitis. Reprehenderit voluptas pariatur ipsa voluptate officiis aliquid saepe fugiat sapiente hic!</p>
       </div>
       <div class="ls-doller-price-euro">
        <span id="euro-first">2345.60<i class="fa-solid fa-euro-sign"></i></span>
        <span id="euro-second"><strike>2345.60<i class="fa-solid fa-euro-sign"></i></strike></span>
       </div>
       <div class="extra-tax">
        <p>Ex Tax:234:50<i class="fa-solid fa-euro-sign"></i></p>
       </div>
       <div class="ls-btn-part">
          <div class="ls-section" id="ls-section-input">
            <input type="number" max="10" min="1" value="1" />
          </div>
          <div class="ls-addcart">
            <button class="ls-addtocart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
              ADD TO CART
            </button>
          </div>
          <div class="ls-whishlist">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="ls-compare">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
       </div>
       <div class="search-buynow-question">
          <div class="search_Buy_Now">
            <i class="fa-regular fa-dollar-sign"></i>
            <span id="buy-now">Buy Now</span>
          </div>
          <div class="search_Question">
            <i class="fa-solid fa-question"></i>
            <span id="question-txt">Question</span>
          </div>
       </div>
     </div>

   </div>
      `

sete.innerHTML=ihtml;
  
  
}
// showdataonproductpage()

// async function dataadd(category)
// {

//   let response=await fetch("./data/product.json");
//   let data=await response.json();
//   let content = data[category]
  
//   ihtml=`<div class="owl-carousel owl-theme" id="whyus">`
//   for(i in content)
//   {
//     ihtml +=`
//     <div class="item1 img-topcategories">
//     <img src="${content[i].img}" alt="" />
//     <p>${content[i].name}</p>
//     </div>

//     `
//   }

//   ihtml += `</div>`
//   b.innerHTML=ihtml;
//   whyusCarousel()
// }

// dataadd(category = "topCategory")





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

  

document.getElementById("gridview").addEventListener("click",function()
{
  let b=document.getElementById("se-te");
  if(b.classList.contains("allitem_TV_cmera_canon-li"))
  {
    b.classList.remove("allitem_TV_cmera_canon-li");
    b.classList.add("allitem_TV_cmera_canon-grid");
  }
  


  let c =document.getElementsByClassName("search-grid-buttom")
 
  for(j=0;j<c.length;j++)
  {
    c[j].style.setProperty("display","block");     
  }
  let d=document.getElementsByClassName("search-listview");
  for(j=0;j<d.length;j++)
  {
    d[j].style.setProperty("display","none");     
  }
});

 document.getElementById("listview").addEventListener("click", function() {
  let b=document.getElementById("se-te");
  if(b.classList.contains("allitem_TV_cmera_canon-grid"))
  {
    b.classList.remove("allitem_TV_cmera_canon-grid");
    b.classList.add("allitem_TV_cmera_canon-li");
  }


  let c =document.getElementsByClassName("search-grid-buttom")
 
  for(j=0;j<c.length;j++)
  {
    c[j].style.setProperty("display","none");     
  }
  let d=document.getElementsByClassName("search-listview");
  for(j=0;j<d.length;j++)
  {
    d[j].style.setProperty("display","block");     
  }

    
});

// add click listner on search page  left side comptresion part
let am=document.getElementsByClassName("avilable-minus") 

for(i=0;i<am.length;i++)
{
  am[i].addEventListener('click',function()
  {

    // this.nextElementSibling.style.setProperty('display','none')    

    // this.style.setProperty("display","none");

    


  });
}


function toggleTopCategories(elem){
  let prevElem = document.getElementsByClassName("active_btn_toogle_categories")[0];
  prevElem.classList.remove("active_btn_toogle_categories");
  elem.classList.add("active_btn_toogle_categories")
}

 function ftoggleavminus(ele1)
 {
  //  let container=document.getElementsByClassName("slidecontainer")[0];
  //  container.style.setProperty("display","none");

  let containerrangeminus=document.getElementById("rangeminus");
  let containerrangeplus=document.getElementById("rangeplus");
  let rangecolortogle=document.getElementsByClassName("priceranfe")[0];
  let rangecontainer=document.getElementsByClassName("slidecontainer")[0];
  if(rangecontainer.style.display=='none' )
  {

    rangecontainer.style.setProperty("display","block");
    rangecolortogle.style.setProperty("color","blue");
    containerrangeplus.style.setProperty("display","none");
    containerrangeminus.style.setProperty("display","block");
  }
  else{
    rangecontainer.style.setProperty("display","none");
    rangecolortogle.style.setProperty("color","#78787d");
    containerrangeplus.style.setProperty("display","block");
    containerrangeminus.style.setProperty("display","none");
  }
 }

//  avilable part 

 function fttoggleavstock()
 {
  let container1=document.getElementById("minus-click_av");
  let container2=document.getElementById("plus-click_av");
  let avilablecolortogle=document.getElementsByClassName("avilable-colortoggle")[0];
   let container=document.getElementsByClassName("search-checkbox-stack")[0];
   if (container.style.display == 'none') {

    container.style.setProperty("display","block");
    avilablecolortogle.style.setProperty("color","blue");
    container2.style.setProperty("display","none");
    container1.style.setProperty("display","block");
   }
   else {   
    container.style.setProperty("display","none");
    avilablecolortogle.style.setProperty("color","#78787d");
    container2.style.setProperty("display","block");
    container1.style.setProperty("display","none");
   } 
 }

//  function clickonplusavilable(plussymbal)
//    {
//     let containerplus=document.getElementsByClassName("search-checkbox-stack")[0];
//      containerplus.style.setProperty("display","block");
//    }


// Subcategories part javascript 

function fn_Subcategories()
{ 
  let subcatplus1=document.getElementById("subcat-plus");
  let subcatminus1=document.getElementById("subcat-minus");
  let avilablesubcategories=document.getElementsByClassName("avilable-categories")[0];
  let Subcategories1=document.getElementsByClassName("item-electronic-search")[0];
  if(Subcategories1.style.display=='none')
  {
    Subcategories1.style.setProperty("display","flex");
   
    // Subcategories1.style.setProperty("color","blue")
    subcatplus1.style.setProperty("display","none", );
    // subcatplus1.style.cssText = `
    //   display: none;
    //   color: red;
    // `
    subcatminus1.style.setProperty("display","block");
    avilablesubcategories.style.setProperty("color","blue");
  }
  else{
    Subcategories1.style.setProperty("display","none");
    avilablesubcategories.style.setProperty("color","#78787d");
    subcatplus1.style.setProperty("display","block");
    subcatminus1.style.setProperty("display","none")

}
}

function fn_brandnamelogo()
{ 
  let brandplus1=document.getElementById("brandminus1");
  let brandminus1=document.getElementById("brandplus1");
  let avilablecolor=document.getElementsByClassName("avilable-color")[0];
  let brandname=document.getElementsByClassName("brand_logo")[0];
  if(brandname.style.display=='none' )
  {

    brandname.style.setProperty("display","flex");
    avilablecolor.style.setProperty("color","blue");
    brandplus1.style.setProperty("display","block");
    brandminus1.style.setProperty("display","none");
  }
  else{
    brandname.style.setProperty("display","none");   
    avilablecolor.style.setProperty("color","#78787d");
    brandplus1.style.setProperty("display","none");
    brandminus1.style.setProperty("display","block");
  }
}


// select  

function fn_select()
{
  let selectplus1=document.getElementById("selectplus1");
  let selectminus=document.getElementById("selectminus");
  let selectbtn=document.getElementsByClassName("Select")[0];
  
 
  if(selectbtn.style.color=='blue')
  {
    selectbtn.style.setProperty("color","#78787d");
    selectminus.style.setProperty("display","none");
    selectplus1.style.setProperty("display","block");
  }
  else{
    selectbtn.style.setProperty("color","blue");
    selectminus.style.setProperty("display","block");
    selectplus1.style.setProperty("display","none");
  }

}

// radio

function fn_selectradio()
{
  let radioplus1=document.getElementById("radioplus1");
  let radiominus=document.getElementById("radiominus");
  let radiobtn=document.getElementsByClassName("radio-select")[0];
  
 
  if(radiobtn.style.color=='blue')
  {
    radiobtn.style.setProperty("color","#78787d");
    radiominus.style.setProperty("display","none");
    radioplus1.style.setProperty("display","block");
  }
  else{
    radiobtn.style.setProperty("color","blue");
    radiominus.style.setProperty("display","block");
    radioplus1.style.setProperty("display","none");
  }


}

// color
function fn_color()
 {
  let minuscolor1=document.getElementById("minus-click_color");
  let pluscolor=document.getElementById("plus-click_color");
  let colortogle=document.getElementsByClassName("color-colortoggle")[0];
   let container=document.getElementsByClassName("colorserach")[0];
   if (container.style.display == 'none') {
    container.style.setProperty("display","flex");
    colortogle.style.setProperty("color","blue");
    pluscolor.style.setProperty("display","none");
    minuscolor1.style.setProperty("display","block");
   }
   else {   
    container.style.setProperty("display","none");
    colortogle.style.setProperty("color","#78787d");
    pluscolor.style.setProperty("display","block");
    minuscolor1.style.setProperty("display","none");
   } 
 }


// clockspedd
function fn_clockspeed()
{
  let clockplus1=document.getElementById("clockplus1");
  let clockminus=document.getElementById("clockminus");
  let clockbtn=document.getElementsByClassName("clock_speedclick")[0];
  
 
  if(clockbtn.style.color=='blue')
  {
    clockbtn.style.setProperty("color","#78787d");
    clockminus.style.setProperty("display","none");
    clockplus1.style.setProperty("display","block");
  }
  else{
    clockbtn.style.setProperty("color","blue");
    clockminus.style.setProperty("display","block");
    clockplus1.style.setProperty("display","none");
  }

}

// TEST1
function fn_test()
{
  let testplus1=document.getElementById("testplus1");
  let testminus=document.getElementById("testminus");
  let testbtn=document.getElementsByClassName("test_one")[0];
  
 
  if(testbtn.style.color=='blue')
  {
    testbtn.style.setProperty("color","#78787d");
    testminus.style.setProperty("display","none");
    testplus1.style.setProperty("display","block");
  }
  else{
    testbtn.style.setProperty("color","blue");
    testminus.style.setProperty("display","block");
    testplus1.style.setProperty("display","none");
  }

}
// no of cores
function fn_cores()
{
  let coreplus1=document.getElementById("coreplus1");
  let coreminus=document.getElementById("coreminus");
  let corebtn=document.getElementsByClassName("no_core")[0];
  
 
  if(corebtn.style.color=='blue')
  {
    corebtn.style.setProperty("color","#78787d");
    coreminus.style.setProperty("display","none");
    coreplus1.style.setProperty("display","block");
  }
  else{
    corebtn.style.setProperty("color","blue");
    coreminus.style.setProperty("display","block");
    coreplus1.style.setProperty("display","none");
  }

}
// style
function fn_style()
{
  let styleplus1=document.getElementById("styleplus1");
  let styleminus=document.getElementById("styleminus");
  let stylebtn=document.getElementsByClassName("style_part_nv")[0];
  
  if(stylebtn.style.color=='blue')
  {
    stylebtn.style.setProperty("color","#78787d");
    styleminus.style.setProperty("display","none");
    styleplus1.style.setProperty("display","block");
  }
  else{
    stylebtn.style.setProperty("color","blue");
    styleminus.style.setProperty("display","block");
    styleplus1.style.setProperty("display","none");
  }

}

// most view and recent view

function recentViewed()
{
  let recentsunglass=document.getElementById("recentsunglass"); 
  let mostviewmainsection=document.getElementsByClassName("mostvied-main-section")[0];
  recentsunglass.style.display="flex";
  mostviewmainsection.style.display='none';
  let recentdesk=document.getElementById("recentdesk");
  recentdesk.style.display="block";
  let recenttxt=document.getElementsByClassName("recenttxt")[0];
  recenttxt.style.color="white";
  let mostviewed=document.getElementById("mostviewed");
   mostviewed.style.color="#b1a8a8";
  let mostviewdesk=document.getElementById("mostviewdesk");
  mostviewdesk.style.display="none";

   
   
}
function mostViewed(){
  let recentsunglass=document.getElementById("recentsunglass"); 
  let mostviewmainsection=document.getElementsByClassName("mostvied-main-section")[0];
  let mostviewed=document.getElementById("mostviewed");
  
  let recenttxt=document.getElementsByClassName("recenttxt")[0];
  recenttxt.style.color="#b1a8a8";
  let mostviewdesk=document.getElementById("mostviewdesk");
  mostviewmainsection.style.display="flex";
  recentsunglass.style.display="none";
  mostviewed.style.color="white";
  mostviewdesk.style.display="block";  
  let recentdesk=document.getElementById("recentdesk");
  recentdesk.style.display="none";

}

function fnrelatedproduct()
{
  
  let relatedproducd_desk=document.getElementsByClassName("relatedproducd_desk")[0];
  relatedproducd_desk.style.display="block";
  let  relatedproductid=document.getElementById("relatedproductid");
  relatedproductid.style.color="black";
  let relatedproductmaincontainer=document.getElementsByClassName("relatedproduct-maincontainer")[0];
  relatedproductmaincontainer.style.display="block";


  let peoplealsoid=document.getElementById("peoplealsoid");
  let people_desk=document.getElementsByClassName("people_desk")[0];
  peoplealsoid.style.color="#b1a8a8";
  people_desk.style.display="none";
  let peoplealsoboughtdefault=document.getElementById("peoplealso-bought-default");
  peoplealsoboughtdefault.style.display="none";
  
}

function fnpeoplealso()
{
  let relatedproductmaincontainer=document.getElementsByClassName("relatedproduct-maincontainer")[0];
  relatedproductmaincontainer.style.display="none";
  let peoplealsoboughtdefault=document.getElementById("peoplealso-bought-default");
  peoplealsoboughtdefault.style.display="block";
  let relatedproductid=document.getElementById("relatedproductid");
  relatedproductid.style.color="#b1a8a8"
  let relatedproducddesk=document.getElementsByClassName("relatedproducd_desk")[0];
  relatedproducddesk.style.display="none";
  let people_desk=document.getElementsByClassName("people_desk")[0];
  people_desk.style.display="block";
  let peoplealsoid=document.getElementById("peoplealsoid");
  peoplealsoid.style.color="black";

}

function fnshowmore()
{
  let showmoreid=document.getElementById("showmoreid");
  showmoreid.style.height="auto";
  let productshowless=document.getElementById("product-showless");
  productshowless.style.display="block";

  let productshowmore=document.getElementById("product-showmore");
  productshowmore.style.display="none";
  let showmoreshadow=document.getElementById("showmore-shadow");
  showmoreshadow.style.color="black";
  
  // document.getElementById("showmoreid").style.height = "auto";
}

function fnshowless()
{
  let productshowmore=document.getElementById("product-showmore");
  productshowmore.style.display="block";
  let showmoreid=document.getElementById("showmoreid");
  showmoreid.style.height="100px";
  let productshowless=document.getElementById("product-showless");
  productshowless.style.display="none";
  let showmoreshadow=document.getElementById("showmore-shadow");
  showmoreshadow.style.color="rgb(165, 163, 163)";
  
}

function tglRightHeading(self) {
  const current = document.querySelector('.desc-active')
  current.classList.remove('desc-active')
  self.classList.add('desc-active')
}


