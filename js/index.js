$(function () {
    let arr = [
        {
            name:'王俊凯',tell:18406586051,py:'wangjunkai'
        },
        {
            name:'王源',tell:18434526051,py:'wangyuan'
        },
        {
            name:'易烊千玺',tell:17506579851,py:'yiyangqianxi'
        },
        {
            name:'张杰',tell:18409621051,py:'zhangjie'
        },
        {
            name:'杨洋',tell:17525463051,py:'yangyang'
        },
        {
            name:'鹿晗',tell:13978965871,py:'luhan'
        },
        {
            name:'于朦胧',tell:18406586051,py:'yumenglong'
        },
        {
            name:'白敬亭',tell:18406586051,py:'baijinngting'
        },
        {
            name:'迪丽热巴',tell:18406586051,py:'dilireba'
        },
        {
            name:'朱梓骁',tell:18758686051,py:'zhuzixiao'
        },
        {
            name:'魏晨',tell:19215666821,py:'weicheng'
        },
        {
            name:'黄晓明',tell:12756789065,py:'huangxiaoming'
        },
        {
            name:'罗志祥',tell:19256871541,py:'luozhixiang'
        },
    ];
    let main=$('main');
    let aside=$('.aside');
    let input=$('input');

    input.on('blur',function () {
        console.log(1);
        let val=$(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val));
        render(newarr);
    });

    // input.on('focus',function () {
    //     console.log(1);
    // });

    render(arr);
    function render(){
        main.empty();
        aside.empty();
        let person ={

        };
    arr.forEach(ele=>{
        let firstChar = ele.py.charAt(0).toUpperCase()
        if(!person[firstChar]){
            person[firstChar] = [];
        }
        person[firstChar].push(ele);
    });
    // console.log(person);
    // console.log(Object.keys(person));
    let keysarr = Object.keys(person).sort();
    let html=``;
    let html1='';
    for(let i=0;i<keysarr.length;i++){
        let ele = keysarr[i];
        html1+=`<li>${ele}</li>`;
        html +=`
            <section>
            <h2>${ele}</h2>
        `;
        for(let j=0;j<person[ele].length;j++){
            let info = person[ele][j];
            html+=`
            <div><a href="tel:${info.tell}">${info.name}</a></div>
            `
        }
        html += `</section>`
    }
        console.log(html);
        aside.html(html1);
        main.html(html);

    }
});