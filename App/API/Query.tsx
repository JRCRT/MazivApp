import db from "../database/db";

const project = db.collection("projects");
const account = db.collection("accounts");

export async function addProject(projectDetails) {
  const { projectName, cost, dateCreated, completionDate } = projectDetails;
  await project
    .doc()
    .set({
      projectName: projectName,
      dateCreated: dateCreated,
      completionDate: completionDate,
      cost: cost,
      location: "Valenzuela City",
    })
    .then(() => console.log(projectDetails));
}

export async function addAccount(accountDetails) {
  const { username, password, fullname, role } = accountDetails;
  await account
    .doc()
    .set({
      username: username,
      password: password,
      fullname: fullname,
      role: role,
    })
    .then(() => console.log(accountDetails));
}
