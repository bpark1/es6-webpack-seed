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
        this.setListener();
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
            inputCheckbox.name = formElement.id;
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

    inputValidation(formElement) {
        const checkboxName = formElement.id;
        const inputCheckboxElements = formElement.querySelectorAll(`[name="${checkboxName}"]:checked`);

        console.log('inputRadioElements = ', inputCheckboxElements);

        return inputCheckboxElements.length !== 0;

    }

    setListener() {

        const formElement = this.formElement;

        const nextButton = formElement.querySelector('.next-button');

        nextButton.onclick = () => {

            const inputTextValidationResult = this.inputValidation(formElement);

            if (!inputTextValidationResult) {
                alert('답변을 하나 이상 선택하셔야합니다.');
                return;
            }

            // let survey1area = document.querySelector('#survey1-area');
            // let survey2area = document.querySelector('#survey2-area');
            // survey1area.style.display = 'none';
            // survey2area.style.display = 'block';

        }
    }

}