// api.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("http://localhost:8000/request_list_create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const responseData = await response.json();
            console.log(responseData);
            alert("Form submitted successfully!");
            form.reset();
        } catch (error) {
            console.error(error);
            alert("Failed to submit form");
        }
    });
});
