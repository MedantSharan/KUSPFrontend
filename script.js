document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    
    editProfileBtn.addEventListener('click', function() {
        window.location.href = 'edit-profile.html'
    });

    // Load profile data from localStorage
    loadProfileData();
});

function loadProfileData() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        name: 'Alex Katerere',
        title: 'Photographer',
        location: 'Los Angeles',
        about: 'Here\'s where an artist can write a brief bio. This example text demonstrates the length and style of a typical personal description on this platform.'
    };

    // Update DOM with profile data
    document.querySelector('.profile-info h1').textContent = profileData.name;
    document.querySelector('.profile-info p').textContent = `${profileData.title} • ${profileData.location}`;
    document.querySelector('.profile-info .about').textContent = profileData.about;
}