//hotel room booking

//introducing variables
const singleroomCost = 25000;
const doubleroomCost = 35000;
const tripleroomCost = 40000;
const extrabedsCost = 8000;
const kidsCost = 5000;
let promocode ;
let loyalty_points;
let totalCost;


//get references to the interactive elements...

const  roomForm = document.getElementById("room_booking form");
const currentBooking = document.getElementById("output-1");
const overallBooking = document.getElementById("output-2");
const btntotalCost = document.getElementById("totalcost");
const btnbookNow = document.getElementById("bookNow");
const btnaddfav = document.getElementById("favourite");






//Booking details

const name =document.getElementById("name");
const email =document.getElementById("email");
const numAdults = document.getElementById("adults");
const checkSingleRoom = document.getElementById("single room");
const checkDoubleRoom = document.getElementById("double room");
const checkTripleRoom = document.getElementById("triple room");
const checkInDate = document.getElementById("cheak-in");
const checkOutDate = document.getElementById("cheak-out");



//for total cost calculation

const numSingle = document.getElementById("no single rooms");
const numDouble = document.getElementById("no double rooms");
const numTriple = document.getElementById("no triple rooms");
const numKids = document.getElementById("num_kids");
const extraBedsSingle = document.getElementById("beds1");
const extraBedsDouble = document.getElementById("beds2");
const extraBedsTriple = document.getElementById("beds3");
const promoCode = document.getElementById("promocode");
const finelOutput =document.getElementById("finalbooking")



//extra requirements

const Logo = document.getElementsByName("logo");



//Listen for events

window.addEventListener("load",init);
btnbookNow.addEventListener("click",diplayOverallbooking);
roomForm.addEventListener("input",calculateTotalcost);
// btnaddfav.addEventListener("click",addToFav);
// btnloyalty.addEventListener("click",calculayeLoyaltyPoints);



//Function for init

function init(){
    totalCost = 0;
    localStorage.clear();
}

//Function for Total Cost Button

function diplayOverallbooking(event){
    if(roomForm.checkValidity()){
        event.preventDefault();
        console.log("overall booking cost");
        totalrooms = parseInt(numSingle.value)+parseInt(numDouble.value)+parseInt(numTriple.value)
        let totalCost = (singleroomCost*numSingle.value) + (tripleroomCost*numTriple.value) +(doubleroomCost*numDouble.value)+
                 (extrabedsCost*extraBedsSingle.value) + (extrabedsCost*extraBedsDouble.value) + (extrabedsCost*extraBedsTriple.value) + (kidsCost*numKids.value)

                 roombookingstorage ={
                                        No_of_adults: numAdults.value,
                                        No_of_kids: numKids.value,
                                        No_of_singleRooms: numSingle.value,
                                        No_of_doubleRooms: numDouble.value,
                                        No_of_tripleRooms: numTriple.value,
                                        No_of_extra_bed_single: extraBedsSingle.value,
                                        No_of_extra_bed_double: extraBedsDouble.value,
                                        No_of_extra_bed_triple: extraBedsTriple.value,
                };
                localStorage.setItem('rooom_booking_data',JSON.stringify(roombookingstorage));

                 if(promoCode.value === "123"){
                    totalCost *= 0.95;

                 }

             
    finelOutput.innerHTML =`<ul>
                                    <li>Name ------------------------------- :\t\t\t ${name.value}</li> 
                                    <li>Email ------------------------------- :\t\t\t ${email.value}</li>
                                    <li>Check In Date -------------------- :\t\t\t${checkInDate.value}</li>
                                    
                                    <li>Check Out Date ------------------ :\t\t\t${checkOutDate.value}</li>
                                    
                                    <li>Number of Adults ---------------- :\t\t\t${numAdults.value}</li>
                                    
                                    <li>No. of Kids above 5yrs --------- :\t\t\t\t${numKids.value} \t\t\t (LKR ${kidsCost.toFixed(2)} per kid for extra meals)</li> 
                                    
                                    <li>No. of Single Rooms ------------ :\t\t\t${numSingle.value} \t\t\t (LKR ${singleroomCost.toFixed(2)} per Single Room)</li>
                                    
                                    <li>No. of Double Rooms ----------- :\t\t\t${numDouble.value} \t\t\t(LKR ${doubleroomCost.toFixed(2)} per Double Room)</li> 
                                    
                                    <li>No. of Triple Rooms ------------- :\t\t\t${numTriple.value} \t\t\t(LKR ${tripleroomCost.toFixed(2)} per Triple Room)</li>
                                    
                                    <li>No. of Total Rooms ------------- :\t\t\t${totalrooms}</li>
                                    
                                    <li>No. of Extra Beds For Single Room ---------------- :\t\t\t${extraBedsSingle.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>

                                    <li>No. of Extra Beds For Double Room ---------------- :\t\t\t${extraBedsDouble.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>

                                    <li>No. of Extra Beds For Triple Room ---------------- :\t\t\t${extraBedsTriple.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>


                                    <li>Single Room ? ---------------------- : \t\t\t${checkSingleRoom.checked ? 'Yes' : 'No'}</li>
                                    <li>Double Rooms ? ---------------- : \t\t\t${checkDoubleRoom.checked ? 'Yes' : 'No'}</li>
                                    <li>Triple Room ? ------------- : \t\t\t${checkTripleRoom.checked ? 'Yes' : 'No'}</li>
                                    
                                    
                                    <br>
                                    <hr>
                                    <li>Total Booking Cost --------------- :\t\t\t ${totalCost.toFixed(2)}</li>
                                    <hr>
                                </ul>`;
                                roomForm.reset();
                                currentBooking.innerHTML ="";
                

    }else{
        alert("Please fill the all fields");
    }

    
                                    

}


