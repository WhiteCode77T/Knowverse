
const joinForFreeButton = document.getElementById('joinForFree');
const courseSections = document.querySelectorAll('.course-section');

joinForFreeButton.addEventListener('click', () => {
  window.location.href = 'signup.html';
});


function handleCourseSectionClick(event) {
  const courseSection = event.currentTarget;
  const courseId = courseSection.dataset.courseId;

  // Redirect to course details page
  window.location.href = `course-details.html?courseId=${courseId}`;
}


courseSections.forEach(courseSection => {
  courseSection.addEventListener('click', handleCourseSectionClick);
});