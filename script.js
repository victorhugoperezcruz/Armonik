document.addEventListener('DOMContentLoaded', function() {
    // Get all question containers
    const questionContainers = document.querySelectorAll('.question-container');
    const progressBar = document.getElementById('progress-bar');
    const form = document.getElementById('questionnaireForm');
    
    // Set up next button functionality
    const nextButtons = document.querySelectorAll('.next-btn');
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Validate current question
            const currentQuestion = questionContainers[index];
            const radioButtons = currentQuestion.querySelectorAll('input[type="radio"]');
            let isChecked = false;
            
            radioButtons.forEach(radio => {
                if (radio.checked) isChecked = true;
            });
            
            if (!isChecked) {
                alert('Por favor selecciona una opción para continuar.');
                return;
            }
            
            // Hide current question
            currentQuestion.classList.add('d-none');
            
            // Show next question
            questionContainers[index + 1].classList.remove('d-none');
            
            // Update progress bar
            updateProgress(index + 2);
        });
    });
    
    // Set up previous button functionality
    const prevButtons = document.querySelectorAll('.prev-btn');
    prevButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Hide current question (index + 1 because first question doesn't have prev button)
            questionContainers[index + 1].classList.add('d-none');
            
            // Show previous question
            questionContainers[index].classList.remove('d-none');
            
            // Update progress bar
            updateProgress(index + 1);
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // You can process form data here if needed
        
        // Redirect to main page
        window.location.href = 'main.html';
    });
    
    // Function to update progress bar
    function updateProgress(questionNumber) {
        const totalQuestions = questionContainers.length;
        const progressPercentage = (questionNumber / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute('aria-valuenow', progressPercentage);
    }
    
    // Initial progress
    updateProgress(1);
});
