window.__require=function t(e,o,i){function n(c,s){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var a="function"==typeof __require&&__require;if(!s&&a)return a(p,!0);if(r)return r(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var h=o[c]={exports:{}};e[c][0].call(h.exports,function(t){return n(e[c][1][t]||t)},h,h.exports,t,e,o,i)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({Anchor:[function(t,e,o){"use strict";cc._RF.push(e,"b34b316K/NGAb6xW5mEGOtX","Anchor");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c,s=cc._decorator,p=s.ccclass,a=s.property;(function(t){t[t.Top=0]="Top",t[t.Bottom=1]="Bottom",t[t.Left=2]="Left",t[t.Right=3]="Right"})(c||(c={}));var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=c.Left,e.left=0,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(){this.updateAnchor()},e.prototype.updateAnchor=function(){var t=cc.view.getDesignResolutionSize().width/2*-1+this.left;this.node.position=cc.v3(Math.max(t,cc.view.getFrameSize().width/2*-1+this.left),this.node.position.y,this.node.position.z)},r([a(cc.Canvas)],e.prototype,"canvas",void 0),r([a],e.prototype,"type",void 0),r([a],e.prototype,"left",void 0),r([p],e)}(cc.Component);o.default=h,cc._RF.pop()},{}],CameraScript:[function(t,e,o){"use strict";cc._RF.push(e,"d5b955v07NCKZ6oSZ77/2yO","CameraScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.time=0,e.resetting=!1,e.resetCallback=null,e}return n(e,t),e.prototype.start=function(){this.targetPosition=this.node.position},e.prototype.update=function(t){this.time+=t,this.node.position=cc.Vec3.lerp(this.node.position,this.node.position,this.targetPosition,.2*this.time),this.time>=1&&(this.resetting=!1,null!=this.resetCallback&&(this.resetCallback(),this.resetCallback=null))},e.prototype.AddHeight=function(t){this.resetting||(this.time=0,this.targetPosition=cc.v3(this.targetPosition.x,this.targetPosition.y+t,this.targetPosition.z))},e.prototype.ResetHeight=function(t){this.time=0,this.resetting=!0,this.resetCallback=t,this.targetPosition=cc.v3(this.targetPosition.x,0,this.targetPosition.z)},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],DraggableScript:[function(t,e,o){"use strict";cc._RF.push(e,"6af61XMDRZMyK6AjI77Gl29","DraggableScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./HandScript"),s=cc._decorator,p=s.ccclass,a=s.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.holdDistance=100,e.throwThreshold=60,e.throwSpeed=2e3,e.holdAudio=null,e.holdCancelAudio=null,e.touchAudio=null,e.gravityScale=2,e.baseSprite=null,e.cloudSprite=null,e.normalSprite=null,e.normalSprite2=null,e.tumamiSprite=null,e.fallSprite=null,e.body=null,e.delta=cc.Vec2.ZERO,e.lastPosition=cc.Vec2.ZERO,e.rotationTheta=0,e.firstPosition=cc.Vec3.ZERO,e.mainOpacityRate=1,e.isInitialized=!1,e.isViewCloud=!0,e.isHold=!1,e.isDrop=!1,e.isDropped=!1,e.isDestroying=!1,e.droppedPosition=cc.Vec3.ZERO,e.handScript=null,e}return n(e,t),e.prototype.onLoad=function(){this.body=this.getComponent(cc.RigidBody)},e.prototype.start=function(){this.lastPosition=cc.v2(this.node.position),this.rotationTheta=40*Math.random()-20,this.droppedPosition=this.node.position,this.baseSprite.spriteFrame=this.normalSprite;var t=cc.find("Canvas/Main Camera/TapScreen");t.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),t.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),t.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this),this.firstPosition=this.node.position,this.node.setPosition(240+100*Math.sin(.3*this.rotationTheta),this.firstPosition.y+50*this.mainOpacityRate),this.node.opacity=255-255*this.mainOpacityRate},e.prototype.update=function(t){if(this.isDestroying)return this.cloudSprite.node.opacity=0,this.mainOpacityRate=Math.max(0,this.mainOpacityRate+2*t),this.node.opacity=255-255*this.mainOpacityRate,void(this.mainOpacityRate>=1&&this.onDestroy());this.isDestroying||(this.node.position.y<cc.Camera.main.node.position.y-1e3&&(this.body.type=cc.RigidBodyType.Static),0==this.isDrop&&0==this.isHold&&(this.mainOpacityRate=Math.max(0,this.mainOpacityRate-2*t),this.node.setPosition(240+100*Math.sin(.3*this.rotationTheta),this.firstPosition.y+50*this.mainOpacityRate),this.node.opacity=255-255*this.mainOpacityRate,this.isInitialized=this.mainOpacityRate<=0),0==this.isViewCloud&&(this.cloudSprite.node.opacity-=1020*t),this.isHold&&(this.rotationTheta+=.1,this.node.angle=10*Math.sin(this.rotationTheta)),this.isDrop||this.node.setPosition(240+100*Math.sin(.3*this.rotationTheta),this.node.position.y),this.isDropped&&this.droppedPosition.y>this.node.position.y+100&&this.gameOverCallback(),this.isDrop&&!this.isDropped&&this.droppedPosition.y>this.node.position.y+1e3&&this.gameOverCallback())},e.prototype.onBeginContact=function(){if(0==this.isDropped){var t=Math.floor(3*Math.random()%3);0==t?this.baseSprite.spriteFrame=this.normalSprite:1==t?this.baseSprite.spriteFrame=this.normalSprite2:2==t&&(this.baseSprite.spriteFrame=this.fallSprite),cc.audioEngine.playEffect(this.touchAudio,!1)}this.isDropped=!0,this.droppedPosition=this.node.position,this.onHoldEndForce()},e.prototype.onEndContact=function(){},e.prototype.onPostSolve=function(){},e.prototype.onTouchStart=function(t){this.onHoldStart(t)},e.prototype.onTouchMove=function(t){this.isHold&&(this.body.linearVelocity=cc.Vec2.ZERO,this.delta=cc.v2(this.delta.x+t.getDeltaX(),this.delta.y+t.getDeltaY()),cc.Camera.main.getWorldToScreenPoint(t.getLocation(),this.lastPosition))},e.prototype.onTouchEnd=function(t){this.onHoldEnd(t)},e.prototype.onHoldStart=function(t){if(!this.isHold&&!this.isDrop&&0!=this.isInitialized){cc.audioEngine.playEffect(this.holdAudio,!1),this.isHold=!0,this.body.gravityScale=0,this.body.linearVelocity=cc.Vec2.ZERO,this.baseSprite.spriteFrame=this.tumamiSprite;var e=cc.instantiate(this.handPrefab);this.handScript=e.getComponent(c.default),this.handScript.SetTarget(this.node),this.handScript.SetDraw(!0),this.handScript.SetOffset(cc.v2(21,40)),this.handScript.SetZIndex(this.node.zIndex-1),e.setParent(this.node.parent),this.mainOpacityRate=0,this.node.opacity=255,this.isViewCloud=!1,this.cloudSprite.node.parent=this.node.parent,this.cloudSprite.node.position=cc.v3(this.node.position.x,this.node.position.y-100,this.node.position.z),this.cloudSprite.node.zIndex=this.node.zIndex-1,cc.v2(t.getLocationX(),t.getLocationY()+cc.Camera.main.node.position.y-.5*this.node.height)}},e.prototype.onHoldEnd=function(){this.isDrop||0!=this.isHold&&0!=this.isInitialized&&(this.isDrop=!0,this.body.gravityScale=this.gravityScale,this.body.linearVelocity=cc.Vec2.UP,this.baseSprite.spriteFrame=this.fallSprite,null!=this.handScript&&this.handScript.SetDraw(!1),cc.audioEngine.playEffect(this.holdCancelAudio,!1),this.isHold=!1)},e.prototype.onHoldEndForce=function(){this.onHoldEnd(null)},e.prototype.onGameover=function(){console.log("hamu on gameover."),this.isDestroying=!0,null!=this.handScript&&this.handScript.SetDraw(!1)},e.prototype.onDestroy=function(){this.node.destroy()},r([a],e.prototype,"holdDistance",void 0),r([a],e.prototype,"throwThreshold",void 0),r([a],e.prototype,"throwSpeed",void 0),r([a(cc.AudioClip)],e.prototype,"holdAudio",void 0),r([a(cc.AudioClip)],e.prototype,"holdCancelAudio",void 0),r([a(cc.AudioClip)],e.prototype,"touchAudio",void 0),r([a(cc.Float)],e.prototype,"gravityScale",void 0),r([a(cc.Sprite)],e.prototype,"baseSprite",void 0),r([a(cc.Sprite)],e.prototype,"cloudSprite",void 0),r([a(cc.Prefab)],e.prototype,"handPrefab",void 0),r([a(cc.SpriteFrame)],e.prototype,"normalSprite",void 0),r([a(cc.SpriteFrame)],e.prototype,"normalSprite2",void 0),r([a(cc.SpriteFrame)],e.prototype,"tumamiSprite",void 0),r([a(cc.SpriteFrame)],e.prototype,"fallSprite",void 0),r([p],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./HandScript":"HandScript"}],EventBlocker:[function(t,e,o){"use strict";cc._RF.push(e,"91d37SZHTJAtoHw/6iEzRSm","EventBlocker");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onEvent,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onEvent,this)},e.prototype.onEvent=function(){},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],HandScript:[function(t,e,o){"use strict";cc._RF.push(e,"78898uAAqFMEIPkSkrnNDF6","HandScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fronthand=null,e.backhand=null,e.destroying=!1,e.draw=!1,e.opacityRate=0,e.target=null,e.offset=cc.Vec2.ZERO,e}return n(e,t),e.prototype.start=function(){this.backhand.node.setParent(this.node.parent)},e.prototype.update=function(t){this.draw?this.opacityRate=Math.min(1,this.opacityRate+10*t):this.destroying&&(this.opacityRate=Math.max(0,this.opacityRate-10*t),this.opacityRate<=0&&this.Destroy()),null!=this.target&&(this.node.position=cc.v3(this.target.position.x+this.offset.x,this.target.position.y+this.offset.y,this.target.position.z),this.backhand.node.position=this.node.position),this.node.opacity=255*this.opacityRate,this.backhand.node.opacity=255*this.opacityRate},e.prototype.SetZIndex=function(t){this.backhand.node.zIndex=t},e.prototype.SetTarget=function(t){this.target=t},e.prototype.SetDraw=function(t){this.draw=t,t&&0==this.destroying?(this.opacityRate=0,this.node.opacity=0,this.backhand.node.opacity=0):(this.destroying=!0,this.draw=!1)},e.prototype.SetOffset=function(t){this.offset=t},e.prototype.Destroy=function(){this.node.destroy(),this.backhand.node.destroy()},r([p(cc.Sprite)],e.prototype,"fronthand",void 0),r([p(cc.Sprite)],e.prototype,"backhand",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],ResultScript:[function(t,e,o){"use strict";cc._RF.push(e,"6f355MGXP9I+J/Uz+D2aSCf","ResultScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprite=null,e.defaultSprite=null,e.floatingSprite=null,e.downSprite=null,e.buttonAudio=null,e.score=0,e}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onShareClick,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_UP,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_ENTER,this.onMouseEnter,this),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.onMouseLeave,this)},e.prototype.onMouseEnter=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onMouseLeave=function(){this.sprite.spriteFrame=this.defaultSprite},e.prototype.onTouchUp=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onShareClick=function(){var t,e;cc.audioEngine.playEffect(this.buttonAudio,!1),this.sprite.spriteFrame=this.downSprite,t=(t="\u304b\u306a\u30cf\u30e0\u3092"+this.score+"\u5339\u3064\u307f\u3042\u3052\u307e\u3057\u305f\uff01")+" "+escape("#")+"\u304b\u306a\u30cf\u30e0\u3064\u307f\u3064\u307f",e="http://twitter.com/share?url="+escape("https://yuk124pg.github.io/kanahamu-tumitumi/")+"&text="+t,null==window.open(e,"_blank","width=600,height=300")&&(location.href=e)},e.prototype.update=function(){},r([p(cc.Sprite)],e.prototype,"sprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"defaultSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"floatingSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"downSprite",void 0),r([p(cc.AudioClip)],e.prototype,"buttonAudio",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],ResultText:[function(t,e,o){"use strict";cc._RF.push(e,"496aelfh0xJL4qpGUVbGV+G","ResultText");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){},e.prototype.setScore=function(t){this.resultLabel.string="\u304b\u306a\u30cf\u30e0\u3092\n\n"+t+"\u5339\u3064\u307f\u307e\u3057\u305f\uff01"},r([p(cc.Label)],e.prototype,"resultLabel",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],RetryScript:[function(t,e,o){"use strict";cc._RF.push(e,"5dc9aoK7eNJPIBYlcQGL7V5","RetryScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprite=null,e.defaultSprite=null,e.floatingSprite=null,e.downSprite=null,e.buttonAudio=null,e.action=null,e}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onShareClick,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_UP,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_ENTER,this.onMouseEnter,this),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.onMouseLeave,this)},e.prototype.onMouseEnter=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onMouseLeave=function(){this.sprite.spriteFrame=this.defaultSprite},e.prototype.onTouchUp=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onShareClick=function(){this.sprite.spriteFrame=this.downSprite,cc.audioEngine.playEffect(this.buttonAudio,!1),null!=this.action&&this.action()},e.prototype.update=function(){},r([p(cc.Sprite)],e.prototype,"sprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"defaultSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"floatingSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"downSprite",void 0),r([p(cc.AudioClip)],e.prototype,"buttonAudio",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],SoundScript:[function(t,e,o){"use strict";cc._RF.push(e,"f6eb8z3tkZMIL8zMHiwx0lZ","SoundScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bgmVolume=.1,e.effectVolume=.5,e.isMute=!0,e}return n(e,t),e.prototype.start=function(){cc.audioEngine.playMusic(this.bgm,!0),cc.audioEngine.setMusicVolume(0),cc.audioEngine.setEffectsVolume(0),this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)},e.prototype.onTouchStart=function(){var t=this.bgmVolume,e=this.effectVolume;this.isMute?(t=this.bgmVolume,e=this.effectVolume,this.isMute=!1,this.sprite.spriteFrame=this.normalSprite,console.log("sound on")):(t=0,e=0,this.isMute=!0,this.sprite.spriteFrame=this.muteSprite,console.log("sound off")),cc.audioEngine.setEffectsVolume(e),cc.audioEngine.setMusicVolume(t)},r([p(cc.AudioClip)],e.prototype,"bgm",void 0),r([p(cc.Sprite)],e.prototype,"sprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"normalSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"muteSprite",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],WorldScript:[function(t,e,o){"use strict";cc._RF.push(e,"1bfacB1CNJLAaK8AgfCIGTA","WorldScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./CameraScript"),s=t("./DraggableScript"),p=t("./ResultScript"),a=t("./ResultText"),h=t("./RetryScript"),u=cc._decorator,l=u.ccclass,d=u.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.score=0,e.beforeScore=0,e.hamuCount=0,e.isGameOver=!1,e.hamuList={},e}return n(e,t),e.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0},e.prototype.start=function(){var t=this;this.cameraScript=cc.Camera.main.getComponent(c.default),this.retryButton.action=function(){t.onResultDisable()}},e.prototype.update=function(){this.isGameOver||(null==this.currentHamu&&(console.log("first pop"),this.pop()),null!=this.currentHamu&&this.currentHamu.isDropped&&(console.log("next pop"),this.pop()))},e.prototype.pop=function(){var t=this,e=cc.instantiate(this.kanahamu);this.currentHamu=e.getComponent(s.default);var o=Object.values(this.hamuList).map(function(t){return t.node.position.y}),i=o.indexOf(Math.max.apply(null,o)),n=0;if(i>=0&&(n=this.hamuList[i].node.position.y-100),this.score=Math.floor(n/100),this.scoreLabel.string=this.score.toString()+" \u5339",n>300&&this.score>this.beforeScore&&this.cameraScript.AddHeight(100),this.beforeScore=this.score,this.hamuList[Object.values(this.hamuList).length]=this.currentHamu,this.currentHamu.gameOverCallback=function(){t.onGameOver()},this.currentHamu.node.parent=this.node.parent,this.currentHamu.node.position=cc.v3(240,665+this.cameraScript.targetPosition.y,0),this.currentHamu.node.scale=1,this.currentHamu.node.position.y>this.backParent.position.y){var r=cc.instantiate(this.backSpace);r.setParent(this.backParent),r.position=cc.v3(0,1e3,0),this.backParent=r}this.node.parent.setContentSize(480,this.currentHamu.node.position.y+300),console.log("pop:"+this.currentHamu.node.position.toString())},e.prototype.onGameOver=function(){0==this.isGameOver&&(console.log("game over"),this.isGameOver=!0,this.resultText.setScore(this.score),this.twitterButton.score=this.score,this.resultParent.active=!0)},e.prototype.onResultDisable=function(){var t=this;this.resultParent.active=!1,this.cameraScript.ResetHeight(function(){t.currentHamu=null,t.isGameOver=!1}),Object.values(this.hamuList).forEach(function(t){t.onGameover()}),this.hamuList={}},r([d(cc.Prefab)],e.prototype,"kanahamu",void 0),r([d(cc.Label)],e.prototype,"scoreLabel",void 0),r([d(cc.Node)],e.prototype,"resultParent",void 0),r([d(p.default)],e.prototype,"twitterButton",void 0),r([d(cc.Node)],e.prototype,"backParent",void 0),r([d(a.default)],e.prototype,"resultText",void 0),r([d(h.default)],e.prototype,"retryButton",void 0),r([d(cc.Prefab)],e.prototype,"backSpace",void 0),r([l],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./CameraScript":"CameraScript","./DraggableScript":"DraggableScript","./ResultScript":"ResultScript","./ResultText":"ResultText","./RetryScript":"RetryScript"}]},{},["Anchor","CameraScript","DraggableScript","EventBlocker","HandScript","ResultScript","ResultText","RetryScript","SoundScript","WorldScript"]);