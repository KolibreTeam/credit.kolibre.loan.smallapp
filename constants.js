var constants = {
    URLS: {
        // ValidateCode
        SEND: "https://mp.fengniaowu.com/api/ValidateCode/Send",
        VERIFY: "https://mp.fengniaowu.com/api/ValidateCode/Verify",
        //Account
        LOGIN: "https://mp.fengniaowu.com/api/PasswordLogin/Account/Login",
        QUICKLOGIN: 'https://mp.fengniaowu.com/api/ValidateCodeLogin/Account/QuickLogin',
        SETPASSWORD: "https://mp.fengniaowu.com/api/Password/Set",
        GETCURRENTACCOUNT: 'https://mp.fengniaowu.com/api/Account/GetCurrentAccount',
        //user
        GETPOSITIONS: "https://mp.fengniaowu.com/api/Organization/GetPositions",
        UPDATELOANINACCOUNTINFO: "https://mp.fengniaowu.com/api/Account/UpdateLoanInAccountInfo",
        UPLOADIMAGES: "https://mp.fengniaowu.com/api/File/UploadImages",
        // CustomerManager
        GETTENANIES: "https://mp.fengniaowu.com/api/CustomerManager/GetTenanies",
        GETRISKS: "https://mp.fengniaowu.com/api/Customer/GetRisks",
        CREATERISKLABLE: "https://mp.fengniaowu.com/api/Customer/CreateRiskLable",
        GETRISKLABLES: "https://mp.fengniaowu.com/api/Customer/GetRiskLables",
        CREATERISK: "https://mp.fengniaowu.com/api/Customer/CreateRisk",
        // VillagesManager
        GETTENANCIES: "https://mp.fengniaowu.com/api/VillagesManager/GetTenancies",
        GETVILLAGEAPARTMENTS: "https://mp.fengniaowu.com/api/VillagesManager/GetVillageApartments",
        GETSCENERIES: "https://mp.fengniaowu.com/api/VillagesManager/GetSceneries",
        CREATESCENERYTYPE: "https://mp.fengniaowu.com/api/VillagesManager/CreateSceneryType",
        GETSCENERYTYPES: "https://mp.fengniaowu.com/api/VillagesManager/GetSceneryTypes",
        CREATESCENERY:"https://mp.fengniaowu.com/api/VillagesManager/CreateScenery",
        DELETESCENERY:"https://mp.fengniaowu.com/api/VillagesManager/DeleteScenery",
        UPDATESCENERY:"https://mp.fengniaowu.com/api/VillagesManager/UpdateScenery",
        GETSCENERYDETAILS:"https://mp.fengniaowu.com/api/VillagesManager/GetSceneryDetails?sceneryId=",
        //
        GETAPARTMENTSBYVILLAGEID:"https://mp.fengniaowu.com/api/VillagesManager/GetApartmentsByVillageId?villageId=",
        GETROOMLOANINS:"https://mp.fengniaowu.com/api/VillagesManager/GetRoomLoanIns",
        //
        GETROOMRECORDS:"https://mp.fengniaowu.com/api/VillagesManager/GetRoomRecords",
        CREATEROOMRECORDS:"https://mp.fengniaowu.com/api/VillagesManager/CreateRoomRecords",
        GETROOMOPENDOORLOCKRECORD:"https://mp.fengniaowu.com/api/VillagesManager/GetRoomOpenDoorLockRecord",
        GETWATERELECTRICRECORD:"https://mp.fengniaowu.com/api/VillagesManager/GetWaterElectricRecord",
        CREATEROOMDEVICE:"https://mp.fengniaowu.com/api/VillagesManager/CreateRoomDevice",
        CREATEOPENDOORLOCKRECORD:"https://mp.fengniaowu.com/api/VillagesManager/CreateOpenDoorLockRecord",
        CREATEWATERELECTRICRECORD:"https://mp.fengniaowu.com/api/VillagesManager/CreateWaterElectricRecord",
        GETSECURITYRANGE:"https://mp.fengniaowu.com/api/VillagesManager/GetSecurityRange"
    },
    COOKIES: {
        AUTH: 'X-KC-SID'
    },
    REGEX: {
        CELLPHONE: /^(13|14|15|16|17|18|10)\d{9}$/,
        PASSWORD: /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/,
        PAYMENT_PASSWORD: /^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\D+$).{8,18}$/,
        URL: /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/,
        CREDENTIALNO: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/,
        BANKCARDNO: /^\d{15,19}$/,
        CHECKCODE: /^\d{6}$/,
        FLOOR: /^\d{1,5}$/,
        AMOUNT: /^\d{1,7}(\.\d{1,2})?$/
    },
    MSGINFO: {
        ERROR: "系统服务繁忙，请稍后",
        PHONE: '手机号码不能为空',
        PHONEERR: '手机号码格式错误',
        SEND: '发送成功',
        SENDERR: '发送失败',
        CAPTCHA: '验证码不能为空',
        CAPTCHAERR: '验证码格式错误',
        PASSWORD: '密码不能为空',
        PASSWORDERR: '密码格式错误',
        PASSWORDSAME: '密码不一致,重新输入',
        REGISTER: '注册成功',
        REGISTERERR: '注册失败',
        AGREEMENT1: '请同意蜂鸟屋注册服务协议',
        AGREEMENT2: '请同意蜂鸟屋付房租协议',
        LOGINSUCCESS: '登录成功',
        TOKENERR: '请点击发送验证码',
        REALNAME: "姓名不能为空",
        CREDENTIALNO: "身份证不能为空",
        CREDENTIALNOERR: "身份证号码格式错误",
        IMG1ERR: "身份证正面不能为空",
        IMG2ERR: "身份证背面不能为空",
        VERIFY: "身份证提交成功",
        VERIFYERR: "请提交个人身份信息",
        UPLOADERR: "身份证上传失败",
        RESETPASSWORD: "密码重置成功",
        RESETPASSWORDERR: "密码重置失败",
        SOURCE: "房屋来源不能为空",
        ROOMNUMBER: "房号不能为空",
        FLOOR: "楼层不能为空",
        FLOORERR: "楼层格式错误",
        DECORATION: "朝向不能为空",
        LEASEINFO: "租约信息提交成功",
        OUTERCONTRACTNO: "合同编号不能为空",
        OUTERCONTRACTNOERR: "合同编号格式错误",
        MONTHRENTALAMOUNT: "月租金不能为空",
        MONTHRENTALAMOUNTERR: "月租金格式错误",
        LEASETERM: "剩余月数不能为空",
        LEASETERMERR: "剩余月数格式错误",
        LEASEORDERDAY: "每期付款日不能为空",
        LEASEORDERDAYERR: "每期付款日格式错误",
        LEASEORDERDAYRANG: "输入1~31的数字",
        LEASEEXPIRYTIME: "合同结束日期错误",
        DEPOSITAMOUNT: "押金不能为空",
        DEPOSITAMOUNTERR: "押金格式错误",
        TENEMENTAMOUNTERR: "物业费格式错误",
        POSTDATA: "数据正在提交请稍后",
        IMGCONTRACT2ERR: "合同第2页为空或者上传失败",
        IMGCONTRACT6ERR: "合同第6页为空或者上传失败",
        IMGCONTRACT8ERR: "合同第8页为空或者上传失败",
        IMGIDCARDERR: "本人手持身份证照片为空",
        IMGCONTRACT: "租房合同上传成功",
        IMGIDCARD: "身份证自拍照上传成功",
        LINKREALNAME: "联系人姓名为空",
        LINKCELLPHONE: "联系人手机号为空",
        LINKRELATIONSHIP: "联系人关系为空",
        LOGINERR1: "1",
        LOGINERR2: "2",
        LOGINERR3: "3",
        LOGINERR4: "用户未注册",
        RISKLABLENAME: "请选择风险标签",
        RISKLABLENAME2: "风险标签名称不能为空",
        RISKLABLENAMESUCCEE: "风险标签添加成功",
        RISKSUCCEE: "风险添加成功",
        RISKGRADE: "请选择风险等级",
        RISKDESCRIBE: "风险描述不能为空",
        SCENERYDESCRIBE: "请选择全景类型",
        SCENERYDESCRIBE2: "全景类型名称不能为空",
        SCENERYTYPESUCCEE: "全景类型添加成功",
        SCENERYSUCCEE:"全景添加成功",
        DELETESCENERY:"删除全景成功",
        UPDATESCENERY:"全景修改成功",
        ROOMRECORDDESCRIBE:"描述不能为空",
        ROOMRECORDDESCRIBESUCCEE:"使用记录添加成功",
        DEVICESN:"设备编号不能为空",
        SUPPLIERNAME:"供应商名称不能为空",
        DEVICESUCCEE:"设备添加成功",
        DOORLOCKRECORDSUCCEE:"门锁记录添加成功",
        ADDUPCOUNT:"累计次数不能为空",
        PICTURES:"描述图片不能为空",
        WATERELECTRICRECORDSUCCEE:"水电记录添加成",
        CURRENTREAD:"读数不能为空"
    }
};
module.exports = constants;