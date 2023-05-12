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
   
  },
});




// ******************************************feature Product *******************
// *****************************************************************************************

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


// most viewd section owl crausal

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