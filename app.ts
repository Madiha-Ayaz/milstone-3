interface Resume {
    name: string;
    email: string;
    phone: string;
    location: string|number;
    education: string;
    skills: string;
    experience: string;
  }
  
  // Type alias for input elements
  type InputElement = HTMLInputElement;
  type TextAreaElement = HTMLTextAreaElement;
  
  // Function to update resume display
  const updateResume = (resume: Resume): void => {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>${resume.name}</h2>
        <p>Email: ${resume.email}</p>
        <p>Phone: ${resume.phone}</p>
        <p>Location: ${resume.location}</p>
        <h3>Education</h3>
        <p>${resume.education}</p>
        <h3>Skills</h3>
        <p>${resume.skills}</p>
        <h3>Experience</h3>
        <p>${resume.experience}</p>
      `;
    } else {
      console.error('Resume Output element not found');
    }
  };
  
  
  document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
  
   
    const nameElement = document.getElementById("name") as InputElement;
    const emailElement = document.getElementById("email") as InputElement;
    const phoneElement = document.getElementById("phone") as InputElement;
    const locationElement = document.getElementById("location") as InputElement;
    const educationElement = document.getElementById("education") as TextAreaElement;
    const skillsElement = document.getElementById("skills") as TextAreaElement;
    const experienceElement = document.getElementById("experience") as TextAreaElement;
  
   
    if (nameElement && emailElement && phoneElement && locationElement && educationElement && skillsElement && experienceElement) {
      
      const resumeData: Resume = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
        location: locationElement.value,
        education: educationElement.value,
        skills: skillsElement.value,
        experience: experienceElement.value,
      };
  
      
      updateResume(resumeData);
    } else {
      console.error('One or more form elements are missing');
    }
  });
  



  const handleResize = (): void => {
    const mobileView = window.matchMedia("(max-width: 600px)");
  
    if (mobileView.matches) {
      
      console.log("Switching to mobile view");
      document.body.style.fontSize = "14px";
    } else {
      
      console.log("Switching to desktop view");
      document.body.style.fontSize = "16px";
    }
  };
  
  
  window.addEventListener("resize", handleResize);
  
  