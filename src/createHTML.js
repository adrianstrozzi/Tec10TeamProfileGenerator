const generateManager = manager => {
  return `
          <div class="m-5 w-72">
          <div class="card bg-blue-500 justify-center items-center rounded-xl">
            <div class="text-center p-5 h-10 mb-5 font-bold">
              <h3 class="uppercase text-white">${manager.name}</h3>
              <div class="flex flex-row justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-400 ml-2 mt-1 fill-emerald-400"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h4 class="role mt-1 text-white">Manager</h4>
              </div>
            </div>
            <br>
            <div class="bg-slate-200 p-5 rounded-b-xl text-center">
              <p class="id pt-2"><span class="font-black">ID: </span>${manager.id}</p>
              <p class="email pt-2"><span class="font-black">Email: </span><a href="mailto:${manager.email}" class="text-sky-500 underline">${manager.email}</a></p>
              <p class="office pt-2"><span class="font-black">Office Number: </span>${manager.officeNumber}</p>
            </div>
          </div>
        </div>
          `;
}


const generateEngineer = engineer => {
  return ` 
    <div class="m-5 w-72">
          <div class="card bg-blue-500 justify-center items-center rounded-xl">
            <div class="text-center p-5 h-10 mb-5 font-bold">
              <h3 class="uppercase text-white">${engineer.name}</h3>
              <div class="flex flex-row justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400 ml-2 mt-1 fill-yellow-400"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 class="role mt-1 text-white">Engineer</h4>
              </div>
            </div>
            <br>
            <div class="bg-slate-200 p-5 rounded-b-xl text-center">
              <p class="id pt-2"><span class="font-black">ID: </span>${engineer.id}</p>
              <p class="email pt-2"><span class="font-black">Email: </span><a href="mailto:${engineer.email}" class="text-sky-500 underline">${engineer.email}</a></p>
              <p class="github pt-2"><span class="font-black">GitHub: </span><a href="https://github.com/${engineer.github}" class="text-sky-500 underline">${engineer.github}</a></p>
            </div>
          </div>
        </div>
    `
}


const generateIntern = intern => {
  return `
  <div class="m-5 w-72">
          <div class="card bg-blue-500 justify-center items-center rounded-xl">
            <div class="text-center p-5 h-10 mb-5 font-bold">
              <h3 class="uppercase text-white">${intern.name}</h3>
              <div class="flex flex-row justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 ml-2 mt-1 fill-pink-500"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <h4 class="role mt-1 text-white">Intern</h4>
              </div>
            </div>
            <br>
            <div class="bg-slate-200 p-5 rounded-b-xl text-center">
              <p class="id pt-2"><span class="font-black">ID: </span>${intern.id}</p>
              <p class="email pt-2"><span class="font-black">Email: </span><a href="mailto:${intern.email}" class="text-sky-500 underline">${intern.email}</a></p>
              <p class="school pt-2"><span class="font-black">School: </span>${intern.school}</p>
            </div>
          </div>
        </div>
    `
};


createHTML = (data) => {

  teamMembersArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];


    if (employee.getRole() === "Manager") {
      const managerInfo = generateManager(employee);

      teamMembersArray.push(managerInfo);
    }

    if (employee.getRole() === "Engineer") {
      const engineerInfo = generateEngineer(employee);

      teamMembersArray.push(engineerInfo);
    }

    if (employee.getRole() === "Intern") {
      const internInfo = generateIntern(employee);

      teamMembersArray.push(internInfo);
    }

  }

  const teamMembers = teamMembersArray.join('')

  const createTeam = createTeamPage(teamMembers);
  return createTeam;
}



const createTeamPage = teamMembers => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;1,700&family=Roboto:wght@100;300&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <nav class="navbar flex flex-col w-full bg-purple-600 h-20 justify-center items-center">
      <h1 class="text-white text-4xl">MY TEAM</h1>
    </nav>
  </header>
  <main>
    <div class="flex justify-center">
      <div class="flex flex-wrap gap-3 justify-center items-center" id="manager-cards">
      ${teamMembers}
      </div>
    </div>
  </main>
</body>
</html>
`;
}

module.exports = createHTML; 