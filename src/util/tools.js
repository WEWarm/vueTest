
import store from '../vuex/store.js'
//自定义插件
export default {
  install(Vue, options) {

    /*

        //1.example:添加全局方法或属性
        Vue.$example = function (data) {
          console.log(data);
        };//在所有组件中可以通过Vue.$example(data)来调用


        //2.example:添加实例方法或属性
        Vue.prototype.$example = function (data) {
          console.log(data);
        };//在所有组件中可以通过this.$example(data) 或者 $example(data) 来调用


        // 3.example:注入组件
        Vue.mixin({
          created: function () {
            // 逻辑...
          },
          methods:{},
          ...
        });//vue的生命周期函数 无需调用 ，方法正常调用即可，但这里的方法会被组件里的同名方法覆盖



        // 4.example:添加全局资源
        Vue.directive('my-directive', {
          bind (el, binding, vnode, oldVnode) {
            // 逻辑...
          },
          ...
        });

    */




    //手机号合法性校验
    Vue.prototype.$checkMobile = function(mobile){
      let reges = /^(((1[3|8][0-9])|(1[4][5|7])|(1[5][0|1|2|3|5|6|7|8|9])|(1[7][1|0|6|7|8]))+\d{8})$/;
      return reges.test(mobile);
    };


    //校验身份证号
    Vue.prototype.$checkIdnumber = function(sfzh){
      let isyz = true;
      //检验格式
      if(sfzh.length === 18 && !isNaN(sfzh.substr(0,17))){//位数为18位,前17位为数字
        var sum = 0;
        for(var i=1;i<=17;i++){
          var n = 0;
          var num = sfzh.substr(i-1,1);
          if(i == 1 || i == 11) n = 7;
          if(i == 2 || i == 12) n = 9;
          if(i == 3 || i == 13) n = 10;
          if(i == 4 || i == 14) n = 5;
          if(i == 5 || i == 15) n = 8;
          if(i == 6 || i == 16) n = 4;
          if(i == 7 || i == 17) n = 2;
          if(i == 8) n = 1;
          if(i == 9) n = 6;
          if(i == 10) n = 3;
          sum = sum + n*num;
        }
        var ys = sum%11;//余数
        var sf = sfzh.substr(17,1);
        //余数只可能有0－1－2－3－4－5－6－7－8－9－10这11个数字。其分别对应的最后一位身份证的号码为1－0－X －9－8－7－6－5－4－3－2。
        if(ys == 0 && sf == '1') isyz = true;
        else if(ys == 1 && sf == '0') isyz = true;
        else if(ys == 2 && sf == 'X') isyz = true;
        else if(ys == 3 && sf == '9') isyz = true;
        else if(ys == 4 && sf == '8') isyz = true;
        else if(ys == 5 && sf == '7') isyz = true;
        else if(ys == 6 && sf == '6') isyz = true;
        else if(ys == 7 && sf == '5') isyz = true;
        else if(ys == 8 && sf == '4') isyz = true;
        else if(ys == 9 && sf == '3') isyz = true;
        else if(ys == 10 && sf == '2') isyz = true;
        else isyz = false;
      }else{//格式错误
        isyz = false;
      }
      return isyz;
    };


    /*比较日期大小
     日期 date
     */
    Vue.prototype.$dateCompare = function(date1,date2){
      date1 = date1.replace(/\-/gi,"/");
      date2 = date2.replace(/\-/gi,"/");
      var time1 = new Date(date1).getTime();
      var time2 = new Date(date2).getTime();
      if(time1 > time2){
        return 1;
      }else if(time1 == time2){
        return 0;
      }else{
        return -1;
      }
    };


    //缓存设置
    Vue.prototype.$setCookie = function(cname,cvalue,ex_mins){
      if(ex_mins){
        let d = new Date();
        d.setTime(d.getTime()+(ex_mins*1000));
        let expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
      }else{
        document.cookie = cname + "=" + cvalue ;
      }
    };
    Vue.prototype.$getCookieValue = function(cname){
      let name = escape(cname);
      //读cookie属性，这将返回文档的所有cookie
      let allcookies = document.cookie;
      name += "=";
      let pos = allcookies.indexOf(name);
      //如果找到了具有该名字的cookie，那么提取并使用它的值

      if (pos === -1){//如果pos值为-1则说明搜索"cname="失败
        return "" ;//搜索失败，返回空字符串
      }
      let start = pos + name.length;                  //cookie值开始的位置
      let end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
      if (end === -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie
      let value = allcookies.substring(start,end);    //提取cookie的
      return unescape(value);                         //对它解码
    };
    Vue.prototype.$delCookie = function(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
      let exp = new Date();
      exp.setTime(exp.getTime() - 1);
      let cval=getCookie(name);
      if(cval !== null)
        document.cookie= name + "= ;expires="+exp.toGMTString();//删除时不必指定 cookie 的值
    };
    Vue.prototype.$checkCookie = function (name) {
      let y = this.$getCookieValue(name);
      if(y === "") this.$router.push({ name:'login' });//检测token，如果token无效就跳转到登录页
    };


    //获取url参数
    Vue.prototype.$GetQueryString = function(name) {
      let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
      // if (r != null) return decodeURI(r[2]); return null;//解决中文参数乱码的bug
    };


    //ajax
    Vue.prototype.$ajax = function (url, data, success, params=null, type='POST') {
      let self = this;
      let token = this.$getCookieValue('token');
      $.ajax({
        url: url,
        headers:{'token':token},//request headers params
        type: type,
        dataType: "json",
        // async:false,
        traditional:true,
        data: data,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (obj, status, request) {
          // console.log(request.getResponseHeader('some_header')); // get headers
          if(obj.code === 401){//token 失效
            self.$router.push({name:'login'});
          }else{
            success(obj,params);
          }
        },
        error: function (request, status, error) {
          alert('ajax ERROR status: ' + status);
          // window.history.back();
          // window.location.reload(true);
        }
      });
    };



    //侧边栏的隐藏与显示
    Vue.prototype.$asideToggleHandle = function () {  //aside的
      // this.$store.commit('updateAsideWidth',30);
      store.commit('updateAsideWidth',30);    //组件外调用vuex状态
    };
    Vue.prototype.$mainToggleHandle = function(){ //main的
      store.commit('updateAsideWidth',220);
    };


    //时间戳转换
    Date.prototype.Format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    };



    Vue.mixin({
      methods:{
        $example(data){//可以在组建中直接使用
          console.log(data);
        },
      }
    });














  }
}


