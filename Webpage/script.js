// JavaScript code for making the webpage more alive

// Function to handle smooth scrolling when clicking on navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Add event listeners to navigation links for smooth scrolling
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      smoothScroll(target);
    });
  });
  
  // Function to toggle a class for adding/removing active state from navigation links
  function toggleActiveClass() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  }
  
  // Add event listener to highlight active navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', toggleActiveClass);
  });
  
  // Function to display a confirmation message on form submission
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  
  // Add event listener to the form submission
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', handleSubmit);
  