const projects = document.querySelectorAll('.project');
const projectInfos = document.querySelectorAll('.project-info');

projects.forEach(function(project, index) {
  project.addEventListener('click', function() {
    projects.forEach(function(project) {
      project.classList.remove('active');
      project.classList.add('idle');
    });
    project.classList.remove('idle');
    project.classList.add('active');
    projectInfos.forEach(function(projectInfo) {
      projectInfo.classList.add('hide');
    });
    projectInfos[index].classList.remove('hide');
  });
});
  