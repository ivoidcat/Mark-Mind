const free={
    name:'free',
    text:'彩虹',
    use:true,
    config:{
        //主根节点
        'main-root-fill':'rgb(212, 212, 170)',             //填充色
        'main-root-stroke':'transparent',           //边框
        'main-root-textFill':'#fff',         //字体颜色
        'main-root-fontSize':'18',         //字体大小
        'main-root-textPadding':[18,14,18,14],
        //二级节点
        'second-node-fill':'#fff',
        'second-node-stroke':'transparent',
        'second-node-textFill':'#666',
        'second-node-fontSize':'14',
        'second-node-textPadding':[9,14,8,14],
        'distance':40,                  //根节点与二级节点之间的距离
        //自由节点（根节点）
        'free-root-fill':'#fff',
        'free-root-stroke':'transparent',
        'free-root-textFill':'#666',
        'free-root-fontSize':'14',
        'free-root-textPadding':[9,14,8,14],
        //自由节点（二级节点）
        'free-second-node-fill':'#9F8759',
        'free-second-node-stroke':'transparent',
        'free-second-node-textFill':'#fff',
        'free-second-node-fontSize':'12',
        'free-second-node-textPadding':[6,10,5,10],
        'free-distance':30,               //自由根节点与二级节点之间的距离
        //普通节点
        'node-fill':'rgb(255, 255, 204)',
        'node-stroke':'transparent',
        'node-textFill':'#9F8759',
        'node-fontSize':'12',
        'node-textPadding':[5,8,4,8],
        //连线
        'stroke':'#9F8759',                      //连线颜色
        'lineWidth':5,                                      //连线粗细
        //canvas 设置
        'background':'rgb(255, 255, 204)',               //画布背景色
        //关联线
        'relate-stroke':'rgb(206, 214, 218)',                //关联线颜色
        'relate-textFill':'#ccc',              //关联线文字颜色
        //外框
        'wireFrame-stroke':'rgb(206, 214, 218)',              //外框 颜色
        'wireFrame-fill':'transparent',                //外框填充色
        //总结
        'induce-stroke':'#9F8759',                 //总结 线的颜色
        'induce-fill':'transparent',                   //总结 文字背景色
        'induce-textFill':'#ccc',               //总结 文字颜色
        'induce-fontSize':'',               //总结 文字大小
        'induce-fontFamily':'',             //字体
        'induce-fontStyle':''               //字型
    }   
  }

  export default free;