<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<style>
    .ks-overlay {
        position:absolute;
        left:-9999px;
        top:-9999px;
    }

    }
</style>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
<!--popup-->
	<a href="#" class="ks-img-download">popup</a>
	<div class="ks-overlay" style="visibility: hidden; left: 56px; top: 9px;" ><div class="ks-contentbox">
    <table>
        <tbody><tr>
            <td id="topleft" class="corner"></td>
            <td class="top"></td>
            <td id="topright" class="corner"></td>
        </tr>
        <tr>
            <td class="left"></td>
            <td>
                <table class="popup-contents">
                    <tbody><tr>
                        <th>File:</th>
                        <td>coda 1.7.zip</td>
                    </tr>
                    <tr>
                        <th>Date:</th>
                        <td>11/5/10</td>
                    </tr>
                    <tr>
                        <th>Size:</th>
                        <td>20 MB</td>
                    </tr>
                    <tr>
                        <th>Req:</th>
                        <td>Mac OS X 10.4+</td>
                    </tr>
                    <tr id="release-notes">
                        <th>Read the release notes:</th>
                        <td><a title="Read the release notes" href="#">release notes</a></td>
                    </tr>
                </tbody></table>
            </td>
            <td class="right"></td>
        </tr>

    </tbody></table>
</div></div>
<!--popup-->


<!--dialog-->
<div class="ks-button ks-button-shown">dialog</div>
<!--dialog-->

</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

     cajaConfig={//配置下你需要引入的模块名称，最后会被use到
         modules:"openjs/kissy/1.3.0/core,openjs/kissy/1.3.0/overlay"
     }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
    $jsurl="testcase/1.3.0/overlay.js";//注意路径
    $jsservice="../common/cajoled_service.php";//注意路径
    include("../common/foot.php");//引入foot
?>