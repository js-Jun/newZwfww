var data = {
    "parSku": "ZH123", //ZH/ZX 码
    "proName": "猪肉脯",//商品名称
    "proPrice": 23.3,//商品价格
    "proSpec": [  //详情 sku
        {
            "price": "12.1", //价格
            "spec": "12g/小包", //规格
            "specSku": "ZH123", //规格sku
            "taste": "麻辣味"  //口味
        },
        {
            "price": "12.1",
            "spec": "50g/小包",
            "specSku": "ZH002",
            "taste": "麻辣味"
        },
        {
            "price": "12.1",
            "spec": "12g/小包",
            "specSku": "ZH003",
            "taste": "香辣味"
        },
        {
            "price": "12.1",
            "spec": "50g/小包",
            "specSku": "ZH004",
            "taste": "香辣味"
        }
    ],
    "specA": [
        {
            "addPic": true, //是否添加图片
            "name": "麻辣味",  //规格/口味 的名称
            "pic": "www.picture1.com", //图片路径
            "spcOrder": "1", //规格排序
            "type": "1"  //口味||规格 type 1:口味,2:规格
        },
        {
            "addPic": true,
            "name": "香辣味",
            "pic": "www.picture2.com",
            "spcOrder": "2",
            "type": "1"
        }
    ],
    "specB": [
        {
            "addPic": false,  //是否添加图片
            "name": "12g/小包", //规格/口味 的名称
            "pic": "",
            "spcOrder": "1", //规格排序
            "type": "2"    //口味||规格 type 1:口味,2:规格
        },
        {
            "addPic": false,
            "name": "50g/小包",
            "pic": "",
            "spcOrder": "2",
            "type": "2"
        }
    ]
}

1.规格值怎么添加  规格值是手动输入还是后台获取供用户选择
2.当只添加了一个规格项目（需求为两个规格项目[口味与规格]）时，下面的表格怎么生成， 还是两个规格添加完毕后 生产下面的表格