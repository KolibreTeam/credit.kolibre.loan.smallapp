// pages/resetPassword/resetPassword.js
const app = getApp();
const constants = app.constants;
const $toast = require('../../utils/showToast');
const mui = {
    toast: function (title) {
        $toast.showToast({
            title: title,
            mask: false
        });
    }
};
var waitTimer = null;
var waitCount = 60;
var isSendCaptcha = true;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        cellphone: "",
        captcha: "",
        password: "",
        captchaText: "获取验证码",
        isPost: false
    },
    bindKeyInput: function (e) {
        var key = e.target.dataset.key;
        if (key == "cellphone") {
            this.setData({
                cellphone: e.detail.value
            });
        }
        else if (key == "captcha") {
            this.setData({
                captcha: e.detail.value
            });
        }
        else {
            this.setData({
                password: e.detail.value
            });
        }
    },
    sendCaptcha: function () {
        if (isSendCaptcha) {
            var cellphone = this.data.cellphone;
            if (cellphone == '') {
                mui.toast(constants.MSGINFO.PHONE);
                return false;
            }
            if (!constants.REGEX.CELLPHONE.test(cellphone)) {
                mui.toast(constants.MSGINFO.PHONEERR);
                return false;
            }
            isSendCaptcha = false;
            var businessType = "AccountChangePassword";
            var data = {
                cellphone: cellphone,
                businessType: businessType
            };
            var that = this;
            waitTimer = setInterval(function () {
                if (waitCount > 0) {
                    that.setData({captchaText: waitCount + '秒'});
                    waitCount = waitCount - 1;
                } else {
                    clearInterval(waitTimer);
                    that.setData({captchaText: '获取验证码'});
                    waitCount = 60;
                    isSendCaptcha = true;
                }
            }, 1000);
            app.postInvoke(constants.URLS.SEND, data, function (res) {
                if (res.succeeded) {
                    mui.toast(constants.MSGINFO.SEND);
                } else {
                    mui.toast(constants.MSGINFO.SENDERR);
                }
            }, function (res) {
                waitCount = 0;
                mui.toast(res.message);
            });
        }
    },
    changePassword: function () {
        var cellphone = this.data.cellphone;
        if (cellphone == '') {
            mui.toast(constants.MSGINFO.PHONE);
            return false;
        }
        if (!constants.REGEX.CELLPHONE.test(cellphone)) {
            mui.toast(constants.MSGINFO.PHONEERR);
            return false;
        }
        var captcha = this.data.captcha;
        if (captcha == '') {
            mui.toast(constants.MSGINFO.CAPTCHA);
            return false;
        }
        if (!constants.REGEX.CHECKCODE.test(captcha)) {
            mui.toast(constants.MSGINFO.CAPTCHAERR);
            return false;
        }
        var password = this.data.password;
        if (password == '') {
            mui.toast(constants.MSGINFO.PASSWORD);
            return false;
        }
        if (!constants.REGEX.PASSWORD.test(password)) {
            mui.toast(constants.MSGINFO.PASSWORDERR);
            return false;
        }
        var verify = {
            cellphone: cellphone,
            businessType: "AccountChangePassword",
            validateCode: captcha
        };
        var that = this;
        that.setData({isPost: true});
        app.postInvoke(constants.URLS.VERIFY, verify, function (res) {
            if (res.succeeded) {
                var data = {
                    authCode: res.data.authCode,
                    newPassword: password
                };
                app.postInvoke(constants.URLS.SETPASSWORD, data, function (res1) {
                    that.setData({isPost: false});
                    if (res1.succeeded) {
                        mui.toast(constants.MSGINFO.RESETPASSWORD);
                        setTimeout(function () {
                            wx.navigateTo({url: '/pages/login/login3'});
                        }, 1000);
                    } else {
                        mui.toast(constants.MSGINFO.RESETPASSWORDERR);
                    }
                }, function (err) {
                    that.setData({isPost: false});
                    mui.toast(err.message);
                });
            } else {
                that.setData({isPost: false});
                mui.toast(res.message);
            }
        }, function (err) {
            that.setData({isPost: false});
            mui.toast(err.message);
        });
    }
});