const thermWork = () => {
    document.getElementById('therm').innerHTML = '&#xf2cb;'
    document.getElementById('therm').style.color = 'black'
    document.getElementById('therm').style.fontSize = '3rem'
    setTimeout(function(){
        document.getElementById('therm').innerHTML = '&#xf2ca;'
        document.getElementById('therm').style.color = '#f8b627'
    },1000);
    setTimeout(function(){
        document.getElementById('therm').innerHTML = '&#xf2c9;'
    },2000);
    setTimeout(function(){
        document.getElementById('therm').innerHTML = '&#xf2c8;'
    },3000);
    setTimeout(function(){
        document.getElementById('therm').innerHTML = '&#xf2c7;'
        document.getElementById('therm').style.color = '#d63031'
    },4000);
    
}
thermWork();
setInterval(thermWork, 5000);

const tempCalc = () => {
    let tempVal = document.getElementById('tempVal').value;
    let tempType = document.getElementById('tempType').value;
    let ans;
    if(tempType=='cel'){
        ans= ((tempVal * 9/5) + 32 );
        document.getElementById('calcAns').innerHTML= `${ans}&#176; Fahrenheit`;
    }else{
        ans= ((tempVal - 32) * 5/9 );
        document.getElementById('calcAns').innerHTML= `${ans}&#176; Celsius`;
    }
}