/*
 * @Author: xujiawei 
 * @Date: 2024-02-04 19:09:05 
 * @Last Modified by: xujiawei
 * @Last Modified time: 2024-02-04 19:11:34
 */

import { Color } from "cc";

class LogicConfig {
	alphaThreshold: number = 200;
	maxFillCount: number = 30;
}

let logicConfig = new LogicConfig(); 
export default logicConfig;

export const  configColors:Color[] = [
	// 1-30 常见颜色（中文/English/HEX）

	new Color(255, 0, 0, 255),     // 红色 / Red / #FF0000
	new Color(255, 255, 255, 255), // 白色 / White / #FFFFFF
	new Color(0, 0, 0, 255),       // 黑色 / Black / #000000
	new Color(0, 255, 0, 255),     // 绿色 / Green / #00FF00
	new Color(0, 0, 255, 255),     // 蓝色 / Blue / #0000FF
	new Color(255, 255, 0, 255),   // 黄色 / Yellow / #FFFF00
	new Color(0, 255, 255, 255),   // 青色 / Cyan / #00FFFF
	new Color(255, 0, 255, 255),   // 品红 / Magenta / #FF00FF
	new Color(128, 128, 128, 255), // 灰色 / Gray / #808080
	new Color(169, 169, 169, 255), // 深灰 / DarkGray / #A9A9A9
	new Color(255, 165, 0, 255),   // 橙色 / Orange / #FFA500
	new Color(255, 192, 203, 255), // 粉色 / Pink / #FFC0CB
	new Color(165, 42, 42, 255),   // 棕色 / Brown / #A52A2A
	new Color(128, 0, 128, 255),   // 紫色 / Purple / #800080
	new Color(75, 0, 130, 255),    // 靛蓝 / Indigo / #4B0082
	new Color(0, 128, 128, 255),   // 海蓝 / Teal / #008080
	new Color(128, 128, 0, 255),   // 橄榄 / Olive / #808000
	new Color(255, 215, 0, 255),   // 金色 / Gold / #FFD700
	new Color(192, 192, 192, 255), // 银色 / Silver / #C0C0C0
	new Color(255, 229, 180, 255), // 杏色 / Peach / #FFE5B4
	new Color(0, 0, 128, 255),     // 藏青 / Navy / #000080
	new Color(112, 128, 144, 255), // 石板灰 / SlateGray / #708090
	new Color(50, 205, 50, 255),   // 草绿色 / LimeGreen / #32CD32
	new Color(0, 191, 255, 255),   // 深海蓝 / DeepSkyBlue / #00BFFF
	new Color(255, 99, 71, 255),   // 番茄色 / Tomato / #FF6347
	new Color(240, 230, 140, 255), // 卡其 / Khaki / #F0E68C
	new Color(230, 230, 250, 255), // 薰衣草 / Lavender / #E6E6FA
	new Color(160, 82, 45, 255),   // 杏仁褐 / Sienna / #A0522D
	new Color(245, 245, 220, 255), // 米色 / Beige / #F5F5DC
	new Color(255, 127, 80, 255),  // 珊瑚色 / Coral / #FF7F50

];