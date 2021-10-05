var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,n=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&s(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&s(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{r as u,u as d}from"./index.17007523.js";import{d as c,G as m,i as p,s as f,b as g,v as b,x as v,p as _,c as y,m as h,aO as k,A as C,g as w,e as N,f as z,t as S,w as V,D as x,r as j,H as O,I as R}from"./vendor.cf6ce22a.js";import{c as E}from"./index.5bee2ba3.js";const P="/api/auth/permission/routes";var D=c({name:"RolesEdit",props:{currentRole:{type:Object,default:()=>({roleName:"",state:1})}},emits:["success"],setup(e,{emit:l}){const a=m(e,"currentRole"),t=d(),o=p((()=>t.getters["settingsModule/getLangState"])),r=f({url:"/role/allow",purl:"/role/permissions",loading:!1,form:{key:"",label:""},menu:{loading:!1,url:"/menu/list",data:[],form:[]}}),s=p((()=>a.value.role)),c=p((()=>t.state.permissionModule.routes)),_=async()=>{const e={roleName:s.value.roleName},l=await class{static postAuthPermission(e){return u({url:P,method:"POST",json:!0,data:e}).then((e=>(console.log(e),0===e.status?Promise.resolve(e):Promise.reject(e))))}}.postAuthPermission(e);if(null==l?void 0:l.data){const{authedRoutes:e}=l.data;r.menu.form=e}},y=()=>{var e,l;for(const a of c.value)(null==(e=null==a?void 0:a.meta)?void 0:e.hidden)||r.menu.data.push({key:null==a?void 0:a.path,label:null==(l=null==a?void 0:a.meta)?void 0:l.title[o.value]})};return g((()=>{y()})),b((()=>{_()})),i(n({},v(r)),{lang:o,role:s,fetchMenuData:y,saveData:()=>{console.log("form is ",r.menu.form),l("success")}})}});const M=V();_("data-v-7247ff70");const T={class:"wrapper"},U={class:"card-header"},A=z("br",null,null,-1),B=z("i",{class:"fa fa-check"},null,-1),I=x(" 确认修改 ");y();const F=M(((e,l,a,t,o,r)=>{const s=h("el-form-item"),n=h("el-form"),i=h("el-transfer"),u=h("el-card"),d=h("el-button"),c=h("el-row"),m=k("loading");return C((w(),N("div",T,[z(u,{class:"transfer"},{header:M((()=>[z("span",null,[z("div",U,[z(n,{"label-position":"left",inline:"",class:"info-table"},{default:M((()=>[z(s,{label:"名称"},{default:M((()=>[z("span",null,S(e.role.roleName),1)])),_:1})])),_:1})])])])),default:M((()=>[C(z(i,{modelValue:e.menu.form,"onUpdate:modelValue":l[1]||(l[1]=l=>e.menu.form=l),data:e.menu.data,titles:["菜单","已授权"]},null,8,["modelValue","data"]),[[m,e.menu.loading]])])),_:1}),A,z(c,{class:"btns"},{default:M((()=>[z(d,{size:"mini",type:"primary",disabled:0==e.role.state,onClick:e.saveData},{default:M((()=>[B,I])),_:1},8,["disabled","onClick"])])),_:1})],512)),[[m,e.loading]])}));D.render=F,D.__scopeId="data-v-7247ff70";var $=c({name:"RoleNew",emits:["success"],setup(e,{emit:l}){const a=j(),t=f({form:{roleName:"",remark:""},loading:!1});return n({submitForm:()=>{a.value.validate((e=>e?(l("success",n({},t.form)),!0):(console.log("error submit!!"),!1)))},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},formRef:a,url:"/role/add"},v(t))}});const q={class:"new"},G=z("i",{class:"fa fa-plus"},null,-1),H=x(" 新增 ");$.render=function(e,l,a,t,o,r){const s=h("el-input"),n=h("el-form-item"),i=h("el-button"),u=h("el-row"),d=h("el-form"),c=k("loading");return C((w(),N("div",q,[z(d,{ref:"formRef",model:e.form,rules:e.rules,"label-position":"right","label-width":"100px"},{default:O((()=>[z(n,{label:"角色名称",prop:"roleName"},{default:O((()=>[z(s,{modelValue:e.form.roleName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.roleName=l),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),z(n,{label:"备注"},{default:O((()=>[z(s,{modelValue:e.form.remark,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.remark=l),placeholder:"请输入备注"},null,8,["modelValue"])])),_:1}),z(u,{class:"btn-container"},{default:O((()=>[z(i,{size:"mini",type:"primary",onClick:l[3]||(l[3]=l=>e.submitForm())},{default:O((()=>[G,H])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[c,e.loading]])};var L=c({name:"RoleManage",components:{RoleEdit:D,RoleNew:$},setup(){const e=f({url:{c:"/role/add",r:"/role/list",u:"/role/update",d:"/role/delete"},param:{limit:10,page:1},data:[{roleName:"超级管理员",remark:"拥有删除和创建等操作的权限",state:0},{roleName:"管理员",remark:"拥有创建和权限分配的权限",state:0},{roleName:"游客",remark:"只拥有操作部分菜单的权限",state:1}],loading:!1,is_search:!1,add_visible:!1,edit_visible:!1,detail_visible:!1,posted:{role:{roleName:"",state:1}}}),l=p((()=>e.data.length));return i(n({},v(e)),{total:l,onCurrentChange:()=>{},onSizeChange:l=>{e.param.limit=l},onCreate:()=>{e.add_visible=!0},onCreateSuccess:l=>{console.log(l);const a={roleName:l.roleName,remark:l.remark,state:1};e.data.push(a),e.add_visible=!1},onEditSuccess:()=>{e.edit_visible=!1},onRefresh:()=>{e.is_search=!1},onEdit:(l,a)=>{console.log("row",a),e.posted.role=a,e.edit_visible=!0},onDelete:(e,l)=>{console.log(e,l),(e=>{console.log(e),E.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{E.ElMessage({type:"success",message:"删除成功"})})).catch((()=>{E.ElMessage({type:"info",message:"已取消删除"})}))})(e)}})}});const J=x("新增"),K=x("刷新"),Q=z("br",null,null,-1),W=z("i",{class:"ic ic-lock"},null,-1),X=x(" 锁定"),Y=x("正常"),Z=x("未知"),ee={class:"pagination"};L.render=function(e,l,a,t,o,r){const s=h("el-alert"),n=h("el-button"),i=h("el-col"),u=h("el-row"),d=h("el-table-column"),c=h("el-tag"),m=h("el-tooltip"),p=h("el-table"),f=h("el-pagination"),g=h("el-card"),b=h("role-edit"),v=h("el-dialog"),_=h("role-new"),y=k("loading");return w(),N("div",null,[z(s,{title:"Tips:点击【新增】按钮进行新增角色；点击【编辑】按钮，进行不同角色的菜单授权操作！",type:"warning"}),z(s,{title:"Tips:权限控制体验：【管理员账号为：admin@outlook.com】、【超级管理员账号为：super@outlook.com】",type:"info"}),z(g,{class:"card-ctrl"},{default:O((()=>[z(u,null,{default:O((()=>[z(i,{span:8,style:{"text-align":"left"}},{default:O((()=>[z(n,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:O((()=>[J])),_:1},8,["onClick"]),z(n,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:O((()=>[K])),_:1},8,["onClick"])])),_:1})])),_:1}),Q,C(z(p,{data:e.data,stripe:"",class:"table"},{default:O((()=>[z(d,{prop:"roleName",label:"角色名称",align:"center"}),z(d,{prop:"state",label:"角色状态",align:"center"},{default:O((e=>[0==e.row.state?(w(),N(c,{key:0,size:"mini",type:"info"},{default:O((()=>[W,X])),_:1})):1==e.row.state?(w(),N(c,{key:1,size:"mini",type:"success"},{default:O((()=>[Y])),_:1})):(w(),N(c,{key:2,size:"mini",type:"danger"},{default:O((()=>[Z])),_:1}))])),_:1}),z(d,{prop:"remark",label:"备注",align:"center"}),z(d,{label:"操作",align:"center"},{default:O((l=>[z(m,{class:"item",effect:"dark",content:"菜单授权",placement:"bottom"},{default:O((()=>[z(n,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"small",onClick:a=>e.onEdit(l.$index,l.row)},null,8,["onClick"])])),_:2},1024),0!=l.row.state?(w(),N(m,{key:0,class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:O((()=>[z(n,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"small",onClick:a=>e.onDelete(l.$index,l.row)},null,8,["onClick"])])),_:2},1024)):R("",!0)])),_:1})])),_:1},8,["data"]),[[y,e.loading]]),z("div",ee,[z(f,{"current-page":e.param.page,"page-size":e.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:e.total,background:"",onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1}),z(v,{modelValue:e.edit_visible,"onUpdate:modelValue":l[1]||(l[1]=l=>e.edit_visible=l),center:"",title:e.posted.role.roleName},{default:O((()=>[z(b,{"current-role":e.posted,onSuccess:e.onEditSuccess},null,8,["current-role","onSuccess"])])),_:1},8,["modelValue","title"]),z(v,{modelValue:e.add_visible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.add_visible=l),title:"新增角色"},{default:O((()=>[z(_,{onSuccess:e.onCreateSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"])])};export{L as default};
