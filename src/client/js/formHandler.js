async function handleSubmit(event) {
    event.preventDefault();

    const formURL = document.getElementById('name').value.trim();

    if (!Client.checkForURL(formURL)) {
        alert('Please enter a valid URL.');
        return;
    }

    try {
        const response = await fetch('http://localhost:8081/data', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ url: formURL })
        });

        if (!response.ok) {
            throw new Error('Something went wrong. Please try again later.');
        }

        const data = await response.json();

        document.getElementById('agreement').innerHTML = `<span>${data.agreement}</span>`;
        document.getElementById('subjectivity').innerHTML = `<span>${data.subjectivity}</span>`;
        document.getElementById('irony').innerHTML = `<span>${data.irony}</span>`;
        document.getElementById('confidence').innerHTML = `<span>${data.confidence}</span>`;
    } catch (error) {
        console.error(error);
        alert('Something went wrong. Please try again later.');
    }
}

export { handleSubmit };
