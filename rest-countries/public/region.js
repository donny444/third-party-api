document.getElementById("region-form").addEventListener("submit", regionSubmit);
const div = document.getElementById("region-box");

async function regionSubmit(e) {
    e.preventDefault();
    div.innerHTML = "";
    
    const region = document.getElementById("region-input").value;
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const options = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        for(i=0; i<data.length; i++) {
            const p = document.createElement("p");
            p.innerHTML = data[i].name.common;
            div.appendChild(p);
        }
    } catch(err) {
        console.error(err);
    }
}