// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { PERSON_DATAS } from "./Constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultUI extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;
  @property(cc.Node)
  bg: cc.Node = null;

  onShow(types: string[]) {
    const checkType = types.join("");
    for (let data of PERSON_DATAS) {
      if (data.type === checkType) {
        this.label.string = `${data.type}: ${data.txt}`;
      }
    }
    cc.tween(this.bg).to(0.02, { scale: 1.2 }).to(0.5, { scale: 1 }).start();
    this.node.active = true;
  }

  onHide() {
    this.node.active = false;
  }

  exitGame() {
    cc.game.end();
  }
}
