// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: heart;
// 在这里快速添加纪念日
let specifiedDates = [
  { name: "宝宝的生日", month: 1, day: 1 },
  { name: "相恋纪念日", month: 1, day: 1 },
  { name: "情人节", month: 2, day: 14 },
  { name: "520", month: 5, day: 20 },
  { name: "我的生日", month: 1, day: 1 }
];


function zhoNianRi(month, day) {
  let now = new Date()
  let inputDate = new Date(now.getFullYear(), month - 1, day)
  if (inputDate < now) {
    inputDate.setFullYear(now.getFullYear() + 1)
  } 
  let diff = inputDate.getTime() - now.getTime()
  let days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  console.log("f.zhoNianRi:" + days);
  return days
}
function linJinRiQi() {
  let nearestDate = null;
  let nearestDaysRemaining = Infinity;
  specifiedDates.forEach(date => {
    let daysRemaining = zhoNianRi(date.month, date.day);
    if (daysRemaining < nearestDaysRemaining) {
      nearestDaysRemaining = daysRemaining;
      nearestDate = date;
    }
  });
  if (nearestDate && nearestDaysRemaining < 30) {
    console.log("f.linJinRiQi:" + `name：${nearestDate.name} day：${nearestDaysRemaining}`);
    return `距离${nearestDate.name}还有${nearestDaysRemaining}天`;
  } else {
    console.log("f.linJinRiQi:" + ``);
    return ""; 
  }
}
function getTime() {
  let now = new Date()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  let timeString = `${hours}:${minutes}:${seconds}`
  console.log("f.getTime:" + timeString);
  return timeString
}
function zhengJiShi(year, month, day) {
  let now = new Date()
  let inputDate = new Date(year, month - 1, day)
  let diff = now.getTime() - inputDate.getTime()
  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  console.log("f.zhengJiShi:" + days);
  return days
}
//一言
function getYiYan() {
  var yiYanList = [
    "古池塘，蛙飞过，水面起涟漪。",
    "行尸走肉之地，人非人类之乡。",
    "清晨的阳光洒在大地上，给予希望。",
    "黑夜笼罩大地，寂静无声。",
  ];
  var randomIndex = Math.floor(Math.random() * yiYanList.length);
  var randomYiYan = yiYanList[randomIndex];
  console.log("f.getYiYan:" + randomYiYan);
  return randomYiYan;
}
//520一言
function get520YiYan() {
  var yiYanList = [
    "愿我们的爱情更加坚定",
    "520，让我陪你走过每一个美好瞬间",
    "你是我生命中最美好的礼物",
    "祝福我们的520充满爱意和甜蜜",
  ];
  var randomIndex = Math.floor(Math.random() * yiYanList.length);
  var randomYiYan = yiYanList[randomIndex];
  console.log("f.get520YiYan:" + randomYiYan);
  return randomYiYan;
}
function ziDinYiYanSe(colors, startPoint, endPoint) {
  let gradient = new LinearGradient();
  gradient.colors = colors.map(color => new Color(color));
  gradient.locations = [0, 1];
  gradient.startPoint = startPoint;
  gradient.endPoint = endPoint;
  widget.backgroundGradient = gradient;
  console.log("f.ziDinYiYanSe: " + gradient);
}
function moban1(title1,text1,text2,text3,text4,text5,text6){
  console.log("f.moban1");
  let stack = widget.addStack()
  stack.layoutVertically()
  stack.centerAlignContent()
  let upperStack = stack.addStack()
  upperStack.layoutHorizontally()
  let leftStack = upperStack.addStack()
  leftStack.layoutVertically()
  let leftTop = leftStack.addStack()
  leftTop.addSpacer()
  let title = leftTop.addText(title1)
  title.font = Font.boldSystemFont(52)
  title.textColor = Color.white()
  leftTop.addSpacer()
  let rightStack = upperStack.addStack()
  rightStack.layoutVertically()
  let dateText = rightStack.addText(text1)
  dateText.font = Font.systemFont(20)
  dateText.textColor = Color.white()
  let secondLineText = rightStack.addText(text2)
  secondLineText.font = Font.systemFont(20)
  secondLineText.textColor = Color.white()
  let thirdLineText = rightStack.addText(text3)
  thirdLineText.font = Font.systemFont(20)
  thirdLineText.textColor = Color.white()
  stack.addSpacer(10)
  let test1Text = stack.addText(text4)
  test1Text.font = Font.systemFont(20)
  test1Text.textColor = Color.white()
  let test2Text = stack.addText(text5)
  test2Text.font = Font.systemFont(20)
  test2Text.textColor = Color.white()
  let test3Text = stack.addText(text6)
  test3Text.font = Font.systemFont(20)
  test3Text.textColor = Color.white()
}
function moban1c(title1,pt1,Color1,text1,pt2,Color2,text2,pt3,Color3,text3,pt4,Color4,text4,pt5,Color5,text5,pt6,Color6,text6,pt7,Color7){
  console.log("f.moban1c");
  let stack = widget.addStack()
  stack.layoutVertically()
  stack.centerAlignContent()
  let upperStack = stack.addStack()
  upperStack.layoutHorizontally()
  let leftStack = upperStack.addStack()
  leftStack.layoutVertically()
  let leftTop = leftStack.addStack()
  leftTop.addSpacer()
  let title = leftTop.addText(title1)
  title.font = Font.boldSystemFont(pt1)
  title.textColor = new Color(Color1)
  leftTop.addSpacer()
  let rightStack = upperStack.addStack()
  rightStack.layoutVertically()
  let dateText = rightStack.addText(text1)
  dateText.font = Font.systemFont(pt2)
  dateText.textColor = new Color(Color2)
  let secondLineText = rightStack.addText(text2)
  secondLineText.font = Font.systemFont(pt3)
  secondLineText.textColor = new Color(Color3)
  let thirdLineText = rightStack.addText(text3)
  thirdLineText.font = Font.systemFont(pt4)
  thirdLineText.textColor = new Color(Color4)
  stack.addSpacer(10)
  let test1Text = stack.addText(text4)
  test1Text.font = Font.systemFont(pt5)
  test1Text.textColor = new Color(Color5)
  let test2Text = stack.addText(text5)
  test2Text.font = Font.systemFont(pt6)
  test2Text.textColor = new Color(Color6)
  let test3Text = stack.addText(text6)
  test3Text.font = Font.systemFont(pt7)
  test3Text.textColor = new Color(Color7)
}
// 默认渐变
function moRenJianBian(){
  let gradient = new LinearGradient()
  gradient.colors = [new Color("#FFDAB9"), new Color("#87CEFA")]
  gradient.locations = [0, 1]
  gradient.startPoint = new Point(0, 0)
  gradient.endPoint = new Point(1, 1)
  widget.backgroundGradient = gradient
  console.log("f.moRenJianBian:" + gradient);
}
// 晚霞红
function wanXiaHong(){
  let gradient = new LinearGradient();
  gradient.locations = [0, 1];
  gradient.colors = [
    new Color("#FF3FAC"),
    new Color("#FFAA33"),
    new Color("#FFEA00"),
    new Color("#00F6FF"),
  ];
  widget.backgroundGradient = gradient;
  console.log("f.wanXiaHong:" + gradient);
}
//夕阳余晖
function xiYangYuHui(){
  let gradient = new LinearGradient()
  gradient.locations = [0, 0.5, 1]
  gradient.colors = [
    new Color("#FF9F00"),
    new Color("#FF2E00"),
    new Color("#FF9F00")
  ]
  gradient.startPoint = new Point(0, 0)
  gradient.endPoint = new Point(1, 1)
  widget.backgroundGradient = gradient
  console.log("f.xiYangYuHui:" + gradient);
}
//晨曦之恋
function chenXiZhiLian(){
  let gradient = new LinearGradient()
  gradient.locations = [0, 1]
  gradient.colors = [
    new Color("#FFB6C1"),
    new Color("#FF8C00")
  ]
  widget.backgroundGradient = gradient
  console.log("f.chenXiZhiLian:" + gradient);
}
// 520内容
function qingRenJie520(){
  console.log("f.qingRenJie520");
  let stack = widget.addStack()
  stack.layoutVertically()
  stack.centerAlignContent()
  let upperStack = stack.addStack()
  upperStack.layoutHorizontally()
  let leftStack = upperStack.addStack()
  leftStack.layoutVertically()
  let leftTop = leftStack.addStack()
  leftTop.addSpacer()
  let title = leftTop.addText("520")
  title.font = Font.boldSystemFont(52.01314)
  title.textColor = Color.white()
  leftTop.addSpacer()
  let rightStack = upperStack.addStack()
  rightStack.layoutVertically()
  let now = new Date()
  let currentYear = now.getFullYear()
  let dateText = rightStack.addText(`${currentYear}年5月20日`)
  dateText.font = Font.systemFont(16)
  dateText.textColor = Color.white()
  let secondLineText = rightStack.addText("520快乐")
  secondLineText.font = Font.systemFont(16)
  secondLineText.textColor = Color.white()
  let thirdLineText = rightStack.addText("Ta&Ta")//名字
  thirdLineText.font = Font.systemFont(16)
  thirdLineText.textColor = Color.white()
  stack.addSpacer(10)
  //这里更改纪念日
  ciShu520 = zhengJiShi(2000,01,20) / 365 + 1
  let test1Text = stack.addText(getTime() + '｜今年是第' + parseInt(ciShu520) + "个520")
  test1Text.font = Font.systemFont(16)
  test1Text.textColor = Color.white()
  //这里更改纪念日
  let test2Text = stack.addText("我们已经一起走过" + zhengJiShi(2000,01,20) + "天")
  test2Text.font = Font.systemFont(16)
  test2Text.textColor = Color.white()
  let test3Text = stack.addText(get520YiYan())
  test3Text.font = Font.systemFont(16)
  test3Text.textColor = Color.white()
}
// 默认恋爱正计时
function lianAiZhengJiShi(){
  console.log("f.lianAiZhengJiShi");
  let stack = widget.addStack()
  let leftText = stack.addText("❤️恋爱正计时❤️")
  leftText.leftAlignText()
  leftText.font = Font.boldSystemFont(20)
  stack.addSpacer()
  let now = new Date()
  let timeString = now.toLocaleTimeString()
  let rightText = stack.addText(timeString)
  rightText.rightAlignText("❤️" + linJinRiQi() + "❤️")
  rightText.font = Font.boldSystemFont(15)
  //这里更改纪念日
  let yuHeXiangLian = widget.addText("❤️与她相恋" + zhengJiShi(2000,01,20) + "天❤️")
  yuHeXiangLian.font = Font.boldSystemFont(15)
  if (linJinRiQi()){
    let linJinRiQi1 = widget.addText("❤️" + linJinRiQi() + "❤️")
    linJinRiQi1.font = Font.boldSystemFont(15)
  }
  let today = new Date();
  let isAprilTwelfth = today.getMonth() === 1 && today.getDate() === 20;
  if (isAprilTwelfth) {
    let xiangLianZhouNianRi = widget.addText("❤️周年日就是今天❤️");
    xiangLianZhouNianRi.font = Font.boldSystemFont(15)
  } else {
    //这里更改纪念日
    let xiangLianZhouNianRi = widget.addText("❤️距离周年还有 " + zhoNianRi(1, 20) + "天❤️");
    xiangLianZhouNianRi.font = Font.boldSystemFont(15)
    let yiyan = widget.addText("「" + getYiYan() + "」");
    yiyan.font = Font.boldSystemFont(13)
  }
}
let widget = new ListWidget()
widget.setPadding(16, 16, 16, 16)

// 判断日期
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; 
const currentDay = currentDate.getDate();
if (currentMonth === 5 && currentDay === 20) {
  wanXiaHong()
  qingRenJie520()
} else if (currentMonth === 1 && currentDay === 1) {
  xiYangYuHui()
  lianAiZhengJiShi()
} else {
  moRenJianBian()
  lianAiZhengJiShi()
}

if (config.runsInWidget) {
  Script.setWidget(widget)
} else {
  widget.presentMedium()
}
Script.complete()