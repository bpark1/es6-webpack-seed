export class Form {
    constructor(stepNumber, question, items) {
        this.stepNumber = stepNumber;
        this.question = question;
        this.items = items;

        this.createForm();
        this.setVisibility();
        this.updateButtons();
        this.init();
    }

    createForm() {
        const formElement = document.createElement('div');
        // formElement.setAttribute('id', `step${this.stepNumber}`);
        formElement.id = `step${this.stepNumber}`;
        formElement.classList.add('form-element');
        formElement.setAttribute('data-step-number', this.stepNumber);

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        const titleTextElement = document.createElement('p');
        // const titleText = `문제 ${this.stepNumber}`;
        // titleTextElement.innerText = titleText;
        titleTextElement.innerText = `문제 ${this.stepNumber}`;

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        const questionTextElement = document.createElement('p');
        // const questionText = this.question;
        // questionTextElement.innerText = questionText;
        questionTextElement.innerText = this.question;
        questionElement.appendChild(questionTextElement);

        const answerInputAreaElement = document.createElement('div');


        const buttonsAreaElement = document.createElement('div');
        const prevButton = document.createElement(('button'));
        prevButton.classList.add('prev-button');
        prevButton.innerText = '이전';
        // if (this.stepNumber === 1) {
        //     prevButton.style.block = 'none';
        // }
        const nextButton = document.createElement(('button'));
        prevButton.classList.add('next-button');
        nextButton.innerText = '다음';
        const submitButton = document.createElement(('button'));
        submitButton.classList.add('next-button');
        submitButton.innerText = '제출';
        submitButton.style.display = 'none';

        formElement.appendChild(titleElement);
        formElement.appendChild(questionElement);
        formElement.appendChild(answerInputAreaElement);
        formElement.appendChild(buttonsAreaElement);



    }

    setVisibility() {
        // if (this.stepNumber === 1) {
        //     const prevButton = document.querySelector('.prev-button');
        //     prevButton.style.block = 'none';
        // }

        const formElements = document.querySelectorAll('.form-element');
        const numberOfForms = formElements.length;

        let formNumberList = [];
        let maxFormNumber = -1;

        formElements.forEach((formElement) => {
            const dataStepNumber = formElement.getAttribute('data-step-number');
            const stepNumber = parseInt(dataStepNumber);
            formNumberList.push(parseInt(stepNumber));

            if (stepNumber === 1) {
                const prevButton = formElement.querySelector('.prev-button');
                prevButton.style.block = 'none';
            }

            if (stepNumber === formElements.length) {
                const nextButton = formElement.querySelector('.next-button');
                nextButton.style.block = 'none';

                const submitButton = formElement.querySelector('.submit-button');
                submitButton.style.block = 'inline-block';
            }

            if (stepNumber > maxFormNumber) {
                maxFormNumber = stepNumber;
            }
        });

    }

    updateButtons() {

    }

    init() {
        this.setListener();
    }

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