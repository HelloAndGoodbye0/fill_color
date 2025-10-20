/*
 * @Author: xujiawei 
 * @Date: 2024-02-04 19:02:41 
 * @Last Modified by: xujiawei
 * @Last Modified time: 2024-02-04 19:15:59
 */

import { Component, Sprite, Texture2D, _decorator, Node, EventTouch, SpriteFrame, ImageAsset, UITransform, v3, Color, ScrollView, Prefab, instantiate } from "cc";
import ColorFilterTexture from "./ColorFillTexture";
import logicConfig, { configColors } from "./LogicConfig";
import { ColorItem } from "./ColorItem";
const { ccclass, property } = _decorator;

@ccclass
export default class GameScene extends Component {
	@property(Texture2D)
	texture2D: Texture2D = null;

	@property(Sprite)
	sprite: Sprite = null;

	@property(ScrollView)
	scrollView: ScrollView = null;

	@property(Prefab)
	colorPrefab: Prefab = null;

	private _colorFillTexture: ColorFilterTexture = null;
	/**
	 * 当前颜色
	 */
	protected _nowClor: Color = null


	protected colorItem:ColorItem[] = [] 

	protected start(): void {
		this.sprite.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
		this.createColorFill(this.texture2D);
		
		//初始化颜色
		this.initColor();
		//默认选中第一个颜色
		this.setSelcet(0);

		this.scheduleOnce(() => {
		    this.scrollView.scrollToLeft(0);
		})
	}

	protected onTouchStart(event: EventTouch): void {
		let location = event.touch.getUILocation();
		let uiTransform = this.sprite.getComponent(UITransform);
		let position = uiTransform.convertToNodeSpaceAR(v3(location.x, location.y, 0));
		this._colorFillTexture.fillTextureColor(this._nowClor, position.x, position.y);


	}
	
	private createColorFill(texture: Texture2D): void {
		this._colorFillTexture = new ColorFilterTexture(texture, logicConfig.alphaThreshold, logicConfig.maxFillCount);
		let spriteFrame = new SpriteFrame();
		spriteFrame.texture = this._colorFillTexture.texture;
		this.sprite.spriteFrame = spriteFrame;
	}

	private onImageLoad(data: string): void {
		let image = new Image();
		image.src = data;
		image.addEventListener('load', () => {
			let texture = new Texture2D();
			texture.image = new ImageAsset(image);
			this.createColorFill(texture);
		});
	}

	protected initColor(): void {
		for (let i = 0; i < configColors.length; i++) {
			let node = instantiate(this.colorPrefab);
			node.parent = this.scrollView.content;
			let com = node.getComponent(ColorItem);
			if(com)
			{
				com.init(i,this.onColorClick.bind(this));
				this.colorItem.push(com);
			}
		}
	}

	protected onColorClick(index:number)
	{
		//设置选中
		this.setSelcet(index);
	}
	/**
	 * 设置选中
	 * @param index 
	 */
	protected setSelcet(index: number)
	{
		for (let i = 0; i < this.colorItem.length; i++) {
			this.colorItem[i].setSelect(i == index);
		}
		//设置颜色
		this._nowClor = configColors[index];
	}
}