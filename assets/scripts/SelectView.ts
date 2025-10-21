import { _decorator, Component, instantiate, Node, Prefab, ScrollView, SpriteFrame,Texture2D } from 'cc';
import { selectItem } from './selectItem';
const { ccclass, property } = _decorator;
//https://m.jianbihua.com/ 美术资源网站
@ccclass('SelectView')
export class SelectView extends Component {


    @property(Node)
    btn_back: Node = null;


    @property([SpriteFrame])
    sfs: SpriteFrame[] = [];


    @property(Prefab)
    prefabItem: Prefab = null
    
    @property(ScrollView)
    scrollView: ScrollView = null

    protected selectFunc: (texture:Texture2D)=>void = null;
    protected selectItems: selectItem[] = [];

    start() {
        this.btn_back.on(Node.EventType.TOUCH_START,this.onClickBack,this)

        this.sfs.forEach((sf,index)=>{
            let item = instantiate(this.prefabItem);
            this.scrollView.content.addChild(item);
            let com = item.getComponent(selectItem);
            if(com)
            {
                this.selectItems.push(com);
                com.setData(this.sfs[index], (texture: Texture2D) => {
                    this.show(false);
                    this.selectFunc(texture);
                })
            }
        })
        
    }

    protected onClickBack() {
        console.log("点击了返回");
        this.show(false)
    }

    /**
     * 是否显示选择面板
     * @param b 
     */
    show(b: boolean) { 
        this.node.active = b;
        if(b)
        {
            this.scrollView.scrollToTop(0);
        }
    }
    /**
     * 设置选择回调
     * @param fun 
     */
    setSelectFunc(fun: (texture:Texture2D)=>void ) {
        this.selectFunc = fun;
    }
}


