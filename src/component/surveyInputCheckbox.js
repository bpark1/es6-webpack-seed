import { Form } from './Form'

export class SurveyInputCheckbox extends Form {

    constructor(question, items, validationFailMessage) {
        super(question, items, validationFailMessage);
        this.appendAnswerArea();
    }

    appendAnswerArea () {
        const items = this.items;
        // console.log('items = ', items);

        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        items.forEach((item, index) => {
            const checkboxRow = document.createElement('div');
            const inputCheckbox = document.createElement('input');

            inputCheckbox.id = formElement.id + '-' + index;
            inputCheckbox.type = 'checkbox';
            inputCheckbox.name = formElement.id;

            const labelElement = document.createElement('label');
            labelElement.innerText = item;

            checkboxRow.appendChild(inputCheckbox);
            checkboxRow.appendChild(labelElement);

            answerInputArea.appendChild(checkboxRow);
        });

    }

    inputValidation(formElement) {
        const checkboxName = formElement.id;
        const inputCheckboxElements = formElement.querySelectorAll(`[name="${checkboxName}"]:checked`);

        return inputCheckboxElements.length !== 0;

    }

}