import { Form } from './Form'

export class SurveyTextarea extends Form {

    constructor(question, items, validationFailMessage) {
        super(question, items, validationFailMessage);
        // this.stepNumber = stepNumber;
        // this.question = question;
        // this.items = items;
        //
        // this.createForm();
        //
        // // this.updateButtons();
        // // this.init();

        this.appendAnswerArea();
        this.setListener();
    }

    appendAnswerArea () {

        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        const textareaElement = document.createElement('textarea');
        textareaElement.classList.add('survey5-textarea');

        answerInputArea.appendChild(textareaElement);

    }

    inputValidation(formElement) {
        const textareaElement = formElement.querySelector('textarea');

        let textareaValue = textareaElement.value;

        return textareaValue !== '';

    }

    setListener() {

        const formElement = this.formElement;

        const nextButton = formElement.querySelector('.next-button');
        const submitButton = formElement.querySelector('.submit-button');

        if (nextButton.style.display === '' || nextButton.style.display === 'inline-block') {
            nextButton.onclick = () => {
                const inputTextValidationResult = this.inputValidation(formElement);
                if (!inputTextValidationResult) {
                    alert(this.validationFailMessage);
                    return;
                }
            }
        }

        if (submitButton.style.display === '' || submitButton.style.display === 'inline-block') {
            submitButton.onclick = () => {
                const inputTextValidationResult = this.inputValidation(formElement);
                if (!inputTextValidationResult) {
                    alert(this.validationFailMessage);
                    return;
                }
            }
        }
    }

}