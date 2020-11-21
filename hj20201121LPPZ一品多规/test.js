var data = {
    "parSku": "ZH123", //ZH/ZX 码
    "proName": "猪肉脯",//商品名称
    "proPrice": 23.3,//商品价格
    "proSpec": [  //详情 sku  下面表格的数据
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
    "specA": [ //第一规格项目数据
        {
            "addPic": true, //是否添加图片
            "name": "麻辣味",  //规格/口味 的名称
            "pic": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=643870685,3339650165&fm=26&gp=0.jpg", //图片路径
            "spcOrder": "1", //规格排序
            "type": "1"  //type 1:口味,2:规格
        },
        {
            "addPic": true,
            "name": "香辣味",
            "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605856909727&di=da1787290174d4b5cd36911f46a23e80&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D4f82ae2113ce36d3a20483380af23a24%2F35fe52389b504fc2c155e2fee3dde71191ef6d17.jpg",
            "spcOrder": "2",
            "type": "1"
        }
    ],
    "specB": [ //第二个规格项目数据
        {
            "addPic": false,  //是否添加图片
            "name": "12g/小包", //规格/口味 的名称
            "pic": "",
            "spcOrder": "1", //规格排序
            "type": "2"    // type 1:口味,2:规格
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
//添加一个规格项目
[
    {
        "specA":[
            //添加一个规格值
            {
                "addPic": false, //是否添加图片
                "name": "",  //规格/口味 的名称
                "pic": "", //图片路径
                "spcOrder": "", //规格排序
                "type": ""  //type 1:口味,2:规格
            },
        ]
    }
]

[
    {
        "specA": [ //第一规格项目数据
            {
                "addPic": true, //是否添加图片
                "name": "麻辣味",  //规格/口味 的名称
                "pic": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=643870685,3339650165&fm=26&gp=0.jpg", //图片路径
                "spcOrder": "1", //规格排序
                "type": "1"  //type 1:口味,2:规格
            },
            {
                "addPic": true,
                "name": "香辣味",
                "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605856909727&di=da1787290174d4b5cd36911f46a23e80&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D4f82ae2113ce36d3a20483380af23a24%2F35fe52389b504fc2c155e2fee3dde71191ef6d17.jpg",
                "spcOrder": "2",
                "type": "1"
            }
        ]  
    },
    {
        "specB": [ //第二个规格项目数据
            {
                "addPic": false,  //是否添加图片
                "name": "12g/小包", //规格/口味 的名称
                "pic": "",
                "spcOrder": "1", //规格排序
                "type": "2"    // type 1:口味,2:规格
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
]

[//index1
    [//index2
        
        {
            "addPic": false, //是否添加图片
            "name": "",  //规格/口味 的名称
            "pic": "", //图片路径
            "spcOrder": "", //规格排序
            "type": ""  //type 1:口味,2:规格
        }
    ],
    [
        {
            "addPic": false, //是否添加图片
            "name": "",  //规格/口味 的名称
            "pic": "", //图片路径
            "spcOrder": "", //规格排序
            "type": ""  //type 1:口味,2:规格
        }
    ]
]
//[{
//     "price": "12.1", //价格
//     "spec": "12g/小包", //规格
//     "specSku": "ZH123", //规格sku
//     "taste": "麻辣味"  //口味
// }] 


