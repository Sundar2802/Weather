
function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='9517712d3ace9ab613935103b79f73e1';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
        .then(response => response.json())
        .then(data =>{
            var t= data['main']['temp']  
            var maxt= data['main']['temp_max']
            var mint= data['main']['temp_min']
            var humidity= data['main']['humidity']
            document.getElementById("cityname").innerHTML=city;
            document.getElementById("temp").innerHTML=t+" deg C";
            document.getElementById("maxtemp").innerHTML=maxt+" deg C";
            document.getElementById("mintemp").innerHTML=mint+" deg C";
            document.getElementById("hum").innerHTML=humidity;
        })
        }
