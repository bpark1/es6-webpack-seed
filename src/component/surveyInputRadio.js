import { Form } from './Form'

export class SurveyInputRadio extends Form {

    constructor(question, items, validationFailMessage) {
        super(question, items, validationFailMessage);
        this.appendAnswerArea();
    }

    appendAnswerArea () {
        const items = this.items;
        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        items.forEach((item, index) => {
            const inputRadio = document.createElement('input');
            inputRadio.id = formElement.id + '-' + index;
            inputRadio.type = 'radio';
            inputRadio.name = formElement.id;
            const labelElement = document.createElement('label');
            labelElement.innerText = item;

            answerInputArea.appendChild(inputRadio);
            answerInputArea.appendChild(labelElement);
        });

    }

    inputValidation(formElement) {
        const radioName = formElement.id;
        const inputRadioElements = formElement.querySelectorAll(`[name="${radioName}"]:checked`);
        return inputRadioElements.length !== 0;
    }

}