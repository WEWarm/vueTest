<template>
  <div class="systemMenu">
    <div class="recommendBox">
      <div class="recommend"><i class="icon iconfont icon-shijian"></i><div class="time">限时推荐</div></div>
      <ul>
        <li><img :src="xs1Img"></li>
        <li><img :src="xs2Img"></li>
        <li><img :src="xs3Img"></li>
      </ul>
      <div class="comic-choose"><img :src="comicImg"></div>
    </div>

    <div class="hd"><h3 style="display: inline-block;padding-right: 20px">爱情鲜花</h3><span>送·让你怦然心动的人</span></div>
    <div class="loveArea">
      <div class="loveConten">
        <div class="loveImg"><img :src="loveImg"></div>
      </div>
      <ul class="floor-products">
        <li><img :src="love"><span>鲜花·一往情深</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg2"><span>鲜花·浪漫香气</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg3"><span>鲜花·不变的承诺</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg4"><span>鲜花·我只钟情你</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg1"><span>鲜花·一心一意</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg5"><span>鲜花·爱在心头</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg6"><span>鲜花·邂逅浪漫</span><p><span>￥215</span></p></li>
        <li><img :src="loveImg7"><span>鲜花·[熊抱花束]依恋你</span><p><span>￥215</span></p></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "systemMenu",
        data(){
          let xs1Img = require('../../assets/images/xianshi_1_180116.jpg')
          let xs2Img = require('../../assets/images/xianshi_2_180109.jpg')
          let xs3Img = require('../../assets/images/xianshi_3_180116.jpg')
          let comicImg = require('../../assets/images/comic_choose_flowers.jpg')
          let loveImg = require('../../assets/images/banner_love.jpg')
          let love = require('../../assets/images/love.jpg')
          let loveImg2 = require('../../assets/images/loveImg2.jpg')
          let loveImg3 = require('../../assets/images/loveImg3.jpg')
          let loveImg4 = require('../../assets/images/loveImg4.jpg')
          let loveImg1 = require('../../assets/images/loveImg1.jpg')
          let loveImg5 = require('../../assets/images/loveImg5.jpg')
          let loveImg6 = require('../../assets/images/loveImg6.jpg')
          let loveImg7 = require('../../assets/images/loveImg7.jpg')
          return {
            xs1Img : xs1Img,
            xs2Img : xs2Img,
            xs3Img : xs3Img,
            comicImg : comicImg,
            loveImg : loveImg,
            love : love,
            loveImg1 : loveImg1,
            loveImg2 : loveImg2,
            loveImg3 : loveImg3,
            loveImg4 : loveImg4,
            loveImg5 : loveImg5,
            loveImg6 : loveImg6,
            loveImg7 : loveImg7
          }
        }
    }
</script>

<style>
  .recommendBox {
    display: flex;
    width: 1200px;
    height: 200px;
    margin: 20px;
  }
  .recommendBox ul{
    border: 1px solid #ccc;
  }
  .recommendBox ul li {
    float: left;
    height: 198px;
  }
  .recommendBox ul li:nth-child(2){
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    margin-bottom: 1px;
  }
  .recommendBox .recommend {
    width: 232px;
    height: 200px;
    background: #aacc03;
  }
  .recommend .time {
    color: #fff;
    font-size: 26px;
    position: relative;
    text-align: center;
    top: 100px;
    bottom: 0;
  }
  .recommendBox .comic-choose {
    width: 249px;
  }
 .recommendBox .comic-choose img {
    height: 200px;
  }
 .systemMenu .hd {
   margin-left: 20px;
 }
  .loveArea {
    width: 1200px;
    height: 639px;
    margin: 20px;
  }
  .loveConten {
    position: relative;
    float: left;
    width: 243px;
    height: 639px;
    background: #ffc0bb;
  }
  .floor-products {
    float: right;
    width: 957px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .floor-products li {
    position: relative;
    z-index: 9;
    float: left;
    overflow: hidden;
    width: 238px;
    height: 318px;
    margin-right: -1px;
    margin-bottom: -1px;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  .floor-products li img {
    width: 220px;
    height: 240px;
    padding-top: 10px;
  }
  .floor-products span {
    display: inline-block;
    padding-top: 5px;
  }
  .floor-products p {
    padding-top: 5px;
  }
</style>