//Function for Book Now
function calculateTotalcost(){
    let totalCost = (singleroomCost*numSingle.value) + (tripleroomCost*numTriple.value) +(doubleroomCost*numDouble.value)+
                    (extrabedsCost*extraBedsSingle.value) + (extrabedsCost*extraBedsDouble.value) + (extrabedsCost*extraBedsTriple.value) + (kidsCost*numKids.value)

                    if(promoCode.value === "123"){
                        totalCost *= 0.95;

                    }

    currentBooking .innerHTML =`<ul> 
                                    
                                    
                                    <li>Check In Date -------------------- :\t\t\t${checkInDate.value}</li>

                                    <li>Check Out Date ------------------ :\t\t\t${checkOutDate.value}</li>

                                    <li>Number of Adults ---------------- :\t\t\t${numAdults.value}</li>

                                    <li>No. of Kids above 5yrs --------- :\t\t\t\t${numKids.value} \t\t\t (LKR ${kidsCost.toFixed(2)} per kid for extra meals)</li> 

                                    <li>No. of Single Rooms ------------ :\t\t\t${numSingle.value} \t\t\t (LKR ${singleroomCost.toFixed(2)} per Single Room)</li>

                                    <li>No. of Double Rooms ----------- :\t\t\t${numDouble.value} \t\t\t(LKR ${doubleroomCost.toFixed(2)} per Double Room)</li> 

                                    <li>No. of Triple Rooms ------------- :\t\t\t${numTriple.value} \t\t\t(LKR ${tripleroomCost.toFixed(2)} per Triple Room)</li>

                                    <li>No. of Extra Beds For Single Room ---------------- :\t\t\t${extraBedsSingle.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>

                                    <li>No. of Extra Beds For Double Room ---------------- :\t\t\t${extraBedsDouble.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>

                                    <li>No. of Extra Beds For Triple Room ---------------- :\t\t\t${extraBedsTriple.value} \t\t\t (LKR ${extrabedsCost.toFixed(2)} per Extra Bed) </li>
                                    <br>
                                    <hr>
                                    <li>Total Booking Cost --------------- :\t\t\t ${totalCost.toFixed(2)}</li>
                                    <hr>
                                </ul>`;

                                

    }




 
    


    ///book adventure

    //variables
    let numAdults_adv;
    let numhrs_ad;
    let numKids_adv;



    const localAdultsCost = 5000;
    const localKidsCost = 2000;
    const foreignAdultsCost = 10000;
    const foreignKidsCost = 5000;


    const adultsGuideCost = 1000;
    const kidsGuideCost = 500;
    let adventuresTotalCost;



    //get references to the interactive elements....
    const adventuresForm = document.getElementById("adv_booking form");
    const currentadventBooking = document.getElementById("output-22");
    const nationalityAdve = document.getElementById("nationalityadvent");
    const bookAd = document.getElementById("bookNowAdv");
    




    const adultsInAdvlo = document.getElementById("adultsL");
    const kidsInAdvlo = document.getElementById("kidsL");
    const dateAdv = document.getElementById("cheak-in24");
    const hoursAdv = document.getElementById("cheak-time");
    const nameAdvent = document.getElementById("name-adv");
    const emailAdvent = document.getElementById("email-adv");
    const phoneAdvent = document.getElementById("phnumber-adv");



    //Guide requirements

    const guideKidsadv = document.getElementById("kidsno");
    const guideAdultsadv = document.getElementById("adultsno");

    //details

    const checkAdu = document.getElementById("divingadults");
    const checkKid = document.getElementById("divingkids");
    const checkdd = document.getElementById("diving");






    //inputs and selectors

    //document.getElementById('name').addEventListener('input' , updateOutput);
    phoneAdvent.addEventListener('input', updateOutputAd);
    dateAdv.addEventListener('change', updateOutputAd);
    nationalityAdve.addEventListener('change',updateOutputAd);
    adultsInAdvlo.addEventListener('input',updateOutputAd);
    kidsInAdvlo.addEventListener('input', updateOutputAd);
    checkKid.addEventListener('change', updateOutputAd);
    checkAdu.addEventListener('change', updateOutputAd);
    guideKidsadv.addEventListener('input', updateOutputAd);
    guideAdultsadv.addEventListener('input', updateOutputAd);



    window.addEventListener("load",load);


    function load(){
        adventuresTotalCost = 0;
    }


    function updateOutputAd(){
        numAdults_adv = parseInt(adultsInAdvlo.value) || 0;
        numKids_adv = parseInt(kidsInAdvlo.value) || 0;
        numhrs_ad = parseInt(hoursAdv.value) || 0;

        if(nationalityAdve.value ==="local"){
            adventuresTotalCost = ( numAdults_adv*localAdultsCost + numKids_adv*localKidsCost )*numhrs_ad+(adultsGuideCost*guideAdultsadv.value)+(kidsGuideCost*guideKidsadv.value);


        }else if(nationalityAdve.value === "foreign"){
            adventuresTotalCost = (numAdults_adv*foreignAdultsCost + numKids_adv*foreignKidsCost )*numhrs_ad+(adultsGuideCost*guideAdultsadv.value)+(kidsGuideCost*guideKidsadv.value); 

        }



        currentadventBooking.innerHTML =   `<table>
                                                <tr>
                                                    <th>Options</th>
                                                    <th>Booking Details</th>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Date</td>
                                                    <td id="result">${dateAdv.value}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Nationality</td>
                                                    <td id="result">${nationalityAdve.value}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">No. of Adults</td>
                                                    <td id="result">${adultsInAdvlo.value}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">No. of Kids</td>
                                                    <td id="result">${kidsInAdvlo.value}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Hours</td>
                                                    <td id="result">${hoursAdv.value}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Need adult guide?</td>
                                                    <td id="result">${checkAdu.checked ? 'Yes' : 'No'}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Diving</td>
                                                    <td id="result">${checkdd.checked ? 'Yes' : 'No'}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Need kid guide?</td>
                                                    <td id="result">${checkKid.checked ? 'Yes' : 'No'}</td>
                                                </tr>
                                                <tr>
                                                    <td id="opt">Total Booking Cost = LKR</th>
                                                    <td id="result">${adventuresTotalCost.toFixed(2)}</th>
                                                </tr>
                                            <table>`;

                                            

                


    }






    //get popup

    //let popup = document.getElementById("popadvent");

    //function openPopup(){
        //popup.classList.add("open-popup");
    //}
    //function closePopup(){
        //popup.classList.remove("open-popup");
    //}

    //pop

   


    //popup

    const btnAdvent = document.getElementById("bookNowAdv");
    const btnAdventf = document.getElementById("bookNowAdvf");
    const popFinal = document.getElementById("output-44");
    const popInter = document.getElementById("popadvent");




    btnAdvent.addEventListener("click",openPopup);
    btnAdventf.addEventListener("click",closePopup);


    function openPopup(event) {
        if(adventuresForm.checkValidity()){
            event.preventDefault();
            console.log("overall adventer booking cost");


            numAdults_adv = parseInt(adultsInAdvlo.value) || 1;
            numKids_adv = parseInt(kidsInAdvlo.value) || 1;
            numhrs_ad = parseInt(hoursAdv.value) || 1;





            popFinal.innerHTML = `Date :------------\t\t\t${dateAdv.value}<br>
                                  Name :------------\t\t\t${nameAdvent.value}<br>
                                  Phone No:---------\t\t\t${phoneAdvent.value}<br>
                                  Email :--\t\t\t${emailAdvent.value}<br>
                                  Nationality :------\t\t\t${nationalityAdve.value}<br>
                                  No. of Adults :----\t\t\t${adultsInAdvlo.value}<br>
                                  No. of Kids :------\t\t\t${kidsInAdvlo.value}<br>
                                  Adults Guide :-----\t\t\t${checkAdu.checked ? 'Needed' : 'Not needed'}<br>
                                  kid Guide :--------\t\t\t${checkKid.checked ? 'Needed' : 'Not needed'}<br>
                                  Hours :------------\t\t\t${hoursAdv.value} hrs<br>
                                  Total Cost :-------\t\t${adventuresTotalCost.toFixed(2)}
                                  `;
                                  adventuresForm.reset();
                                  currentadventBooking.innerHTML ="";

            document.body.style.pointerEvents = 'none';

            popInter.classList.add("open-popup");
            popInter.style.pointerEvents = 'auto';





        }else {
            alert("Please fill the form completely");
        }

    }
    function closePopup(){
        popInter.classList.remove("open-popup");
        document.body.style.pointerEvents = 'auto';

    }



    //loyality

    const btnloyal = document.getElementById("checkLp");
    let totalloyalitypoints;
    let totalrooms;

    btnloyal.addEventListener("click",showloyality);

    function showloyality(){
        loyalty_points = 0;

        totalloyalitypoints=totalrooms*20;

        if(totalrooms>3){
            alert('total loyality points: ' + totalloyalitypoints);
            
        }else('No loyality points');


    }

    //add to favorit

    const btnfavo = document.getElementById("addFav");

    btnfavo.addEventListener("click", showfavorit);

    function showfavorit(){

        var rooom_booking_data = localStorage.getItem('rooom_booking_data');

        if (!rooom_booking_data){

            alert('No booking data');
            return;

        }else{
            console.log('Room Booking Data: ',rooom_booking_data);

            localStorage.removeItem('rooom_booking_data');
            alert('Added to favourites');
        }
    
            // localStorage.setItem('rooomBookingData',JSON.stringify(roombookingstorage));
        
    }







    
    









    














