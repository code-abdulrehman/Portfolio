const projectsData = {
    "projects": [
      {
        "url": "https://colors-shades.vercel.app/",
        "image": "./src/assets/images/projects/color-shades.png"
      },
      {
        "url": "https://e-bag.vercel.app/",
        "image": "./src/assets/images/projects/e-bag.png"
      },
      {
        "url": "https://small-search-system.vercel.app/",
        "image": "./src/assets/images/projects/search-eng.png"
      },
      {
        "url": "https://try-again-edfam-responsive.netlify.app/",
        "image": "./src/assets/images/projects/edfm.png"
      },
      {
        "url": "https://4links.netlify.app/",
        "image": "./src/assets/images/projects/4-links.png"
      },
      {
        "url": "https://github-scroller.vercel.app/",
        "image": "./src/assets/images/projects/github-scroller.png"
      }
    ]
  };

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = ''; // Clear any existing content
  
    projectsData.projects.forEach(project => {
      // Create the HTML for each project and append it to projectsGrid
      projectsGrid.innerHTML += `
        <div
          class="w-full h-56 lg:h-80 overflow-hidden bg-[url(${project.image})] scale-125 bg-contain bg-no-repeat bg-center flex-box group/projectLink">
          <div>
            <a href="${project.url}" target="_blank" class="pr--bg rounded-md p-1 text-md md:text-xl md:p-2 link-btn transition group-hover/projectLink:opacity-100 opacity-0 text-white">
              Live
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>`;
    });
  }
  
  // Call the function to render projects on page load
  document.addEventListener('DOMContentLoaded', renderProjects);
  
