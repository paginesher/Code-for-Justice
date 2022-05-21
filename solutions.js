const info = document.querySelector('#info');



info.style.display = "none";
let isShow = true;
function showInfo(){

    if(isShow){
    info.style.display = "none";
    isShow=false;
    }
    else{
        info.style.display= "block";
        isShow = true;
    }
    
}


// showInfo(info);

// function moreInfo(){
// info.innerHTML = `<span class="mini">Financial Achievement</span>, Assisting renters on improve their financial position and credit scores to help them achieve Homeownership. We established a platform that transforms a renter's ability to pay, stay, and thrive in their home by using real-time data to develop payment solutions to address their needs. These personalized structures reduce the avoidable costs of delinquency and eviction."`;
// };



