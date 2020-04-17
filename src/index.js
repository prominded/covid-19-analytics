/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error","windows"] */
/* eslint-disable quotes */

import covid19ImpactEstimator, 
{
 impactEstimatorOutput, regionData, populationData,
  hospitalBedsData, normalizeDays 
// eslint-disable-next-line import/extensions
} from './estimator.js';

function processForm(e) {
  e.preventDefault();
  console.log("impact Object...beginining.");

  const data = {
    pType: "Days",
    tElapse: normalizeDays(document.getElementById('periodType'), document.getElementById('timeToElapse')),
    rCases: document.getElementById('reportedCases'),
    pop: document.getElementById('population'),
    tBeds: document.getElementById('totalHospitalBeds')
};

covid19ImpactEstimator({
    region: regionData, 
    periodType: data.pType,
    timeToElapse: data.tElapse, 
    reportedCases: data.rCases,
    population: data.pop, 
    totalHospitalBeds: data.tBeds 
 });
  console.log("impact Object...");

  impactEstimatorOutput(covid19ImpactEstimator);
  console.log(`Hello there, ${impactEstimatorOutput.infectionsByRequestedTime}`);
}

document.addEventListener('DOMContentLoaded', (e) => {
 const impForm = document.getElementById('form');
  console.log("My Form Object");
  console.log(impForm);
  
  document.getElementById('population').value = populationData.getDefaultPopulation();
  document.getElementById('totalHospitalBeds').value = hospitalBedsData.getDefaultBeds();
  console.log("impact Object...end.");

  impForm.addEventListener('submit', processForm(e));
});


