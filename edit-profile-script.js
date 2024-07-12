document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        window.location.href = 'edit-profile-skills.html';
        // In a real application, you would navigate to the next step or update the UI
    });
});