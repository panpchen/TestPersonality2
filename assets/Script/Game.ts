// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Card from "./Card";
import ResultUI from "./ResultUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  @property(ResultUI)
  resultUI: ResultUI = null;

  private _selectCardTypes: string[] = [];

  onLoad() {
    cc.director.on("click", this._onClickCard, this);
    this.resultUI.onHide();
  }

  _onClickCard(card: cc.Node) {
    if (this._selectCardTypes.length === 2) {
      return;
    }

    const c = card.getComponent(Card);
    if (!c.isSelect) {
      this._selectCardTypes.push(c.getName());
    }

    if (this._selectCardTypes.length == 2) {
      this.scheduleOnce(() => {
        this.resultUI.onShow(this._selectCardTypes);
      }, 1);
    }
  }
}
