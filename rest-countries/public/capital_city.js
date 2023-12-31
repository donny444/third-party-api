document.getElementById("capital-form").addEventListener("submit", capitalSubmit);
const div = document.getElementById("capital-box");

async function capitalSubmit(e) {
    e.preventDefault();
    div.innerHTML = "";
    
    const capital = document.getElementById("capital-input").value;
    const url = `https://restcountries.com/v3.1/capital/${capital}`;
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