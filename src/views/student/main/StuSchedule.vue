<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>课程表</span>
      </div>
      <table border="2">
        <tr>
          <th></th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
        </tr>
        <tr>
          <th>上午</th>
          <td>
            <p>{{class1.classID}}</p>
            <p>{{class1.classNameCN}}</p>
            <p>{{class1.classroom}}</p>
          </td>
          <td>
            <p>{{class4.classID}}</p>
            <p>{{class4.classNameCN}}</p>
            <p>{{class4.classroom}}</p>
          </td>
          <td>
            <p>{{class7.classID}}</p>
            <p>{{class7.classNameCN}}</p>
            <p>{{class7.classroom}}</p>
          </td>
          <td>
            <p>{{class10.classID}}</p>
            <p>{{class10.classNameCN}}</p>
            <p>{{class10.classroom}}</p>
          </td>
          <td>
            <p>{{class13.classID}}</p>
            <p>{{class13.classNameCN}}</p>
            <p>{{class13.classroom}}</p>
          </td>
        </tr>
        <tr>
          <th>下午</th>
          <td>
            <p>{{class2.classID}}</p>
            <p>{{class2.classNameCN}}</p>
            <p>{{class2.classroom}}</p>
          </td>
          <td>
            <p>{{class5.classID}}</p>
            <p>{{class5.classNameCN}}</p>
            <p>{{class5.classroom}}</p>
          </td>
          <td>
            <p>{{class8.classID}}</p>
            <p>{{class8.classNameCN}}</p>
            <p>{{class8.classroom}}</p>
          </td>
          <td>
            <p>{{class11.classID}}</p>
            <p>{{class11.classNameCN}}</p>
            <p>{{class11.classroom}}</p>
          </td>
          <td>
            <p>{{class14.classID}}</p>
            <p>{{class14.classNameCN}}</p>
            <p>{{class14.classroom}}</p>
          </td>
        </tr>
        <tr>
          <th>晚上</th>
          <td>
            <p>{{class3.classID}}</p>
            <p>{{class3.classNameCN}}</p>
            <p>{{class3.classroom}}</p>
          </td>
          <td>
            <p>{{class6.classID}}</p>
            <p>{{class6.classNameCN}}</p>
            <p>{{class6.classroom}}</p>
          </td>
          <td>
            <p>{{class9.classID}}</p>
            <p>{{class9.classNameCN}}</p>
            <p>{{class9.classroom}}</p>
          </td>
          <td>
            <p>{{class12.classID}}</p>
            <p>{{class12.classNameCN}}</p>
            <p>{{class12.classroom}}</p>
          </td>
          <td>
            <p>{{class15.classID}}</p>
            <p>{{class15.classNameCN}}</p>
            <p>{{class15.classroom}}</p>
          </td>
        </tr>
      </table>
    </el-card>
  </div>
</template>

<script>
import studentAPI from "../../../api/studentAPI"
export default {
  data() {
    return {
      class1:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class2:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class3:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class4:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class5:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class6:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class7:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class8:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class9:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class10:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class11:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class12:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class13:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class14:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
      class15:{
        classID:'',
        classNameCN:'',
        classroom:''
      },
    }
  },
  async created(){
    // console.log(sessionStorage.getItem("stuID"));
    let {err,data}=await studentAPI.findClassByStuID(sessionStorage.getItem("stuID"))
    if(err===0){
      // console.log(data);
      data.forEach(element => {
        // console.log(element.classTime);
        switch (element.classTime) {
          case "周一上午":
            this.class1=element
            break;
          case "周一下午":
            this.class2=element
            break;
          case "周一晚上":
            this.class3=element
            break;
          case "周二上午":
            this.class4=element
            break;
          case "周二下午":
            this.class5=element
            break;
          case "周二晚上":
            this.class6=element
            break;
          case "周三上午":
            this.class7=element
            break;
          case "周三下午":
            this.class8=element
            break;
          case "周三晚上":
            this.class9=element
            break;
          case "周四上午":
            this.class10=element
            break;
          case "周四下午":
            this.class11=element
            break;
          case "周四晚上":
            this.class12=element
            break;
          case "周五上午":
            this.class13=element
            break;
          case "周五下午":
            this.class14=element
            break;
          case "周五晚上":
            this.class15=element
            break;
          default:
            return false
            break;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
table{
  width: 1000px;
  height: 460px;
  margin: 0 auto;
  p{
    text-align: center;
    margin: 5px 0;
  }
}
</style>