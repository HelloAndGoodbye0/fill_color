import { _decorator, Color, Component, Node, Sprite } from 'cc';
import { configColors } from './LogicConfig';
const { ccclass, property } = _decorator;

@ccclass('ColorItem')
export class ColorItem extends Component {

    @property(Sprite)
    sprite: Sprite = null;

    @property(Node)
    selectNode: Node = null;

    protected onClickCall: Function = null;


    get color(): Color {
        return this.sprite.color;
    }

    protected _index: number = 0;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    protected onTouchStart(event: any) {
        this.onClickCall?.(this._index);
    }

    init(index: number, callback: Function) 
    {
        this._index = index;
        let color = configColors[index]    
        this.sprite.color = color;
        this.onClickCall = callback;
    }

    setSelect(select: boolean) {
        this.selectNode.active = select;
    }



}


