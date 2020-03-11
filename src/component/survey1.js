export class Survey1 {
    constructor(
        configuration = {}
    ) {
        this.init();
    }

    init() {
        this.setListener();
    }

    setListener() {

        document.querySelector('#survey1-next-btn').onclick = () => {
            console.log('button clicked');

            let survey1Text = document.querySelector('#survey1-input').value;
            console.log('survey1_text = ', survey1Text);

            if (survey1Text === '') {
                alert('답변을 입력하셔야합니다.');
                return;
            }

            let survey1area = document.querySelector('#survey1-area');
            let survey2area = document.querySelector('#survey2-area');
            survey1area.style.display = 'none';
            survey2area.style.display = 'block';

            console.log('문항1 완료');

        }
    }
}