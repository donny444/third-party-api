document.getElementById("language-form").addEventListener("submit", languageSubmit);
const div = document.getElementById("language-box");

async function languageSubmit(e) {
    e.preventDefault();
    div.innerHTML = "";
    
    const lang = document.getElementById("language-input").value;
    const url = `https://restcountries.com/v3.1/lang/${lang}`;
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