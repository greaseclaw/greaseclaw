import{g as ih}from"./env-BDiW9OGO.js";import{c as It}from"./_commonjs-dynamic-modules-D39DOrAz.js";globalThis.process??={cwd:()=>"/",env:Object.create(null)};function ah(C,ae){for(var pe=0;pe<ae.length;pe++){const le=ae[pe];if(typeof le!="string"&&!Array.isArray(le)){for(const se in le)if(se!=="default"&&!(se in C)){const K=Object.getOwnPropertyDescriptor(le,se);K&&Object.defineProperty(C,se,K.get?K:{enumerable:!0,get:()=>le[se]})}}}return Object.freeze(Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}))}var Je={},na={exports:{}};var wp;function Mp(){return wp||(wp=1,(function(C,ae){var pe=(()=>{var le=Object.defineProperty,se=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyNames,R=Object.prototype.hasOwnProperty,W=(e=>typeof It<"u"?It:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof It<"u"?It:t)[r]}):e)(function(e){if(typeof It<"u")return It.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),S=(e,t)=>()=>(e&&(t=e(e=0)),t),F=(e,t)=>{for(var r in t)le(e,r,{get:t[r],enumerable:!0})},M=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of K(t))!R.call(e,a)&&a!==r&&le(e,a,{get:()=>t[a],enumerable:!(i=se(t,a))||i.enumerable});return e},A=e=>M(le({},"__esModule",{value:!0}),e),Z,P,q,oe,Ee,Ke=S(()=>{Z=new Map,P=[],q=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Z.get(e);if(i===void 0)Z.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=P.indexOf(e);a!==-1&&P.splice(a,1);for(let s=0;s<P.length;s++)if(Z.get(P[s]).priority<=r){P.splice(s,0,e);return}P.push(e)}return}throw new TypeError("not a valid backend")},oe=async e=>{let t=Z.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ee=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?P:r,a,s=[],n=new Set;for(let u of i){let l=await oe(u);typeof l=="string"?s.push({name:u,err:l}):(a||(a=l),a===l&&n.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of s)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>n.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),He=S(()=>{Ke()}),it,Et=S(()=>{it="1.27.0"}),zt,ve,da=S(()=>{Et(),zt="warning",ve={wasm:{},webgl:{},webgpu:{},versions:{common:it},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);zt=e}},get logLevel(){return zt}},Object.defineProperty(ve,"logLevel",{enumerable:!0})}),_e,Fp=S(()=>{da(),_e=ve}),pa,ca,Wp=S(()=>{pa=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=s*a,p=0,c=d,h=d*2,f=-1;n==="RGBA"?(p=0,c=d,h=d*2,f=d*3):n==="RGB"?(p=0,c=d,h=d*2):n==="RBG"&&(p=0,h=d,c=d*2);for(let g=0;g<s;g++)for(let w=0;w<a;w++){let _=(e.data[p++]-l[0])*u[0],m=(e.data[c++]-l[1])*u[1],$=(e.data[h++]-l[2])*u[2],y=f===-1?255:(e.data[f++]-l[3])*u[3];i.fillStyle="rgba("+_+","+m+","+$+","+y+")",i.fillRect(w,g,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ca=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,s,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,f=1,g=2,w=3,_=0,m=p,$=p*2,y=-1;o==="RGBA"?(_=0,m=p,$=p*2,y=p*3):o==="RGB"?(_=0,m=p,$=p*2):o==="RBG"&&(_=0,$=p,m=p*2),i=r.createImageData(a,s);for(let b=0;b<s*a;h+=c,f+=c,g+=c,w+=c,b++)i.data[h]=(e.data[_++]-d[0])*l[0],i.data[f]=(e.data[m++]-d[1])*l[1],i.data[g]=(e.data[$++]-d[2])*l[2],i.data[w]=y===-1?255:(e.data[y++]-d[3])*l[3]}else throw new Error("Can not access image data");return i}}),Yt,ha,fa,ma,ga,_a,Gp=S(()=>{xr(),Yt=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*i,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,c=0,h=1,f=2,g=3,w=0,_=l,m=l*2,$=-1;o==="RGB"&&(p=3,c=0,h=1,f=2,g=-1),u==="RGBA"?$=l*3:u==="RBG"?(w=0,m=l,_=l*2):u==="BGR"&&(m=0,_=l,w=l*2);for(let y=0;y<l;y++,c+=p,f+=p,h+=p,g+=p)d[w++]=(e[c]+n[0])/s[0],d[_++]=(e[h]+n[1])/s[1],d[m++]=(e[f]+n[2])/s[2],$!==-1&&g!==-1&&(d[$++]=(e[g]+n[3])/s[3]);return u==="RGBA"?new Oe("float32",d,[1,4,r,i]):new Oe("float32",d,[1,3,r,i])},ha=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(r){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=c,o.width=h}else o.tensorFormat="RGBA",o.height=c,o.width=h;p.drawImage(e,0,0),n=p.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(i){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=p,t!==void 0){let c=u();c.width=p,c.height=d;let h=l(c);if(h!=null)h.putImageData(e,0,0),n=h.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let c=e.height,h=e.width;return p.drawImage(e,0,0,h,c),n=p.getImageData(0,0,h,c).data,o.height=c,o.width=h,Yt(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((d,p)=>{let c=u(),h=l(c);if(!e||!h)return p();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{c.width=f.width,c.height=f.height,h.drawImage(f,0,0,c.width,c.height);let g=h.getImageData(0,0,c.width,c.height);o.height=c.height,o.width=c.width,d(Yt(g.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Yt(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},fa=(e,t)=>{let{width:r,height:i,download:a,dispose:s}=t,n=[1,i,r,4];return new Oe({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},ma=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new Oe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:s})},ga=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new Oe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:s})},_a=(e,t,r)=>new Oe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),dt,Ct,vr,ya,Hp=S(()=>{dt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ct=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),vr=!1,ya=()=>{if(!vr){vr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(dt.set("int64",BigInt64Array),Ct.set(BigInt64Array,"int64")),t&&(dt.set("uint64",BigUint64Array),Ct.set(BigUint64Array,"uint64")),i?(dt.set("float16",r),Ct.set(r,"float16")):dt.set("float16",Uint16Array)}}}),wa,$a,jp=S(()=>{xr(),wa=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},$a=(e,t)=>{switch(e.location){case"cpu":return new Oe(e.type,e.data,t);case"cpu-pinned":return new Oe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Oe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Oe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Oe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Oe,xr=S(()=>{Wp(),Gp(),Hp(),jp(),Oe=class{constructor(e,t,r){ya();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=dt.get(i);if(!n)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let u=dt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?n=u.from(t,BigInt):n=u.from(t)}else if(t instanceof u)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)n=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",n=e;else if(u==="boolean")i="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",n=Uint8Array.from(e);else{let u=Ct.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=n,this.dataLocation="cpu"}let s=wa(a);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=s}static async fromImage(e,t){return ha(e,t)}static fromTexture(e,t){return fa(e,t)}static fromGpuBuffer(e,t){return ma(e,t)}static fromMLTensor(e,t){return ga(e,t)}static fromPinnedBuffer(e,t,r){return _a(e,t,r)}toDataURL(e){return pa(this,e)}toImageData(e){return ca(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return $a(this,e)}}}),Pe,ba=S(()=>{xr(),Pe=Oe}),Ot,Sr,Ue,Be,at,st,va=S(()=>{da(),Ot=(e,t)=>{(typeof ve.trace>"u"?!ve.wasm.trace:!ve.trace)||console.timeStamp(`${e}::ORT::${t}`)},Sr=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Ot("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Ue=e=>{(typeof ve.trace>"u"?!ve.wasm.trace:!ve.trace)||Sr("BEGIN",e)},Be=e=>{(typeof ve.trace>"u"?!ve.wasm.trace:!ve.trace)||Sr("END",e)},at=e=>{(typeof ve.trace>"u"?!ve.wasm.trace:!ve.trace)||console.time(`ORT::${e}`)},st=e=>{(typeof ve.trace>"u"?!ve.wasm.trace:!ve.trace)||console.timeEnd(`ORT::${e}`)}}),xa,Kp=S(()=>{Ke(),ba(),va(),xa=class Rp{constructor(t){this.handler=t}async run(t,r,i){Ue(),at("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof Pe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Pe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);a[l]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let c=r[p];(c===null||c instanceof Pe)&&(l=!0,n=!1,a[p]=c)}if(l){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(n)for(let l of this.outputNames)a[l]=null;let o=await this.handler.run(t,a,s),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof Pe?u[l]=d:u[l]=new Pe(d.type,d.data,d.dims)}return st("InferenceSession.run"),Be(),u}async release(){return this.handler.dispose()}static async create(t,r,i,a){Ue(),at("InferenceSession.create");let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,c=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(c=t.byteLength-p,typeof i=="number"){if(c=i,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||p+c>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(d,p,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Ee(n),l=await o.createInferenceSessionHandler(s,u);return st("InferenceSession.create"),Be(),new Rp(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Tr,Zp=S(()=>{Kp(),Tr=xa}),Qp=S(()=>{}),Xp=S(()=>{}),Yp=S(()=>{}),Jp=S(()=>{}),Sa={};F(Sa,{InferenceSession:()=>Tr,TRACE:()=>Ot,TRACE_EVENT_BEGIN:()=>at,TRACE_EVENT_END:()=>st,TRACE_FUNC_BEGIN:()=>Ue,TRACE_FUNC_END:()=>Be,Tensor:()=>Pe,env:()=>_e,registerBackend:()=>q});var Me=S(()=>{He(),Fp(),Zp(),ba(),Qp(),Xp(),va(),Yp(),Jp()}),kr=S(()=>{}),Ta={};F(Ta,{default:()=>ka});var Ir,Er,ka,ec=S(()=>{ap(),pt(),Rr(),Ir="ort-wasm-proxy-worker",Er=globalThis.self?.name===Ir,Er&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Dr(r.wasm).then(()=>{ji(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ki(a,i).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:i}=r,a=_r(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Qi(i,a).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":Xi(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:n,options:o}=r;Ji(i,a,s,n,new Array(n.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},ta([...s,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":ea(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),ka=Er?null:e=>new Worker(e??Ae,{type:"classic",name:Ir})}),Ia,Ea,Ae,zr,Jt,za,Ca,Cr,Oa,Or,Aa,Ar,Ra,Rr=S(()=>{kr(),Ia=typeof location>"u"?void 0:location.origin,Ea=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,Ae=Ea(),zr=()=>{if(Ae&&!Ae.startsWith("blob:"))return Ae.substring(0,Ae.lastIndexOf("/")+1)},Jt=(e,t)=>{try{let r=t??Ae;return(r?new URL(e,r):new URL(e)).origin===Ia}catch{return!1}},za=(e,t)=>{let r=t??Ae;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ca=(e,t)=>`${t??"./"}${e}`,Cr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Oa=async e=>(await import(e)).default,Or=(ec(),A(Ta)).default,Aa=async()=>{if(!Ae)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Jt(Ae))return[void 0,Or()];let e=await Cr(Ae);return[e,Or(e)]},Ar=void 0,Ra=async(e,t,r,i)=>{let a=Ar&&!(e||t);if(a)if(Ae)a=Jt(Ae)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Ar];{let s="ort-wasm-simd-threaded.jsep.mjs",n=e??za(s,t),o=r&&n&&!Jt(n,t),u=o?await Cr(n):n??Ca(s,t);return[o?u:void 0,await Oa(u)]}}}),Br,er,At,Mr,Ba,Ma,Da,Dr,me,pt=S(()=>{Rr(),er=!1,At=!1,Mr=!1,Ba=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ma=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Da=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Dr=async e=>{if(er)return Promise.resolve();if(At)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Mr)throw new Error("previous call to 'initializeWebAssembly()' failed.");At=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Da())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ma())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Ba();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a?.mjs,o=n?.href??n,u=a?.wasm,l=u?.href??u,d=e.wasmBinary,[p,c]=await Ra(o,s,r>1,!!d||!!l),h=!1,f=[];if(t>0&&f.push(new Promise(g=>{setTimeout(()=>{h=!0,g()},t)})),f.push(new Promise((g,w)=>{let _={numThreads:r};if(d)_.wasmBinary=d,_.locateFile=m=>m;else if(l||s)_.locateFile=m=>l??s+m;else if(o&&o.indexOf("blob:")!==0)_.locateFile=m=>new URL(m,o).href;else if(p){let m=zr();m&&(_.locateFile=$=>m+$)}c(_).then(m=>{At=!1,er=!0,Br=m,g(),p&&URL.revokeObjectURL(p)},m=>{At=!1,Mr=!0,w(m)})})),await Promise.race(f),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},me=()=>{if(er&&Br)return Br;throw new Error("WebAssembly is not initialized yet.")}}),Ne,tr,fe,Pr=S(()=>{pt(),Ne=(e,t)=>{let r=me(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},tr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")tr(s,n+".",r,i);else if(typeof s=="string"||typeof s=="number")i(n,s.toString());else if(typeof s=="boolean")i(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},fe=e=>{let t=me(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let s=Number(t.getValue(a,i===4?"i32":"i64")),n=t.getValue(a+i,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Pa,tc=S(()=>{pt(),Pr(),Pa=e=>{let t=me(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Ne(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),r===0&&fe("Can't create run options."),e?.extra!==void 0&&tr(e.extra,"",new WeakSet,(n,o)=>{let u=Ne(n,i),l=Ne(o,i);t._OrtAddRunConfigEntry(r,u,l)!==0&&fe(`Can't set a run config entry: ${n} - ${o}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(n=>t._free(n)),s}}}),Ua,Na,qa,ct,Va,La,rc=S(()=>{pt(),Pr(),Ua=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Na=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},qa=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ct=(e,t,r,i)=>{let a=Ne(t,i),s=Ne(r,i);me()._OrtAddSessionConfigEntry(e,a,s)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},Va=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let s=typeof a=="string"?a:a.name,n=[];switch(s){case"webnn":if(s="WEBNN",ct(e,"session.disable_quant_qdq","1",r),ct(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let p=a?.deviceType;p&&ct(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof a!="string"){let p=a;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);ct(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Ne(s,r),u=n.length,l=0,d=0;if(u>0){l=me()._malloc(u*me().PTR_SIZE),r.push(l),d=me()._malloc(u*me().PTR_SIZE),r.push(d);for(let p=0;p<u;p++)me().setValue(l+p*me().PTR_SIZE,n[p][0],"*"),me().setValue(d+p*me().PTR_SIZE,n[p][1],"*")}await me()._OrtAppendExecutionProvider(e,o,l,d,u)!==0&&fe(`Can't append execution provider: ${s}.`)}},La=async e=>{let t=me(),r=0,i=[],a=e||{};qa(a);try{let s=Ua(a.graphOptimizationLevel??"all"),n=Na(a.executionMode??"sequential"),o=typeof a.logId=="string"?Ne(a.logId,i):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=a.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof a.optimizedModelFilePath=="string"?Ne(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,o,u,l,d),r===0&&fe("Can't create session options."),a.executionProviders&&await Va(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);ct(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[p,c]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=Ne(p,i);t._OrtAddFreeDimensionOverride(r,h,c)!==0&&fe(`Can't set a free dimension override: ${p} - ${c}.`)}return a.extra!==void 0&&tr(a.extra,"",new WeakSet,(p,c)=>{ct(r,p,c,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(n=>t._free(n)),s}}}),ht,Ze,ft,rr,ir,Ur,Nr,qr,Q=S(()=>{ht=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ze=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ft=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return r>0?Math.ceil(i*r):void 0},rr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ir=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ur=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Nr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Vr,Fa=S(()=>{kr(),Vr=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let n=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let l=u.byteLength;new Uint8Array(s,n,l).set(u),n+=l}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Wa,Ga,Ha,ja,Lr,Ka,ue,Qe=S(()=>{Q(),Wa=["V","I","W","E","F"],Ga=(e,t)=>{console.log(`[${Wa[e]},${new Date().toISOString()}]${t}`)},Lr=(e,t)=>{Ha=e,ja=t},Ka=(e,t)=>{let r=ir(e),i=ir(Ha);r>=i&&Ga(r,typeof t=="function"?t():t)},ue=(...e)=>{ja&&Ka(...e)}}),Za,xt,T,ar,Qa,Xa,Ya,ee=S(()=>{Za=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},xt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(i<2||a<2)return;let o=Za.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=r?3:1;o<=s;o++){let u=i-o<0?1:e[i-o],l=a-o<0?1:t[a-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)n[s-o]=Math.max(u,l);else{if(d>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},T=class $r{static size(t){return $r.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){a[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,r/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return $r.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return $r.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,s)=>a+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},ar=class Xt{static adjustPoolAttributes(t,r,i,a,s,n){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=i[o]||n[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Xt.adjustPadAndReturnShape(t[u+(n?1:2)],r[u],i[u],a[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,a,s,n,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Xt.computeShapeHelper(t,r,u,i,a,s,n,o),u}static computeConvOutputShape(t,r,i,a,s,n,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Xt.computeShapeHelper(!1,t,u,i,a,s,n,o),u}static computeShapeHelper(t,r,i,a,s,n,o,u){if(t)for(let l=0;l<r.length-2;l++)i.push(1);else for(let l=0;l<r.length-2;l++)i.push(Xt.adjustPadAndReturnShape(r[l+2],a[l],s[l],n[l],o,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,a,s,n,o,u){let l=i*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[n]=0,s[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+r-1)/r-1)*r+a-t;return s[n]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),s[o]=d-s[n],Math.floor((t+d-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[o]-l)/r+1)}},Qa=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(a&&!xt.isValidBroadcast(a,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},Xa=-34028234663852886e22,Ya=34028234663852886e22}),Fr,Ja=S(()=>{Q(),Fr=(e,t)=>new(rr(t))(e)}),Wr,Gr,Hr,es,jr,ts,Kr,Zr,Qr,rs,is,ic=S(()=>{Q(),Qe(),Wr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Gr=(e,t)=>{if(t==="int32")return e;let r=Wr.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,s=new(rr(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let n=new Int32Array(a);for(let o=0;o<a;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");n[o]=Number(u)}return new Uint8Array(n.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let n=Int32Array.from(s,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Hr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},es=1,jr=()=>es++,ts=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Kr=(e,t)=>{let r=Wr.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Zr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:s,fallbackDataType:n}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=s,this.fallbackDataType=n}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Kr(this.dataType,this.tensorShape)}destroy(){ue("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Hr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Qr=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),n;if(!s?.input.dataTypes.includes(t)){if(n=ts.get(t),!n||s?.input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);ue("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Kr(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Gr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ue("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Hr(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},rs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=jr();return this.tensorTrackersById.set(e,new Qr(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){ue("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ue("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),s=jr(),n=new Zr({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new Qr(this,n)),this.externalTensors.add(n),s}async getCachedTensor(e,t,r,i,a,s,n){let o=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,r)){ue("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}ue("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:n??t,shape:r,dimensions:r,usage:i,writable:a,readable:s});return new Zr({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},is=(...e)=>new rs(...e)}),Rt,as,ss,ac=S(()=>{Q(),pt(),Ja(),ic(),Qe(),Rt=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),as=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,s)=>a===i[s]&&e[a]===t[a])},ss=class{constructor(e){this.tensorManager=is(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Lr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ue("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ue("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ue("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>as(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ue("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let s=Rt.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,a)}async createTemporaryTensor(e,t,r){ue("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Rt.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ue("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Fr(r,t)}}registerMLTensor(e,t,r,i){let a=Rt.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,a,i);return ue("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,a,s,n=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=s.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,d;switch(a.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(n){let p=Gr(new Uint8Array(l),"int64");d=new Int32Array(p.buffer),a.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return ue("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${n?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Rt.get(ht(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),Xr=S(()=>{}),Yr,sr,nr,ns,os,Jr,ei,us,ls,sc=S(()=>{Qe(),Xr(),Yr=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),sr=[],nr=e=>Math.ceil(Number(e)/16)*16,ns=e=>{for(let t=0;t<sr.length;t++){let r=sr[t];if(e<=r)return r}return Math.ceil(e/16)*16},os=1,Jr=()=>os++,ei=async(e,t,r,i)=>{let a=nr(r),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},us=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Yr)sr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,s=nr(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,a)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([l.finish()]),o.destroy(),ue("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=nr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ue("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Jr();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ue("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ue("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ns(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let n={id:Jr(),type:0,buffer:i};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),ue("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ue("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ei(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Yr.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ue("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ls=(...e)=>new us(...e)}),ds,he,we=S(()=>{ds=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new ds(e)}),St,or,xe,ke,V,ye,ti,Tt,nt,U,Bt,k,D,ps,ri,cs,hs,te=S(()=>{Q(),ee(),St=64,or=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},xe=(e,t=1)=>{let r=or(e,t);return typeof r=="string"?r:r[0]},ke=(e,t=1)=>{let r=or(e,t);return typeof r=="string"?r:r[1]},V=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:T.computeStrides(r)})}),t},ye=e=>e%4===0?4:e%2===0?2:1,ti=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Tt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,nt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,U=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Bt=(e,t,r,i,a)=>{let s=typeof r=="number",n=s?r:r.length,o=[...new Array(n).keys()],u=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,l=or(t,a),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],c={indices:u,value:d,storage:p,tensor:t},h=E=>typeof E=="string"?E:`${E}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},g=s?"uniforms.":"",w=`${g}${e}_shape`,_=`${g}${e}_strides`,m="";for(let E=0;E<n-1;E++)m+=`
    let dim${E} = current / ${U(_,E,n)};
    let rest${E} = current % ${U(_,E,n)};
    indices[${E}] = dim${E};
    current = rest${E};
    `;m+=`indices[${n-1}] = current;`;let $=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${m}
    return indices;
  }`,y=E=>(f.offsetToIndices=!0,n<2?E:`o2i_${e}(${E})`),b=[];if(n>=2)for(let E=n-1;E>=0;E--)b.push(`${U(_,E,n)} * (indices[${E}])`);let v=n<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${b.join("+")};
  }`,x=E=>(f.indicesToOffset=!0,n<2?E:`i2o_${e}(${E})`),I=(...E)=>n===0?"0u":`${c.indices}(${E.map(h).join(",")})`,z=(E,X)=>n<2?`${E}`:`${U(E,X,n)}`,B=(E,X,H)=>n<2?`${E}=${H};`:`${U(E,X,n)}=${H};`,re={},G=(E,X)=>{f.broadcastedIndicesToOffset=!0;let H=`${X.name}broadcastedIndicesTo${e}Offset`;if(H in re)return`${H}(${E})`;let N=[];for(let Te=n-1;Te>=0;Te--){let ze=X.indicesGet("outputIndices",Te+X.rank-n);N.push(`${z(_,Te)} * (${ze} % ${z(w,Te)})`)}return re[H]=`fn ${H}(outputIndices: ${X.type.indices}) -> u32 {
             return ${N.length>0?N.join("+"):"0u"};
           }`,`${H}(${E})`},j=(E,X)=>(()=>{if(c.storage===c.value)return`${e}[${E}]=${X};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${e}[${E}]=vec2<u32>(u32(${X}), select(0u, 0xFFFFFFFFu, ${X} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${e}[${E}]=vec2<u32>(u32(${X}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${e}[${E}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${X}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),de=E=>(()=>{if(c.storage===c.value)return`${e}[${E}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${e}[${E}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${e}[${E}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${E}] & 0xFFu), bool(${e}[${E}] & 0xFF00u), bool(${e}[${E}] & 0xFF0000u), bool(${e}[${E}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),O=n<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${d} {
    return ${de(`i2o_${e}(indices)`)};
  }`,L=n<2?"":(()=>{let E=o.map(H=>`d${H}: u32`).join(", "),X=o.map(H=>`d${H}`).join(", ");return`
  fn get_${e}(${E}) -> ${d} {
    return get_${e}ByIndices(${I(X)});
  }`})(),J=(...E)=>{if(E.length!==n)throw new Error(`indices length must be ${n}`);let X=E.map(h).join(",");return n===0?de("0u"):n===1?de(X[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}(${X})`)},ie=E=>n<2?de(E):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}ByIndices(${E})`),Y=n<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${d}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,ne=n<2?"":(()=>{let E=o.map(H=>`d${H}: u32`).join(", "),X=o.map(H=>`d${H}`).join(", ");return`
  fn set_${e}(${E}, value: ${d}) {
    set_${e}ByIndices(${I(X)}, value);
  }`})();return{impl:()=>{let E=[],X=!1;return f.offsetToIndices&&(E.push($),X=!0),f.indicesToOffset&&(E.push(v),X=!0),f.broadcastedIndicesToOffset&&(Object.values(re).forEach(H=>E.push(H)),X=!0),f.set&&(E.push(ne),X=!0),f.setByIndices&&(E.push(Y),X=!0),f.get&&(E.push(L),X=!0),f.getByIndices&&(E.push(O),X=!0),!s&&X&&E.unshift(`const ${w} = ${c.indices}(${r.join(",")});`,`const ${_} = ${c.indices}(${T.computeStrides(r).join(",")});`),E.join(`
`)},type:c,offsetToIndices:y,indicesToOffset:x,broadcastedIndicesToOffset:G,indices:I,indicesGet:z,indicesSet:B,set:(...E)=>{if(E.length!==n+1)throw new Error(`indices length must be ${n}`);let X=E[n];if(typeof X!="string")throw new Error("value must be string");let H=E.slice(0,n).map(h).join(",");return n===0?j("0u",X):n===1?j(H[0],X):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}(${H}, ${X})`)},setByOffset:j,setByIndices:(E,X)=>n<2?j(E,X):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}ByIndices(${E}, ${X});`),get:J,getByOffset:de,getByIndices:ie,usage:i,name:e,strides:_,shape:w,rank:n}},k=(e,t,r,i=1)=>Bt(e,t,r,"input",i),D=(e,t,r,i=1)=>Bt(e,t,r,"output",i),ps=(e,t,r)=>Bt(e,t,r,"atomicOutput",1),ri=(e,t,r,i=1)=>Bt(e,t,r,"internal",i),cs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=St){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},hs=(e,t)=>new cs(e,t)}),fs,ii,ms,gs,_s,ys,Re,ws,$s,ot=S(()=>{Q(),ee(),we(),te(),fs=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ii=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ms=(e,t)=>T.sortBasedOnPerm(e,ii(e.length,t)),gs=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},_s=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},ys=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Re=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ii(i,t),s=ms(e.dims,a),n=e.dims,o=s,u=i<2||ys(a,e.dims),l;if(u)return l=f=>{let g=k("input",r,n,4),w=D("output",r,o,4);return`
  ${f.registerUniform("output_size","u32").declareVariables(g,w)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let f=T.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(f/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=_s(e.dims,a),c=T.areEqual(p,[2,3,1]),h=T.areEqual(p,[3,1,2]);if(d.length===2||c||h){n=c?[d[0],d[1]*d[2]]:h?[d[0]*d[1],d[2]]:d,o=[n[1],n[0]];let f=16;return l=g=>{let w=k("a",r,n.length),_=D("output",r,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(w,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${f+1}>, ${f}>;
  ${g.mainStart([f,f,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${f} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${f}u + local_id.x;
    let input_row = workgroup_id_x * ${f}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${f}u + local_id.x;
    let output_row = workgroup_id_y * ${f}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=T.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/f),y:Math.ceil(o[0]/f)},programUniforms:[{type:12,data:g},...V(n,o)]}},getShaderSource:l}}return l=f=>{let g=k("a",r,n.length),w=D("output",r,o.length);return`
  ${f.registerUniform("output_size","u32").declareVariables(g,w)}

  ${gs(a,i,g,w)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let f=T.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...V(n,o)]}},getShaderSource:l}},ws=(e,t)=>{fs(e.inputs,t.perm),e.compute(Re(e.inputs[0],t.perm))},$s=e=>he({perm:e.perm})}),bs,vs,xs,Ss,Ts,ks,Is,Es,zs,Cs,qe,Os,As,Rs,Bs,Ms,Ds,Ps,Us,Ns,qs,nc=S(()=>{Q(),ee(),te(),si(),ot(),bs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},vs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},xs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ss={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ts=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},ks=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let a=t.map(s=>e[s]);return[r,a]},Is=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[a++]):i.push(1);return i},Es=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},zs=(e,t)=>{let r=[];if(!Es(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Cs=(e,t,r,i,a,s,n)=>{let o=r[0].dims,u=T.size(s),l=T.size(n),d=k("_A",r[0].dataType,o),p=D("output",a,s),c=64;u===1&&(c=256);let h=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `,f=g=>`
        ${g.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${g.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${xs[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${bs[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${vs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${i==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Ss[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${c}`,inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},qe=(e,t,r,i)=>{let a=e.inputs.length===1?r:ai(e.inputs,r),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((h,f)=>f));let n=T.normalizeAxes(s,e.inputs[0].dims.length),o=n,u=e.inputs[0],l=zs(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(Re(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Ts(o.length,u.dims.length));let[d,p]=ks(u.dims,o),c=d;a.keepDims&&(c=Is(d,n)),e.compute(Cs(t,a.cacheKey,[u],i,e.inputs[0].dataType,c,p),{inputs:[u]})},Os=(e,t)=>{qe(e,"ReduceMeanShared",t,"mean")},As=(e,t)=>{qe(e,"ReduceL1Shared",t,"l1")},Rs=(e,t)=>{qe(e,"ReduceL2Shared",t,"l2")},Bs=(e,t)=>{qe(e,"ReduceLogSumExpShared",t,"logSumExp")},Ms=(e,t)=>{qe(e,"ReduceMaxShared",t,"max")},Ds=(e,t)=>{qe(e,"ReduceMinShared",t,"min")},Ps=(e,t)=>{qe(e,"ReduceProdShared",t,"prod")},Us=(e,t)=>{qe(e,"ReduceSumShared",t,"sum")},Ns=(e,t)=>{qe(e,"ReduceSumSquareShared",t,"sumSquare")},qs=(e,t)=>{qe(e,"ReduceLogSumShared",t,"logSum")}}),Ve,Vs,ur,ai,Le,Ls,Fs,Ws,Gs,Hs,js,Ks,Zs,Qs,Xs,Fe,Ys,Js,en,tn,rn,an,sn,nn,on,un,si=S(()=>{Q(),ee(),we(),te(),nc(),Ve=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Vs=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ur=(e,t,r,i,a,s,n=!1,o=!1)=>{let u=[],l=r[0].dims,d=l.length,p=T.normalizeAxes(a,d),c=!o&&p.length===0;l.forEach((g,w)=>{c||p.indexOf(w)>=0?n&&u.push(1):u.push(g)});let h=u.length,f=T.size(u);return{name:e,shaderCache:t,getShaderSource:g=>{let w=[],_=k("_A",r[0].dataType,d),m=D("output",s,h),$=i(_,m,p),y=$[2];for(let b=0,v=0;b<d;b++)c||p.indexOf(b)>=0?(n&&v++,y=`for(var j${b}: u32 = 0; j${b} < ${l[b]}; j${b}++) {
                  ${$[2].includes("last_index")?`let last_index = j${b};`:""}
                  ${_.indicesSet("input_indices",b,`j${b}`)}
                  ${y}
                }`):(w.push(`${_.indicesSet("input_indices",b,m.indicesGet("output_indices",v))};`),v++);return`

        ${g.registerUniform("output_size","u32").declareVariables(_,m)}

        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${m.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${$[0]}       // init ops for reduce max/min
          ${$[1]}
          ${y}
          ${$[3]}
          ${$.length===4?m.setByOffset("global_idx","value"):$.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...V(l,u)]})}},ai=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Le=(e,t,r,i)=>{let a=e.inputs,s=a.length===1?r:ai(a,r);e.compute(ur(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?Vs:i,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Ls=(e,t)=>{Ve(e.inputs),Le(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Fs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ws=(e,t)=>{Ve(e.inputs),Le(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Gs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Hs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceMax",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},js=(e,t)=>{Ve(e.inputs),Le(e,"ReduceMean",t,(r,i,a)=>{let s=1;for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Ks=(e,t)=>{Ve(e.inputs),Le(e,"ReduceMin",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Zs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Qs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Xs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Fe=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:a*=e[s];return a<32&&i>1024},Ys=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?js(e,t):Os(e,t)},Js=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fs(e,t):As(e,t)},en=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ws(e,t):Rs(e,t)},tn=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gs(e,t):Bs(e,t)},rn=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hs(e,t):Ms(e,t)},an=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ks(e,t):Ds(e,t)},sn=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zs(e,t):Ps(e,t)},nn=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qs(e,t):Us(e,t)},on=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xs(e,t):Ns(e,t)},un=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ls(e,t):qs(e,t)}}),ni,ln,dn,oi,oc=S(()=>{Q(),we(),si(),ni=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ln=(e,t)=>{ni(e.inputs);let r=(i,a,s)=>{let n=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ur("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},dn=(e,t)=>{ni(e.inputs);let r=(i,a,s)=>{let n=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ur("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},oi=e=>he(e)}),pn,lr,cn,hn,fn,Mt,mn,gn,ui=S(()=>{Q(),ee(),Xr(),te(),pn=(e,t)=>{let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],d=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,c=p,h=c;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let $ of t.qkvHiddenSizes)if($%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],c=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}let f=l;if(p!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+c+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let g=0;if(n){if(c!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==c/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(g=n.dims[3])}let w=f+g,_=-1,m=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:p,vHiddenSize:h,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},lr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,cn=(e,t,r,i,a,s,n,o)=>{let u=ye(n?1:s),l=64,d=s/u;d<l&&(l=32);let p=Math.ceil(s/u/l),c=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:d},{type:12,data:p}],h=xe(e.dataType,u),f=ke(1,u),g=["type"];n&&g.push("type"),o&&g.push("type");let w=_=>{let m=D("x",e.dataType,e.dims,u),$=[m],y=n?k("seq_lens",n.dataType,n.dims):void 0;y&&$.push(y);let b=o?k("total_sequence_length_input",o.dataType,o.dims):void 0;b&&$.push(b);let v=ke(e.dataType),x=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(x).declareVariables(...$)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${lr(y,b,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${f}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${m.type.value}(${v}(1.0) / ${v}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${m.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${m.type.value}(${v}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${h};${u}`,inputDependencies:g},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:c})}},hn=(e,t,r,i,a,s,n,o,u)=>{let l=n+s.kvSequenceLength,d=[s.batchSize,s.numHeads,s.sequenceLength,l],p=e>1&&i,c=s.kvNumHeads?s.kvNumHeads:s.numHeads,h=p?[s.batchSize,c,l,s.headSize]:void 0,f=s.nReps?s.nReps:1,g=s.scale===0?1/Math.sqrt(s.headSize):s.scale,w=ye(s.headSize),_=s.headSize/w,m=12,$={x:Math.ceil(l/m),y:Math.ceil(s.sequenceLength/m),z:s.batchSize*s.numHeads},y=[{type:12,data:s.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:g},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:f}],b=p&&i&&T.size(i.dims)>0,v=["type","type"];b&&v.push("type"),a&&v.push("type"),o&&v.push("type"),u&&v.push("type");let x=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&x.push({dims:h,dataType:t.dataType,gpuDataType:0});let I=z=>{let B=k("q",t.dataType,t.dims,w),re=k("key",r.dataType,r.dims,w),G=[B,re];if(b){let Y=k("past_key",i.dataType,i.dims,w);G.push(Y)}a&&G.push(k("attention_bias",a.dataType,a.dims));let j=o?k("seq_lens",o.dataType,o.dims):void 0;j&&G.push(j);let de=u?k("total_sequence_length_input",u.dataType,u.dims):void 0;de&&G.push(de);let O=D("output",t.dataType,d),L=[O];p&&L.push(D("present_key",t.dataType,h,w));let J=ke(1,w),ie=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;

  var<workgroup> tileQ: array<${B.type.storage}, ${m*m}>;
  var<workgroup> tileK: array<${B.type.storage}, ${m*m}>;
  ${z.registerUniforms(ie).declareVariables(...G,...L)}
  ${z.mainStart([m,m,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${lr(j,de,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${O.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${a!==void 0};${i!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:x,dispatchGroup:$,programUniforms:y}),getShaderSource:I}},fn=(e,t,r,i,a,s,n=void 0,o=void 0)=>{let u=s+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=e>1&&i,c=a.kvNumHeads?a.kvNumHeads:a.numHeads,h=p?[a.batchSize,c,u,a.headSize]:void 0,f=[a.batchSize,a.sequenceLength,d],g=12,w={x:Math.ceil(a.vHeadSize/g),y:Math.ceil(a.sequenceLength/g),z:a.batchSize*a.numHeads},_=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:d},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:l}],m=p&&i&&T.size(i.dims)>0,$=["type","type"];m&&$.push("type"),n&&$.push("type"),o&&$.push("type");let y=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&y.push({dims:h,dataType:t.dataType,gpuDataType:0});let b=v=>{let x=k("probs",t.dataType,t.dims),I=k("v",r.dataType,r.dims),z=[x,I];m&&z.push(k("past_value",i.dataType,i.dims));let B=n?k("seq_lens",n.dataType,n.dims):void 0;n&&z.push(B);let re=o?k("total_sequence_length_input",o.dataType,o.dims):void 0;o&&z.push(re);let G=[D("output",t.dataType,f)];p&&G.push(D("present_value",t.dataType,h));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;
  var<workgroup> tileQ: array<${x.type.value}, ${g*g}>;
  var<workgroup> tileV: array<${x.type.value}, ${g*g}>;
  ${v.registerUniforms(j).declareVariables(...z,...G)}
  ${v.mainStart([g,g,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${lr(B,re,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${m&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${x.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${m&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:$},getRunData:()=>({outputs:y,dispatchGroup:w,programUniforms:_}),getShaderSource:b}},Mt=(e,t,r,i,a,s,n,o,u,l,d=void 0,p=void 0)=>{let c=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),h=c>1?n:void 0,f=c>1?o:void 0,g=c>1?l.pastSequenceLength:0,w=g+l.kvSequenceLength,_=u&&T.size(u.dims)>0?u:void 0,m=[t,r];h&&T.size(h.dims)>0&&m.push(h),_&&m.push(_),d&&m.push(d),p&&m.push(p);let $=e.compute(hn(c,t,r,h,_,l,g,d,p),{inputs:m,outputs:c>1?[-1,1]:[-1]})[0];e.compute(cn($,l.batchSize,l.numHeads,g,l.sequenceLength,w,d,p),{inputs:d&&p?[$,d,p]:[$],outputs:[]});let y=[$,i];f&&T.size(f.dims)>0&&y.push(f),d&&y.push(d),p&&y.push(p),e.compute(fn(c,$,i,f,l,g,d,p),{inputs:y,outputs:c>1?[0,2]:[0]})},mn=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let c=D("output_q",u[0].dataType,r),h=D("output_k",u[0].dataType,r),f=D("output_v",u[0].dataType,r),g=k("input",u[0].dataType,u[0].dims),w=k("weight",u[1].dataType,u[1].dims),_=k("bias",u[2].dataType,u[2].dims),m=g.type.storage,$=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${m}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${m}, ${n*n}>;
  var<workgroup> tileWeightK: array<${m}, ${n*n}>;
  var<workgroup> tileWeightV: array<${m}, ${n*n}>;
  ${p.registerUniforms($).declareVariables(g,w,_,c,h,f)}
  ${p.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${m}(0);
    var valueK = ${m}(0);
    var valueV = ${m}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},gn=(e,t)=>{let r=pn(e.inputs,t),[i,a,s]=mn(e,r);return Mt(e,i,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),_n,yn,wn,$n,uc=S(()=>{Me(),Q(),ee(),we(),te(),_n=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,s)=>{let n=a.length;if(n!==i.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((o,u)=>{if(o!==i[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},yn=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,s=e[0].dims,n=i?ye(s[s.length-1]):1,o=a==="NHWC"&&s.length>1?n:1,u=T.size(s)/n,l=i,d=l?s.length:s,p=k("x",e[0].dataType,e[0].dims,n),c=k("scale",e[1].dataType,e[1].dims,o),h=k("bias",e[2].dataType,e[2].dims,o),f=k("inputMean",e[3].dataType,e[3].dims,o),g=k("inputVar",e[4].dataType,e[4].dims,o),w=D("y",e[0].dataType,d,n),_=()=>{let $="";if(i)$=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")$=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{$=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let y=1;y<c.rank;y++)$+=`cIndices[${y}] = outputIndices[${y}];`;$+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return $},m=$=>`
  const epsilon = ${r};
  ${$.registerUniform("outputSize","u32").declareVariables(p,c,h,f,g,w)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${n}`)};
    ${_()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${g.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${n}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...V(s)]:[{type:12,data:u}]})}},wn=e=>he(e),$n=(e,t)=>{let{inputs:r,outputCount:i}=e,a=wn({...t,outputCount:i});if(_e.webgpu.validateInputContent&&_n(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yn(r,a))}}),bn,vn,xn,lc=S(()=>{ee(),te(),bn=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vn=e=>{let t=e[0].dims,r=e[0].dims[2],i=T.size(t)/4,a=e[0].dataType,s=k("input",a,t,4),n=k("bias",a,[r],4),o=k("residual",a,t,4),u=D("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(s,n,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},xn=e=>{bn(e.inputs),e.compute(vn(e.inputs))}}),Sn,ce,Tn,kn,In,En,zn,Cn,On,An,Rn,Bn,Mn,Dn,Pn,Un,Dt,Nn,dr,qn,Vn,Ln,Fn,Wn,Gn,Hn,jn,Kn,Zn,Qn,Xn,Yn,Jn,eo,to,li,ro,di,pi,io,ao,so,no,oo,uo,ci=S(()=>{Q(),ee(),we(),te(),Sn=(e,t,r,i,a,s,n)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let l=k("inputData",r,[o],4),d=D("outputData",i,[o],4),p=[{name:"vec_size",type:"u32"}];return n&&p.push(...n),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},ce=(e,t,r,i,a,s=e.dataType,n,o)=>{let u=[{type:12,data:Math.ceil(T.size(e.dims)/4)}];return n&&u.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:l=>Sn(l,T.size(e.dims),e.dataType,s,r,i,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(T.size(l[0].dims)/64/4)},programUniforms:u})}},Tn=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},kn=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},In=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},En=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},zn=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Cn=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},On=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},An=e=>he(e),Rn=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Bn=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Mn=(e,t)=>{let r=t||Bn(e.inputs),i=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Dn=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Pn=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Un=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},Dt=e=>he(e),Nn=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},dr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,qn=e=>{let t=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,dr(t)))},Vn=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},Ln=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},Fn=e=>{let t=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,dr(t)))},Wn=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Gn=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},Hn=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},jn=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Kn=e=>{let t=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Zn=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qn=e=>he(e),Xn=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Yn=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},Jn=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},eo=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},to=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},li=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ro=e=>{e.compute(ce(e.inputs[0],"Tanh",li))},di=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${li("v")};
}
`,pi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,io=e=>{let t=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",pi,di(t),void 0,e.inputs[0].dataType))},ao=(e,t)=>{let r=ke(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},so=e=>{e.compute(ce(e.inputs[0],"Log","log"))},no=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,oo=e=>`quick_gelu_impl(${e})`,uo=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",oo,no(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),lo,po,co,dc=S(()=>{ee(),te(),ci(),lo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},po=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=k("input",e[0].dataType,e[0].dims,4),i=k("bias",e[0].dataType,[e[0].dims[2]],4),a=D("output",e[0].dataType,t,4),s=T.size(t)/4,n=xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,a)}

  ${dr(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},co=e=>{lo(e.inputs),e.compute(po(e.inputs))}}),ho,fo,We,mo,go,_o,yo,wo,$o,bo,vo,xo,So,pc=S(()=>{Q(),ee(),te(),ho=(e,t,r,i,a,s,n,o,u,l,d,p)=>{let c,h;typeof o=="string"?c=h=(m,$)=>`${o}((${m}),(${$}))`:typeof o=="function"?c=h=o:(c=o.scalar,h=o.vector);let f=D("outputData",d,i.length,4),g=k("aData",u,t.length,4),w=k("bData",l,r.length,4),_;if(a)if(s){let m=T.size(t)===1,$=T.size(r)===1,y=t.length>0&&t[t.length-1]%4===0,b=r.length>0&&r[r.length-1]%4===0;m||$?_=f.setByOffset("global_idx",h(m?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),$?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):_=`
            let outputIndices = ${f.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",f)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",f)};
            ${f.setByOffset("global_idx",h(n||y?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||b?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=f.setByOffset("global_idx",h(g.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let m=($,y,b="")=>{let v=`aData[indexA${y}][componentA${y}]`,x=`bData[indexB${y}][componentB${y}]`;return`
            let outputIndices${y} = ${f.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offsetA${y} = ${g.broadcastedIndicesToOffset(`outputIndices${y}`,f)};
            let offsetB${y} = ${w.broadcastedIndicesToOffset(`outputIndices${y}`,f)};
            let indexA${y} = offsetA${y} / 4u;
            let indexB${y} = offsetB${y} / 4u;
            let componentA${y} = offsetA${y} % 4u;
            let componentB${y} = offsetB${y} % 4u;
            ${$}[${y}] = ${b}(${c(v,x)});
          `};d===9?_=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${m("outputData[global_idx]",0)}
            ${m("outputData[global_idx]",1)}
            ${m("outputData[global_idx]",2)}
            ${m("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(g,w,f)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},fo=(e,t,r,i,a,s,n=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),l=!T.areEqual(o,u),d=o,p=T.size(o),c=!1,h=!1,f=[l];if(l){let g=xt.calcShape(o,u,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");d=g.slice(),p=T.size(d);let w=T.size(o)===1,_=T.size(u)===1,m=o.length>0&&o[o.length-1]%4===0,$=u.length>0&&u[u.length-1]%4===0;f.push(w),f.push(_),f.push(m),f.push($);let y=1;for(let b=1;b<d.length;b++){let v=o[o.length-b],x=u[u.length-b];if(v===x)y*=v;else break}y%4===0?(h=!0,c=!0):(w||_||m||$)&&(c=!0)}else c=!0;return f.push(c),{name:e,shaderCache:{hint:t+f.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>ho(g,o,u,d,c,l,h,a,r.dataType,i.dataType,n,s),getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(T.size(d)/4)},...V(o,u,d)]})}},We=(e,t,r,i,a,s)=>{e.compute(fo(t,a??"",e.inputs[0],e.inputs[1],r,i,s))},mo=e=>{We(e,"Add",(t,r)=>`${t}+${r}`)},go=e=>{We(e,"Div",(t,r)=>`${t}/${r}`)},_o=e=>{We(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},yo=e=>{We(e,"Mul",(t,r)=>`${t}*${r}`)},wo=e=>{let t=k("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;We(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},$o=e=>{We(e,"Sub",(t,r)=>`${t}-${r}`)},bo=e=>{We(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},vo=e=>{We(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},xo=e=>{We(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},So=e=>{We(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),To,ko,Io,Eo,zo,Co,cc=S(()=>{Q(),ee(),we(),te(),To=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,s=i.dims.length;e.forEach((n,o)=>{if(o!==r){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((u,l)=>{if(l!==t&&u!==i.dims[l])throw new Error("non concat dimensions must match")})}})},ko=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Io=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(s):a===0?i.push(`if (inputIndex == ${a}u) { ${s} }`):a===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${a}) { ${s} }`)}return i.join(`
`)},Eo=(e,t,r,i)=>{let a=T.size(r),s=new Array(e.length),n=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:a}];for(let g=0;g<e.length;++g)o+=e[g].dims[t],s[g]=o,l.push(e[g].dims.length),n[g]=k(`input${g}`,i,l[g]),u.push("rank"),d.push({type:12,data:s[g]});for(let g=0;g<e.length;++g)d.push(...V(e[g].dims));d.push(...V(r));let p=D("output",i,r.length),c=p.indicesGet("indices",t),h=Array.from(Array(s.length).keys()).map(g=>`uniforms.sizeInConcatAxis${g}`).join(","),f=g=>`

  ${(()=>{g.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)g.registerUniform(`sizeInConcatAxis${w}`,"u32");return g.declareVariables(...n,p)})()}

  ${ko(s.length,h)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${c});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${h});
      ${c} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Io(n,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}},zo=(e,t)=>{let r=e.inputs,i=r[0].dims,a=T.normalizeAxis(t.axis,i.length);To(r,a);let s=i.slice();s[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let n=r.filter(o=>T.size(o.dims)>0);e.compute(Eo(n,a,s,r[0].dataType),{inputs:n})},Co=e=>he({axis:e.axis})}),mt,gt,_t,hi,yt=S(()=>{Q(),ee(),mt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},gt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},_t=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},hi=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Xa,Ya];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Se,Oo,fi=S(()=>{Se=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Oo=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ao,hc=S(()=>{Ao=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Pt,mi,gi=S(()=>{Q(),ee(),te(),yt(),Pt=(e,t,r,i,a)=>{let s=i-r;return`
      ${Array.from({length:r}).map((n,o)=>`
      if (${U(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,U(a,o+s,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},mi=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n[n.length-2],l=o[o.length-1],d=n[n.length-1],p=ye(l),c=ye(d),h=ye(u),f=T.size(r)/p/h,g=e.length>2,w=i?i.slice(0,-2):r.slice(0,-2),_=[T.size(w),u,l],m=[{type:12,data:f},{type:12,data:u},{type:12,data:l},{type:12,data:d}];gt(t,m),m.push(...V(w,n,o)),g&&m.push(...V(e[2].dims)),m.push(...V(_));let $=y=>{let b=ri("batch_dims",e[0].dataType,w.length),v=k("a",e[0].dataType,n.length,c),x=k("b",e[1].dataType,o.length,p),I=D("output",e[0].dataType,_.length,p),z=xe(I.type.tensor),B=mt(t,I.type.value,z),re=[v,x],G="";if(g){let O=a?p:1;re.push(k("bias",e[2].dataType,e[2].dims.length,O)),G=`${a?`value += bias[col / ${O}];`:`value += ${I.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];_t(t,j);let de=()=>{let O=`var a_data: ${v.type.value};`;for(let L=0;L<c;L++)O+=`
              let b_data${L} = b[(b_offset + (k + ${L}) * uniforms.N + col) / ${p}];`;for(let L=0;L<h;L++){O+=`a_data = a[(a_offset + (row + ${L}) * uniforms.K + k) / ${c}];`;for(let J=0;J<c;J++)O+=`
            values[${L}] = fma(${x.type.value}(a_data${c===1?"":`[${J}]`}), b_data${J}, values[${L}]);
`}return O};return`
  ${y.registerUniforms(j).registerInternalVariables(b).declareVariables(...re,I)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${b.offsetToIndices("batch")};`}

    var a_indices: ${v.type.indices};
    ${Pt("a_indices",v,v.rank-2,b.rank,"batch_indices")}
    ${v.indicesSet("a_indices",v.rank-2,0)}
    ${v.indicesSet("a_indices",v.rank-1,0)}
    let a_offset = ${v.indicesToOffset("a_indices")};

    var b_indices: ${x.type.indices};
    ${Pt("b_indices",x,x.rank-2,b.rank,"batch_indices")}
    ${x.indicesSet("b_indices",x.rank-2,0)}
    ${x.indicesSet("b_indices",x.rank-1,0)}
    let b_offset = ${x.indicesToOffset("b_indices")};
    var values: array<${I.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${de()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${G}
      ${B}
      let cur_indices = ${I.type.indices}(batch, row + i, col);
      let offset = ${I.indicesToOffset("cur_indices")};
      ${I.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${c};${h};${a}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:$}}}),Ro,Bo,_i,yi,Mo,wi,Do,pr,$i=S(()=>{Q(),ee(),te(),yt(),gi(),fi(),Ro=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Bo=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,_i=(e,t,r="f32",i,a=!1,s=32,n=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=a?u:s,p=a?s:u,c=d/t[0],h=s/t[1];if(!((a&&c===4&&e[1]===4||!a&&(c===3||c===4))&&d%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${r}>, ${d/c}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${c};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ro(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${c===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Bo(a,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},yi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Mo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",wi=(e,t,r="f32",i,a=!1,s=32,n=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=a?l:s,c=a?s:l;if(!(c%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let h=c/t[1],f=p/t[0],g=s/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${yi(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${f};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${f}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${yi(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Mo(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${d}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${w}
  }
`},Do=(e,t,r,i,a=!1)=>{let[s,n,o,u]=i,l=xe(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Se(e,l)} {
      var value = ${Se(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${Pt("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Se(e,l)} {
      var value = ${Se(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Pt("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Se(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Se(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},pr=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n.slice(0,-2),l=o.slice(0,-2),d=i?i.slice(0,-2):r.slice(0,-2),p=T.size(d),c=n[n.length-2],h=n[n.length-1],f=o[o.length-1],g=h%4===0&&f%4===0,w=c<=8?[4,1,1]:[4,4,1],_=[8,8,1],m=[Math.ceil(f/_[0]/w[0]),Math.ceil(c/_[1]/w[1]),Math.ceil(p/_[2]/w[2])],$=g?4:1,y=[...u,c,h/$],b=y.length,v=[...l,h,f/$],x=v.length,I=[p,c,f/$],z=[{type:6,data:c},{type:6,data:f},{type:6,data:h}];gt(t,z),z.push(...V(d,y,v));let B=["rank","rank"],re=e.length>2;re&&(z.push(...V(e[2].dims)),B.push("rank")),z.push(...V(I));let G=j=>{let de=d.length,O=ri("batchDims",e[0].dataType,de,1),L=xe(e[0].dataType),J=k("a",e[0].dataType,b,$),ie=k("b",e[1].dataType,x,$),Y=D("result",e[0].dataType,I.length,$),ne=[J,ie];if(re){let Te=a?$:1;ne.push(k("bias",e[2].dataType,e[2].dims.length,Te))}let E=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];_t(t,E);let X=xe(Y.type.tensor),H=mt(t,Y.type.value,X),N=Do($,re,H,[O,J,ie,Y],a);return`
  ${j.registerUniforms(E).registerInternalVariables(O).declareVariables(...ne,Y)}
  ${N}
  ${g?_i(w,_,L,O):wi(w,_,L,O)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${g};${a}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:z}),getShaderSource:G}}}),Po,Uo,fc=S(()=>{Q(),Qe(),te(),yt(),fi(),hc(),$i(),Po=(e,t,r,i,a=!1,s,n=4,o=4,u=4,l="f32")=>{let d=z=>{switch(z){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${z} is not supported.`)}},p=z=>{switch(z){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${z} is not supported.`)}},c=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",_=e?"col":"row",m=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Se(n,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${g}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(n)}
    }
    return resData;`,$=e?t&&i?`
    let col = colIn * ${n};
    ${m}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${m}
    }
    return ${Se(n,l)}(0.0);`:i&&r?`
    let col = colIn * ${n};
    ${m}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m}
    }
    return ${Se(n,l)}(0.0);`,y=e?i&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Se(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Se(o,l)}(0.0);`,b=Se(u,l),v=Se(e?n:o,l),x=Se(e?o:n,l),I=mt(s,b,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${v} {
      ${e?$:y}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${x} {
      ${e?y:$}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${b}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${Oo(a)}
      ${I}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Uo=(e,t,r,i,a,s,n,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=r[0],c=l?r[2]:r[3],h=l?r[1]:r[2],f=l?r[3]:r[1],g=l&&(d%4===0||d%3===0)&&f%4===0,w=l?f:c*h,_=l?c*h:f,m=[8,8,1],$=i<=8?[4,1,1]:[4,4,1],y=[Math.ceil(w/m[0]/$[0]),Math.ceil(_/m[1]/$[1]),Math.ceil(p/m[2]/$[2])];ue("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${y}`);let b=g?l&&d%4!==0?3:4:1,v=m[1]*$[1],x=m[0]*$[0],I=Math.max(m[0]*b,m[1]),z=i%v===0,B=a%x===0,re=s%I===0,G=g?[b,4,4]:[1,1,1],j=[{type:6,data:i},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];gt(t,j),j.push(...V(e[0].dims,e[1].dims));let de=["rank","rank"];n&&(j.push(...V(e[2].dims)),de.push("rank")),j.push(...V(r));let O=L=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];_t(t,J);let ie=g?4:1,Y=xe(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${Y}>`:Y}) {
        result[flatIndex] = ${g?`vec4<${Y}>`:Y}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${Y}>`:Y}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,E=k("x",e[0].dataType,e[0].dims.length,b===3?1:b),X=k("w",e[1].dataType,e[1].dims.length,ie),H=[E,X],N=D("result",e[0].dataType,r.length,ie);if(n){let Te=k("bias",e[2].dataType,e[2].dims.length,ie);H.push(Te),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${Y}>`:Y} {
          return bias[coords.${l?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${Ao("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${L.registerUniforms(J).declareVariables(...H,N)}
        ${ne}
        ${Po(l,z,B,re,n,t,G[0],G[1],G[2],Y)}
        ${g?_i($,m,Y,void 0,!l,I):wi($,m,Y,void 0,!l,I,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${b};${g};${z};${B};${re};${v};${x};${I}`,inputDependencies:de},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:y[0],y:y[1],z:y[2]},programUniforms:j}),getShaderSource:O}}}),No,bi,Ut,qo,vi,Vo,Lo,Fo,mc=S(()=>{Q(),Qe(),ee(),te(),yt(),fi(),No=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},bi=e=>typeof e=="number"?[e,e,e]:e,Ut=(e,t)=>t<=1?e:e+(e-1)*(t-1),qo=(e,t,r,i=1)=>{let a=Ut(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},vi=(e,t,r,i,a)=>{a==null&&(a=qo(e,t[0],i[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/i[n]+1));return s},Vo=(e,t,r,i,a,s,n,o,u,l)=>{let d,p,c,h;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let f=vi([t,r,i,1],[o,u,l],1,[a,s,n],e);p=f[0],c=f[1],h=f[2]}else if(Array.isArray(e)){if(!e.every((g,w,_)=>g===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let f=vi([t,r,i,1],[o,u,l],1,[a,s,n],e[0]);p=f[0],c=f[1],h=f[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),c=Math.ceil(r/s),h=Math.ceil(i/n);let f=(p-1)*a+o-t,g=(c-1)*s+u-r,w=(h-1)*n+l-i,_=Math.floor(f/2),m=f-_,$=Math.floor(g/2),y=g-$,b=Math.floor(w/2),v=w-b;d={top:$,bottom:y,left:b,right:v,front:_,back:m}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:c,outWidth:h}},Lo=(e,t,r,i,a,s=!1,n="channelsLast")=>{let o,u,l,d,p;if(n==="channelsLast")[o,u,l,d,p]=e;else if(n==="channelsFirst")[o,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${n}`);let[c,,h,f,g]=t,[w,_,m]=bi(r),[$,y,b]=bi(i),v=Ut(h,$),x=Ut(f,y),I=Ut(g,b),{padInfo:z,outDepth:B,outHeight:re,outWidth:G}=Vo(a,u,l,d,w,_,m,v,x,I),j=s?c*p:c,de=[0,0,0,0,0];return n==="channelsFirst"?de=[o,j,B,re,G]:n==="channelsLast"&&(de=[o,B,re,G,j]),{batchSize:o,dataFormat:n,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:B,outHeight:re,outWidth:G,outChannels:j,padInfo:z,strideDepth:w,strideHeight:_,strideWidth:m,filterDepth:h,filterHeight:f,filterWidth:g,effectiveFilterDepth:v,effectiveFilterHeight:x,effectiveFilterWidth:I,dilationDepth:$,dilationHeight:y,dilationWidth:b,inShape:e,outShape:de,filterShape:t}},Fo=(e,t,r,i,a,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((w,_)=>_)},l=[Math.ceil(No(u.x.map(w=>r[w]))/o[0]),1,1];ue("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=T.size(r),c=[{type:12,data:p},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];gt(t,c),c.push(...V(e[0].dims,e[1].dims));let h=["rank","rank"],f=e.length===3;f&&(c.push(...V(e[2].dims)),h.push("rank")),c.push(...V(r));let g=w=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];_t(t,_);let m=1,$=xe(e[0].dataType),y=k("x",e[0].dataType,e[0].dims.length,d),b=k("W",e[1].dataType,e[1].dims.length,m),v=[y,b],x=D("result",e[0].dataType,r.length,m),I="";if(f){let re=k("bias",e[2].dataType,e[2].dims.length,m);v.push(re),I+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${$} {
          return bias[${n?U("coords",4,5):U("coords",1,5)}];
        }`}let z=Se(d,$),B=mt(t,z,$);return`
            ${I}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${y.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
          ${w.registerUniforms(_).declareVariables(...v,x)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${x.offsetToIndices("global_idx")};
              let batch = ${U("coords",0,y.rank)};
              let d2 = ${n?U("coords",y.rank-1,y.rank):U("coords",1,y.rank)};
              let xFRCCorner = vec3<u32>(${n?U("coords",1,y.rank):U("coords",2,y.rank)},
              ${n?U("coords",2,y.rank):U("coords",3,y.rank)},
              ${n?U("coords",3,y.rank):U("coords",4,y.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?U("uniforms.x_shape",1,y.rank):U("uniforms.x_shape",2,y.rank)};
              let xShapeZ = ${n?U("uniforms.x_shape",2,y.rank):U("uniforms.x_shape",3,y.rank)};
              let xShapeW = ${n?U("uniforms.x_shape",3,y.rank):U("uniforms.x_shape",4,y.rank)};
              let xShapeU = ${n?U("uniforms.x_shape",4,y.rank):U("uniforms.x_shape",1,y.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?"value = value + getBiasByOutputCoords(coords)":""};
              ${B}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${d};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:c}),getShaderSource:g}}}),Wo,Go,gc=S(()=>{Q(),ee(),te(),yt(),Wo=(e,t,r,i)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],d=l/t.group,p=u&&d>=4?ye(l):1,c=T.size(r)/p,h=[{type:12,data:c},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];gt(t,h),h.push(...V(n,[o[0],o[1],o[2],o[3]/p]));let f=a?["rank","rank","rank"]:["rank","rank"];h.push(...V([r[0],r[1],r[2],r[3]/p]));let g=w=>{let _=D("output",e[0].dataType,r.length,p),m=xe(_.type.tensor),$=mt(t,_.type.value,m),y=k("x",e[0].dataType,n.length),b=k("w",e[1].dataType,o.length,p),v=[y,b];a&&v.push(k("b",e[2].dataType,e[2].dims,p));let x=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];_t(t,x);let I=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${y.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${b.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${y.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${b.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(x).declareVariables(...v,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${I}
    ${s}
    ${$}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:g}},Go=(e,t,r,i)=>{let a=e.length>2,s=ye(r[3]),n=ye(r[2]),o=T.size(r)/s/n,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],d=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];gt(t,p),p.push(...V(u,l,d));let c=(n-1)*t.strides[1]+l[1],h=f=>{let g=D("output",e[0].dataType,d.length,s),w=xe(g.type.tensor),_=mt(t,g.type.value,w),m=k("x",e[0].dataType,u.length,s),$=k("w",e[1].dataType,l.length,s),y=[m,$];a&&y.push(k("b",e[2].dataType,e[2].dims,s));let b=a?"value += b[output_channel];":"",v=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return _t(t,v),`
  ${f.registerUniforms(v).declareVariables(...y,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${m.type.value}, ${c}>;
    var values: array<${g.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${m.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${m.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${$.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${b}
      ${_}
      ${g.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${c};${l[0]};${l[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:h}}}),Ho,cr,jo,hr,xi,Si,Ko,Zo,Ti,_c=S(()=>{ee(),fc(),mc(),$i(),gc(),yt(),gi(),ot(),Ho=(e,t,r,i,a,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,l=t[0],d=t.slice(2).map((c,h)=>c+(c-1)*(r[h]-1)),p=o.map((c,h)=>c+i[h]+i[h+u]).map((c,h)=>Math.floor((c-d[h]+a[h])/a[h]));return p.splice(0,0,n),p.splice(s?3:1,0,l),p},cr=[2,3,1,0],jo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},hr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();ar.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},xi=e=>{let t=hi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Si=(e,t,r,i)=>{let a=r.format==="NHWC",s=Ho(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let v=[t[0]];if(a){let x=e.kernelCustomData.wT??e.compute(Re(t[1],cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x),v.push(x)}else v.push(t[1]);t.length===3&&v.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Go(v,r,s,i),{inputs:v}):e.compute(Wo(v,r,s,i),{inputs:v});return}let n=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],l=t[0].dims[a?3:1],d=t[1].dims[2],p=t[1].dims[3],c=s[a?1:2],h=s[a?2:3],f=s[a?3:1],g=a&&d===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if(g||d===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let v=s[0],x,I,z,B=[];if(a){let j=e.kernelCustomData.wT??e.compute(Re(t[1],cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),g){let de=o*u*l;x=t[0].reshape([1,v,de]),I=j.reshape([1,de,f]),z=[1,v,f]}else x=t[0].reshape([v,o*u,l]),I=j.reshape([1,l,f]),z=[v,c*h,f];B.push(x),B.push(I)}else x=t[0].reshape([v,l,o*u]),I=t[1].reshape([1,f,l]),z=[v,f,c*h],B.push(I),B.push(x);n&&B.push(t[2]);let re=z[2],G=B[0].dims[B[0].dims.length-1];re<8&&G<8?e.compute(mi(B,r,s,z,a,i),{inputs:B}):e.compute(pr(B,r,s,z,a,i),{inputs:B});return}let w=!0,_=e.kernelCustomData.wT??e.compute(Re(t[1],cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let m=[t[0],_];n&&m.push(t[2]);let $=a?c*h:f,y=a?f:c*h,b=d*p*l;e.compute(Uo(m,r,s,$,y,b,n,w,i),{inputs:m})},Ko=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=hr({...t,pads:a,strides:s,dilations:n,kernelShape:o},i);Si(e,i,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Zo=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=hr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=Lo(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Fo(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],i))},Ti=(e,t)=>{if(jo(e.inputs,t),e.inputs[0].dims.length===3)Ko(e,t);else if(e.inputs[0].dims.length===5)Zo(e,e.inputs,t);else{let r=hr(t,e.inputs);Si(e,e.inputs,r)}}}),Qo,yc=S(()=>{Q(),Qe(),ee(),te(),Qo=(e,t,r)=>{let i=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,u=o[2]/n,l=o[3],d=s?ye(u):1,p=s&&l===1&&u>=4,c=p?Math.floor(u/4)*4:Math.floor(u/d)*d,h=u-c,f=s?ye(l):1,g=s?l===1?d:f:1,w=T.size(a)/f,_=[Math.ceil(w/64),1,1];ue("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let m=["rank","rank"],$=[t.strides[0],t.strides[1]],y=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],b=[t.dilations[0],t.dilations[1]],v=[y[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),y[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],x=[v[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),v[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:w},{type:12,data:$},{type:12,data:y},{type:12,data:b},{type:12,data:v},{type:6,data:x},{type:12,data:c},{type:12,data:u},{type:12,data:l},...V(e[0].dims,e[1].dims)];i&&(I.push(...V(e[2].dims)),m.push("rank")),I.push(...V(a));let z=B=>{let re=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:$.length},{name:"filter_dims",type:"u32",length:y.length},{name:"dilations",type:"u32",length:y.length},{name:"effective_filter_dims",type:"u32",length:v.length},{name:"pads",type:"i32",length:x.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=xe(e[0].dataType),j=s?1:2,de=s?2:3,O=s?3:1,L=k("W",e[1].dataType,e[1].dims.length,g),J=k("Dy",e[0].dataType,e[0].dims.length,d),ie=[J,L];i&&ie.push(k("bias",e[2].dataType,[a[O]].length,f));let Y=D("result",e[0].dataType,a.length,f),ne=()=>{let H="";if(p)d===4?H+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${L.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?H+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${G}>(${L.getByOffset("w_offset")}, ${L.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(H+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${G}>(${L.getByOffset("w_offset")}, ${L.getByOffset("w_offset + 1u")}, ${L.getByOffset("w_offset + 2u")}, ${L.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(H+=`
                  let xValue = ${s?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):J.get("batch","inputChannel","idyR","idyC")};
        `,d===1)H+=`
          let w_offset = ${L.indicesToOffset(`${L.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${L.getByOffset(`w_offset / ${g}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let N=0;N<d;N++)H+=`
            let wValue${N} = ${L.getByOffset(`${L.indicesToOffset(`${L.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${N}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${N}] * wValue${N};`;return H},E=()=>{if(h===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let H="";if(d===1){H+="dotProd = dotProd";for(let N=0;N<h;N++)H+=`
            + ${J.getByOffset(`x_offset + ${N}`)} * ${L.getByOffset(`w_offset + ${N}`)}`;H+=";"}else if(d===2){if(h!==2)throw new Error(`Invalid inputChannelsRemainder ${h}.`);H+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${L.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return H},X=`
            let outputIndices = ${Y.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${Y.indicesGet("outputIndices",0)};
            let d1 = ${Y.indicesGet("outputIndices",O)};
            let r = ${Y.indicesGet("outputIndices",j)};
            let c = ${Y.indicesGet("outputIndices",de)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Y.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${j}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${de}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${L.indicesToOffset(`${L.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${g};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${ne()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${E()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${f}]`:""};
            ${Y.setByOffset("global_idx","value")};
          `;return`
    ${B.registerUniforms(re).declareVariables(...ie,Y)}
      ${B.mainStart()}
      ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${X}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${g}${f}${p}${h}`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:z}}}),Xo,Yo,Jo,ki,eu,tu,Ii,ru,iu,wc=S(()=>{yc(),yt(),ot(),Xo=(e,t,r,i,a,s)=>(e-1)*t+r+(i-1)*a+1-s,Yo=(e,t,r,i,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[a]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[a]=s)},Jo=(e,t,r,i,a,s,n,o,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let c=e[0],h=t[o?3:1]*a;for(let f=0,g=e.length-d-(o?1:0);f<d;++f,++g){let w=e[g],_=p?w*n[f]:l[f],m=Xo(w,n[f],s[f],t[g],r[f],_);Yo(m,i,s,f,f+d),p&&l.push(n[f]*(w-1)+u[f]+(t[g]-1)*r[f]+1-s[f]-s[f+d])}l.splice(0,0,c),l.splice(o?3:1,0,h)},ki=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,c)=>p*c,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,c)=>p+c,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,c)=>p+c,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}Jo(o,r,u,e.autoPad,e.group,a,l,i,n,s);let d=Object.assign({},e);return Object.assign(d,{kernelShape:r,pads:a,outputPadding:n,outputShape:s,dilations:u,strides:l}),d},eu=e=>{let t=hi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group??1,n=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,outputPadding:d,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},tu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ii=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Re(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(Qo(s,r,i),{inputs:s})},ru=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let l=ki({...t,pads:o,strides:n,dilations:s,kernelShape:a,outputPadding:u},i);Ii(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},iu=(e,t)=>{if(tu(e.inputs,t),e.inputs[0].dims.length===3)ru(e,t);else{let r=ki(t,e.inputs);Ii(e,e.inputs,r)}}}),au,su,nu,$c=S(()=>{Q(),ee(),we(),te(),au=(e,t,r,i)=>{let a=T.size(t),s=t.length,n=k("input",e,s),o=D("output",e,s),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=T.normalizeAxis(u,s),d=p=>{let c=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,h=U("uniforms.input_shape","uniforms.axis",s),f=i.reverse?c+(i.exclusive?" + 1":""):"0",g=i.reverse?h:c+(i.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${f};
                  let last : i32 = ${g};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:l},...V(t,t)]}),getShaderSource:d}},su=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(au(i,r,a,t),{inputs:[0]})},nu=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),ou,uu,lu,du,pu,bc=S(()=>{Q(),ee(),we(),te(),ou=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},uu=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)a.push(r.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},lu=(e,t)=>{let r,i,a,s,n,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([r,i,a,s]=e.dims,n=d?[r,i,a,l,l,s/l**2]:[r,i,a,s/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=d?[r,l,l,s/l**2,i,a]:[r,s/l**2,l,l,i,a],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(n),c=p.dims.length,h=e.dataType,f=k("a",h,c),g=D("output",h,c),w=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(f,g)}

  ${uu(o,c,f,g)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let m=u?[r,i*l,a*l,s/l**2]:[r,s/l**2,i*l,a*l],$=T.size(m),y=p.dims,b=T.sortBasedOnPerm(y,o);return{outputs:[{dims:m,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...V(y,b)]}},getShaderSource:w}},du=(e,t)=>{ou(e.inputs),e.compute(lu(e.inputs[0],t))},pu=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),fr,Nt,Ei,cu,hu,fu,mu,zi,gu,_u,yu,vc=S(()=>{Q(),ee(),we(),te(),fr="[a-zA-Z]|\\.\\.\\.",Nt="("+fr+")+",Ei="^"+Nt+"$",cu="("+Nt+",)*"+Nt,hu="^"+cu+"$",fu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},mu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(hu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let n=e[s].dims.slice();if(!a.match(RegExp(Ei)))throw new Error("Invalid LHS term");let o=this.processTerm(a,!0,n,s);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Nt)))throw new Error("Invalid RHS");i.match(RegExp(fr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,s=!1,n=[],o=0;if(!e.match(RegExp(Ei))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(fr,"g")),l=new fu(i);return u?.forEach((d,p)=>{if(d==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let c=a-u.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(o,o+c),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<n.length;h++){let f=String.fromCharCode(48+h);l.addSymbol(f,p+h),this.addSymbol(f,r[o++],i)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,r[o++],i)}),l}},zi=e=>e+"_max",gu=(e,t,r,i)=>{let a=e.map(l=>l.length).map((l,d)=>k(`input${d}`,t,l)),s=T.size(i),n=D("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",c="var sum = 0.0;",h="sum += prod;",f=[],g=[],w=[],_=[],m=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((y,b)=>{if(r.rhs.symbolToIndices.has(b)){let v=r.rhs.symbolToIndices.get(b)?.[0];v!==void 0&&r.lhs.forEach((x,I)=>{if(y.inputIndices.includes(I)){let z=x.symbolToIndices.get(b);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(B=>{d.push(`${a[I].indicesSet(`input${I}Indices`,B,n.indicesGet("outputIndices",v))}`)})}})}else r.lhs.forEach((v,x)=>{if(y.inputIndices.includes(x)){let I=v.symbolToIndices.get(b);if(I===void 0)throw new Error("Invalid symbol error");I.forEach(z=>{f.push(`${a[x].indicesSet(`input${x}Indices`,z,`${b}`)}`)}),_.push(`prod *= ${a[x].getByIndices(`input${x}Indices`)};`)}}),g.push(`for(var ${b}: u32 = 0; ${b} < uniforms.${zi(b)}; ${b}++) {`),w.push("}")});let $=m?[...d,`let sum = ${a.map((y,b)=>y.getByIndices(`input${b}Indices`)).join(" * ")};`]:[...d,c,...g,...f,p,..._,h,...w];return`
            ${l.registerUniforms(o.map(y=>({name:`${zi(y)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map((y,b)=>`var input${b}Indices: ${a[b].type.indices};`).join(`
`)}
            ${$.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));l.push({type:12,data:s});let d=e.map((p,c)=>[...V(p)]).reduce((p,c)=>p.concat(c),l);return d.push(...V(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}},getShaderSource:u}},_u=(e,t)=>{let r=new mu(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(gu(a,e.inputs[0].dataType,r,i))},yu=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),wu,Ci,$u,bu,vu,xc=S(()=>{Q(),ee(),te(),wu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ci=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},$u=(e,t)=>e.length>t.length?Ci(e,t):Ci(t,e),bu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=$u(t,r),a=e[0].dataType,s=a===9||T.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(T.size(i)/o),l=p=>{let c=k("input",a,t.length,n),h=D("output",a,i.length,o),f;if(a===9){let g=(w,_,m="")=>`
          let outputIndices${_} = ${h.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${c.broadcastedIndicesToOffset(`outputIndices${_}`,h)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${w}[${_}] = ${m}(${c.getByOffset(`index${_}`)}[component${_}]);
        `;f=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${h.setByOffset("global_idx","data")}
      }`}else f=`
        let outputIndices = ${h.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${c.broadcastedIndicesToOffset("outputIndices",h)};
        let data = ${h.type.value}(${c.getByOffset(`inputOffset / ${n}`)});
        ${h.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(c,h)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${f}`},d=[{type:12,data:u},...V(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},vu=e=>{wu(e.inputs),e.compute(bu(e.inputs),{inputs:[0]})}}),xu,Su,Sc=S(()=>{Q(),ee(),te(),ci(),xu=e=>{let t=e[0].dataType,r=T.size(e[0].dims),i=T.size(e[1].dims),a=i%4===0,s=n=>{let o=k("x",t,[1],4),u=k("bias",t,[1],4),l=D("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${u.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,c=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(d).declareVariables(o,u,l)}

    ${di(ke(t))}

    ${n.mainStart(St)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",pi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/St/4)}})}},Su=e=>{e.inputs.length<2||T.size(e.inputs[1].dims)===0?io(e):e.compute(xu(e.inputs))}}),Tu,ku,Iu,Eu,Tc=S(()=>{Q(),ee(),we(),te(),Tu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ku=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=T.normalizeAxis(t.axis,a),n=r.slice(0);n.splice(s,1,...i);let o=r[s],u=e[0].dataType===9?4:1,l=Math.ceil(T.size(n)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:s},...V(e[0].dims,e[1].dims,n)],p=c=>{let h=k("data",e[0].dataType,e[0].dims.length,u),f=k("inputIndices",e[1].dataType,e[1].dims.length),g=D("output",e[0].dataType,n.length,u),w=m=>{let $=i.length,y=`var indicesIndices${m}  = ${f.type.indices}(0);`;for(let b=0;b<$;b++)y+=`${$>1?`indicesIndices${m}[${b}]`:`indicesIndices${m}`} = ${n.length>1?`outputIndices${m}[uniforms.axis + ${b}]`:`outputIndices${m}`};`;y+=`
          var idx${m} = ${f.getByIndices(`indicesIndices${m}`)};
          if (idx${m} < 0) {
            idx${m} = idx${m} + uniforms.axisDimLimit;
          }
          var dataIndices${m} : ${h.type.indices};
        `;for(let b=0,v=0;b<a;b++)b===s?(y+=`${a>1?`dataIndices${m}[${b}]`:`dataIndices${m}`} = u32(idx${m});`,v+=$):(y+=`${a>1?`dataIndices${m}[${b}]`:`dataIndices${m}`} = ${n.length>1?`outputIndices${m}[${v}]`:`outputIndices${m}`};`,v++);return y},_;if(e[0].dataType===9){let m=($,y,b="")=>`
          let outputIndices${y} = ${g.offsetToIndices(`outputOffset + ${y}u`)};
          ${w(y)};
          let offset${y} = ${h.indicesToOffset(`dataIndices${y}`)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${$}[${y}] = ${b}(${h.getByOffset(`index${y}`)}[component${y}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${m("value",0,"u32")}
        ${m("value",1,"u32")}
        ${m("value",2,"u32")}
        ${m("value",3,"u32")}
        ${g.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${g.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${h.getByIndices("dataIndices")};
      ${g.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,g)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},Iu=e=>he({axis:e.axis}),Eu=(e,t)=>{let r=e.inputs;Tu(r),e.compute(ku(e.inputs,t))}}),zu,Cu,Ou,kc=S(()=>{Q(),ee(),te(),zu=(e,t,r,i,a,s,n,o,u)=>{let l=[{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:u}],d=[s];l.push(...V(t.dims,d));let p=c=>{let h=k("indices_data",t.dataType,t.dims.length),f=D("input_slice_offsets_data",12,1,1),g=[h,f],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${c.registerUniforms(w).declareVariables(...g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Cu=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,s=r[1].dims,n=s[s.length-1],o=T.sizeToDimension(s,s.length-1),u=T.sizeFromDimension(i,t.batchDims+n),l=T.sizeToDimension(i,t.batchDims),d=T.sizeFromDimension(i,t.batchDims),p=o/l,c=new Array(n),h=u;for(let y=0;y<n;++y)c[n-1-y]=h,h*=i[t.batchDims+n-1-y];let f=zu(e,r[1],c,t.batchDims,i,o,p,d,n),g=t.batchDims+n;if(g>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=s.slice(0,-1).concat(i.slice(g)),_=T.size(w),m=[{type:12,data:_},{type:12,data:u},...V(r[0].dims,f.dims,w)],$=y=>{let b=k("data",r[0].dataType,r[0].dims.length),v=k("slice_offsets",12,f.dims.length),x=D("output",r[0].dataType,w.length);return`
          ${y.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(b,v,x)}
            ${y.mainStart()}
            ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:m}),getShaderSource:$},{inputs:[r[0],f]})},Ou=e=>({batchDims:e.batch_dims,cacheKey:""})}),Au,Ru,Bu,Mu,Ic=S(()=>{Q(),ee(),we(),te(),Au=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=T.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/i)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ru=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=T.normalizeAxis(t.gatherAxis,a),n=T.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(s,1,...i);let u=T.size(o),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...V(...e.map((h,f)=>h.dims),o)],c=h=>{let f=k("data",e[0].dataType,e[0].dims.length),g=k("inputIndices",e[1].dataType,e[1].dims.length),w=k("scales",e[2].dataType,e[2].dims.length),_=e.length>3?k("zeroPoint",e[3].dataType,e[3].dims.length):void 0,m=D("output",l,o.length),$=[f,g,w];_&&$.push(_);let y=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms(y).declareVariables(...$,m)}
        ${h.mainStart()}
        let output_indices = ${m.offsetToIndices("global_idx")};
        var indices_indices = ${g.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${m.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${g.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${m.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${f.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${m.indicesGet("output_indices","i")};
          ${f.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${g.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${f.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${m.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${f.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${f.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${f.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ke(l)}(quantized_data - zero_point) * scale;
        ${m.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,f)=>f!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,f)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:c}},Bu=(e,t)=>{let r=e.inputs;Au(r,t),e.compute(Ru(e.inputs,t))},Mu=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Du,Pu,Uu,Nu,Ec=S(()=>{Q(),ee(),we(),te(),Du=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Pu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,s=e[1].dims,n=e[1].dataType,o=T.normalizeAxis(t.axis,a),u=r[o],l=s.slice(0),d=T.size(l),p=k("input",i,a),c=k("indicesInput",n,s.length),h=D("output",i,l.length),f=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return f.push(...V(r,s,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:g=>`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,c,h)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},Uu=e=>he({axis:e.axis}),Nu=(e,t)=>{let r=e.inputs;Du(r),e.compute(Pu(e.inputs,t))}}),qu,Vu,Lu,Fu,zc=S(()=>{Q(),ee(),te(),qu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Vu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,s,n]=Qa.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[a,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(s/u),d=Math.ceil(a/u);T.size(o);let p=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],c=["type","type"];e.length===3&&(p.push(...V(e[2].dims)),c.push("rank")),p.push(...V(o));let h=f=>{let g=k("a",e[0].dataType,e[0].dims),w=k("b",e[1].dataType,e[1].dims),_=null,m=[g,w];e.length===3&&(_=k("c",e[2].dataType,e[2].dims.length),m.push(_));let $=D("output",e[0].dataType,o.length);m.push($);let y=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],b="",v="";t.transA&&t.transB?(v=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(v=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(v=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(v=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let x=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${f.registerUniforms(y).declareVariables(...m)}
  var<workgroup> tile_a: array<array<${g.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${w.type.storage}, ${u}>, ${u}>;
  ${f.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${$.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${v}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${b}
      }
      workgroupBarrier();
    }

    ${x}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${_!=null?`let cOffset = ${_.broadcastedIndicesToOffset("vec2(m, n)",$)}; value += ${$.type.value}(uniforms.beta) * ${_.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:p}),getShaderSource:h}},Lu=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Fu=(e,t)=>{qu(e.inputs),e.compute(Vu(e.inputs,t))}}),je,Xe,wt,$t,Wu,Gu,Hu,ju,Ku,Zu,Qu,Xu,Yu,Ju,Cc=S(()=>{Q(),ee(),we(),te(),[je,Xe,wt,$t]=[0,1,2,3],Wu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Gu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Hu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,ju=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ku=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Zu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${je}] = batch;
     indices[${Xe}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${wt}] = u32(r);
            indices[${$t}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${wt}] = u32(clamp(r, 0, H - 1));
          indices[${$t}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${wt}] = gs_reflect(r, border[1], border[3]);
          indices[${$t}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Qu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${je}], indices[${Xe}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${je}], indices[${Xe}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${je}], indices[${Xe}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${je}], indices[${Xe}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${je}], indices[${Xe}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${je}], indices[${Xe}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Xu=(e,t)=>{let r=k("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=k("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[je,Xe,wt,$t]=[0,3,1,2]);let n=D("output",e[0].dataType,s.length),o=r.type.value,u=T.size(s),l=[{type:12,data:u},...V(e[0].dims,i,s)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,a,n)}
  ${Gu}
  ${Hu(o)}
  ${ju(t)}
  ${Ku(t)}
  ${Zu(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${wt}]);
      let W_in = i32(uniforms.x_shape[${$t}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${je}], indices[${wt}], indices[${$t}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Qu(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let c=T.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}},getShaderSource:d}},Yu=(e,t)=>{Wu(e.inputs),e.compute(Xu(e.inputs,t))},Ju=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ie,el,tl,Oi,rl,qt,il,al=S(()=>{Q(),ee(),we(),Xr(),ui(),te(),ot(),Ie=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,el=(e,t)=>{let r=e[0],i=Ie(e,1),a=Ie(e,2),s=Ie(e,3),n=Ie(e,4),o=Ie(e,5),u=Ie(e,6),l=Ie(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=r.dims[0],p=r.dims[1],c=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],h=p,f=0,g=0,w=Math.floor(c/t.numHeads);if(u&&l&&T.size(u.dims)&&T.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=u.dims[2],g=u.dims[2]}else if(u&&T.size(u.dims)||l&&T.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i&&T.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,h=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(s&&T.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let m=f+h,$=0;if(n&&T.size(n.dims)>0){$=8;let x=n.dims;throw x.length===1?x[0]===d?$=1:x[0]===3*d+2&&($=3):x.length===2&&x[0]===d&&x[1]===m&&($=5),$===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let y=!1,b=c;if(a&&T.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');b=a.dims[1]*a.dims[3],y=!0}}let v=!1;if(n&&T.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&T.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==m)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:m,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:c,vHiddenSize:b,headSize:w,vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:v,passPastInKv:y,qkvFormat:_}},tl=e=>he({...e}),Oi=he({perm:[0,2,1,3]}),rl=(e,t,r,i,a,s,n)=>{let o=[i,a,s],u=T.size(o),l=[{type:12,data:u},{type:12,data:n},{type:12,data:s}],d=p=>{let c=D("qkv_with_bias",t.dataType,o),h=k("qkv",t.dataType,o),f=k("bias",r.dataType,o),g=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(g).declareVariables(h,f,c)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,r],outputs:[-1]})[0]},qt=(e,t,r,i,a,s,n,o)=>{let u=s;if(n&&T.size(n.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=rl(e,s,n,t,i,r*a,o),u=u.reshape([t,i,r,a]),r===1||i===1?u:e.compute(Re(u,Oi.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,i,r,a])),r===1||i===1?u:e.compute(Re(u,Oi.perm),{inputs:[u],outputs:[-1]})[0]},il=(e,t)=>{let r=el(e.inputs,t),i=e.inputs[0],a=Ie(e.inputs,1),s=Ie(e.inputs,2),n=Ie(e.inputs,3),o=Ie(e.inputs,4),u=Ie(e.inputs,5),l=Ie(e.inputs,6),d=Ie(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let p=a&&s&&a.dims.length===4&&s.dims.length===4,c=qt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,n,0);if(p)return Mt(e,c,a,s,o,void 0,l,d,u,r);if(!a||!s)throw new Error("key and value must be provided");let h=qt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,n,r.hiddenSize),f=qt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);Mt(e,c,h,f,o,void 0,l,d,u,r)}}),sl,nl,ol,ul,Ai,ll,dl,pl=S(()=>{Q(),ee(),we(),te(),sl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},nl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},ol=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${U("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ul=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ai=(e,t)=>{let r=e[0].dims,i=T.size(r),a=e[0].dataType,s=T.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),o=k("input",a,r.length),u=new Array(t.numOutputs),l=[],d=[],p=0,c=[{type:12,data:i}];for(let f=0;f<t.numOutputs;f++){p+=t.splitSizes[f],u[f]=p;let g=r.slice();g[s]=t.splitSizes[f],d.push(g),n[f]=D(`output${f}`,a,g.length),l.push({dims:d[f],dataType:e[0].dataType})}c.push({type:12,data:u},...V(r,...d));let h=f=>`
  ${f.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...n)}
  ${ol(u.length)}
  ${ul(n)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${U("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c})}},ll=(e,t)=>{sl(e.inputs);let r=e.inputs.length===1?t:nl(e.inputs,t);e.compute(Ai(e.inputs,r),{inputs:[0]})},dl=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),cl,mr,hl,fl=S(()=>{Q(),ee(),we(),te(),cl=(e,t)=>{let[r,i,a,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!T.areEqual(i.dims,[])&&!T.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!T.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],d=a.dims[0],p=T.sizeFromDimension(r.dims,1)/l,c=o===0?a.dims[1]*2:p/n;if(o>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(l!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(c/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},mr=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],o=T.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],p=a===0?d*2:l/i,c=new Array(n,u,l/p,p-d),h=T.computeStrides(c),f=[{type:1,data:s},{type:12,data:c},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...V(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],g=w=>{let _=k("input",e[0].dataType,e[0].dims.length),m=k("position_ids",e[1].dataType,e[1].dims.length),$=k("cos_cache",e[2].dataType,e[2].dims.length),y=k("sin_cache",e[3].dataType,e[3].dims.length),b=D("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${w.declareVariables(_,m,$,y,b)}

        ${w.mainStart(St)}
          let half_rotary_emb_dim = uniforms.${$.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${m.broadcastedIndicesToOffset("bsnh.xy",D("",m.type.tensor,2))};
            let position_id =
                u32(${m.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${_.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${y.get("position_id","bsnh[3]")};
            ${b.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${y.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${b.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${b.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(T.size(c)/St)},programUniforms:f})}},hl=(e,t)=>{cl(e.inputs,t),e.compute(mr(e.inputs,t))}}),ml,gl,Ri,_l,yl,Oc=S(()=>{we(),Q(),ui(),al(),pl(),ot(),fl(),te(),ml=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=r.dims[0],u=r.dims[1],l=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],d=u,p=0,c=!i||i.dims.length===0,h=Math.floor(c?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);c&&(l=h*t.numHeads);let f=s&&s.dims.length!==0,g=n&&n.dims.length!==0;if(f&&s.dims.length===4&&s.dims[0]===o&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===h)throw new Error("BSNH pastKey/pastValue is not supported");if(f&&g){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=s.dims[2]}else if(f||g)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==h)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');d=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==h)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}let _=0,m=!1,$=t.kvNumHeads?h*t.kvNumHeads:l;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(d!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');$=a.dims[2]}else{if(d!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');$=a.dims[1]*a.dims[3],m=!0}}let y=e.length>4?e[5]:void 0;if(y){if(y.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let b=y.dims.reduce((v,x)=>v*x,1);if(b!==o)throw new Error(`seqlens_k must have batch_size (${o}) elements, got ${b}.`);for(let v=0;v<y.dims.length;v++)if(y.dims[v]!==1&&y.dims[v]!==o)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${o}), got dims[${v}] = ${y.dims[v]}.`)}return{batchSize:o,sequenceLength:u,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:$,headSize:h,vHeadSize:Math.floor($/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:m,qkvFormat:w}},gl=he({perm:[0,2,1,3]}),Ri=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Re(i,gl.perm),{inputs:[i],outputs:[-1]})[0]),i},_l=(e,t,r,i)=>{let a=7,s=["type","type"],n=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{let p=k("seq_lens",r.dataType,r.dims),c=k("total_seq_lens",i.dataType,i.dims),h=D("pos_ids",a,n),f=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(f).declareVariables(p,c,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${c.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${h.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},yl=(e,t)=>{let r=ml(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,d*r.headSize,d*r.headSize]}),[c,h,f]=!a&&!s?e.compute(Ai([i],p),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,s],g,w;if(t.doRotary){let y=e.compute(_l(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],b=e.inputs[7],v=e.inputs[8],x=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),I=[c,y,b,v],z=[-1];g=e.compute(mr(I,x),{inputs:I,outputs:z})[0],I.splice(0,1,h);let B=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(mr(I,B),{inputs:I,outputs:z})[0]}let _=qt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?g:c,void 0,0),m=Ri(e,t.doRotary?w:h,r),$=Ri(e,f,r);Mt(e,_,m,$,void 0,void 0,n,o,void 0,r,u,l)}}),Bi,wl,$l,bl,Ac=S(()=>{Q(),ee(),ot(),te(),Bi=(e,t,r,i,a,s,n,o)=>{let u=ye(s),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=a*n,c=64;p===1&&(c=256);let h=[a,n,s/u],f=[a,n,2],g=["rank","type","type"],w=[];w.push(...V(h,f));let _=m=>{let $=k("x",t.dataType,3,u),y=k("scale",r.dataType,r.dims),b=k("bias",i.dataType,i.dims),v=D("output",1,3,2),x=[$,y,b,v];return`
  var<workgroup> workgroup_shared : array<${d}, ${c}>;
  const workgroup_size = ${c}u;
  ${m.declareVariables(...x)}
  ${m.mainStart(c)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${$.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${nt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${nt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:f,dataType:1}],dispatchGroup:{x:p},programUniforms:w}),getShaderSource:_},{inputs:[t,r,i],outputs:[-1]})[0]},wl=(e,t,r)=>{let i=t[0].dims,a=i,s=2,n=i[0],o=i[1],u=T.sizeFromDimension(i,s),l=ye(u),d=T.size(a)/l,p=Bi(e,t[0],t[1],t[2],n,u,o,r.epsilon),c=[n,o,u/l],h=[n,o],f=["type","none"],g=w=>{let _=k("x",t[0].dataType,c.length,l),m=k("scale_shift",1,h.length,2),$=D("output",t[0].dataType,c.length,l),y=[_,m,$];return`
  ${w.registerUniform("output_size","u32").declareVariables(...y)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${$.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${m.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${$.type.value}(scale_shift.x) + ${$.type.value}(scale_shift.y);
      ${$.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...V(c,h,c)]}),getShaderSource:g},{inputs:[t[0],p]})},$l=(e,t,r)=>{let i=t[0].dims,a=i,s=i[0],n=i[i.length-1],o=T.sizeFromDimension(i,1)/n,u=ye(n),l=T.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(n/u)}],p=["type","type"],c=!1,h=[0,i.length-1];for(let _=0;_<i.length-2;_++)c=c||i[_+1]!==1,h.push(_+1);c=c&&i[i.length-1]!==1;let f=c?e.compute(Re(e.inputs[0],h),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(_,m)=>i[h[m]])),g=Bi(e,f,t[1],t[2],s,o,n,r.epsilon),w=_=>{let m=xe(t[0].dataType),$=u===1?"vec2f":`mat${u}x2f`,y=x=>{let I=x===0?"x":"y",z=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${m}(${z}(scale.${I}))`;case 2:return`vec2<${m}>(${z}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${m}>(${z}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${u}`)}},b=k("input",t[0].dataType,t[0].dims,u),v=D("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${b.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${$}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${v.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${y(0)}, ${y(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],g]})},bl=(e,t)=>{t.format==="NHWC"?$l(e,e.inputs,t):wl(e,e.inputs,t)}}),vl,xl,Sl,Rc=S(()=>{Q(),ee(),te(),vl=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},xl=(e,t,r)=>{let i=t.simplified,a=e[0].dims,s=e[1],n=!i&&e[2],o=a,u=T.normalizeAxis(t.axis,a.length),l=T.sizeToDimension(a,u),d=T.sizeFromDimension(a,u),p=T.size(s.dims),c=n?T.size(n.dims):0;if(p!==d||n&&c!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${c}`);let h=[];for(let b=0;b<a.length;++b)b<u?h.push(a[b]):h.push(1);let f=ye(d),g=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/f)},{type:1,data:t.epsilon}];n&&g.push("type");let _=r>1,m=r>2,$=b=>{let v=xe(e[0].dataType),x=[k("x",e[0].dataType,e[0].dims,f),k("scale",s.dataType,s.dims,f)];n&&x.push(k("bias",n.dataType,n.dims,f)),x.push(D("output",e[0].dataType,o,f)),_&&x.push(D("mean_data_output",1,h)),m&&x.push(D("inv_std_output",1,h));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${b.registerUniforms(I).declareVariables(...x)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ti("f32",f)};
    var mean_square_vector = ${ti("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Tt(v,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nt("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nt("mean_square_vector",f)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Tt(v,f,"x[j + offset]")};
      let f32scale = ${Tt(v,f,"scale[j]")};
      output[j + offset] = ${x[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${Tt(v,f,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${m?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},y=[{dims:o,dataType:e[0].dataType}];return _&&y.push({dims:h,dataType:1}),m&&y.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${r};${i}`,inputDependencies:g},getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:$}},Sl=(e,t)=>{vl(e.inputs),e.compute(xl(e.inputs,t,e.outputCount))}}),Tl,kl,Bc=S(()=>{ee(),gi(),$i(),Tl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},kl=e=>{Tl(e.inputs);let t=xt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(mi(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=T.size(e.inputs[0].dims.slice(0,-2)),n=T.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let o=e.inputs[0].reshape([1,s,i]),u=e.inputs[1].reshape([1,i,r]),l=[1,s,r],d=[o,u];e.compute(pr(d,{activation:""},t,l),{inputs:d})}else e.compute(pr(e.inputs,{activation:""},t))}}}),Il,El,zl,Cl,Ol,Mc=S(()=>{Q(),ee(),we(),te(),Il=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!T.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(T.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(T.size(u)!==l)throw new Error("zeroPoints input size error.")}},El=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,o=r.slice(0,i-2),u=T.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=ye(t.k),c=ye(l),h=ye(n),f=o.concat([a,n]),g=a>1&&n/h%2===0?2:1,w=T.size(f)/h/g,_=64,m=[],$=[u,a,s/p],y=T.convertShape(e[1].dims).slice();y.splice(-1,1,l/c),m.push(...V($)),m.push(...V(y)),m.push(...V(e[2].dims)),e.length===4&&m.push(...V(T.convertShape(e[3].dims)));let b=[u,a,n/h];m.push(...V(b));let v=x=>{let I=$.length,z=k("a",e[0].dataType,I,p),B=k("b",12,y.length,c),re=k("scales",e[2].dataType,e[2].dims.length),G=[z,B,re],j=e.length===4?k("zero_points",12,e[3].dims.length):void 0;j&&G.push(j);let de=b.length,O=D("output",e[0].dataType,de,h),L=xe(e[0].dataType),J=(()=>{switch(p){case 1:return`array<${L}, 8>`;case 2:return`mat4x2<${L}>`;case 4:return`mat2x4<${L}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ie=Math.floor(32/t.bits),Y=Math.floor(ie/8),ne=()=>{let H="";for(let N=0;N<Y;N++){let Te=N*t.bits*4,ze=Te+t.bits;H+=`
          // reuse a data (pass ${N})
            var input_offset${N>0?N:""} = ${N===0?z.indicesToOffset(`${z.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${N>0?N:""}: ${J};
            for (var j${N>0?N:""}: u32 = 0; j${N>0?N:""} < ${8/p}; j${N>0?N:""}++) {
              a_data${N>0?N:""}[j${N>0?N:""}] = ${z.getByOffset(`input_offset${N>0?N:""}`)};
              input_offset${N>0?N:""}++;
            }
          `;for(let $e=0;$e<h*g;$e++)H+=`
            b_value = ${c===1?`b${$e}_data`:`b${$e}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${N*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Te}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ze}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Ce,ge)=>`${L}(b_value_lower[${ge}]), ${L}(b_value_upper[${ge}])`).join(", ")});
            b_dequantized_values = ${p===1?`${J}(${Array.from({length:8},(Ce,ge)=>`(b_quantized_values[${ge}] - ${j?`zero_point${$e}`:"zero_point"}) * scale${$e}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${j?`zero_point${$e}`:"zero_point"}`).join(",")})) * scale${$e};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor($e/h)}]${h>1?`[${$e%h}]`:""} += ${Array.from({length:8/p},(Ce,ge)=>`${p===1?`a_data${N>0?N:""}[${ge}] * b_dequantized_values[${ge}]`:`dot(a_data${N>0?N:""}[${ge}], b_dequantized_values[${ge}])`}`).join(" + ")};
          `}return H},E=()=>{let H=`
            var col_index = col * ${h};
            ${j?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${L}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let N=0;N<h*g;N++)H+=`
            let scale${N} = ${re.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${N} = ${L}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return H},X=()=>{let H=`col_index = col * ${h};`;for(let N=0;N<h*g;N++)H+=`
            let b${N}_data = ${B.getByIndices(`${B.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return H+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,H};return`
        var<workgroup> workgroup_shared: array<${O.type.value}, ${g*_}>;
        ${x.declareVariables(...G,O)}
        ${x.mainStart([_,1,1])}
          let output_indices = ${O.offsetToIndices(`(global_idx / ${_}) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${E()}
            for (var word: u32 = 0; word < ${l}; word += ${c}) {
              ${X()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${ne()}
                word_offset += ${ie/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${O.setByIndices(`${O.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${c};${h};${g};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:w},programUniforms:m}),getShaderSource:v}},zl=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,o=r.slice(0,i-2),u=T.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=ye(t.k),c=ye(l),h=o.concat([a,n]),f=128,g=n%8===0?8:n%4===0?4:1,w=f/g,_=Math.floor(32/t.bits),m=w*c*_,$=m/p,y=m/t.blockSize,b=T.size(h)/g,v=[],x=[u,a,s/p],I=T.convertShape(e[1].dims).slice();I.splice(-1,1,l/c),v.push(...V(x)),v.push(...V(I)),v.push(...V(e[2].dims)),e.length===4&&v.push(...V(T.convertShape(e[3].dims)));let z=[u,a,n];v.push(...V(z));let B=re=>{let G=x.length,j=k("a",e[0].dataType,G,p),de=k("b",12,I.length,c),O=k("scales",e[2].dataType,e[2].dims.length),L=[j,de,O],J=e.length===4?k("zero_points",12,e[3].dims.length):void 0;J&&L.push(J);let ie=z.length,Y=D("output",e[0].dataType,ie),ne=xe(e[0].dataType),E=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${j.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${Y.type.value}, ${w}>, ${g}>;
        ${re.declareVariables(...L,Y)}
        ${re.mainStart([w,g,1])}
          let output_indices = ${Y.offsetToIndices(`workgroup_index * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${f})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${j.getByIndices(`${j.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${j.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ne}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ne}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${O.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${de.getByIndices(`${de.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${c}; i++) {
              let b_value = ${c===1?"b_data":"b_data[i]"};
              ${(()=>{let X=Math.floor(_/8),H="";for(let N=0;N<X;N++){let Te=N*t.bits*4,ze=Te+t.bits;H+=`
              ${E()}
              {${t.bits===2?`
                let half_word = b_value >> ${N*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Te}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ze}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ne}>(${Array.from({length:4},($e,Ce)=>`${ne}(b_value_lower[${Ce}]), ${ne}(b_value_upper[${Ce}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},($e,Ce)=>`${`dot(a_data${Ce}, b_dequantized_values[${Ce}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return H})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${g}) {
            var output_value: ${Y.type.value} = ${Y.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Y.setByIndices(`${Y.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${c};${w};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:b},programUniforms:v}),getShaderSource:B}},Cl=(e,t)=>{Il(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(zl(e.inputs,t)):e.compute(El(e.inputs,t))},Ol=e=>he(e)}),Al,Rl,Bl,Ml,Dl,Pl,Ul,Nl,ql,Dc=S(()=>{Q(),ee(),te(),Al=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Rl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${U("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${U("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${U("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Bl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${U("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${U("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${U("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${U("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Ml=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${U("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${U("uniforms.x_shape",a,t)})) {
                  k = i32(${U("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${U("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Dl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${U("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${U("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${U("uniforms.x_shape",a,t)})) {
                  k -= i32(${U("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${U("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Pl=(e,t,r)=>{switch(r.mode){case 0:return Rl(e,t,r.pads.length);case 1:return Bl(e,t,r.pads.length);case 2:return Ml(e,t,r.pads.length);case 3:return Dl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ul=(e,t)=>{let r=T.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=T.size(r),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...V(e[0].dims,r));let o=["rank"],u=l=>{let d=D("output",e[0].dataType,r.length),p=k("x",e[0].dataType,i.length),c=p.type.value,h=Pl(d,i.length,t),f=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&f.push({name:"constant_value",type:n?c:"f32"}),`
            ${l.registerUniforms(f).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(T.size(r)/64)},programUniforms:s}),getShaderSource:u}},Nl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(r[u]),s[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>s[Number(u)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:i,pads:n}}else return t},ql=(e,t)=>{Al(e.inputs);let r=Nl(e.inputs,t);e.compute(Ul(e.inputs,r),{inputs:[0]})}}),Vt,Mi,Di,Pi,Ui,Vl,Ll,Ni,qi,Fl,Wl,Vi,Gl,Hl,Li,jl,Kl,Zl,Ql,Pc=S(()=>{Me(),Q(),ee(),te(),Vt=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Mi=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],l=t.pads.slice();ar.adjustPoolAttributes(r,a,n,o,u,l);let d=ar.computePoolOutputShape(r,a,o,u,n,l,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:n,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:n,strides:o,pads:l,cacheKey:t.cacheKey});let c=d.slice();return c.push(c.splice(1,1)[0]),[p,i?c:d]},Di=(e,t)=>{let r=t.format==="NHWC",i=T.size(e),a=T.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);s.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(t.kernelShape.length===2){let h=t.kernelShape[t.kernelShape.length-2],f=t.strides[t.strides.length-2],g=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];c=!!(g+w),s.push({type:12,data:h},{type:12,data:f},{type:12,data:g},{type:12,data:w}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,p,c]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=T.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[s,n,!!u,!1,!1]}},Pi=(e,t,r,i,a,s,n,o,u,l,d,p)=>{let c=a.format==="NHWC",h=t.type.value,f=D("output",t.type.tensor,i);if(a.kernelShape.length<=2){let g="",w="",_="",m=r-(c?2:1);if(d?g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${m}] < 0 || xIndices[${m}]
                      >= uniforms.x_shape[${m}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let $=r-(c?3:2);p?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${$}] < 0 || xIndices[${$}] >= uniforms.x_shape[${$}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var value = ${h}(${o});
              var pad = 0;
              ${w}
              ${g}
              ${_}
              ${n}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let g=a.kernelShape.length,w=a.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var offsets: array<u32, ${g}>;

              var value = ${h}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${g-1}u; j++) {
                  offsets[j] = offset / ${U("uniforms.kernelStrides","j",g)};
                  offset -= offsets[j] * ${U("uniforms.kernelStrides","j",g)};
                }
                offsets[${g-1}] = offset;

                isPad = false;
                for (var j = ${r-g}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${U("uniforms.strides",`j - ${r-g}u`,g)}
                    + offsets[j - ${r-g}u] - ${U("uniforms.pads","j - 2u",w)};
                  ${_}
              }
              ${n}

              output[global_idx] = value;
            }`}},Ui=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Vl=e=>`${Ui(e)};${e.countIncludePad}`,Ll=e=>`${Ui(e)};${e.storageOrder};${e.dilations}`,Ni=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),qi=(e,t,r,i)=>{let[a,s]=Mi(t,i,r),n=k("x",t.dataType,t.dims.length),o=n.type.value,u="value += x_val;",l="";a.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,p,c,h,f]=Di(s,a);d.push(...V(t.dims,s));let g=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${c};${h};${f}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(T.size(s)/64)},programUniforms:d}),getShaderSource:w=>Pi(w,n,t.dims.length,s.length,a,u,l,0,p,c,h,f)}},Fl=e=>{let t=e.count_include_pad!==0,r=Ni(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Vl(i)}},Wl=(e,t)=>{Vt(e.inputs),e.compute(qi("AveragePool",e.inputs[0],!1,t))},Vi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Gl=e=>{let t=e.format;return{format:t,...Vi,cacheKey:t}},Hl=(e,t)=>{Vt(e.inputs),e.compute(qi("GlobalAveragePool",e.inputs[0],!0,t))},Li=(e,t,r,i)=>{let[a,s]=Mi(t,i,r),n=`
      value = max(x_val, value);
    `,o="",u=k("x",t.dataType,t.dims.length),l=["rank"],[d,p,c,h,f]=Di(s,a);return d.push(...V(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${c};${h};${f}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(T.size(s)/64)},programUniforms:d}),getShaderSource:g=>Pi(g,u,t.dims.length,s.length,a,n,o,t.dataType===10?-65504:-1e5,p,c,h,f)}},jl=(e,t)=>{Vt(e.inputs),e.compute(Li("MaxPool",e.inputs[0],!1,t))},Kl=e=>{let t=e.storage_order,r=e.dilations,i=Ni(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Ll(a)}},Zl=e=>{let t=e.format;return{format:t,...Vi,cacheKey:t}},Ql=(e,t)=>{Vt(e.inputs),e.compute(Li("GlobalMaxPool",e.inputs[0],!0,t))}}),Xl,Yl,Jl,ed,Uc=S(()=>{Q(),ee(),we(),te(),Xl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Yl=(e,t)=>{let r=T.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,s=e[0].dims,n=e[1].dataType,o=T.size(s),u=i===3||i===2,l=u?[Math.ceil(T.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,c=p?u?[Math.ceil(T.size(p.dims)/4)]:p.dims:void 0,h=d.length===0||d.length===1&&d[0]===1,f=h===!1&&d.length===1,g=ye(o),w=h&&(!u||g===4),_=w?g:1,m=w&&!u?g:1,$=k("input",u?12:i,l.length,m),y=k("scale",n,d.length),b=p?k("zero_point",u?12:i,c.length):void 0,v=D("output",n,s.length,_),x=[$,y];b&&x.push(b);let I=[l,d];p&&I.push(c);let z=[{type:12,data:o/_},{type:12,data:r},{type:12,data:t.blockSize},...V(...I,s)],B=re=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${re.registerUniforms(G).declareVariables(...x,v)}
      ${re.mainStart()}
          ${re.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${v.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${$.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${$.getByOffset("global_idx")};`};

          // Set scale input
          ${h?`let scale_value= ${y.getByOffset("0")}`:f?`
            let scale_index = ${v.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${y.getByOffset("scale_index")};`:`
            var scale_indices: ${y.type.indices} = output_indices;
            let index = ${y.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${y.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${y.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${b?h?u?`
                let zero_point_input = ${b.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${b.getByOffset("0")}`:f?u?`
                let zero_point_index = ${v.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${b.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${v.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${b.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${y.indicesToOffset("scale_indices")};
                let zero_point_input = ${b.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${b.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":$.type.value}(0);`};
      // Compute and write output
      ${v.setByOffset("global_idx",`${v.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getShaderSource:B,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:z})}},Jl=(e,t)=>{Xl(e.inputs,t),e.compute(Yl(e.inputs,t))},ed=e=>he({axis:e.axis,blockSize:e.blockSize})}),td,rd,id,Nc=S(()=>{Me(),Q(),te(),td=(e,t,r)=>{let i=e===t,a=e<t&&r<0,s=e>t&&r>0;if(i||a||s)throw new Error("Range these inputs' contents are invalid.")},rd=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),s=[a],n=a,o=[{type:12,data:n},{type:i,data:e},{type:i,data:r},...V(s)],u=l=>{let d=D("output",i,s.length),p=d.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(c).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},id=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&td(t,r,i),e.compute(rd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),ad,sd,nd,od,qc=S(()=>{Q(),ee(),we(),te(),ad=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},sd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,s=1,n=Math.ceil(T.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],u=T.sizeFromDimension(r,o),l=[{type:12,data:n},{type:12,data:o},{type:12,data:u},...V(e[1].dims,e[2].dims,a)],d=p=>{let c=k("indices",e[1].dataType,e[1].dims.length),h=k("updates",e[2].dataType,e[2].dims.length,s),f=t.reduction!=="none"&&t.reduction!==""?ps("output",e[0].dataType,a.length):D("output",e[0].dataType,a.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(c,h,f)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${ad(t.reduction,"output[data_offset + i]","value",f.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:d}},nd=e=>he({reduction:e.reduction}),od=(e,t)=>{e.compute(sd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ud,ld,dd,Fi,pd,cd,hd,fd,md,gd,_d,yd,Wi,wd,$d,bd,vd,xd,Sd,Td,Vc=S(()=>{Q(),ee(),we(),te(),ud=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ld=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,s)=>i[a]=e[s]),i},dd=(e,t,r,i,a,s)=>{let[n,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(d=>s.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>i.push(d)),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ud(i,t),t.axes.length>0&&ld(i,t.axes,l).forEach((d,p)=>i[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>a.push(Number(d))),a.length!==0&&a.length!==l&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Fi=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,pd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Fi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Fi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",cd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",hd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,n)=>{i[s]=a[n],i[n+r]=a[t.length+n]}),i):a},fd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>a.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,n)=>a[s]=r[n])}else r.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},md=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},gd=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${U("uniforms.scales","i",i)};
        var roi_low = ${U("uniforms.roi","i",a)};
        var roi_hi = ${U("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${U("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${U("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,_d=(e,t,r,i,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${U("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${U("uniforms.roi","i",s)};
          var roi_hi = ${U("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${U("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${U("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,yd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${U("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Wi=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",wd=(e,t,r,i,a)=>{let[s,n,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Wi(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${n}];
      var col:${l} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},$d=(e,t,r,i,a,s,n,o,u,l)=>{let d=r.length===2,[p,c]=d?[0,1]:[2,3],h=e.type.value,f=g=>{let w=g===p?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",g)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[g]},
        ${i[g]}, ${r[g]}, ${s[g]}, ${s[g]} + ${r.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[g]} - 1))) {
          return ${u};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${h} = originalIdx + ${h}(i);
          if (${w} < 0 || ${w} >= ${r[g]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${w} = max(0, min(${w}, ${r[g]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",g,`u32(${w})`)};
          data[i + 1] = ${g===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(p)};
    ${f(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},bd=(e,t,r,i,a)=>{let[s,n,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Wi(e,l,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${n}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},vd=(e,t,r,i,a,s)=>{let n=e.dims,o=hd(s,t.axes,n.length),u=fd(n,i,a,t.axes),l=i.slice();i.length===0&&(l=n.map((m,$)=>m===0?1:u[$]/m),t.keepAspectRatioPolicy!=="stretch"&&(u=md(n,l,t)));let d=D("output",e.dataType,u.length),p=k("input",e.dataType,n.length),c=T.size(u),h=n.length===u.length&&n.every((m,$)=>m===u[$]),f=t.coordinateTransformMode==="tf_crop_and_resize",g=t.extrapolationValue,w=p.type.value,_=m=>`
      ${h?"":`
      ${pd(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${yd(p,n)};
              ${cd(t.nearestMode,r,w)};
              ${_d(p,d,n,u,l.length,o.length,f)};
              `;case"linear":return`
              ${gd(d,n,u,l.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${wd(p,d,n,f,g)}`;if(n.length===3||n.length===5)return`${bd(p,d,n,f,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${$d(p,d,n,u,l,o,t.cubicCoeffA,f,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${m.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,d)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${h}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:l},{type:1,data:o},...V(n,u)]})}},xd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Sd=(e,t)=>{let r=[],i=[],a=[],s=xd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");dd(e.inputs,t,s,r,i,a),e.compute(vd(e.inputs[0],t,s,r,i,a),{inputs:[0]})},Td=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),kd,Id,Ed,Lc=S(()=>{Q(),ee(),te(),kd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Id=(e,t,r,i)=>{let a=t.simplified,s=e[0].dims,n=T.size(s),o=s,u=n,l=s.slice(-1)[0],d=i?s.slice(0,-1).concat(1):[],p=!a&&e.length>3,c=e.length>4,h=i&&r>1,f=i&&r>2,g=r>3,w=64,_=ye(l),m=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],$=b=>{let v=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],x=[k("x",e[0].dataType,e[0].dims,_),k("skip",e[1].dataType,e[1].dims,_),k("gamma",e[2].dataType,e[2].dims,_)];p&&x.push(k("beta",e[3].dataType,e[3].dims,_)),c&&x.push(k("bias",e[4].dataType,e[4].dims,_)),x.push(D("output",e[0].dataType,o,_)),h&&x.push(D("mean_output",1,d)),f&&x.push(D("inv_std_output",1,d)),g&&x.push(D("input_skip_bias_sum",e[0].dataType,o,_));let I=xe(e[0].dataType),z=xe(1,_);return`

      ${b.registerUniforms(v).declareVariables(...x)}
      var<workgroup> sum_shared : array<${z}, ${w}>;
      var<workgroup> sum_squared_shared : array<${z}, ${w}>;

      ${b.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":I+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Tt(I,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${nt("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nt("square_sum",_)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${f?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},y=[{dims:o,dataType:e[0].dataType}];return r>1&&y.push({dims:d,dataType:1}),r>2&&y.push({dims:d,dataType:1}),r>3&&y.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${h};${f};${g}`,inputDependencies:e.map((b,v)=>"type")},getShaderSource:$,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:m})}},Ed=(e,t)=>{kd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Id(e.inputs,t,e.outputCount,!1),{outputs:r})}}),zd,Lt,Cd,Gi,Od,Ad,Rd,Bd,Fc=S(()=>{Q(),ee(),we(),te(),zd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Lt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Cd=(e,t)=>{if(e.length>1){let r=Lt(e,1),i=Lt(e,2),a=Lt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:a})}else return t},Gi=(e,t,r,i,a)=>{let s=e;return e<0&&(s+=r[i[t]]),a[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Od=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${U("uniforms.input_shape","i",r.length)};
            let steps_i = ${U("uniforms.steps","i",r.length)};
            let signs_i = ${U("uniforms.signs","i",r.length)};
            let starts_i = ${U("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ad=(e,t)=>{let r=e[0].dims,i=T.size(r),a=t.axes.length>0?T.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Lt(e,4);s.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((_,m)=>Gi(_,m,r,a,s)),o=t.ends.map((_,m)=>Gi(_,m,r,a,s));if(a.length!==n.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let _=0;_<r.length;++_)a.includes(_)||(n.splice(_,0,0),o.splice(_,0,r[_]),s.splice(_,0,1));let u=s.map(_=>Math.sign(_));s.forEach((_,m,$)=>{if(_<0){let y=(o[m]-n[m])/_,b=n[m],v=b+y*s[m];n[m]=v,o[m]=b,$[m]=-_}});let l=r.slice(0);a.forEach((_,m)=>{l[_]=Math.ceil((o[_]-n[_])/s[_])});let d={dims:l,dataType:e[0].dataType},p=D("output",e[0].dataType,l.length),c=k("input",e[0].dataType,e[0].dims.length),h=T.size(l),f=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],g=[{type:12,data:h},{type:12,data:n},{type:6,data:u},{type:12,data:s},...V(e[0].dims,l)],w=_=>`
      ${_.registerUniforms(f).declareVariables(c,p)}
        ${Od(c,p,r)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},Rd=(e,t)=>{zd(e.inputs,t);let r=Cd(e.inputs,t);e.compute(Ad(e.inputs,r),{inputs:[0]})},Bd=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),Md,Dd,Pd,Ud,Wc=S(()=>{Q(),ee(),we(),ot(),te(),Md=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Dd=(e,t)=>{let r=e.inputs[0],i=r.dims,a=T.size(i),s=i.length,n=T.normalizeAxis(t.axis,s),o=n<i.length-1,u,l=[];o?(l=Array.from({length:s},(x,I)=>I),l[n]=s-1,l[s-1]=n,u=e.compute(Re(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let d=u.dims,p=d[s-1],c=a/p,h=ye(p),f=p/h,g=64;c===1&&(g=256);let w=(x,I)=>I===4?`max(max(${x}.x, ${x}.y), max(${x}.z, ${x}.w))`:I===2?`max(${x}.x, ${x}.y)`:I===3?`max(max(${x}.x, ${x}.y), ${x}.z)`:x,_=k("x",u.dataType,u.dims,h),m=D("result",u.dataType,u.dims,h),$=_.type.value,y=xe(u.dataType)==="f32"?`var threadMax = ${$}(-3.4028234663852886e+38f);`:`var threadMax = ${$}(-65504.0h);`,b=x=>`
      var<workgroup> rowMaxShared : ${$};
      var<workgroup> rowSumShared : ${$};
      var<workgroup> threadShared : array<${$}, ${g}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${$} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${$}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${x.registerUniform("packedCols","i32").declareVariables(_,m)}
      ${x.mainStart(g)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${g};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${y}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${$}(${w("threadShared[0]",h)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${$}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${$}(${nt("threadShared[0]",h)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${$}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,v=e.compute({name:"Softmax",shaderCache:{hint:`${h};${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:c},programUniforms:[{type:6,data:f}]}),getShaderSource:b},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Re(v,l),{inputs:[v]})},Pd=(e,t)=>{Md(e.inputs),Dd(e,t)},Ud=e=>he({axis:e.axis})}),Hi,Nd,qd,Vd,Ld,Gc=S(()=>{Q(),ee(),te(),Hi=e=>Array.from(e.getBigInt64Array(),Number),Nd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Hi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},qd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Vd=(e,t)=>{let r=e[0].dims,i=t??Hi(e[1]),a=qd(r,i),s=T.size(a),n=e[0].dataType,o=k("input",n,r.length),u=D("output",n,a.length),l=d=>`
      const inputShape = ${o.indices(...r)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...V(e[0].dims,a)]}),getShaderSource:l}},Ld=e=>{Nd(e.inputs),e.compute(Vd(e.inputs),{inputs:[0]})}}),Fd,Wd,Gd,Hc=S(()=>{Q(),ee(),te(),Fd=(e,t,r,i,a)=>{let s=D("output_data",a,r.length,4),n=k("a_data",t[1].dataType,t[1].dims.length,4),o=k("b_data",t[2].dataType,t[2].dims.length,4),u=k("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,c,h)=>`select(${c}, ${p}, ${h})`;if(!i)l=s.setByOffset("global_idx",d(n.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(c,h,f="")=>{let g=`a_data[index_a${h}][component_a${h}]`,w=`b_data[index_b${h}][component_b${h}]`,_=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${s.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${n.broadcastedIndicesToOffset(`output_indices${h}`,s)};
            let offset_b${h} = ${o.broadcastedIndicesToOffset(`output_indices${h}`,s)};
            let offset_c${h} = ${u.broadcastedIndicesToOffset(`output_indices${h}`,s)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${c}[${h}] = ${f}(${d(g,w,_)});
          `};a===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Wd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,s=!(T.areEqual(t,r)&&T.areEqual(r,i)),n=t,o=T.size(t);if(s){let l=xt.calcShape(xt.calcShape(t,r,!1),i,!1);if(!l)throw new Error("Can't perform where op on the given tensors");n=l,o=T.size(n)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Fd(l,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...V(i,t,r,n)]})}},Gd=e=>{e.compute(Wd(e.inputs))}}),Hd,jc=S(()=>{oc(),ui(),uc(),lc(),dc(),pc(),cc(),_c(),wc(),$c(),bc(),vc(),xc(),Sc(),Tc(),kc(),Ic(),Ec(),zc(),Cc(),Oc(),Ac(),Rc(),Bc(),Mc(),al(),Dc(),Pc(),Uc(),Nc(),qc(),si(),Vc(),fl(),Lc(),Fc(),Wc(),pl(),Gc(),ot(),ci(),Hc(),Hd=new Map([["Abs",[Tn]],["Acos",[kn]],["Acosh",[In]],["Add",[mo]],["ArgMax",[dn,oi]],["ArgMin",[ln,oi]],["Asin",[En]],["Asinh",[zn]],["Atan",[Cn]],["Atanh",[On]],["Attention",[gn]],["AveragePool",[Wl,Fl]],["BatchNormalization",[$n]],["BiasAdd",[xn]],["BiasSplitGelu",[co]],["Cast",[Rn,An]],["Ceil",[Dn]],["Clip",[Mn]],["Concat",[zo,Co]],["Conv",[Ti,xi]],["ConvTranspose",[iu,eu]],["Cos",[Pn]],["Cosh",[Un]],["CumSum",[su,nu]],["DepthToSpace",[du,pu]],["DequantizeLinear",[Jl,ed]],["Div",[go]],["Einsum",[_u,yu]],["Elu",[Nn,Dt]],["Equal",[_o]],["Erf",[qn]],["Exp",[Vn]],["Expand",[vu]],["FastGelu",[Su]],["Floor",[Ln]],["FusedConv",[Ti,xi]],["Gather",[Eu,Iu]],["GatherElements",[Nu,Uu]],["GatherBlockQuantized",[Bu,Mu]],["GatherND",[Cu,Ou]],["Gelu",[Fn]],["Gemm",[Fu,Lu]],["GlobalAveragePool",[Hl,Gl]],["GlobalMaxPool",[Ql,Zl]],["Greater",[bo]],["GreaterOrEqual",[xo]],["GridSample",[Yu,Ju]],["GroupQueryAttention",[yl]],["HardSigmoid",[Xn,Qn]],["InstanceNormalization",[bl]],["LayerNormalization",[Sl]],["LeakyRelu",[Wn,Dt]],["Less",[vo]],["LessOrEqual",[So]],["Log",[so]],["MatMul",[kl]],["MatMulNBits",[Cl,Ol]],["MaxPool",[jl,Kl]],["Mul",[yo]],["MultiHeadAttention",[il,tl]],["Neg",[Hn]],["Not",[Gn]],["Pad",[ql]],["Pow",[wo]],["QuickGelu",[uo,Dt]],["Range",[id]],["Reciprocal",[jn]],["ReduceMin",[an]],["ReduceMean",[Ys]],["ReduceMax",[rn]],["ReduceSum",[nn]],["ReduceProd",[sn]],["ReduceL1",[Js]],["ReduceL2",[en]],["ReduceLogSum",[un]],["ReduceLogSumExp",[tn]],["ReduceSumSquare",[on]],["Relu",[Kn]],["Resize",[Sd,Td]],["RotaryEmbedding",[hl]],["ScatterND",[od,nd]],["Sigmoid",[Zn]],["Sin",[Yn]],["Sinh",[Jn]],["Slice",[Rd,Bd]],["SkipLayerNormalization",[Ed]],["Split",[ll,dl]],["Sqrt",[eo]],["Softmax",[Pd,Ud]],["Sub",[$o]],["Tan",[to]],["Tanh",[ro]],["ThresholdedRelu",[ao,Dt]],["Tile",[Ld]],["Transpose",[ws,$s]],["Where",[Gd]]])}),jd,Kc=S(()=>{Me(),Qe(),te(),jd=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Ue(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});a&&o.push({binding:o.length,resource:a});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}n.setPipeline(e.computePipeline),n.setBindGroup(0,u),n.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Be(e.programInfo.name)}dispose(){}build(e,t){Ue(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&i.push(`enable ${l.extension};`)});let a=hs(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,o=r.createShaderModule({code:n,label:e.name});ue("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Be(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let s=t*r*i,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),Kd={};F(Kd,{WebGpuBackend:()=>Yd});var Zd,Qd,Xd,Yd,Zc=S(()=>{Me(),Q(),Qe(),Ja(),sc(),jc(),Kc(),Zd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let s=e[i].dims.length;r.push(`${a};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Qd=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Zd(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Xd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Yd=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=o=>t.features.has(o)&&r.push(o)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let s=t,n=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Xd(n),this.gpuDataManager=ls(this),this.programManager=new jd(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Lr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ue(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],s=a.kernelId,n=this.kernels.get(s),o=n.kernelType,u=n.kernelName,l=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,c=t[i*2],h=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let f=Number(c-this.queryTimeBase),g=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(g))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(w=>({dims:w.dims,dataType:Ze(w.dataType)})),outputsMetadata:p.map(w=>({dims:w.dims,dataType:Ze(w.dataType)})),kernelId:s,kernelType:o,kernelName:u,programName:l,startTime:f,endTime:g});else{let w="";d.forEach((m,$)=>{w+=`input[${$}]: [${m.dims}] | ${Ze(m.dataType)}, `});let _="";p.forEach((m,$)=>{_+=`output[${$}]: [${m.dims}] | ${Ze(m.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${u}|${l}" ${w}${_}start time: ${f} ns, execution time: ${g-f} ns`)}Ot("GPU",`${l}::${c}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),Be()}run(e,t,r,i,a,s){Ue(e.name);let n=[];for(let m=0;m<t.length;++m){let $=t[m].data;if($===0)continue;let y=this.gpuDataManager.get($);if(!y)throw new Error(`no GPU data for input: ${$}`);n.push(y)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=r.length===0?o.map((m,$)=>$):r;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let p=[],c=[];for(let m=0;m<o.length;++m){if(!Number.isInteger(d[m])||d[m]<-3||d[m]>=s)throw new Error(`Invalid output index: ${d[m]}`);if(d[m]===-3)continue;let $=d[m]===-1,y=d[m]===-2,b=$||y?a(o[m].dataType,o[m].dims):i(d[m],o[m].dataType,o[m].dims);if(p.push(b),b.data===0)continue;let v=this.gpuDataManager.get(b.data);if(!v)throw new Error(`no GPU data for output: ${b.data}`);if($&&this.temporaryData.push(v),y){let x=this.kernelPersistentData.get(this.currentKernelId);x||(x=[],this.kernelPersistentData.set(this.currentKernelId,x)),x.push(v)}c.push(v)}if(n.length!==t.length||c.length!==p.length){if(c.length===0)return Be(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(l){let m=0,$=[];l.forEach(x=>{let I=typeof x.data=="number"?[x.data]:x.data;if(I.length===0)return;let z=x.type===10?2:4,B,re;x.type===10?(re=I.length>4?16:I.length>2?8:I.length*z,B=I.length>4?16:z*I.length):(re=I.length<=2?I.length*z:16,B=16),m=Math.ceil(m/re)*re,$.push(m);let G=x.type===10?8:4;m+=I.length>4?Math.ceil(I.length/G)*B:I.length*z});let y=16;m=Math.ceil(m/y)*y;let b=new ArrayBuffer(m);l.forEach((x,I)=>{let z=$[I],B=typeof x.data=="number"?[x.data]:x.data;if(x.type===6)new Int32Array(b,z,B.length).set(B);else if(x.type===12)new Uint32Array(b,z,B.length).set(B);else if(x.type===10)new Uint16Array(b,z,B.length).set(B);else if(x.type===1)new Float32Array(b,z,B.length).set(B);else throw new Error(`Unsupported uniform type: ${Ze(x.type)}`)});let v=this.gpuDataManager.create(m,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(v.buffer,0,b,0,m),this.gpuDataManager.release(v.id),h={offset:0,size:m,buffer:v.buffer}}let f=this.programManager.normalizeDispatchGroupSize(u),g=f[1]===1&&f[2]===1,w=Qd(e,t,g),_=this.programManager.getArtifact(w);if(_||(_=this.programManager.build(e,f),this.programManager.setArtifact(w,_),ue("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let m=0;m<l.length;m++){let $=l[m],y=$.type,b=typeof $.data=="number"?1:$.data.length,[v,x]=_.uniformVariablesInfo[m];if(y!==v||b!==x)throw new Error(`Uniform variable ${m} mismatch: expect type ${v} with size ${x}, got type ${y} with size ${b} in program "${_.programInfo.name}".`)}}if(ue("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${f[0]}x${f[1]}x${f[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let m={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(m),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(m)}return this.programManager.run(_,n,c,f,h),Be(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Hd.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,s=i.kernelName,n=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ue("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${a}] ${s}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(r,i,s);return a.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ei(this,e,t);return Fr(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ue("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ue("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ue("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Jd={};F(Jd,{init:()=>tp});var gr,ep,tp,Qc=S(()=>{Q(),Qe(),ee(),ac(),gr=class Bp{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=T.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=T.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=T.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=T.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(T.size(t)!==T.size(this.dims))throw new Error("Invalid new shape");return new Bp(this.module,this.dataType,this.data,t)}},ep=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,s));let n=Number(e.getValue(i*a++,s));this.outputCount=Number(e.getValue(i*a++,s)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,s));let o=[];for(let u=0;u<n;u++){let l=Number(e.getValue(i*a++,s)),d=Number(e.getValue(i*a++,"*")),p=Number(e.getValue(i*a++,s)),c=[];for(let h=0;h<p;h++)c.push(Number(e.getValue(i*a++,s)));o.push(new gr(e,l,d,c))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(n=>typeof n=="number"?this.inputs[n]:n)??this.inputs,i=t?.outputs??[],a=(n,o,u)=>new gr(this.module,o,this.output(n,u),u),s=(n,o)=>{let u=ft(n,o);if(!u)throw new Error(`Unsupported data type: ${n}`);let l=u>0?this.backend.gpuDataManager.create(u).id:0;return new gr(this.module,n,l,o)};return this.backend.run(e,r,i,a,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+i*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},tp=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Zc(),A(Kd)).WebGpuBackend,n=new s;await n.initialize(r,i),a("webgpu",[n,o=>n.alloc(Number(o)),o=>n.free(o),(o,u,l,d=!1)=>{if(d)ue("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),n.memcpy(Number(o),Number(u));else{ue("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));n.upload(Number(u),p)}},async(o,u,l)=>{ue("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await n.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>n.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>n.releaseKernel(o),(o,u,l,d)=>{ue("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let p=new ep(t,n,Number(u));return n.computeKernel(Number(o),p,d)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let s=new ss(r);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,u,l,d)=>s.ensureTensor(n,o,u,l,d),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o),(n,o)=>s.registerMLContext(n,o),!!r.trace])}}}),rp,ji,Ki,ut,ip,Zi,_r,Qi,Xi,Yi,Ji,ea,ta,ap=S(()=>{Me(),tc(),rc(),Q(),pt(),Pr(),Fa(),rp=(e,t)=>{me()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},ji=async e=>{rp(e.wasm.numThreads,ir(e.logLevel))},Ki=async(e,t)=>{me().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Qc(),A(Jd)).init;t==="webgpu"&&await i("webgpu",me(),e,r),t==="webnn"&&await i("webnn",me(),e)}},ut=new Map,ip=e=>{let t=me(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&fe("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+i,s))]}finally{t.stackRestore(r)}},Zi=(e,t)=>{let r=me(),i=r.stackSave(),a=0;try{let s=r.PTR_SIZE,n=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,n,n+s)!==0&&fe("Can't get session input/output metadata.");let o=Number(r.getValue(n,"*"));a=Number(r.getValue(n+s,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let l=r.HEAPU32[a/4+1],d=[];for(let p=0;p<l;p++){let c=Number(r.getValue(a+8+p*s,"*"));d.push(c!==0?r.UTF8ToString(c):Number(r.getValue(a+8+(p+l)*s,"*")))}return[o,u,d]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},_r=e=>{let t=me(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Qi=async(e,t)=>{let r,i,a=me();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=_r(e);let s=0,n=0,o=0,u=[],l=[],d=[];try{if([n,u]=await La(t),t?.externalData&&a.mountExternalData){let y=[];for(let b of t.externalData){let v=typeof b=="string"?b:b.path;y.push(Vr(typeof b=="string"?b:b.data).then(x=>{a.mountExternalData(v,x)}))}await Promise.all(y)}for(let y of t?.executionProviders??[])if((typeof y=="string"?y:y.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof y!="string"){let b=y,v=b?.context,x=b?.gpuDevice,I=b?.deviceType,z=b?.powerPreference;v?a.currentContext=v:x?a.currentContext=await a.webnnCreateMLContext(x):a.currentContext=await a.webnnCreateMLContext({deviceType:I,powerPreference:z})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(r,i,n),a.webgpuOnCreateSession?.(s),s===0&&fe("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[p,c]=ip(s),h=!!t?.enableGraphCapture,f=[],g=[],w=[],_=[],m=[];for(let y=0;y<p;y++){let[b,v,x]=Zi(s,y);b===0&&fe("Can't get an input name."),l.push(b);let I=a.UTF8ToString(b);f.push(I),w.push(v===0?{name:I,isTensor:!1}:{name:I,isTensor:!0,type:Ze(v),shape:x})}for(let y=0;y<c;y++){let[b,v,x]=Zi(s,y+p);b===0&&fe("Can't get an output name."),d.push(b);let I=a.UTF8ToString(b);g.push(I),_.push(v===0?{name:I,isTensor:!1}:{name:I,isTensor:!0,type:Ze(v),shape:x});{if(h&&t?.preferredOutputLocation===void 0){m.push("gpu-buffer");continue}let z=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[I]??"cpu",B=a.webnnIsGraphOutput;if(z==="cpu"&&B&&B(s,I)){m.push("ml-tensor-cpu-output");continue}if(z!=="cpu"&&z!=="cpu-pinned"&&z!=="gpu-buffer"&&z!=="ml-tensor")throw new Error(`Not supported preferred output location: ${z}.`);if(h&&z!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${z}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);m.push(z)}}let $=null;return m.some(y=>y==="gpu-buffer"||y==="ml-tensor"||y==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(s),o===0&&fe("Can't create IO binding."),$={handle:o,outputPreferredLocations:m,outputPreferredLocationsEncoded:m.map(y=>y==="ml-tensor-cpu-output"?"ml-tensor":y).map(y=>qr(y))}),ut.set(s,[s,l,d,$,h,!1]),[s,f,g,w,_]}catch(p){throw l.forEach(c=>a._OrtFree(c)),d.forEach(c=>a._OrtFree(c)),o!==0&&a._OrtReleaseBinding(o)!==0&&fe("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&fe("Can't release session."),p}finally{a._free(r),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&fe("Can't release session options."),u.forEach(p=>a._free(p)),a.unmountExternalData?.()}},Xi=e=>{let t=me(),r=ut.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,s,n,o]=r;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(u=>t._OrtFree(u)),s.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),ut.delete(e)},Yi=async(e,t,r,i,a,s,n=!1)=>{if(!e){t.push(0);return}let o=me(),u=o.PTR_SIZE,l=e[0],d=e[1],p=e[3],c=p,h,f;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=e[2].gpuBuffer;f=ft(ht(l),d);{let m=o.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=m(i,s,_,f)}}else if(p==="ml-tensor"){let _=e[2].mlTensor;f=ft(ht(l),d);let m=o.webnnRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=m(i,_,ht(l),d)}else{let _=e[2];if(Array.isArray(_)){f=u*_.length,h=o._malloc(f),r.push(h);for(let m=0;m<_.length;m++){if(typeof _[m]!="string")throw new TypeError(`tensor data at index ${m} is not a string`);o.setValue(h+m*u,Ne(_[m],r),"*")}}else{let m=o.webnnIsGraphInput,$=o.webnnIsGraphOutput;if(l!=="string"&&m&&$){let y=o.UTF8ToString(a);if(m(i,y)||$(i,y)){let b=ht(l);f=ft(b,d),c="ml-tensor";let v=o.webnnCreateTemporaryTensor,x=o.webnnUploadTensor;if(!v||!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let I=await v(i,b,d);x(I,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),h=I}else f=_.byteLength,h=o._malloc(f),r.push(h),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,f),h)}else f=_.byteLength,h=o._malloc(f),r.push(h),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,f),h)}}let g=o.stackSave(),w=o.stackAlloc(4*d.length);try{d.forEach((m,$)=>o.setValue(w+$*u,m,u===4?"i32":"i64"));let _=o._OrtCreateTensor(ht(l),h,f,w,d.length,qr(c));_===0&&fe(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(_)}finally{o.stackRestore(g)}},Ji=async(e,t,r,i,a,s)=>{let n=me(),o=n.PTR_SIZE,u=ut.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],c=u[3],h=u[4],f=u[5],g=t.length,w=i.length,_=0,m=[],$=[],y=[],b=[],v=[],x=n.stackSave(),I=n.stackAlloc(g*o),z=n.stackAlloc(g*o),B=n.stackAlloc(w*o),re=n.stackAlloc(w*o);try{[_,m]=Pa(s),at("wasm prepareInputOutputTensor");for(let O=0;O<g;O++)await Yi(r[O],$,b,e,d[t[O]],t[O],h);for(let O=0;O<w;O++)await Yi(a[O],y,b,e,p[i[O]],g+i[O],h);st("wasm prepareInputOutputTensor");for(let O=0;O<g;O++)n.setValue(I+O*o,$[O],"*"),n.setValue(z+O*o,d[t[O]],"*");for(let O=0;O<w;O++)n.setValue(B+O*o,y[O],"*"),n.setValue(re+O*o,p[i[O]],"*");if(c&&!f){let{handle:O,outputPreferredLocations:L,outputPreferredLocationsEncoded:J}=c;if(d.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${d.length}).`);at("wasm bindInputsOutputs");for(let ie=0;ie<g;ie++){let Y=t[ie];await n._OrtBindInput(O,d[Y],$[ie])!==0&&fe(`Can't bind input[${ie}] for session=${e}.`)}for(let ie=0;ie<w;ie++){let Y=i[ie];a[ie]?.[3]?(v.push(y[ie]),n._OrtBindOutput(O,p[Y],y[ie],0)!==0&&fe(`Can't bind pre-allocated output[${ie}] for session=${e}.`)):n._OrtBindOutput(O,p[Y],0,J[Y])!==0&&fe(`Can't bind output[${ie}] to ${L[ie]} for session=${e}.`)}st("wasm bindInputsOutputs"),ut.set(e,[l,d,p,c,h,!0])}n.jsepOnRunStart?.(l),n.webnnOnRunStart?.(l);let G;c?G=await n._OrtRunWithBinding(l,c.handle,w,B,_):G=await n._OrtRun(l,z,I,g,re,w,B,_),G!==0&&fe("failed to call OrtRun().");let j=[],de=[];at("wasm ProcessOutputTensor");for(let O=0;O<w;O++){let L=Number(n.getValue(B+O*o,"*"));if(L===y[O]||v.includes(y[O])){j.push(a[O]),L!==y[O]&&n._OrtReleaseTensor(L)!==0&&fe("Can't release tensor.");continue}let J=n.stackSave(),ie=n.stackAlloc(4*o),Y=!1,ne,E=0;try{n._OrtGetTensorData(L,ie,ie+o,ie+2*o,ie+3*o)!==0&&fe(`Can't access output tensor data on index ${O}.`);let X=o===4?"i32":"i64",H=Number(n.getValue(ie,X));E=n.getValue(ie+o,"*");let N=n.getValue(ie+o*2,"*"),Te=Number(n.getValue(ie+o*3,X)),ze=[];for(let ge=0;ge<Te;ge++)ze.push(Number(n.getValue(N+ge*o,X)));n._OrtFree(N)!==0&&fe("Can't free memory for tensor dims.");let $e=ze.reduce((ge,be)=>ge*be,1);ne=Ze(H);let Ce=c?.outputPreferredLocations[i[O]];if(ne==="string"){if(Ce==="gpu-buffer"||Ce==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let be=0;be<$e;be++){let Ye=n.getValue(E+be*o,"*"),th=n.getValue(E+(be+1)*o,"*"),rh=be===$e-1?void 0:th-Ye;ge.push(n.UTF8ToString(Ye,rh))}j.push([ne,ze,ge,"cpu"])}else if(Ce==="gpu-buffer"&&$e>0){let ge=n.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let be=ge(E),Ye=ft(H,$e);if(Ye===void 0||!Ur(ne))throw new Error(`Unsupported data type: ${ne}`);Y=!0,j.push([ne,ze,{gpuBuffer:be,download:n.jsepCreateDownloader(be,Ye,ne),dispose:()=>{n._OrtReleaseTensor(L)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(Ce==="ml-tensor"&&$e>0){let ge=n.webnnEnsureTensor,be=n.webnnIsGraphInputOutputTypeSupported;if(!ge||!be)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ft(H,$e)===void 0||!Nr(ne))throw new Error(`Unsupported data type: ${ne}`);if(!be(e,ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${ne} output is not supported by current WebNN Context.`);let Ye=await ge(e,E,H,ze,!1);Y=!0,j.push([ne,ze,{mlTensor:Ye,download:n.webnnCreateMLTensorDownloader(E,ne),dispose:()=>{n.webnnReleaseTensorId(E),n._OrtReleaseTensor(L)}},"ml-tensor"])}else if(Ce==="ml-tensor-cpu-output"&&$e>0){let ge=n.webnnCreateMLTensorDownloader(E,ne)(),be=j.length;Y=!0,de.push((async()=>{let Ye=[be,await ge];return n.webnnReleaseTensorId(E),n._OrtReleaseTensor(L),Ye})()),j.push([ne,ze,[],"cpu"])}else{let ge=rr(ne),be=new ge($e);new Uint8Array(be.buffer,be.byteOffset,be.byteLength).set(n.HEAPU8.subarray(E,E+be.byteLength)),j.push([ne,ze,be,"cpu"])}}finally{n.stackRestore(J),ne==="string"&&E&&n._free(E),Y||n._OrtReleaseTensor(L)}}c&&!h&&(n._OrtClearBoundOutputs(c.handle)!==0&&fe("Can't clear bound outputs."),ut.set(e,[l,d,p,c,h,!1]));for(let[O,L]of await Promise.all(de))j[O][2]=L;return st("wasm ProcessOutputTensor"),j}finally{n.webnnOnRunEnd?.(l),n.stackRestore(x),$.forEach(G=>n._OrtReleaseTensor(G)),y.forEach(G=>n._OrtReleaseTensor(G)),b.forEach(G=>n._free(G)),_!==0&&n._OrtReleaseRunOptions(_),m.forEach(G=>n._free(G))}},ea=e=>{let t=me(),r=ut.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&fe("Can't get an profile file name."),t._OrtFree(a)},ta=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),lt,De,kt,Ft,Wt,yr,ra,wr,bt,vt,sp,np,op,up,lp,dp,pp,cp,hp=S(()=>{Me(),ap(),pt(),Rr(),lt=()=>!!_e.wasm.proxy&&typeof document<"u",kt=!1,Ft=!1,Wt=!1,wr=new Map,bt=(e,t)=>{let r=wr.get(e);r?r.push(t):wr.set(e,[t])},vt=()=>{if(kt||!Ft||Wt||!De)throw new Error("worker not ready")},sp=e=>{switch(e.data.type){case"init-wasm":kt=!1,e.data.err?(Wt=!0,ra[1](e.data.err)):(Ft=!0,ra[0]()),yr&&(URL.revokeObjectURL(yr),yr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=wr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},np=async()=>{if(!Ft){if(kt)throw new Error("multiple calls to 'initWasm()' detected.");if(Wt)throw new Error("previous call to 'initWasm()' failed.");if(kt=!0,lt())return new Promise((e,t)=>{De?.terminate(),Aa().then(([r,i])=>{try{De=i,De.onerror=s=>t(s),De.onmessage=sp,ra=[e,t];let a={type:"init-wasm",in:_e};if(!a.in.wasm.wasmPaths&&r){let s=zr();s&&(a.in.wasm.wasmPaths=s)}De.postMessage(a),yr=r}catch(a){t(a)}},t)});try{await Dr(_e.wasm),await ji(_e),Ft=!0}catch(e){throw Wt=!0,e}finally{kt=!1}}},op=async e=>{if(lt())return vt(),new Promise((t,r)=>{bt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:_e}};De.postMessage(i)});await Ki(_e,e)},up=async e=>lt()?(vt(),new Promise((t,r)=>{bt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};De.postMessage(i,[e.buffer])})):_r(e),lp=async(e,t)=>{if(lt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return vt(),new Promise((r,i)=>{bt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),De.postMessage(a,s)})}else return Qi(e,t)},dp=async e=>{if(lt())return vt(),new Promise((t,r)=>{bt("release",[t,r]);let i={type:"release",in:e};De.postMessage(i)});Xi(e)},pp=async(e,t,r,i,a,s)=>{if(lt()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return vt(),new Promise((n,o)=>{bt("run",[n,o]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:s}};De.postMessage(l,ta(u))})}else return Ji(e,t,r,i,a,s)},cp=async e=>{if(lt())return vt(),new Promise((t,r)=>{bt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};De.postMessage(i)});ea(e)}}),ia,fp,mp,Xc=S(()=>{Me(),hp(),Q(),kr(),Fa(),ia=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},fp=e=>{switch(e[3]){case"cpu":return new Pe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ur(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Pe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Nr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Pe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},mp=class{async fetchModelAndCopyToWasmMemory(e){return up(await Vr(e))}async loadModel(e,t){Ue();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await lp(r,t),Be()}async dispose(){return dp(this.sessionId)}async run(e,t,r){Ue();let i=[],a=[];Object.entries(e).forEach(p=>{let c=p[0],h=p[1],f=this.inputNames.indexOf(c);if(f===-1)throw new Error(`invalid input '${c}'`);i.push(h),a.push(f)});let s=[],n=[];Object.entries(t).forEach(p=>{let c=p[0],h=p[1],f=this.outputNames.indexOf(c);if(f===-1)throw new Error(`invalid output '${c}'`);s.push(h),n.push(f)});let o=i.map((p,c)=>ia(p,()=>`input "${this.inputNames[a[c]]}"`)),u=s.map((p,c)=>p?ia(p,()=>`output "${this.outputNames[n[c]]}"`):null),l=await pp(this.sessionId,a,o,n,u,r),d={};for(let p=0;p<l.length;p++)d[this.outputNames[n[p]]]=s[p]??fp(l[p]);return Be(),d}startProfiling(){}endProfiling(){cp(this.sessionId)}}}),gp={};F(gp,{OnnxruntimeWebAssemblyBackend:()=>sa,initializeFlags:()=>aa,wasmBackend:()=>_p});var aa,sa,_p,Yc=S(()=>{Me(),hp(),Xc(),aa=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?W("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},sa=class{async init(e){aa(),await np(),await op(e)}async createInferenceSessionHandler(e,t){let r=new mp;return await r.loadModel(e,t),r}},_p=new sa}),yp={};F(yp,{InferenceSession:()=>Tr,TRACE:()=>Ot,TRACE_EVENT_BEGIN:()=>at,TRACE_EVENT_END:()=>st,TRACE_FUNC_BEGIN:()=>Ue,TRACE_FUNC_END:()=>Be,Tensor:()=>Pe,default:()=>eh,env:()=>_e,registerBackend:()=>q}),Me(),Me(),Me();var Jc="1.27.0",eh=Sa;{let e=(Yc(),A(gp)).wasmBackend;q("webgpu",e,5),q("webnn",e,5),q("cpu",e,10),q("wasm",e,10)}return Object.defineProperty(_e.versions,"web",{value:Jc,enumerable:!0}),A(yp)})();C.exports=pe})(na)),na.exports}var Ge={},et={},$p;function sh(){if($p)return et;$p=1,Object.defineProperty(et,"__esModule",{value:!0}),et.encodeWAV=et.arrayBufferToBase64=et.minFramesForTargetMS=void 0;function C(R,W,S=16e3){return Math.ceil(R*S/1e3/W)}et.minFramesForTargetMS=C;function ae(R){for(var W="",S=new Uint8Array(R),F=S.byteLength,M=0;M<F;M++)W+=String.fromCharCode(S[M]);return btoa(W)}et.arrayBufferToBase64=ae;function pe(R,W=3,S=16e3,F=1,M=32){var A=M/8,Z=F*A,P=new ArrayBuffer(44+R.length*A),q=new DataView(P);return K(q,0,"RIFF"),q.setUint32(4,36+R.length*A,!0),K(q,8,"WAVE"),K(q,12,"fmt "),q.setUint32(16,16,!0),q.setUint16(20,W,!0),q.setUint16(22,F,!0),q.setUint32(24,S,!0),q.setUint32(28,S*Z,!0),q.setUint16(32,Z,!0),q.setUint16(34,M,!0),K(q,36,"data"),q.setUint32(40,R.length*A,!0),W===1?se(q,44,R):le(q,44,R),P}et.encodeWAV=pe;function le(R,W,S){for(var F=0;F<S.length;F++,W+=4)R.setFloat32(W,S[F],!0)}function se(R,W,S){for(var F=0;F<S.length;F++,W+=2){var M=Math.max(-1,Math.min(1,S[F]));R.setInt16(W,M<0?M*32768:M*32767,!0)}}function K(R,W,S){for(var F=0;F<S.length;F++)R.setUint8(W+F,S.charCodeAt(F))}return et}var oa={},tt={},Gt={},bp;function la(){if(bp)return Gt;bp=1,Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.Message=void 0;var C;return(function(ae){ae.AudioFrame="AUDIO_FRAME",ae.SpeechStart="SPEECH_START",ae.VADMisfire="VAD_MISFIRE",ae.SpeechEnd="SPEECH_END",ae.SpeechStop="SPEECH_STOP"})(C||(Gt.Message=C={})),Gt}var ua={},vp;function br(){return vp||(vp=1,(function(C){Object.defineProperty(C,"__esModule",{value:!0}),C.log=C.LOG_PREFIX=void 0,C.LOG_PREFIX="[VAD]";const ae=["error","debug","warn"];function pe(se){return(...K)=>{console[se](C.LOG_PREFIX,...K)}}const le=ae.reduce((se,K)=>(se[K]=pe(K),se),{});C.log=le})(ua)),ua}var xp;function Dp(){if(xp)return tt;xp=1,Object.defineProperty(tt,"__esModule",{value:!0}),tt.FrameProcessor=tt.validateOptions=tt.defaultFrameProcessorOptions=void 0;const C=la(),ae=br(),pe=[512,1024,1536];tt.defaultFrameProcessorOptions={positiveSpeechThreshold:.5,negativeSpeechThreshold:.5-.15,preSpeechPadFrames:1,redemptionFrames:8,frameSamples:1536,minSpeechFrames:3,submitUserSpeechOnPause:!1};function le(R){pe.includes(R.frameSamples)||ae.log.warn("You are using an unusual frame size"),(R.positiveSpeechThreshold<0||R.negativeSpeechThreshold>1)&&ae.log.error("postiveSpeechThreshold should be a number between 0 and 1"),(R.negativeSpeechThreshold<0||R.negativeSpeechThreshold>R.positiveSpeechThreshold)&&ae.log.error("negativeSpeechThreshold should be between 0 and postiveSpeechThreshold"),R.preSpeechPadFrames<0&&ae.log.error("preSpeechPadFrames should be positive"),R.redemptionFrames<0&&ae.log.error("preSpeechPadFrames should be positive")}tt.validateOptions=le;const se=R=>{const W=R.reduce((F,M)=>(F.push(F.at(-1)+M.length),F),[0]),S=new Float32Array(W.at(-1));return R.forEach((F,M)=>{const A=W[M];S.set(F,A)}),S};class K{constructor(W,S,F){this.modelProcessFunc=W,this.modelResetFunc=S,this.options=F,this.speaking=!1,this.redemptionCounter=0,this.active=!1,this.reset=()=>{this.speaking=!1,this.audioBuffer=[],this.modelResetFunc(),this.redemptionCounter=0},this.pause=()=>(this.active=!1,this.options.submitUserSpeechOnPause?this.endSegment():(this.reset(),{})),this.resume=()=>{this.active=!0},this.endSegment=()=>{const M=this.audioBuffer;this.audioBuffer=[];const A=this.speaking;this.reset();const Z=M.reduce((P,q)=>P+ +q.isSpeech,0);if(A)if(Z>=this.options.minSpeechFrames){const P=se(M.map(q=>q.frame));return{msg:C.Message.SpeechEnd,audio:P}}else return{msg:C.Message.VADMisfire};return{}},this.process=async M=>{if(!this.active)return{};const A=await this.modelProcessFunc(M);if(this.audioBuffer.push({frame:M,isSpeech:A.isSpeech>=this.options.positiveSpeechThreshold}),A.isSpeech>=this.options.positiveSpeechThreshold&&this.redemptionCounter&&(this.redemptionCounter=0),A.isSpeech>=this.options.positiveSpeechThreshold&&!this.speaking)return this.speaking=!0,{probs:A,msg:C.Message.SpeechStart};if(A.isSpeech<this.options.negativeSpeechThreshold&&this.speaking&&++this.redemptionCounter>=this.options.redemptionFrames){this.redemptionCounter=0,this.speaking=!1;const Z=this.audioBuffer;if(this.audioBuffer=[],Z.reduce((q,oe)=>q+ +oe.isSpeech,0)>=this.options.minSpeechFrames){const q=se(Z.map(oe=>oe.frame));return{probs:A,msg:C.Message.SpeechEnd,audio:q}}else return{probs:A,msg:C.Message.VADMisfire}}if(!this.speaking)for(;this.audioBuffer.length>this.options.preSpeechPadFrames;)this.audioBuffer.shift();return{probs:A}},this.audioBuffer=[],this.reset()}}return tt.FrameProcessor=K,tt}var Ht={},Sp;function Pp(){if(Sp)return Ht;Sp=1;var C;Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.Silero=void 0;const ae=br();class pe{constructor(se,K){this.ort=se,this.modelFetcher=K,this.init=async()=>{ae.log.debug("initializing vad");const R=await this.modelFetcher();this._session=await this.ort.InferenceSession.create(R),this._sr=new this.ort.Tensor("int64",[16000n]),this.reset_state(),ae.log.debug("vad is initialized")},this.reset_state=()=>{const R=Array(128).fill(0);this._h=new this.ort.Tensor("float32",R,[2,1,64]),this._c=new this.ort.Tensor("float32",R,[2,1,64])},this.process=async R=>{const S={input:new this.ort.Tensor("float32",R,[1,R.length]),h:this._h,c:this._c,sr:this._sr},F=await this._session.run(S);this._h=F.hn,this._c=F.cn;const[M]=F.output.data;return{notSpeech:1-M,isSpeech:M}}}}return Ht.Silero=pe,C=pe,pe.new=async(le,se)=>{const K=new C(le,se);return await K.init(),K},Ht}var jt={},Tp;function Up(){if(Tp)return jt;Tp=1,Object.defineProperty(jt,"__esModule",{value:!0}),jt.Resampler=void 0;const C=br();class ae{constructor(le){this.options=le,this.process=se=>{const K=[];for(const R of se)this.inputBuffer.push(R);for(;this.inputBuffer.length*this.options.targetSampleRate/this.options.nativeSampleRate>this.options.targetFrameSize;){const R=new Float32Array(this.options.targetFrameSize);let W=0,S=0;for(;W<this.options.targetFrameSize;){let F=0,M=0;for(;S<Math.min(this.inputBuffer.length,(W+1)*this.options.nativeSampleRate/this.options.targetSampleRate);)F+=this.inputBuffer[S],M++,S++;R[W]=F/M,W++}this.inputBuffer=this.inputBuffer.slice(S),K.push(R)}return K},le.nativeSampleRate<16e3&&C.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate"),this.inputBuffer=[]}}return jt.Resampler=ae,jt}var kp;function nh(){return kp||(kp=1,(function(C){Object.defineProperty(C,"__esModule",{value:!0}),C.PlatformAgnosticNonRealTimeVAD=C.defaultNonRealTimeVADOptions=void 0;const ae=Dp(),pe=la(),le=Pp(),se=Up();C.defaultNonRealTimeVADOptions={...ae.defaultFrameProcessorOptions,ortConfig:void 0};class K{static async _new(W,S,F={}){const M={...C.defaultNonRealTimeVADOptions,...F};M.ortConfig!==void 0&&M.ortConfig(S);const A=new this(W,S,M);return await A.init(),A}constructor(W,S,F){this.modelFetcher=W,this.ort=S,this.options=F,this.init=async()=>{const M=await le.Silero.new(this.ort,this.modelFetcher);this.frameProcessor=new ae.FrameProcessor(M.process,M.reset_state,{frameSamples:this.options.frameSamples,positiveSpeechThreshold:this.options.positiveSpeechThreshold,negativeSpeechThreshold:this.options.negativeSpeechThreshold,redemptionFrames:this.options.redemptionFrames,preSpeechPadFrames:this.options.preSpeechPadFrames,minSpeechFrames:this.options.minSpeechFrames,submitUserSpeechOnPause:this.options.submitUserSpeechOnPause}),this.frameProcessor.resume()},this.run=async function*(M,A){const Z={nativeSampleRate:A,targetSampleRate:16e3,targetFrameSize:this.options.frameSamples},q=new se.Resampler(Z).process(M);let oe,Ee;for(const it of[...Array(q.length)].keys()){const Et=q[it],{msg:zt,audio:ve}=await this.frameProcessor.process(Et);switch(zt){case pe.Message.SpeechStart:oe=it*this.options.frameSamples/16;break;case pe.Message.SpeechEnd:Ee=(it+1)*this.options.frameSamples/16,yield{audio:ve,start:oe,end:Ee};break}}const{msg:Ke,audio:He}=this.frameProcessor.endSegment();Ke==pe.Message.SpeechEnd&&(yield{audio:He,start:oe,end:q.length*this.options.frameSamples/16})},(0,ae.validateOptions)(F)}}C.PlatformAgnosticNonRealTimeVAD=K})(oa)),oa}var Ip;function Np(){return Ip||(Ip=1,(function(C){var ae=Ge&&Ge.__createBinding||(Object.create?(function(R,W,S,F){F===void 0&&(F=S);var M=Object.getOwnPropertyDescriptor(W,S);(!M||("get"in M?!W.__esModule:M.writable||M.configurable))&&(M={enumerable:!0,get:function(){return W[S]}}),Object.defineProperty(R,F,M)}):(function(R,W,S,F){F===void 0&&(F=S),R[F]=W[S]})),pe=Ge&&Ge.__setModuleDefault||(Object.create?(function(R,W){Object.defineProperty(R,"default",{enumerable:!0,value:W})}):function(R,W){R.default=W}),le=Ge&&Ge.__importStar||function(R){if(R&&R.__esModule)return R;var W={};if(R!=null)for(var S in R)S!=="default"&&Object.prototype.hasOwnProperty.call(R,S)&&ae(W,R,S);return pe(W,R),W},se=Ge&&Ge.__exportStar||function(R,W){for(var S in R)S!=="default"&&!Object.prototype.hasOwnProperty.call(W,S)&&ae(W,R,S)};Object.defineProperty(C,"__esModule",{value:!0}),C.utils=void 0;const K=le(sh());C.utils={minFramesForTargetMS:K.minFramesForTargetMS,arrayBufferToBase64:K.arrayBufferToBase64,encodeWAV:K.encodeWAV},se(nh(),C),se(Dp(),C),se(la(),C),se(br(),C),se(Pp(),C),se(Up(),C)})(Ge)),Ge}var Kt={},Ep;function oh(){if(Ep)return Kt;Ep=1,Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.audioFileToArray=void 0;async function C(ae){const pe=new OfflineAudioContext(1,1,44100),le=new FileReader;let se=null;if(await new Promise(W=>{le.addEventListener("loadend",S=>{const F=le.result;pe.decodeAudioData(F,M=>{se=M,pe.startRendering().then(A=>{console.log("Rendering completed successfully"),W()}).catch(A=>{console.error(`Rendering failed: ${A}`)})},M=>{console.log(`Error with decoding audio data: ${M}`)})}),le.readAsArrayBuffer(ae)}),se===null)throw Error("some shit");let K=se,R=new Float32Array(K.length);for(let W=0;W<K.length;W++)for(let S=0;S<K.numberOfChannels;S++)R[W]+=K.getChannelData(S)[W];return{audio:R,sampleRate:K.sampleRate}}return Kt.audioFileToArray=C,Kt}var Zt={},zp;function qp(){if(zp)return Zt;zp=1,Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.defaultModelFetcher=void 0;const C=ae=>fetch(ae).then(pe=>pe.arrayBuffer());return Zt.defaultModelFetcher=C,Zt}var Qt={},Cp;function Vp(){if(Cp)return Qt;Cp=1,Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.assetPath=void 0;const ae=typeof window<"u"&&typeof window.document<"u"?window.document.currentScript:null;let pe="/";ae&&(pe=ae.src.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"));const le=se=>pe+se;return Qt.assetPath=le,Qt}var rt={},Op;function uh(){return Op||(Op=1,(function(C){var ae=rt&&rt.__createBinding||(Object.create?(function(M,A,Z,P){P===void 0&&(P=Z);var q=Object.getOwnPropertyDescriptor(A,Z);(!q||("get"in q?!A.__esModule:q.writable||q.configurable))&&(q={enumerable:!0,get:function(){return A[Z]}}),Object.defineProperty(M,P,q)}):(function(M,A,Z,P){P===void 0&&(P=Z),M[P]=A[Z]})),pe=rt&&rt.__setModuleDefault||(Object.create?(function(M,A){Object.defineProperty(M,"default",{enumerable:!0,value:A})}):function(M,A){M.default=A}),le=rt&&rt.__importStar||function(M){if(M&&M.__esModule)return M;var A={};if(M!=null)for(var Z in M)Z!=="default"&&Object.prototype.hasOwnProperty.call(M,Z)&&ae(A,M,Z);return pe(A,M),A};Object.defineProperty(C,"__esModule",{value:!0}),C.AudioNodeVAD=C.MicVAD=C.defaultRealTimeVADOptions=C.ort=void 0;const se=le(Mp()),K=Np(),R=Vp(),W=qp();C.ort=se,C.defaultRealTimeVADOptions={...K.defaultFrameProcessorOptions,onFrameProcessed:M=>{},onVADMisfire:()=>{K.log.debug("VAD misfire")},onSpeechStart:()=>{K.log.debug("Detected speech start")},onSpeechEnd:()=>{K.log.debug("Detected speech end")},workletURL:(0,R.assetPath)("vad.worklet.bundle.min.js"),modelURL:(0,R.assetPath)("silero_vad.onnx"),modelFetcher:W.defaultModelFetcher,stream:void 0,ortConfig:void 0};class S{static async new(A={}){const Z={...C.defaultRealTimeVADOptions,...A};(0,K.validateOptions)(Z);let P;Z.stream===void 0?P=await navigator.mediaDevices.getUserMedia({audio:{...Z.additionalAudioConstraints,channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}):P=Z.stream;const q=new AudioContext,oe=new MediaStreamAudioSourceNode(q,{mediaStream:P}),Ee=await F.new(q,Z);return Ee.receive(oe),new S(Z,q,P,Ee,oe)}constructor(A,Z,P,q,oe,Ee=!1){this.options=A,this.audioContext=Z,this.stream=P,this.audioNodeVAD=q,this.sourceNode=oe,this.listening=Ee,this.pause=()=>{this.audioNodeVAD.pause(),this.listening=!1},this.start=()=>{this.audioNodeVAD.start(),this.listening=!0},this.destroy=()=>{this.listening&&this.pause(),this.options.stream===void 0&&this.stream.getTracks().forEach(Ke=>Ke.stop()),this.sourceNode.disconnect(),this.audioNodeVAD.destroy(),this.audioContext.close()}}}C.MicVAD=S;class F{static async new(A,Z={}){const P={...C.defaultRealTimeVADOptions,...Z};(0,K.validateOptions)(P),P.ortConfig!==void 0&&P.ortConfig(C.ort);try{await A.audioWorklet.addModule(P.workletURL)}catch(He){throw console.error(`Encountered an error while loading worklet. Please make sure the worklet vad.bundle.min.js included with @ricky0123/vad-web is available at the specified path:
        ${P.workletURL}
        If need be, you can customize the worklet file location using the \`workletURL\` option.`),He}const q=new AudioWorkletNode(A,"vad-helper-worklet",{processorOptions:{frameSamples:P.frameSamples}});let oe;try{oe=await K.Silero.new(C.ort,()=>P.modelFetcher(P.modelURL))}catch(He){throw console.error(`Encountered an error while loading model file. Please make sure silero_vad.onnx, included with @ricky0123/vad-web, is available at the specified path:
      ${P.modelURL}
      If need be, you can customize the model file location using the \`modelsURL\` option.`),He}const Ee=new K.FrameProcessor(oe.process,oe.reset_state,{frameSamples:P.frameSamples,positiveSpeechThreshold:P.positiveSpeechThreshold,negativeSpeechThreshold:P.negativeSpeechThreshold,redemptionFrames:P.redemptionFrames,preSpeechPadFrames:P.preSpeechPadFrames,minSpeechFrames:P.minSpeechFrames,submitUserSpeechOnPause:P.submitUserSpeechOnPause}),Ke=new F(A,P,Ee,q);return q.port.onmessage=async He=>{if(He.data?.message===K.Message.AudioFrame){const it=He.data.data,Et=new Float32Array(it);await Ke.processFrame(Et)}},Ke}constructor(A,Z,P,q){this.ctx=A,this.options=Z,this.frameProcessor=P,this.entryNode=q,this.pause=()=>{const oe=this.frameProcessor.pause();this.handleFrameProcessorEvent(oe)},this.start=()=>{this.frameProcessor.resume()},this.receive=oe=>{oe.connect(this.entryNode)},this.processFrame=async oe=>{const Ee=await this.frameProcessor.process(oe);this.handleFrameProcessorEvent(Ee)},this.handleFrameProcessorEvent=oe=>{switch(oe.probs!==void 0&&this.options.onFrameProcessed(oe.probs),oe.msg){case K.Message.SpeechStart:this.options.onSpeechStart();break;case K.Message.VADMisfire:this.options.onVADMisfire();break;case K.Message.SpeechEnd:this.options.onSpeechEnd(oe.audio);break}},this.destroy=()=>{this.entryNode.port.postMessage({message:K.Message.SpeechStop}),this.entryNode.disconnect()}}}C.AudioNodeVAD=F})(rt)),rt}var Ap;function lh(){return Ap||(Ap=1,(function(C){var ae=Je&&Je.__createBinding||(Object.create?(function(A,Z,P,q){q===void 0&&(q=P);var oe=Object.getOwnPropertyDescriptor(Z,P);(!oe||("get"in oe?!Z.__esModule:oe.writable||oe.configurable))&&(oe={enumerable:!0,get:function(){return Z[P]}}),Object.defineProperty(A,q,oe)}):(function(A,Z,P,q){q===void 0&&(q=P),A[q]=Z[P]})),pe=Je&&Je.__setModuleDefault||(Object.create?(function(A,Z){Object.defineProperty(A,"default",{enumerable:!0,value:Z})}):function(A,Z){A.default=Z}),le=Je&&Je.__importStar||function(A){if(A&&A.__esModule)return A;var Z={};if(A!=null)for(var P in A)P!=="default"&&Object.prototype.hasOwnProperty.call(A,P)&&ae(Z,A,P);return pe(Z,A),Z};Object.defineProperty(C,"__esModule",{value:!0}),C.defaultRealTimeVADOptions=C.AudioNodeVAD=C.MicVAD=C.NonRealTimeVAD=C.Message=C.FrameProcessor=C.utils=C.defaultNonRealTimeVADOptions=void 0;const se=le(Mp()),K=Np();Object.defineProperty(C,"FrameProcessor",{enumerable:!0,get:function(){return K.FrameProcessor}}),Object.defineProperty(C,"Message",{enumerable:!0,get:function(){return K.Message}});const R=oh(),W=qp(),S=Vp();C.defaultNonRealTimeVADOptions={modelURL:(0,S.assetPath)("silero_vad.onnx"),modelFetcher:W.defaultModelFetcher};class F extends K.PlatformAgnosticNonRealTimeVAD{static async new(Z={}){const{modelURL:P,modelFetcher:q}={...C.defaultNonRealTimeVADOptions,...Z};return await this._new(()=>q(P),se,Z)}}C.NonRealTimeVAD=F,C.utils={audioFileToArray:R.audioFileToArray,...K.utils};var M=uh();Object.defineProperty(C,"MicVAD",{enumerable:!0,get:function(){return M.MicVAD}}),Object.defineProperty(C,"AudioNodeVAD",{enumerable:!0,get:function(){return M.AudioNodeVAD}}),Object.defineProperty(C,"defaultRealTimeVADOptions",{enumerable:!0,get:function(){return M.defaultRealTimeVADOptions}})})(Je)),Je}var Lp=lh();const dh=ih(Lp),hh=ah({__proto__:null,default:dh},[Lp]);export{hh as i};
