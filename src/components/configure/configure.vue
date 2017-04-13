<template>
  <div class="wrapper">
    <div class="fn-hide" id="div_head">
      <p style="font-size: 15px;">个人头像制作</p>

      <div id="upload"></div>
      <span id="error" class="percenter-head-error"></span>
      <div class="percenter-head-img">
        <div class="percenter-target">
          <img id="target" src="./up_head.jpg"/>
        </div>
        <div id="div60" class="percenter-div60">
          <img id="preview1"
               src="./head_60X60.gif">
        </div>
        <div id="div100" class="percenter-div100"
             style="">
          <img id="preview2"
               src="./head_100X100.gif">
        </div>
        <div id="div150" class="percenter-div150"
             style="">
          <img id="preview3"
               src="./head_150X150.gif">
        </div>
      </div>
      <form action="" method="post" id="coordinate" autocomplete="off">
        <input type="hidden" id="x" name="x" value=""/>
        <input type="hidden" id="y" name="y" value=""/>
        <input type="hidden" id="w" name="w" value=""/>
        <input type="hidden" id="h" name="h" value=""/>
      </form>
      <div class="percenter-save">
      </div>
      <button id="btn">换图</button>
    </div>
    <div class="progress-out" id="div1">
      <div class="percent-show"><span>0</span>%</div>
      <div class="progress-in"></div>
    </div>
    <com1></com1>
    <com2></com2>
  </div>
</template>
<script type="text/ecmascript-6">
  import 'jcrop'
  import '../../common/js/jquery.myProgress.js'
  import com1 from './com_1.vue'
  import com2 from './com_2.vue'
  export default{
    components: {
        com1, com2
    },
    mounted(){
      var boundx = 0;
      var boundy = 0;
      var jcrop_api = null;
      $("#btn").on("click", function () {
        jcrop_api && jcrop_api.destroy();
        $("#target,#preview1,#preview2,#preview3").attr("src", "/static/img/login/1.jpg").css({
          "width": "auto",
          "height": "auto"
        })
        ImageCut();
      })
      function ImageCut() {
        $("#preview1,#preview2,#preview3").css("width", "auto");
        $('#target').Jcrop({
            setSelect: [0, 0, 100, 100],
            boxWidth: 300,
            boxHeight: 300,
            bgFade: true,
            bgOpacity: 0.6,
            onChange: updatePreview,
            onSelect: updatePreview,
            onSelect: updateCoords,
            aspectRatio: 1
          },
          function () {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            boundx = bounds[0];
            boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api = this;
          });
        function updateCoords(c) {
          var img = new Image();
          img.src = $("#target")[0].src;
          var rateX = $("#target").width() / img.width;
          var rateY = $("#target").height() / img.height;
          $('#x').val(c.x / rateX);
          $('#y').val(c.y / rateY);
          $('#w').val(c.w / rateX);
          $('#h').val(c.h / rateY);
//        console.log("X=" + $('#x').val() + " Y=" + $('#y').val() + " W=" + $('#w').val() + " H=" + $('#h').val());
        };
        function updatePreview(c) {
          if (parseInt(c.w) > 0) {
            var rx = $("#div60").width() / c.w;
            var ry = $("#div60").height() / c.h;

            $('#preview1').css({
              width: Math.round(rx * boundx) + 'px',
              height: Math.round(ry * boundy) + 'px',
              marginLeft: '-' + Math.round(rx * c.x) + 'px',
              marginTop: '-' + Math.round(ry * c.y) + 'px'
            });
          }
          {
            var rx = $("#div100").width() / c.w;
            var ry = $("#div100").width() / c.h;
            $('#preview2').css({
              width: Math.round(rx * boundx) + 'px',
              height: Math.round(ry * boundy) + 'px',
              marginLeft: '-' + Math.round(rx * c.x) + 'px',
              marginTop: '-' + Math.round(ry * c.y) + 'px'
            });
          }
          {
            var rx = $("#div150").width() / c.w;
            var ry = $("#div150").width() / c.h;
            $('#preview3').css({
              width: Math.round(rx * boundx) + 'px',
              height: Math.round(ry * boundy) + 'px',
              marginLeft: '-' + Math.round(rx * c.x) + 'px',
              marginTop: '-' + Math.round(ry * c.y) + 'px'
            });
          }
        };
      }

      $("#div1").myProgress({speed: 1000, percent: 30, width: "100px", height: "10px"});
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/css/jcrop/jquery.Jcrop.min.css"
  @import "../../common/css/progress/myProgress.css"
  .percenter-head-img
    position: relative;
    width: 900px;
    height: 302px;
    margin-top: 14px;

  .percenter-target
    float: left;
    border: 1px dotted #ddd;
    width: 300px;
    height: 300px;

  .percenter-div60
    width: 60px;
    height: 60px;
    margin: 130px 0px 0px 50px;
    overflow: hidden;
    float: left;
    border 1px solid #ddd

  .percenter-div100
    width: 100px;
    height: 100px;
    margin: 90px 0px 0px 25px;
    overflow: hidden;
    float: left;
    border 1px solid #ddd

  .percenter-div150
    width: 150px;
    height: 150px;
    margin: 40px 0px 0px 25px;
    overflow: hidden;
    float: left;
    border 1px solid #ddd

</style>
