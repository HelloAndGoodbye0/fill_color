import { _decorator, Component, EventTouch, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('selectItem')
export class selectItem extends Component {
 
    @property(Sprite)
    sprite: Sprite = null;


    protected onClickCall: Function = null;


    protected start(): void {
        this.node.on(Node.EventType.TOUCH_END, this.onClickItem, this);
    
    }

    protected onClickItem(event:any): void {
        this.onClickCall?.(this.sprite.spriteFrame.texture);
    }

    //设置图片
    setData(sf: SpriteFrame,clickCall: Function): void { 
        this.sprite.spriteFrame = sf;
        this.onClickCall = clickCall;
    }
}


