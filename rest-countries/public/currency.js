document.getElementById("currency-form").addEventListener("submit", currencySubmit);
const div = document.getElementById("currency-box");

async function currencySubmit(e) {
    e.preventDefault();
    div.innerHTML = "";
    
    const currency = document.getElementById("currency-input").value;
    const url = `https://restcountries.com/v3.1/currency/${currency}`;
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