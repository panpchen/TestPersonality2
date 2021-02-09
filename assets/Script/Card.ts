// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ScaleButton from "./ScaleButton";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Card extends cc.Component {
  public isSelect: boolean = false;
  onLoad() {
    this.node.on("click", this.fadeBlack, this);
  }

  getName() {
    return this.node.name;
  }
  fadeBlack() {
    this.node.off("click", this.fadeBlack, this);
    this.isSelect = true;
    cc.tween(this.node)
      .to(0.5, { color: new cc.Color().fromHEX("#787878") }, { easing: "fade" })
      .start();
  }
}
