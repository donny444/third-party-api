document.getElementById("translation-form").addEventListener("submit", translationSubmit);
const div = document.getElementById("translation-box");

async function translationSubmit(e) {
    e.preventDefault();
    div.innerHTML = "";
    
    const translation = document.getElementById("translation-input").value;
    const url = `https://restcountries.com/v3.1/translation/${translation}`;
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