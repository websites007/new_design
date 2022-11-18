const ResumeCards = document.querySelector('.resume__inner');

const data = [
    {
        "title": "Experience",
        "name": "Google",
        "course": "UX Design Intern",            
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. ",
        "years": "May 2022 - Present",
    },
    {
        "title": "Education",
        "name": "Univesity Name ",
        "course": "Course Take",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. ",
        "years": "May 2022 - Present",
    },
    {
        "title": "Skills",
        "text": "Interaction Design, Wireframing, Copywriting, User Research, Wireframe, Story boarding",
    },
    {
        "title": "Tools",
        "text": "Sketch, Figma, Photoshop, Invsion, ProtoPie",
    },
    {
        "title": "Contact",
        "tel": "+91 822 4444 222",
        "email": "email@emailaddress.com",
    }
]


const html = data.map(item => {
    const title = item.title;
    const name = item.name;
    return `
    <div class="resume__card">
        <h1 class="resume__title">
            ${title}
        </h1>
        <div class="resume__card--content">
            <div class="resume__card--top">
                <div class="resume__top--left">
                    <h1>
                        ${name}
                    </h1>
                    <h2>
                        ${item.course}
                    </h2>
                </div>
                <h3>
                    ${item.years}
                </h3>
            </div>
            <div class="resume__text">
                ${item.text}
            </div>
        </div>
    </div>

    `;
})


ResumeCards.innerHTML = html;