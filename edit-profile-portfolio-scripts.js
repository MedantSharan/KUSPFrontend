document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the existing upload area
    const existingUploadArea = document.getElementById('existing-upload-area');
    const existingFileInput = document.getElementById('existing-file-input');
    
    if (existingUploadArea && existingFileInput) {
        existingUploadArea.addEventListener('click', function() {
            existingFileInput.click();
        });
    }
    
    // Add event listener for the add job button
    document.getElementById('addJobBtn').addEventListener('click', function () {
        const jobsContainer = document.getElementById('jobsContainer');
        const jobCount = jobsContainer.getElementsByClassName('jobSection').length + 1;
        
        const jobSection = document.createElement('div');
        jobSection.className = 'jobSection';
        jobSection.innerHTML = `
            <h2>Job ${jobCount}</h2>
            <div class="formGroup">
                <div class="formLabels">
                    <label for="role">Role</label>
                    <label class="subtext">The title of your role</label>
                </div>
                <input type="text" id="role" name="role" placeholder="Enter your Role">
            </div>
            <div class="formGroup">
                <div class="formLabels">
                    <label for="roleDescription">Role Description</label>
                    <label class="subtext">Please share information of what was required of you in this role</label>
                </div>
                <input type="text" id="roleDescription" name="roleDescription" placeholder="Enter the role description">
            </div>
            <div class="formGroup">
                <div class="formLabels">
                    <label for="review">Review</label>
                    <label class="subtext">Share the employer's remarks on your work</label>
                </div>
                <input type="text" id="review" name="review" placeholder="Enter the review">
            </div>
            <div class="formGroup">
                <div class="formLabels">
                    <label for="reviewRole">Review Role</label>
                    <label class="subtext">Please share your full role name</label>
                </div>
                <input type="text" id="reviewRole" name="reviewRole" placeholder="Enter your Review Role">
            </div>
            <div class="formGroup">
                <div class="formLabels">
                    <label for="reviewerCompanyName">Reviewer Company Name</label>
                    <label class="subtext">Please share your full company name</label>
                </div>
                <input type="text" id="reviewerCompanyName" name="reviewerCompanyName" placeholder="Enter your Reviewer Company Name">
            </div>
            <div class="formGroup">
                <div class="formLabels">
                    <label for="photo">Attach Photo</label>
                    <label class="subtext">Attach project images, pictures or files</label>
                </div>
                <div class="upload-area" name="photo"> Upload Images </div>
                <input type="file" id="file-input-${jobCount}" name="photo" style="display:none;">
            </div>
        `;
    
        jobsContainer.appendChild(jobSection);
    
        // Add the event listener for the upload area
        const uploadArea = jobSection.querySelector('.upload-area');
        const fileInput = jobSection.querySelector(`#file-input-${jobCount}`);
        
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
    });

    // Add event listener for the save button to redirect
    document.getElementById('saveButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'index.html'; // Replace with your desired URL
    });
});
