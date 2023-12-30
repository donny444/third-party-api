document.getElementById("form").addEventListener("submit", nameSubmit);

async function submit(e) {
    e.preventDefault();
    
    const name = document.getElementById("input").value;
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
            document.body.appendChild(p);
        }
    } catch(err) {
        console.error(err);
    }
}