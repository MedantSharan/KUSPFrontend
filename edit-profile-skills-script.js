document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('editProfileSkillsForm');
    form.addEventListener('submit', function(e) {
        // Here you would typically send this data to a server
        e.preventDefault();
        window.location.href = 'edit-profile-portfolio.html';
    });
    // File upload functionality
    const uploadArea = document.querySelector('.upload-area');
    uploadArea.addEventListener('click', () => document.getElementById('file-upload').click());
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    document.getElementById('file-upload').addEventListener('change', (e) => handleFiles(e.target.files));

    function handleFiles(files) {
        if (files.length > 0) {
            uploadArea.textContent = `File selected: ${files[0].name}`;
        }
    }

    // Tags functionality
    const tagContainers = document.querySelectorAll('.tags');
    const tagInputs = document.querySelectorAll('.search-input input');

    tagInputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                addTag(tagContainers[index], input.value.trim());
                input.value = '';
            }
        });
    });

    function addTag(container, text) {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerHTML = `${text} <span class="remove">×</span>`;
        tag.querySelector('.remove').addEventListener('click', () => tag.remove());
        container.appendChild(tag);
    }

    document.querySelectorAll('.tag .remove').forEach(removeBtn => {
        removeBtn.addEventListener('click', () => removeBtn.parentElement.remove());
    });

    // Back button functionality
    document.querySelector('.btn-back').addEventListener('click', () => {
        // Navigate back to the previous page
        window.history.back();
    });
});