//Using Fetch To Get Data From API
fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
	"method": "GET",//GET METHOD TO FETCH DATA
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "eaf72fa244msh0b291d6cde39d18p1fbf2fjsna6cb4bb6fd18",//API KEY
		"x-bingapis-sdk": "true"
	}
})
.then(response => {
return response.json();//Getting DATA In JSON Format
})
.then(data => {//Data In Object Format
console.log(data);
for(var i=0;i<data.value.length;i++)//Calls Write Function Till There Is Data In Object
{
write(data.value[i]);//Write Function Is Called
}
})
.catch(err => {
console.log(err);//Error Displays When There Is Error
});

var news = document.getElementById("news1");//Getting Main Div Element

function write(data)
{
    var node1 = document.createElement("div");//Creating Div Dynamically 
    var s1 = document.createElement("span");//Creating Span
    var s2 = document.createElement("span");//Creating Span
    var img = document.createElement("img");//Creating Img Tag
    var article = document.createElement("a");//Creating anchor Tag
    news.appendChild(node1);//Adding New Div To Main Div
    node1.appendChild(s1);//Adding Span1 to New Div
    node1.appendChild(s2);//Adding Span2 To New Div
    s1.appendChild(img);//Adding Img To Span1
    s2.appendChild(article);//Adding Anchor Tag To Span2
    article.href = data.url;//Adding Href attribute to anchor ta
    article.target="_blank"//Setting Target blank to open page in new tab
    article.innerHTML = data.name;//Adding Title of news to anchor innerHTML so when clicked on title it opens ARTICLE
    img.src = data.image.thumbnail.contentUrl;//Adding Images To IMG TAG
    
    //Styling
    
    s2.style.display = "inline";
    node1.style.fontSize = "15px";
    node1.style.marginTop = "30px";
    node1.style.marginLeft = "30px";
    node1.style.textAlign = "center";
    s2.style.marginLeft = "200px";
    s2.style.marginBlockStart= "200px";
    s2.style.textSizeAdjust="auto";

    node1.style.backgroundColor="#d4ebf2"
    node1.style.height="290px";
    node1.style.width="308px";
    node1.style.border=" transparent";
    node1.style.float="left";
    node1.style.borderRadius="10px";
    node1.style.fontFamily="Lemonada, cursive";
    node1.style.boxShadow="5px 5px gray"

}

//USing Fetch Same As Aboves
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api",
 { "method": "GET", "headers": 
 { "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com", "x-rapidapi-key": "01258247famshaa6ce33401a5efep15b8c4jsn4bd81ac3ca7b" }
}).then(response => response.json()
).then(data =>{console.log(data);corona(data);
}).catch(err => console.log(err));

function corona(par)

        { document.getElementById("s1").innerHTML = par.world_total.active_cases; 
        document.getElementById("s2").innerHTML = par.world_total.deaths_per_1m_population;
          document.getElementById("s3").innerHTML = par.world_total.new_cases; 
          document.getElementById("s4").innerHTML = par.world_total.new_deaths;
          document.getElementById("s5").innerHTML = par.world_total.serious_critical;
          document.getElementById("s6").innerHTML = par.world_total.total_cases;
          document.getElementById("s7").innerHTML = par.world_total.total_deaths;
          document.getElementById("s8").innerHTML = par.world_total.total_recovered;
        }
