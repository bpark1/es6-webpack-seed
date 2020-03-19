import './style.css';
import './survey.css';

// import { Survey1 } from './component/survey1';
// import { Survey2 } from './component/survey2';
// import { Survey3 } from './component/survey3';
// import { Survey4 } from './component/survey4';
// import { Survey5 } from './component/survey5';

import { SurveyInputText } from './component/surveyInputText';
import { SurveyInputRadio } from './component/surveyInputRadio';
import { SurveyInputCheckbox } from './component/surveyInputCheckbox';
import { SurveySelect } from './component/surveySelect';
import { SurveyTextarea } from './component/surveyTextarea';

const execute = () => {
    // const survey1 = new Survey1();
    // const survey2 = new Survey2();
    // const survey3 = new Survey3();
    // const survey4 = new Survey4();
    // const survey5 = new Survey5();

    const surveyInputText = new SurveyInputText('1 더하기 1은?', []);
    const surveyInputRadio = new SurveyInputRadio('1 더하기 1은??', []);
    const surveyInputCheckbox = new SurveyInputCheckbox('1 더하기 1은???', []);
    const surveySelect = new SurveySelect('1 더하기 1은???', []);
    const surveyTextarea = new SurveyTextarea('1 더하기 1은???', []);
};

execute();

let setVisibility = () => {
    // if (this.stepNumber === 1) {
    //     const prevButton = document.querySelector('.prev-button');
    //     prevButton.style.block = 'none';
    // }

    console.log('let setVisibility');

    const formElements = document.querySelectorAll('.form-element');
    const numberOfForms = formElements.length;

    console.log('formElements = ', formElements);
    console.log('numberOfForms = ', numberOfForms);

    let formNumberList = [];
    let maxFormNumber = -1;

    formElements.forEach((formElement) => {
        const dataStepNumber = formElement.getAttribute('data-step-number');
        console.log('dataStepNumber = ', dataStepNumber);
        const stepNumber = parseInt(dataStepNumber);
        formNumberList.push(parseInt(stepNumber));

        if (stepNumber === 1) {
            const prevButton = formElement.querySelector('.prev-button');

            console.log('stepNumber 1 prevButton = ', prevButton);
            prevButton.style.display = 'none';

        }

        if (stepNumber === formElements.length) {
            console.log('if (stepNumber === formElements.length), formElement = ', formElement);
            const nextButton = formElement.querySelector('.next-button');
            console.log('stepNumber 3 nextButton = ', nextButton);
            nextButton.style.display = 'none';

            const submitButton = formElement.querySelector('.submit-button');
            console.log('stepNumber 3 submitButton = ', submitButton);
            submitButton.style.display = 'inline-block';
        } else {
            const submitButton = formElement.querySelector('.submit-button');
            submitButton.style.display = 'none';
        }

        if (stepNumber > maxFormNumber) {
            maxFormNumber = stepNumber;
        }
    });

};

setVisibility();