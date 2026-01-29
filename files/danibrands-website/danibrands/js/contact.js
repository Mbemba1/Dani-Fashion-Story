// Contact form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            handleFormSubmission(formData);
        });
    }
});

function handleFormSubmission(formData) {
    const formMessage = document.getElementById('formMessage');
    const contactForm = document.getElementById('contactForm');
    
    // Show loading state (optional)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Show success message
        formMessage.textContent = `Thank you, ${formData.name}! Your message has been sent successfully. We'll get back to you at ${formData.email} soon.`;
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
        // In a real application, you would send this data to a server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // })
        // .catch(error => {
        //     // Handle error
        // });
        
    }, 1000);
}

// Add input validation feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#f56565';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
});