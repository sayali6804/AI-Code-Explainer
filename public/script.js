const button = document.getElementById("explainBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

button.addEventListener("click", async () => {

    const language = document.getElementById("language").value;
    const code = document.getElementById("code").value;

    if (code.trim() === "") {
        alert("Please enter some code.");
        return;
    }

    loading.style.display = "block";
    result.innerHTML = "";

    try {

        const response = await fetch("/api/explain", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                language,
                code
            })
        });

        const data = await response.json();

        console.log(data);

        loading.style.display = "none";

        if (data.explanation) {
            result.innerHTML = marked.parse(data.explanation);
        } else {
            result.innerHTML = "Error: " + data.error;
        }

    } catch (error) {

        loading.style.display = "none";
        result.innerHTML = "Something went wrong.";
        console.error(error);

    }

});

document.getElementById("copyBtn").onclick = () => {

    navigator.clipboard.writeText(result.innerText);

    alert("Copied!");

}

document.getElementById("downloadBtn").onclick = () => {

    const blob = new Blob([result.innerText], { type: "text/plain" });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "Explanation.txt";

    a.click();

}

const optimizeBtn = document.getElementById("optimizeBtn");

const optimizedResult = document.getElementById("optimizedResult");

optimizeBtn.addEventListener("click", async () => {

    const language = document.getElementById("language").value;

    const code = document.getElementById("code").value;

    if (code.trim() === "") {
        alert("Please enter some code.");
        return;
    }

    loading.style.display = "block";

    optimizedResult.textContent = "";

    try {

        const response = await fetch("/api/explain/optimize", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                language,
                code
            })

        });

        const data = await response.json();

        loading.style.display = "none";

        optimizedResult.textContent = data.optimizedCode;

    } catch (error) {

        loading.style.display = "none";

        optimizedResult.textContent = "Something went wrong.";

    }

});