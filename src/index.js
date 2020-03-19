import './style.css';
import './survey.css';

// import { Survey1 } from './component/survey1';
// import { Survey2 } from './component/survey2';
// import { Survey3 } from './component/survey3';
// import { Survey4 } from './component/survey4';
// import { Survey5 } from './component/survey5';

const excute = () => {
    // const survey1 = new Survey1();
    // const survey2 = new Survey2();
    // const survey3 = new Survey3();
    // const survey4 = new Survey4();
    // const survey5 = new Survey5();
};

excute();

let setVisibility = () => {
    // if (this.stepNumber === 1) {
    //     const prevButton = document.querySelector('.prev-button');
    //     prevButton.style.block = 'none';
    // }

    const formElements = document.querySelectorAll('.form-element');
    const numberOfForms = formElements.length;

    let formNumberList = [];
    let maxFormNumber = -1;

    formElements.forEach((formElement) => {
        const dataStepNumber = formElement.getAttribute('data-step-number');
        const stepNumber = parseInt(dataStepNumber);
        formNumberList.push(parseInt(stepNumber));

        if (stepNumber === 1) {
            const prevButton = formElement.querySelector('.prev-button');
            prevButton.style.block = 'none';
        }

        if (stepNumber === formElements.length) {
            const nextButton = formElement.querySelector('.next-button');
            nextButton.style.block = 'none';

            const submitButton = formElement.querySelector('.submit-button');
            submitButton.style.block = 'inline-block';
        }

        if (stepNumber > maxFormNumber) {
            maxFormNumber = stepNumber;
        }
    });

};