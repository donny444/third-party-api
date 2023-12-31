document.getElementById("name-form").addEventListener("submit", nameSubmit);
const div = document.getElementById("name-box");

async function nameSubmit(e) {
    e.preventDefault();
    div.innerHTML = "";
    
    const name = document.getElementById("name-input").value;
    const url = `https://restcountries.com/v3.1/name/${name}`;
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