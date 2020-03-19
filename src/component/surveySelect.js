import { Form } from './Form'

export class SurveySelect extends Form {

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

        const selectElement = document.createElement('select');

        const defaultSelectOption = document.createElement('option');
        defaultSelectOption.hidden = true;
        defaultSelectOption.innerText = '답을 선택하시오';
        defaultSelectOption.value = '';

        selectElement.appendChild(defaultSelectOption);



        items.forEach((item, index) => {
            const selectOption = document.createElement('option');
            // inputRadio.setAttribute('type', 'radio');

            selectOption.id = formElement.id + '-' + index;

            selectOption.value = item;
            selectOption.innerText = item;

            selectElement.appendChild(selectOption);



            // answerInputArea.appendChild(inputRadio);
            // answerInputArea.appendChild(labelElement);
        });

        answerInputArea.appendChild(selectElement);

    }

}