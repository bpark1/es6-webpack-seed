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
        this.setListener();
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

    inputValidation(formElement) {
        const radioName = formElement.id;
        const inputRadioElements = formElement.querySelectorAll(`[name="${radioName}"]:checked`);

        return inputRadioElements.length !== 0;

    }

    setListener() {

        const formElement = this.formElement;

        const nextButton = formElement.querySelector('.next-button');

        nextButton.onclick = () => {

            const inputTextValidationResult = this.inputValidation(formElement);

            if (!inputTextValidationResult) {
                alert('답변을 선택하셔야합니다.');
                return;
            }

            // let survey1area = document.querySelector('#survey1-area');
            // let survey2area = document.querySelector('#survey2-area');
            // survey1area.style.display = 'none';
            // survey2area.style.display = 'block';

        }
    }

}