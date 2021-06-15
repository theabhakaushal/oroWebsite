var users=[
    {
    name:"name1",
    userId:122,
    partnerId:"OMA5363",
    mobileNumber:93844322,
    status:"Visit",
    statusId:"OMV534342",
    statusColor:"success",
    locations:[{
        stop:1,
        time : "1:00",
        lat:"312.34",
        long:"55.89"
    },
    {
        stop:2,
        time : "2:00",
        lat:"412.34",
        long:"55.89"
    },
    {
        stop:3,
        time : "3:00",
        lat:"512.34",
        long:"55.89"
    },
    {
        stop:4,
        time : "4:00",
        lat:"212.34",
        long:"55.89"
    }]
    },
    {
        name:"name2",
        userId:123,
        partnerId:"EME5363",
        mobileNumber:73844322,
        status:"IDLE",
        statusId:"EMV534342",
        statusColor:"primary",
        locations:[{
            stop:1,
            time : "11:00",
            lat:"132.34",
            long:"55.89"
        },
        {
            stop:2,
            time : "4:00",
            lat:"112.34",
            long:"55.89"
        },
        {
            stop:3,
            time : "8:00",
            lat:"152.34",
            long:"55.89"
        },
        {
            stop:4,
            time : "7:00",
            lat:"712.34",
            long:"55.89"
        }]
    },
    {
        name:"name3",
        userId:124,
        partnerId:"RME5363",
        mobileNumber:973844322,
        status:"inactive",
        statusId:"RMV534342",
        statusColor:"danger",
        locations:[{
            stop:1,
            time : "12:00",
            lat:"412.34",
            long:"55.89"
        },
        {
            stop:2,
            time : "6:00",
            lat:"612.34",
            long:"55.89"
        },
        {
            stop:3,
            time : "5:00",
            lat:"512.34",
            long:"55.89"
        },
        {
            stop:4,
            time : "3:00",
            lat:"212.34",
            long:"55.89"
        }]
    },
    {
        name:"name4",
        userId:125,
        partnerId:"LME5363",
        mobileNumber:873844322,
        status:"IDLE",
        statusId:"LMV534342",
        statusColor:"primary",
        locations:[{
            stop:1,
            time : "11:00",
            lat:"912.34",
            long:"55.89"
        },
        {
            stop:2,
            time : "5:00",
            lat:"512.34",
            long:"55.89"
        },
        {
            stop:3,
            time : "6:00",
            lat:"312.34",
            long:"55.89"
        },
        {
            stop:4,
            time : "7:00",
            lat:"812.34",
            long:"55.89"
        }]
    },
]

function onUserSelect(userId){
   
 
    var selectedUser = users.find(obj => {
        return obj.userId === userId
      });

     $("#selectedUserName").text(selectedUser.name);
     $("#selectedUserPartnerId").text(selectedUser.partnerId);
     $("#selectedUserNumber").text(selectedUser.mobileNumber);
     $("#selectedUserStatus").html(`<span><i class="fa fa-circle text-${selectedUser.statusColor}" aria-hidden="true"></i></span>&nbsp;&nbsp;${selectedUser.statusId}`);

     let locationsTemplate = ``;
     selectedUser.locations.forEach((location)=>{
         
        locationsTemplate += ` <div class="col-md-6 col-sm-12 my-2 locationCard">
        <div class="card">
          <div class="row card-body py-2">
          <div class="col-md-3 col-sm-6 col-6">
            <span class="text-muted text-uppercase">STOP NO. </span>
            <p> ${location.stop}</p>
          </div>
          <div class="col-md-3 col-sm-6 col-6">
            <span class="text-muted text-uppercase">LAT</span>
            <p>${location.lat}</p>
          </div>
          <div class="col-md-3 col-sm-6 col-6">
            <span class="text-muted text-uppercase">LONG </span>
            <p>${location.long}</p>
          </div>
          <div class="col-md-3 col-sm-6 col-6">
            <span class="text-muted text-uppercase">TIME</span>
            <p>${location.time}</p>
          </div>
          
        </div>
        </div>
      </div>`
    }) 

    $("#locationsDiv").html(locationsTemplate);
}

  

function myMap() {
    const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
 
  const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
  ];

  var slideIndex = 1;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  
    
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("locationCard");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
  
  }

$( document ).ready(function() {

    users.forEach((user,index)=>{
        $('#usersDiv').append(`<div class="userDiv px-2 py-3" onclick="onUserSelect(${user.userId})"><div class="font-weight-bolder text-capitalize">${user.name}</div><div class="text-muted mr-2">${user.partnerId} | ${user.mobileNumber} <span  style="float: right;"><i class="fa fa-chevron-circle-right"></i></span></div><div class="text-uppercase" ><span><i class="fa fa-circle text-${user.statusColor}" aria-hidden="true"></i></span>&nbsp;&nbsp;${user.status} </div></div>`); 
    })

    onUserSelect(userId=122);

    
if ($(window).width() < 900) {
    var slideIndex = 1;
    showSlides(slideIndex);
     $("#callPartnerButton").addClass("button-center").removeClass("");
     
     $(".sliderButtons").css("display","block")
      
}
else{
    $("#callPartnerButton").addClass("text-right").removeClass("button-center");
     var slides2 = document.getElementsByClassName("locationCard");

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "block";
    }

    $(".sliderButtons").css("display","none")
}
    
});

