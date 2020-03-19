import { Form } from './Form'

export class SurveyInputCheckbox extends Form {

    constructor(question, items) {
        super(question, items);
        // this.stepNumber = stepNumber;
        // this.question = question;
        // this.items = items;
        //
        // this.createForm();
        //
        // // this.updateButtons();
        // // this.init();

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
            // inputRadio.setAttribute('type', 'radio');

            inputCheckbox.id = formElement.id + '-' + index;
            inputCheckbox.type = 'checkbox';
            // inputCheckbox.name = formElement.id;
            const labelElement = document.createElement('label');
            labelElement.innerText = item;

            // answerInputArea.appendChild(inputCheckbox);
            // answerInputArea.appendChild(labelElement);

            checkboxRow.appendChild(inputCheckbox);
            checkboxRow.appendChild(labelElement);

            answerInputArea.appendChild(checkboxRow);
        });

    }

}