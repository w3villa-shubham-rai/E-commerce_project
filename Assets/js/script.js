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

// login form show logic

function showmudal(self)
{
  document.querySelector('.overlay').classList.add('showlay');

  if (self.classList.contains('login')) {
    document.querySelector('#loginform').classList.add('showloginform');
  } else {
    document.querySelector('#registerform').classList.add('showloginform'); 
  }

}

function closemudal()
{
  const loginhide = document.querySelector('#loginform')
  const registerhide = document.querySelector('#registerform')

  document.querySelector('.overlay').classList.remove('showlay');
  
  if (loginhide.classList.contains('showloginform')) {
    loginhide.classList.remove('showloginform');
  } else {
    registerhide.classList.remove('showloginform');
  }


}


// let a=prompt("enter the key")
// let b=prompt("enter the value")

// localStorage.setItem(a,b);

// console.log(`the key is ${a} is ${localStorage.getItem(key)}`)

// registration process

function registeruser()
{
  //  let name=document.getElementById('user-name').value;
  // let username,email,password,confirmpassword
  // localStorage.setItem("username",username)
  // localStorage.setItem("email",email)
  // localStorage.setItem("password",password)
  // localStorage.setItem("confirm",confirmpassword)
  let username,email,password,confirmpassword
  username=document.getElementById("user-name").value,
  email=document.getElementById("e-mail-reg").value,
  password=document.getElementById("password-type-reg").value,
  confirmpassword=document.getElementById("confirm-password").value

    if(password == confirmpassword)
    {
        let dict={
         "username": username,
          "email":email,
          "password":password,
          "loginstaus":false,
        }
      
      dict = JSON.stringify(dict)  
      localStorage.setItem("user",dict)
    }
     else
     {
     alert("plese enter the correct password");
     }

  }

  
 

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


function login_fn()
{
  let myobj=JSON.parse(localStorage.getItem("user"));
  let useremailreg=myobj.email;
  let userregpassword=myobj.password;
  let loginform=document.getElementById("loginform");
  let userregname=myobj.username;  
  let loginstaus=myobj.loginstaus;
  let logingmail,loginpassword;
  logingmail=document.getElementById("e-mail").value,
  loginpassword=document.getElementById("password-type").value


  if(logingmail ==useremailreg &&  loginpassword  ==  userregpassword)
  {
    alert("user successfully login");
    let dict={
        "username":userregname,
        "email":useremailreg,
        "password":userregpassword,
        "loginstaus":true,
     }
   
      dictlogin = JSON.stringify(dict)  
      localStorage.setItem("user",dictlogin)
 
   
  }
  else{
    alert("user not login");
  }
 

}

function showusername_login_reg()
  {
    let myobj=JSON.parse(localStorage.getItem("user"));
    let userregname=myobj.username; 
    let userlogout=document.getElementById("userlogout");
    let userregistericon=document.getElementById("userregistericon");
    

    let status=myobj.loginstaus;
    if(status==true)
    {
      let displayusername=document.getElementById("dispusername");
      displayusername.innerHTML=userregname;  
      userlogout.style.display="block";
      userregistericon.style.display="none";
    }
   

  
   
  }
function logoutuser()
{

  let myobj=JSON.parse(localStorage.getItem("user"));
  let status=myobj.loginstaus; 
  let userregistericon=document.getElementById("userregistericon");
  userregistericon.style.display="block";
  let userlogout=document.getElementById("userlogout");
  userlogout.style.display="none";  
  let displayusername=document.getElementById("dispusername");
  displayusername.innerHTML="login"; 

}

