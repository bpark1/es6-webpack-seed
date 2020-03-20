import { Form } from './Form'

export class SurveyTextarea extends Form {

    constructor(question, items, validationFailMessage) {
        super(question, items, validationFailMessage);
        this.appendAnswerArea();
    }

    appendAnswerArea () {
        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');
        const textareaElement = document.createElement('textarea');
        textareaElement.classList.add('survey5-textarea');

        answerInputArea.appendChild(textareaElement);

    }

    inputValidation(formElement) {
        console.log('textarea inputValidation');
        const textareaElement = formElement.querySelector('textarea');
        let textareaValue = textareaElement.value;
        return textareaValue !== '';
    }

}