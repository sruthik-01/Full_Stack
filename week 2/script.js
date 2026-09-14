```javascript
function registerNow() {

    // Put your Google Form link inside the quotes
    const registrationLink = "YOUR_GOOGLE_FORM_LINK_HERE";

    if (registrationLink === "YOUR_GOOGLE_FORM_LINK_HERE") {

        alert(
            "Registration link will be added soon!"
        );

        return;
    }

    window.open(
        registrationLink,
        "_blank"
    );
}
```
