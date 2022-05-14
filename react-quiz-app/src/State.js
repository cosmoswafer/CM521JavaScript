const state = {
    corrects: 0,
    currentIndex: 0,
    buttonClass: ['', '', '', ''],
    statusBarWidth: '1%',
    topics: [
        {
            question: 'JavaScript 與 Java 有什麼關係？',
            answers: [
                {
                    value: '同公司的產品',
                    correct: false,
                },
                {
                    value: '新版與舊版的關係',
                    correct: false,
                },
                {
                    value: '一點關係也沒有',
                    correct: true,
                },
                {
                    value: 'JavaScript 是 Java 的 Web 版本',
                    correct: false,
                },
            ],
        },
        {
            question: '發明 React JS 的公司是？',
            answers: [
                {
                    value: 'Google',
                    correct: false,
                },
                {
                    value: 'Facebook',
                    correct: true,
                },
                {
                    value: 'Apple',
                    correct: false,
                },
                {
                    value: 'Microsoft',
                    correct: false,
                },
            ],
        },
    ],
};

export default state;
