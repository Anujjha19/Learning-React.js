import { useEffect } from 'react';

const useTitleCountCH = (count) => {
    useEffect(() => {
        console.log('I am First One');
        if (count >= 1) {
            document.title = `${count} times Clicked`;
        } else {
            document.title = `Chats`;
        }
    }, [count]);
};

export default useTitleCountCH;