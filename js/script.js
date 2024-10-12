// Load profile data from localStorage and display on the profile page
window.addEventListener('DOMContentLoaded', function() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
        document.getElementById('prof-name').textContent = profile.name;
        document.getElementById('prof-description').textContent = profile.description;
        document.getElementById('research-interests').innerHTML = profile.interests.map(item => `<li>${item}</li>`).join('');
        document.getElementById('publications').innerHTML = profile.publications.map(item => `<li>${item}</li>`).join('');
        document.getElementById('email').textContent = profile.email;
        document.getElementById('email').href = `mailto:${profile.email}`;
        document.getElementById('phone').textContent = profile.phone;
    }
});
