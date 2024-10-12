// Load existing data from localStorage if available
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('update-profile-form');

    // Load saved profile from localStorage if available
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
        form.prof_name.value = profile.name;
        form['prof-description'].value = profile.description;
        form['research-interests'].value = profile.interests.join(', ');
        form.publications.value = profile.publications.join(', ');
        form.email.value = profile.email;
        form.phone.value = profile.phone;
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const profileData = {
            name: form.prof-name.value,
            description: form['prof-description'].value,
            interests: form['research-interests'].value.split(',').map(item => item.trim()),
            publications: form.publications.value.split(',').map(item => item.trim()),
            email: form.email.value,
            phone: form.phone.value
        };

        // Save profile data in localStorage
        localStorage.setItem('profile', JSON.stringify(profileData));

        alert('Profile updated successfully!');
    });
});
