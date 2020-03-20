import { Form } from './Form'

export class SurveyInputText extends Form {

    constructor(question, items, validationFailMessage) {
        super(question, items, validationFailMessage);
        this.appendAnswerArea();
    }

    appendAnswerArea () {
        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');

        answerInputArea.appendChild(inputText);

    }

    inputValidation(formElement) {
        const inputText = formElement.querySelector('input').value;
        return inputText !== '';
    }

}