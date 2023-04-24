function handleSubmit(event) {
    event.preventDefault();

    // Check what text was put into the form field
    let formURL = document.getElementById('name').value;

    if (Client.checkForURL(formURL)) {
        console.log("::: Form Submitted :::");
        
        fetch('http://localhost:8081/data', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({url: formURL})
        })
        .then(res => res.json())
        .then(function(res) {
            // Log the response to the console
            console.log(res);
            // Update the page with the details
            document.getElementById('agreement').innerHTML = `Agreement: <span>${res.agreement}</span>`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: <span>${res.subjectivity}</span>`
            document.getElementById('irony').innerHTML = `Irony: <span>${res.irony}</span>`
            document.getElementById('confidence').innerHTML = `Confidence: <span>${res.confidence}</span>`
          })
        } else (
            alert('That URL is not going to work for me sorry, can you try something different?')
        );
    }

export { handleSubmit }
