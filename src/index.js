import './style.css';
import './survey.css';

import { SurveyInputText } from './component/surveyInputText';
import { SurveyInputRadio } from './component/surveyInputRadio';
import { SurveyInputCheckbox } from './component/surveyInputCheckbox';
import { SurveySelect } from './component/surveySelect';
import { SurveyTextarea } from './component/surveyTextarea';

const execute = () => {

    const surveyInputText = new SurveyInputText('1 더하기 1은?', [], '답변을 입력하셔야합니다.');
    const surveyInputRadio = new SurveyInputRadio('1 더하기 1은??', [111, 222], '답변을 선택하셔야합니다.');
    const surveyInputCheckbox = new SurveyInputCheckbox('1 더하기 1은???', [-5, -2, 0, 1, 2], '답변을 하나 이상 선택하셔야합니다.');
    const surveySelect = new SurveySelect('1 더하기 1은???', [1, 2, 3, 4, 5], '답변을 선택하셔야합니다.');
    const surveyTextarea = new SurveyTextarea('1 더하기 1은???', [], '답변을 입력하셔야합니다.');
    const surveyTextarea1 = new SurveyTextarea('1 더하기 1은???', [], '답변을 입력하셔야합니다.');
};

execute();

let setVisibility = () => {
    // if (this.stepNumber === 1) {
    //     const prevButton = document.querySelector('.prev-button');
    //     prevButton.style.block = 'none';
    // }

    // console.log('let setVisibility');

    const formElements = document.querySelectorAll('.form-element');
    const numberOfForms = formElements.length;

    // console.log('formElements = ', formElements);
    // console.log('numberOfForms = ', numberOfForms);

    let formNumberList = [];
    let maxFormNumber = -1;

    formElements.forEach((formElement) => {
        const dataStepNumber = formElement.getAttribute('data-step-number');
        // console.log('dataStepNumber = ', dataStepNumber);
        const stepNumber = parseInt(dataStepNumber);
        formNumberList.push(parseInt(stepNumber));

        if (stepNumber === 1) {
            const prevButton = formElement.querySelector('.prev-button');

            // console.log('stepNumber 1 prevButton = ', prevButton);
            prevButton.style.display = 'none';

        }

        if (stepNumber === formElements.length) {
            // console.log('if (stepNumber === formElements.length), formElement = ', formElement);
            const nextButton = formElement.querySelector('.next-button');
            // console.log('stepNumber 3 nextButton = ', nextButton);
            nextButton.style.display = 'none';

            const submitButton = formElement.querySelector('.submit-button');
            // console.log('stepNumber 3 submitButton = ', submitButton);
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

// setVisibility();