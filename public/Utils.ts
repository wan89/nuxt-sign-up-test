export const REG_EXP = {
    /**  */
    PASSWORD_TEST: (password:string) => /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(password),
    /**  */
    EMAIL_TEST: (email:string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    PHONE_TEST: (phone:string) => /^0\d{1,3}[-\s]?(\d{3,4}[-\s]?\d{4})$/.test(phone),

    KR_NAME_TEST: (name:string) => /^[가-힣]{2,}$/.test(name),
    EN_NAME_TEST: (name:string) => /^[a-zA-Z]{3,}$/.test(name),
};

/** string에 끼워있는 BR 태그를 강제개행으로 변경시켜 리턴시킵니다 */
export function stringToBrTag(str:string){ 
    return str? str.replace(/\n/g, "<br />") : null
};

/** 한자리의 Number값을 0을 앞에 붙인 string으로 리턴시킵니다 */
export function numberChange(num:number) { return ( num>9)? num : '0'+num;};

/** 클립보드에 string값을 카피라이트 시킵니다 */
export function copyToClipBoard(textToCopy:string) {
    const tmpTextField = document.createElement("textarea")
    tmpTextField.textContent = textToCopy
    tmpTextField.setAttribute("style","position:absolute; right:200%;")
    document.body.appendChild(tmpTextField)
    tmpTextField.select()
    tmpTextField.setSelectionRange(0, 99999) /*For mobile devices*/
    document.execCommand("copy");
    tmpTextField.remove();
    alert('주소가 클립보드에 \n복사 되었습니다.');
};

/** 날짜 포맷을 YYYY-MM-DD hh:mm:ss로 변환시켜 리턴합니다 */
export function dateFormat(date:any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
