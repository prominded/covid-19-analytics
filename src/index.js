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
  const data = {
    pType: "Days",
    tElapse: normalizeDays(document.getElementById('periodType'), document.getElementById('timeToElapse')),
    rCases: document.getElementById('reportedCases'),
    pop: document.getElementById('population'),
    tBeds: document.getElementById('totalHospitalBeds')
};

 const imputData = covid19ImpactEstimator({
    region: regionData, 
    periodType: data.pType,
    timeToElapse: data.tElapse, 
    reportedCases: data.rCases,
    population: data.pop, 
    totalHospitalBeds: data.tBeds 
 });

 const outputData = impactEstimatorOutput(imputData);
}

document.addEventListener('DOMContentLoaded', (e) => {
 const impForm = document.getElementById('impactForm');
  document.getElementById('population').value = populationData.getDefaultPopulation();
  document.getElementById('totalHospitalBeds').value = hospitalBedsData.getDefaultBeds();
  impForm.addEventListener('submit', processForm(e));
});


