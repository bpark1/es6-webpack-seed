export class Form {
    constructor(question, items, validationFailMessage) {
        // this.stepNumber = stepNumber;
        this.question = question;
        this.items = items;
        this.validationFailMessage = validationFailMessage;

        this.createForm();

        // this.updateButtons();
        // this.init();
    }

    createForm() {
        const formElement = document.createElement('div');

        this.formElement = formElement;

        // formElement.setAttribute('id', `step${this.stepNumber}`);

        formElement.classList.add('form-element');
        formElement.classList.add('survey');
        const formElements = document.querySelectorAll('.form-element');
        const numberOfForms = formElements.length;
        const dataStepNumber = numberOfForms + 1;
        formElement.id = `step${dataStepNumber}`;
        formElement.setAttribute('data-step-number', dataStepNumber);

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        const titleTextElement = document.createElement('p');
        // const titleText = `문제 ${this.stepNumber}`;
        // titleTextElement.innerText = titleText;
        titleTextElement.innerText = `문제 ${dataStepNumber}`;
        titleElement.appendChild(titleTextElement);

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        const questionTextElement = document.createElement('p');
        // const questionText = this.question;
        // questionTextElement.innerText = questionText;
        questionTextElement.innerText = this.question;
        questionElement.appendChild(questionTextElement);

        const answerInputAreaElement = document.createElement('div');

        answerInputAreaElement.classList.add('answer-input-area');


        const buttonsAreaElement = document.createElement('div');
        buttonsAreaElement.classList.add('button-area');
        const prevButton = document.createElement(('button'));
        prevButton.classList.add('prev-button');
        prevButton.innerText = '이전';
        // if (this.stepNumber === 1) {
        //     prevButton.style.block = 'none';
        // }
        const nextButton = document.createElement(('button'));
        nextButton.classList.add('next-button');
        nextButton.innerText = '다음';
        const submitButton = document.createElement(('button'));
        submitButton.classList.add('submit-button');
        submitButton.innerText = '제출';
        // submitButton.style.display = 'none';

        buttonsAreaElement.appendChild(prevButton);
        buttonsAreaElement.appendChild(nextButton);
        buttonsAreaElement.appendChild(submitButton);

        formElement.appendChild(titleElement);
        formElement.appendChild(questionElement);
        formElement.appendChild(answerInputAreaElement);
        formElement.appendChild(buttonsAreaElement);

        const resultElement = document.querySelector('#result');
        resultElement.appendChild(formElement);



    }



    updateButtons() {

    }

    // init() {
    //     this.setListener();
    // }

    setListener() {

        document.querySelector('#survey1-next-btn').onclick = () => {

            let survey1Text = document.querySelector('#survey1-input').value;

            if (survey1Text === '') {
                alert('답변을 입력하셔야합니다.');
                return;
            }

            let survey1area = document.querySelector('#survey1-area');
            let survey2area = document.querySelector('#survey2-area');
            survey1area.style.display = 'none';
            survey2area.style.display = 'block';

        }
    }
}