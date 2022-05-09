System.register("chunks:///_virtual/Main.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,a,o,n,i,s,l,g,y,d,c,u,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.initializerDefineProperty,o=e.assertThisInitialized,n=e.defineProperty},function(e){i=e.cclegacy,s=e._decorator,l=e.dragonBones,g=e.Sprite,y=e.resources,d=e.JsonAsset,c=e.SpriteFrame,u=e.Tween,f=e.Vec3,h=e.Component}],execute:function(){var p,m,A,v,B,_,D,b,N;i._RF.push({},"20849xMPERIy5kAsCLyVuTO","Main",void 0);var w=s.ccclass,S=s.property,E="body_idle";e("Main",(p=w("Main"),m=S(l.ArmatureDisplay),A=S([l.ArmatureDisplay]),v=S(g),p((D=t((_=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,a(o(t),"mainBody",D,o(t)),a(o(t),"slot",b,o(t)),a(o(t),"eggNode",N,o(t)),n(o(t),"slotArray",["eye_l","eye_r","ear_l","ear_r","chest","top","top_l","back","back_l","back_r","tail"]),n(o(t),"jsonDataForGame",void 0),n(o(t),"pos",1),n(o(t),"io",void 0),t}r(t,e);var i=t.prototype;return i.onLoad=function(){var e=this,t=this.getParameterByName("eggType"),r=this.getParameterByName("elfGain"),a=this.getParameterByName("pos");if(t)this.showEggAnimtion(Number(t));else if(a&&(this.pos="0"==a?1:-1),null!=r){var o=this.splitStringByNum(r,3);y.load("Json/Elfparts",d,(function(t,r){if(t&&console.log("loadJsonData err: "+t),r){e.jsonDataForGame=r.json.data;var a=e.transferData(o);e.setPartsData(a)}}))}},i.showEggAnimtion=function(e){if(e){var t=this;y.load("Egg/"+e+"/spriteFrame",c,(function(e,r){if(e)console.log("Err : "+e);else if(r&&t.eggNode){t.eggNode.node.active=!0,t.eggNode.spriteFrame=r;var a=new u(t.eggNode.node).to(.3,{eulerAngles:new f(0,0,-8)}),o=new u(t.eggNode.node).to(.1,{eulerAngles:new f(0,0,6)}),n=new u(t.eggNode.node).to(.1,{eulerAngles:new f(0,0,0)}),i=new u(t.eggNode.node).delay(4);new u(t.eggNode.node).sequence(a,o,n,i).repeatForever().start()}}))}},i.transferData=function(e){for(var t=["","","","","","","","","","","",""],r=0;r<e.length;++r){var a=this.jsonDataForGame[e[r]],o=a.part;3==o?(t[1]=a.id,t[2]=a.id):4==o?(t[3]=a.id,t[4]=a.id):5==o?t[5]=a.id:1==o?t[6]=a.id:2==o?t[7]=a.id:6==o?t[8]=a.id:7==o?(t[9]=a.id,t[10]=a.id):8==o?t[11]=a.id:0==o&&(t[0]=a.id)}return t},i.setPartsData=function(e){for(var t=e[0],r=[],a=1;a<e.length;++a)r.push(e[a]);this.setElfBody(t,r)},i.setElfBody=function(e,t){var r=this;y.loadDir("ElvesKing/"+e,(function(e,a){if(0!=a.length){for(var o=[],n=0;n<a.length;++n)a[n]instanceof l.DragonBonesAsset&&(o[0]=a[n]),a[n]instanceof l.DragonBonesAtlasAsset&&(o[1]=a[n]);r.mainBody.dragonAsset=o[0],r.mainBody.dragonAtlasAsset=o[1],r.mainBody.armatureName="elfKing",r.mainBody.playAnimation(E,0),r.mainBody.node.setScale(1.8*r.pos,1.8,1.8),r.elvesKingSlotMatch(t,r.slot,r.mainBody)}else y.loadDir("ElvesKing/body_beast_1",(function(e,a){if(a){for(var o=[],n=0;n<a.length;++n)a[n]instanceof l.DragonBonesAsset&&(o[0]=a[n]),a[n]instanceof l.DragonBonesAtlasAsset&&(o[1]=a[n]);r.mainBody.dragonAsset=o[0],r.mainBody.dragonAtlasAsset=o[1],r.mainBody.armatureName="elfKing",r.mainBody.playAnimation(E,0),r.mainBody.node.setScale(1.8*r.pos,1.8,1.8),r.elvesKingSlotMatch(t,r.slot,r.mainBody)}}))}))},i.elvesKingSlotMatch=function(e,t,r){for(var a=l.CCFactory.getInstance(),o=r.armature(),n=0;n<e.length;++n)if(""!=e[n]){var i=o.getSlot(this.slotArray[n]);if(null==i){console.error("美術素材 : 精靈王本體 = "+r.dragonAsset.name+"節點 : "+this.slotArray[n]+"名稱錯誤，請美術人員修正");continue}var s=!1;if("eye_l"==this.slotArray[n]||"eye_r"==this.slotArray[n]){var g=this.slotArray[n].substring(this.slotArray[n].length-2,this.slotArray[n].length),y=a.replaceSlotDisplay(t[n].getArmatureKey(),this.slotArray[n],e[n]+"_1"+g,this.slotArray[n]+"/"+e[n]+"_1"+g,i,0),d=a.replaceSlotDisplay(t[n].getArmatureKey(),this.slotArray[n],e[n]+"_2"+g,this.slotArray[n]+"/"+e[n]+"_2"+g,i,2);y&&d||(s=!0)}else if("ear_l"==this.slotArray[n]||"ear_r"==this.slotArray[n]||"back_l"==this.slotArray[n]||"back_r"==this.slotArray[n]){var c=this.slotArray[n].substring(this.slotArray[n].length-2,this.slotArray[n].length);a.replaceSlotDisplay(t[n].getArmatureKey(),this.slotArray[n],e[n]+c,this.slotArray[n]+"/"+e[n]+c,i,0)||(s=!0)}else{a.replaceSlotDisplay(t[n].getArmatureKey(),this.slotArray[n],e[n],e[n],i,0)||(s=!0)}s&&console.log("配件缺少 : "+e[n])}else{var u=o.getSlot(this.slotArray[n]);if(null==u){console.error("美術素材 : 精靈王本體 = "+r.dragonAsset.name+"節點 : "+this.slotArray[n]+"名稱錯誤，請美術人員修正");continue}u.displayIndex=-1,u.displayController=""}o.invalidUpdate()},i.getParameterByName=function(e,t){var r=window.location;if(r){var a=r.href;if(a){t||(t=a),e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}}},i.splitStringByNum=function(e,t){for(var r=[],a=0,o=e.length;a<o;a+=t)r.push(e.substring(a,a+t));return r},t}(h)).prototype,"mainBody",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(_.prototype,"slot",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),N=t(_.prototype,"eggNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=_))||B));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Main.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});