export class Survey4 {
    constructor(
        configuration = {}
    ) {
        this.init();
    }

    init() {
        this.setListener();
    }

    setListener() {

        document.querySelector('#survey4-before-btn').onclick = () => {

            let survey3area = document.querySelector('#survey3-area');
            let survey4area = document.querySelector('#survey4-area');
            survey3area.style.display = 'block';
            survey4area.style.display = 'none';

        };

        document.querySelector('#survey4-next-btn').onclick = () => {

            let survey4CheckedValue = document.querySelector('#survey4').value;

            if(survey4CheckedValue === '') {
                alert('답변을 선택하셔야합니다.');
                return;
            }

            let survey4area = document.querySelector('#survey4-area');
            let survey5area = document.querySelector('#survey5-area');
            survey4area.style.display = 'none';
            survey5area.style.display = 'block';

        }
    }
}