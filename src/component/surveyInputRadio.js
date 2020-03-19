import { Form } from './Form'

export class SurveyInputRadio extends Form {

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
            const inputRadio = document.createElement('input');
            // inputRadio.setAttribute('type', 'radio');

            inputRadio.id = formElement.id + '-' + index;
            inputRadio.type = 'radio';
            inputRadio.name = formElement.id;
            const labelElement = document.createElement('label');
            labelElement.innerText = item;



            answerInputArea.appendChild(inputRadio);
            answerInputArea.appendChild(labelElement);
        });

    }

}