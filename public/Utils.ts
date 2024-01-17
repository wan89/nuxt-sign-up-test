import { useGtag } from "vue-gtag-next";

/** 문자열로된 이미지 바이너리 데이터를 이미지 파일 데이터로 변환시킵니다, */
export function dataURLtoFile(dataurl:string, fileName:string){
    const arr:Array<String> = dataurl.split(',');

    let mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type:mime});
}

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

/** 구글 트래킹용 */
export function gaTrack (name:string,label:string) {
    useGtag().event(name, {
        'event_category' : 'click',
        'event_label' : label
    });
}
