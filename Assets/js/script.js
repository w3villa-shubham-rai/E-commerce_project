$("#cr").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  autoplay: false ,
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
  // autoplay:true,
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

1094


// ******************************************feature Product *******************
// *****************************************************************************************

$("#feature-categories").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  // autoplay: true,
  responsive: {
    0: {
      items: 0,
    },
    
    400:{
      items:1,
    },
    600:{
      items:2,
    },
    800:{
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
  // autoplay:true,
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
//   autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    700:{
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
  responsive: {
    0: {
      items: 1,
    },
    300:{
      items:1,
    },

    600:{
      items:2,
    },
    700:{
      items:3,
    }
  },
});


// most viewd section owl crausal

$("#mostviewd").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  // autoplay: true,
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

function Electronic_beuty_fashion(elem) {
  // elem.style.background = "blue"; 
  
  // var result=document.getElementsByClassName("btn-group").value;
  // console.log(result); 

  // document.querySelector(result).className="topcategories";

}


var header = document.getElementById("myDIV");
function myFunction_btn_group() {
  var btns = header.getElementsByClassName("btn-group");
  for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = header.getElementsByClassName("active_btn_toogle");
  current[0].className = current[0].className.replace(" active_btn_toogle", "");
  this.className += " active_btn_toogle";
  });

}
  
}

  
// onclick="Electronic_beuty_fashion(this)"
var header = document.getElementById("myDIV_feature_product");
function myFunction_feature_product()
{
  var btns = header.getElementsByClassName("btn-group");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = header.getElementsByClassName("active_btn_toogle");
  current[0].className = current[0].className.replace(" active_btn_toogle", "");
  this.className += " active_btn_toogle";
  });

}
}


