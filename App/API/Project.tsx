import db from "../database/db";

const collectionRef = db.collection("projects");

export async function addProject(projectDetails) {
  await collectionRef
    .doc()
    .set({
      name: projectDetails.name,
      cost: projectDetails.cost,
    })
    .then(() => console.log(projectDetails));
}
