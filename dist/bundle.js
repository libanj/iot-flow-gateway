(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("dotenv"),n=require("jsmodbus");var i=e.n(n);const a=require("net");var r=e.n(a);const u=require("rxjs");var o=[{value:{targetweight:0},fc:3,unitid:1,address:5010,quantity:1},{value:{baglength:0},fc:3,unitid:1,address:5014,quantity:1},{value:{bagsperminute:0},fc:3,unitid:1,address:5016,quantity:1},{value:{topconehigh:0},fc:3,unitid:1,address:5032,quantity:1},{value:{topconelow:0},fc:3,unitid:1,address:5034,quantity:1},{value:{highlimitweight:0},fc:3,unitid:1,address:5048,quantity:1},{value:{sealtime:0},fc:3,unitid:1,address:5050,quantity:1},{value:{striplength:0},fc:3,unitid:1,address:5052,quantity:1},{value:{falltime:0},fc:3,unitid:1,address:5054,quantity:1},{value:{nominalweight:0},fc:3,unitid:1,address:5064,quantity:1},{value:{tne:0},fc:3,unitid:1,address:5066,quantity:1},{value:{fbdelay2:0},fc:3,unitid:1,address:5092,quantity:1},{value:{lvfdelay:0},fc:3,unitid:1,address:5094,quantity:1},{value:{wbdelay:0},fc:3,unitid:1,address:5098,quantity:1},{value:{wbopentime:0},fc:3,unitid:1,address:5100,quantity:1},{value:{fbopentime:0},fc:3,unitid:1,address:5104,quantity:1},{value:{staggerdelay:0},fc:3,unitid:1,address:5106,quantity:1},{value:{lowlowlimit:0},fc:3,unitid:1,address:5108,quantity:1},{value:{biasweight:0},fc:3,unitid:1,address:5110,quantity:1},{value:{striptime:0},fc:3,unitid:1,address:5112,quantity:1}];const s=require("https");var l=e.n(s);function c(e){return t=this,n=void 0,a=function(){var t,n,i;return function(e,t){var n,i,a,r,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,i=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){u=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){u.label=r[1];break}if(6===r[0]&&u.label<a[1]){u.label=a[1],a=r;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(r);break}a[2]&&u.ops.pop(),u.trys.pop();continue}r=t.call(e,u)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}(this,(function(a){switch(a.label){case 0:return t=JSON.stringify(e),n={method:"POST",hostname:"industrial.api.ubidots.com",path:"/api/v1.6/devices/"+process.env.DEVICE_LABEL,headers:{"X-Auth-Token":""+process.env.TOKEN,"x-ubidots-apikey":""+process.env.API_KEY,"Content-Type":"application/json"},maxRedirects:20},[4,(i=l().request(n)).write(t)];case 1:return a.sent(),i.end(),[2]}}))},new((i=void 0)||(i=Promise))((function(e,r){function u(e){try{s(a.next(e))}catch(e){r(e)}}function o(e){try{s(a.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(u,o)}s((a=a.apply(t,n||[])).next())}));var t,n,i,a}t.config();var d,f=new function(){this.keys={lowproducttime:0,robaguptime:0,interlocktime:0,runtime:0,pausedtime:0,faulttime:0,outoffilmtime:0,fullbags:0,targetweight:0,baglength:0,bagsperminute:0,topconehigh:0,topconelow:0,shiftefficiency:0,highlimitweight:0,sealtime:0,striplength:0,falltime:0,nominalweight:0,tne:0,fbdelay2:0,lvfdelay:0,wbdelay:0,wbopentime:0,fbopentime:0,staggerdelay:0,lowlowlimit:0,biasweight:0,striptime:0}},p=new(r().Socket),y=new(i().client.TCP)(p,1),h={host:process.env.HOST,port:parseInt(process.env.MODBUS_PORT)};!function(){try{p.on("connect",(function(){d=(0,u.interval)(5e3).subscribe((function(){!function(){var e,t,n,i;e=this,t=void 0,i=function(){var e,t,n,i,a,r,u;return function(e,t){var n,i,a,r,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,i=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){u=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){u.label=r[1];break}if(6===r[0]&&u.label<a[1]){u.label=a[1],a=r;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(r);break}a[2]&&u.ops.pop(),u.trys.pop();continue}r=t.call(e,u)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}(this,(function(s){switch(s.label){case 0:e={},t=0,s.label=1;case 1:return t<o.length?(n=o[t],[4,y.readHoldingRegisters(n.address,1)]):[3,4];case 2:i=s.sent(),a=Object.keys(n.value)[0],r=f.keys[a],u=i.response.body.values[0],r!==u&&(f.keys[a]=u,e[a]=u),s.label=3;case 3:return t++,[3,1];case 4:return[4,c(e)];case 5:return s.sent(),[2,Promise.resolve()]}}))},new((n=void 0)||(n=Promise))((function(a,r){function u(e){try{s(i.next(e))}catch(e){r(e)}}function o(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}s((i=i.apply(e,t||[])).next())}))}()}))})),p.connect(h)}catch(e){d.unsubscribe()}}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pb3QtZmxvdy1nYXRld2F5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2lvdC1mbG93LWdhdGV3YXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW90LWZsb3ctZ2F0ZXdheS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW90LWZsb3ctZ2F0ZXdheS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2lvdC1mbG93LWdhdGV3YXkvZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9pb3QtZmxvdy1nYXRld2F5L2V4dGVybmFsIFwianNtb2RidXNcIiIsIndlYnBhY2s6Ly9pb3QtZmxvdy1nYXRld2F5L2V4dGVybmFsIFwibmV0XCIiLCJ3ZWJwYWNrOi8vaW90LWZsb3ctZ2F0ZXdheS9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly9pb3QtZmxvdy1nYXRld2F5Ly4vc3JjL21vZGVscy9tb2RidXMvcGF5bG9hZC1kYXRhLnRzIiwid2VicGFjazovL2lvdC1mbG93LWdhdGV3YXkvZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovL2lvdC1mbG93LWdhdGV3YXkvLi9zcmMvdWJpZG90cy1kYXRhLXNlbmRlci50cyIsIndlYnBhY2s6Ly9pb3QtZmxvdy1nYXRld2F5Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9pb3QtZmxvdy1nYXRld2F5Ly4vc3JjL21vZGVscy9tb2RidXMvbW9kYnVzLXZhcmlhYmxlLW1hcHBlci50cyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlcXVpcmUiLCJkYXRhVXBvbkNoYW5nZSIsInZhbHVlIiwidGFyZ2V0d2VpZ2h0IiwiZmMiLCJ1bml0aWQiLCJhZGRyZXNzIiwicXVhbnRpdHkiLCJiYWdsZW5ndGgiLCJiYWdzcGVybWludXRlIiwidG9wY29uZWhpZ2giLCJ0b3Bjb25lbG93IiwiaGlnaGxpbWl0d2VpZ2h0Iiwic2VhbHRpbWUiLCJzdHJpcGxlbmd0aCIsImZhbGx0aW1lIiwibm9taW5hbHdlaWdodCIsInRuZSIsImZiZGVsYXkyIiwibHZmZGVsYXkiLCJ3YmRlbGF5Iiwid2JvcGVudGltZSIsImZib3BlbnRpbWUiLCJzdGFnZ2VyZGVsYXkiLCJsb3dsb3dsaW1pdCIsImJpYXN3ZWlnaHQiLCJzdHJpcHRpbWUiLCJzZW5kTW9kYnVzRGF0YVRvVWJpZG90cyIsIm1vZGJ1c1BheWxvYWQiLCJwb3N0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwibWV0aG9kIiwiaG9zdG5hbWUiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIkRFVklDRV9MQUJFTCIsImhlYWRlcnMiLCJUT0tFTiIsIkFQSV9LRVkiLCJtYXhSZWRpcmVjdHMiLCJyZXF1ZXN0Iiwid3JpdGUiLCJlbmQiLCJpbnRlcnZhbF8kIiwidmFyaWFibGVNYXBwZXIiLCJrZXlzIiwibG93cHJvZHVjdHRpbWUiLCJyb2JhZ3VwdGltZSIsImludGVybG9ja3RpbWUiLCJydW50aW1lIiwicGF1c2VkdGltZSIsImZhdWx0dGltZSIsIm91dG9mZmlsbXRpbWUiLCJmdWxsYmFncyIsInNoaWZ0ZWZmaWNpZW5jeSIsInNvY2tldCIsImNsaWVudCIsImhvc3QiLCJIT1NUIiwicG9ydCIsInBhcnNlSW50IiwiTU9EQlVTX1BPUlQiLCJvbiIsImludGVydmFsIiwic3Vic2NyaWJlIiwidmFyaWFibGVzVG9TZW5kVG9DbG91ZCIsImkiLCJsZW5ndGgiLCJwYXlsb2FkIiwicmVhZEhvbGRpbmdSZWdpc3RlcnMiLCJyZWdpc3RlckRhdGEiLCJ2YXJpYWJsZUtleSIsInByZXZpb3VzVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJyZXNwb25zZSIsImJvZHkiLCJ2YWx1ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlbmRPbmx5Q2hhbmdlZERhdGEiLCJjb25uZWN0IiwiZXJyb3IiLCJ1bnN1YnNjcmliZSIsIm1haW4iXSwibWFwcGluZ3MiOiJtQkFDQSxJQUFJQSxFQUFzQixDQ0ExQixFQUF5QkMsSUFDeEIsSUFBSUMsRUFBU0QsR0FBVUEsRUFBT0UsV0FDN0IsSUFBTUYsRUFBZ0IsUUFDdEIsSUFBTUEsRUFFUCxPQURBRCxFQUFvQkksRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsR0NMUixFQUF3QixDQUFDSSxFQUFTQyxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hQLEVBQW9CUyxFQUFFRixFQUFZQyxLQUFTUixFQUFvQlMsRUFBRUgsRUFBU0UsSUFDNUVFLE9BQU9DLGVBQWVMLEVBQVNFLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxNQ0ozRSxFQUF3QixDQUFDTSxFQUFLQyxJQUFTTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxJQ0FqRixNQUFNLEVBQStCSSxRQUFRLFVDQXZDLEVBQStCQSxRQUFRLFksYUNBN0MsTUFBTSxFQUErQkEsUUFBUSxPLGFDQTdDLE1BQU0sRUFBK0JBLFFBQVEsUUN3QnRDLElBa0VNQyxFQUFrQyxDQUM3QyxDQUNFQyxNQUFPLENBQ0xDLGFBQWMsR0FFaEJDLEdBQUksRUFDSkMsT0FBUSxFQUNSQyxRQUFTLEtBQ1RDLFNBQVUsR0FFWixDQUNFTCxNQUFPLENBQ0xNLFVBQVcsR0FFYkosR0FBSSxFQUNKQyxPQUFRLEVBQ1JDLFFBQVMsS0FDVEMsU0FBVSxHQUVaLENBQ0VMLE1BQU8sQ0FDTE8sY0FBZSxHQUVqQkwsR0FBSSxFQUNKQyxPQUFRLEVBQ1JDLFFBQVMsS0FDVEMsU0FBVSxHQUVaLENBQ0VMLE1BQU8s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SyxFQUNMQyxTQUFVLEVBQ1ZDLFNBQVUsRUFDVkMsUUFBUyxFQUNUQyxXQUFZLEVBQ1pDLFdBQVksRUFDWkMsYUFBYyxFQUNkQyxZQUFhLEVBQ2JDLFdBQVksRUFDWkMsVUFBVyxJRGRUZ0MsRUFBUyxJQUFJLFlBRWJDLEVBQVMsSUFBSSxnQkFBb0JELEVBRGhCLEdBRWpCMUIsRUFBaUMsQ0FDckM0QixLQUFNeEIsUUFBUUMsSUFBSXdCLEtBQ2xCQyxLQUFNQyxTQUFTM0IsUUFBUUMsSUFBSTJCLGVBSzdCLFdBQ0UsSUFDRU4sRUFBT08sR0FBRyxXQUFXLFdBR25CbkIsR0FBYSxJQUFBb0IsVUFBUyxLQUFNQyxXQUFVLFlBWTVDLFcsZ3BDQUNRQyxFQUFvRCxHQUVqREMsRUFBSSxFLHdCQUFHQSxFQUFJcEUsRUFBZXFFLFFBQzNCQyxFQUF5QnRFLEVBQWVvRSxHQUN6QixHQUFNVixFQUFPYSxxQkFBcUJELEVBQVFqRSxRQUFTLEtBRmpDLE0sT0FFakNtRSxFQUFlLFNBRWZDLEVBQWNuRixPQUFPeUQsS0FBS3VCLEVBQVFyRSxPQUFPLEdBQ3pDeUUsRUFBZ0I1QixFQUFlQyxLQUFLMEIsR0FDcENFLEVBQWVILEVBQWFJLFNBQVNDLEtBQUtDLE9BQU8sR0FFbkRKLElBQWtCQyxJQUNwQjdCLEVBQWVDLEtBQUswQixHQUFlRSxFQUNuQ1IsRUFBdUJNLEdBQWVFLEcsd0JBVkNQLEksYUFpQjNDLFNBQU0xQyxFQUF3QnlDLEksT0FFOUIsT0FGQSxTQUVPLENBQVAsRUFBT1ksUUFBUUMsZ0IsbVJBakNUQyxTQUlKeEIsRUFBT3lCLFFBQVFuRCxHQUNmLE1BQU9vRCxHQUVQdEMsRUFBV3VDLGVBNkJmQyxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImRvdGVudlwiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJqc21vZGJ1c1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJuZXRcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwicnhqc1wiKTs7IiwiaW1wb3J0IHsgTW9kYnVzUGF5bG9hZCB9IGZyb20gXCIuL21vZGJ1cy1wYXlsb2FkXCI7XG5cbi8qIFRPRE86IERvIHRoaXMgb25lIG1hbnVhbGx5IGZvciBmdWxsIGJhZ3MgKi9cbi8vICB7XG4vLyAgICAgdmFsdWU6IHtcbi8vICAgICAgIGZ1bGxiYWdzOiAwLFxuLy8gICAgIH0sXG4vLyAgICAgZmM6IDMsXG4vLyAgICAgdW5pdGlkOiAxLFxuLy8gICAgIGFkZHJlc3M6IDUwMDAsXG4vLyAgICAgcXVhbnRpdHk6IDEsXG4vLyAgIH0sXG5cbi8qICBUT0RPOiBEbyB0aGlzIG9uZSBtYW51YWxseSBmb3Igc2hpZnQgZWZmaWNpZW5jeSAqL1xuLy8gIHtcbi8vICAgICB2YWx1ZToge1xuLy8gICAgICAgc2hpZnRlZmZpY2llbmN5OiAwLFxuLy8gICAgIH0sXG4vLyAgICAgZmM6IDMsXG4vLyAgICAgdW5pdGlkOiAxLFxuLy8gICAgIGFkZHJlc3M6IDUwMzYsXG4vLyAgICAgcXVhbnRpdHk6IDEsXG4vLyAgIH0sXG5cbmV4cG9ydCBjb25zdCB0aW1lQ2hhbmdlRGF0YTogTW9kYnVzUGF5bG9hZFtdID0gW1xuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGxvd3Byb2R1Y3R0aW1lOiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDMwMDAsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgcm9iYWd1cHRpbWU6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogMzAwNCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBpbnRlcmxvY2t0aW1lOiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDMwMDgsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgcnVudGltZTogMCxcbiAgICB9LFxuICAgIGZjOiAzLFxuICAgIHVuaXRpZDogMSxcbiAgICBhZGRyZXNzOiAzMDEwLFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHBhdXNlZHRpbWU6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogMzAxMixcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBmYXVsdHRpbWU6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogMzAxNCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBvdXRvZmZpbG10aW1lOiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDMwMTYsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZGF0YVVwb25DaGFuZ2U6IE1vZGJ1c1BheWxvYWRbXSA9IFtcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICB0YXJnZXR3ZWlnaHQ6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTAxMCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBiYWdsZW5ndGg6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTAxNCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBiYWdzcGVybWludXRlOiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDUwMTYsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgdG9wY29uZWhpZ2g6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTAzMixcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICB0b3Bjb25lbG93OiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDUwMzQsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgaGlnaGxpbWl0d2VpZ2h0OiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDUwNDgsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgc2VhbHRpbWU6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTA1MCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBzdHJpcGxlbmd0aDogMCxcbiAgICB9LFxuICAgIGZjOiAzLFxuICAgIHVuaXRpZDogMSxcbiAgICBhZGRyZXNzOiA1MDUyLFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGZhbGx0aW1lOiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDUwNTQsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgbm9taW5hbHdlaWdodDogMCxcbiAgICB9LFxuICAgIGZjOiAzLFxuICAgIHVuaXRpZDogMSxcbiAgICBhZGRyZXNzOiA1MDY0LFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHRuZTogMCxcbiAgICB9LFxuICAgIGZjOiAzLFxuICAgIHVuaXRpZDogMSxcbiAgICBhZGRyZXNzOiA1MDY2LFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGZiZGVsYXkyOiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDUwOTIsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgbHZmZGVsYXk6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTA5NCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICB3YmRlbGF5OiAwLFxuICAgIH0sXG4gICAgZmM6IDMsXG4gICAgdW5pdGlkOiAxLFxuICAgIGFkZHJlc3M6IDUwOTgsXG4gICAgcXVhbnRpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZToge1xuICAgICAgd2JvcGVudGltZTogMCxcbiAgICB9LFxuICAgIGZjOiAzLFxuICAgIHVuaXRpZDogMSxcbiAgICBhZGRyZXNzOiA1MTAwLFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGZib3BlbnRpbWU6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTEwNCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBzdGFnZ2VyZGVsYXk6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTEwNixcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBsb3dsb3dsaW1pdDogMCxcbiAgICB9LFxuICAgIGZjOiAzLFxuICAgIHVuaXRpZDogMSxcbiAgICBhZGRyZXNzOiA1MTA4LFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGJpYXN3ZWlnaHQ6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTExMCxcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiB7XG4gICAgICBzdHJpcHRpbWU6IDAsXG4gICAgfSxcbiAgICBmYzogMyxcbiAgICB1bml0aWQ6IDEsXG4gICAgYWRkcmVzczogNTExMixcbiAgICBxdWFudGl0eTogMSxcbiAgfSxcbl07XG4iLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImh0dHBzXCIpOzsiLCJpbXBvcnQgaHR0cHMgZnJvbSBcImh0dHBzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTW9kYnVzRGF0YVRvVWJpZG90cyhtb2RidXNQYXlsb2FkOiB7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlcjtcbn0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShtb2RidXNQYXlsb2FkKTtcblxuICBjb25zdCBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaG9zdG5hbWU6IFwiaW5kdXN0cmlhbC5hcGkudWJpZG90cy5jb21cIixcbiAgICBwYXRoOiBgL2FwaS92MS42L2RldmljZXMvJHtwcm9jZXNzLmVudi5ERVZJQ0VfTEFCRUx9YCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQXV0aC1Ub2tlblwiOiBgJHtwcm9jZXNzLmVudi5UT0tFTn1gLFxuICAgICAgXCJ4LXViaWRvdHMtYXBpa2V5XCI6IGAke3Byb2Nlc3MuZW52LkFQSV9LRVl9YCxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgbWF4UmVkaXJlY3RzOiAyMCxcbiAgfTtcblxuICAvLyBjb25zdCByZXF1ZXN0OiBhbnkgPSBodHRwcy5yZXF1ZXN0KG9wdGlvbnMsIChyZXNwb25zZTogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgY2h1bmtzOiBhbnlbXSA9IFtdO1xuXG4gIC8vICAgcmVzcG9uc2Uub24oXCJkYXRhXCIsIChjaHVuazogYW55KSA9PiBjaHVua3MucHVzaChjaHVuaykpO1xuXG4gIC8vICAgcmVzcG9uc2Uub24oXCJlbmRcIiwgKCkgPT4ge1xuICAvLyAgICAgY29uc3QgYm9keSA9IEJ1ZmZlci5jb25jYXQoY2h1bmtzKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGJvZHkudG9TdHJpbmcoKSk7XG4gIC8vICAgfSk7XG5cblx0Ly8gXHRyZXNwb25zZS5vbihcImVycm9yXCIsIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cdC8vIH0pO1xuXHRcblx0Y29uc3QgcmVxdWVzdDogYW55ID0gaHR0cHMucmVxdWVzdChvcHRpb25zKTtcblxuICBhd2FpdCByZXF1ZXN0LndyaXRlKHBvc3REYXRhKTtcblxuICByZXF1ZXN0LmVuZCgpO1xufVxuIiwiaW1wb3J0ICogYXMgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcblxuaW1wb3J0IGpzbW9kYnVzIGZyb20gXCJqc21vZGJ1c1wiO1xuaW1wb3J0IG5ldCBmcm9tIFwibmV0XCI7XG5cbmltcG9ydCB7IGludGVydmFsLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBkYXRhVXBvbkNoYW5nZSwgdGltZUNoYW5nZURhdGEgfSBmcm9tIFwiLi9tb2RlbHMvbW9kYnVzL3BheWxvYWQtZGF0YVwiO1xuaW1wb3J0IHsgTW9kYnVzUGF5bG9hZCB9IGZyb20gXCIuL21vZGVscy9tb2RidXMvbW9kYnVzLXBheWxvYWRcIjtcbmltcG9ydCB7IE1vZGJ1c1ZhcmlhYmxlTWFwcGVyIH0gZnJvbSBcIi4vbW9kZWxzL21vZGJ1cy9tb2RidXMtdmFyaWFibGUtbWFwcGVyXCI7XG5pbXBvcnQgeyBzZW5kTW9kYnVzRGF0YVRvVWJpZG90cyB9IGZyb20gXCIuL3ViaWRvdHMtZGF0YS1zZW5kZXJcIjtcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCB2YXJpYWJsZU1hcHBlciA9IG5ldyBNb2RidXNWYXJpYWJsZU1hcHBlcigpO1xuXG5jb25zdCBzb2NrZXQgPSBuZXcgbmV0LlNvY2tldCgpO1xuY29uc3QgdW5pdElEOiBudW1iZXIgPSAxO1xuY29uc3QgY2xpZW50ID0gbmV3IGpzbW9kYnVzLmNsaWVudC5UQ1Aoc29ja2V0LCB1bml0SUQpO1xuY29uc3Qgb3B0aW9uczogbmV0LlNvY2tldENvbm5lY3RPcHRzID0ge1xuICBob3N0OiBwcm9jZXNzLmVudi5IT1NULFxuICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5NT0RCVVNfUE9SVCksXG59O1xuXG5sZXQgaW50ZXJ2YWxfJDogU3Vic2NyaXB0aW9uO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICB0cnkge1xuICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDT05ORUNURURcIik7XG5cbiAgICAgIGludGVydmFsXyQgPSBpbnRlcnZhbCg1MDAwKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzZW5kT25seUNoYW5nZWREYXRhKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5jb25uZWN0KG9wdGlvbnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBpbnRlcnZhbF8kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZE9ubHlDaGFuZ2VkRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdmFyaWFibGVzVG9TZW5kVG9DbG91ZDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVVwb25DaGFuZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXlsb2FkOiBNb2RidXNQYXlsb2FkID0gZGF0YVVwb25DaGFuZ2VbaV07XG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgY2xpZW50LnJlYWRIb2xkaW5nUmVnaXN0ZXJzKHBheWxvYWQuYWRkcmVzcywgMSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUtleSA9IE9iamVjdC5rZXlzKHBheWxvYWQudmFsdWUpWzBdO1xuICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YXJpYWJsZU1hcHBlci5rZXlzW3ZhcmlhYmxlS2V5XTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSByZWdpc3RlckRhdGEucmVzcG9uc2UuYm9keS52YWx1ZXNbMF07XG5cbiAgICBpZiAocHJldmlvdXNWYWx1ZSAhPT0gY3VycmVudFZhbHVlKSB7XG4gICAgICB2YXJpYWJsZU1hcHBlci5rZXlzW3ZhcmlhYmxlS2V5XSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgIHZhcmlhYmxlc1RvU2VuZFRvQ2xvdWRbdmFyaWFibGVLZXldID0gY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKHZhcmlhYmxlc1RvU2VuZFRvQ2xvdWQpO1xuICAvLyBjb25zb2xlLmxvZyhcIlxcblwiKTtcblxuICBhd2FpdCBzZW5kTW9kYnVzRGF0YVRvVWJpZG90cyh2YXJpYWJsZXNUb1NlbmRUb0Nsb3VkKTtcblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbm1haW4oKTtcbiIsImV4cG9ydCBjbGFzcyBNb2RidXNWYXJpYWJsZU1hcHBlciB7XG4gIHB1YmxpYyBrZXlzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGxvd3Byb2R1Y3R0aW1lOiAwLFxuICAgIHJvYmFndXB0aW1lOiAwLFxuICAgIGludGVybG9ja3RpbWU6IDAsXG4gICAgcnVudGltZTogMCxcbiAgICBwYXVzZWR0aW1lOiAwLFxuICAgIGZhdWx0dGltZTogMCxcbiAgICBvdXRvZmZpbG10aW1lOiAwLFxuICAgIGZ1bGxiYWdzOiAwLFxuICAgIHRhcmdldHdlaWdodDogMCxcbiAgICBiYWdsZW5ndGg6IDAsXG4gICAgYmFnc3Blcm1pbnV0ZTogMCxcbiAgICB0b3Bjb25laGlnaDogMCxcbiAgICB0b3Bjb25lbG93OiAwLFxuICAgIHNoaWZ0ZWZmaWNpZW5jeTogMCxcbiAgICBoaWdobGltaXR3ZWlnaHQ6IDAsXG4gICAgc2VhbHRpbWU6IDAsXG4gICAgc3RyaXBsZW5ndGg6IDAsXG4gICAgZmFsbHRpbWU6IDAsXG4gICAgbm9taW5hbHdlaWdodDogMCxcbiAgICB0bmU6IDAsXG4gICAgZmJkZWxheTI6IDAsXG4gICAgbHZmZGVsYXk6IDAsXG4gICAgd2JkZWxheTogMCxcbiAgICB3Ym9wZW50aW1lOiAwLFxuICAgIGZib3BlbnRpbWU6IDAsXG4gICAgc3RhZ2dlcmRlbGF5OiAwLFxuICAgIGxvd2xvd2xpbWl0OiAwLFxuICAgIGJpYXN3ZWlnaHQ6IDAsXG4gICAgc3RyaXB0aW1lOiAwLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==