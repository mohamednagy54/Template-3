


// The end of the year
//  1000milsec = 1 second

let countDownDate = new Date("Jan 1, 2023 23:59:59").getTime()




let counter = setInterval(() => {


    // get date now
    let dateNow = new Date().getTime();
    

    // Find Difference between now and countdown date
    
    let dateDiff = countDownDate - dateNow;
    
    // get days units
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24 );
    document.querySelector('.days').innerHTML = days;

    // --------------------------------

    // get hours units
    let hours = Math.floor(dateDiff % ( 1000 *60 * 60 * 24) / (1000 * 60 * 60));
    
    document.querySelector('.hours').innerHTML = hours;
    
    // get minutes units
    let minutes = Math.floor((dateDiff % ( 1000 * 60 * 60 )) / (1000 * 60));
    
    
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    // get seconds units
    let seconds = Math.floor((dateDiff % ( 1000 * 60 )) / 1000);
    
    
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;


    if(dateDiff < 0){
        clearInterval()
    }
    

}, 1000);



const hiddenSections = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            
        }else{
            entry.target.classList.remove('show')

        }
        
    })
    
})

hiddenSections.forEach((section) => {
    observer.observe(section)
    console.log(observer)
    
})


