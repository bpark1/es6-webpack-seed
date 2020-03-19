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
        this.setListener();
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

    inputValidation(formElement) {
        let selectValue = formElement.querySelector('select').value;

        return selectValue !== '';

    }

    setListener() {

        const formElement = this.formElement;

        const nextButton = formElement.querySelector('.next-button');
        const inputText = formElement.querySelector('input');


        nextButton.onclick = () => {

            const inputTextValidationResult = this.inputValidation(formElement);

            if(!inputTextValidationResult) {
                alert('답변을 선택하셔야합니다.');
                return;
            }

            // let survey1Text = inputText.value;
            //
            // if (survey1Text === '') {
            //     alert('답변을 입력하셔야합니다.');
            //     return;
            // }

            // let survey1area = document.querySelector('#survey1-area');
            // let survey2area = document.querySelector('#survey2-area');
            // survey1area.style.display = 'none';
            // survey2area.style.display = 'block';

        }
    }

}