// TODO: Create a function that generates an HTML webpage that displays summaries for each person

const Employee = ["Engineer", "Intern", "Manager"];

const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3 class="name">${engineer.name}</h3>
        <h4 class="role">
          <img src="https://img.icons8.com/color/43/workstation.png" />
          Engineer
        </h4>
      </div>

      <div class="card-body">
        <p class="id">${engineer.id}</p>
        <p class="email">
          Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
        </p>
        <p class="github">${engineer.github}</p>
      </div>
    </div>
  </div>
  `;
};


const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3 class="name">${intern.name}</h3>
        <h4 class="role">
          <img src="https://img.icons8.com/color-glass/43/tidy-shelf.png" />
          Intern
        </h4>
      </div>

      <div class="card-body">
        <p class="id">${intern.id}</p>
        <p class="email">
          Email: <a href="mailto:${intern.email}">${intern.email}</a>
        </p>
        <p class="school">${intern.school}</p>
      </div>
    </div>
  </div>
  `;
};

const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3 class="name">${manager.name}</h3>
        <h4 class="role">
          <img src="https://img.icons8.com/external-itim2101-flat-itim2101/25/external-office-desk-work-from-home-itim2101-flat-itim2101-1.png" />
          Manager
        </h4>
      </div>

      <div class="card-body">
        <p class="id">${manager.id}</p>
        <p class="email">
          Email: <a href="mailto:">${manager.email}</a>
        </p>
        <p class="office-number">${manager.officeNumber}</p>
      </div>
    </div>
  </div>
  `;
};

// TODO: Create a function to generate cards for HTML


generateHTML = (data) => {
  createCard = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      createCard.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      createCard.push(internCard);
    }

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      createCard.push(ManagerCard);
    }
  }


  const teamCards = createCard.join("")

  




module.exports = generateHTML;
