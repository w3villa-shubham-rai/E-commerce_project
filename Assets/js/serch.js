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
    rangecolortogle.style.setProperty("color","#78787d");
    containerrangeplus.style.setProperty("display","none");
    containerrangeminus.style.setProperty("display","block");
  }
  else{
    rangecontainer.style.setProperty("display","none");
    rangecolortogle.style.setProperty("color","blue");
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
    avilablecolortogle.style.setProperty("color","#78787d");
    container2.style.setProperty("display","none");
    container1.style.setProperty("display","block");
   }
   else {   
    container.style.setProperty("display","none");
    avilablecolortogle.style.setProperty("color","blue");
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
    avilablesubcategories.style.setProperty("color","#78787d");
    console.log(avilablesubcategories);
    // Subcategories1.style.setProperty("color","blue")
    subcatplus1.style.setProperty("display","none", );
    // subcatplus1.style.cssText = `
    //   display: none;
    //   color: red;
    // `
    subcatminus1.style.setProperty("display","block");
  }
  else{
    Subcategories1.style.setProperty("display","none");
    avilablesubcategories.style.setProperty("color","blue");
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
    avilablecolor.style.setProperty("color","#78787d");
    brandplus1.style.setProperty("display","block");
    brandminus1.style.setProperty("display","none");
  }
  else{
    brandname.style.setProperty("display","none");
    avilablecolor.style.setProperty("color","blue");
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
    colortogle.style.setProperty("color","#78787d");
    pluscolor.style.setProperty("display","none");
    minuscolor1.style.setProperty("display","block");
   }
   else {   
    container.style.setProperty("display","none");
    colortogle.style.setProperty("color","blue");
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

