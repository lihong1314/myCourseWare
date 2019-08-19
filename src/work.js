import { hashHistory } from "react-router";

window.ToPage=function(page){
    if(window.data[page].type==="img"){
        hashHistory.replace("/Page1"+"?id="+page)//中教讲解动态页面
    }
    if(window.data[page].type==="video"){
        hashHistory.replace("/Page2"+"?id="+page)//视频
    }
    if(window.data[page].type==="word"){
        hashHistory.replace("/Page3"+"?id="+page)//单词 Gif
    }
    if(window.data[page].type==="sentence"){//句子 Gif
        hashHistory.replace("/Page4"+"?id="+page)
    }
    if(window.data[page].type==="sentenceLight"){//句子高亮
        hashHistory.replace("/Page5"+"?id="+page)
    }
    if(window.data[page].type==="wordgame1"){ // 抓娃娃
        hashHistory.replace("/Page6"+"?id="+page)
    }
    if(window.data[page].type==="wordgame2"){ // 松鼠跳水
        hashHistory.replace("/Page7"+"?id="+page)
    }
    if(window.data[page].type==="wordgame3"){ // 接糖果
        hashHistory.replace("/Page8"+"?id="+page)
    }
    if(window.data[page].type==="wordgame4"){ // 打地鼠
        hashHistory.replace("/Page9"+"?id="+page)
    }
    if(window.data[page].type==="endGame1"){// 课中结束游戏 糖果树
        hashHistory.replace("/Page10"+"?id="+page)
    }
    if(window.data[page].type==="sentencegame1"){ // 南瓜车
        hashHistory.replace("/Page12"+"?id="+page)
    }
    if(window.data[page].type==="sentencegame2"){ // 小鸡叫
        hashHistory.replace("/Page13"+"?id="+page)
    }
    if(window.data[page].type==="summary"){//开始 结束 总结 页面
        hashHistory.replace("/Page14"+"?id="+page)
    }
    if(window.data[page].type==="wordgame5"){ // 黄金矿工
        hashHistory.replace("/Page15"+"?id="+page)
    }
    if(window.data[page].type==="endGame2"){// 课中结束游戏  摩天轮
        hashHistory.replace("/Page16"+"?id="+page)
    }
    if(window.data[page].type==="endGift"){// 课中结束游戏（抽奖）
        hashHistory.replace("/Page17"+"?id="+page)
    }
    if(window.data[page].type==="sentencegame3"){ // 机器人（拖拽）
        hashHistory.replace("/Page18"+"?id="+page)
    }
    if(window.data[page].type==="wordgame6"){ // 恐龙蛋
        hashHistory.replace("/Page19"+"?id="+page)
    }
    if(window.data[page].type==="wordgame7"){ // 气球爆炸
        hashHistory.replace("/Page21"+"?id="+page)
    }
} 

window.exec=function(){
    window.clickTip=1    
}


window.yanshiFn = function(that,src){
    that.setState({
        yanshiShow:'block',
        yanshisrc:src,
    })
    setTimeout(() => {
        that.setState({
            yanshiShow:'none',
            yanshisrc:''
        })
    }, 5000);
}
localStorage.setItem('sentencegame1',1);
localStorage.setItem('sentencegame2',1);
localStorage.setItem('sentencegame3',1);
localStorage.setItem('endGame',1);

window.JAMS_showJb = function(params) {
    if (/android/i.test(navigator.userAgent)) {
        try {
            window.androidApi.showJb(params)
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            window.webkit.messageHandlers.sendCapNumberClick.postMessage(params)
        } catch (e) {
            console.log(e)
        }
    }
}
    
window.JAMS_Answer = function(params) {
    console.log("params:",params)
    if (/android/i.test(navigator.userAgent)) {
        try {
            window.androidApi.answerResult(params)
        } catch (e) {
            // console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            window.webkit.messageHandlers.answerResult.postMessage(params)
        } catch (e) {
            // console.log(e)
        }
    }
}