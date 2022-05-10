
; 
(function(){var e,t,i,n,r,o,s,l,a=[].slice,u={}.hasOwnProperty,p=function(e,t){function i(){this.constructor=e}for(var n in t)u.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};s=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,i,n,r,o;if(n=arguments[0],e=2<=arguments.length?a.call(arguments,1):[],this._callbacks=this._callbacks||{},i=this._callbacks[n])for(r=0,o=i.length;o>r;r++)t=i[r],t.apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var i,n,r,o,s;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(n=this._callbacks[e],!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(r=o=0,s=n.length;s>o;r=++o)if(i=n[r],i===t){n.splice(r,1);break}return this},e}(),e=function(e){function i(e,t){var r,o,s;if(this.element=e,this.version=i.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(i.instances.push(this),this.element.dropzone=this,r=null!=(s=i.optionsForElement(this.element))?s:{},this.options=n({},this.defaultOptions,r,null!=t?t:{}),this.options.forceFallback||!i.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(o=this.getExistingFallback())&&o.parentNode&&o.parentNode.removeChild(o),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?i.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:i.getElements(this.options.clickable,"clickable")),this.init()}var n,r;return p(i,e),i.prototype.Emitter=t,i.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],i.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Ваш браузер неподдерживает  функцию drag'n'drop загрузки файлов.",dictFallbackText:"Пожалуйста, воспользуйтель старым способом загрузки.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return s},forceFallback:!1,fallback:function(){var e,t,n,r,o,s;for(this.element.className=""+this.element.className+" dz-browser-not-supported",s=this.element.getElementsByTagName("div"),r=0,o=s.length;o>r;r++)e=s[r],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message");return t||(t=i.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),n=t.getElementsByTagName("span")[0],n&&(n.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):i>n?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:s,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:s,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,n,r,o,s,l,a,u,p,d,c,h,m;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=i.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),o=0,a=d.length;a>o;o++)t=d[o],t.textContent=e.name;for(c=e.previewElement.querySelectorAll("[data-dz-size]"),s=0,u=c.length;u>s;s++)t=c[s],t.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=i.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),n=function(t){return function(n){return n.preventDefault(),n.stopPropagation(),e.status===i.UPLOADING?i.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?i.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)}}(this),h=e.previewElement.querySelectorAll("[data-dz-remove]"),m=[],l=0,p=h.length;p>l;l++)r=h[l],m.push(r.addEventListener("click",n));return m}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,r,o;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),o=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),n=0,r=o.length;r>n;n++)i=o[n],i.alt=e.name,i.src=t;return setTimeout(function(){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var i,n,r,o,s;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),o=e.previewElement.querySelectorAll("[data-dz-errormessage]"),s=[],n=0,r=o.length;r>n;n++)i=o[n],s.push(i.textContent=t);return s}},errormultiple:s,processing:function(e){return e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink)?e._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:s,uploadprogress:function(e,t){var i,n,r,o,s;if(e.previewElement){for(o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),s=[],n=0,r=o.length;r>n;n++)i=o[n],s.push("PROGRESS"===i.nodeName?i.value=t:i.style.width=""+t+"%");return s}},totaluploadprogress:s,sending:s,sendingmultiple:s,success:function(e){return e.previewElement?e.previewElement.classList.add("dz-success"):void 0},successmultiple:s,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:s,complete:function(e){return e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement?e.previewElement.classList.add("dz-complete"):void 0},completemultiple:s,maxfilesexceeded:s,maxfilesreached:s,queuecomplete:s,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},n=function(){var e,t,i,n,r,o,s;for(n=arguments[0],i=2<=arguments.length?a.call(arguments,1):[],o=0,s=i.length;s>o;o++){t=i[o];for(e in t)r=t[e],n[e]=r}return n},i.prototype.getAcceptedFiles=function(){var e,t,i,n,r;for(n=this.files,r=[],t=0,i=n.length;i>t;t++)e=n[t],e.accepted&&r.push(e);return r},i.prototype.getRejectedFiles=function(){var e,t,i,n,r;for(n=this.files,r=[],t=0,i=n.length;i>t;t++)e=n[t],e.accepted||r.push(e);return r},i.prototype.getFilesWithStatus=function(e){var t,i,n,r,o;for(r=this.files,o=[],i=0,n=r.length;n>i;i++)t=r[i],t.status===e&&o.push(t);return o},i.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(i.QUEUED)},i.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(i.UPLOADING)},i.prototype.getActiveFiles=function(){var e,t,n,r,o;for(r=this.files,o=[],t=0,n=r.length;n>t;t++)e=r[t],(e.status===i.UPLOADING||e.status===i.QUEUED)&&o.push(e);return o},i.prototype.init=function(){var e,t,n,r,o,s,l;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(i.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(n=function(e){return function(){return e.hiddenFileInput&&document.body.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.body.appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,i,r,o;if(i=e.hiddenFileInput.files,i.length)for(r=0,o=i.length;o>r;r++)t=i[r],e.addFile(t);return n()})}}(this))(),this.URL=null!=(s=window.URL)?s:window.webkitURL,l=this.events,r=0,o=l.length;o>r;r++)e=l[r],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(){return 0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length?setTimeout(function(){return e.emit("queuecomplete")},0):void 0}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(i){return t(i),e.emit("dragenter",i)}}(this),dragover:function(e){return function(i){var n;try{n=i.dataTransfer.effectAllowed}catch(r){}return i.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",t(i),e.emit("dragover",i)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(i){return t(i),e.drop(i)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(n){return t!==e.element||n.target===e.element||i.elementInside(n.target,e.element.querySelector(".dz-message"))?e.hiddenFileInput.click():void 0}}})}}(this)),this.enable(),this.options.init.call(this)},i.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,i.instances.splice(i.instances.indexOf(this),1)},i.prototype.updateTotalUploadProgress=function(){var e,t,i,n,r,o,s,l;if(n=0,i=0,e=this.getActiveFiles(),e.length){for(l=this.getActiveFiles(),o=0,s=l.length;s>o;o++)t=l[o],n+=t.upload.bytesSent,i+=t.upload.total;r=100*n/i}else r=100;return this.emit("totaluploadprogress",r,i,n)},i.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},i.prototype.getFallbackForm=function(){var e,t,n,r;return(e=this.getExistingFallback())?e:(n='<div class="dz-fallback">',this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Загрузить"></div>',t=i.createElement(n),"FORM"!==this.element.tagName?(r=i.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),r.appendChild(t)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=r?r:t)},i.prototype.getExistingFallback=function(){var e,t,i,n,r,o;for(t=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},o=["div","form"],n=0,r=o.length;r>n;n++)if(i=o[n],e=t(this.element.getElementsByTagName(i)))return e},i.prototype.setupEventListeners=function(){var e,t,i,n,r,o,s;for(o=this.listeners,s=[],n=0,r=o.length;r>n;n++)e=o[n],s.push(function(){var n,r;n=e.events,r=[];for(t in n)i=n[t],r.push(e.element.addEventListener(t,i,!1));return r}());return s},i.prototype.removeEventListeners=function(){var e,t,i,n,r,o,s;for(o=this.listeners,s=[],n=0,r=o.length;r>n;n++)e=o[n],s.push(function(){var n,r;n=e.events,r=[];for(t in n)i=n[t],r.push(e.element.removeEventListener(t,i,!1));return r}());return s},i.prototype.disable=function(){var e,t,i,n,r;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),n=this.files,r=[],t=0,i=n.length;i>t;t++)e=n[t],r.push(this.cancelUpload(e));return r},i.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},i.prototype.filesize=function(e){var t,i,n,r,o,s,l,a;for(s=["TB","GB","MB","KB","b"],n=r=null,i=l=0,a=s.length;a>l;i=++l)if(o=s[i],t=Math.pow(this.options.filesizeBase,4-i)/10,e>=t){n=e/Math.pow(this.options.filesizeBase,4-i),r=o;break}return n=Math.round(10*n)/10,"<strong>"+n+"</strong> "+r},i.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},i.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,t.length&&(i=e.dataTransfer.items,i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},i.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},i.prototype.handleFiles=function(e){var t,i,n,r;for(r=[],i=0,n=e.length;n>i;i++)t=e[i],r.push(this.addFile(t));return r},i.prototype._addFilesFromItems=function(e){var t,i,n,r,o;for(o=[],n=0,r=e.length;r>n;n++)i=e[n],o.push(null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?this.addFile(i.getAsFile()):t.isDirectory?this._addFilesFromDirectory(t,t.name):void 0:null!=i.getAsFile?null==i.kind||"file"===i.kind?this.addFile(i.getAsFile()):void 0:void 0);return o},i.prototype._addFilesFromDirectory=function(e,t){var i,n;return i=e.createReader(),n=function(e){return function(i){var n,r,o;for(r=0,o=i.length;o>r;r++)n=i[r],n.isFile?n.file(function(i){return e.options.ignoreHiddenFiles&&"."===i.name.substring(0,1)?void 0:(i.fullPath=""+t+"/"+i.name,e.addFile(i))}):n.isDirectory&&e._addFilesFromDirectory(n,""+t+"/"+n.name)}}(this),i.readEntries(n,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},i.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):i.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},i.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=i.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},i.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)t=e[i],this.enqueueFile(t);return null},i.prototype.enqueueFile=function(e){if(e.status!==i.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return e.status=i.QUEUED,this.options.autoProcessQueue?setTimeout(function(e){return function(){return e.processQueue()}}(this),0):void 0},i.prototype._thumbnailQueue=[],i.prototype._processingThumbnail=!1,i.prototype._enqueueThumbnail=function(e){return this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)):void 0},i.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this)))},i.prototype.removeFile=function(e){return e.status===i.UPLOADING&&this.cancelUpload(e),this.files=l(this.files,e),this.emit("removedfile",e),0===this.files.length?this.emit("reset"):void 0},i.prototype.removeAllFiles=function(e){var t,n,r,o;for(null==e&&(e=!1),o=this.files.slice(),n=0,r=o.length;r>n;n++)t=o[n],(t.status!==i.UPLOADING||e)&&this.removeFile(t);return null},i.prototype.createThumbnail=function(e,t){var i;return i=new FileReader,i.onload=function(n){return function(){return"image/svg+xml"===e.type?(n.emit("thumbnail",e,i.result),void(null!=t&&t())):n.createThumbnailFromUrl(e,i.result,t)}}(this),i.readAsDataURL(e)},i.prototype.createThumbnailFromUrl=function(e,t,i){var n;return n=document.createElement("img"),n.onload=function(t){return function(){var r,s,l,a,u,p,d,c;return e.width=n.width,e.height=n.height,l=t.options.resize.call(t,e),null==l.trgWidth&&(l.trgWidth=l.optWidth),null==l.trgHeight&&(l.trgHeight=l.optHeight),r=document.createElement("canvas"),s=r.getContext("2d"),r.width=l.trgWidth,r.height=l.trgHeight,o(s,n,null!=(u=l.srcX)?u:0,null!=(p=l.srcY)?p:0,l.srcWidth,l.srcHeight,null!=(d=l.trgX)?d:0,null!=(c=l.trgY)?c:0,l.trgWidth,l.trgHeight),a=r.toDataURL("image/png"),t.emit("thumbnail",e,a),null!=i?i():void 0}}(this),null!=i&&(n.onerror=i),n.src=t},i.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,i=this.getUploadingFiles().length,e=i,!(i>=t)&&(n=this.getQueuedFiles(),n.length>0)){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;t>e;){if(!n.length)return;this.processFile(n.shift()),e++}}},i.prototype.processFile=function(e){return this.processFiles([e])},i.prototype.processFiles=function(e){var t,n,r;for(n=0,r=e.length;r>n;n++)t=e[n],t.processing=!0,t.status=i.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},i.prototype._getFilesWithXhr=function(e){var t,i;return i=function(){var i,n,r,o;for(r=this.files,o=[],i=0,n=r.length;n>i;i++)t=r[i],t.xhr===e&&o.push(t);return o}.call(this)},i.prototype.cancelUpload=function(e){var t,n,r,o,s,l,a;if(e.status===i.UPLOADING){for(n=this._getFilesWithXhr(e.xhr),r=0,s=n.length;s>r;r++)t=n[r],t.status=i.CANCELED;for(e.xhr.abort(),o=0,l=n.length;l>o;o++)t=n[o],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else((a=e.status)===i.ADDED||a===i.QUEUED)&&(e.status=i.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));return this.options.autoProcessQueue?this.processQueue():void 0},r=function(){var e,t;return t=arguments[0],e=2<=arguments.length?a.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},i.prototype.uploadFile=function(e){return this.uploadFiles([e])},i.prototype.uploadFiles=function(e){var t,o,s,l,a,u,p,d,c,h,m,f,g,v,y,F,w,E,b,C,z,k,L,x,T,A,D,S,_,M,U,N,I,R;for(b=new XMLHttpRequest,C=0,x=e.length;x>C;C++)t=e[C],t.xhr=b;f=r(this.options.method,e),w=r(this.options.url,e),b.open(f,w,!0),b.withCredentials=!!this.options.withCredentials,y=null,s=function(i){return function(){var n,r,o;for(o=[],n=0,r=e.length;r>n;n++)t=e[n],o.push(i._errorProcessing(e,y||i.options.dictResponseError.replace("{{statusCode}}",b.status),b));return o}}(this),F=function(i){return function(n){var r,o,s,l,a,u,p,d,c;if(null!=n)for(o=100*n.loaded/n.total,s=0,u=e.length;u>s;s++)t=e[s],t.upload={progress:o,total:n.total,bytesSent:n.loaded};else{for(r=!0,o=100,l=0,p=e.length;p>l;l++)t=e[l],(100!==t.upload.progress||t.upload.bytesSent!==t.upload.total)&&(r=!1),t.upload.progress=o,t.upload.bytesSent=t.upload.total;if(r)return}for(c=[],a=0,d=e.length;d>a;a++)t=e[a],c.push(i.emit("uploadprogress",t,o,t.upload.bytesSent));return c}}(this),b.onload=function(t){return function(n){var r;if(e[0].status!==i.CANCELED&&4===b.readyState){if(y=b.responseText,b.getResponseHeader("content-type")&&~b.getResponseHeader("content-type").indexOf("application/json"))try{y=JSON.parse(y)}catch(o){n=o,y="Invalid JSON response from server."}return F(),200<=(r=b.status)&&300>r?t._finished(e,y,n):s()}}}(this),b.onerror=function(){return function(){return e[0].status!==i.CANCELED?s():void 0}}(this),v=null!=(_=b.upload)?_:b,v.onprogress=F,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&n(u,this.options.headers);for(l in u)a=u[l],b.setRequestHeader(l,a);if(o=new FormData,this.options.params){M=this.options.params;for(m in M)E=M[m],o.append(m,E)}for(z=0,T=e.length;T>z;z++)t=e[z],this.emit("sending",t,b,o);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,b,o),"FORM"===this.element.tagName)for(U=this.element.querySelectorAll("input, textarea, select, button"),k=0,A=U.length;A>k;k++)if(d=U[k],c=d.getAttribute("name"),h=d.getAttribute("type"),"SELECT"===d.tagName&&d.hasAttribute("multiple"))for(N=d.options,L=0,D=N.length;D>L;L++)g=N[L],g.selected&&o.append(c,g.value);else(!h||"checkbox"!==(I=h.toLowerCase())&&"radio"!==I||d.checked)&&o.append(c,d.value);for(p=S=0,R=e.length-1;R>=0?R>=S:S>=R;p=R>=0?++S:--S)o.append(this._getParamName(p),e[p],e[p].name);return b.send(o)},i.prototype._finished=function(e,t,n){var r,o,s;for(o=0,s=e.length;s>o;o++)r=e[o],r.status=i.SUCCESS,this.emit("success",r,t,n),this.emit("complete",r);return this.options.uploadMultiple&&(this.emit("successmultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},i.prototype._errorProcessing=function(e,t,n){var r,o,s;for(o=0,s=e.length;s>o;o++)r=e[o],r.status=i.ERROR,this.emit("error",r,t,n),this.emit("complete",r);return this.options.uploadMultiple&&(this.emit("errormultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},i}(t),e.version="4.0.1",e.options={},e.optionsForElement=function(t){return t.getAttribute("id")?e.options[i(t.getAttribute("id"))]:void 0},e.instances=[],e.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},e.autoDiscover=!0,e.discover=function(){var t,i,n,r,o,s;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],t=function(e){var t,i,r,o;for(o=[],i=0,r=e.length;r>i;i++)t=e[i],o.push(/(^| )dropzone($| )/.test(t.className)?n.push(t):void 0);return o},t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))),s=[],r=0,o=n.length;o>r;r++)i=n[r],s.push(e.optionsForElement(i)!==!1?new e(i):void 0);return s},e.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],e.isBrowserSupported=function(){var t,i,n,r,o;if(t=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(o=e.blacklistedBrowsers,n=0,r=o.length;r>n;n++)i=o[n],i.test(navigator.userAgent)&&(t=!1);else t=!1;else t=!1;return t},l=function(e,t){var i,n,r,o;for(o=[],n=0,r=e.length;r>n;n++)i=e[n],i!==t&&o.push(i);return o},i=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},e.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},e.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},e.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},e.getElements=function(e,t){var i,n,r,o,s,l,a,u;if(e instanceof Array){r=[];try{for(o=0,l=e.length;l>o;o++)n=e[o],r.push(this.getElement(n,t))}catch(p){i=p,r=null}}else if("string"==typeof e)for(r=[],u=document.querySelectorAll(e),s=0,a=u.length;a>s;s++)n=u[s],r.push(n);else null!=e.nodeType&&(r=[e]);if(null==r||!r.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return r},e.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},e.isValidFile=function(e,t){var i,n,r,o,s;if(!t)return!0;for(t=t.split(","),n=e.type,i=n.replace(/\/.*$/,""),o=0,s=t.length;s>o;o++)if(r=t[o],r=r.trim(),"."===r.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(r.toLowerCase(),e.name.length-r.length))return!0}else if(/\/\*$/.test(r)){if(i===r.replace(/\/.*$/,""))return!0}else if(n===r)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each(function(){return new e(this,t)})}),"undefined"!=typeof module&&null!==module?module.exports=e:window.Dropzone=e,e.ADDED="added",e.QUEUED="queued",e.ACCEPTED=e.QUEUED,e.UPLOADING="uploading",e.PROCESSING=e.UPLOADING,e.CANCELED="canceled",e.ERROR="error",e.SUCCESS="success",r=function(e){var t,i,n,r,o,s,l,a,u,p;for(l=e.naturalWidth,s=e.naturalHeight,i=document.createElement("canvas"),i.width=1,i.height=s,n=i.getContext("2d"),n.drawImage(e,0,0),r=n.getImageData(0,0,1,s).data,p=0,o=s,a=s;a>p;)t=r[4*(a-1)+3],0===t?o=a:p=a,a=o+p>>1;return u=a/s,0===u?1:u},o=function(e,t,i,n,o,s,l,a,u,p){var d;return d=r(t),e.drawImage(t,i,n,o,s,l,a,u,p/d)},n=function(e,t){var i,n,r,o,s,l,a,u,p;if(r=!1,p=!0,n=e.document,u=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",o=function(i){return"readystatechange"!==i.type||"complete"===n.readyState?(("load"===i.type?e:n)[a](l+i.type,o,!1),!r&&(r=!0)?t.call(e,i.type||i):void 0):void 0},s=function(){var e;try{u.doScroll("left")}catch(t){return e=t,void setTimeout(s,50)}return o("poll")},"complete"!==n.readyState){if(n.createEventObject&&u.doScroll){try{p=!e.frameElement}catch(d){}p&&s()}return n[i](l+"DOMContentLoaded",o,!1),n[i](l+"readystatechange",o,!1),e[i](l+"load",o,!1)}},e._autoDiscoverFunction=function(){return e.autoDiscover?e.discover():void 0},n(window,e._autoDiscoverFunction)}).call(this);

;
; 
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

;
; 
(function(undefined){var __m4=function(){var t=window.can||{};("undefined"==typeof GLOBALCAN||GLOBALCAN!==!1)&&(window.can=t),t.k=function(){},t.isDeferred=function(t){return t&&"function"==typeof t.then&&"function"==typeof t.pipe};var e=0;return t.cid=function(t,n){return t._cid||(e++,t._cid=(n||"")+e),t._cid},t.VERSION="@EDGE",t.simpleExtend=function(t,e){for(var n in e)t[n]=e[n];return t},t.frag=function(e){var n;return e&&"string"!=typeof e?11===e.nodeType?e:"number"==typeof e.nodeType?(n=document.createDocumentFragment(),n.appendChild(e),n):"number"==typeof e.length?(n=document.createDocumentFragment(),t.each(e,function(e){n.appendChild(t.frag(e))}),n):(n=t.buildFragment(""+e,document.body),n.childNodes.length||n.appendChild(document.createTextNode("")),n):(n=t.buildFragment(null==e?"":""+e,document.body),n.childNodes.length||n.appendChild(document.createTextNode("")),n)},t.__reading=function(){},t}(),__m5=function(t){var e=window.setImmediate||function(t){return setTimeout(t,0)},n={MutationObserver:window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,map:{"class":"className",value:"value",innerText:"innerText",textContent:"textContent",checked:!0,disabled:!0,readonly:!0,required:!0,src:function(t,e){return null==e||""===e?(t.removeAttribute("src"),null):(t.setAttribute("src",e),e)},style:function(t,e){return t.style.cssText=e||""}},defaultValue:["input","textarea"],set:function(e,r,i){var a;n.MutationObserver||(a=n.get(e,r));var s,o=(""+e.nodeName).toLowerCase(),u=n.map[r];"function"==typeof u?s=u(e,i):u===!0?(s=e[r]=!0,"checked"===r&&"radio"===e.type&&t.inArray(o,n.defaultValue)>=0&&(e.defaultChecked=!0)):u?(s=e[u]=i,"value"===u&&t.inArray(o,n.defaultValue)>=0&&(e.defaultValue=i)):(e.setAttribute(r,i),s=i),n.MutationObserver||s===a||n.trigger(e,r,a)},trigger:function(n,r,i){return t.data(t.$(n),"canHasAttributesBindings")?e(function(){t.trigger(n,{type:"attributes",attributeName:r,target:n,oldValue:i,bubbles:!1},[])}):undefined},get:function(t,e){var r=n.map[e];return"string"==typeof r&&t[r]?t[r]:t.getAttribute(e)},remove:function(t,e){var r;n.MutationObserver||(r=n.get(t,e));var i=n.map[e];"function"==typeof i&&i(t,undefined),i===!0?t[e]=!1:"string"==typeof i?t[i]="":t.removeAttribute(e),n.MutationObserver||null==r||n.trigger(t,e,r)},has:function(){var t=document.createElement("div");return t.hasAttribute?function(t,e){return t.hasAttribute(e)}:function(t,e){return null!==t.getAttribute(e)}}()};return n}(__m4),__m6=function(t){return t.addEvent=function(t,e){var n=this.__bindEvents||(this.__bindEvents={}),r=n[t]||(n[t]=[]);return r.push({handler:e,name:t}),this},t.listenTo=function(e,n,r){var i=this.__listenToEvents;i||(i=this.__listenToEvents={});var a=t.cid(e),s=i[a];s||(s=i[a]={obj:e,events:{}});var o=s.events[n];o||(o=s.events[n]=[]),o.push(r),t.bind.call(e,n,r)},t.stopListening=function(e,n,r){var i=this.__listenToEvents,a=i,s=0;if(!i)return this;if(e){var o=t.cid(e);if((a={})[o]=i[o],!i[o])return this}for(var u in a){var c,l=a[u];e=i[u].obj,n?(c={})[n]=l.events[n]:c=l.events;for(var f in c){var d=c[f]||[];for(s=0;d.length>s;)r&&r===d[s]||!r?(t.unbind.call(e,f,d[s]),d.splice(s,1)):s++;d.length||delete l.events[f]}t.isEmptyObject(l.events)&&delete i[u]}return this},t.removeEvent=function(t,e,n){if(!this.__bindEvents)return this;for(var r,i=this.__bindEvents[t]||[],a=0,s="function"==typeof e;i.length>a;)r=i[a],(n?n(r,t,e):s&&r.handler===e||!s&&(r.cid===e||!e))?i.splice(a,1):a++;return this},t.dispatch=function(t,e){var n=this.__bindEvents;if(n){"string"==typeof t&&(t={type:t});var r=t.type,i=(n[r]||[]).slice(0),a=[t];e&&a.push.apply(a,e);for(var s=0,o=i.length;o>s;s++)i[s].handler.apply(this,a);return t}},t.one=function(e,n){var r=function(){return t.unbind.call(this,e,r),n.apply(this,arguments)};return t.bind.call(this,e,r),this},t.event={on:function(){return 0===arguments.length&&t.Control&&this instanceof t.Control?t.Control.prototype.on.call(this):t.addEvent.apply(this,arguments)},off:function(){return 0===arguments.length&&t.Control&&this instanceof t.Control?t.Control.prototype.off.call(this):t.removeEvent.apply(this,arguments)},bind:t.addEvent,unbind:t.removeEvent,delegate:function(e,n,r){return t.addEvent.call(this,n,r)},undelegate:function(e,n,r){return t.removeEvent.call(this,n,r)},trigger:t.dispatch,one:t.one,addEvent:t.addEvent,removeEvent:t.removeEvent,listenTo:t.listenTo,stopListening:t.stopListening,dispatch:t.dispatch},t.event}(__m4),__m7=function(t){var e=function(t){var e=t.length;return"function"!=typeof arr&&(0===e||"number"==typeof e&&e>0&&e-1 in t)};return t.each=function(n,r,i){var a,s,o,u=0;if(n)if(e(n))if(t.List&&n instanceof t.List)for(s=n.attr("length");s>u&&(o=n.attr(u),r.call(i||o,o,u,n)!==!1);u++);else for(s=n.length;s>u&&(o=n[u],r.call(i||o,o,u,n)!==!1);u++);else if("object"==typeof n)if(t.Map&&n instanceof t.Map||n===t.route){var c=t.Map.keys(n);for(u=0,s=c.length;s>u&&(a=c[u],o=n.attr(a),r.call(i||o,o,a,n)!==!1);u++);}else for(a in n)if(n.hasOwnProperty(a)&&r.call(i||n[a],n[a],a,n)===!1)break;return n},t}(__m4),__m8=function(t){t.inserted=function(e){e=t.makeArray(e);for(var n,r,i=!1,a=t.$(document.contains?document:document.body),s=0;(r=e[s])!==undefined;s++){if(!i){if(!r.getElementsByTagName)continue;if(!t.has(a,r).length)return;i=!0}if(i&&r.getElementsByTagName){n=t.makeArray(r.getElementsByTagName("*")),t.trigger(r,"inserted",[],!1);for(var o,u=0;(o=n[u])!==undefined;u++)t.trigger(o,"inserted",[],!1)}}},t.appendChild=function(e,n){var r;r=11===n.nodeType?t.makeArray(n.childNodes):[n],e.appendChild(n),t.inserted(r)},t.insertBefore=function(e,n,r){var i;i=11===n.nodeType?t.makeArray(n.childNodes):[n],e.insertBefore(n,r),t.inserted(i)}}(__m4),__m2=function(t,e,n){var r=function(t){return t.nodeName&&(1===t.nodeType||9===t.nodeType)||t==window};t.extend(e,t,{trigger:function(n,i,a,s){r(n)?t.event.trigger(i,a,n,!s):n.trigger?n.trigger(i,a):("string"==typeof i&&(i={type:i}),i.target=i.target||n,a&&(a.length&&"string"==typeof a?a=[a]:a.length||(a=[a])),a||(a=[]),e.dispatch.call(n,i,a))},event:e.event,addEvent:e.addEvent,removeEvent:e.removeEvent,buildFragment:function(e,n){var r;return e=[e],n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,r=t.buildFragment(e,n),r.cacheable?t.clone(r.fragment):r.fragment||r},$:t,each:e.each,bind:function(n,i){return this.bind&&this.bind!==e.bind?this.bind(n,i):r(this)?t.event.add(this,n,i):e.addEvent.call(this,n,i),this},unbind:function(n,i){return this.unbind&&this.unbind!==e.unbind?this.unbind(n,i):r(this)?t.event.remove(this,n,i):e.removeEvent.call(this,n,i),this},delegate:function(n,i,a){return this.delegate?this.delegate(n,i,a):r(this)?t(this).delegate(n,i,a):e.bind.call(this,i,a),this},undelegate:function(n,i,a){return this.undelegate?this.undelegate(n,i,a):r(this)?t(this).undelegate(n,i,a):e.unbind.call(this,i,a),this},proxy:function(t,e){return function(){return t.apply(e,arguments)}},attr:n}),e.on=e.bind,e.off=e.unbind,t.each(["append","filter","addClass","remove","data","get","has"],function(t,n){e[n]=function(t){return t[n].apply(t,e.makeArray(arguments).slice(1))}});var i=t.cleanData;t.cleanData=function(n){t.each(n,function(t,n){n&&e.trigger(n,"removed",[],!1)}),i(n)};var a,s=t.fn.domManip;if(t.fn.domManip=function(){for(var t=1;arguments.length>t;t++)if("function"==typeof arguments[t]){a=t;break}return s.apply(this,arguments)},t(document.createElement("div")).append(document.createElement("div")),t.fn.domManip=2===a?function(t,n,r){return s.call(this,t,n,function(t){var n;11===t.nodeType&&(n=e.makeArray(t.childNodes));var i=r.apply(this,arguments);return e.inserted(n?n:[t]),i})}:function(t,n){return s.call(this,t,function(t){var r;11===t.nodeType&&(r=e.makeArray(t.childNodes));var i=n.apply(this,arguments);return e.inserted(r?r:[t]),i})},e.attr.MutationObserver)t.event.special.attributes={setup:function(){var t=this,n=new e.attr.MutationObserver(function(n){n.forEach(function(n){var r=e.simpleExtend({},n);e.trigger(t,r,[])})});n.observe(this,{attributes:!0,attributeOldValue:!0}),e.data(e.$(this),"canAttributesObserver",n)},teardown:function(){e.data(e.$(this),"canAttributesObserver").disconnect(),t.removeData(this,"canAttributesObserver")}};else{var o=t.attr;t.attr=function(t,n){var r,i;arguments.length>=3&&(r=o.call(this,t,n));var a=o.apply(this,arguments);return arguments.length>=3&&(i=o.call(this,t,n)),i!==r&&e.attr.trigger(t,n,r),a};var u=t.removeAttr;t.removeAttr=function(t,n){var r=o.call(this,t,n),i=u.apply(this,arguments);return null!=r&&e.attr.trigger(t,n,r),i},t.event.special.attributes={setup:function(){e.data(e.$(this),"canHasAttributesBindings",!0)},teardown:function(){t.removeData(this,"canHasAttributesBindings")}}}return function(){var t="<-\n>",n=e.buildFragment(t,document);if(t!==n.childNodes[0].nodeValue){var r=e.buildFragment;e.buildFragment=function(t,e){var n=r(t,e);return 1===n.childNodes.length&&3===n.childNodes[0].nodeType&&(n.childNodes[0].nodeValue=t),n}}}(),t.event.special.inserted={},t.event.special.removed={},e}(jQuery,__m4,__m5,__m6,__m7,__m8),__m10=function(t){var e=t.isFunction,n=t.makeArray,r=1,i=function(t){var e=function(){return c.frag(t.apply(this,arguments))};return e.render=function(){return t.apply(t,arguments)},e},a=function(t,e){if(!t.length)throw"can.view: No template or empty template:"+e},s=function(e,n){var r,i,s,o="string"==typeof e?e:e.url,u=e.engine&&"."+e.engine||o.match(/\.[\w\d]+$/);if(o.match(/^#/)&&(o=o.substr(1)),(i=document.getElementById(o))&&(u="."+i.type.match(/\/(x\-)?(.+)/)[2]),u||c.cached[o]||(o+=u=c.ext),t.isArray(u)&&(u=u[0]),s=c.toId(o),o.match(/^\/\//)&&(o=o.substr(2),o=window.steal?steal.config().root.mapJoin(""+steal.id(o)):o),window.require&&require.toUrl&&(o=require.toUrl(o)),r=c.types[u],c.cached[s])return c.cached[s];if(i)return c.registerView(s,i.innerHTML,r);var l=new t.Deferred;return t.ajax({async:n,url:o,dataType:"text",error:function(t){a("",o),l.reject(t)},success:function(t){a(t,o),c.registerView(s,t,r,l)}}),l},o=function(e){var n=[];if(t.isDeferred(e))return[e];for(var r in e)t.isDeferred(e[r])&&n.push(e[r]);return n},u=function(e){return t.isArray(e)&&"success"===e[1]?e[0]:e},c=t.view=t.template=function(t,n,r,i){e(r)&&(i=r,r=undefined);var a;return a=e(t)?t(n,r,i):c.renderAs("fragment",t,n,r,i)};return t.extend(c,{frag:function(t,e){return c.hookup(c.fragment(t),e)},fragment:function(e){if("string"!=typeof e&&11===e.nodeType)return e;var n=t.buildFragment(e,document.body);return n.childNodes.length||n.appendChild(document.createTextNode("")),n},toId:function(e){return t.map((""+e).split(/\/|\./g),function(t){return t?t:undefined}).join("_")},toStr:function(t){return null==t?"":""+t},hookup:function(e,n){var r,i,a=[];return t.each(e.childNodes?t.makeArray(e.childNodes):e,function(e){1===e.nodeType&&(a.push(e),a.push.apply(a,t.makeArray(e.getElementsByTagName("*"))))}),t.each(a,function(t){t.getAttribute&&(r=t.getAttribute("data-view-id"))&&(i=c.hookups[r])&&(i(t,n,r),delete c.hookups[r],t.removeAttribute("data-view-id"))}),e},hookups:{},hook:function(t){return c.hookups[++r]=t," data-view-id='"+r+"'"},cached:{},cachedRenderers:{},cache:!0,register:function(e){this.types["."+e.suffix]=e,t[e.suffix]=c[e.suffix]=function(t,n){var r,a;if(!n)return a=function(){return r||(r=e.fragRenderer?e.fragRenderer(null,t):i(e.renderer(null,t))),r.apply(this,arguments)},a.render=function(){var n=e.renderer(null,t);return n.apply(n,arguments)},a;var s=function(){return r||(r=e.fragRenderer?e.fragRenderer(t,n):e.renderer(t,n)),r.apply(this,arguments)};return e.fragRenderer?c.preload(t,s):c.preloadStringRenderer(t,s)}},types:{},ext:".ejs",registerScript:function(t,e,n){return"can.view.preloadStringRenderer('"+e+"',"+c.types["."+t].script(e,n)+");"},preload:function(e,n){var r=c.cached[e]=(new t.Deferred).resolve(function(t,e){return n.call(t,t,e)});return r.__view_id=e,c.cachedRenderers[e]=n,n},preloadStringRenderer:function(t,e){return this.preload(t,i(e))},render:function(e,n,r,i){return t.view.renderAs("string",e,n,r,i)},renderTo:function(t,e,n,r){return("string"===t&&e.render?e.render:e)(n,r)},renderAs:function(r,i,a,l,f){e(l)&&(f=l,l=undefined);var d,h,p,g,m,v=o(a);if(v.length)return h=new t.Deferred,p=t.extend({},a),v.push(s(i,!0)),t.when.apply(t,v).then(function(e){var i,s=n(arguments),o=s.pop();if(t.isDeferred(a))p=u(e);else for(var c in a)t.isDeferred(a[c])&&(p[c]=u(s.shift()));i=t.view.renderTo(r,o,p,l),h.resolve(i,p),f&&f(i,p)},function(){h.reject.apply(h,arguments)}),h;if(d=t.__clearReading(),g=e(f),h=s(i,g),d&&t.__setReading(d),g)m=h,h.then(function(e){f(a?t.view.renderTo(r,e,a,l):e)});else{if("resolved"===h.state()&&h.__view_id){var _=c.cachedRenderers[h.__view_id];return a?t.view.renderTo(r,_,a,l):_}h.then(function(e){m=a?t.view.renderTo(r,e,a,l):e})}return m},registerView:function(e,n,r,a){var s,o="object"==typeof r?r:c.types[r||c.ext];return s=o.fragRenderer?o.fragRenderer(e,n):i(o.renderer(e,n)),a=a||new t.Deferred,c.cache&&(c.cached[e]=a,a.__view_id=e,c.cachedRenderers[e]=s),a.resolve(s)}}),t}(__m2),__m9=function(t){var e=t.view.attr=function(t,e){if(!e){var i=n[t];if(!i)for(var a=0,s=r.length;s>a;a++){var o=r[a];if(o.match.test(t)){i=o.handler;break}}return i}"string"==typeof t?n[t]=e:r.push({match:t,handler:e})},n={},r=[],i=/[-\:]/,a=t.view.tag=function(t,e){if(!e){var n=s[t.toLowerCase()];return!n&&i.test(t)&&(n=function(){}),n}window.html5&&(window.html5.elements+=" "+t,window.html5.shivDocument()),s[t.toLowerCase()]=e},s={};return t.view.callbacks={_tags:s,_attributes:n,_regExpAttributes:r,tag:a,attr:e,tagHandler:function(e,n,r){var i,a=r.options.attr("tags."+n),o=a||s[n],u=r.scope;if(o){var c=t.__clearReading();i=o(e,r),t.__setReading(c)}else i=u;if(i&&r.subtemplate){u!==i&&(u=u.add(i));var l=r.subtemplate(u,r.options),f="string"==typeof l?t.view.frag(l):l;t.appendChild(e,f)}}},t.view.callbacks}(__m2,__m10),__m13=function(t){var e=/_|-/,n=/\=\=/,r=/([A-Z]+)([A-Z][a-z])/g,i=/([a-z\d])([A-Z])/g,a=/([a-z\d])([A-Z])/g,s=/\{([^\}]+)\}/g,o=/"/g,u=/'/g,c=/-+(.)?/g,l=/[a-z][A-Z]/g,f=function(t,e,n){var r=t[e];return r===undefined&&n===!0&&(r=t[e]={}),r},d=function(t){return/^f|^o/.test(typeof t)},h=function(t){var e=null===t||t===undefined||isNaN(t)&&"NaN"==""+t;return""+(e?"":t)};return t.extend(t,{esc:function(t){return h(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(o,"&#34;").replace(u,"&#39;")},getObject:function(e,n,r){var i,a,s,o,u=e?e.split("."):[],c=u.length,l=0;if(n=t.isArray(n)?n:[n||window],o=n.length,!c)return n[0];for(l;o>l;l++){for(i=n[l],s=undefined,a=0;c>a&&d(i);a++)s=i,i=f(s,u[a]);if(s!==undefined&&i!==undefined)break}if(r===!1&&i!==undefined&&delete s[u[a-1]],r===!0&&i===undefined)for(i=n[0],a=0;c>a&&d(i);a++)i=f(i,u[a],!0);return i},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},camelize:function(t){return h(t).replace(c,function(t,e){return e?e.toUpperCase():""})},hyphenate:function(t){return h(t).replace(l,function(t){return t.charAt(0)+"-"+t.charAt(1).toLowerCase()})},underscore:function(t){return t.replace(n,"/").replace(r,"$1_$2").replace(i,"$1_$2").replace(a,"_").toLowerCase()},sub:function(e,n,r){var i=[];return e=e||"",i.push(e.replace(s,function(e,a){var s=t.getObject(a,n,r===!0?!1:undefined);return s===undefined||null===s?(i=null,""):d(s)&&i?(i.push(s),""):""+s})),null===i?i:1>=i.length?i[0]:i},replacer:s,undHash:e}),t}(__m2),__m12=function(t){var e=0;return t.Construct=function(){return arguments.length?t.Construct.extend.apply(t.Construct,arguments):undefined},t.extend(t.Construct,{constructorExtends:!0,newInstance:function(){var t,e=this.instance();return e.setup&&(t=e.setup.apply(e,arguments)),e.init&&e.init.apply(e,t||arguments),e},_inherit:function(e,n,r){t.extend(r||e,e||{})},_overwrite:function(t,e,n,r){t[n]=r},setup:function(e){this.defaults=t.extend(!0,{},e.defaults,this.defaults)},instance:function(){e=1;var t=new this;return e=0,t},extend:function(n,r,i){function a(){return e?undefined:this.constructor!==a&&arguments.length&&a.constructorExtends?a.extend.apply(a,arguments):a.newInstance.apply(a,arguments)}"string"!=typeof n&&(i=r,r=n,n=null),i||(i=r,r=null),i=i||{};var s,o,u,c,l,f,d,h,p=this,g=this.prototype;h=this.instance(),t.Construct._inherit(i,g,h);for(l in p)p.hasOwnProperty(l)&&(a[l]=p[l]);t.Construct._inherit(r,p,a),n&&(s=n.split("."),f=s.pop(),o=t.getObject(s.join("."),window,!0),d=o,u=t.underscore(n.replace(/\./g,"_")),c=t.underscore(f),o[f]=a),t.extend(a,{constructor:a,prototype:h,namespace:d,_shortName:c,fullName:n,_fullName:u}),f!==undefined&&(a.shortName=f),a.prototype.constructor=a;var m=[p].concat(t.makeArray(arguments)),v=a.setup.apply(a,m);return a.init&&a.init.apply(a,v||m),a}}),t.Construct.prototype.setup=function(){},t.Construct.prototype.init=function(){},t.Construct}(__m13),__m11=function(t){var e,n=function(e,n,r){return t.bind.call(e,n,r),function(){t.unbind.call(e,n,r)}},r=t.isFunction,i=t.extend,a=t.each,s=[].slice,o=/\{([^\}]+)\}/g,u=t.getObject("$.event.special",[t])||{},c=function(e,n,r,i){return t.delegate.call(e,n,r,i),function(){t.undelegate.call(e,n,r,i)}},l=function(e,r,i,a){return a?c(e,t.trim(a),r,i):n(e,r,i)},f=t.Control=t.Construct({setup:function(){if(t.Construct.setup.apply(this,arguments),t.Control){var e,n=this;n.actions={};for(e in n.prototype)n._isAction(e)&&(n.actions[e]=n._action(e))}},_shifter:function(e,n){var i="string"==typeof n?e[n]:n;return r(i)||(i=e[i]),function(){return e.called=n,i.apply(e,[this.nodeName?t.$(this):this].concat(s.call(arguments,0)))}},_isAction:function(t){var e=this.prototype[t],n=typeof e;return"constructor"!==t&&("function"===n||"string"===n&&r(this.prototype[e]))&&!!(u[t]||d[t]||/[^\w]/.test(t))},_action:function(n,r){if(o.lastIndex=0,r||!o.test(n)){var i=r?t.sub(n,this._lookup(r)):n;if(!i)return null;var a=t.isArray(i),s=a?i[1]:i,u=s.split(/\s+/g),c=u.pop();return{processor:d[c]||e,parts:[s,u.join(" "),c],delegate:a?i[0]:undefined}}},_lookup:function(t){return[t,window]},processors:{},defaults:{}},{setup:function(e,n){var r,a=this.constructor,s=a.pluginName||a._fullName;return this.element=t.$(e),s&&"can_control"!==s&&this.element.addClass(s),r=t.data(this.element,"controls"),r||(r=[],t.data(this.element,"controls",r)),r.push(this),this.options=i({},a.defaults,n),this.on(),[this.element,this.options]},on:function(e,n,r,i){if(!e){this.off();var a,s,o=this.constructor,u=this._bindings,c=o.actions,f=this.element,d=t.Control._shifter(this,"destroy");for(a in c)c.hasOwnProperty(a)&&(s=c[a]||o._action(a,this.options,this),s&&(u.control[a]=s.processor(s.delegate||f,s.parts[2],s.parts[1],a,this)));return t.bind.call(f,"removed",d),u.user.push(function(e){t.unbind.call(e,"removed",d)}),u.user.length}return"string"==typeof e&&(i=r,r=n,n=e,e=this.element),i===undefined&&(i=r,r=n,n=null),"string"==typeof i&&(i=t.Control._shifter(this,i)),this._bindings.user.push(l(e,r,i,n)),this._bindings.user.length},off:function(){var t=this.element[0],e=this._bindings;e&&(a(e.user||[],function(e){e(t)}),a(e.control||{},function(e){e(t)})),this._bindings={user:[],control:{}}},destroy:function(){if(null!==this.element){var e,n=this.constructor,r=n.pluginName||n._fullName;this.off(),r&&"can_control"!==r&&this.element.removeClass(r),e=t.data(this.element,"controls"),e.splice(t.inArray(this,e),1),t.trigger(this,"destroyed"),this.element=null}}}),d=t.Control.processors;return e=function(e,n,r,i,a){return l(e,n,t.Control._shifter(a,i),r)},a(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed"],function(t){d[t]=e}),f}(__m2,__m12),__m16=function(t){return t.bindAndSetup=function(){return t.addEvent.apply(this,arguments),this._init||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},t.unbindAndTeardown=function(){return t.removeEvent.apply(this,arguments),null===this._bindings?this._bindings=0:this._bindings--,!this._bindings&&this._bindteardown&&this._bindteardown(),this},t}(__m2),__m17=function(t){var e=t.bubble={event:function(t,e){return t.constructor._bubbleRule(e,t)},childrenOf:function(t,n){t._each(function(r,i){r&&r.bind&&e.toParent(r,t,i,n)})},teardownChildrenFrom:function(t,n){t._each(function(r){e.teardownFromParent(t,r,n)})},toParent:function(e,n,r,i){t.listenTo.call(n,e,i,function(){var i=t.makeArray(arguments),a=i.shift();i[0]=(t.List&&n instanceof t.List?n.indexOf(e):r)+(i[0]?"."+i[0]:""),a.triggeredNS=a.triggeredNS||{},a.triggeredNS[n._cid]||(a.triggeredNS[n._cid]=!0,t.trigger(n,a,i))})},teardownFromParent:function(e,n,r){n&&n.unbind&&t.stopListening.call(e,n,r)},isBubbling:function(t,e){return t._bubbleBindings&&t._bubbleBindings[e]},bind:function(t,n){if(!t._init){var r=e.event(t,n);r&&(t._bubbleBindings||(t._bubbleBindings={}),t._bubbleBindings[r]?t._bubbleBindings[r]++:(t._bubbleBindings[r]=1,e.childrenOf(t,r)))}},unbind:function(n,r){var i=e.event(n,r);i&&(n._bubbleBindings&&n._bubbleBindings[i]--,n._bubbleBindings&&!n._bubbleBindings[i]&&(delete n._bubbleBindings[i],e.teardownChildrenFrom(n,i),t.isEmptyObject(n._bubbleBindings)&&delete n._bubbleBindings))},add:function(n,r,i){if(r instanceof t.Map&&n._bubbleBindings)for(var a in n._bubbleBindings)n._bubbleBindings[a]&&(e.teardownFromParent(n,r,a),e.toParent(r,n,i,a))},removeMany:function(t,n){for(var r=0,i=n.length;i>r;r++)e.remove(t,n[r])},remove:function(n,r){if(r instanceof t.Map&&n._bubbleBindings)for(var i in n._bubbleBindings)n._bubbleBindings[i]&&e.teardownFromParent(n,r,i)},set:function(n,r,i,a){return t.Map.helpers.isObservable(i)&&e.add(n,i,r),t.Map.helpers.isObservable(a)&&e.remove(n,a),i}};return e}(__m2),__m18=function(t){var e=1,n=0,r=[],i=[];t.batch={start:function(t){n++,t&&i.push(t)},stop:function(a,s){if(a?n=0:n--,0===n){var o,u,c=r.slice(0),l=i.slice(0);for(r=[],i=[],e++,s&&t.batch.start(),o=0,u=c.length;u>o;o++)t.dispatch.apply(c[o][0],c[o][1]);for(o=0,u=l.length;l.length>o;o++)l[o]()}},trigger:function(i,a,s){if(!i._init){if(0===n)return t.dispatch.call(i,a,s);a="string"==typeof a?{type:a}:a,a.batchNum=e,r.push([i,[a,s]])}}}}(__m4),__m15=function(t,e,n){var r=null,i=function(){for(var t in r)r[t].added&&delete r[t].obj._cid;r=null},a=function(t){return r&&r[t._cid]&&r[t._cid].instance},s=null,o=t.Map=t.Construct.extend({setup:function(){if(t.Construct.setup.apply(this,arguments),t.Map){this.defaults||(this.defaults={}),this._computes=[];for(var e in this.prototype)"define"!==e&&"function"!=typeof this.prototype[e]?this.defaults[e]=this.prototype[e]:this.prototype[e].isComputed&&this._computes.push(e);this.helpers.define&&this.helpers.define(this)}!t.List||this.prototype instanceof t.List||(this.List=o.List.extend({Map:this},{}))},_bubble:n,_bubbleRule:function(t){return("change"===t||t.indexOf(".")>=0)&&"change"},_computes:[],bind:t.bindAndSetup,on:t.bindAndSetup,unbind:t.unbindAndTeardown,off:t.unbindAndTeardown,id:"id",helpers:{define:null,attrParts:function(t,e){return e?[t]:"object"==typeof t?t:(""+t).split(".")},addToMap:function(e,n){var a;r||(a=i,r={});var s=e._cid,o=t.cid(e);return r[o]||(r[o]={obj:e,instance:n,added:!s}),a},isObservable:function(e){return e instanceof t.Map||e&&e===t.route},canMakeObserve:function(e){return e&&!t.isDeferred(e)&&(t.isArray(e)||t.isPlainObject(e))},serialize:function(e,n,r){var i=t.cid(e),a=!1;return s||(a=!0,s={attr:{},serialize:{}}),s[n][i]=r,e.each(function(i,a){var u,c=o.helpers.isObservable(i),l=c&&s[n][t.cid(i)];u=l?l:"serialize"===n?o.helpers._serialize(e,a,i):o.helpers._getValue(e,a,i,n),u!==undefined&&(r[a]=u)}),t.__reading(e,"__keys"),a&&(s=null),r},_serialize:function(t,e,n){return o.helpers._getValue(t,e,n,"serialize")},_getValue:function(t,e,n,r){return o.helpers.isObservable(n)?n[r]():n}},keys:function(e){var n=[];t.__reading(e,"__keys");for(var r in e._data)n.push(r);return n}},{setup:function(e){this._data={},t.cid(this,".map"),this._init=1;var n=this._setupDefaults();this._setupComputes(n);var r=e&&t.Map.helpers.addToMap(e,this),i=t.extend(t.extend(!0,{},n),e);this.attr(i),r&&r(),this.bind("change",t.proxy(this._changes,this)),delete this._init},_setupComputes:function(){var t=this.constructor._computes;this._computedBindings={};for(var e,n=0,r=t.length;r>n;n++)e=t[n],this[e]=this[e].clone(this),this._computedBindings[e]={count:0}},_setupDefaults:function(){return this.constructor.defaults||{}},_bindsetup:function(){},_bindteardown:function(){},_changes:function(e,n,r,i,a){t.batch.trigger(this,{type:n,batchNum:e.batchNum,target:e.target},[i,a])},_triggerChange:function(e,r,i,a){n.isBubbling(this,"change")?t.batch.trigger(this,{type:"change",target:this},[e,r,i,a]):t.batch.trigger(this,e,[i,a]),("remove"===r||"add"===r)&&t.batch.trigger(this,{type:"__keys",target:this})},_each:function(t){var e=this.__get();for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)},attr:function(e,n){var r=typeof e;return"string"!==r&&"number"!==r?this._attrs(e,n):1===arguments.length?(t.__reading(this,e),this._get(e)):(this._set(e,n),this)},each:function(){return t.each.apply(undefined,[this].concat(t.makeArray(arguments)))},removeAttr:function(e){var n=t.List&&this instanceof t.List,r=t.Map.helpers.attrParts(e),i=r.shift(),a=n?this[i]:this._data[i];return r.length&&a?a.removeAttr(r):("string"==typeof e&&~e.indexOf(".")&&(i=e),this._remove(i,a),a)},_remove:function(t,e){t in this._data&&(delete this._data[t],t in this.constructor.prototype||delete this[t],this._triggerChange(t,"remove",undefined,e))},_get:function(t){t=""+t;var e=t.indexOf(".");if(e>=0){var n=this.__get(t);if(n!==undefined)return n;var r=t.substr(0,e),i=t.substr(e+1),a=this.__get(r);return a&&a._get?a._get(i):undefined}return this.__get(t)},__get:function(t){return t?this._computedBindings[t]?this[t]():this._data[t]:this._data},__type:function(e){if(!(e instanceof t.Map)&&t.Map.helpers.canMakeObserve(e)){var n=a(e);if(n)return n;if(t.isArray(e)){var r=t.List;return new r(e)}var i=this.constructor.Map||t.Map;return new i(e)}return e},_set:function(t,e,n){t=""+t;var r,i=t.indexOf(".");if(!n&&i>=0){var a=t.substr(0,i),s=t.substr(i+1);if(r=this._init?undefined:this.__get(a),!o.helpers.isObservable(r))throw"can.Map: Object does not exist";r._set(s,e)}else this.__convert&&(e=this.__convert(t,e)),r=this._init?undefined:this.__get(t),this.__set(t,this.__type(e,t),r)},__set:function(t,e,n){if(e!==n){var r=n!==undefined||this.__get().hasOwnProperty(t)?"set":"add";this.___set(t,this.constructor._bubble.set(this,t,e,n)),this._triggerChange(t,r,e,n),n&&this.constructor._bubble.teardownFromParent(this,n)}},___set:function(t,e){this._computedBindings[t]?this[t](e):this._data[t]=e,"function"==typeof this.constructor.prototype[t]||this._computedBindings[t]||(this[t]=e)},bind:function(e){var n=this._computedBindings&&this._computedBindings[e];if(n)if(n.count)n.count++;else{n.count=1;var r=this;n.handler=function(n,i,a){t.batch.trigger(r,{type:e,batchNum:n.batchNum,target:r},[i,a])},this[e].bind("change",n.handler)}return this.constructor._bubble.bind(this,e),t.bindAndSetup.apply(this,arguments)},unbind:function(e){var n=this._computedBindings&&this._computedBindings[e];return n&&(1===n.count?(n.count=0,this[e].unbind("change",n.handler),delete n.handler):n.count--),this.constructor._bubble.unbind(this,e),t.unbindAndTeardown.apply(this,arguments)},serialize:function(){return t.Map.helpers.serialize(this,"serialize",{})},_attrs:function(e,n){if(e===undefined)return o.helpers.serialize(this,"attr",{});e=t.simpleExtend({},e);var r,i,a=this;t.batch.start(),this.each(function(t,r){if("_cid"!==r){if(i=e[r],i===undefined)return n&&a.removeAttr(r),undefined;a.__convert&&(i=a.__convert(r,i)),o.helpers.isObservable(i)?a.__set(r,a.__type(i,r),t):o.helpers.isObservable(t)&&o.helpers.canMakeObserve(i)?t.attr(i,n):t!==i&&a.__set(r,a.__type(i,r),t),delete e[r]}});for(r in e)"_cid"!==r&&(i=e[r],this._set(r,i,!0));return t.batch.stop(),this},compute:function(e){if(t.isFunction(this.constructor.prototype[e]))return t.compute(this[e],this);var n=e.split("."),r=n.length-1,i={args:[]};return t.compute(function(e){return arguments.length?(t.compute.read(this,n.slice(0,r)).value.attr(n[r],e),undefined):t.compute.read(this,n,i).value},this)}});return o.prototype.on=o.prototype.bind,o.prototype.off=o.prototype.unbind,o}(__m2,__m16,__m17,__m12,__m18),__m19=function(t,e,n){var r=[].splice,i=function(){var t={0:"a",length:1};return r.call(t,0,1),!t[0]}(),a=e.extend({Map:e},{setup:function(e,n){this.length=0,t.cid(this,".map"),this._init=1,this._setupComputes(),e=e||[];var r;t.isDeferred(e)?this.replace(e):(r=e.length&&t.Map.helpers.addToMap(e,this),this.push.apply(this,t.makeArray(e||[]))),r&&r(),this.bind("change",t.proxy(this._changes,this)),t.simpleExtend(this,n),delete this._init},_triggerChange:function(n,r,i,a){e.prototype._triggerChange.apply(this,arguments);var s=+n;~n.indexOf(".")||isNaN(s)||("add"===r?(t.batch.trigger(this,r,[i,s]),t.batch.trigger(this,"length",[this.length])):"remove"===r?(t.batch.trigger(this,r,[a,s]),t.batch.trigger(this,"length",[this.length])):t.batch.trigger(this,r,[i,s]))},__get:function(e){return e?this[e]&&this[e].isComputed&&t.isFunction(this.constructor.prototype[e])?this[e]():this[e]:this},___set:function(t,e){this[t]=e,+t>=this.length&&(this.length=+t+1)},_remove:function(t,e){isNaN(+t)?(delete this[t],this._triggerChange(t,"remove",undefined,e)):this.splice(t,1)},_each:function(t){for(var e=this.__get(),n=0;e.length>n;n++)t(e[n],n)},serialize:function(){return e.helpers.serialize(this,"serialize",[])},splice:function(e,a){var s,o,u=t.makeArray(arguments),c=[];for(s=2;u.length>s;s++)u[s]=n.set(this,s,this.__type(u[s],s)),c.push(u[s]);a===undefined&&(a=u[1]=this.length-e);var l=r.apply(this,u),f=l;if(c.length&&l.length)for(o=0;l.length>o;o++)t.inArray(l[o],c)>=0&&f.splice(o,1);if(!i)for(s=this.length;l.length+this.length>s;s++)delete this[s];return t.batch.start(),a>0&&(this._triggerChange(""+e,"remove",undefined,l),n.removeMany(this,l)),u.length>2&&this._triggerChange(""+e,"add",u.slice(2),l),t.batch.stop(),l},_attrs:function(n,r){return n===undefined?e.helpers.serialize(this,"attr",[]):(n=t.makeArray(n),t.batch.start(),this._updateAttrs(n,r),t.batch.stop(),undefined)},_updateAttrs:function(t,n){for(var r=Math.min(t.length,this.length),i=0;r>i;i++){var a=this[i],s=t[i];e.helpers.isObservable(a)&&e.helpers.canMakeObserve(s)?a.attr(s,n):a!==s&&this._set(i,s)}t.length>this.length?this.push.apply(this,t.slice(this.length)):t.length<this.length&&n&&this.splice(t.length)}}),s=function(e){return e[0]&&t.isArray(e[0])?e[0]:t.makeArray(e)};return t.each({push:"length",unshift:0},function(t,e){var r=[][e];a.prototype[e]=function(){for(var e,i,a=[],s=t?this.length:0,o=arguments.length;o--;)i=arguments[o],a[o]=n.set(this,o,this.__type(i,o));return e=r.apply(this,a),(!this.comparator||a.length)&&this._triggerChange(""+s,"add",a,undefined),e}}),t.each({pop:"length",shift:0},function(t,e){a.prototype[e]=function(){var r=s(arguments),i=t&&this.length?this.length-1:0,a=[][e].apply(this,r);return this._triggerChange(""+i,"remove",undefined,[a]),a&&a.unbind&&n.remove(this,a),a}}),t.extend(a.prototype,{indexOf:function(e,n){return this.attr("length"),t.inArray(e,this,n)},join:function(){return[].join.apply(this.attr(),arguments)},reverse:function(){var e=t.makeArray([].reverse.call(this));this.replace(e)},slice:function(){var t=Array.prototype.slice.apply(this,arguments);return new this.constructor(t)},concat:function(){var e=[];return t.each(t.makeArray(arguments),function(n,r){e[r]=n instanceof t.List?n.serialize():n}),new this.constructor(Array.prototype.concat.apply(this.serialize(),e))},forEach:function(e,n){return t.each(this,e,n||this)},replace:function(e){return t.isDeferred(e)?e.then(t.proxy(this.replace,this)):this.splice.apply(this,[0,this.length].concat(t.makeArray(e||[]))),this},filter:function(e,n){var r,i=new t.List,a=this;
return this.each(function(t,s){r=e.call(n|a,t,s,a),r&&i.push(t)}),i}}),t.List=e.List=a,t.List}(__m2,__m15,__m17),__m20=function(t){var e=[];t.__read=function(t,n){e.push({});var r=t.call(n);return{value:r,observed:e.pop()}},t.__reading=function(t,n){e.length&&(e[e.length-1][t._cid+"|"+n]={obj:t,event:n+""})},t.__clearReading=function(){if(e.length){var t=e[e.length-1];return e[e.length-1]={},t}},t.__setReading=function(t){e.length&&(e[e.length-1]=t)},t.__addReading=function(n){e.length&&t.simpleExtend(e[e.length-1],n)};var n=function(e,n,i,s){var o=t.__read(e,n),u=o.observed;return r(i,u,s),a(i,s),o},r=function(t,e,n){for(var r in e)i(t,e,r,n)},i=function(t,e,n,r){if(t[n])delete t[n];else{var i=e[n];i.obj.bind(i.event,r)}},a=function(t,e){for(var n in t){var r=t[n];r.obj.unbind(r.event,e)}},s=function(e,n,r,i){n!==r&&t.batch.trigger(e,i?{type:"change",batchNum:i}:"change",[n,r])},o=function(e,r,i,a){var s,o,u;return{on:function(c){o||(o=function(t){if(e.bound&&(t.batchNum===undefined||t.batchNum!==u)){var a=s.value;s=n(r,i,s.observed,o),c(s.value,a,t.batchNum),u=u=t.batchNum}}),s=n(r,i,{},o),a(s.value),e.hasDependencies=!t.isEmptyObject(s.observed)},off:function(){for(var t in s.observed){var e=s.observed[t];e.obj.unbind(e.event,o)}}}},u=function(e,r,i,a){var s,o,u,c;return{on:function(l){u||(u=function(t){if(e.bound&&(t.batchNum===undefined||t.batchNum!==c)){var n=r.call(i);l(n,o,t.batchNum),o=n,c=c=t.batchNum}}),s=n(r,i,{},u),o=s.value,a(s.value),e.hasDependencies=!t.isEmptyObject(s.observed)},off:function(){for(var t in s.observed){var e=s.observed[t];e.obj.unbind(e.event,u)}}}},c=function(e){return e instanceof t.Map||e&&e.__get},l=function(){};t.compute=function(n,r,i,a){if(n&&n.isComputed)return n;for(var c,f,d,h=l,p=l,g=function(){return f},m=function(t){f=t},v=m,_=[],b=function(t,e,n){v(t),s(c,t,e,n)},y=0,x=arguments.length;x>y;y++)_[y]=arguments[y];if(c=function(n){if(arguments.length){var i=f,a=m.call(r,n,i);return c.hasDependencies?g.call(r):(f=a===undefined?g.call(r):a,s(c,f,i),f)}return e.length&&c.canReadForChangeEvent!==!1&&(t.__reading(c,"change"),c.bound||t.compute.temporarilyBind(c)),c.bound?f:g.call(r)},"function"==typeof n){m=n,g=n,c.canReadForChangeEvent=i===!1?!1:!0;var w=a?u(c,n,r||this,v):o(c,n,r||this,v);h=w.on,p=w.off}else if(r)if("string"==typeof r){var k=r,M=n instanceof t.Map;if(M){c.hasDependencies=!0;var C;g=function(){return n.attr(k)},m=function(t){n.attr(k,t)},h=function(e){C=function(t,n,r){e(n,r,t.batchNum)},n.bind(i||k,C),f=t.__read(g).value},p=function(){n.unbind(i||k,C)}}else g=function(){return n[k]},m=function(t){n[k]=t},h=function(e){C=function(){e(g(),f)},t.bind.call(n,i||k,C),f=t.__read(g).value},p=function(){t.unbind.call(n,i||k,C)}}else if("function"==typeof r)f=n,m=r,r=i,d="setter";else{f=n;var A=r,N=b;if(r=A.context||A,g=A.get||g,m=A.set||function(){return f},A.fn){var O,T=A.fn;g=function(){return T.call(r,f)},0===T.length?O=o(c,T,r,v):1===T.length?O=o(c,function(){return T.call(r,f)},r,v):(b=function(t){t!==undefined&&N(t,f)},O=o(c,function(){var t=T.call(r,f,function(t){N(t,f)});return t!==undefined?t:f},r,v)),h=O.on,p=O.off}else b=function(){var t=g.call(r);N(t,f)};h=A.on||h,p=A.off||p}else f=n;return t.cid(c,"compute"),t.simpleExtend(c,{isComputed:!0,_bindsetup:function(){this.bound=!0;var e=t.__clearReading();h.call(this,b),t.__setReading(e)},_bindteardown:function(){p.call(this,b),this.bound=!1},bind:t.bindAndSetup,unbind:t.unbindAndTeardown,clone:function(e){return e&&("setter"===d?_[2]=e:_[1]=e),t.compute.apply(t,_)}})};var f,d=function(){for(var t=0,e=f.length;e>t;t++)f[t].unbind("change",l);f=null};return t.compute.temporarilyBind=function(t){t.bind("change",l),f||(f=[],setTimeout(d,10)),f.push(t)},t.compute.truthy=function(e){return t.compute(function(){var t=e();return"function"==typeof t&&(t=t()),!!t})},t.compute.async=function(e,n,r){return t.compute(e,{fn:n,context:r})},t.compute.read=function(e,n,r){r=r||{};for(var i,a,s,o=e,u=0,l=n.length;l>u;u++)if(a=o,a&&a.isComputed&&(r.foundObservable&&r.foundObservable(a,u),a=a()),c(a)?(!s&&r.foundObservable&&r.foundObservable(a,u),s=1,o="function"==typeof a[n[u]]&&a.constructor.prototype[n[u]]===a[n[u]]?r.returnObserveMethods?o[n[u]]:"constructor"===n[u]&&a instanceof t.Construct?a[n[u]]:a[n[u]].apply(a,r.args||[]):o.attr(n[u])):o=a[n[u]],i=typeof o,o&&o.isComputed&&!r.isArgument&&l-1>u?(!s&&r.foundObservable&&r.foundObservable(a,u+1),o=o()):n.length-1>u&&"function"===i&&r.executeAnonymousFunctions&&!(t.Construct&&o.prototype instanceof t.Construct)&&(o=o()),n.length-1>u&&(null===o||"function"!==i&&"object"!==i))return r.earlyExit&&r.earlyExit(a,u,o),{value:undefined,parent:a};return"function"!=typeof o||t.Construct&&o.prototype instanceof t.Construct||(r.isArgument?o.isComputed||r.proxyMethods===!1||(o=t.proxy(o,a)):(o.isComputed&&!s&&r.foundObservable&&r.foundObservable(o,u),o=o.call(a))),o===undefined&&r.earlyExit&&r.earlyExit(a,u-1),{value:o,parent:a}},t.compute}(__m2,__m16,__m18),__m14=function(t){return t.Observe=t.Map,t.Observe.startBatch=t.batch.start,t.Observe.stopBatch=t.batch.stop,t.Observe.triggerBatch=t.batch.trigger,t}(__m2,__m15,__m19,__m20),__m22=function(t){var e=/(\\)?\./g,n=/\\\./g,r=function(t){var r=[],i=0;return t.replace(e,function(e,a,s){a||(r.push(t.slice(i,s).replace(n,".")),i=s+e.length)}),r.push(t.slice(i).replace(n,".")),r},i=t.Construct.extend({read:t.compute.read},{init:function(t,e){this._context=t,this._parent=e,this.__cache={}},attr:function(e){var n=t.__clearReading(),r=this.read(e,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1}).value;return t.__setReading(n),r},add:function(t){return t!==this._context?new this.constructor(t,this):this},computeData:function(e,n){n=n||{args:[]};var r,i,a=this,s={compute:t.compute(function(o){if(!arguments.length){if(r)return t.compute.read(r,i,n).value;var u=a.read(e,n);return r=u.rootObserve,i=u.reads,s.scope=u.scope,s.initialValue=u.value,s.reads=u.reads,s.root=r,u.value}if(r.isComputed&&!i.length)r(o);else{var c=i.length-1;t.compute.read(r,i.slice(0,c)).value.attr(i[c],o)}})};return s},compute:function(t,e){return this.computeData(t,e).compute},read:function(e,n){var i;if("./"===e.substr(0,2))i=!0,e=e.substr(2);else{if("../"===e.substr(0,3))return this._parent.read(e.substr(3),n);if(".."===e)return{value:this._parent._context};if("."===e||"this"===e)return{value:this._context}}for(var a,s,o,u,c,l,f=-1===e.indexOf("\\.")?e.split("."):r(e),d=this,h=[],p=-1;d;){if(a=d._context,null!==a){var g=t.compute.read(a,f,t.simpleExtend({foundObservable:function(t,e){c=t,l=f.slice(e)},earlyExit:function(e,n){n>p&&(s=c,h=l,p=n,u=d,o=t.__clearReading())},executeAnonymousFunctions:!0},n));if(g.value!==undefined)return{scope:d,rootObserve:c,value:g.value,reads:l}}t.__clearReading(),d=i?null:d._parent}return s?(t.__setReading(o),{scope:u,rootObserve:s,reads:h,value:undefined}):{names:f,value:undefined}}});return t.view.Scope=i,i}(__m2,__m12,__m15,__m19,__m10,__m20),__m24=function(t){var e=function(){return 1===t.$(document.createComment("~")).length}(),n={tagToContentPropMap:{option:"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:t.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:t.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},getParentNode:function(t,e){return e&&11===t.parentNode.nodeType?e:t.parentNode},setAttr:t.attr.set,getAttr:t.attr.get,removeAttr:t.attr.remove,contentText:function(t){return"string"==typeof t?t:t||0===t?""+t:""},after:function(e,n){var r=e[e.length-1];r.nextSibling?t.insertBefore(r.parentNode,n,r.nextSibling):t.appendChild(r.parentNode,n)},replace:function(r,i){n.after(r,i),t.remove(t.$(r)).length<r.length&&!e&&t.each(r,function(t){8===t.nodeType&&t.parentNode.removeChild(t)})}};return t.view.elements=n,n}(__m2,__m10),__m23=function(can,elements,viewCallbacks){var newLine=/(\r|\n)+/g,notEndTag=/\//,clean=function(t){return t.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("	").join("\\t")},getTag=function(t,e,n){if(t)return t;for(;e.length>n;){if("<"===e[n]&&!notEndTag.test(e[n+1]))return elements.reverseTagMap[e[n+1]]||"span";n++}return""},bracketNum=function(t){return--t.split("{").length- --t.split("}").length},myEval=function(script){eval(script)},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd="___v1ew.push(\n",insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var t=beforeQuote.match(attrReg);return t&&t[1]},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0},top=function(t){return t[t.length-1]},Scanner;return can.view.Scanner=Scanner=function(t){can.extend(this,{text:{},tokens:[]},t),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={};for(var e,n=0;e=this.tokens[n];n++)e[2]?(this.tokenReg.push(e[2]),this.tokenComplex.push({abbr:e[1],re:RegExp(e[2]),rescan:e[3]})):(this.tokenReg.push(e[1]),this.tokenSimple[e[1]]=e[0]),this.tokenMap[e[0]]=e[1];this.tokenReg=RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")},Scanner.prototype={helpers:[],scan:function(t,e){var n=[],r=0,i=this.tokenSimple,a=this.tokenComplex;t=t.replace(newLine,"\n"),this.transform&&(t=this.transform(t)),t.replace(this.tokenReg,function(e,s){var o=arguments[arguments.length-2];if(o>r&&n.push(t.substring(r,o)),i[e])n.push(e);else for(var u,c=0;u=a[c];c++)if(u.re.test(e)){n.push(u.abbr),u.rescan&&n.push(u.rescan(s));break}r=o+s.length}),t.length>r&&n.push(t.substr(r));var s,o,u,c,l="",f=[startTxt+(this.text.start||"")],d=function(t,e){f.push(put_cmd,'"',clean(t),'"'+(e||"")+");")},h=[],p=null,g=!1,m={attributeHookups:[],tagHookups:[],lastTagHookup:""},v=function(){m.lastTagHookup=m.tagHookups.pop()+m.tagHookups.length},_="",b=[],y=!1,x=!1,w=0,k=this.tokenMap;for(htmlTag=quote=beforeQuote=null;(u=n[w++])!==undefined;){if(null===p)switch(u){case k.left:case k.escapeLeft:case k.returnLeft:g=htmlTag&&1;case k.commentLeft:p=u,l.length&&d(l),l="";break;case k.escapeFull:g=htmlTag&&1,rescan=1,p=k.escapeLeft,l.length&&d(l),rescan=n[w++],l=rescan.content||rescan,rescan.before&&d(rescan.before),n.splice(w,0,k.right);break;case k.commentFull:break;case k.templateLeft:l+=k.left;break;case"<":0!==n[w].indexOf("!--")&&(htmlTag=1,g=0),l+=u;break;case">":htmlTag=0;var M="/"===l.substr(l.length-1)||"--"===l.substr(l.length-2),C="";if(m.attributeHookups.length&&(C="attrs: ['"+m.attributeHookups.join("','")+"'], ",m.attributeHookups=[]),_+m.tagHookups.length!==m.lastTagHookup&&_===top(m.tagHookups))M&&(l=l.substr(0,l.length-1)),f.push(put_cmd,'"',clean(l),'"',",can.view.pending({tagName:'"+_+"',"+C+"scope: "+(this.text.scope||"this")+this.text.options),M?(f.push("}));"),l="/>",v()):"<"===n[w]&&n[w+1]==="/"+_?(f.push("}));"),l=u,v()):(f.push(",subtemplate: function("+this.text.argNames+"){\n"+startTxt+(this.text.start||"")),l="");else if(g||!y&&elements.tagToContentPropMap[b[b.length-1]]||C){var A=",can.view.pending({"+C+"scope: "+(this.text.scope||"this")+this.text.options+'}),"';M?d(l.substr(0,l.length-1),A+'/>"'):d(l,A+'>"'),l="",g=0}else l+=u;(M||y)&&(b.pop(),_=b[b.length-1],y=!1),m.attributeHookups=[];break;case"'":case'"':if(htmlTag)if(quote&&quote===u){quote=null;var N=getAttrName();if(viewCallbacks.attr(N)&&m.attributeHookups.push(N),x){l+=u,d(l),f.push(finishTxt,"}));\n"),l="",x=!1;break}}else if(null===quote&&(quote=u,beforeQuote=s,c=getAttrName(),"img"===_&&"src"===c||"style"===c)){d(l.replace(attrReg,"")),l="",x=!0,f.push(insert_cmd,"can.view.txt(2,'"+getTag(_,n,w)+"',"+status()+",this,function(){",startTxt),d(c+"="+u);break}default:if("<"===s){_="!--"===u.substr(0,3)?"!--":u.split(/\s/)[0];var O,T=!1;0===_.indexOf("/")&&(T=!0,O=_.substr(1)),T?(top(b)===O&&(_=O,y=!0),top(m.tagHookups)===O&&(d(l.substr(0,l.length-1)),f.push(finishTxt+"}}) );"),l="><",v())):(_.lastIndexOf("/")===_.length-1&&(_=_.substr(0,_.length-1)),"!--"!==_&&viewCallbacks.tag(_)&&("content"===_&&elements.tagMap[top(b)]&&(u=u.replace("content",elements.tagMap[top(b)])),m.tagHookups.push(_)),b.push(_))}l+=u}else switch(u){case k.right:case k.returnRight:switch(p){case k.left:o=bracketNum(l),1===o?(f.push(insert_cmd,"can.view.txt(0,'"+getTag(_,n,w)+"',"+status()+",this,function(){",startTxt,l),h.push({before:"",after:finishTxt+"}));\n"})):(r=h.length&&-1===o?h.pop():{after:";"},r.before&&f.push(r.before),f.push(l,";",r.after));break;case k.escapeLeft:case k.returnLeft:o=bracketNum(l),o&&h.push({before:finishTxt,after:"}));\n"});for(var L=p===k.escapeLeft?1:0,S={insert:insert_cmd,tagName:getTag(_,n,w),status:status(),specialAttribute:x},j=0;this.helpers.length>j;j++){var E=this.helpers[j];if(E.name.test(l)){l=E.fn(l,S),E.name.source===/^>[\s]*\w*/.source&&(L=0);break}}"object"==typeof l?l.startTxt&&l.end&&x?f.push(insert_cmd,"can.view.toStr( ",l.content,"() ) );"):(l.startTxt?f.push(insert_cmd,"can.view.txt(\n"+("string"==typeof status()||(null!=l.escaped?l.escaped:L))+",\n'"+_+"',\n"+status()+",\nthis,\n"):l.startOnlyTxt&&f.push(insert_cmd,"can.view.onlytxt(this,\n"),f.push(l.content),l.end&&f.push("));")):x?f.push(insert_cmd,l,");"):f.push(insert_cmd,"can.view.txt(\n"+("string"==typeof status()||L)+",\n'"+_+"',\n"+status()+",\nthis,\nfunction(){ "+(this.text.escape||"")+"return ",l,o?startTxt:"}));\n"),rescan&&rescan.after&&rescan.after.length&&(d(rescan.after.length),rescan=null)}p=null,l="";break;case k.templateLeft:l+=k.left;break;default:l+=u}s=u}l.length&&d(l),f.push(";");var R=f.join(""),D={out:(this.text.outStart||"")+R+" "+finishTxt+(this.text.outEnd||"")};return myEval.call(D,"this.fn = (function("+this.text.argNames+"){"+D.out+"});\r\n//# sourceURL="+e+".js"),D}},can.view.pending=function(t){var e=can.view.getHooks();return can.view.hook(function(n){can.each(e,function(t){t(n)}),t.templateType="legacy",t.tagName&&viewCallbacks.tagHandler(n,t.tagName,t),can.each(t&&t.attrs||[],function(e){t.attributeName=e;var r=viewCallbacks.attr(e);r&&r(n,t)})})},can.view.tag("content",function(t,e){return e.scope}),can.view.Scanner=Scanner,Scanner}(__m10,__m24,__m9),__m27=function(t){var e=!0;try{document.createTextNode("")._=0}catch(n){e=!1}var r={},i={},a="ejs_"+Math.random(),s=0,o=function(t,n){var r=n||i,o=u(t,r);return o?o:e||3!==t.nodeType?(++s,t[a]=(t.nodeName?"element_":"obj_")+s):(++s,r["text_"+s]=t,"text_"+s)},u=function(t,n){if(e||3!==t.nodeType)return t[a];for(var r in n)if(n[r]===t)return r},c=[].splice,l=[].push,f=function(t){for(var e=0,n=0,r=t.length;r>n;n++){var i=t[n];i.nodeType?e++:e+=f(i)}return e},d=function(t,e){for(var n={},r=0,i=t.length;i>r;r++){var a=h.first(t[r]);n[o(a,e)]=t[r]}return n},h={id:o,update:function(e,n){var r=h.unregisterChildren(e);n=t.makeArray(n);var i=e.length;return c.apply(e,[0,i].concat(n)),e.replacements?h.nestReplacements(e):h.nestList(e),r},nestReplacements:function(t){for(var e=0,n={},r=d(t.replacements,n),i=t.replacements.length;t.length>e&&i;){var a=t[e],s=r[u(a,n)];s&&(t.splice(e,f(s),s),i--),e++}t.replacements=[]},nestList:function(t){for(var e=0;t.length>e;){var n=t[e],i=r[o(n)];i?i!==t&&t.splice(e,f(i),i):r[o(n)]=t,e++}},last:function(t){var e=t[t.length-1];return e.nodeType?e:h.last(e)},first:function(t){var e=t[0];return e.nodeType?e:h.first(e)},register:function(t,e,n){return t.unregistered=e,t.parentList=n,n===!0?t.replacements=[]:n?(n.replacements.push(t),t.replacements=[]):h.nestList(t),t},unregisterChildren:function(e){var n=[];return t.each(e,function(t){t.nodeType?(e.replacements||delete r[o(t)],n.push(t)):l.apply(n,h.unregister(t))}),n},unregister:function(t){var e=h.unregisterChildren(t);if(t.unregistered){var n=t.unregistered;delete t.unregistered,delete t.replacements,n()}return e},nodeMap:r};return t.view.nodeLists=h,h}(__m2,__m24),__m28=function(t){function e(t){for(var e={},n=t.split(","),r=0;n.length>r;r++)e[n[r]]=!0;return e}var n="-A-Za-z0-9_",r="[a-zA-Z_:]["+n+":.]+",i="\\s*=\\s*",a='"((?:\\\\.|[^"])*)"',s="'((?:\\\\.|[^'])*)'",o="(?:"+i+"(?:"+"(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",u="\\{\\{[^\\}]*\\}\\}\\}?",c="\\{\\{([^\\}]*)\\}\\}\\}?",l=RegExp("^<(["+n+"]+)"+"("+"(?:\\s*"+"(?:(?:"+"(?:"+r+")?"+o+")|"+"(?:"+u+")+)"+")*"+")\\s*(\\/?)>"),f=RegExp("^<\\/(["+n+"]+)[^>]*>"),d=RegExp("(?:(?:("+r+")|"+c+")"+"(?:"+i+"(?:"+"(?:"+a+")|(?:"+s+")|([^>\\s]+)"+")"+")?)","g"),h=RegExp(c,"g"),p=/<|\{\{/,g=e("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),m=e("address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),v=e("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),_=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),b=e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),y=e("script,style"),x=function(t,e){function n(t,n,i,a){if(n=n.toLowerCase(),m[n])for(;u.last()&&v[u.last()];)r("",u.last());_[n]&&u.last()===n&&r("",n),a=g[n]||!!a,e.start(n,a),a||u.push(n),x.parseAttrs(i,e),e.end(n,a)}function r(t,n){var r;if(n)for(r=u.length-1;r>=0&&u[r]!==n;r--);else r=0;if(r>=0){for(var i=u.length-1;i>=r;i--)e.close&&e.close(u[i]);u.length=r}}function i(t,n){e.special&&e.special(n)}var a,s,o,u=[],c=t;for(u.last=function(){return this[this.length-1]};t;){if(s=!0,u.last()&&y[u.last()])t=t.replace(RegExp("([\\s\\S]*?)</"+u.last()+"[^>]*>"),function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""}),r("",u.last());else if(0===t.indexOf("<!--")?(a=t.indexOf("-->"),a>=0&&(e.comment&&e.comment(t.substring(4,a)),t=t.substring(a+3),s=!1)):0===t.indexOf("</")?(o=t.match(f),o&&(t=t.substring(o[0].length),o[0].replace(f,r),s=!1)):0===t.indexOf("<")?(o=t.match(l),o&&(t=t.substring(o[0].length),o[0].replace(l,n),s=!1)):0===t.indexOf("{{")&&(o=t.match(h),o&&(t=t.substring(o[0].length),o[0].replace(h,i))),s){a=t.search(p);var d=0>a?t:t.substring(0,a);t=0>a?"":t.substring(a),e.chars&&d&&e.chars(d)}if(t===c)throw"Parse Error: "+t;c=t}r(),e.done()};return x.parseAttrs=function(t,e){(null!=t?t:"").replace(d,function(t,n,r,i,a,s){if(r&&e.special(r),n||i||a||s){var o=arguments[3]?arguments[3]:arguments[4]?arguments[4]:arguments[5]?arguments[5]:b[n.toLowerCase()]?n:"";e.attrStart(n||"");for(var u,c=h.lastIndex=0,l=h.exec(o);l;)u=o.substring(c,h.lastIndex-l[0].length),u.length&&e.attrValue(u),e.special(l[1]),c=h.lastIndex,l=h.exec(o);u=o.substr(c,o.length),u&&e.attrValue(u),e.attrEnd(n||"")}})},t.view.parser=x,x}(__m10),__m26=function(t,e,n,r,i){e=e||t.view.elements,r=r||t.view.NodeLists,i=i||t.view.parser;var a=function(e,n,r){var i=!1,a=function(){return i||(i=!0,r(s),t.unbind.call(e,"removed",a)),!0},s={teardownCheck:function(t){return t?!1:a()}};return t.bind.call(e,"removed",a),n(s),s},s=function(t,e,n){return a(t,function(){e.bind("change",n)},function(t){e.unbind("change",n),t.nodeList&&r.unregister(t.nodeList)})},o=function(t){var e,n={};return i.parseAttrs(t,{attrStart:function(t){n[t]="",e=t},attrValue:function(t){n[e]+=t},attrEnd:function(){}}),n},u=[].splice,c=function(t){return t&&t.nodeType},l=function(t){t.childNodes.length||t.appendChild(document.createTextNode(""))},f={list:function(n,i,s,o,c,l){var d,h=l||[n],p=[],g=function(n,i,a){var c=document.createDocumentFragment(),f=[],d=[];t.each(i,function(e,n){var i=[];l&&r.register(i,null,!0);var u=t.compute(n+a),h=s.call(o,e,u,i),p="string"==typeof h,g=t.frag(h);g=p?t.view.hookup(g):g;var m=t.makeArray(g.childNodes);l?(r.update(i,m),f.push(i)):f.push(r.register(m)),c.appendChild(g),d.push(u)});var g=a+1;if(h[g]){var m=r.first(h[g]);t.insertBefore(m.parentNode,c,m)}else e.after(1===g?[v]:[r.last(h[g-1])],c);u.apply(h,[g,0].concat(f)),u.apply(p,[a,0].concat(d));for(var _=a+d.length,b=p.length;b>_;_++)p[_](_)},m=function(e,n,i,a,s){if(a||!y.teardownCheck(v.parentNode)){var o=h.splice(i+1,n.length),u=[];t.each(o,function(t){var e=r.unregister(t);[].push.apply(u,e)}),p.splice(i,n.length);for(var c=i,l=p.length;l>c;c++)p[c](c);s||t.remove(t.$(u))}},v=document.createTextNode(""),_=function(t){d&&d.unbind&&d.unbind("add",g).unbind("remove",m),m({},{length:h.length-1},0,!0,t)},b=function(t,e){_(),d=e||[],d.bind&&d.bind("add",g).bind("remove",m),g({},d,0)};c=e.getParentNode(n,c);var y=a(c,function(){t.isFunction(i)&&i.bind("change",b)},function(){t.isFunction(i)&&i.unbind("change",b),_(!0)});l?(e.replace(h,v),r.update(h,[v]),l.unregistered=y.teardownCheck):f.replace(h,v,y.teardownCheck),b({},t.isFunction(i)?i():i)},html:function(n,i,a,o){var u;a=e.getParentNode(n,a),u=s(a,i,function(t,e){var n=r.first(f).parentNode;n&&d(e),u.teardownCheck(r.first(f).parentNode)});var f=o||[n],d=function(n){var i=!c(n),s=t.frag(n),o=t.makeArray(f);l(s),i&&(s=t.view.hookup(s,a)),o=r.update(f,s.childNodes),e.replace(o,s)};u.nodeList=f,o?o.unregistered=u.teardownCheck:r.register(f,u.teardownCheck),d(i())},replace:function(n,i,a){var s=n.slice(0),o=t.frag(i);return r.register(n,a),"string"==typeof i&&(o=t.view.hookup(o,n[0].parentNode)),r.update(n,o.childNodes),e.replace(s,o),n},text:function(n,i,a,o){var u=e.getParentNode(n,a),c=s(u,i,function(e,n){"unknown"!=typeof l.nodeValue&&(l.nodeValue=t.view.toStr(n)),c.teardownCheck(l.parentNode)}),l=document.createTextNode(t.view.toStr(i()));o?(o.unregistered=c.teardownCheck,c.nodeList=o,r.update(o,[l]),e.replace([n],l)):c.nodeList=f.replace([n],l,c.teardownCheck)},setAttributes:function(e,n){var r=o(n);for(var i in r)t.attr.set(e,i,r[i])},attributes:function(n,r,i){var a={},u=function(r){var i,s=o(r);for(i in s){var u=s[i],c=a[i];u!==c&&t.attr.set(n,i,u),delete a[i]}for(i in a)e.removeAttr(n,i);a=s};s(n,r,function(t,e){u(e)}),arguments.length>=3?a=o(i):u(r())},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(n,r,i){s(n,i,function(){e.setAttr(n,r,u.render())});var a,o=t.$(n);a=t.data(o,"hooks"),a||t.data(o,"hooks",a={});var u,c=e.getAttr(n,r),l=c.split(f.attributePlaceholder),d=[];d.push(l.shift(),l.join(f.attributePlaceholder)),a[r]?a[r].computes.push(i):a[r]={render:function(){var t=0,n=c?c.replace(f.attributeReplace,function(){return e.contentText(u.computes[t++]())}):e.contentText(u.computes[t++]());return n},computes:[i],batchNum:undefined},u=a[r],d.splice(1,0,i()),e.setAttr(n,r,d.join(""))},specialAttribute:function(t,n,r){s(t,r,function(r,i){e.setAttr(t,n,h(i))}),e.setAttr(t,n,h(r()))},simpleAttribute:function(t,n,r){s(t,r,function(r,i){e.setAttr(t,n,i)}),e.setAttr(t,n,r())}};f.attr=f.simpleAttribute,f.attrs=f.attributes;var d=/(\r|\n)+/g,h=function(t){var n=/^["'].*["']$/;return t=t.replace(e.attrReg,"").replace(d,""),n.test(t)?t.substr(1,t.length-2):t};return t.view.live=f,f}(__m2,__m24,__m10,__m27,__m28),__m25=function(t,e,n){var r,i=[],a=function(t){var n=e.tagMap[t]||"span";return"span"===n?"@@!!@@":"<"+n+">"+a(n)+"</"+n+">"},s=function(e,n){if("string"==typeof e)return e;if(!e&&0!==e)return"";var r=e.hookup&&function(t,n){e.hookup.call(e,t,n)}||"function"==typeof e&&e;return r?n?"<"+n+" "+t.view.hook(r)+"></"+n+">":(i.push(r),""):""+e},o=function(e,n){return"string"==typeof e||"number"==typeof e?t.esc(e):s(e,n)},u=!1,c=function(){};return t.extend(t.view,{live:n,setupLists:function(){var e,n=t.view.lists;return t.view.lists=function(t,n){return e={list:t,renderer:n},Math.random()},function(){return t.view.lists=n,e}},getHooks:function(){var t=i.slice(0);return r=t,i=[],t},onlytxt:function(t,e){return o(e.call(t))},txt:function(l,f,d,h,p){var g,m,v,_,b=e.tagMap[f]||"span",y=!1,x=c;if(u)g=p.call(h);else{("string"==typeof d||1===d)&&(u=!0);var w=t.view.setupLists();x=function(){v.unbind("change",c)},v=t.compute(p,h,!1),v.bind("change",c),m=w(),g=v(),u=!1,y=v.hasDependencies}if(m)return x(),"<"+b+t.view.hook(function(t,e){n.list(t,m.list,m.renderer,h,e)})+"></"+b+">";if(!y||"function"==typeof g)return x(),(u||2===l||!l?s:o)(g,0===d&&b);var k=e.tagToContentPropMap[f];return 0!==d||k?1===d?(i.push(function(t){n.attributes(t,v,v()),x()}),v()):2===l?(_=d,i.push(function(t){n.specialAttribute(t,_,v),x()}),v()):(_=0===d?k:d,(0===d?r:i).push(function(t){n.attribute(t,_,v),x()}),n.attributePlaceholder):"<"+b+t.view.hook(l&&"object"!=typeof g?function(t,e){n.text(t,v,e),x()}:function(t,e){n.html(t,v,e),x()})+">"+a(b)+"</"+b+">"}}),t}(__m10,__m24,__m26,__m13),__m21=function(t){t.view.ext=".mustache";var e="scope",n="___h4sh",r="{scope:"+e+",options:options}",i="{scope:"+e+",options:options, special: true}",a=e+",options",s=/((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g,o=/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,u=function(t){return'{get:"'+t.replace(/"/g,'\\"')+'"}'},c=function(t){return t&&"string"==typeof t.get},l=function(e){return e instanceof t.Map||e&&!!e._get},f=function(t){return t&&t.splice&&"number"==typeof t.length},d=function(e,n,r){var i=function(t,r){return e(t||n,r)};return function(e,a){return e===undefined||e instanceof t.view.Scope||(e=n.add(e)),a===undefined||a instanceof t.view.Options||(a=r.add(a)),i(e,a||r)}},h=function(e){if(this.constructor!==h){var n=new h(e);return function(t,e){return n.render(t,e)}}return"function"==typeof e?(this.template={fn:e},undefined):(t.extend(this,e),this.template=this.scanner.scan(this.text,this.name),undefined)};t.Mustache=window.Mustache=h,h.prototype.render=function(e,n){return e instanceof t.view.Scope||(e=new t.view.Scope(e||{})),n instanceof t.view.Options||(n=new t.view.Options(n||{})),n=n||{},this.template.fn.call(e,e,n)},t.extend(h.prototype,{scanner:new t.view.Scanner({text:{start:"",scope:e,options:",options: options",argNames:a},tokens:[["returnLeft","{{{","{{[{&]"],["commentFull","{{!}}","^[\\s\\t]*{{!.+?}}\\n"],["commentLeft","{{!","(\\n[\\s\\t]*{{!|{{!)"],["escapeFull","{{}}","(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",function(t){return{before:/^\n.+?\n$/.test(t)?"\n":"",content:t.match(/\{\{(.+?)\}\}/)[1]||""}}],["escapeLeft","{{"],["returnRight","}}}"],["right","}}"]],helpers:[{name:/^>[\s]*\w*/,fn:function(e){var n=t.trim(e.replace(/^>\s?/,"")).replace(/["|']/g,"");return"can.Mustache.renderPartial('"+n+"',"+a+")"}},{name:/^\s*data\s/,fn:function(t){var n=t.match(/["|'](.*)["|']/)[1];return"can.proxy(function(__){can.data(can.$(__),'"+n+"', this.attr('.')); }, "+e+")"}},{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(t){var n=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,r=t.match(n);return"can.proxy(function(__){var "+r[1]+"=can.$(__);with("+e+".attr('.')){"+r[2]+"}}, this);"}},{name:/^.*$/,fn:function(e,c){var l=!1,f={content:"",startTxt:!1,startOnlyTxt:!1,end:!1};if(e=t.trim(e),e.length&&(l=e.match(/^([#^/]|else$)/))){switch(l=l[0]){case"#":case"^":c.specialAttribute?f.startOnlyTxt=!0:(f.startTxt=!0,f.escaped=0);break;case"/":return f.end=!0,f.content+='return ___v1ew.join("");}}])',f}e=e.substring(1)}if("else"!==l){var d,h=[],p=[],g=0;f.content+="can.Mustache.txt(\n"+(c.specialAttribute?i:r)+",\n"+(l?'"'+l+'"':"null")+",",(t.trim(e)+" ").replace(s,function(t,e){g&&(d=e.match(o))?d[2]?h.push(d[0]):p.push(d[4]+":"+(d[6]?d[6]:u(d[5]))):h.push(u(e)),g++}),f.content+=h.join(","),p.length&&(f.content+=",{"+n+":{"+p.join(",")+"}}")}switch(l&&"else"!==l&&(f.content+=",[\n\n"),l){case"^":case"#":f.content+="{fn:function("+a+"){var ___v1ew = [];";break;case"else":f.content+='return ___v1ew.join("");}},\n{inverse:function('+a+"){\nvar ___v1ew = [];";break;default:f.content+=")"}return l||(f.startTxt=!0,f.end=!0),f}}]})});for(var p=t.view.Scanner.prototype.helpers,g=0;p.length>g;g++)h.prototype.scanner.helpers.unshift(p[g]);return h.txt=function(e,r,i){for(var a,s,o=e.scope,u=e.options,p=[],g={fn:function(){},inverse:function(){}},m=o.attr("."),v=!0,_=3;arguments.length>_;_++){var b=arguments[_];if(r&&t.isArray(b))g=t.extend.apply(t,[g].concat(b));else if(b&&b[n]){a=b[n];for(var y in a)c(a[y])&&(a[y]=h.get(a[y].get,e,!1,!0))}else b&&c(b)?p.push(h.get(b.get,e,!1,!0)):p.push(b)}if(c(i)){var x=i.get;i=h.get(i.get,e,p.length,!1),v=x===i}if(g.fn=d(g.fn,o,u),g.inverse=d(g.inverse,o,u),"^"===r){var w=g.fn;g.fn=g.inverse,g.inverse=w}return(s=v&&"string"==typeof i&&h.getHelper(i,u)||t.isFunction(i)&&!i.isComputed&&{fn:i})?(t.extend(g,{context:m,scope:o,contexts:o,hash:a}),p.push(g),function(){return s.fn.apply(m,p)||""}):function(){var e;e=t.isFunction(i)&&i.isComputed?i():i;var n,a,s,o=p.length?p:[e],u=!0,c=[];if(r)for(n=0;o.length>n;n++)s=o[n],a=s!==undefined&&l(s),f(s)?"#"===r?u=u&&!!(a?s.attr("length"):s.length):"^"===r&&(u=u&&!(a?s.attr("length"):s.length)):u="#"===r?u&&!!s:"^"===r?u&&!s:u;if(u){if("#"===r){if(f(e)){var d=l(e);for(n=0;e.length>n;n++)c.push(g.fn(d?e.attr(""+n):e[n]));return c.join("")}return g.fn(e||{})||""}return"^"===r?g.inverse(e||{})||"":""+(null!=e?e:"")}return""}},h.get=function(e,n,r,i){var a=n.scope.attr("."),s=n.options||{};if(r){if(h.getHelper(e,s))return e;if(n.scope&&t.isFunction(a[e]))return a[e]}var o=n.scope.computeData(e,{isArgument:i,args:[a,n.scope]}),u=o.compute;t.compute.temporarilyBind(u);var c=o.initialValue;return c!==undefined&&o.scope===n.scope||!h.getHelper(e,s)?u.hasDependencies?u:c:e},h.resolve=function(e){return l(e)&&f(e)&&e.attr("length")?e:t.isFunction(e)?e():e},t.view.Options=t.view.Scope.extend({init:function(e){e.helpers||e.partials||e.tags||(e={helpers:e}),t.view.Scope.prototype.init.apply(this,arguments)}}),h._helpers={},h.registerHelper=function(t,e){this._helpers[t]={name:t,fn:e}},h.getHelper=function(t,e){var n=e.attr("helpers."+t);return n?{fn:n}:this._helpers[t]},h.render=function(e,n,r){if(!t.view.cached[e]){var i=t.__clearReading();n.attr("partial")&&(e=n.attr("partial")),t.__setReading(i)}return t.view.render(e,n,r)},h.safeString=function(t){return{toString:function(){return t}}},h.renderPartial=function(e,n,r){var i=r.attr("partials."+e);return i?i.render?i.render(n,r):i(n,r):t.Mustache.render(e,n,r)},t.each({"if":function(e,n){var r;return r=t.isFunction(e)?t.compute.truthy(e)():!!h.resolve(e),r?n.fn(n.contexts||this):n.inverse(n.contexts||this)},unless:function(e,n){return h._helpers["if"].fn.apply(this,[t.isFunction(e)?t.compute(function(){return!e()}):!e,n])},each:function(e,n){var r,i,a,s=h.resolve(e),o=[];if(t.view.lists&&(s instanceof t.List||e&&e.isComputed&&s===undefined))return t.view.lists(e,function(t,e){return n.fn(n.scope.add({"@index":e}).add(t))});if(e=s,e&&f(e)){for(a=0;e.length>a;a++)o.push(n.fn(n.scope.add({"@index":a}).add(e[a])));return o.join("")}if(l(e)){for(r=t.Map.keys(e),a=0;r.length>a;a++)i=r[a],o.push(n.fn(n.scope.add({"@key":i}).add(e[i])));return o.join("")}if(e instanceof Object){for(i in e)o.push(n.fn(n.scope.add({"@key":i}).add(e[i])));return o.join("")}},"with":function(t,e){var n=t;return t=h.resolve(t),t?e.fn(n):undefined},log:function(t,e){"undefined"!=typeof console&&console.log&&(e?console.log(t,e.context):console.log(t.context))}},function(t,e){h.registerHelper(e,t)}),t.view.register({suffix:"mustache",contentType:"x-mustache-template",script:function(t,e){return"can.Mustache(function("+a+") { "+new h({text:e,name:t}).template.out+" })"},renderer:function(t,e){return h({text:e,name:t})}}),t.mustache.registerHelper=t.proxy(t.Mustache.registerHelper,t.Mustache),t.mustache.safeString=t.Mustache.safeString,t}(__m2,__m22,__m10,__m23,__m20,__m25),__m29=function(t){var e=function(){var t={"":!0,"true":!0,"false":!1},e=function(e){if(e&&e.getAttribute){var n=e.getAttribute("contenteditable");return t[n]}};return function(t){var n=e(t);return"boolean"==typeof n?n:!!e(t.parentNode)
}}(),n=function(t){return"{"===t[0]&&"}"===t[t.length-1]?t.substr(1,t.length-2):t};t.view.attr("can-value",function(r,u){var c,l,f=n(r.getAttribute("can-value")),d=u.scope.computeData(f,{args:[]}).compute;return"input"===r.nodeName.toLowerCase()&&("checkbox"===r.type&&(c=t.attr.has(r,"can-true-value")?r.getAttribute("can-true-value"):!0,l=t.attr.has(r,"can-false-value")?r.getAttribute("can-false-value"):!1),"checkbox"===r.type||"radio"===r.type)?(new a(r,{value:d,trueValue:c,falseValue:l}),undefined):"select"===r.nodeName.toLowerCase()&&r.multiple?(new s(r,{value:d}),undefined):e(r)?(new o(r,{value:d}),undefined):(new i(r,{value:d}),undefined)});var r={enter:function(t,e,n){return{event:"keyup",handler:function(t){return 13===t.keyCode?n.call(this,t):undefined}}}};t.view.attr(/can-[\w\.]+/,function(e,i){var a=i.attributeName,s=a.substr("can-".length),o=function(r){var s=n(e.getAttribute(a)),o=i.scope.read(s,{returnObserveMethods:!0,isArgument:!0});return o.value.call(o.parent,i.scope._context,t.$(this),r)};if(r[s]){var u=r[s](i,e,o);o=u.handler,s=u.event}t.bind.call(e,s,o)});var i=t.Control.extend({init:function(){"SELECT"===this.element[0].nodeName.toUpperCase()?setTimeout(t.proxy(this.set,this),1):this.set()},"{value} change":"set",set:function(){if(this.element){var t=this.options.value();this.element[0].value=null==t?"":t}},change:function(){this.element&&this.options.value(this.element[0].value)}}),a=t.Control.extend({init:function(){this.isCheckbox="checkbox"===this.element[0].type.toLowerCase(),this.check()},"{value} change":"check",check:function(){if(this.isCheckbox){var e=this.options.value(),n=this.options.trueValue||!0;this.element[0].checked=e===n}else{var r=this.options.value()==this.element[0].value?"set":"remove";t.attr[r](this.element[0],"checked",!0)}},change:function(){this.isCheckbox?this.options.value(this.element[0].checked?this.options.trueValue:this.options.falseValue):this.element[0].checked&&this.options.value(this.element[0].value)}}),s=i.extend({init:function(){this.delimiter=";",this.set()},set:function(){var e=this.options.value();"string"==typeof e?(e=e.split(this.delimiter),this.isString=!0):e&&(e=t.makeArray(e));var n={};t.each(e,function(t){n[t]=!0}),t.each(this.element[0].childNodes,function(t){t.value&&(t.selected=!!n[t.value])})},get:function(){var e=[],n=this.element[0].childNodes;return t.each(n,function(t){t.selected&&t.value&&e.push(t.value)}),e},change:function(){var e=this.get(),n=this.options.value();this.isString||"string"==typeof n?(this.isString=!0,this.options.value(e.join(this.delimiter))):n instanceof t.List?n.attr(e,!0):this.options.value(e)}}),o=t.Control.extend({init:function(){this.set(),this.on("blur","setValue")},"{value} change":"set",set:function(){var t=this.options.value();this.element[0].innerHTML=t===undefined?"":t},setValue:function(){this.options.value(this.element[0].innerHTML)}})}(__m2,__m21,__m11),__m1=function(t,e){var n=/^(dataViewId|class|id)$/i,r=/\{([^\}]+)\}/g,i=t.Component=t.Construct.extend({setup:function(){if(t.Construct.setup.apply(this,arguments),t.Component){var e=this,n=this.prototype.scope;if(this.Control=a.extend(this.prototype.events),n&&("object"!=typeof n||n instanceof t.Map)?n.prototype instanceof t.Map&&(this.Map=n):this.Map=t.Map.extend(n||{}),this.attributeScopeMappings={},t.each(this.Map?this.Map.defaults:{},function(t,n){"@"===t&&(e.attributeScopeMappings[n]=n)}),this.prototype.template)if("function"==typeof this.prototype.template){var r=this.prototype.template;this.renderer=function(){return t.view.frag(r.apply(null,arguments))}}else this.renderer=t.view.mustache(this.prototype.template);t.view.tag(this.prototype.tag,function(t,n){new e(t,n)})}}},{setup:function(r,i){var a,s,o,u={},c=this,l={};if(t.each(this.constructor.attributeScopeMappings,function(e,n){u[n]=r.getAttribute(t.hyphenate(e))}),t.each(t.makeArray(r.attributes),function(o){var f=t.camelize(o.nodeName.toLowerCase()),d=o.value;if(!(c.constructor.attributeScopeMappings[f]||n.test(f)||e.attr(o.nodeName))){if("{"===d[0]&&"}"===d[d.length-1])d=d.substr(1,d.length-2);else if("legacy"!==i.templateType)return u[f]=d,undefined;var h=i.scope.computeData(d,{args:[]}),p=h.compute,g=function(t,e){a=f,s.attr(f,e),a=null};p.bind("change",g),u[f]=p(),p.hasDependencies?(t.bind.call(r,"removed",function(){p.unbind("change",g)}),l[f]=h):p.unbind("change",g)}}),this.constructor.Map)s=new this.constructor.Map(u);else if(this.scope instanceof t.Map)s=this.scope;else if(t.isFunction(this.scope)){var f=this.scope(u,i.scope,r);s=f instanceof t.Map?f:f.prototype instanceof t.Map?new f(u):new(t.Map.extend(f))(u)}var d={};t.each(l,function(t,e){d[e]=function(n,r){a!==e&&t.compute(r)},s.bind(e,d[e])}),t.bind.call(r,"removed",function(){t.each(d,function(t,e){s.unbind(e,d[e])})}),t.isEmptyObject(this.constructor.attributeScopeMappings)&&"legacy"===i.templateType||t.bind.call(r,"attributes",function(e){var n=t.camelize(e.attributeName);l[n]||s.attr(n,r.getAttribute(e.attributeName))}),this.scope=s,t.data(t.$(r),"scope",this.scope);var h=i.scope.add(this.scope),p={helpers:{}};t.each(this.helpers||{},function(e,n){t.isFunction(e)&&(p.helpers[n]=function(){return e.apply(s,arguments)})}),this._control=new this.constructor.Control(r,{scope:this.scope}),this.constructor.renderer?(p.tags||(p.tags={}),p.tags.content=function g(e,n){var r=i.subtemplate||n.subtemplate;r&&(delete p.tags.content,t.view.live.replace([e],r(n.scope,n.options)),p.tags.content=g)},o=this.constructor.renderer(h,i.options.add(p))):o="legacy"===i.templateType?t.view.frag(i.subtemplate?i.subtemplate(h,i.options.add(p)):""):i.subtemplate?i.subtemplate(h,i.options.add(p)):document.createDocumentFragment(),t.appendChild(r,o)}}),a=t.Control.extend({_lookup:function(t){return[t.scope,t,window]},_action:function(e,n,i){var a,s;if(r.lastIndex=0,a=r.test(e),i||!a){if(a){s=t.compute(function(){var i,a=e.replace(r,function(e,r){var a;return"scope"===r?(i=n.scope,""):(r=r.replace(/^scope\./,""),a=t.compute.read(n.scope,r.split("."),{isArgument:!0}).value,a===undefined&&(a=t.getObject(r)),"string"==typeof a?a:(i=a,""))}),s=a.split(/\s+/g),o=s.pop();return{processor:this.processors[o]||this.processors.click,parts:[a,s.join(" "),o],delegate:i||undefined}},this);var o=function(t,n){i._bindings.control[e](i.element),i._bindings.control[e]=n.processor(n.delegate||i.element,n.parts[2],n.parts[1],e,i)};return s.bind("change",o),i._bindings.readyComputes[e]={compute:s,handler:o},s()}return t.Control._action.apply(this,arguments)}}},{setup:function(e,n){return this.scope=n.scope,t.Control.prototype.setup.call(this,e,n)},off:function(){this._bindings&&t.each(this._bindings.readyComputes||{},function(t){t.compute.unbind("change",t.handler)}),t.Control.prototype.off.apply(this,arguments),this._bindings.readyComputes={}}});return window.$&&$.fn&&($.fn.scope=function(t){return t?this.data("scope").attr(t):this.data("scope")}),t.scope=function(e,n){return e=t.$(e),n?t.data(e,"scope").attr(n):t.data(e,"scope")},i}(__m2,__m9,__m11,__m14,__m21,__m29),__m30=function(t){var e=function(e,n,r){var i=new t.Deferred;return e.then(function(){var e=t.makeArray(arguments),a=!0;try{e[0]=r.apply(n,e)}catch(s){a=!1,i.rejectWith(i,[s].concat(e))}a&&i.resolveWith(i,e)},function(){i.rejectWith(this,arguments)}),"function"==typeof e.abort&&(i.abort=function(){return e.abort()}),i},n=0,r=function(e){return t.__reading(e,e.constructor.id),e.__get(e.constructor.id)},i=function(e,n,r,i,a,s){var o={};if("string"==typeof e){var u=e.split(/\s+/);o.url=u.pop(),u.length&&(o.type=u.pop())}else t.extend(o,e);return o.data="object"!=typeof n||t.isArray(n)?n:t.extend(o.data||{},n),o.url=t.sub(o.url,o.data,!0),t.ajax(t.extend({type:r||"post",dataType:i||"json",success:a,error:s},o))},a=function(n,i,a,s,o){var u;t.isArray(n)?(u=n[1],n=n[0]):u=n.serialize(),u=[u];var c,l,f=n.constructor;return("update"===i||"destroy"===i)&&u.unshift(r(n)),l=f[i].apply(f,u),c=e(l,n,function(t){return n[o||i+"d"](t,l),n}),l.abort&&(c.abort=function(){l.abort()}),c.then(a,s),c},s={models:function(e){return function(n,r){if(t.Model._reqs++,n){if(n instanceof this.List)return n;var i=this,a=[],s=i.List||g,o=r instanceof t.List?r:new s,u=t.isArray(n),c=n instanceof g,l=u?n:c?n.serialize():t.getObject(e||"data",n);if(l===undefined)throw Error("Could not get any raw data while converting using .models");return o.length&&o.splice(0),t.each(l,function(t){a.push(i.model(t))}),o.push.apply(o,a),u||t.each(n,function(t,e){"data"!==e&&o.attr(e,t)}),setTimeout(t.proxy(this._clean,this),1),o}}},model:function(e){return function(n){if(n){"function"==typeof n.serialize&&(n=n.serialize()),this.parseModel?n=this.parseModel.apply(this,arguments):e&&(n=t.getObject(e||"data",n));var r=n[this.id],i=(r||0===r)&&this.store[r]?this.store[r].attr(n,this.removeAttr||!1):new this(n);return i}}}},o=function(e){return function(n){return e?t.getObject(e||"data",n):n}},u={parseModel:o,parseModels:o},c={create:{url:"_shortName",type:"post"},update:{data:function(e,n){n=n||{};var r=this.id;return n[r]&&n[r]!==e&&(n["new"+t.capitalize(e)]=n[r],delete n[r]),n[r]=e,n},type:"put"},destroy:{type:"delete",data:function(t,e){return e=e||{},e.id=e[this.id]=t,e}},findAll:{url:"_shortName"},findOne:{}},l=function(t,e){return function(n){return n=t.data?t.data.apply(this,arguments):n,i(e||this[t.url||"_url"],n,t.type||"get")}},f=function(t,e){if(t.resource){var n=t.resource.replace(/\/+$/,"");return"findAll"===e||"create"===e?n:n+"/{"+t.id+"}"}};t.Model=t.Map.extend({fullName:"can.Model",_reqs:0,setup:function(e,r,i,a){if("string"!==r&&(a=i,i=r),a||(a=i),this.store={},t.Map.setup.apply(this,arguments),t.Model){i&&i.List?(this.List=i.List,this.List.Map=this):this.List=e.List.extend({Map:this},{});var o=this,d=t.proxy(this._clean,o);t.each(c,function(n,r){if(t.isFunction(o[r])||(o[r]=l(n,o[r]?o[r]:f(o,r))),o["make"+t.capitalize(r)]){var i=o["make"+t.capitalize(r)](o[r]);t.Construct._overwrite(o,e,r,function(){t.Model._reqs++;var e=i.apply(this,arguments),n=e.then(d,d);return n.abort=e.abort,n})}}),t.each(s,function(n,r){var i="parse"+t.capitalize(r),s=o[r];"string"==typeof s?(t.Construct._overwrite(o,e,i,u[i](s)),t.Construct._overwrite(o,e,r,n(s))):a&&(a[r]||a[i])||t.Construct._overwrite(o,e,i,u[i]())}),t.each(u,function(n,r){"string"==typeof o[r]&&t.Construct._overwrite(o,e,r,n(o[r]))}),"can.Model"!==o.fullName&&o.fullName||(o.fullName="Model"+ ++n),t.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"}},_ajax:l,_makeRequest:a,_clean:function(){if(t.Model._reqs--,!t.Model._reqs)for(var e in this.store)this.store[e]._bindings||delete this.store[e];return arguments[0]},models:s.models("data"),model:s.model()},{setup:function(e){var n=e&&e[this.constructor.id];t.Model._reqs&&null!=n&&(this.constructor.store[n]=this),t.Map.prototype.setup.apply(this,arguments)},isNew:function(){var t=r(this);return!(t||0===t)},save:function(t,e){return a(this,this.isNew()?"create":"update",t,e)},destroy:function(e,n){if(this.isNew()){var r=this,i=t.Deferred();return i.then(e,n),i.done(function(t){r.destroyed(t)}).resolve(r)}return a(this,"destroy",e,n,"destroyed")},_bindsetup:function(){return this.constructor.store[this.__get(this.constructor.id)]=this,t.Map.prototype._bindsetup.apply(this,arguments)},_bindteardown:function(){return delete this.constructor.store[r(this)],t.Map.prototype._bindteardown.apply(this,arguments)},___set:function(e,n){t.Map.prototype.___set.call(this,e,n),e===this.constructor.id&&this._bindings&&(this.constructor.store[r(this)]=this)}});var d=function(e){var n="parse"+t.capitalize(e);return function(t){return this[n]&&(t=this[n].apply(this,arguments)),this[e](t)}},h=function(t){return this.parseModel?this.parseModel.apply(this,arguments):this.model(t)},p={makeFindAll:d("models"),makeFindOne:d("model"),makeCreate:h,makeUpdate:h};t.each(p,function(n,r){t.Model[r]=function(r){return function(){var i=t.makeArray(arguments),a=t.isFunction(i[1])?i.splice(0,1):i.splice(0,2),s=e(r.apply(this,a),this,n);return s.then(i[0],i[1]),s}}}),t.each(["created","updated","destroyed"],function(e){t.Model.prototype[e]=function(n){var r,i=this.constructor;r=n&&"object"==typeof n&&this.attr(n.attr?n.attr():n),t.dispatch.call(this,{type:"change",target:this},[e]),t.dispatch.call(i,e,[this])}});var g=t.Model.List=t.List.extend({_bubbleRule:function(e,n){return t.List._bubbleRule(e,n)||"destroyed"}},{setup:function(e){t.isPlainObject(e)&&!t.isArray(e)?(t.List.prototype.setup.apply(this),this.replace(this.constructor.Map.findAll(e))):t.List.prototype.setup.apply(this,arguments),this._init=1,this.bind("destroyed",t.proxy(this._destroyed,this)),delete this._init},_destroyed:function(t,e){if(/\w+/.test(e))for(var n;(n=this.indexOf(t.target))>-1;)this.splice(n,1)}});return t.Model}(__m2,__m15,__m19),__m32=function(t){var e=/^\d+$/,n=/([^\[\]]+)|(\[\])/g,r=/([^?#]*)(#.*)?$/,i=function(t){return decodeURIComponent(t.replace(/\+/g," "))};return t.extend(t,{deparam:function(a){var s,o,u={};return a&&r.test(a)&&(s=a.split("&"),t.each(s,function(t){var r=t.split("="),a=i(r.shift()),s=i(r.join("=")),c=u;if(a){r=a.match(n);for(var l=0,f=r.length-1;f>l;l++)c[r[l]]||(c[r[l]]=e.test(r[l+1])||"[]"===r[l+1]?[]:{}),c=c[r[l]];o=r.pop(),"[]"===o?c.push(s):c[o]=s}})),u}}),t}(__m2,__m13),__m31=function(t){var e,n,r,i,a=/\:([\w\.]+)/g,s=/^(?:&[^=]+=[^&]*)+/,o=function(e){var n=[];return t.each(e,function(e,r){n.push(("className"===r?"class":r)+'="'+("href"===r?e:t.esc(e))+'"')}),n.join(" ")},u=function(t,e){var n=0,r=0,i={};for(var a in t.defaults)t.defaults[a]===e[a]&&(i[a]=1,n++);for(;t.names.length>r;r++){if(!e.hasOwnProperty(t.names[r]))return-1;i[t.names[r]]||n++}return n},c=window.location,l=function(t){return(t+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},f=t.each,d=t.extend,h=function(e){return e&&"object"==typeof e?(e=e instanceof t.Map?e.attr():t.isFunction(e.slice)?e.slice():t.extend({},e),t.each(e,function(t,n){e[n]=h(t)})):e!==undefined&&null!==e&&t.isFunction(e.toString)&&(e=""+e),e},p=function(t){return t.replace(/\\/g,"")},g=function(){i=1,clearTimeout(e),e=setTimeout(function(){i=0;var e=t.route.data.serialize(),n=t.route.param(e,!0);t.route._call("setURL",n),r=n},10)};t.route=function(e,n){var r=t.route._call("root");r.lastIndexOf("/")===r.length-1&&0===e.indexOf("/")&&(e=e.substr(1)),n=n||{};for(var i,s,o=[],u="",c=a.lastIndex=0,f=t.route._call("querySeparator"),d=t.route._call("matchSlashes");i=a.exec(e);)o.push(i[1]),u+=p(e.substring(c,a.lastIndex-i[0].length)),s="\\"+(p(e.substr(a.lastIndex,1))||f+(d?"":"|/")),u+="([^"+s+"]"+(n[i[1]]?"*":"+")+")",c=a.lastIndex;return u+=e.substr(c).replace("\\",""),t.route.routes[e]={test:RegExp("^"+u+"($|"+l(f)+")"),route:e,names:o,defaults:n,length:e.split("/").length},t.route},d(t.route,{param:function(e,n){var r,i,s=0,o=e.route,c=0;if(delete e.route,f(e,function(){c++}),f(t.route.routes,function(t){return i=u(t,e),i>s&&(r=t,s=i),i>=c?!1:undefined}),t.route.routes[o]&&u(t.route.routes[o],e)===s&&(r=t.route.routes[o]),r){var l,h=d({},e),p=r.route.replace(a,function(t,n){return delete h[n],e[n]===r.defaults[n]?"":encodeURIComponent(e[n])}).replace("\\","");return f(r.defaults,function(t,e){h[e]===t&&delete h[e]}),l=t.param(h),n&&t.route.attr("route",r.route),p+(l?t.route._call("querySeparator")+l:"")}return t.isEmptyObject(e)?"":t.route._call("querySeparator")+t.param(e)},deparam:function(e){var n=t.route._call("root");n.lastIndexOf("/")===n.length-1&&0===e.indexOf("/")&&(e=e.substr(1));var r={length:-1},i=t.route._call("querySeparator"),a=t.route._call("paramsMatcher");if(f(t.route.routes,function(t){t.test.test(e)&&t.length>r.length&&(r=t)}),r.length>-1){var s=e.match(r.test),o=s.shift(),u=e.substr(o.length-(s[s.length-1]===i?1:0)),c=u&&a.test(u)?t.deparam(u.slice(1)):{};return c=d(!0,{},r.defaults,c),f(s,function(t,e){t&&t!==i&&(c[r.names[e]]=decodeURIComponent(t))}),c.route=r.route,c}return e.charAt(0)!==i&&(e=i+e),a.test(e)?t.deparam(e.slice(1)):{}},data:new t.Map({}),map:function(e){var n;n=e.prototype instanceof t.Map?new e:e,t.route.data=n},routes:{},ready:function(e){return e!==!0&&(t.route._setup(),t.route.setState()),t.route},url:function(e,n){return n&&(e=t.extend({},t.route.deparam(t.route._call("matchingPartOfURL")),e)),t.route._call("root")+t.route.param(e)},link:function(e,n,r,i){return"<a "+o(d({href:t.route.url(n,i)},r))+">"+e+"</a>"},current:function(e){return this._call("matchingPartOfURL")===t.route.param(e)},bindings:{hashchange:{paramsMatcher:s,querySeparator:"&",matchSlashes:!1,bind:function(){t.bind.call(window,"hashchange",m)},unbind:function(){t.unbind.call(window,"hashchange",m)},matchingPartOfURL:function(){return c.href.split(/#!?/)[1]||""},setURL:function(t){return c.hash="#!"+t,t},root:"#!"}},defaultBinding:"hashchange",currentBinding:null,_setup:function(){t.route.currentBinding||(t.route._call("bind"),t.route.bind("change",g),t.route.currentBinding=t.route.defaultBinding)},_teardown:function(){t.route.currentBinding&&(t.route._call("unbind"),t.route.unbind("change",g),t.route.currentBinding=null),clearTimeout(e),i=0},_call:function(){var e=t.makeArray(arguments),n=e.shift(),r=t.route.bindings[t.route.currentBinding||t.route.defaultBinding],i=r[n];return i.apply?i.apply(r,e):i}}),f(["bind","unbind","on","off","delegate","undelegate","removeAttr","compute","_get","__get"],function(e){t.route[e]=function(){return t.route.data[e]?t.route.data[e].apply(t.route.data,arguments):undefined}}),t.route.attr=function(e,n){var r,i=typeof e;return r=n===undefined?arguments:"string"!==i&&"number"!==i?[h(e),n]:[e,h(n)],t.route.data.attr.apply(t.route.data,r)};var m=t.route.setState=function(){var e=t.route._call("matchingPartOfURL"),a=n;if(n=t.route.deparam(e),!i||e!==r){t.batch.start();for(var s in a)n[s]||t.route.removeAttr(s);t.route.attr(n),t.batch.stop()}};return t.route}(__m2,__m15,__m19,__m32),__m33=function(t){return t.Control.processors.route=function(e,n,r,i,a){r=r||"",t.route.routes[r]||("/"===r[0]&&(r=r.substring(1)),t.route(r));var s,o=function(e){if(t.route.attr("route")===r&&(e.batchNum===undefined||e.batchNum!==s)){s=e.batchNum;var n=t.route.attr();delete n.route,t.isFunction(a[i])?a[i](n):a[a[i]](n)}};return t.route.bind("change",o),function(){t.route.unbind("change",o)}},t}(__m2,__m31,__m11),__m34=function(){var t=can.List.prototype.replace;can.List.prototype.replace=function(e){var n=t.apply(this,arguments);if(can.isDeferred(e)){can.batch.start(),this.attr("state",e.state()),this.removeAttr("reason"),can.batch.stop();var r=this,i=this._deferred=new can.Deferred;e.then(function(){r.attr("state",e.state()),i.resolve(r)},function(t){can.batch.start(),r.attr("state",e.state()),r.attr("reason",t),can.batch.stop(),i.reject(t)})}return n},can.each({isResolved:"resolved",isPending:"pending",isRejected:"rejected"},function(t,e){can.List.prototype[e]=function(){return this.attr("state")===t}}),can.each(["then","done","fail","always","promise"],function(t){can.List.prototype[t]=function(){return this._deferred||(this._deferred=new can.Deferred,this._deferred.resolve(this)),this._deferred[t].apply(this._deferred,arguments)}})}(__m19),__m35=function(t){var e=t.extend,n=function(t){if(this.constructor!==n){var r=new n(t);return function(t,e){return r.render(t,e)}}return"function"==typeof t?(this.template={fn:t},undefined):(e(this,t),this.template=this.scanner.scan(this.text,this.name),undefined)};return t.EJS=n,n.prototype.render=function(t,e){return t=t||{},this.template.fn.call(t,t,new n.Helpers(t,e||{}))},e(n.prototype,{scanner:new t.view.Scanner({text:{outStart:"with(_VIEW) { with (_CONTEXT) {",outEnd:"}}",argNames:"_CONTEXT,_VIEW",context:"this"},tokens:[["templateLeft","<%%"],["templateRight","%>"],["returnLeft","<%=="],["escapeLeft","<%="],["commentLeft","<%#"],["left","<%"],["right","%>"],["returnRight","%>"]],helpers:[{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(t){var e=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,n=t.match(e);return"can.proxy(function(__){var "+n[1]+"=can.$(__);"+n[2]+"}, this);"}}],transform:function(t){return t.replace(/<%([\s\S]+?)%>/gm,function(t,e){var n,r,i=[];e.replace(/[{}]/gm,function(t,e){i.push([t,e])});do for(n=!1,r=i.length-2;r>=0;r--)if("{"===i[r][0]&&"}"===i[r+1][0]){i.splice(r,2),n=!0;break}while(n);if(i.length>=2){var a,s=["<%"],o=0;for(r=0;a=i[r];r++)s.push(e.substring(o,o=a[1])),"{"===a[0]&&i.length-1>r||"}"===a[0]&&r>0?s.push("{"===a[0]?"{ %><% ":" %><% }"):s.push(a[0]),++o;return s.push(e.substring(o),"%>"),s.join("")}return"<%"+e+"%>"})}})}),n.Helpers=function(t,n){this._data=t,this._extras=n,e(this,n)},n.Helpers.prototype={list:function(e,n){t.each(e,function(t,r){n(t,r,e)})},each:function(e,n){t.isArray(e)?this.list(e,n):t.view.lists(e,n)}},t.view.register({suffix:"ejs",script:function(t,e){return"can.EJS(function(_CONTEXT,_VIEW) { "+new n({text:e,name:t}).template.out+" })"},renderer:function(t,e){return n({text:e,name:t})}}),t.ejs.Helpers=n.Helpers,t}(__m2,__m10,__m13,__m20,__m23,__m25),__m37=function(t,e){function n(t,n,r){var i,o,u,c,l,f=r,d=typeof t,h=function(){return i||(i={path:r,callbacks:[]},n.push(i),f=[]),i};if("object"===d){if(t.tag){if(o=document.createElement(t.tag),t.attrs)for(var p in t.attrs){var g=t.attrs[p];"function"==typeof g?h().callbacks.push({callback:g}):o.setAttribute(p,g)}if(t.attributes)for(c=0,l=t.attributes.length;l>c;c++)h().callbacks.push({callback:t.attributes[c]});t.children&&t.children.length&&(u=i?i.paths=[]:n,o.appendChild(a(t.children,u,f)))}else if(t.comment&&(o=document.createComment(t.comment),t.callbacks))for(c=0,l=t.attributes.length;l>c;c++)h().callbacks.push({callback:t.callbacks[c]})}else"string"===d?o=document.createTextNode(t):"function"===d&&(s?(o=document.createTextNode(""),h().callbacks.push({callback:t})):(o=document.createComment("~"),h().callbacks.push({callback:function(){var n=document.createTextNode("");return e.replace([this],n),t.apply(n,arguments)}})));return o}function r(t,e,n){for(var i,a=e.path,s=e.callbacks,o=e.paths,u=t,c=0,l=a.length;l>c;c++)u=u.childNodes[a[c]];for(c=0,l=s.length;l>c;c++)i=s[c],i.callback.apply(u,n);if(o&&o.length)for(c=o.length-1;c>=0;c--)r(u,o[c],n)}function i(e){var n=[],i=a(e,n,[]);return{paths:n,clone:i,hydrate:function(){for(var e=u(this.clone),i=t.makeArray(arguments),a=n.length-1;a>=0;a--)r(e,n[a],i);return e}}}var a=function(t,e,r){for(var i=document.createDocumentFragment(),a=0,s=t.length;s>a;a++){var o=t[a];i.appendChild(n(o,e,r.concat(a)))}return i},s=function(){var t=document.createDocumentFragment(),e=document.createElement("div");e.appendChild(document.createTextNode("")),e.appendChild(document.createTextNode("")),t.appendChild(e);var n=t.cloneNode(!0);return 2===n.childNodes[0].childNodes.length}(),o=function(){var t=document.createElement("a");t.innerHTML="<xyz></xyz>";var e=t.cloneNode(!0);return"<xyz></xyz>"===e.innerHTML}(),u=o?function(t){return t.cloneNode(!0)}:function(e){var n;if(1===e.nodeType?n=document.createElement(e.nodeName):3===e.nodeType?n=document.createTextNode(e.nodeValue):8===e.nodeType?n=document.createComment(e.nodeValue):11===e.nodeType&&(n=document.createDocumentFragment()),e.attributes){var r=t.makeArray(e.attributes);t.each(r,function(t){t&&t.specified&&n.setAttribute(t.nodeName,t.nodeValue)})}return e.childNodes&&t.each(e.childNodes,function(t){n.appendChild(u(t))}),n};return i.keepsTextNodes=s,t.view.target=i,i}(__m2,__m24),__m39=function(){return{isArrayLike:function(t){return t&&t.splice&&"number"==typeof t.length},isObserveLike:function(t){return t instanceof can.Map||t&&!!t._get},emptyHandler:function(){},jsonParse:function(str){return"'"===str[0]?str.substr(1,str.length-2):"undefined"===str?undefined:window.JSON?JSON.parse(str):eval("("+str+")")},mixins:{last:function(){return this.stack[this.stack.length-1]},add:function(t){this.last().add(t)},subSectionDepth:function(){return this.stack.length-1}}}}(__m2),__m41=function(t,e,n){n=n||t.view.live;var r=function(n){return e.isObserveLike(n)&&e.isArrayLike(n)&&n.attr("length")?n:t.isFunction(n)?n():n},i={each:function(i,a){var s,o,u,c=r(i),l=[];if(c instanceof t.List||i&&i.isComputed&&c===undefined)return function(t){var e=function(t,e,n){return a.fn(a.scope.add({"@index":e}).add(t),a.options,n)};n.list(t,i,e,a.context,t.parentNode,a.nodeList)};var f=c;if(f&&e.isArrayLike(f))for(u=0;f.length>u;u++)l.push(a.fn(a.scope.add({"@index":u}).add(f[u])));else if(e.isObserveLike(f))for(s=t.Map.keys(f),u=0;s.length>u;u++)o=s[u],l.push(a.fn(a.scope.add({"@key":o}).add(f[o])));else if(f instanceof Object)for(o in f)l.push(a.fn(a.scope.add({"@key":o}).add(f[o])));return l},"if":function(e,n){var i;return i=t.isFunction(e)?t.compute.truthy(e)():!!r(e),i?n.fn(n.scope||this):n.inverse(n.scope||this)},unless:function(e,n){return i["if"].apply(this,[t.isFunction(e)?t.compute(function(){return!e()}):!e,n])},"with":function(t,e){var n=t;return t=r(t),t?e.fn(n):undefined},log:function(t,e){"undefined"!=typeof console&&console.log&&(e?console.log(t,e.context):console.log(t.context))},data:function(e){var n=2===arguments.length?this:arguments[1];return function(r){t.data(t.$(r),e,n||this.context)}}};return{registerHelper:function(t,e){i[t]=e},getHelper:function(t,e){var n=e.attr("helpers."+t);return n||(n=i[t]),n?{fn:n}:undefined}}}(__m2,__m39,__m26),__m40=function(t,e,n,r,i,a,s){r=r||t.view.live,i=i||t.view.elements,a=a||t.view.Scope,s=s||t.view.nodeLists;var o=/((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g,u=/^(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(?:(.+?)=(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(.+))))$/,c=/(?:(?:^|(\r?)\n)(\s*)(\{\{([^\}]*)\}\}\}?)([^\S\n\r]*)($|\r?\n))|(\{\{([^\}]*)\}\}\}?)/g,l=function(t){return t&&"string"==typeof t.get},f=function(t,e,n,r){for(var i=document.createDocumentFragment(),a=0,s=t.length;s>a;a++)d(i,n.fn(e?t.attr(""+a):t[a],r));return i},d=function(t,e){e&&t.appendChild("string"==typeof e?document.createTextNode(e):e)},h=function(t,e,n,r){for(var i="",a=0,s=t.length;s>a;a++)i+=n.fn(e?t.attr(""+a):t[a],r);return i},p=function(e,n,r){var i=n.computeData(e,{isArgument:r,args:[n.attr("."),n]});return t.compute.temporarilyBind(i.compute),i},g=function(t,e){var n=p(t,e,!0);return n.compute.hasDependencies?n.compute:n.initialValue},m=function(t,e,n,r,i,a){i&&(t.fn=v(i,e,n,r)),a&&(t.inverse=v(a,e,n,r))},v=function(e,n,r,i){var a=function(t,r,i){return e(t||n,r,i)};return function(e,s,o){var u=t.__clearReading();e===undefined||e instanceof t.view.Scope||(e=n.add(e)),s===undefined||s instanceof _.Options||(s=r.add(s));var c=a(e,s||r,o||i);return t.__setReading(u),c}},_={expressionData:function(n){var r=[],i={},a=0;return(t.trim(n)+" ").replace(o,function(t,n){var s;a&&(s=n.match(u))?s[1]||s[2]?r.push(e.jsonParse(s[1]||s[2])):i[s[3]]=s[6]?{get:s[6]}:e.jsonParse(s[4]||s[5]):r.push({get:n}),a++}),{name:r.shift(),args:r,hash:i}},makeEvaluator:function(r,i,a,s,o,u,c,d){for(var v,_,b=[],y={},x={fn:function(){},inverse:function(){}},w=r.attr("."),k=o.name,M=o.args.length||!t.isEmptyObject(o.hash),C=0,A=o.args.length;A>C;C++){var N=o.args[C];N&&l(N)?b.push(g(N.get,r,!0)):b.push(N)}for(var O in o.hash)y[O]=l(o.hash[O])?g(o.hash[O].get,r):o.hash[O];if(l(k)&&(M&&(v=n.getHelper(k.get,i),v||"function"!=typeof w[k.get]||(v={fn:w[k.get]})),!v)){var T=k.get,L=p(k.get,r,!1),S=L.compute;_=L.initialValue,L.reads&&1===L.reads.length&&L.root instanceof t.Map&&(S=t.compute(L.root,L.reads[0])),k=L.compute.hasDependencies?S:_,M||_!==undefined?"function"==typeof _&&(v={fn:_}):v=n.getHelper(T,i)}if("^"===s){var j=u;u=c,c=j}return v?(m(x,r,i,a,u,c),t.simpleExtend(x,{context:w,scope:r,contexts:r,hash:y,nodeList:a}),b.push(x),function(){return v.fn.apply(w,b)||""}):s?"#"===s||"^"===s?(m(x,r,i,a,u,c),function(){var n;if(n=t.isFunction(k)&&k.isComputed?k():k,e.isArrayLike(n)){var a=e.isObserveLike(n);return(a?n.attr("length"):n.length)?(d?h:f)(n,a,x,i):x.inverse(r,i)}return n?x.fn(n||r,i):x.inverse(r,i)}):undefined:k&&k.isComputed?k:function(){return""+(null!=k?k:"")}},makeLiveBindingPartialRenderer:function(e,n){return e=t.trim(e),function(r,a,o){var u,c=a.attr("partials."+e);u=c?c.render?c.render(r,a):c(r,a):t.view.render(e,r,a),u=t.frag(u);var l=[this];s.register(l,null,n.directlyNested?o||!0:!0),s.update(l,u.childNodes),i.replace([this],u)}},makeStringBranchRenderer:function(t,e){var n=y(e),r=t+e;return function(e,i,a,s){var o=e.__cache[r];(t||!o)&&(o=b(e,i,null,t,n,a,s,!0),t||(e.__cache[r]=o));var u=o();return null==u?"":""+u}},makeLiveBindingBranchRenderer:function(e,n,a){var o=y(n);return function(u,c,l,f,d){var h=[this];h.expression=n,s.register(h,null,a.directlyNested?l||!0:!0);var p=b(u,c,h,e,o,f,d,a.tag),g=t.compute(p,null,!1,!0);g.bind("change",t.k);var m=g();if("function"==typeof m){var v=t.__clearReading();m(this),t.__setReading(v)}else g.hasDependencies?a.attr?r.simpleAttribute(this,a.attr,g):a.tag?r.attributes(this,g):a.text&&"object"!=typeof m?r.text(this,g,this.parentNode,h):r.html(this,g,this.parentNode,h):a.attr?t.attr.set(this,a.attr,m):a.tag?r.setAttributes(this,m):a.text&&"string"==typeof m?this.nodeValue=m:m&&i.replace([this],t.frag(m));g.unbind("change",t.k)}},splitModeFromExpression:function(e,n){e=t.trim(e);var r=e[0];return"#/{&^>!".indexOf(r)>=0?e=t.trim(e.substr(1)):r=null,"{"===r&&n.node&&(r=null),{mode:r,expression:e}},cleanLineEndings:function(t){return t.replace(c,function(t,e,n,r,i,a,s,o,u,c){a=a||"",e=e||"",n=n||"";var l=x(i||u,{});return o||">{".indexOf(l.mode)>=0?t:"^#!/".indexOf(l.mode)>=0?r+(0!==c&&s.length?e+"\n":""):n+r+a+(n.length||0!==c?e+"\n":"")})},Options:t.view.Scope.extend({init:function(e){e.helpers||e.partials||e.tags||(e={helpers:e}),t.view.Scope.prototype.init.apply(this,arguments)}})},b=_.makeEvaluator,y=_.expressionData,x=_.splitModeFromExpression;return _}(__m2,__m39,__m41,__m26,__m24,__m22,__m27),__m38=function(t,e,n,r){var i=function(){var t=document.createElement("div");return function(e){return-1===e.indexOf("&")?e.replace(/\r\n/g,"\n"):(t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue)}}(),a=function(){this.stack=[new s]};t.extend(a.prototype,n.mixins),t.extend(a.prototype,{startSubSection:function(t){var e=new s(t);return this.stack.push(e),e},endSubSectionAndReturnRenderer:function(){if(this.last().isEmpty())return this.stack.pop(),null;var e=this.endSection();return t.proxy(e.compiled.hydrate,e.compiled)},startSection:function(t){var e=new s(t);this.last().add(e.targetCallback),this.stack.push(e)},endSection:function(){return this.last().compile(),this.stack.pop()},inverse:function(){this.last().inverse()},compile:function(){var e=this.stack.pop().compile();return function(n,i){return n instanceof t.view.Scope||(n=new t.view.Scope(n||{})),i instanceof r.Options||(i=new r.Options(i||{})),e.hydrate(n,i)}},push:function(t){this.last().push(t)},pop:function(){return this.last().pop()}});var s=function(e){this.data="targetData",this.targetData=[],this.targetStack=[];var n=this;this.targetCallback=function(r,i,a){e.call(this,r,i,a,t.proxy(n.compiled.hydrate,n.compiled),n.inverseCompiled&&t.proxy(n.inverseCompiled.hydrate,n.inverseCompiled))}};return t.extend(s.prototype,{inverse:function(){this.inverseData=[],this.data="inverseData"},push:function(t){this.add(t),this.targetStack.push(t)},pop:function(){return this.targetStack.pop()},add:function(t){"string"==typeof t&&(t=i(t)),this.targetStack.length?this.targetStack[this.targetStack.length-1].children.push(t):this[this.data].push(t)},compile:function(){return this.compiled=e(this.targetData),this.inverseData&&(this.inverseCompiled=e(this.inverseData),delete this.inverseData),delete this.targetData,delete this.targetStack,this.compiled},children:function(){return this.targetStack.length?this.targetStack[this.targetStack.length-1].children:this[this.data]},isEmpty:function(){return!this.targetData.length}}),a}(__m2,__m37,__m39,__m40),__m42=function(t,e,n){e=e||t.view.live;var r=function(){this.stack=[new s]},i=function(){};t.extend(r.prototype,n.mixins),t.extend(r.prototype,{startSection:function(t){var e=new s;
this.last().add({process:t,truthy:e}),this.stack.push(e)},endSection:function(){this.stack.pop()},inverse:function(){this.stack.pop();var t=new s;this.last().last().falsey=t,this.stack.push(t)},compile:function(n){var r=this.stack[0].compile();return function(a,s){var o=t.compute(function(){return r(a,s)},this,!1,!0);o.bind("change",i);var u=o();o.hasDependencies?(n.attr?e.simpleAttribute(this,n.attr,o):e.attributes(this,o),o.unbind("change",i)):n.attr?t.attr.set(this,n.attr,u):e.setAttributes(this,u)}}});var a=function(t,e,n){return function(r,i){return t.call(this,r,i,e,n)}},s=function(){this.values=[]};return t.extend(s.prototype,{add:function(t){this.values.push(t)},last:function(){return this.values[this.values.length-1]},compile:function(){for(var t=this.values,e=t.length,n=0;e>n;n++){var r=this.values[n];"object"==typeof r&&(t[n]=a(r.process,r.truthy&&r.truthy.compile(),r.falsey&&r.falsey.compile()))}return function(n,r){for(var i,a="",s=0;e>s;s++)i=t[s],a+="string"==typeof i?i:i.call(this,n,r);return a}}}),r}(__m2,__m26,__m39),__m36=function(t,e,n,r,i,a,s,o){function u(n){n=a.cleanLineEndings(n);var s=new r,u={node:null,attr:null,sectionElementStack:[],text:!1},c=function(t,e,n){if(">"===e)t.add(a.makeLiveBindingPartialRenderer(n,u));else if("/"===e)t.endSection(),t instanceof r&&u.sectionElementStack.pop();else if("else"===e)t.inverse();else{var i=t instanceof r?a.makeLiveBindingBranchRenderer:a.makeStringBranchRenderer;"{"===e||"&"===e?t.add(i(null,n,l())):"#"===e||"^"===e?(t.startSection(i(e,n,l())),t instanceof r&&u.sectionElementStack.push("section")):t.add(i(null,n,l({text:!0})))}},l=function(e){var n={tag:u.node&&u.node.tag,attr:u.attr&&u.attr.name,directlyNested:"section"===u.sectionElementStack[u.sectionElementStack.length-1]};return e?t.simpleExtend(n,e):n},f=function(t,e){t.attributes||(t.attributes=[]),t.attributes.push(e)};return e(n,{start:function(t){u.node={tag:t,children:[]}},end:function(t,e){var n=o.tag(t);e?(s.add(u.node),n&&f(u.node,function(e,n){o.tagHandler(this,t,{scope:e,options:n,subtemplate:null,templateType:"stache"})})):(s.push(u.node),u.sectionElementStack.push("element"),n&&s.startSubSection()),u.node=null},close:function(t){var e,n=o.tag(t);n&&(e=s.endSubSectionAndReturnRenderer());var r=s.pop();n&&f(r,function(n,r){o.tagHandler(this,t,{scope:n,options:r,subtemplate:e,templateType:"stache"})}),u.sectionElementStack.pop()},attrStart:function(t){u.node.section?u.node.section.add(t+'="'):u.attr={name:t,value:""}},attrEnd:function(t){if(u.node.section)u.node.section.add('" ');else{u.node.attrs||(u.node.attrs={}),u.node.attrs[u.attr.name]=u.attr.section?u.attr.section.compile(l()):u.attr.value;var e=o.attr(t);e&&(u.node.attributes||(u.node.attributes=[]),u.node.attributes.push(function(n,r){e(this,{attributeName:t,scope:n,options:r})})),u.attr=null}},attrValue:function(t){var e=u.node.section||u.attr.section;e?e.add(t):u.attr.value+=t},chars:function(t){s.add(t)},special:function(t){var e=a.splitModeFromExpression(t,u),n=e.mode,r=e.expression;if("else"===r)return(u.attr&&u.attr.section?u.attr.section:s).inverse(),undefined;if("!"!==n)if(u.node&&u.node.section)c(u.node.section,n,r),0===u.node.section.subSectionDepth()&&(u.node.attributes.push(u.node.section.compile(l())),delete u.node.section);else if(u.attr)u.attr.section||(u.attr.section=new i,u.attr.value&&u.attr.section.add(u.attr.value)),c(u.attr.section,n,r);else if(u.node)if(u.node.attributes||(u.node.attributes=[]),n){if("#"!==n&&"^"!==n)throw n+" is currently not supported within a tag.";u.node.section||(u.node.section=new i),c(u.node.section,n,r)}else u.node.attributes.push(a.makeLiveBindingBranchRenderer(null,r,l()));else c(s,n,r)},comment:function(t){s.add({comment:t})},done:function(){}}),s.compile()}e=e||t.view.parser,o=o||t.view.callbacks;var c={"\n":"\\n","\r":"\\r","\u2028":"\\u2028","\u2029":"\\u2029"},l=function(t){return(""+t).replace(/["'\\\n\r\u2028\u2029]/g,function(t){return"'\"\\".indexOf(t)>=0?"\\"+t:c[t]})};return t.view.register({suffix:"stache",contentType:"x-stache-template",fragRenderer:function(t,e){return u(e)},script:function(t,e){return'can.stache("'+l(e)+'")'}}),t.view.ext=".stache",t.extend(t.stache,s),t.extend(u,s),t.stache.safeString=u.safeString=function(t){return{toString:function(){return t}}},u}(__m2,__m28,__m37,__m38,__m42,__m40,__m41,__m9),__m43=function(t){"use strict";if(window.history&&history.pushState){t.route.bindings.pushstate={root:"/",matchSlashes:!1,paramsMatcher:/^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,querySeparator:"?",bind:function(){t.delegate.call(t.$(document.documentElement),"a","click",e),t.each(r,function(e){i[e]=window.history[e],window.history[e]=function(n,r,a){var s=0===a.indexOf("http"),o=window.location.search+window.location.hash;(!s&&a!==window.location.pathname+o||s&&a!==window.location.href+o)&&(i[e].apply(window.history,arguments),t.route.setState())}}),t.bind.call(window,"popstate",t.route.setState)},unbind:function(){t.undelegate.call(t.$(document.documentElement),"click","a",e),t.each(r,function(t){window.history[t]=i[t]}),t.unbind.call(window,"popstate",t.route.setState)},matchingPartOfURL:function(){var t=n(),e=location.pathname+location.search,r=e.indexOf(t);return e.substr(r+t.length)},setURL:function(e){a&&-1===e.indexOf("#")&&window.location.hash&&(e+=window.location.hash),window.history.pushState(null,null,t.route._call("root")+e)}};var e=function(e){if(!(e.isDefaultPrevented?e.isDefaultPrevented():e.defaultPrevented===!0)){var r=this._node||this,i=r.host||window.location.host;if(window.location.host===i){var s=n();if(0===r.pathname.indexOf(s)){var o=(r.pathname+r.search).substr(s.length),u=t.route.deparam(o);u.hasOwnProperty("route")&&(a=!0,window.history.pushState(null,null,r.href),e.preventDefault&&e.preventDefault())}}}},n=function(){var e=location.protocol+"//"+location.host,n=t.route._call("root"),r=n.indexOf(e);return 0===r?n.substr(e.length):n},r=["pushState","replaceState"],i={},a=!1;t.route.defaultBinding="pushstate"}return t}(__m2,__m31),__m46=function(t){var e=t.isArray;t.Object={};var n=t.Object.same=function(i,a,s,o,u,c){var l,f=typeof i,d=e(i),h=typeof s;if(("string"===h||null===s)&&(s=r[s],h="function"),"function"===h)return s(i,a,o,u);if(s=s||{},null===i||null===a)return i===a;if(i instanceof Date||a instanceof Date)return i===a;if(-1===c)return"object"===f||i===a;if(f!==typeof a||d!==e(a))return!1;if(i===a)return!0;if(d){if(i.length!==a.length)return!1;for(var p=0;i.length>p;p++)if(l=s[p]===undefined?s["*"]:s[p],!n(i[p],a[p],i,a,l))return!1;return!0}if("object"===f||"function"===f){var g=t.extend({},a);for(var m in i){if(l=s[m]===undefined?s["*"]:s[m],!n(i[m],a[m],l,i,a,c===!1?-1:undefined))return!1;delete g[m]}for(m in g)if(s[m]===undefined||!n(undefined,a[m],s[m],i,a,c===!1?-1:undefined))return!1;return!0}return!1};t.Object.subsets=function(e,n,r){for(var i=n.length,a=[],s=0;i>s;s++){var o=n[s];t.Object.subset(e,o,r)&&a.push(o)}return a},t.Object.subset=function(t,e,r){r=r||{};for(var i in e)if(!n(t[i],e[i],r[i],t,e))return!1;return!0};var r={"null":function(){return!0},i:function(t,e){return(""+t).toLowerCase()===(""+e).toLowerCase()},eq:function(t,e){return t===e},similar:function(t,e){return t==e}};return r.eqeq=r.similar,t.Object}(__m2),__m45=function(t){var e=function(t,e){var n={};for(var r in t)n[r]="object"!=typeof t[r]||null===t[r]||t[r]instanceof Date?t[r]:e.attr(r);return n};return t.extend(t.Map.prototype,{backup:function(){return this._backupStore=this._attrs(),this},isDirty:function(e){return this._backupStore&&!t.Object.same(this._attrs(),this._backupStore,undefined,undefined,undefined,!!e)},restore:function(t){var n=t?this._backupStore:e(this._backupStore,this);return this.isDirty(t)&&this._attrs(n,!0),this}}),t.Map}(__m2,__m15,__m46),__m44=function(t){var e=function(e,n){var r,i,a=t.extend(!0,{},n);if(e)for(var s=0;e.length>s;s++){for(r=a,i=e[s].split(".");i.length>1;)r=r&&r[i.shift()];r&&delete r[i.shift()]}return a},n=function(e,n,r,i){this._changedAttrs=this._changedAttrs||[];var a,s,o=new t.Deferred,u=this,c=this.serialize(),l=this._requestQueue,f=this._changedAttrs;return a=function(t,e,n,r){return function(){return t.constructor._makeRequest([t,c],e||(t.isNew()?"create":"update"),n,r,i)}}(this,r,function(){o.resolveWith(u,arguments),l.splice(0,1),l.length>0?l[0]=l[0]():f.splice(0)},function(){o.rejectWith(u,arguments),l.splice(0),f.splice(0)}),s=l.push(a)-1,1===l.length&&(l[0]=l[0]()),o.abort=function(){var t;return t=l[s].abort&&l[s].abort(),l.splice(s),0===l.length&&f.splice(0),t},o.then(e,n),o},r=t.Model.prototype._triggerChange,i=t.Model.prototype.destroy,a=t.Model.prototype.setup;return t.each(["created","updated","destroyed"],function(n){var r=t.Model.prototype[n];t.Model.prototype[n]=function(t){t&&"object"==typeof t&&(t=t.attr?t.attr():t,this._backupStore=t,t=e(this._changedAttrs||[],t)),r.call(this,t)}}),t.extend(t.Model.prototype,{setup:function(){a.apply(this,arguments),this._requestQueue=new t.List},_triggerChange:function(t){this._changedAttrs&&this._changedAttrs.push(t),r.apply(this,arguments)},hasQueuedRequests:function(){return this._requestQueue.attr("length")>1},save:function(){return n.apply(this,arguments)},destroy:function(t,e){return this.isNew()?i.call(this,t,e):n.call(this,t,e,"destroy","destroyed")}}),t}(__m2,__m30,__m45),__m47=function(t){var e=t.isFunction,n=/xyz/.test(function(){return this.xyz})?/\b_super\b/:/.*/;return t.Construct._overwrite=function(t,r,i,a){t[i]=e(a)&&e(r[i])&&n.test(a)?function(t,e){return function(){var n,i=this._super;return this._super=r[t],n=e.apply(this,arguments),this._super=i,n}}(i,a):a},t.Construct._inherit=function(e,n,r){r=r||e;for(var i in e)t.Construct._overwrite(r,n,i,e[i])},t}(__m2,__m12),__m48=function(t){var e=(t.isFunction,t.isArray),n=t.makeArray,r=function(t){var r,i=n(arguments);return t=i.shift(),e(t)||(t=[t]),r=this,function(){for(var a,s,o=i.concat(n(arguments)),u=t.length,c=0;u>c;c++)s=t[c],s&&(a="string"==typeof s,o=(a?r[s]:s).apply(r,o||[]),u-1>c&&(o=!e(o)||o._use_call?[o]:o));return o}};t.Construct.proxy=t.Construct.prototype.proxy=r;for(var i=[t.Map,t.Control,t.Model],a=0;i.length>a;a++)i[a]&&(i[a].proxy=r);return t}(__m2,__m12),__m50=function(t){var e=t.bubble;return t.extend({},e,{childrenOf:function(t,n){t._nestedReference?t._nestedReference.each(function(r,i){r&&r.bind&&e.toParent(r,t,i(),n)}):e._each.apply(this,arguments)}})}(__m2,__m17),__m51=function(t){var e=function(t,e,n){for(var r,i=e.split("."),a=t;r=i.shift();)a=a[r],n&&n(a,r);return a},n=function(t){this.array=t};n.prototype.toString=function(){return""+t.inArray(this.item,this.array)};var r=function(t){this.root=t,this.references=[]};r.ArrIndex=n,t.extend(r.prototype,{make:function(r){var i,a=[];(t.isArray(this.root)||this.root instanceof t.LazyList)&&(i=new n(this.root)),e(this.root,r,function(e,r){i?(i.item=e,a.push(i),i=undefined):(a.push(r),t.isArray(e)&&(i=new n(e)))});var s=function(){return a.join(".")};return this.references.push(s),s},removeChildren:function(t,e){for(var n=0;this.references.length>n;){var r=this.references[n]();0===r.indexOf(t)?(e(this.get(r),r),this.references.splice(n,1)):n++}},get:function(t){return e(this.root,t)},each:function(e){var n=this;t.each(this.references,function(t){var r=t();e(n.get(r),t,r)})}}),t.NestedReference=r}(__m2),__m49=function(t,e){var n=null,r=function(t){return n&&n[t._cid]&&n[t._cid].instance};return t.LazyMap=t.Map.extend({_bubble:e},{setup:function(e){this.constructor.Map=this.constructor,this.constructor.List=t.LazyList,this._data=t.extend(t.extend(!0,{},this.constructor.defaults||{}),e),t.cid(this,".lazyMap"),this._init=1,this._setupComputes();var n=e&&t.Map.helpers.addToMap(e,this);this._nestedReference=new t.NestedReference(this._data),n&&n(),t.each(this._data,t.proxy(function(t,e){this.___set(e,t)},this)),this.bind("change",t.proxy(this._changes,this)),delete this._init},_addChild:function(t,n,r){var i=this;if(this._nestedReference.removeChildren(t,function(r,a){if(e.remove(i,r),n){var s=a.replace(t+".","");if(t===s)r._nestedReference.each(function(t,r){n._nestedReference.make(r()),i._bindings&&e.add(this,n,r())});else{var o=n._nestedReference.make(s);i._bindings&&e.add(r,n,o())}}}),r&&r(),n){var a=this._nestedReference.make(t);this._bindings&&e.add(this,n,a())}return n},removeAttr:function(e){var n=this._goto(e);return n.parts.length?n.value.removeAttr(n.parts.join(".")):(t.isArray(n.parent)?(n.parent.splice(n.prop,1),this._triggerChange(e,"remove",undefined,[this.__type(n.value,n.prop)])):n.parent[n.prop]&&(delete n.parent[n.prop],t.batch.trigger(this,n.path.length?n.path.join(".")+".__keys":"__keys"),this._triggerChange(e,"remove",undefined,this.__type(n.value,n.prop))),this._nestedReference.removeChildren(),n.value)},__type:function(e){if(!(e instanceof t.LazyMap)&&t.Map.helpers.canMakeObserve(e)){var n=r(e);if(n)return n;if(t.isArray(e)){var i=t.LazyList;return new i(e)}var a=this.constructor.Map||t.LazyMap;return new a(e)}return e},_goto:function(e,n){for(var r,i,a=t.Map.helpers.attrParts(e,n).slice(0),s=[],o=this instanceof t.List?this[a.shift()]:this.__get();o&&!t.Map.helpers.isObservable(o)&&a.length;)i!==undefined&&s.push(i),r=o,o=o[i=a.shift()];return{parts:a,prop:i,value:o,parent:r,path:s}},_get:function(e){var n=this._goto(e);if(t.Map.helpers.isObservable(n.value))return n.parts.length?n.value._get(n.parts):n.value;if(n.value&&t.Map.helpers.canMakeObserve(n.value)){var r=this.__type(n.value,n.prop);return this._addChild(e,r,function(){n.parent[n.prop]=r}),r}return n.value!==undefined?n.value:this.__get(e)},_set:function(e,n,r){var i=this._goto(e,r);if(t.Map.helpers.isObservable(i.value)&&i.parts.length)return i.value._set(i.parts,n);if(i.parts.length)throw"can.LazyMap: object does not exist";this.__set(e,n,i.value,i)},__set:function(e,n,r,i,a){if(a=a||!0,n!==r){var s=i.parent.hasOwnProperty(i.prop)?"set":"add";if(a&&t.Map.helpers.canMakeObserve(n)){n=this.__type(n,e);var o=this;this._addChild(e,n,function(){o.___set(e,n,i)})}else this.___set(e,n,i);"add"===s&&t.batch.trigger(this,i.path.length?i.path.join(".")+".__keys":"__keys",undefined),this._triggerChange(e,s,n,r)}},___set:function(e,n,r){this[e]&&this[e].isComputed&&t.isFunction(this.constructor.prototype[e])?this[e](n):r?r.parent[r.prop]=n:this._data[e]=n,t.isFunction(this.constructor.prototype[e])||(this[e]=n)},_attrs:function(e,n){if(e===undefined)return t.Map.helpers.serialize(this,"attr",{});e=t.extend({},e);var r,i,a,s=this;t.batch.start(),this.each(function(r,o){return a=e[o],i=s._goto(o,!0),a===undefined?(n&&s.removeAttr(o),undefined):(!t.Map.helpers.isObservable(r)&&t.Map.helpers.canMakeObserve(r)&&(r=s.attr(o)),s.__convert&&(a=s.__convert(o,a)),a instanceof t.Map?s.__set(o,a,r,i):t.Map.helpers.isObservable(r)&&t.Map.helpers.canMakeObserve(a)&&r.attr?r.attr(a,n):r!==a&&s.__set(o,a,r,i),delete e[o],undefined)});for(r in e)a=e[r],this._set(r,a,!0);return t.batch.stop(),this}}),t.LazyList=t.List.extend({Map:t.LazyMap},{setup:function(){t.List.prototype.setup.apply(this,arguments),this._nestedReference=new t.NestedReference(this)}}),t.LazyMap}(__m2,__m50,__m15,__m19,__m51),__m52=function(t){var e=function(t,e){var n,r=t.length,i=0,a=[];for(i;r>i;i++){if(n=e[i],"string"!=typeof n)return null;if("**"===t[i])return e.join(".");if("*"===t[i])a.push(n);else{if(n!==t[i])return null;a.push(n)}}return a.join(".")},n=function(n,r,i,a,s){var o,u,c,l,f,d=r.split("."),h=(this._observe_delegates||[]).slice(0);n.attr=r,n.lastAttr=d[d.length-1];for(var p=0;o=h[p++];)if(!(n.batchNum&&o.batchNum===n.batchNum||o.undelegated)){l=undefined,f=!0;for(var g=0;o.attrs.length>g;g++)u=o.attrs[g],c=e(u.parts,d),c&&(l=c),u.value&&f?f=u.value===""+this.attr(u.attr):f&&o.attrs.length>1&&(f=this.attr(u.attr)!==undefined);if(l&&f){var m=r.replace(l+".","");n.batchNum&&(o.batchNum=n.batchNum),"change"===o.event?(r=m,n.curAttr=l,o.callback.apply(this.attr(l),t.makeArray(arguments))):o.event===i?o.callback.apply(this.attr(l),[n,a,s,m]):"set"===o.event&&"add"===i&&o.callback.apply(this.attr(l),[n,a,s,m])}}};return t.extend(t.Map.prototype,{delegate:function(e,r,i){e=t.trim(e);for(var a,s=this._observe_delegates||(this._observe_delegates=[]),o=[],u=/([^\s=,]+)(?:=("[^",]*"|'[^',]*'|[^\s"',]*))?(,?)\s*/g;null!==(a=u.exec(e));)a[2]&&t.inArray(a[2].substr(0,1),['"',"'"])>=0&&(a[2]=a[2].substr(1,-1)),o.push({attr:a[1],parts:a[1].split("."),value:a[2],or:","===a[3]});return s.push({selector:e,attrs:o,callback:i,event:r}),1===s.length&&this.bind("change",n),this},undelegate:function(e,r,i){e=e&&t.trim(e);var a,s=0,o=this._observe_delegates||[];if(e)for(;o.length>s;)a=o[s],a.callback===i||!i&&a.selector===e?(a.undelegated=!0,o.splice(s,1)):s++;else o=[];return o.length||this.unbind("change",n),this}}),t.Map.prototype.delegate.matches=e,t.Map}(__m2,__m15),__m53=function(t){t.classize=function(e,n){for(var r=e.split(t.undHash),i=0;r.length>i;i++)r[i]=t.capitalize(r[i]);return r.join(n||"")};var e=t.classize,n=t.Map.prototype,r=n.__set;return n.__set=function(n,i,a,s,o){var u=e(n),c="set"+u,l=function(e){var r=o&&o.call(f,e);return r!==!1&&t.trigger(f,"error",[n,e],!0),!1},f=this;return this[c]?(t.batch.start(),i=this[c](i,function(t){r.call(f,n,t,a,s,l)},l),i===undefined?(t.batch.stop(),undefined):(r.call(f,n,i,a,s,l),t.batch.stop(),this)):(r.call(f,n,i,a,s,l),this)},t.Map}(__m2,__m15),__m54=function(t){t.each([t.Map,t.Model],function(e){if(e!==undefined){var n=function(t){return"object"==typeof t&&null!==t&&t};t.extend(e,{attributes:{},convert:{date:function(t){var e=typeof t;return"string"===e?(t=Date.parse(t),isNaN(t)?null:new Date(t)):"number"===e?new Date(t):t},number:function(t){return parseFloat(t)},"boolean":function(t){return"false"!==t&&"0"!==t&&t?!0:!1},"default":function(e,n,r,i){if(t.Map.prototype.isPrototypeOf(i.prototype)&&"function"==typeof i.model&&"function"==typeof i.models)return i[t.isArray(e)?"models":"model"](e);if(t.Map.prototype.isPrototypeOf(i.prototype))return t.isArray(e)&&"function"==typeof i.List?new i.List(e):new i(e);if("function"==typeof i)return i(e,n);var a,s=t.getObject(i),o=window;return i.indexOf(".")>=0&&(a=i.substring(0,i.lastIndexOf(".")),o=t.getObject(a)),"function"==typeof s?s.call(o,e,n):e}},serialize:{"default":function(t){return n(t)&&t.serialize?t.serialize():t},date:function(t){return t&&t.getTime()}}});var r=e.setup;e.setup=function(e,n,i){var a=this;r.call(a,e,n,i),t.each(["attributes"],function(t){a[t]&&e[t]!==a[t]||(a[t]={})}),t.each(["convert","serialize"],function(n){e[n]!==a[n]&&(a[n]=t.extend({},e[n],a[n]))})}}}),t.Map.prototype.__convert=function(t,e){var n,r,i=this.constructor,a=this.__get(t);return i.attributes&&(n=i.attributes[t],r=i.convert[n]||i.convert["default"]),null!==e&&n?r.call(i,e,a,function(){},n):e};var e=t.Map.helpers._serialize;t.Map.helpers._serialize=function(t,n,r){var i=t.constructor,a=i.attributes?i.attributes[n]:0,s=i.serialize?i.serialize[a]:0;return r&&"function"==typeof r.serialize?e.apply(this,arguments):s?s(r,a):e.apply(this,arguments)};var n=t.Map.prototype.serialize;return t.Map.prototype.serialize=function(t){var e=n.apply(this,arguments);return t?e[t]:e},t.Map}(__m2,__m15,__m19),__m55=function(t){var e=function(e,n,r){if(r||(r=n,n={}),n=n||{},e="string"==typeof e?[e]:t.makeArray(e),!n.testIf||n.testIf.call(this)){var i=this;t.each(e,function(t){i.validations[t]||(i.validations[t]=[]),i.validations[t].push(function(e){var i=r.call(this,e,t);return i===undefined?undefined:n.message||i})})}},n=t.Map.prototype.__set;return t.Map.prototype.__set=function(e,r,i,a,s){var o=this,u=o.constructor.validations,c=function(n){var r=s&&s.call(o,n);return r!==!1&&t.trigger(o,"error",[e,n],!0),!1};if(n.call(o,e,r,i,a,c),u&&u[e]){var l=o.errors(e);l&&c(l)}return this},t.each([t.Map,t.Model],function(n){if(n!==undefined){var r=n.setup;t.extend(n,{setup:function(t){r.apply(this,arguments),this.validations&&t.validations!==this.validations||(this.validations={})},validate:e,validationMessages:{format:"is invalid",inclusion:"is not a valid option (perhaps out of range)",lengthShort:"is too short",lengthLong:"is too long",presence:"can't be empty",range:"is out of range",numericality:"must be a number"},validateFormatOf:function(t,n,r){e.call(this,t,r,function(t){return t!==undefined&&null!==t&&""!==t&&null===(t+"").match(n)?this.constructor.validationMessages.format:undefined})},validateInclusionOf:function(t,n,r){e.call(this,t,r,function(t){if(t!==undefined){for(var e=0;n.length>e;e++)if(n[e]===t)return;return this.constructor.validationMessages.inclusion}})},validateLengthOf:function(t,n,r,i){e.call(this,t,i,function(t){return(t===undefined||null===t)&&n>0||t!==undefined&&null!==t&&n>t.length?this.constructor.validationMessages.lengthShort+" (min="+n+")":t!==undefined&&null!==t&&t.length>r?this.constructor.validationMessages.lengthLong+" (max="+r+")":undefined})},validatePresenceOf:function(t,n){e.call(this,t,n,function(t){return t===undefined||""===t||null===t?this.constructor.validationMessages.presence:undefined})},validateRangeOf:function(t,n,r,i){e.call(this,t,i,function(t){return(t===undefined||null===t)&&n>0||t!==undefined&&null!==t&&(n>t||t>r)?this.constructor.validationMessages.range+" ["+n+","+r+"]":undefined})},validatesNumericalityOf:function(t){e.call(this,t,function(t){var e=!isNaN(parseFloat(t))&&isFinite(t);return e?undefined:this.constructor.validationMessages.numericality})}})}}),t.extend(t.Map.prototype,{errors:function(e,n){e&&(e=t.isArray(e)?e:[e]);var r={},i=this,a=function(e,a){t.each(a,function(t){var a=t.call(i,o?i.__convert?i.__convert(e,n):n:i.attr(e));a&&(r[e]||(r[e]=[]),r[e].push(a))})},s=this.constructor.validations,o=e&&1===e.length&&2===arguments.length;return t.each(e||s||{},function(t,e){"number"==typeof e&&(e=t,t=s[e]),a(e,t||[])}),t.isEmptyObject(r)?null:o?r[e[0]]:r}}),t.Map}(__m2,__m15),__m56=function(t){return t.extend(t.List.prototype,{filter:function(e){var n=new this.constructor,r=this,i=function(i){var a=function(t,e){var r=n.indexOf(i);e||-1===r||n.splice(r,1),e&&-1===r&&n.push(i)},s=t.compute(function(){return e(i,r.indexOf(i),r)});s.bind("change",a),a(null,s())};return this.bind("add",function(e,n,r){t.each(n,function(t,e){i(t,r+e)})}),this.bind("remove",function(e,r){t.each(r,function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}),this.forEach(i),n},map:function(e){var n=new t.List,r=this,i=function(i,a){var s=t.compute(function(){return e(i,a,r)});s.bind("change",function(t,e){n.splice(a,1,e)}),n.splice(a,0,s())};return this.forEach(i),this.bind("add",function(e,n,r){t.each(n,function(t,e){i(t,r+e)})}),this.bind("remove",function(t,e,r){n.splice(r,e.length)}),n}}),t.List}(__m2,__m15,__m19,__m20),__m57=function(t){t.Map.helpers.define=function(t){var e=t.prototype.define;t.defaultGenerators={};for(var n in e)"value"in e[n]&&("function"==typeof e[n].value?t.defaultGenerators[n]=e[n].value:t.defaults[n]=e[n].value),"function"==typeof e[n].Value&&function(e){t.defaultGenerators[n]=function(){return new e}}(e[n].Value)};var e=t.Map.prototype._setupDefaults;t.Map.prototype._setupDefaults=function(){var t=e.call(this),n=this.constructor;for(var r in n.defaultGenerators)t[r]=n.defaultGenerators[r].call(this);return t};var n=t.Map.prototype,r=n.__set;n.__set=function(e,n,i,a,s){var o=function(n){var r=s&&s.call(u,n);return r!==!1&&t.trigger(u,"error",[e,n],!0),!1},u=this,c=this.define&&this.define[e],l=c&&c.set,f=c&&c.get;if(l){t.batch.start();var d=!1,h=l.call(this,n,function(t){r.call(u,e,t,i,a,o),d=!0},o);return f?(t.batch.stop(),undefined):h===undefined&&!d&&l.length>=2?(t.batch.stop(),undefined):(d||r.call(u,e,0===l.length&&h===undefined?n:h,i,a,o),t.batch.stop(),this)}return r.call(u,e,n,i,a,o),this};var i={date:function(t){var e=typeof t;return"string"===e?(t=Date.parse(t),isNaN(t)?null:new Date(t)):"number"===e?new Date(t):t},number:function(t){return+t},"boolean":function(t){return"false"!==t&&"0"!==t&&t?!0:!1},"*":function(t){return t},string:function(t){return""+t}},a=n.__type;n.__type=function(t,e){var n=this.define&&this.define[e],r=n&&n.type,s=n&&n.Type,o=t;return"string"==typeof r&&(r=i[r]),r||s?(r&&(o=r.call(this,o,e)),!s||o instanceof s||(o=new s(o)),o):a.call(this,o,e)};var s=n._remove;n._remove=function(e,n){var r,i=this.define&&this.define[e]&&this.define[e].remove;return i?(t.batch.start(),r=i.call(this,n),r===!1?(t.batch.stop(),undefined):(r=s.call(this,e,n),t.batch.stop(),r)):s.call(this,e,n)};var o=n._setupComputes;n._setupComputes=function(e){o.apply(this,arguments);for(var n in this.define){var r=this.define[n],i=r.get;i&&(this[n]=t.compute.async(e[n],i,this),this._computedBindings[n]={count:0})}};var u=t.Map.helpers._serialize;t.Map.helpers._serialize=function(t,e,n){return c(t,e,n)};var c=function(t,e,n){var r=t.define&&t.define[e]&&t.define[e].serialize;return r===undefined?u.apply(this,arguments):r!==!1?"function"==typeof r?r.call(t,n,e):u.apply(this,arguments):undefined},l=n.serialize;return n.serialize=function(t){var e=l.apply(this,arguments);if(t)return e;var n,r;for(var i in this.define)i in e||(n=this.define&&this.define[i]&&this.define[i].serialize,n&&(r=c(this,i,this.attr(i)),r!==undefined&&(e[i]=r)));return e},t.Map}(__m2,__m14),__m58=function(t){var e=t.List._bubbleRule;if(t.List._bubbleRule=function(t,n){return n.comparator?"change":e.apply(this,arguments)},t.Model){var n=t.Model.List._bubbleRule;t.Model.List._bubbleRule=function(t,e){return e.comparator?"change":n.apply(this,arguments)}}var r=t.List.prototype,i=r._changes,a=r.setup;t.extend(r,{comparator:undefined,sortIndexes:[],sortedIndex:function(t){for(var e=t.attr(this.comparator),n=0,r=0,i=this.length;i>r;r++)if(t!==this[r]){if(this[r].attr(this.comparator)>=e)return r+n}else n=-1;return r+n},sort:function(e,n){var r=this.comparator,i=r?[function(t,e){return t="function"==typeof t[r]?t[r]():t[r],e="function"==typeof e[r]?e[r]():e[r],t===e?0:e>t?-1:1}]:[e];return n||t.trigger(this,"reset"),Array.prototype.sort.apply(this,i)}});var s=function(e){return e[0]&&t.isArray(e[0])?e[0]:t.makeArray(e)};return t.each({push:"length",unshift:0},function(e,n){var r=t.List.prototype,i=r[n];r[n]=function(){var n=s(arguments),r=e?this.length:0,a=i.apply(this,arguments);return this.comparator&&n.length&&(this.sort(null,!0),t.batch.trigger(this,"reset",[n]),this._triggerChange(""+r,"add",n,undefined)),a}}),r._changes=function(e,n,r,a,s){if(this.comparator&&/^\d+./.test(n)){var o=+/^\d+/.exec(n)[0],u=this[o];if(u!==undefined){var c=this.sortedIndex(u);if(c!==o)return[].splice.call(this,o,1),[].splice.call(this,c,0,u),t.trigger(this,"move",[u,c,o]),t.trigger(this,"change",[n.replace(/^\d+/,c),r,a,s]),undefined}}i.apply(this,arguments)},r.setup=function(){a.apply(this,arguments),this.comparator&&this.sort()},t.Map}(__m2,__m19),__m59=function(t,e){var n,r=function(t,e){var r=t.constructor.pluginName||t.constructor._shortName;for(n=0;e.length>n;n++)if("string"==typeof e[n]?r===e[n]:t instanceof e[n])return!0;return!1},i=e.makeArray,a=e.Control.setup;return e.Control.setup=function(){if(this!==e.Control){var t=this.pluginName||this._fullName;"can_control"!==t&&this.plugin(t),a.apply(this,arguments)}},t.fn.extend({controls:function(){var t,n,a=i(arguments),s=[];return this.each(function(){if(t=e.$(this).data("controls"))for(var i=0;t.length>i;i++)n=t[i],(!a.length||r(n,a))&&s.push(n)}),s},control:function(){return this.controls.apply(this,arguments)[0]}}),e.Control.plugin=function(n){var r=this;t.fn[n]||(t.fn[n]=function(n){var a,s=i(arguments),o="string"==typeof n&&t.isFunction(r.prototype[n]),u=s[0];return this.each(function(){var t=e.$(this).control(r);t?o?a=t[u].apply(t,s.slice(1)):t.update.apply(t,s):r.newInstance.apply(r,[this].concat(s))}),a!==undefined?a:this})},e.Control.prototype.update=function(t){e.extend(this.options,t),this.on()},e}(jQuery,__m2,__m11),__m60=function(t,e){var n,r,i,a,s,o,u={val:!0,text:!0};return n=function(n){var a=t.fn[n];t.fn[n]=function(){var t,s,c,l=e.makeArray(arguments),f=this;if(e.isDeferred(l[0]))return l[0].done(function(t){r.call(f,[t],a)}),this;if(i(l)){if(t=o(l))return s=l[t],l[t]=function(t){r.call(f,[t],a),s.call(f,t)},e.view.apply(e.view,l),this;if(c=e.view.apply(e.view,l),e.isDeferred(c))return c.done(function(t){r.call(f,[t],a)}),this;l=[c]}return u[n]?a.apply(this,l):r.call(this,l,a)}},r=function(t,n){var r;for(var i in e.view.hookups)break;return i&&t[0]&&a(t[0])&&(t[0]=e.view.frag(t[0]).childNodes),r=n.apply(this,t)},i=function(t){var e=typeof t[1];return"string"==typeof t[0]&&("object"===e||"function"===e)&&!s(t[1])},s=function(t){return t.nodeType||t[0]&&t[0].nodeType},a=function(t){return s(t)?!0:"string"==typeof t?(t=e.trim(t),"<"===t.substr(0,1)&&">"===t.substr(t.length-1,1)&&t.length>=3):!1},o=function(t){return"function"==typeof t[3]?3:"function"==typeof t[2]&&2},t.fn.hookup=function(){return e.view.frag(this),this},e.each(["prepend","append","after","before","text","html","replaceWith","val"],function(t){n(t)}),e}(jQuery,__m2,__m10),__m61=function(t){if(!t.Object)throw Error("can.fixture depends on can.Object. Please include it before can.fixture.");var e=function(e){return"undefined"!=typeof steal?t.isFunction(steal.config)?""+steal.config().root.mapJoin(e):""+steal.root.join(e):(t.fixture.rootUrl||"")+e},n=function(n,r){if(t.fixture.on){var i=function(){};n.type=n.type||n.method||"GET";var a=u(n);if(!n.fixture)return"file:"===window.location.protocol&&i("ajax request to "+n.url+", no fixture found"),undefined;if("string"==typeof n.fixture&&t.fixture[n.fixture]&&(n.fixture=t.fixture[n.fixture]),"string"==typeof n.fixture){var s=n.fixture;/^\/\//.test(s)&&(s=e(n.fixture.substr(2))),a&&(s=t.sub(s,a)),delete n.fixture,n.url=s,n.data=null,n.type="GET",n.error||(n.error=function(t,e,n){throw"fixtures.js Error "+e+" "+n})}else n.dataTypes&&n.dataTypes.splice(0,0,"fixture"),a&&r&&(r.data=r.data||{},t.extend(r.data,a))}},r=function(t,e,n,r){return"number"!=typeof t&&(r=e,n=t,e="success",t=200),"string"!=typeof e&&(r=n,n=e,e="success"),t>=400&&599>=t&&(this.dataType="text"),[t,e,i(this,n),r]},i=function(t,e){var n=t.dataTypes?t.dataTypes[0]:t.dataType||"json";if(!e||!e[n]){var r={};r[n]=e,e=r}return e};if(t.ajaxPrefilter&&t.ajaxTransport)t.ajaxPrefilter(n),t.ajaxTransport("fixture",function(e,n){e.dataTypes.shift();var a,s=!1;return{send:function(o,u){a=setTimeout(function(){var t=function(){s===!1&&u.apply(null,r.apply(e,arguments))},a=e.fixture(n,t,o,e);a!==undefined&&u(200,"success",i(e,a),{})},t.fixture.delay)},abort:function(){s=!0,clearTimeout(a)}}});else{var a=t.ajax;t.ajax=function(e){if(n(e,e),e.fixture){var i,s=new t.Deferred,o=!1;return s.getResponseHeader=function(){},s.then(e.success,e.fail),s.abort=function(){clearTimeout(i),o=!0,s.reject(s)},i=setTimeout(function(){var t=function(){var t=r.apply(e,arguments),n=t[0];(n>=200&&300>n||304===n)&&o===!1?s.resolve(t[2][e.dataType]):s.reject(s,"error",t[1])},n=e.fixture(e,t,e.headers,e);n!==undefined&&s.resolve(n)},t.fixture.delay),s}return a(e)}}var s=[],o=function(t,e){for(var n=0;s.length>n;n++)if(l._similar(t,s[n],e))return n;return-1},u=function(t){var e=o(t);return e>-1?(t.fixture=s[e].fixture,l._getData(s[e].url,t.url)):undefined},c=function(t){var e=t.data.id;return e===undefined&&"number"==typeof t.data&&(e=t.data),e===undefined&&t.url.replace(/\/(\d+)(\/|$|\.)/g,function(t,n){e=n}),e===undefined&&(e=t.url.replace(/\/(\w+)(\/|$|\.)/g,function(t,n){"update"!==n&&(e=n)})),e===undefined&&(e=Math.round(1e3*Math.random())),e},l=t.fixture=function(e,n){if(n!==undefined){if("string"==typeof e){var r=e.match(/(GET|POST|PUT|DELETE) (.+)/i);e=r?{url:r[2],type:r[1]}:{url:e}}var i=o(e,!!n);if(i>-1&&s.splice(i,1),null==n)return;e.fixture=n,s.push(e)}else t.each(e,function(t,e){l(e,t)})},f=t.replacer;return t.extend(t.fixture,{_similar:function(e,n,r){return r?t.Object.same(e,n,{fixture:null}):t.Object.subset(e,n,t.fixture._compare)},_compare:{url:function(t,e){return!!l._getData(e,t)},fixture:null,type:"i"},_getData:function(e,n){var r=[],i=e.replace(".","\\.").replace("?","\\?"),a=RegExp(i.replace(f,function(t,e){return r.push(e),"([^/]+)"
})+"$").exec(n),s={};return a?(a.shift(),t.each(r,function(t){s[t]=a.shift()}),s):null},store:function(e,n,r){var i,a,s,o=0,u=function(t){for(var e=0;a.length>e;e++)if(t==a[e].id)return a[e]},l={};if(t.isArray(e)&&"string"==typeof e[0]?(i=e,e=n,n=r,r=arguments[3]):"string"==typeof e&&(i=[e+"s",e],e=n,n=r,r=arguments[3]),"number"==typeof e)a=[],s=function(){a=[];for(var r=0;e>r;r++){var s=n(r,a);s.id||(s.id=r),o=Math.max(s.id+1,o+1)||a.length,a.push(s)}t.isArray(i)&&(t.fixture["~"+i[0]]=a,t.fixture["-"+i[0]]=l.findAll,t.fixture["-"+i[1]]=l.findOne,t.fixture["-"+i[1]+"Update"]=l.update,t.fixture["-"+i[1]+"Destroy"]=l.destroy,t.fixture["-"+i[1]+"Create"]=l.create)};else{r=n;var f=e;s=function(){a=f.slice(0)}}return t.extend(l,{findAll:function(e){e=e||{};var n=a.slice(0);e.data=e.data||{},t.each((e.data.order||[]).slice(0).reverse(),function(t){var e=t.split(" ");n=n.sort(function(t,n){return"ASC"!==e[1].toUpperCase()?t[e[0]]<n[e[0]]?1:t[e[0]]===n[e[0]]?0:-1:t[e[0]]<n[e[0]]?-1:t[e[0]]===n[e[0]]?0:1})}),t.each((e.data.group||[]).slice(0).reverse(),function(t){var e=t.split(" ");n=n.sort(function(t,n){return t[e[0]]>n[e[0]]})});var i=parseInt(e.data.offset,10)||0,s=parseInt(e.data.limit,10)||a.length-i,o=0;for(var u in e.data)if(o=0,e.data[u]!==undefined&&(-1!==u.indexOf("Id")||-1!==u.indexOf("_id")))for(;n.length>o;)e.data[u]!=n[o][u]?n.splice(o,1):o++;if("function"==typeof r)for(o=0;n.length>o;)r(n[o],e)?o++:n.splice(o,1);else if("object"==typeof r)for(o=0;n.length>o;)t.Object.subset(n[o],e.data,r)?o++:n.splice(o,1);return{count:n.length,limit:e.data.limit,offset:e.data.offset,data:n.slice(i,i+s)}},findOne:function(t,e){var n=u(c(t));return n===undefined?e(404,"Requested resource not found"):(e(n),undefined)},update:function(e,n){var r=c(e),i=u(r);return i===undefined?n(404,"Requested resource not found"):(t.extend(i,e.data),n({id:r},{location:e.url||"/"+c(e)}),undefined)},destroy:function(t,e){var n=c(t),r=u(n);if(r===undefined)return e(404,"Requested resource not found");for(var i=0;a.length>i;i++)if(a[i].id==n){a.splice(i,1);break}return{}},create:function(e,r){var i=n(a.length,a);t.extend(i,e.data),i.id||(i.id=o++),a.push(i),r({id:i.id},{location:e.url+"/"+i.id})}}),s(),t.extend({getId:c,find:function(t){return u(c(t))},reset:s},l)},rand:function d(t,e,n){if("number"==typeof t)return"number"==typeof e?t+Math.floor(Math.random()*(e-t)):Math.floor(Math.random()*t);var r=d;if(e===undefined)return r(t,r(t.length+1));var i=[];t=t.slice(0),n||(n=e),n=e+Math.round(r(n-e));for(var a=0;n>a;a++)i.push(t.splice(r(t.length),1)[0]);return i},xhr:function(e){return t.extend({},{abort:t.noop,getAllResponseHeaders:function(){return""},getResponseHeader:function(){return""},open:t.noop,overrideMimeType:t.noop,readyState:4,responseText:"",responseXML:null,send:t.noop,setRequestHeader:t.noop,status:200,statusText:"OK"},e)},on:!0}),t.fixture.delay=200,t.fixture.rootUrl=e(""),t.fixture["-handleFunction"]=function(e){return"string"==typeof e.fixture&&t.fixture[e.fixture]&&(e.fixture=t.fixture[e.fixture]),"function"==typeof e.fixture?(setTimeout(function(){e.success&&e.success.apply(null,e.fixture(e,"success")),e.complete&&e.complete.apply(null,e.fixture(e,"complete"))},t.fixture.delay),!0):!1},t.fixture.overwrites=s,t.fixture.make=t.fixture.store,t.fixture}(__m2,__m13,__m46);window.can=__m4})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/local/js/libs/nouislider.min.js?144732016520274";s:6:"source";s:32:"/local/js/libs/nouislider.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! nouislider - 8.0.2 - 2015-07-06 13:22:09 */

!function (a) {
    if ("function" == typeof define && define.amd)define([], a); else if ("object" == typeof exports) {
        var b = require("fs");
        module.exports = a(), module.exports.css = function () {
            return b.readFileSync(__dirname + "/nouislider.min.css", "utf8")
        }
    } else window.noUiSlider = a()
}(function () {
    "use strict";
    function a(a) {
        return a.filter(function (a) {
            return this[a] ? !1 : this[a] = !0
        }, {})
    }

    function b(a, b) {
        return Math.round(a / b) * b
    }

    function c(a) {
        var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.defaultView || c.parentWindow, e = c.documentElement, f = d.pageXOffset;
        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f = 0), {
            top: b.top + d.pageYOffset - e.clientTop,
            left: b.left + f - e.clientLeft
        }
    }

    function d(a) {
        return "number" == typeof a && !isNaN(a) && isFinite(a)
    }

    function e(a) {
        var b = Math.pow(10, 7);
        return Number((Math.round(a * b) / b).toFixed(7))
    }

    function f(a, b, c) {
        j(a, b), setTimeout(function () {
            k(a, b)
        }, c)
    }

    function g(a) {
        return Math.max(Math.min(a, 100), 0)
    }

    function h(a) {
        return Array.isArray(a) ? a : [a]
    }

    function i(a) {
        var b = a.split(".");
        return b.length > 1 ? b[1].length : 0
    }

    function j(a, b) {
        a.classList ? a.classList.add(b) : a.className += " " + b
    }

    function k(a, b) {
        a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function l(a, b) {
        a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className)
    }

    function m(a, b) {
        return 100 / (b - a)
    }

    function n(a, b) {
        return 100 * b / (a[1] - a[0])
    }

    function o(a, b) {
        return n(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0])
    }

    function p(a, b) {
        return b * (a[1] - a[0]) / 100 + a[0]
    }

    function q(a, b) {
        for (var c = 1; a >= b[c];)c += 1;
        return c
    }

    function r(a, b, c) {
        if (c >= a.slice(-1)[0])return 100;
        var d, e, f, g, h = q(c, a);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + o([d, e], c) / m(f, g)
    }

    function s(a, b, c) {
        if (c >= 100)return a.slice(-1)[0];
        var d, e, f, g, h = q(c, b);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], p([d, e], (c - f) * m(f, g))
    }

    function t(a, c, d, e) {
        if (100 === e)return e;
        var f, g, h = q(e, a);
        return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e
    }

    function u(a, b, c) {
        var e;
        if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");
        if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");
        c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1])
    }

    function v(a, b, c) {
        return b ? void(c.xSteps[a] = n([c.xVal[a], c.xVal[a + 1]], b) / m(c.xPct[a], c.xPct[a + 1])) : !0
    }

    function w(a, b, c, d) {
        this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c;
        var e, f = [];
        for (e in a)a.hasOwnProperty(e) && f.push([a[e], e]);
        for (f.sort(function (a, b) {
            return a[0] - b[0]
        }), e = 0; e < f.length; e++)u(f[e][1], f[e][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++)v(e, this.xNumSteps[e], this)
    }

    function x(a, b) {
        if (!d(b))throw new Error("noUiSlider: 'step' is not numeric.");
        a.singleStep = b
    }

    function y(a, b) {
        if ("object" != typeof b || Array.isArray(b))throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === b.min || void 0 === b.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        a.spectrum = new w(b, a.snap, a.dir, a.singleStep)
    }

    function z(a, b) {
        if (b = h(b), !Array.isArray(b) || !b.length || b.length > 2)throw new Error("noUiSlider: 'start' option is incorrect.");
        a.handles = b.length, a.start = b
    }

    function A(a, b) {
        if (a.snap = b, "boolean" != typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function B(a, b) {
        if (a.animate = b, "boolean" != typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function C(a, b) {
        if ("lower" === b && 1 === a.handles)a.connect = 1; else if ("upper" === b && 1 === a.handles)a.connect = 2; else if (b === !0 && 2 === a.handles)a.connect = 3; else {
            if (b !== !1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            a.connect = 0
        }
    }

    function D(a, b) {
        switch (b) {
            case"horizontal":
                a.ort = 0;
                break;
            case"vertical":
                a.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function E(a, b) {
        if (!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (a.margin = a.spectrum.getMargin(b), !a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function F(a, b) {
        if (!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (a.limit = a.spectrum.getMargin(b), !a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }

    function G(a, b) {
        switch (b) {
            case"ltr":
                a.dir = 0;
                break;
            case"rtl":
                a.dir = 1, a.connect = [0, 2, 1, 3][a.connect];
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function H(a, b) {
        if ("string" != typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = b.indexOf("tap") >= 0, d = b.indexOf("drag") >= 0, e = b.indexOf("fixed") >= 0, f = b.indexOf("snap") >= 0;
        a.events = {tap: c || f, drag: d, fixed: e, snap: f}
    }

    function I(a, b) {
        if (a.format = b, "function" == typeof b.to && "function" == typeof b.from)return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function J(a) {
        var b, c = {margin: 0, limit: 0, animate: !0, format: U};
        b = {
            step: {r: !1, t: x},
            start: {r: !0, t: z},
            connect: {r: !0, t: C},
            direction: {r: !0, t: G},
            snap: {r: !1, t: A},
            animate: {r: !1, t: B},
            range: {r: !0, t: y},
            orientation: {r: !1, t: D},
            margin: {r: !1, t: E},
            limit: {r: !1, t: F},
            behaviour: {r: !0, t: H},
            format: {r: !1, t: I}
        };
        var d = {connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal"};
        return Object.keys(d).forEach(function (b) {
            void 0 === a[b] && (a[b] = d[b])
        }), Object.keys(b).forEach(function (d) {
            var e = b[d];
            if (void 0 === a[d]) {
                if (e.r)throw new Error("noUiSlider: '" + d + "' is required.");
                return !0
            }
            e.t(c, a[d])
        }), c.pips = a.pips, c.style = c.ort ? "top" : "left", c
    }

    function K(a, b, c) {
        var d = a + b[0], e = a + b[1];
        return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [g(d), g(e)]) : [d, e]
    }

    function L(a) {
        a.preventDefault();
        var b, c, d = 0 === a.type.indexOf("touch"), e = 0 === a.type.indexOf("mouse"), f = 0 === a.type.indexOf("pointer"), g = a;
        return 0 === a.type.indexOf("MSPointer") && (f = !0), d && (b = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY), (e || f) && (b = a.clientX + window.pageXOffset, c = a.clientY + window.pageYOffset), g.points = [b, c], g.cursor = e || f, g
    }

    function M(a, b) {
        var c = document.createElement("div"), d = document.createElement("div"), e = ["-lower", "-upper"];
        return a && e.reverse(), j(d, T[3]), j(d, T[3] + e[b]), j(c, T[2]), c.appendChild(d), c
    }

    function N(a, b, c) {
        switch (a) {
            case 1:
                j(b, T[7]), j(c[0], T[6]);
                break;
            case 3:
                j(c[1], T[6]);
            case 2:
                j(c[0], T[7]);
            case 0:
                j(b, T[6])
        }
    }

    function O(a, b, c) {
        var d, e = [];
        for (d = 0; a > d; d += 1)e.push(c.appendChild(M(b, d)));
        return e
    }

    function P(a, b, c) {
        j(c, T[0]), j(c, T[8 + a]), j(c, T[4 + b]);
        var d = document.createElement("div");
        return j(d, T[1]), c.appendChild(d), d
    }

    function Q(b, d) {
        function e(a, b, c) {
            if ("range" === a || "steps" === a)return M.xVal;
            if ("count" === a) {
                var d, e = 100 / (b - 1), f = 0;
                for (b = []; (d = f++ * e) <= 100;)b.push(d);
                a = "positions"
            }
            return "positions" === a ? b.map(function (a) {
                return M.fromStepping(c ? M.getStep(a) : a)
            }) : "values" === a ? c ? b.map(function (a) {
                return M.fromStepping(M.getStep(M.toStepping(a)))
            }) : b : void 0
        }

        function m(b, c, d) {
            var e = M.direction, f = {}, g = M.xVal[0], h = M.xVal[M.xVal.length - 1], i = !1, j = !1, k = 0;
            return M.direction = 0, d = a(d.slice().sort(function (a, b) {
                return a - b
            })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function (a, e) {
                var g, h, l, m, n, o, p, q, r, s, t = a, u = d[e + 1];
                if ("steps" === c && (g = M.xNumSteps[e]), g || (g = u - t), t !== !1 && void 0 !== u)for (h = t; u >= h; h += g) {
                    for (m = M.toStepping(h), n = m - k, q = n / b, r = Math.round(q), s = n / r, l = 1; r >= l; l += 1)o = k + l * s, f[o.toFixed(5)] = ["x", 0];
                    p = d.indexOf(h) > -1 ? 1 : "steps" === c ? 2 : 0, !e && i && (p = 0), h === u && j || (f[m.toFixed(5)] = [h, p]), k = m
                }
            }), M.direction = e, f
        }

        function n(a, b, c) {
            function e(a) {
                return ["-normal", "-large", "-sub"][a]
            }

            function f(a, b, c) {
                return 'class="' + b + " " + b + "-" + h + " " + b + e(c[1]) + '" style="' + d.style + ": " + a + '%"'
            }

            function g(a, d) {
                M.direction && (a = 100 - a), d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i.innerHTML += "<div " + f(a, "noUi-marker", d) + "></div>", d[1] && (i.innerHTML += "<div " + f(a, "noUi-value", d) + ">" + c.to(d[0]) + "</div>")
            }

            var h = ["horizontal", "vertical"][d.ort], i = document.createElement("div");
            return j(i, "noUi-pips"), j(i, "noUi-pips-" + h), Object.keys(a).forEach(function (b) {
                g(b, a[b])
            }), i
        }

        function o(a) {
            var b = a.mode, c = a.density || 1, d = a.filter || !1, f = a.values || !1, g = a.stepped || !1, h = e(b, f, g), i = m(c, b, h), j = a.format || {to: Math.round};
            return I.appendChild(n(i, d, j))
        }

        function p() {
            return G["offset" + ["Width", "Height"][d.ort]]
        }

        function q(a, b) {
            void 0 !== b && (b = Math.abs(b - d.dir)), Object.keys(R).forEach(function (c) {
                var d = c.split(".")[0];
                a === d && R[c].forEach(function (a) {
                    a(h(B()), b, r(Array.prototype.slice.call(Q)))
                })
            })
        }

        function r(a) {
            return 1 === a.length ? a[0] : d.dir ? a.reverse() : a
        }

        function s(a, b, c, e) {
            var f = function (b) {
                return I.hasAttribute("disabled") ? !1 : l(I, T[14]) ? !1 : (b = L(b), a === S.start && void 0 !== b.buttons && b.buttons > 1 ? !1 : (b.calcPoint = b.points[d.ort], void c(b, e)))
            }, g = [];
            return a.split(" ").forEach(function (a) {
                b.addEventListener(a, f, !1), g.push([a, f])
            }), g
        }

        function t(a, b) {
            var c, d, e = b.handles || H, f = !1, g = 100 * (a.calcPoint - b.start) / p(), h = e[0] === H[0] ? 0 : 1;
            if (c = K(g, b.positions, e.length > 1), f = y(e[0], c[h], 1 === e.length), e.length > 1) {
                if (f = y(e[1], c[h ? 0 : 1], !1) || f)for (d = 0; d < b.handles.length; d++)q("slide", d)
            } else f && q("slide", h)
        }

        function u(a, b) {
            var c = G.getElementsByClassName(T[15]), d = b.handles[0] === H[0] ? 0 : 1;
            c.length && k(c[0], T[15]), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
            var e = document.documentElement;
            e.noUiListeners.forEach(function (a) {
                e.removeEventListener(a[0], a[1])
            }), k(I, T[12]), q("set", d), q("change", d)
        }

        function v(a, b) {
            var c = document.documentElement;
            if (1 === b.handles.length && (j(b.handles[0].children[0], T[15]), b.handles[0].hasAttribute("disabled")))return !1;
            a.stopPropagation();
            var d = s(S.move, c, t, {
                start: a.calcPoint,
                handles: b.handles,
                positions: [J[0], J[H.length - 1]]
            }), e = s(S.end, c, u, {handles: b.handles});
            if (c.noUiListeners = d.concat(e), a.cursor) {
                document.body.style.cursor = getComputedStyle(a.target).cursor, H.length > 1 && j(I, T[12]);
                var f = function () {
                    return !1
                };
                document.body.noUiListener = f, document.body.addEventListener("selectstart", f, !1)
            }
        }

        function w(a) {
            var b, e, g = a.calcPoint, h = 0;
            return a.stopPropagation(), H.forEach(function (a) {
                h += c(a)[d.style]
            }), b = h / 2 > g || 1 === H.length ? 0 : 1, g -= c(G)[d.style], e = 100 * g / p(), d.events.snap || f(I, T[14], 300), H[b].hasAttribute("disabled") ? !1 : (y(H[b], e), q("slide", b), q("set", b), q("change", b), void(d.events.snap && v(a, {handles: [H[h]]})))
        }

        function x(a) {
            var b, c;
            if (!a.fixed)for (b = 0; b < H.length; b += 1)s(S.start, H[b].children[0], v, {handles: [H[b]]});
            a.tap && s(S.start, G, w, {handles: H}), a.drag && (c = [G.getElementsByClassName(T[7])[0]], j(c[0], T[10]), a.fixed && c.push(H[c[0] === H[0] ? 1 : 0].children[0]), c.forEach(function (a) {
                s(S.start, a, v, {handles: H})
            }))
        }

        function y(a, b, c) {
            var e = a !== H[0] ? 1 : 0, f = J[0] + d.margin, h = J[1] - d.margin, i = J[0] + d.limit, l = J[1] - d.limit;
            return H.length > 1 && (b = e ? Math.max(b, f) : Math.min(b, h)), c !== !1 && d.limit && H.length > 1 && (b = e ? Math.min(b, i) : Math.max(b, l)), b = M.getStep(b), b = g(parseFloat(b.toFixed(7))), b === J[e] ? !1 : (a.style[d.style] = b + "%", a.previousSibling || (k(a, T[17]), b > 50 && j(a, T[17])), J[e] = b, Q[e] = M.fromStepping(b), q("update", e), !0)
        }

        function z(a, b) {
            var c, e, f;
            for (d.limit && (a += 1), c = 0; a > c; c += 1)e = c % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = d.format.from(f), (f === !1 || isNaN(f) || y(H[e], M.toStepping(f), c === 3 - d.dir) === !1) && q("update", e))
        }

        function A(a) {
            var b, c, e = h(a);
            for (d.dir && d.handles > 1 && e.reverse(), d.animate && -1 !== J[0] && f(I, T[14], 300), b = H.length > 1 ? 3 : 1, 1 === e.length && (b = 1), z(b, e), c = 0; c < H.length; c++)q("set", c)
        }

        function B() {
            var a, b = [];
            for (a = 0; a < d.handles; a += 1)b[a] = d.format.to(Q[a]);
            return r(b)
        }

        function C() {
            T.forEach(function (a) {
                a && k(I, a)
            }), I.innerHTML = "", delete I.noUiSlider
        }

        function D() {
            var a = J.map(function (a, b) {
                var c = M.getApplicableStep(a), d = i(String(c[2])), e = Q[b], f = 100 === a ? null : c[2], g = Number((e - c[2]).toFixed(d)), h = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
                return [h, f]
            });
            return r(a)
        }

        function E(a, b) {
            R[a] = R[a] || [], R[a].push(b), "update" === a.split(".")[0] && H.forEach(function (a, b) {
                q("update", b)
            })
        }

        function F(a) {
            var b = a.split(".")[0], c = a.substring(b.length);
            Object.keys(R).forEach(function (a) {
                var d = a.split(".")[0], e = a.substring(d.length);
                b && b !== d || c && c !== e || delete R[a]
            })
        }

        var G, H, I = b, J = [-1, -1], M = d.spectrum, Q = [], R = {};
        if (I.noUiSlider)throw new Error("Slider was already initialized.");
        return G = P(d.dir, d.ort, I), H = O(d.handles, d.dir, G), N(d.connect, I, H), x(d.events), d.pips && o(d.pips), {
            destroy: C,
            steps: D,
            on: E,
            off: F,
            get: B,
            set: A
        }
    }

    function R(a, b) {
        if (!a.nodeName)throw new Error("noUiSlider.create requires a single element.");
        var c = J(b, a), d = Q(a, c);
        d.set(c.start), a.noUiSlider = d
    }

    var S = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
    } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
    }, T = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
    w.prototype.getMargin = function (a) {
        return 2 === this.xPct.length ? n(this.xVal, a) : !1
    }, w.prototype.toStepping = function (a) {
        return a = r(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a
    }, w.prototype.fromStepping = function (a) {
        return this.direction && (a = 100 - a), e(s(this.xVal, this.xPct, a))
    }, w.prototype.getStep = function (a) {
        return this.direction && (a = 100 - a), a = t(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a
    }, w.prototype.getApplicableStep = function (a) {
        var b = q(a, this.xPct), c = 100 === a ? 2 : 1;
        return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]]
    }, w.prototype.convert = function (a) {
        return this.getStep(this.toStepping(a))
    };
    var U = {
        to: function (a) {
            return a.toFixed(2)
        }, from: Number
    };
    return {create: R}
});

;
; 
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/js/libs/jquery.cycle2.min.js?144732016522940";s:6:"source";s:35:"/local/js/libs/jquery.cycle2.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
!function(a){"use strict";function b(a){return(a||"").toLowerCase()}var c="2.1.6";a.fn.cycle=function(c){var d;return 0!==this.length||a.isReady?this.each(function(){var d,e,f,g,h=a(this),i=a.fn.cycle.log;if(!h.data("cycle.opts")){(h.data("cycle-log")===!1||c&&c.log===!1||e&&e.log===!1)&&(i=a.noop),i("--c2 init--"),d=h.data();for(var j in d)d.hasOwnProperty(j)&&/^cycle[A-Z]+/.test(j)&&(g=d[j],f=j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(f+":",g,"("+typeof g+")"),d[f]=g);e=a.extend({},a.fn.cycle.defaults,d,c||{}),e.timeoutId=0,e.paused=e.paused||!1,e.container=h,e._maxZ=e.maxZ,e.API=a.extend({_container:h},a.fn.cycle.API),e.API.log=i,e.API.trigger=function(a,b){return e.container.trigger(a,b),e.API},h.data("cycle.opts",e),h.data("cycle.API",e.API),e.API.trigger("cycle-bootstrap",[e,e.API]),e.API.addInitialSlides(),e.API.preInitSlideshow(),e.slides.length&&e.API.initSlideshow()}}):(d={s:this.selector,c:this.context},a.fn.cycle.log("requeuing slideshow (dom not ready)"),a(function(){a(d.s,d.c).cycle(c)}),this)},a.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var b=this.opts(),c=b.slides;b.slideCount=0,b.slides=a(),c=c.jquery?c:b.container.find(c),b.random&&c.sort(function(){return Math.random()-.5}),b.API.add(c)},preInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-pre-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.preInit)&&c.preInit(b),b._preInitialized=!0},postInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-post-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.postInit)&&c.postInit(b)},initSlideshow:function(){var b,c=this.opts(),d=c.container;c.API.calcFirstSlide(),"static"==c.container.css("position")&&c.container.css("position","relative"),a(c.slides[c.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),c.API.stackSlides(c.slides[c.currSlide],c.slides[c.nextSlide],!c.reverse),c.pauseOnHover&&(c.pauseOnHover!==!0&&(d=a(c.pauseOnHover)),d.hover(function(){c.API.pause(!0)},function(){c.API.resume(!0)})),c.timeout&&(b=c.API.getSlideOpts(c.currSlide),c.API.queueTransition(b,b.timeout+c.delay)),c._initialized=!0,c.API.updateView(!0),c.API.trigger("cycle-initialized",[c]),c.API.postInitSlideshow()},pause:function(b){var c=this.opts(),d=c.API.getSlideOpts(),e=c.hoverPaused||c.paused;b?c.hoverPaused=!0:c.paused=!0,e||(c.container.addClass("cycle-paused"),c.API.trigger("cycle-paused",[c]).log("cycle-paused"),d.timeout&&(clearTimeout(c.timeoutId),c.timeoutId=0,c._remainingTimeout-=a.now()-c._lastQueue,(c._remainingTimeout<0||isNaN(c._remainingTimeout))&&(c._remainingTimeout=void 0)))},resume:function(a){var b=this.opts(),c=!b.hoverPaused&&!b.paused;a?b.hoverPaused=!1:b.paused=!1,c||(b.container.removeClass("cycle-paused"),0===b.slides.filter(":animated").length&&b.API.queueTransition(b.API.getSlideOpts(),b._remainingTimeout),b.API.trigger("cycle-resumed",[b,b._remainingTimeout]).log("cycle-resumed"))},add:function(b,c){var d,e=this.opts(),f=e.slideCount,g=!1;"string"==a.type(b)&&(b=a.trim(b)),a(b).each(function(){var b,d=a(this);c?e.container.prepend(d):e.container.append(d),e.slideCount++,b=e.API.buildSlideOpts(d),e.slides=c?a(d).add(e.slides):e.slides.add(d),e.API.initSlide(b,d,--e._maxZ),d.data("cycle.opts",b),e.API.trigger("cycle-slide-added",[e,b,d])}),e.API.updateView(!0),g=e._preInitialized&&2>f&&e.slideCount>=1,g&&(e._initialized?e.timeout&&(d=e.slides.length,e.nextSlide=e.reverse?d-1:1,e.timeoutId||e.API.queueTransition(e)):e.API.initSlideshow())},calcFirstSlide:function(){var a,b=this.opts();a=parseInt(b.startingSlide||0,10),(a>=b.slides.length||0>a)&&(a=0),b.currSlide=a,b.reverse?(b.nextSlide=a-1,b.nextSlide<0&&(b.nextSlide=b.slides.length-1)):(b.nextSlide=a+1,b.nextSlide==b.slides.length&&(b.nextSlide=0))},calcNextSlide:function(){var a,b=this.opts();b.reverse?(a=b.nextSlide-1<0,b.nextSlide=a?b.slideCount-1:b.nextSlide-1,b.currSlide=a?0:b.nextSlide+1):(a=b.nextSlide+1==b.slides.length,b.nextSlide=a?0:b.nextSlide+1,b.currSlide=a?b.slides.length-1:b.nextSlide-1)},calcTx:function(b,c){var d,e=b;return e._tempFx?d=a.fn.cycle.transitions[e._tempFx]:c&&e.manualFx&&(d=a.fn.cycle.transitions[e.manualFx]),d||(d=a.fn.cycle.transitions[e.fx]),e._tempFx=null,this.opts()._tempFx=null,d||(d=a.fn.cycle.transitions.fade,e.API.log('Transition "'+e.fx+'" not found.  Using fade.')),d},prepareTx:function(a,b){var c,d,e,f,g,h=this.opts();return h.slideCount<2?void(h.timeoutId=0):(!a||h.busy&&!h.manualTrump||(h.API.stopTransition(),h.busy=!1,clearTimeout(h.timeoutId),h.timeoutId=0),void(h.busy||(0!==h.timeoutId||a)&&(d=h.slides[h.currSlide],e=h.slides[h.nextSlide],f=h.API.getSlideOpts(h.nextSlide),g=h.API.calcTx(f,a),h._tx=g,a&&void 0!==f.manualSpeed&&(f.speed=f.manualSpeed),h.nextSlide!=h.currSlide&&(a||!h.paused&&!h.hoverPaused&&h.timeout)?(h.API.trigger("cycle-before",[f,d,e,b]),g.before&&g.before(f,d,e,b),c=function(){h.busy=!1,h.container.data("cycle.opts")&&(g.after&&g.after(f,d,e,b),h.API.trigger("cycle-after",[f,d,e,b]),h.API.queueTransition(f),h.API.updateView(!0))},h.busy=!0,g.transition?g.transition(f,d,e,b,c):h.API.doTransition(f,d,e,b,c),h.API.calcNextSlide(),h.API.updateView()):h.API.queueTransition(f))))},doTransition:function(b,c,d,e,f){var g=b,h=a(c),i=a(d),j=function(){i.animate(g.animIn||{opacity:1},g.speed,g.easeIn||g.easing,f)};i.css(g.cssBefore||{}),h.animate(g.animOut||{},g.speed,g.easeOut||g.easing,function(){h.css(g.cssAfter||{}),g.sync||j()}),g.sync&&j()},queueTransition:function(b,c){var d=this.opts(),e=void 0!==c?c:b.timeout;return 0===d.nextSlide&&0===--d.loop?(d.API.log("terminating; loop=0"),d.timeout=0,e?setTimeout(function(){d.API.trigger("cycle-finished",[d])},e):d.API.trigger("cycle-finished",[d]),void(d.nextSlide=d.currSlide)):void 0!==d.continueAuto&&(d.continueAuto===!1||a.isFunction(d.continueAuto)&&d.continueAuto()===!1)?(d.API.log("terminating automatic transitions"),d.timeout=0,void(d.timeoutId&&clearTimeout(d.timeoutId))):void(e&&(d._lastQueue=a.now(),void 0===c&&(d._remainingTimeout=b.timeout),d.paused||d.hoverPaused||(d.timeoutId=setTimeout(function(){d.API.prepareTx(!1,!d.reverse)},e))))},stopTransition:function(){var a=this.opts();a.slides.filter(":animated").length&&(a.slides.stop(!1,!0),a.API.trigger("cycle-transition-stopped",[a])),a._tx&&a._tx.stopTransition&&a._tx.stopTransition(a)},advanceSlide:function(a){var b=this.opts();return clearTimeout(b.timeoutId),b.timeoutId=0,b.nextSlide=b.currSlide+a,b.nextSlide<0?b.nextSlide=b.slides.length-1:b.nextSlide>=b.slides.length&&(b.nextSlide=0),b.API.prepareTx(!0,a>=0),!1},buildSlideOpts:function(c){var d,e,f=this.opts(),g=c.data()||{};for(var h in g)g.hasOwnProperty(h)&&/^cycle[A-Z]+/.test(h)&&(d=g[h],e=h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),f.API.log("["+(f.slideCount-1)+"]",e+":",d,"("+typeof d+")"),g[e]=d);g=a.extend({},a.fn.cycle.defaults,f,g),g.slideNum=f.slideCount;try{delete g.API,delete g.slideCount,delete g.currSlide,delete g.nextSlide,delete g.slides}catch(i){}return g},getSlideOpts:function(b){var c=this.opts();void 0===b&&(b=c.currSlide);var d=c.slides[b],e=a(d).data("cycle.opts");return a.extend({},c,e)},initSlide:function(b,c,d){var e=this.opts();c.css(b.slideCss||{}),d>0&&c.css("zIndex",d),isNaN(b.speed)&&(b.speed=a.fx.speeds[b.speed]||a.fx.speeds._default),b.sync||(b.speed=b.speed/2),c.addClass(e.slideClass)},updateView:function(a,b){var c=this.opts();if(c._initialized){var d=c.API.getSlideOpts(),e=c.slides[c.currSlide];!a&&b!==!0&&(c.API.trigger("cycle-update-view-before",[c,d,e]),c.updateView<0)||(c.slideActiveClass&&c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass),a&&c.hideNonActive&&c.slides.filter(":not(."+c.slideActiveClass+")").css("visibility","hidden"),0===c.updateView&&setTimeout(function(){c.API.trigger("cycle-update-view",[c,d,e,a])},d.speed/(c.sync?2:1)),0!==c.updateView&&c.API.trigger("cycle-update-view",[c,d,e,a]),a&&c.API.trigger("cycle-update-view-after",[c,d,e]))}},getComponent:function(b){var c=this.opts(),d=c[b];return"string"==typeof d?/^\s*[\>|\+|~]/.test(d)?c.container.find(d):a(d):d.jquery?d:a(d)},stackSlides:function(b,c,d){var e=this.opts();b||(b=e.slides[e.currSlide],c=e.slides[e.nextSlide],d=!e.reverse),a(b).css("zIndex",e.maxZ);var f,g=e.maxZ-2,h=e.slideCount;if(d){for(f=e.currSlide+1;h>f;f++)a(e.slides[f]).css("zIndex",g--);for(f=0;f<e.currSlide;f++)a(e.slides[f]).css("zIndex",g--)}else{for(f=e.currSlide-1;f>=0;f--)a(e.slides[f]).css("zIndex",g--);for(f=h-1;f>e.currSlide;f--)a(e.slides[f]).css("zIndex",g--)}a(c).css("zIndex",e.maxZ-1)},getSlideIndex:function(a){return this.opts().slides.index(a)}},a.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},a.fn.cycle.version=function(){return"Cycle2: "+c},a.fn.cycle.transitions={custom:{},none:{before:function(a,b,c,d){a.API.stackSlides(c,b,d),a.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:0,visibility:"visible",display:"block"}),b.animIn={opacity:1},b.animOut={opacity:0}}},fadeout:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:1,visibility:"visible",display:"block"}),b.animOut={opacity:0}}},scrollHorz:{before:function(a,b,c,d){a.API.stackSlides(b,c,d);var e=a.container.css("overflow","hidden").width();a.cssBefore={left:d?e:-e,top:0,opacity:1,visibility:"visible",display:"block"},a.cssAfter={zIndex:a._maxZ-2,left:0},a.animIn={left:0},a.animOut={left:d?-e:e}}}},a.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},a(document).ready(function(){a(a.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a){"use strict";function b(b,d){var e,f,g,h=d.autoHeight;if("container"==h)f=a(d.slides[d.currSlide]).outerHeight(),d.container.height(f);else if(d._autoHeightRatio)d.container.height(d.container.width()/d._autoHeightRatio);else if("calc"===h||"number"==a.type(h)&&h>=0){if(g="calc"===h?c(b,d):h>=d.slides.length?0:h,g==d._sentinelIndex)return;d._sentinelIndex=g,d._sentinel&&d._sentinel.remove(),e=a(d.slides[g].cloneNode(!0)),e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),e.css({position:"static",visibility:"hidden",display:"block"}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),e.find("*").css("visibility","hidden"),d._sentinel=e}}function c(b,c){var d=0,e=-1;return c.slides.each(function(b){var c=a(this).height();c>e&&(e=c,d=b)}),d}function d(b,c,d,e){var f=a(e).outerHeight();c.container.animate({height:f},c.autoHeightSpeed,c.autoHeightEasing)}function e(c,f){f._autoHeightOnResize&&(a(window).off("resize orientationchange",f._autoHeightOnResize),f._autoHeightOnResize=null),f.container.off("cycle-slide-added cycle-slide-removed",b),f.container.off("cycle-destroyed",e),f.container.off("cycle-before",d),f._sentinel&&(f._sentinel.remove(),f._sentinel=null)}a.extend(a.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),a(document).on("cycle-initialized",function(c,f){function g(){b(c,f)}var h,i=f.autoHeight,j=a.type(i),k=null;("string"===j||"number"===j)&&(f.container.on("cycle-slide-added cycle-slide-removed",b),f.container.on("cycle-destroyed",e),"container"==i?f.container.on("cycle-before",d):"string"===j&&/\d+\:\d+/.test(i)&&(h=i.match(/(\d+)\:(\d+)/),h=h[1]/h[2],f._autoHeightRatio=h),"number"!==j&&(f._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(g,50)},a(window).on("resize orientationchange",f._autoHeightOnResize)),setTimeout(g,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(b,c,d,e){if("caption"===c.captionModule){a.each(["caption","overlay"],function(){var a=this,b=d[a+"Template"],f=c.API.getComponent(a);f.length&&b?(f.html(c.API.tmpl(b,d,c,e)),f.show()):f.hide()})}}),a(document).on("cycle-destroyed",function(b,c){var d;a.each(["caption","overlay"],function(){var a=this,b=c[a+"Template"];c[a]&&b&&(d=c.API.getComponent("caption"),d.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20140415 */
function(a){"use strict";var b=a.fn.cycle;a.fn.cycle=function(c){var d,e,f,g=a.makeArray(arguments);return"number"==a.type(c)?this.cycle("goto",c):"string"==a.type(c)?this.each(function(){var h;return d=c,f=a(this).data("cycle.opts"),void 0===f?void b.log('slideshow must be initialized before sending commands; "'+d+'" ignored'):(d="goto"==d?"jump":d,e=f.API[d],a.isFunction(e)?(h=a.makeArray(g),h.shift(),e.apply(f.API,h)):void b.log("unknown command: ",d))}):b.apply(this,arguments)},a.extend(a.fn.cycle,b),a.extend(b.API,{next:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?-1:1;a.allowWrap===!1&&a.currSlide+b>=a.slideCount||(a.API.advanceSlide(b),a.API.trigger("cycle-next",[a]).log("cycle-next"))}},prev:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?1:-1;a.allowWrap===!1&&a.currSlide+b<0||(a.API.advanceSlide(b),a.API.trigger("cycle-prev",[a]).log("cycle-prev"))}},destroy:function(){this.stop();var b=this.opts(),c=a.isFunction(a._data)?a._data:a.noop;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stop(),b.API.trigger("cycle-destroyed",[b]).log("cycle-destroyed"),b.container.removeData(),c(b.container[0],"parsedAttrs",!1),b.retainStylesOnDestroy||(b.container.removeAttr("style"),b.slides.removeAttr("style"),b.slides.removeClass(b.slideActiveClass)),b.slides.each(function(){var d=a(this);d.removeData(),d.removeClass(b.slideClass),c(this,"parsedAttrs",!1)})},jump:function(a,b){var c,d=this.opts();if(!d.busy||d.manualTrump){var e=parseInt(a,10);if(isNaN(e)||0>e||e>=d.slides.length)return void d.API.log("goto: invalid slide index: "+e);if(e==d.currSlide)return void d.API.log("goto: skipping, already on slide",e);d.nextSlide=e,clearTimeout(d.timeoutId),d.timeoutId=0,d.API.log("goto: ",e," (zero-index)"),c=d.currSlide<d.nextSlide,d._tempFx=b,d.API.prepareTx(!0,c)}},stop:function(){var b=this.opts(),c=b.container;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stopTransition(),b.pauseOnHover&&(b.pauseOnHover!==!0&&(c=a(b.pauseOnHover)),c.off("mouseenter mouseleave")),b.API.trigger("cycle-stopped",[b]).log("cycle-stopped")},reinit:function(){var a=this.opts();a.API.destroy(),a.container.cycle()},remove:function(b){for(var c,d,e=this.opts(),f=[],g=1,h=0;h<e.slides.length;h++)c=e.slides[h],h==b?d=c:(f.push(c),a(c).data("cycle.opts").slideNum=g,g++);d&&(e.slides=a(f),e.slideCount--,a(d).remove(),b==e.currSlide?e.API.advanceSlide(1):b<e.currSlide?e.currSlide--:e.currSlide++,e.API.trigger("cycle-slide-removed",[e,b,d]).log("cycle-slide-removed"),e.API.updateView())}}),a(document).on("click.cycle","[data-cycle-cmd]",function(b){b.preventDefault();var c=a(this),d=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";a(e).cycle(d,c.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(a){"use strict";function b(b,c){var d;return b._hashFence?void(b._hashFence=!1):(d=window.location.hash.substring(1),void b.slides.each(function(e){if(a(this).data("cycle-hash")==d){if(c===!0)b.startingSlide=e;else{var f=b.currSlide<e;b.nextSlide=e,b.API.prepareTx(!0,f)}return!1}}))}a(document).on("cycle-pre-initialize",function(c,d){b(d,!0),d._onHashChange=function(){b(d,!1)},a(window).on("hashchange",d._onHashChange)}),a(document).on("cycle-update-view",function(a,b,c){c.hash&&"#"+c.hash!=window.location.hash&&(b._hashFence=!0,window.location.hash=c.hash)}),a(document).on("cycle-destroyed",function(b,c){c._onHashChange&&a(window).off("hashchange",c._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(b,c){function d(b,d){function f(b){var f;"wait"==c.loader?(h.push(b),0===j&&(h.sort(g),e.apply(c.API,[h,d]),c.container.removeClass("cycle-loading"))):(f=a(c.slides[c.currSlide]),e.apply(c.API,[b,d]),f.show(),c.container.removeClass("cycle-loading"))}function g(a,b){return a.data("index")-b.data("index")}var h=[];if("string"==a.type(b))b=a.trim(b);else if("array"===a.type(b))for(var i=0;i<b.length;i++)b[i]=a(b[i])[0];b=a(b);var j=b.length;j&&(b.css("visibility","hidden").appendTo("body").each(function(b){function g(){0===--i&&(--j,f(k))}var i=0,k=a(this),l=k.is("img")?k:k.find("img");return k.data("index",b),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(i=l.length,void l.each(function(){this.complete?g():a(this).load(function(){g()}).on("error",function(){0===--i&&(c.API.log("slide skipped; img not loaded:",this.src),0===--j&&"wait"==c.loader&&e.apply(c.API,[h,d]))})})):(--j,void h.push(k))}),j&&c.container.addClass("cycle-loading"))}var e;c.loader&&(e=c.API.add,c.API.add=d)})}(jQuery),/*! pager plugin for Cycle2;  version: 20140415 */
function(a){"use strict";function b(b,c,d){var e,f=b.API.getComponent("pager");f.each(function(){var f=a(this);if(c.pagerTemplate){var g=b.API.tmpl(c.pagerTemplate,c,b,d[0]);e=a(g).appendTo(f)}else e=f.children().eq(b.slideCount-1);e.on(b.pagerEvent,function(a){b.pagerEventBubble||a.preventDefault(),b.API.page(f,a.currentTarget)})})}function c(a,b){var c=this.opts();if(!c.busy||c.manualTrump){var d=a.children().index(b),e=d,f=c.currSlide<e;c.currSlide!=e&&(c.nextSlide=e,c._tempFx=c.pagerFx,c.API.prepareTx(!0,f),c.API.trigger("cycle-pager-activated",[c,a,b]))}}a.extend(a.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),a(document).on("cycle-bootstrap",function(a,c,d){d.buildPagerLink=b}),a(document).on("cycle-slide-added",function(a,b,d,e){b.pager&&(b.API.buildPagerLink(b,d,e),b.API.page=c)}),a(document).on("cycle-slide-removed",function(b,c,d){if(c.pager){var e=c.API.getComponent("pager");e.each(function(){var b=a(this);a(b.children()[d]).remove()})}}),a(document).on("cycle-update-view",function(b,c){var d;c.pager&&(d=c.API.getComponent("pager"),d.each(function(){a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)}))}),a(document).on("cycle-destroyed",function(a,b){var c=b.API.getComponent("pager");c&&(c.children().off(b.pagerEvent),b.pagerTemplate&&c.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20140408 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(a,b){if(b.API.getComponent("next").on(b.nextEvent,function(a){a.preventDefault(),b.API.next()}),b.API.getComponent("prev").on(b.prevEvent,function(a){a.preventDefault(),b.API.prev()}),b.swipe){var c=b.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",d=b.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";b.container.on(c,function(){b._tempFx=b.swipeFx,b.API.next()}),b.container.on(d,function(){b._tempFx=b.swipeFx,b.API.prev()})}}),a(document).on("cycle-update-view",function(a,b){if(!b.allowWrap){var c=b.disabledClass,d=b.API.getComponent("next"),e=b.API.getComponent("prev"),f=b._prevBoundry||0,g=void 0!==b._nextBoundry?b._nextBoundry:b.slideCount-1;b.currSlide==g?d.addClass(c).prop("disabled",!0):d.removeClass(c).prop("disabled",!1),b.currSlide===f?e.addClass(c).prop("disabled",!0):e.removeClass(c).prop("disabled",!1)}}),a(document).on("cycle-destroyed",function(a,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(b,c){if(c.progressive){var d,e,f=c.API,g=f.next,h=f.prev,i=f.prepareTx,j=a.type(c.progressive);if("array"==j)d=c.progressive;else if(a.isFunction(c.progressive))d=c.progressive(c);else if("string"==j){if(e=a(c.progressive),d=a.trim(e.html()),!d)return;if(/^(\[)/.test(d))try{d=a.parseJSON(d)}catch(k){return void f.log("error parsing progressive slides",k)}else d=d.split(new RegExp(e.data("cycle-split")||"\n")),d[d.length-1]||d.pop()}i&&(f.prepareTx=function(a,b){var e,f;return a||0===d.length?void i.apply(c.API,[a,b]):void(b&&c.currSlide==c.slideCount-1?(f=d[0],d=d.slice(1),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.API.advanceSlide(1)},50)}),c.API.add(f)):b||0!==c.currSlide?i.apply(c.API,[a,b]):(e=d.length-1,f=d[e],d=d.slice(0,e),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.currSlide=1,b.API.advanceSlide(-1)},50)}),c.API.add(f,!0)))}),g&&(f.next=function(){var a=this.opts();if(d.length&&a.currSlide==a.slideCount-1){var b=d[0];d=d.slice(1),a.container.one("cycle-slide-added",function(a,b){g.apply(b.API),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(b)}else g.apply(a.API)}),h&&(f.prev=function(){var a=this.opts();if(d.length&&0===a.currSlide){var b=d.length-1,c=d[b];d=d.slice(0,b),a.container.one("cycle-slide-added",function(a,b){b.currSlide=1,b.API.advanceSlide(-1),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(c,!0)}else h.apply(a.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(b,c){var d=new RegExp(c.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),e=a.makeArray(arguments);return e.shift(),b.replace(d,function(b,c){var d,f,g,h,i=c.split(".");for(d=0;d<e.length;d++)if(g=e[d]){if(i.length>1)for(h=g,f=0;f<i.length;f++)g=h,h=h[i[f]]||c;else h=g[c];if(a.isFunction(h))return h.apply(g,e);if(void 0!==h&&null!==h&&h!=c)return h}return c})}})}(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/js/libs/jquery.cycle2.scrollVert.min.js?1447320165359";s:6:"source";s:46:"/local/js/libs/jquery.cycle2.scrollVert.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.fn.cycle.transitions.scrollVert={before:function(a,b,c,d){a.API.stackSlides(a,b,c,d);var e=a.container.css("overflow","hidden").height();a.cssBefore={top:d?-e:e,left:0,opacity:1,display:"block",visibility:"visible"},a.animIn={top:0},a.animOut={top:d?e:-e}}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/local/js/libs/jquery.cycle2.tile.min.js?14473201652119";s:6:"source";s:40:"/local/js/libs/jquery.cycle2.tile.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.fn.cycle.transitions.tileSlide=a.fn.cycle.transitions.tileBlind={before:function(b,c,d,e){b.API.stackSlides(c,d,e),a(c).css({display:"block",visibility:"visible"}),b.container.css("overflow","hidden"),b.tileDelay=b.tileDelay||"tileSlide"==b.fx?100:125,b.tileCount=b.tileCount||7,b.tileVertical=b.tileVertical!==!1,b.container.data("cycleTileInitialized")||(b.container.on("cycle-destroyed",a.proxy(this.onDestroy,b.API)),b.container.data("cycleTileInitialized",!0))},transition:function(b,c,d,e,f){function g(a){m.eq(a).animate(t,{duration:b.speed,easing:b.easing,complete:function(){(e?p-1===a:0===a)&&b._tileAniCallback()}}),setTimeout(function(){(e?p-1!==a:0!==a)&&g(e?a+1:a-1)},b.tileDelay)}b.slides.not(c).not(d).css("visibility","hidden");var h,i,j,k,l,m=a(),n=a(c),o=a(d),p=b.tileCount,q=b.tileVertical,r=b.container.height(),s=b.container.width();q?(i=Math.floor(s/p),k=s-i*(p-1),j=l=r):(i=k=s,j=Math.floor(r/p),l=r-j*(p-1)),b.container.find(".cycle-tiles-container").remove();var t,u={left:0,top:0,overflow:"hidden",position:"absolute",margin:0,padding:0};t=q?"tileSlide"==b.fx?{top:r}:{width:0}:"tileSlide"==b.fx?{left:s}:{height:0};var v=a('<div class="cycle-tiles-container"></div>');v.css({zIndex:n.css("z-index"),overflow:"visible",position:"absolute",top:0,left:0,direction:"ltr"}),v.insertBefore(d);for(var w=0;p>w;w++)h=a("<div></div>").css(u).css({width:p-1===w?k:i,height:p-1===w?l:j,marginLeft:q?w*i:0,marginTop:q?0:w*j}).append(n.clone().css({position:"relative",maxWidth:"none",width:n.width(),margin:0,padding:0,marginLeft:q?-(w*i):0,marginTop:q?0:-(w*j)})),m=m.add(h);v.append(m),n.css("visibility","hidden"),o.css({opacity:1,display:"block",visibility:"visible"}),g(e?0:p-1),b._tileAniCallback=function(){o.css({display:"block",visibility:"visible"}),n.css("visibility","hidden"),v.remove(),f()}},stopTransition:function(a){a.container.find("*").stop(!0,!0),a._tileAniCallback&&a._tileAniCallback()},onDestroy:function(){var a=this.opts();a.container.find(".cycle-tiles-container").remove()}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/local/js/libs/jquery.fancybox.js?144732016522989";s:6:"source";s:33:"/local/js/libs/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e,t,n,i){"use strict";var o=n("html"),a=n(e),r=n(t),s=n.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==i,p=function(e){return e&&e.hasOwnProperty&&e instanceof n},h=function(e){return e&&"string"===n.type(e)},f=function(e){return h(e)&&e.indexOf("%")>0},u=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},g=function(e,t){var n=parseInt(e,10)||0;return t&&f(e)&&(n=s.getViewport()[t]/100*n),Math.ceil(n)},m=function(e,t){return g(e,t)+"px"};n.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==s.close(!0))?(n.isArray(e)||(e=p(e)?n(e).get():[e]),n.each(e,function(o,a){var r,l,c,d,f,u,g,m={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),p(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,m,a.metadata())):m=a),r=t.href||m.href||(h(a)?a:null),l=t.title!==i?t.title:m.title||"",c=t.content||m.content,d=c?"html":t.type||m.type,!d&&m.isDom&&(d=a.data("fancybox-type"),d||(f=a.prop("class").match(/fancybox\.(\w+)/),d=f?f[1]:null)),h(r)&&(d||(s.isImage(r)?d="image":s.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":h(a)&&(d="html",c=a)),"ajax"===d&&(u=r.split(/\s+/,2),r=u.shift(),g=u.shift())),c||("inline"===d?r?c=n(h(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):m.isDom&&(c=a):"html"===d?c=r:d||r||!m.isDom||(d="inline",c=a)),n.extend(m,{href:r,type:d,content:c,title:l,selector:g}),e[o]=m}),s.opts=n.extend(!0,{},s.defaults,t),t.keys!==i&&(s.opts.keys=t.keys?n.extend({},s.defaults.keys,t.keys):!1),s.group=e,s._start(s.opts.index)):void 0},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&e!==!0?(s.isOpen=s.isOpened=!1,s.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},n=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},i=function(){t(),r.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")},o=function(){s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":n,"beforeLoad.player":t}),n(),s.trigger("onPlayStart"))};e===!0||!s.player.isActive&&e!==!1?o():i()},next:function(e){var t=s.current;t&&(h(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(h(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=s.current;o&&(e=g(e),s.direction=t||o.direction[e>=o.index?"next":"prev"],s.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(s.cancel(),s._start(e)))},reposition:function(e,t){var i,o=s.current,a=o?o.wrap:null;a&&(i=s._getPosition(t),e&&"scroll"===e.type?(delete i.position,a.stop(!0,!0).animate(i,200)):(a.css(i),o.pos=n.extend({},o.dim,i)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var i=s.current;i&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&i.autoResize)&&s._setDimension(),"scroll"===t&&i.canShrink||s.reposition(e),s.trigger("onUpdate"),c=null)},n&&!d?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===n.type(e)?e:!s.current.fitToView,d&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){r.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,n={x:a.scrollLeft(),y:a.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=d&&e.innerWidth?e.innerWidth:a.width(),n.h=d&&e.innerHeight?e.innerHeight:a.height()),n},unbindEvents:function(){s.wrap&&p(s.wrap)&&s.wrap.unbind(".fb"),r.unbind(".fb"),a.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),e=t.keys,e&&r.bind("keydown.fb",function(o){var a=o.which||o.keyCode,r=o.target||o.srcElement;return 27===a&&s.coming?!1:void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||r&&(r.type||n(r).is("[contenteditable]"))||n.each(e,function(e,r){return t.group.length>1&&r[a]!==i?(s[e](r[a]),o.preventDefault(),!1):n.inArray(a,r)>-1?(s[e](),o.preventDefault(),!1):void 0}))}),n.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var r=e.target||null,l=n(r),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=u(l[0]),l=n(l).parent();0===i||c||s.group.length>1&&!t.canShrink&&(a>0||o>0?s.prev(a>0?"down":"left"):(0>a||0>o)&&s.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||s.coming||s.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),i===!1)return!1;o.helpers&&n.each(o.helpers,function(t,i){i&&s.helpers[t]&&n.isFunction(s.helpers[t][e])&&s.helpers[t][e](n.extend(!0,{},s.helpers[t].defaults,i),o)}),r.trigger(e)}},isImage:function(e){return h(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return h(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o,a,r,l={};if(e=g(e),t=s.group[e]||null,!t)return!1;if(l=n.extend(!0,{},s.opts,t),a=l.margin,r=l.padding,"number"===n.type(a)&&(l.margin=[a,a,a,a]),"number"===n.type(r)&&(l.padding=[r,r,r,r]),l.modal&&n.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=s.group,l.index=e,s.coming=l,!1===s.trigger("beforeLoad"))return void(s.coming=null);if(o=l.type,i=l.href,!o)return s.coming=null,s.current&&s.router&&"jumpto"!==s.router?(s.current.index=e,s[s.router](s.direction)):!1;if(s.isActive=!0,("image"===o||"swf"===o)&&(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&d&&(l.scrolling="scroll"),l.wrap=n(l.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),n.extend(l,{skin:n(".fancybox-skin",l.wrap),outer:n(".fancybox-outer",l.wrap),inner:n(".fancybox-inner",l.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,m(l.padding[e]))}),s.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return s._error("content")}else if(!i)return s._error("href");"image"===o?s._loadImage():"ajax"===o?s._loadAjax():"iframe"===o?s._loadIframe():s._afterLoad()},_error:function(e){n.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,e.complete!==!0&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){n(this).data("ready",1),d||n(this).bind("load.fb",s.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,n=s.group,i=s.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;a>=t;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,r,l=s.coming,c=s.current,d="fancybox-placeholder";if(s.hideLoading(),l&&s.isActive!==!1){if(!1===s.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(s.coming=null);switch(c&&(s.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=l,t=l.content,i=l.type,o=l.scrolling,n.extend(s,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:c}),a=e.href,i){case"inline":case"ajax":case"html":e.selector?t=n("<div>").html(t).find(e.selector):p(t)&&(t.data(d)||t.data(d,n('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){n(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',r="",n.each(e.swf,function(e,n){t+='<param name="'+e+'" value="'+n+'"></param>',r+=" "+e+'="'+n+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}p(t)&&t.parent().is(e.inner)||e.inner.append(t),s.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?c.prevMethod&&s.transitions[c.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?e.nextMethod:e.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,i,o,a,r,l,c,d,p,h,u,y,x,v,w=s.getViewport(),b=0,k=!1,C=!1,O=s.wrap,W=s.skin,_=s.inner,S=s.current,T=S.width,L=S.height,E=S.minWidth,R=S.minHeight,j=S.maxWidth,P=S.maxHeight,H=S.scrolling,M=S.scrollOutside?S.scrollbarWidth:0,A=S.margin,I=g(A[1]+A[3]),D=g(A[0]+A[2]);if(O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"),e=g(W.outerWidth(!0)-W.width()),t=g(W.outerHeight(!0)-W.height()),i=I+e,o=D+t,a=f(T)?(w.w-i)*g(T)/100:T,r=f(L)?(w.h-o)*g(L)/100:L,"iframe"===S.type){if(x=S.content,S.autoHeight&&1===x.data("ready"))try{x[0].contentWindow.document.location&&(_.width(a).height(9999),v=x.contents().find("body"),M&&v.css("overflow-x","hidden"),r=v.outerHeight(!0))}catch(z){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(a),S.autoHeight||_.height(r),S.autoWidth&&(a=_.width()),S.autoHeight&&(r=_.height()),_.removeClass("fancybox-tmp"));if(T=g(a),L=g(r),d=a/r,E=g(f(E)?g(E,"w")-i:E),j=g(f(j)?g(j,"w")-i:j),R=g(f(R)?g(R,"h")-o:R),P=g(f(P)?g(P,"h")-o:P),l=j,c=P,S.fitToView&&(j=Math.min(w.w-i,j),P=Math.min(w.h-o,P)),u=w.w-I,y=w.h-D,S.aspectRatio?(T>j&&(T=j,L=g(T/d)),L>P&&(L=P,T=g(L*d)),E>T&&(T=E,L=g(T/d)),R>L&&(L=R,T=g(L*d))):(T=Math.max(E,Math.min(T,j)),S.autoHeight&&"iframe"!==S.type&&(_.width(T),L=_.height()),L=Math.max(R,Math.min(L,P))),S.fitToView)if(_.width(T).height(L),O.width(T+e),p=O.width(),h=O.height(),S.aspectRatio)for(;(p>u||h>y)&&T>E&&L>R&&!(b++>19);)L=Math.max(R,Math.min(P,L-10)),T=g(L*d),E>T&&(T=E,L=g(T/d)),T>j&&(T=j,L=g(T/d)),_.width(T).height(L),O.width(T+e),p=O.width(),h=O.height();else T=Math.max(E,Math.min(T,T-(p-u))),L=Math.max(R,Math.min(L,L-(h-y)));M&&"auto"===H&&r>L&&u>T+e+M&&(T+=M),_.width(T).height(L),O.width(T+e),p=O.width(),h=O.height(),k=(p>u||h>y)&&T>E&&L>R,C=S.aspectRatio?l>T&&c>L&&a>T&&r>L:(l>T||c>L)&&(a>T||r>L),n.extend(S,{dim:{width:m(p),height:m(h)},origWidth:a,origHeight:r,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:h-W.outerHeight(!0),skinSpace:W.height()-L}),!x&&S.autoHeight&&L>R&&P>L&&!C&&_.height("auto")},_getPosition:function(e){var t=s.current,n=s.getViewport(),i=t.margin,o=s.wrap.width()+i[1]+i[3],a=s.wrap.height()+i[0]+i[2],r={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?r.position="fixed":t.locked||(r.top+=n.y,r.left+=n.x),r.top=m(Math.max(r.top,r.top+(n.h-a)*t.topRatio)),r.left=m(Math.max(r.left,r.left+(n.w-o)*t.leftRatio)),r},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&s.group.length>1)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){n(t.target).is("a")||n(t.target).parent().is("a")||(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&s.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&n(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,n=e.orig,i={},o=50,a=50,r=e.hPadding,l=e.wPadding,c=s.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),p(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=c.y+(c.h-a)*e.topRatio,i.left=c.x+(c.w-o)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(i.top-=c.y,i.left-=c.x),i={top:m(i.top-r*e.topRatio),left:m(i.left-l*e.leftRatio),width:m(o+l),height:m(a+r)}},step:function(e,t){var n,i,o,a=t.prop,r=s.current,l=r.wrapSpace,c=r.skinSpace;("width"===a||"height"===a)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(n=1-n),i="width"===a?r.wPadding:r.hPadding,o=e-i,s.skin[a](g("width"===a?o:o-l*n)),s.inner[a](g("width"===a?o:o-l*n-c*n)))},zoomIn:function(){var e=s.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),s.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),s.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=s.direction,r=200;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=m(g(i[e])-r),o[e]="+="+r+"px"):(i[e]=m(g(i[e])+r),o[e]="-="+r+"px")),"none"===n?s._afterZoomIn():s.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,i={opacity:.1},o=s.direction,a=200;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:n("html"),create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=n.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(a.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return n(e.target).hasClass("fancybox-overlay")?(s.isActive?s.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;a.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(n(".fancybox-margin").removeClass("fancybox-margin"),e=a.scrollTop(),t=a.scrollLeft(),this.el.removeClass("fancybox-lock"),a.scrollTop(e).scrollLeft(t)),n(".fancybox-overlay").remove().hide(),n.extend(this,{overlay:null,fixed:!1})},update:function(){var e,n="100%";this.overlay.width(n).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(n=r.width())):r.width()>a.width()&&(n=r.width()),this.overlay.width(n).height(r.height())},onReady:function(e,t){var i=this.overlay;n(".fancybox-overlay").stop(!0,!0),i||this.create(e),e.locked&&this.fixed&&t.fixed&&(i||(this.margin=r.height()>a.height()?n("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i,o;t.locked&&(this.margin!==!1&&(n("*").filter(function(){return"fixed"===n(this).css("position")&&!n(this).hasClass("fancybox-overlay")&&!n(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),i=a.scrollTop(),o=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(i).scrollLeft(o)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,i,o=s.current,a=o.title,r=e.type;if(n.isFunction(a)&&(a=a.call(o.element,o)),h(a)&&""!==n.trim(a)){switch(t=n('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+a+"</div>"),r){case"inside":i=s.skin;break;case"outside":i=s.wrap;break;case"over":i=s.inner;break;default:i=s.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(g(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](i)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",a=function(a){var r,l,c=n(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",l=c.attr(r),l||(r="rel",l=c.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+r+'="'+l+'"]'),d=c.index(this)),e.index=d,s.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?r.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):i.unbind("click.fb-start").bind("click.fb-start",a),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,a;n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),i=t.innerWidth()-t.height(99).innerWidth();return e.remove(),i}),n.support.fixedPosition===i&&(n.support.fixedPosition=function(){var e=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),n.extend(s.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")}),t=n(e).width(),o.addClass("fancybox-lock-test"),a=n(e).width(),o.removeClass("fancybox-lock-test"),n("<style type='text/css'>.fancybox-margin{margin-right:"+(a-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/local/js/libs/jquery.validate.min.js?144732016521528";s:6:"source";s:37:"/local/js/libs/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id"),i?i.match(new RegExp("\b"+f+"\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});

;
; 
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/local/js/libs/jquery.mCustomScrollbar.concat.min.js?144732016540547";s:6:"source";s:52:"/local/js/libs/jquery.mCustomScrollbar.concat.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* == jquery mousewheel plugin == Version: 3.1.12, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0,autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&V(t),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),S.call(this),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r.children())),n.overflowed=B.call(this),O.call(this),i.autoDraggerLength&&b.call(this),C.call(this),k.call(this);var s=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?l[0].height()>l[0].parent().height()?T.call(this):(Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(T.call(this),"y"===i.axis?M.call(this):"yx"===i.axis&&n.overflowed[1]&&Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?l[1].width()>l[1].parent().width()?T.call(this):(Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(T.call(this),"x"===i.axis?M.call(this):"yx"===i.axis&&n.overflowed[0]&&Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=j.call(this,c[0],"y"),c[1]=j.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&V(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){{o.data(a)}X.call(this,"remove"),M.call(this),t&&T.call(this),O.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),M.call(this),T.call(this),n.removeData(a),Z(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),Z(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+n.langDir+" /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p.children())),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis&&i.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),position:"relative"}).unwrap()},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=te(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=t.css("max-height")||"none",r=-1!==i.indexOf("%"),l=t.css("box-sizing");if("none"!==i){var s=r?t.parent().height()*parseInt(i)/100:parseInt(i);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),n.css("max-height",Math.round(s))}},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},C=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},y=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},B=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1);return[r>n.height(),l>n.width()]},T=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(V(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},k=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(R.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),H.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&U.call(this),i.keyboard.enable&&F.call(this),n.bindEvents=!0}},M=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(document).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),Z(s[0],"onCompleteTimeout"),o.bindEvents=!1)},O=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},I=function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return e.target.ownerDocument!==document?[e.originalEvent.screenY,e.originalEvent.screenX,!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var o=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[o.screenY,o.screenX,a>1]:[o.pageY,o.pageX,a>1];default:return[e.pageY,e.pageX,!1]}},R=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;Q(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p;p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),$(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),V(l),n=e(this);var a=n.offset(),d=I(o)[0]-a.top,f=I(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),y(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=I(e)[0]-t.top,l=I(e)[1]-t.left;o(i,r,a,l)}),e(document).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=I(e)[0]-t.top,l=I(e)[1]-t.left;if(i===a)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(e){n&&(y(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!ee(e)||c||I(e)[2])return void(t=0);t=1,S=0,b=0,C.removeClass("mCS_touch_action");var o=M.offset();d=I(e)[0]-o.top,u=I(e)[1]-o.left,A=[I(e)[0],I(e)[1]]}function n(e){if(ee(e)&&!c&&!I(e)[2]&&(e.stopImmediatePropagation(),!b||S)){p=J();var t=k.offset(),o=I(e)[0]-t.top,a=I(e)[1]-t.left,n="mcsLinearOut";if(R.push(o),D.push(a),A[2]=Math.abs(I(e)[0]-A[0]),A[3]=Math.abs(I(e)[1]-A[1]),y.overflowed[0])var i=O[0].parent().height()-O[0].height(),r=d-o>0&&o-d>-(i*y.scrollRatio.y)&&(2*A[3]<A[2]||"yx"===B.axis);if(y.overflowed[1])var l=O[1].parent().width()-O[1].width(),f=u-a>0&&a-u>-(l*y.scrollRatio.x)&&(2*A[2]<A[3]||"yx"===B.axis);r||f?(e.preventDefault(),S=1):(b=1,C.addClass("mCS_touch_action")),_="yx"===B.axis?[d-o,u-a]:"x"===B.axis?[null,u-a]:[d-o,null],M[0].idleTimer=250,y.overflowed[0]&&s(_[0],E,n,"y","all",!0),y.overflowed[1]&&s(_[1],E,n,"x",W,!0)}}function i(e){if(!ee(e)||c||I(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),V(C),m=J();var o=k.offset();f=I(e)[0]-o.top,h=I(e)[1]-o.left,R=[],D=[]}function r(e){if(ee(e)&&!c&&!I(e)[2]){e.stopImmediatePropagation(),S=0,b=0,g=J();var t=k.offset(),o=I(e)[0]-t.top,a=I(e)[1]-t.left;if(!(g-p>30)){x=1e3/(g-m);var n="mcsEaseOut",i=2.5>x,r=i?[R[R.length-2],D[D.length-2]]:[0,0];v=i?[o-r[0],a-r[1]]:[o-f,a-h];var d=[Math.abs(v[0]),Math.abs(v[1])];x=i?[Math.abs(v[0]/4),Math.abs(v[1]/4)]:[x,x];var u=[Math.abs(M[0].offsetTop)-v[0]*l(d[0]/x[0],x[0]),Math.abs(M[0].offsetLeft)-v[1]*l(d[1]/x[1],x[1])];_="yx"===B.axis?[u[0],u[1]]:"x"===B.axis?[null,u[1]]:[u[0],null],w=[4*d[0]+B.scrollInertia,4*d[1]+B.scrollInertia];var C=parseInt(B.contentTouchScroll)||0;_[0]=d[0]>C?_[0]:0,_[1]=d[1]>C?_[1]:0,y.overflowed[0]&&s(_[0],w[0],n,"y",W,!1),y.overflowed[1]&&s(_[1],w[1],n,"x",W,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&Q(C,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C=e(this),y=C.data(a),B=y.opt,T=a+"_"+y.idx,k=e("#mCSB_"+y.idx),M=e("#mCSB_"+y.idx+"_container"),O=[e("#mCSB_"+y.idx+"_dragger_vertical"),e("#mCSB_"+y.idx+"_dragger_horizontal")],R=[],D=[],E=0,W="yx"===B.axis?"none":"all",A=[],P=M.find("iframe"),z=["touchstart."+T+" pointerdown."+T+" MSPointerDown."+T,"touchmove."+T+" pointermove."+T+" MSPointerMove."+T,"touchend."+T+" pointerup."+T+" MSPointerUp."+T];M.bind(z[0],function(e){o(e)}).bind(z[1],function(e){n(e)}),k.bind(z[0],function(e){i(e)}).bind(z[2],function(e){r(e)}),P.length&&P.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind(z[0],function(e){o(e),i(e)}).bind(z[1],function(e){n(e)}).bind(z[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,q(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(e){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=I(e)[0]-a.top+f[0].offsetTop,c=I(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u,function(e){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(V(o),!A(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===i.axis||"x"===i.mouseWheel.axis)var d="x",u=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],h=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),m=c[1][0].offsetLeft,p=c[1].parent().width()-c[1].width(),g=t.deltaX||t.deltaY||a;else var d="y",u=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],h=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),m=c[0][0].offsetTop,p=c[0].parent().height()-c[0].height(),g=t.deltaY||a;"y"===d&&!n.overflowed[0]||"x"===d&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(g=-g),i.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),Q(o,(h-g*f).toString(),{dir:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},L=function(e){var t=null;try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t},A=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container"),r=i.parent(),l=e(".mCSB_"+o.idx+"_scrollbar ."+d[12]);l.bind("touchstart."+n+" pointerdown."+n+" MSPointerDown."+n,function(e){c=!0}).bind("touchend."+n+" pointerup."+n+" MSPointerUp."+n,function(e){c=!1}).bind("click."+n,function(a){if(e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail")){V(t);var n=e(this),l=n.find(".mCSB_dragger");if(n.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var s="x",c=a.pageX>l.offset().left?-1:1,u=Math.abs(i[0].offsetLeft)-.9*c*r.width()}else{if(!o.overflowed[0])return;var s="y",c=a.pageY>l.offset().top?-1:1,u=Math.abs(i[0].offsetTop)-.9*c*r.height()}Q(t,u.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length,s=0;a.is(n.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(s+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[oe(a)[0],oe(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s}),"y"===n.axis||i[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s})},t[0]._focusTimer))})},H=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},U=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.snapAmount||n.scrollButtons.scrollAmount,q(t,e,o)}if(a.preventDefault(),$(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},F=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.snapAmount||i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||q(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){V(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-.9*f*d.width();else var h="y",m=Math.abs(c[0].offsetTop)-.9*f*d.height();Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},q=function(t,o,n,i,r){function l(e){var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],u="x"===f.dir[0]?s[1]+f.dir[1]*d[1]*n:s[0]+f.dir[1]*d[0]*n,m="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),v="auto"!==f.scrollAmount?m:u,x=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",_=e?!0:!1;return e&&17>a&&(v="x"===f.dir[0]?s[1]:s[0]),Q(t,v.toString(),{dir:f.dir[0],scrollEasing:x,dur:a,onComplete:_}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),Z(f,"step"),V(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],V(t),te(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},j=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?oe(m)[1]:oe(m)[0];case"string":case"number":if(te(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&te(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?oe(m)[1]:oe(m)[0]}return e(t).length?"x"===o?oe(e(t))[1]:oe(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(h[0].autoUpdate),0===s.parents("html").length?void(s=null):void(h[0].autoUpdate=setTimeout(function(){return f.advanced.updateOnSelectorChange&&(m=r(),m!==w)?(l(3),void(w=m)):(f.advanced.updateOnContentResize&&(p=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],(p[0]!==S[0]||p[1]!==S[1]||p[2]!==S[2]||p[3]!==S[3]||p[4]!==S[4]||p[5]!==S[5])&&(l(p[0]!==S[0]||p[1]!==S[1]),S=p)),f.advanced.updateOnImageLoad&&(g=n(),g!==b&&(h.find("img").each(function(){i(this)}),b=g)),void((f.advanced.updateOnSelectorChange||f.advanced.updateOnContentResize||f.advanced.updateOnImageLoad)&&o()))},f.advanced.autoUpdateTimeout))}function n(){var e=0;return f.advanced.updateOnImageLoad&&(e=h.find("img").length),e}function i(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),l(2)}if(e(t).hasClass(d[2]))return void l();var n=new Image;n.onload=o(n,a),n.src=t.src}function r(){f.advanced.updateOnSelectorChange===!0&&(f.advanced.updateOnSelectorChange="*");var t=0,o=h.find(f.advanced.updateOnSelectorChange);return f.advanced.updateOnSelectorChange&&o.length>0&&o.each(function(){t+=e(this).height()+e(this).width()}),t}function l(e){clearTimeout(h[0].autoUpdate),u.update.call(null,s[0],e)}var s=e(this),c=s.data(a),f=c.opt,h=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(h[0].autoUpdate),void Z(h[0],"autoUpdate");var m,p,g,v=h.parent(),x=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],_=function(){return[x[0].is(":visible")?x[0].outerHeight(!0):0,x[1].is(":visible")?x[1].outerWidth(!0):0]},w=r(),S=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],b=n();o()},N=function(e,t,o){return Math.round(e/t)*t-o},V=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){K.call(this)})},Q=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||_>=w[0]+b,c.callbacks.alwaysTriggerOffsets||-C>=_]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[v[0].offsetTop,v[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",
callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(o=N(o,c.snapAmount,c.snapOffset)),n.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",_=h[0].offsetLeft,w=[f.width()-h.outerWidth(!1),v.parent().width()-v.width()],S=[o,0===o?0:o/s.scrollRatio.x],b=p[1],C=g[1],B=b>0?b/s.scrollRatio.x:0,T=C>0?C/s.scrollRatio.x:0;break;case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",_=h[0].offsetTop,w=[f.height()-h.outerHeight(!1),v.parent().height()-v.height()],S=[o,0===o?0:o/s.scrollRatio.y],b=p[0],C=g[0],B=b>0?b/s.scrollRatio.y:0,T=C>0?C/s.scrollRatio.y:0}S[1]<0||0===S[0]&&0===S[1]?S=[0,0]:S[1]>=w[1]?S=[w[0],w[1]]:S[0]=-S[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===_&&S[0]>=0||_===w[0]&&S[0]<=w[0]))&&(G(v[0],x,Math.round(S[1]),u[1],n.scrollEasing),G(h[0],x,Math.round(S[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,y(v),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&S[1]>=w[1]-B&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&S[1]<=T&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,y(v,"hide")},e)}}}))}},G=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=J()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=J(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},J=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},Z=function(e,t){try{delete e[t]}catch(o){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},ee=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},te=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},oe=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).load(function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+oe(n)[0]>=0&&a[0]+oe(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+oe(n)[1]>=0&&a[1]+oe(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/js/libs/jquery.scrollTo.min.js?14473201652444";s:6:"source";s:37:"/local/js/libs/jquery.scrollTo.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

;
; 
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/* End */
;
; /* Start:"a:4:{s:4:"full";s:40:"/local/js/libs/lock-tab.js?1447320165317";s:6:"source";s:26:"/local/js/libs/lock-tab.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(a){a.fn.lockTab=function(){return this.each(function(){var b=a(this),c=b.find(".form-control");c.length>1&&(c.last().keydown(function(a){return 9!=a.keyCode||a.shiftKey?void 0:(c.first().focus(),!1)}),c.first().keydown(function(a){return 9==a.keyCode&&a.shiftKey?(c.last().focus(),!1):void 0}))})}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:45:"/local/js/libs/input-filter.js?14473201651183";s:6:"source";s:30:"/local/js/libs/input-filter.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($) {
    /**
     *
     * @param filterName
     * @returns {*}
     */
    $.fn.inputFilter = function(filterName) {

        var keys = {
            zeroLine: 48,
            zeroCalc: 96,
            nineLine: 57,
            nineCalc: 105,
            backspace: 8,
            del: 46,
            leftArrow: 37,
            rightArrow: 39,
            tab: 9
        };

        var filter = {
            number: function(key) {
                return (
                    (key >= keys.zeroLine && key <= keys.nineLine) ||
                    (key >= keys.zeroCalc && key <= keys.nineCalc) ||
                    key == keys.backspace ||
                    key == keys.del ||
                    key == keys.leftArrow ||
                    key == keys.rightArrow ||
                    key == keys.tab
                );
            }
        };

        return this.each(function(){
            var $this = $(this);

            $this.on('keydown', function(ev) {
                if (!filter[filterName](ev.keyCode)) {
                    return false;
                }
            });
        });
    }
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:44:"/local/js/libs/input-number.js?1447320165271";s:6:"source";s:30:"/local/js/libs/input-number.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(n){n.fn.inputNumber=function(u,t,a){var i=function(n){return""===n?n:(n>t&&(n=t),u>n&&(n=u),n)};return this.each(function(){var u=n(this);u.val(i(u.val())),u.on("keyup",function(){u.val(i(u.val()))}),u.on("change",function(){u.val(i(u.val())),a()})})}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/local/js/libs/underscore-min.js?144732016515371";s:6:"source";s:32:"/local/js/libs/underscore-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:34:"/local/js/plugins.js?1447320165733";s:6:"source";s:20:"/local/js/plugins.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/local/js/controllers/-pre-init.js?1447320165139";s:6:"source";s:34:"/local/js/controllers/-pre-init.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
APP = window.APP || {};
APP.Controls = APP.Controls || {};
APP.Helpers = APP.Helpers || {};
APP.Controls.Page = APP.Controls.Page || {};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:35:"/local/js/helpers.js?14473201651647";s:6:"source";s:20:"/local/js/helpers.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *
    */
    APP.Helpers.ajaxCutText = function(text, startSlit, endSplit) {
        if (typeof text == "undefined" || typeof startSlit == "undefined" || endSplit == "undefined") {
            return false;
        }

        var txt = text.split(startSlit);
        txt = txt[1];
        txt = txt.split(endSplit);
        txt = txt[0];
        return txt;
    };


    /**
     * Форматирование чисел
     * @param number
     * @param decimals
     * @param dec_point
     * @param thousands_sep
     * @returns {string}
     */
    APP.Helpers.numberFormat = function(number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;

        // input sanitation & defaults
        if( isNaN(decimals = Math.abs(decimals)) ){
            decimals = 2;
        }
        if( dec_point == undefined ){
            dec_point = ",";
        }
        if( thousands_sep == undefined ){
            thousands_sep = ".";
        }

        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

        if( (j = i.length) > 3 ){
            j = j % 3;
        } else{
            j = 0;
        }

        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


        return km + kw + kd;
    };

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/local/js/controllers/partial/ajax-scroll.js?14525752225144";s:6:"source";s:44:"/local/js/controllers/partial/ajax-scroll.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
    * Контроллер подгрузки элементов по скроллу
    */
    APP.Controls.AjaxScroll = can.Control.extend(
        {
            defaults: {
                startSplit : '<!--  #START_CONTENT# -->',
                endSplit : '<!--  #END_CONTENT# -->',
                $nextButton: '.js-next-button',
                $itemList: '.js-item-list',
                events: {
                    changeSort: 'changeSort'
                },
                callback: undefined
            }
        },
        {
            init: function() {
                this.ajaxStart = false;
                this.reInit();
            },

            '{$nextButton} click': function() {
                this.getNextPage();
            },

            reInit: function() {
                this.paginator = this.element.find('.js-paginator');
                this.customUrl = this.paginator.data('url');
                this.pagen = "PAGEN_" + this.paginator.data('pagen');
                this.$itemList = this.element.find(this.options.$itemList);
                this.count = parseInt(this.paginator.data('count'));
                this.nextPage = parseInt(this.paginator.data('next'));
                this.maxPage = parseInt(this.paginator.data('max'));
                this.perPage = parseInt(this.paginator.data('perpage'));
                this.origPerPage = (this.$itemList.data('perpage') !== undefined)?parseInt(this.$itemList.data('perpage')):"";
                this.$nextButton = this.element.find(this.options.$nextButton);

                if (this.origPerPage < this.perPage) {
                    this.maxPage = Math.ceil(this.count/this.origPerPage);
                    if (this.nextPage > 1) {
                        this.nextPage = this.perPage/this.origPerPage + 1;
                    }
                }

                if (this.nextPage) {
                    this.$nextButton.css( "display", "block");
                }
            },

            getNextPage: function(el ,ev, params) {
                if (this._isNextPage() && !this.ajaxStart) {
                    this.ajaxStart = true;
                    this.options.parent.ajaxScroll = true;
                    this.$nextButton.addClass('animation').css( "display", "none").css( "display", "block");
                    this._makeAjax();
                }
            },

            _makeAjax: _.debounce(function(reset) {
                $.ajax({
                    url: document.location.href,
                    type: 'post',
                    dataType: 'html',
                    data: this._getRequestData(reset),
                    success: this.proxy('_onAjaxSuccess', reset)
                });
            }, 500, this),

            _getRequestData: function(reset) {

                var obj = {
                    ajaxRequest: true,
                    reset: reset
                };

                obj[this.pagen] = parseInt(this.nextPage);
                return obj;
            },

            _onAjaxSuccess: function(reset, data) {

                this.$itemList.append(APP.Helpers.ajaxCutText(data, this.options.startSplit, this.options.endSplit));

                if (typeof this.options.callback != "undefined") {
                    this.options.callback();
                }

                this.options.parent.ajaxScroll = false;
                this.ajaxStart = false;
                this.updatePagInfo();
                this.updateHistory();
                this.$nextButton.removeClass('animation');
                if (typeof this.options.parent.$ajaxArea !== 'undefined') {
                    this.options.parent.$ajaxArea.removeClass('active');
                }
            },

            _isNextPage: function () {
                return !!parseInt(this.nextPage);
            },

            updatePagInfo: function () {
                if (this._isNextPage() && this.nextPage < this.maxPage) {
                    this.nextPage++;
                    this.$nextButton.css( "display", "block");
                } else {
                    this.nextPage = '';
                    this.$nextButton.css( "display", "none");
                }
            },

            updateHistory: function () {
                var url = "?";
                location.search.substr(1).split("&").forEach(function(item) {
                    if ((item.split("=")[0] != "p") && (item.split("=")[0])) {
                        url = url + item.split("=")[0]+"="+item.split("=")[1];
                        url = url + "&";
                    }
                });
                if (parseInt(this.nextPage)) {
                    history.replaceState({}, document.title, url + 'p=' + (this.nextPage-1));
                } else if (parseInt(this.maxPage)){
                    history.replaceState({}, document.title, url + 'p='+this.maxPage);
                }
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/js/controllers/partial/ajax-scroll-similar.js?1452575222635";s:6:"source";s:52:"/local/js/controllers/partial/ajax-scroll-similar.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
    * Контроллер подгрузки подобных элементов
    */
    APP.Controls.AjaxScrollSimilar = APP.Controls.AjaxScroll.extend(
        {
            defaults: {
                startSplit : '<!--  #START_CONTENT_SIMILAR# -->',
                endSplit : '<!--  #START_CONTENT_SIMILAR# -->',
                $nextButton: '.js-next-button-similar',
                $itemList: '.js-item-list-similar'
            }
        },
        {
            updateHistory: function () {
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/js/controllers/partial/head-buttons.js?14473201652945";s:6:"source";s:45:"/local/js/controllers/partial/head-buttons.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер кнопок корзины, избр и сравнения в шапке
    */
    APP.Controls.HeadButtons = can.Control.extend(
        {
            defaults: {
                $button: '.js-head-button',
                compareClass: 'js-head-button-compare',
                favoriteClass: 'js-head-button-favorite',
                cartClass: 'js-head-button-cart',
                activeClass: 'active'
            }
        },
        {
            init: function() {
                this.element.find(this.options.$button).each(function(i, el) {

                    var $el = $(el);
                    var elements = $el.data('elements').toString().split(",");
                    
                    if (elements.length) {

                        if ($el.hasClass(this.options.compareClass)) {
                            APP.compareArray = elements;
                        } else if ($el.hasClass(this.options.favoriteClass)) {
                            APP.favoriteArray = elements;
                        } else if ($el.hasClass(this.options.cartClass)) {
                            APP.cartArray = elements;
                        }
                    }

                }.bind(this));
            },

            getElements: function($el) {
                $.ajax({
                    url: $el.data('url'),
                    type: 'post',
                    dataType: 'json',
                    data: '',
                    success: this.proxy('_onAjaxSuccess', {$el : $el})
                });
            },

            _onAjaxSuccess: function(params, data) {

                if (typeof params.$el !== 'undefined' ) {
                    var $el =  params.$el;

                    if ((data.result) && (typeof data.elements !== 'undefined')) {
                        this.updateCount($el, data.elements);
                    }
                }
            },

            updateCount: function($el, elements) {
                if (elements.length) {
                    $el.html('<span>' + elements.length + '</span>')
                } else {
                    $el.html('')
                }

                if ($el.hasClass(this.options.compareClass)) {
                    APP.compareArray = elements;
                } else if ($el.hasClass(this.options.favoriteClass)) {
                    APP.favoriteArray = elements;
                } else if ($el.hasClass(this.options.cartClass)) {
                    APP.cartArray = elements;
                }
            },

            refresh: function (el, elements) {

                var $el = this.element.find(el);

                if ($el.length) {
                    this.updateCount($el, elements);
                }

            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/js/controllers/partial/button.js?14473201653411";s:6:"source";s:39:"/local/js/controllers/partial/button.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер кнопки доб/уд из корзины/избранного или сравнения
    */
    APP.Controls.Button = can.Control.extend(
        {
            defaults: {
                compareClass: 'js-button-compare',
                favoriteClass: 'js-button-favorite',
                cartClass: 'js-button-cart',
                activeClass: 'active',
                textButton: '.js-button-text'
            }
        },
        {
            init: function() {
                var id = this.element.data('id');

                this.element.addClass('js-inited');
                if ((this.element.hasClass(this.options.compareClass) && ($.inArray(id.toString(), APP.compareArray) > -1))
                        || (this.element.hasClass(this.options.compareClass) && ($.inArray(id, APP.compareArray) > -1))
                        || (this.element.hasClass(this.options.favoriteClass) && ($.inArray(id.toString(), APP.favoriteArray) > -1))
                        || (this.element.hasClass(this.options.favoriteClass) && ($.inArray(id, APP.favoriteArray) > -1))
                        || (this.element.hasClass(this.options.cartClass) && ($.inArray(id.toString(), APP.cartArray) > -1))
                        || (this.element.hasClass(this.options.cartClass) && ($.inArray(id, APP.cartArray) > -1))) {
                    this.element.addClass(this.options.activeClass);
                    this.element.find(this.options.textButton).text(this.element.data('remove-text'));
                    this.element.attr('href', this.element.data('remove'));
                    this.element.attr('title', this.element.data('remove-title'));
                }

            },


            'click': function($el, ev) {
                ev.preventDefault();
                $.ajax({
                    url: this.element.attr('href'),
                    type: 'post',
                    dataType: 'json',
                    data: APP.bxSession,
                    success: this.proxy('_onAjaxSuccess')
                });
            },

            _onAjaxSuccess: function(data) {

                if (data.result && (typeof this.element !== 'undefined') && (this.element !== null)) {

                    this.element.toggleClass(this.options.activeClass);

                    if (this.element.hasClass(this.options.activeClass)) {
                        this.element.attr('href', this.element.data('remove'));
                        this.element.attr('title', this.element.data('remove-title'));
                        this.element.find(this.options.textButton).text(this.element.data('remove-text'));
                    } else {
                        this.element.attr('href', this.element.data('add'));
                        this.element.attr('title', this.element.data('add-title'));
                        this.element.find(this.options.textButton).text(this.element.data('add-text'));
                    }

                    if (typeof data.elements !== 'undefined') {

                        var headElement = this.element.data('head-element');
                        APP.headButtons.refresh(headElement, data.elements);

                    }
                }
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/js/controllers/partial/button-extend.js?14473201652631";s:6:"source";s:46:"/local/js/controllers/partial/button-extend.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер кнопки доб/уд из корзины/избранного или сравнения
    */
    APP.Controls.ButtonExtend = APP.Controls.Button.extend(
        {
            defaults: {
                compareClass: 'js-button-compare',
                favoriteClass: 'js-button-favorite',
                cartClass: 'js-button-cart',
                activeClass: 'active',
                textButton: '.js-button-text',
                cb: null
            }
        },
        {
            init: function() {
                this._super();
            },


            'click': function($el, ev) {
                ev.preventDefault();
                var data = '';

                if (typeof this.options.$countInput !== "undefined") {
                    data = {count: this.options.$countInput.val()};
                }

                $.extend(data, APP.bxSession);

                $.ajax({
                    url: this.element.attr('href'),
                    type: 'post',
                    dataType: 'json',
                    data: data,
                    success: this.proxy('_onAjaxSuccess')
                });
            },

            _onAjaxSuccess: function(data) {

                if (data.result && (typeof this.element !== 'undefined') && (this.element !== null)) {

                    this.element.addClass(this.options.activeClass);

                    if (this.element.hasClass(this.options.activeClass)) {
                        this.element.attr('href', this.element.data('remove'));
                        this.element.attr('title', this.element.data('remove-title'));
                        this.element.find(this.options.textButton).text(this.element.data('remove-text'));
                    } else {
                        this.element.attr('href', this.element.data('add'));
                        this.element.attr('title', this.element.data('add-title'));
                        this.element.find(this.options.textButton).text(this.element.data('add-text'));
                    }

                    if (typeof data.elements !== 'undefined') {

                        var headElement = this.element.data('head-element');
                        APP.headButtons.refresh(headElement, data.elements);

                    }

                    if (this.options.cb !== null) {
                        this.options.cb();
                    }
                }
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/js/controllers/partial/form.js?14473201658473";s:6:"source";s:37:"/local/js/controllers/partial/form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
     * Базовый контроллер форм
     **/
    APP.Controls.Form = can.Control.extend(
        {
            fieldNames: [],
            $fields: {},
            validateRules: {},
            validateMessages: {},
            values: {},
            redirectHref: false,

            init: function() {
                var redirectHref = this.element.data('redirect-href');
                var okPopup = this.element.data('ok-popup');
                if (redirectHref !== undefined) {
                    this.redirectHref = redirectHref;
                }

                if (okPopup !== undefined) {
                    this.okPopup = okPopup;
                } else {
                    this.okPopup = 'popup-success';
                }

                this.$ajaxLoader = this.element.find('.ajax-loader');
                this.action = this.element.attr('action');
                this.element.lockTab();
                this.setFields();
                this.addValidators();
                this.setValidateOptions();

                this._validate();

                if (this.element.data('show')) {
                    var $popup = this.element.closest('.popup');
                    if ($popup.length > 0) {
                        $.fancybox(
                            {
                                href: '#' + $popup.attr('id'),
                                afterShow: this.proxy('_callbackAfterShowPopup'),
                                autoSize: true,
                                autoHeight: true,
                                autoWidth: true,
                                fitToView: false,
                                scrolling: false
                            }
                        );
                    }
                }
            },

            _validate: function() {
                this.element.validate({
                    ignore: [],
                    invalidHandler: function(form, validator) {
                        var errors = validator.numberOfInvalids();
                        if (errors) {
                            validator.errorList[0].element.focus();
                        }
                    },
                    highlight: function(element) {
                        element =  $(element);
                        element.closest('.form-row').addClass('error');
                    },
                    unhighlight: function(element) {
                        element =  $(element);
                        element.closest('.form-row').removeClass('error');
                        element.closest('.form-row').find('.error-container:first .js-error-message-text').html('');
                        element.trigger('checkError');
                    },
                    errorPlacement: function(error, element) {
                        element.closest('.form-row').find('.error-container:first .js-error-message-text').html(error.text());
                        element.trigger('checkError');
                    },
                    submitHandler: this.proxy('submitHandler'),
                    rules: this.validateRules,
                    messages: this.validateMessages
                });
            },

            _callbackAfterShowPopup: function(el, ev) {
                this.element.find('form')
                    .find('input[type!="hidden"], textarea, select')
                    .first()
                    .focus();

            },

            setFields: function() {
                this.element.find('[data-js-validate]').each(this.proxy(function(k, v) {
                    var field = $(v);
                    var fieldName = field.attr('name');
                    this.fieldNames.push();
                    this.$fields[fieldName] = field;
                }));
            },

            setValidateOptions: function() {
                $.each(this.$fields, this.proxy(function(field, el) {
                    this.validateRules[field] = {
                        required: el.data('required'),
                        minlength: el.data('min-length'),
                        maxlength: el.data('max-length'),
                        customEmail: !!el.data('email'),
                        onlyEn: !!el.data('only-en')
                    };
                    this.validateMessages[field] = {
                        required: el.data('required-msg'),
                        minlength: el.data('min-length-msg'),
                        maxlength: el.data('max-length-msg'),
                        customEmail: el.data('email-msg'),
                        onlyEn: el.data('only-en-msg')
                    };
                }));
            },

            getValues: function() {
                return this.element.serialize();
            },

            submitHandler: function() {
                this.$ajaxLoader.show();

                $.ajax({
                    url: this.action,
                    type: 'post',
                    dataType: 'json',
                    data: this.getValues(),
                    success: this.proxy('submitResult')
                });

                return false;
            },

            submitResult: function(data) {
                this.$ajaxLoader.hide();

                var hrefPopup = '#' + this.okPopup;
                var $popupSuccess = $(hrefPopup);
                $popupSuccess.find('.js-success-title').html(data.message.title);
                $popupSuccess.find('.js-success-text').html(data.message.text);

                this.closeFancyTimeout = (data.message.text.length / 10) * 1000;
                if (this.closeFancyTimeout < 4000) this.closeFancyTimeout = 4000;

                if (!data.result && !data.message) {
                    data.message = this.element.data('error-text');
                }

                this.successCallback();

                $.fancybox(
                    {
                        href: hrefPopup,
                        afterClose: function() {
                            clearTimeout(APP.fancyTimeOut);
                            if (this.redirectHref != false && data.result) {
                                this.redirect();
                            }
                            $popupSuccess.removeClass('visible');
                        }.bind(this),
                        afterShow: function() {
                            $popupSuccess.addClass('visible')
                        },
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true
                    }
                );

                if (data.result) {
                    this.element.find('input[type!="submit"], input[type!="hidden"],  textarea').val('');
                }

                APP.fancyTimeOut = setTimeout(this.proxy(function() {
                    $.fancybox.close();

                    if (this.redirectHref != false && data.result) {
                        this.redirect();
                    }
                }), this.closeFancyTimeout);
            },

            successCallback: function() {},

            redirect: function() {

                if (this.redirectHref == 'reload') {
                    document.location.reload();
                } else if (this.redirectHref !== false && this.redirectHref !== 'false') {
                    document.location.href = this.redirectHref;
                }
            },

            addValidators: function() {
                $.validator.addMethod("customEmail",
                    function(value) {
                        return /^([a-zA-Z0-9_\.\-+])+\@(([a-zA-Z0-9_\-\.])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
                    }
                );
                $.validator.addMethod("onlyEn",
                    function(value) {
                        return /^[a-z0-9-_\.]+$/i.test(value);
                    }
                );
            },

            'input keyup': function (e, key) {
                if (key.keyCode == 27) { //Escape button
                    $.fancybox.close();
                }
            }
        }
    );

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/local/js/controllers/partial/form-transform.js?14474146626074";s:6:"source";s:47:"/local/js/controllers/partial/form-transform.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
     * Контроллер формы отправки резюме
     **/
    APP.Controls.FormTransform = APP.Controls.Form.extend(
        {
            init: function() {
                this._super();
                this.url = this.element.data('url-upload');
                this.delFileUrl = this.element.data('url-del-file');
                this.uploadClass = '.js-upload';
                this.$fileName = this.element.find('.js-file-name');
                this.$fileInput = this.element.find('[name=file]');
                this.fileList = '.js-file-list';
                this.uploadFiles = [];
                this.$errorMessage = this.element.find('.js-file-error');
                this.$errorMessage.hide();
                this.$errorMessage.text(this.$errorMessage.data('text'));
                this.success = false;

                if (!$('html').hasClass('ie9')) {
                    this.initUploads();
                } else {
                    this.element.find(this.fileList).closest('.form-row').remove();
                }

            },

            initUploads: function() {
                this.dropzone = new Dropzone(this.uploadClass, {
                    url: this.url,
                    uploadMultiple: false,
                    paramName: "file",
                    maxFilesize: 5,
                    acceptedFiles: '.pdf, .odt , .ppt, .doc, .docx, .jpg, .png, .zip, .7z',
                    previewsContainer: this.fileList,
                    previewTemplate:  '<div class="dz-preview preview"><b data-dz-name></b><span> (<span data-dz-size></span>) </span><a href="javascript:void(0);" class="dz-remove" data-dz-remove></a></div>',
                    dictFileTooBig: 'Файл имеет недопустимый размер, макмимальный размер файла 5Мb',
                    dictInvalidFileType: 'Файл имеет недопустимый типа, разрешеные типы .pdf, .odt , .ppt, .doc, .docx, .jpg, .png, .zip, .7z',

                    success: function(file, data) {
                        if (data.result != false) {
                            var elem = {};
                            elem.name = file.name;
                            elem.value = data.result;
                            this.$errorMessage.fadeOut();
                            this.uploadFiles.push(elem);
                            this.writeIdInInput();
                            this.$ajaxLoader.hide();
                        }
                    }.bind(this),

                    error: function(file, error) {
                        this.success = false;
                        this.$ajaxLoader.hide();
                        this.deleteUploadFile(file.name);
                        this.writeIdInInput();
                        this.$errorMessage.text(error).show();
                        var _ref;
                        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                    }.bind(this),

                    uploadprogress: function(file, progress, bytesSent) {
                        this.$ajaxLoader.show();
                    }.bind(this),

                    maxfilesexceeded: function(file) {
                        this.success = false;
                        this.$ajaxLoader.hide();
                        this.deleteUploadFile(file.name);
                        this.writeIdInInput();
                        var _ref;
                        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                    },

                    removedfile: function(file) {

                        if (!this.success) {
                            this.deleteUploadFile(file.name);
                        }

                        this.writeIdInInput();
                        var _ref;
                        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                    }.bind(this)

                });
            },

            successCallback: function() {
                if (typeof this.dropzone != "undefined") {
                    this.success = true;
                    this.dropzone.removeAllFiles();
                    this.$fileName.html(this.$fileName.data('no-file'));

                    setTimeout(function() {this.success = true;}.bind(this), 500)
                }
            },

            deleteUploadFile: function(name) {

                this.uploadFiles = _.reject(
                    this.uploadFiles,
                    function(el) {

                        if(el.name === name) {
                            this.deleteFromServer(el.value);
                            return true;
                        }

                        return false;
                    }.bind(this)
                );
            },

            deleteFromServer: function($id) {

                if (this.delFileUrl && $id) {

                    var data = {
                        'id': $id
                    };

                    $.extend(data, APP.bxSession);

                    $.ajax({
                        url: this.delFileUrl,
                        type: 'post',
                        dataType: 'json',
                        data: data
                    });
                }
            },

            writeIdInInput: function() {
                var value = '';
                value = _.map(this.uploadFiles, function(el) {return el.value; }).join(',');
                this.$fileInput.val(value).trigger('input');

                if (value.length) {
                    this.$fileInput.closest('.form-row').removeClass('error');
                }
            }
        }
    );

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/local/js/controllers/partial/form-search.js?14474104381896";s:6:"source";s:44:"/local/js/controllers/partial/form-search.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер фильтра
    */
    APP.Controls.FormSearch = can.Control.extend(
        {
            init: function () {
                this.$clear = this.element.find('.js-clear');
                this.$enter = this.element.find('.js-enter');
                this.$searchInput = this.element.find('.js-search-input');
                this.showHideIcon();
            },
            'input input': _.debounce(function($el, ev) {
                var serForm = this.element.serialize();
                var url = this.element.attr('data-action') + '?' + serForm;
                this.showHideIcon();
                can.route.attr(can.deparam(serForm), true);
                this.options.parent.sendRequest(url);
            }, 500, this),

            'submit': function($el, ev) {
                var input = this.element.find('input').first();
                var serForm = this.element.serialize();
                var url = this.element.attr('data-action') + '?' + serForm;

                if (input.val().length === 0) {
                    this.options.parent.sendRequest(url);
                    return false;
                }
            },

            '.js-clear click': function($el) {
                var input = $el.closest('form').find('.js-search-input');
                input.val('');
                input.focus();
                return false;
            },

            showHideIcon: function() {
                var val = this.$searchInput.val();
                if (val.length > 0) {
                    this.$clear.show();
                    this.$enter.hide();
                } else {
                    this.$clear.hide();
                    this.$enter.show();
                }
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/js/controllers/partial/header.js?14473201653227";s:6:"source";s:39:"/local/js/controllers/partial/header.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {

    /**
     * Контроллер шапки
     **/

    APP.Controls.Header = can.Control.extend({
        defaults: {
            topBarButton: '.js-top-bar-button',
            topBar: '.js-top-bar',
            $topMenu: '.js-top-menu',
            $searchWrap: '.js-search-result-wrap',
            $resultList: '.js-result-list',
            $resultEmpty: '.js-result-list-empty'
        }
    },{
        init: function() {
            this.$topBar = this.element.find(this.options.topBar);

            this.element.find('.js-head-buttons').each(function(){
                APP.headButtons = new APP.Controls.HeadButtons(this);
            });

            this.$searchInput =  this.element.find('.js-form-search');
            this.$ajaxArea = this.element.find('.js-ajax-area');
            this.$topMenu = this.element.find(this.options.$topMenu);
            this.$searchWrap = this.element.find(this.options.$searchWrap);

            if (can.route.bindings.pushstate) {
                can.route.bindings.pushstate.root = document.location.pathname;
            }

            can.route.ready();

            if (this.$searchInput.length) {
                new APP.Controls.FormSearch(this.$searchInput, {parent: this});
            }
        },

        '{topBarButton} click': function($el, event) {
            event.preventDefault();

            this.$topBar.slideToggle(400, function() {
                var input = this.$searchInput.find('input').first();
                input.val('');
                input.focus();
                $(this.options.$resultList).hide();
                $(this.options.$resultEmpty).hide();
                $(this.$topMenu).show();


            }.bind(this));
        },

        sendRequest: _.debounce(function(url) {

            if (typeof url === "undefined") {
                url = document.location.href;
            }

            this.$ajaxArea.addClass('active');
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'html',
                data: {
                    ajaxRequest: true
                },
                success: this.proxy('successRequest')
            });


        }, 500, this),

        successRequest: function(data) {

            this.$ajaxArea.removeClass('active');

            if (data.length > 0) {
                this.$searchWrap.html(data);
                this.initAfterAjax();
                this.$ajaxArea = this.element.find('.js-ajax-area');

                if (this.$searchWrap.find(this.options.$resultList).length) {
                    this.$topMenu.hide();
                } else {
                    this.$topMenu.show();
                }
            }
        },

        initAfterAjax: function() {
            this.initButtons();
        },

        initButtons: function () {
            this.element.find('.js-button').each(function() {
                if (!$(this).hasClass('js-inited')) {
                    new APP.Controls.Button(this);
                }
            });
        }
    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/local/js/controllers/partial/range.js?14527487576426";s:6:"source";s:38:"/local/js/controllers/partial/range.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    /**
     * Контроллер ползунков
     **/
    APP.Controls.Range = can.Control.extend(
        {
            defaults: {
                filter: undefined,
                inputSelector: '.js-input',
                events: {
                    reInit: 'reInit'
                }
            }
        },
        {
        init: function() {
            var option = {};
            var $container = this.element;
            this.$input = this.element.find('input[type="text"]');
            this.inputCount = this.$input.length;

            if(this.inputCount < 1) {
                return;
            }

            // настройки
            var connect = this.inputCount > 1;
            var start = this.inputCount < 2 ? this.$input[0].value : [this.$input[0].value, this.$input[1].value];
            var min = $container.data('min') || 0;
            var max = $container.data('max') || 0;
            var range = $container.data('range') || 0;

            this.$range = $('<div class="range"></div>');
            this.element.append(this.$range);

            this.keyUp = false;

            if (!range) {
                option = {
                    start: start,
                    connect: connect,
                    //step: 1,

                    range: {
                        'min': min,
                        'max': max
                    },
                    format: {
                        to: function ( value ) {
                            return value;
                        },
                        from: function ( value ) {
                            return value;
                        }
                    }
                };

            } else {
                $.each(range, function(i, v) {
                    range[i] = parseFloat(v);
                });

                option = {
                    start: start,
                    connect: connect,
                    range: range,
                    snap: true,
                    format: {
                        to: function ( value ) {
                            return value;
                        },
                        from: function ( value ) {
                            return value;
                        }
                    }
                };
            }

            this.optionSlider = option;
            noUiSlider.create(this.$range[0], option);

            this.bindEvents();
        },

        'input[type="text"] change': function($el, ev) {
            if (typeof this.timer != "undefined") {
                clearTimeout(this.timer);
            }

            this.timer = setTimeout(function() {
                this.changeEventInput($el);
            }.bind(this), 1000);
        },

        'input[type="text"] keyup': function($el, ev) {
            if (typeof this.timer != "undefined") {
                clearTimeout(this.timer);
            }

            var value = $el.closest('.input').siblings('.input').find('input').val();
            if ($el.hasClass('min')) {
                var valMax = value;
            } else if ($el.hasClass('max')) {
                var valMin = value;
            }

            this.timer = setTimeout(function() {
                var val = $el.val();
                val = ''+ val;
                val = val.replace(',', '.');

                if (typeof valMax !== "undefined" && parseFloat(val) > parseFloat(valMax)) {
                    $el.val(valMax);
                } else if (typeof valMin !== "undefined" && parseFloat(val) < parseFloat(valMin)) {
                    $el.val(valMin);
                } else {
                    $el.val(val);
                }
                
                this.keyUp = true;
                this.changeEventInput($el);
            }.bind(this), 1000);

        },

        changeEventInput: function($el) {
            this.changeElem = $el;
            if ($el.hasClass('max')) {
                this.$range[0].noUiSlider.set([null, $el.val()]);
            } else {
                this.$range[0].noUiSlider.set([$el.val(), null]);
            }
        },

        bindEvents: function() {
                this.$range[0].noUiSlider.on('update', function(values, handle) {
                    var change = false;

                    if (this.inputCount > 0) {
                        if (this.$input.eq(0).val() != values[0]) {
                            change = true;
                        }
                        if (!this.keyUp) {
                            this.$input.eq(0).val(values[0]);
                        }
                    }

                    if (this.inputCount > 1) {
                        if (this.$input.eq(1).val() != values[1]) {
                            change = true;
                        }

                        if (!this.keyUp) {
                            this.$input.eq(1).val(values[1]);
                        }
                    }

                }.bind(this));

                this.$range[0].noUiSlider.on('slide', function() {
                    this.keyUp = false;
                }.bind(this));

                this.$range[0].noUiSlider.on('set', function(values, handle) {

                    if (this.changeElem) {
                        this.changeElem.closest(this.options.inputSelector).removeClass('disable');
                        this.changeElem.removeAttr('disabled');
                    } else {
                        this.$input.eq(handle).closest(this.options.inputSelector).removeClass('disable');
                        this.$input.eq(handle).removeAttr('disabled');
                    }

                    if (this.options.filter != undefined) {
                        this.options.filter.trigger('updateInput');
                    }

                    if (handle == 1) {
                        this.changeElem = false;
                    }

                }.bind(this));
            },

        '{events.reInit}': function() {
            this.$range[0].noUiSlider.destroy();
            noUiSlider.create(this.$range[0], this.optionSlider);
            this.bindEvents();
        }
    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/js/controllers/partial/slider.js?14473201651874";s:6:"source";s:39:"/local/js/controllers/partial/slider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер слайдера
    */
    APP.Controls.Slider = can.Control.extend(
        {
            defaults: {
                pagerSelector: '>.js-pager',
                slidesSelector: '>.js-slides',
                nextSelector: '.js-next',
                prevSelector: '.js-prev',
                carousel: true
            }
        },
        {
            init: function() {
                this.slider = this.element;
                this.slidePager = this.element.find(this.options.pagerSelector);
                this.slidesCnt = this.element.find(this.options.slidesSelector + '> div.slide').length;

                this.defaultOptions = {
                    auto: true,
                    controls: false,
                    pager: this.slidesCnt > 1 ,
                    pagerCustom: this.slidePager,
                    autoHover: true,
                    pause: 100000,
                    adaptiveHeight: true,
                    speed: 500,
                    minSlides: (typeof this.slider.data('slides') !== 'undefined') ? this.slider.data('slides') : 6,
                    maxSlides: (typeof this.slider.data('slides') !== 'undefined') ? this.slider.data('slides') : 6
                };

                this.defaultOptions.slideWidth = this.element.find(this.options.slidesSelector).width() / this.defaultOptions.maxSlides;

                this.topSlider = this.element.find(this.options.slidesSelector).bxSlider(this.defaultOptions);
            },

            '{nextSelector} click': function() {
                this.topSlider.goToNextSlide();
            },

            '{prevSelector} click': function() {
                this.topSlider.goToPrevSlide();
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/local/js/controllers/partial/slideshow.js?14473201653819";s:6:"source";s:42:"/local/js/controllers/partial/slideshow.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
     * Контроллер слай
     */
    APP.Controls.Slideshow = can.Control.extend(
        {
            defaults: {
                desktopWidth: 1200,
                slide: '.js-slide',
                nextButton: '.js-next',
                prevButton: '.js-prev',
                timeoutValue: 20000,
                fx: 'fade'
            }
        },
        {
            init: function() {
                this.width = window.outerWidth;
                // настройки
                var slide = this.element.data('slides');
                slide = slide != undefined ? slide : this.options.slide;
                this.slide = slide;

                var prev = this.element.data('prev');
                prev = prev != undefined ? prev : this.options.prevButton;

                var next = this.element.data('next');
                next = next != undefined ? next : this.options.nextButton;

                this.prev = $(prev);
                this.next = $(next);

                var timeout = this.element.data('timeout');
                timeout = timeout != undefined ? timeout : this.options.timeoutValue;

                var fx = this.element.data('fx');
                fx = fx != undefined ? fx : this.options.fx;

                var fxValues = [
                    'fade',
                    'scrollHorz',
                    'scrollVert',
                    'tileSlide',
                    'tileBlind'
                ];

                if (fx === 'random') {
                    fx = fxValues[Math.floor(Math.random() * fxValues.length)];
                    this.element.find(this.slide).each(function() {
                        var $slide = $(this);
                        $slide.attr('data-cycle-fx', fxValues[Math.floor(Math.random() * fxValues.length)]);
                    });
                }
                var videoList = this.element.find('video');

                this.element.on('cycle-update-view', function(event, optionHash, slideOptionsHash, currentSlideEl) {
                    var $slide = $(currentSlideEl);

                    if (this.width > this.options.desktopWidth) {
                        videoList.each(function() {
                            this.pause();
                        });

                        var $videos = $slide.find('video');
                        if ($videos.length > 0) {
                            $videos.each(function() {

                                this.play();
                            });
                        }

                    }


                }.bind(this));

                this.element.cycle({
                    log: false,
                    fx: fx,
                    timeout: timeout,
                    prev: prev,
                    next: next,
                    slides: slide
                });

                this.blinkNav();
            },

            /**
             * Блинк
             */
            blinkNav: function() {
                if (typeof this.item != "undefined") {
                    clearInterval(this.item);
                }

                this.item = setInterval(function() {
                    this.prev.addClass('active');

                    setTimeout(function() {
                        this.next.addClass('active');
                        this.prev.removeClass('active');
                    }.bind(this), 600);

                    setTimeout(function() {
                        this.next.removeClass('active');
                    }.bind(this), 1200);
                }.bind(this), 10000);
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/local/js/controllers/partial/slide-slon.js?14473201651619";s:6:"source";s:43:"/local/js/controllers/partial/slide-slon.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
     * Контроллер слай
     */
    APP.Controls.SlideSlon = can.Control.extend(
        {
            defaults: {
                startCallback: undefined,
                endCallback: undefined
            }
        },
        {
            init: function() {
                this.$allVideo = $('video');
                this.$videos = this.element.find('video');

            },

            startFunction: function() {
                this.pauseAllVideo();

                if (this.$videos.length > 0) {
                    var currentVideo = this.$videos.first();
                    currentVideo[0].play();
                }

                if (typeof this.options.startCallback != "undefined") {
                    this.options.startCallback();
                }
            },

            'video ended': function() {
                this.endedFunction();
            },

            endedFunction: function() {
                this.pauseAllVideo();

                if (this.$videos.length > 0) {
                    this.$videos.each(function(i, v) {
                        v.pause();
                    });
                }

                if (typeof this.options.endCallback != "undefined") {
                    this.options.endCallback();
                }
            },

            pauseAllVideo: function () {
                this.$allVideo.each(function() {
                    this.pause();
                });
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/local/js/controllers/partial/scroll-page.js?14473201651154";s:6:"source";s:44:"/local/js/controllers/partial/scroll-page.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
     * ScrollPage
     * @type {void|*}
     */
    APP.Controls.ScrollPage = can.Control.extend({
        defaults: {
            reserveHeight:    500,
            $nextPageElement: false // element for next page getting
        }
    }, {
        init: function() {
            this.tryToLoad();
        },

        /**
         *
         */
        '{window} scroll': function() {
            this.tryToLoad();
        },

        /**
         *
         */
        '{window} resize': function() {
            this.tryToLoad();
        },

        /**
         * Try to load next page
         * @private
         */
        tryToLoad: function() {
            var blockTop     = this.element.offset().top,
                blockHeight  = this.element.height(),
                windowTop    = $(window).scrollTop(),
                windowHeight = $(window).height();

            if (blockTop + blockHeight < windowTop + windowHeight + this.options.reserveHeight) {
                this.options.$nextPageElement.trigger('getNextPage');
            }
        }
    });
})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/js/controllers/partial/state-toggler.js?14473201652152";s:6:"source";s:46:"/local/js/controllers/partial/state-toggler.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {

    /**
     * Контроллер переключения состояний
     **/

    APP.Controls.StateToggler = can.Control.extend({
        defaults: {
            state: '.js-state',
            toggler: '.js-state-toggler',
            activeClass: 'active',
            parent: '.js-toggle-state',
            inited: undefined
        }
    },{
        init: function() {
            this.state = '';
            var $childrenTogglerList = this.element.find(this.options.parent + ' ' + this.options.toggler);
            var $childrenStateList = this.element.find(this.options.parent + ' ' + this.options.state);
            this.$togglerList = this.element.find(this.options.toggler).not($childrenTogglerList);
            this.$stateList = this.element.find(this.options.state).not($childrenStateList);
            var $toggler = (this.$togglerList.filter('.'+this.options.activeClass).length > 0)? this.$togglerList.filter('.'+this.options.activeClass) : this.$togglerList.first();
            this.changeState($toggler);
        },

        '{toggler} click': function($toggler, event) {
            this.changeState($toggler);
        },

        changeState: function($toggler) {

            var state = $toggler.data('state');
            var $state = $('#' + state);

            if ($state.length < 1) {
                return;
            }

            this.$stateList.hide().removeClass(this.options.activeClass);
            $state.show().addClass(this.options.activeClass);

            this.$togglerList.removeClass(this.options.activeClass);
            $toggler.addClass(this.options.activeClass);

            this.element.removeClass(this.state);
            this.element.addClass(state);

            this.state = state;
        },

        reInit: function() {
            var $toggler = (this.$togglerList.filter('.'+this.options.activeClass).length > 0)? this.$togglerList.filter('.'+this.options.activeClass) : this.$togglerList.first();
            this.changeState($toggler);
        }


    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/js/controllers/partial/tabs.js?14473201652911";s:6:"source";s:37:"/local/js/controllers/partial/tabs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер табов
    */
    APP.Controls.Tabs = can.Control.extend(
        {
            defaults: {
                header: '.js-header',
                headerItem: '.js-tab-header',
                content: '.js-content',
                pane: '.js-tab'

            }
        },
        {
            init: function() {
                this.$content = this.element.find(this.options.content);
                this.$paneList = this.$content.find(this.options.pane);

                setTimeout(
                    function() {
                        this.doMagicWithCols(this.element.find('.js-tab.active'));
                    }.bind(this)
                    , 10
                );
            },
            
            '{headerItem} click': function($el, ev) {
                if ($el.hasClass('active')) {
                    return false;
                }

                var hash = $el.attr('href');
                $el
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                this.$paneList
                    .removeClass('active')
                    .filter(hash)
                    .addClass('active');

                setTimeout(
                    function() {
                        this.doMagicWithCols(this.element.find('.js-tab.active'));
                    }.bind(this)
                    , 10
                );


                return false;
            },

            doMagicWithCols: function($el) {
                //выравниваем все строки "таблицы"
                var $heads = $el.find('.js-table-head');
                var $cols = $el.find('.js-col');
                $heads.each(function(i, v) {

                    //ищем макс. высоту

                    var minHeight = 0;

                    if ($(v).outerHeight() > minHeight) {
                        minHeight = $(v).outerHeight();
                    }

                    $cols.each(function(j, v) {

                        var cellH = $(v).find('.js-table-cell').eq(i).outerHeight();
                        if (cellH > minHeight) {
                            minHeight = cellH;
                        }

                    });

                    //проставляем

                    $(v).outerHeight(minHeight);

                    $cols.each(function(j, col) {
                        $(col).find('.js-table-cell').eq(i).outerHeight(minHeight);
                    });

                }.bind(this));

            },

            '{window} resize': function () {
                this.doMagicWithCols(this.element.find('.js-tab.active'));
            }
        }
    );

})(jQuery, APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/js/controllers/partial/content-toggler.js?14473201651637";s:6:"source";s:48:"/local/js/controllers/partial/content-toggler.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер сворачивания/рзворачивания контента
     **/

    APP.Controls.ContentToggler = can.Control.extend({
        defaults: {
            content: '.js-content',
            toggler: '.js-content-toggler',
            activeClass: 'active',
            parent: '.js-toggle-content',
            closeButton: '.js-content-close'
        }
    },{
        init: function() {
            var $childrenContentList = this.element.find(this.options.parent + ' ' + this.options.content);
            this.$content = this.element.find(this.options.content).not($childrenContentList).first();

            var $childrenTogglerList = this.element.find(this.options.parent + ' ' + this.options.toggler);
            this.$toggler = this.element.find(this.options.toggler).not($childrenTogglerList).first();

            this.collapseToggler = this.element.data('collapse-toggler') === true;
        },

        '{toggler} click': function($el, event) {
            event.preventDefault();
            this.changeState();
        },

        '{closeButton} click': function($el, event) {
            event.preventDefault();
            this.changeState();
        },

        changeState: function() {
            this.$toggler.toggleClass(this.options.activeClass);
            this.$content.toggleClass(this.options.activeClass).slideToggle();
            if (this.collapseToggler) {
                this.$toggler.slideToggle(200);
            }
        }
    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/local/js/controllers/partial/compare-tab.js?1447320165256";s:6:"source";s:44:"/local/js/controllers/partial/compare-tab.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";

    /**
     * Контроллер вкладок
     */
    APP.Controls.CompareTab = can.Control.extend({

            init: function() {
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/js/controllers/partial/filter.js?14527487574945";s:6:"source";s:39:"/local/js/controllers/partial/filter.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер фильтра
    */
    APP.Controls.Filter = can.Control.extend(
        {
            defaults: {
                events: {
                    restoreFilter: 'restoreFilter',
                    updateInput: 'updateInput'
                },

                inputSelector: '.js-input'
            }
        },
        {
            init: function() {
                this.inputs = this.element.find('.js-input');
                this.inputs.addClass('disable').find('input').attr('disabled', 'disabled');
                this.populate();
                this.inited = true;
            },

            'label click': _.debounce(function(el, ev) {
                var item = el.find('input');
                var disable = item.attr('disabled');
                if (disable === "disabled") {
                    item.removeAttr('disabled');
                    item.prop('checked', true).change();
                } else {
                    item.attr('disabled', 'disabled');
                    item.prop('checked', false).change();
                }

                this.disableInput(el.closest(this.options.inputSelector));

            }, 100),

            '{inputSelector} click': _.debounce(function(el, ev) {
                if (el.hasClass('disable')) {
                    el.removeClass('disable');
                    el.find('input[type="text"]').removeAttr('disabled').change().focus();
                }
            }, 100),

            disableInput: function(el) {
                var item = el.find('input');
                var disable = item.filter('[disabled!="disabled"]');
                if (disable.length === 0 && !el.hasClass('disable') ) {
                    el.addClass('disable');
                }
            },

            'input change': _.debounce(function() {
                this.updateInput();
            }, 500, this),

            populate: _.debounce(function(changeTrigger) {
                changeTrigger = changeTrigger || false;
                var param = can.deparam(document.location.search.replace('?', ''));

                if (typeof param != "undefined" && Object.keys(param).length) {
                    this.element.removeClass('disable');

                    $.each(param, function(i, val) {
                        if (val instanceof Array) {
                            $.each(val, function(j, v) {
                                var elem = this.element.find('[name="'+i+'[]"]').filter('[value="'+v+'"]');
                                elem.prop('checked', true);
                                elem.closest(this.options.inputSelector).removeClass('disable');
                                elem.removeAttr('disabled');

                                if (elem.parent().hasClass('js-state-toggler')) {
                                    elem.parent().siblings().removeClass('active');
                                    elem.parent().addClass('active');
                                }
                            }.bind(this));
                        } else {

                            this.element.find('[name="'+i+'"]').each(function(k, v) {
                                var elem = $(v);
                                if (changeTrigger) {
                                    elem.val(val).change();
                                } else {
                                    elem.val(val);
                                }

                                elem.closest(this.options.inputSelector).removeClass('disable');
                                elem.removeAttr('disabled');

                            }.bind(this));
                        }
                    }.bind(this));
                } else {
                    //this.element.addClass('disable');
                }

                if (this.inited) {
                    this.inited = false;
                    this.options.parent.initRange();
                }
            }, 500, this),

            '{events.restoreFilter}': function() {
                this.element.get(0).reset();
                this.inputs.addClass('disable').find('input').attr('disabled', 'disabled');
                //this.updateInput();
                can.route.attr({}, true);
                this.options.parent.sendRequest();
                $('.js-range').trigger('reInit');
            },

            updateInput: _.debounce(function() {
                this.options.parent.restore = true;
                can.route.attr(can.deparam(this.element.serialize()), true);
                this.options.parent.sendRequest();
            }, 500, this),

            '{events.updateInput}': function() {
                this.updateInput();
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/js/controllers/partial/count-button.js?14473201652316";s:6:"source";s:45:"/local/js/controllers/partial/count-button.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, APP, undefined) {
    "use strict";
    /**
    *   Контроллер количества элементов
    */
    APP.Controls.CountButton = can.Control.extend(
        {
            defaults: {
                maxCount: 99999
            }
        },
        {
            init: function() {
                this.$countButton = this.element;
                this.$incButton = this.$countButton.find('.js-inc');
                this.$decButton = this.$countButton.find('.js-dec');
                this.$valueButton = this.$countButton.find('.js-val');
                this.currentValue = parseInt(this.$valueButton.val());
                this._updateButton();
            },

            '.js-inc click': function(el) {
                if (!el.hasClass('disabled')) {
                    this.currentValue = parseInt(this.$valueButton.val());
                    this.currentValue++;
                    this.$valueButton.val(this.currentValue);
                    this._updateButton();
                }
                return false;
            },

            '.js-dec click': function(el) {
                if (!el.hasClass('disabled')) {
                    this.currentValue = parseInt(this.$valueButton.val());
                    this.currentValue--;
                    this.$valueButton.val(this.currentValue);
                    this._updateButton();
                }
                return false;
            },

            _updateButton: function() {
                if (isNaN(this.currentValue)) {
                    this.$valueButton.val('1');
                    this.currentValue = 1;
                }

                if ((this.currentValue <= this.options.maxCount || this.currentValue > this.options.maxCount) && this.currentValue > 1) {
                    this.$decButton.removeClass('disabled');
                } else {
                    this.$decButton.addClass('disabled');
                }

                if (this.currentValue < this.options.maxCount && this.currentValue > 0) {
                    this.$incButton.removeClass('disabled');
                } else {
                    this.$incButton.addClass('disabled');
                }
            }
        }
    );

})(jQuery, APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/js/controllers/partial/go-up.js?1447320165557";s:6:"source";s:38:"/local/js/controllers/partial/go-up.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {

    /**
     * Кнопка "Вверх"
     **/
    APP.Controls.GoUp = can.Control.extend({
        init: function() {
            this.show = 400;
        },

        '{window} scroll': function() {
            if ($(window).scrollTop() > this.show) {
                this.element.addClass('vis');
            } else {
                this.element.removeClass('vis');
            }
        },

        'click': function() {
            $.scrollTo(0, 500);
        }
    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/js/controllers/page/basket.js?14473201653263";s:6:"source";s:36:"/local/js/controllers/page/basket.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер корзины
     */
    APP.Controls.Page.Basket = can.Control.extend(
        {
            defaults: {
                $totalSumm: '.js-total-summ',
                $row: '.js-row',
                $group: '.js-group',
                $detail: '.js-detail',
                $noItems: '.js-no-items',
                $price: '.js-price'
            }
        },
        {
            init: function() {
                this.element.find('.js-counter').inputFilter('number').inputNumber(1, 99999, function() {});
            },

            '.js-delete click': function($el) {
                this.$row = $el.closest(this.options.$row);
                this._makeAjax('delete', $el.attr('href'));
                return false;
            },

            '.js-counter input': _.debounce(function($el) {
                var value = parseInt($el.val());

                if (!value || (value < 1)) {
                    $el.val(1);
                }

                this.$row = $el.closest(this.options.$row);
                this._makeAjax('modify', $el.data('url'), {count: value});
                return false;
            }, 500, this),

            _makeAjax: function(action, url, data) {

                var dataRequest = {};
                if (typeof data != "undefined") {
                    dataRequest = data;
                }

                $.extend(dataRequest, APP.bxSession);

                $.ajax({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    data: dataRequest,
                    success: this.proxy('_onAjaxSuccess', {action: action})
                });
            },

            _onAjaxSuccess: function(params, data) {
                if (data.result) {

                    if (typeof data.totalSumm !== 'undefined') {
                        this.updateTotalSumm(data.totalSumm);
                    }

                    if (params.action == 'delete') {

                        if(typeof this.$row != 'undefined') {
                            var $group = this.$row.closest(this.options.$group);
                            this.$row.remove();
                            if (this.element.find(this.options.$row).length == 0) {
                                $(this.options.$detail).hide();
                                $(this.options.$noItems).show();
                            } else if ($group.find(this.options.$row).length == 0) {
                                $group.remove();
                            }
                        }

                    } else {
                        if (typeof data.summ !== 'undefined') {
                            this.$row.find(this.options.$price).html(data.summ);
                        }
                    }

                    APP.headButtons.refresh('.js-head-button-cart', data.elements);
                }
            },

            updateTotalSumm: function (summ) {
                this.element.find(this.options.$totalSumm).html(summ);
            }
        }
    );

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/local/js/controllers/page/main.js?1447320165781";s:6:"source";s:34:"/local/js/controllers/page/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер главной страницы
     **/
    APP.Controls.Page.Main = can.Control.extend({
        init: function() {
            this.element.find('.js-range').each(function() {
                new APP.Controls.Range(this);
            });

            this.element.find('.js-slideshow').each(function() {
                new APP.Controls.Slideshow(this);
            });

            this.element.find('.js-toggle-state').each(function() {
                new APP.Controls.StateToggler(this);
            });

            this.element.find('.js-toggle-content').each(function() {
                new APP.Controls.ContentToggler(this);
            });
        }
    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/local/js/controllers/page/not-found.js?1447320165374";s:6:"source";s:39:"/local/js/controllers/page/not-found.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер 404 страницы
     **/
    APP.Controls.Page.NotFound = can.Control.extend({
        init: function() {
            this.initLighting();
        },

        initLighting: function() {
            this.element.lightError();
        }
    });

})(jQuery, window.APP);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/js/controllers/page/item-list.js?14525752226870";s:6:"source";s:39:"/local/js/controllers/page/item-list.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер каталога страницы
     **/
    APP.Controls.Page.ItemList = can.Control.extend(
        {
            defaults: {
                startSplit: '<!--  #START_CONTENT_FILTER# -->',
                endSplit: '<!--  #END_CONTENT_FILTER# -->'
            }
        },
        {
        init: function() {
            this.filter = this.element.find('.js-filter');
            this.$ajaxArea = this.element.find('.js-ajax-area');
            this.$scrollPage = this.element.find('.js-scroll-page');
            this.$scrollPageSimilar = this.element.find('.js-scroll-page-similar');
            this.$sort = this.element.find('.js-sort');
            this.$method = this.element.find('.js-method');
            this.$stateToggler = this.element.find('.js-toggle-state');
            this.restoreParam = can.deparam(this.filter.serialize());
            this.ajaxScroll = false;
            this.restore = true;

            if (can.route.bindings.pushstate) {
                can.route.bindings.pushstate.root = document.location.pathname;
            }
            can.route.ready();

            this.filterInstance = new APP.Controls.Filter(this.filter, {parent: this} );
            this.scrollPageContoller = new APP.Controls.AjaxScroll(this.$scrollPage, {parent: this, callback: this.proxy('initButtons')});
            this.$scrollPageContollerSimilar = new APP.Controls.AjaxScrollSimilar(this.$scrollPageSimilar, {parent: this, callback: this.proxy('initButtons')});

            this.initAfterAjax();
            this.populateSort();
            this.stateController =  new APP.Controls.StateToggler(this.$stateToggler);

        },

        sendRequest: _.debounce(function(url) {

            if (typeof url === "undefined") {
                url = document.location.href;
            }

            this.$ajaxArea.addClass('active');
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'html',
                data: {
                    ajaxRequest: true
                },
                success: this.proxy('successRequest')
            });
        }, 500, this),

        successRequest: function(data) {
            this.$ajaxArea.removeClass('active');
            if (this.restore) {
                this.filter.removeClass('disable');
            }

            if (data.length > 0) {
                data = APP.Helpers.ajaxCutText(data, this.options.startSplit, this.options.endSplit);
                this.$scrollPage.html(data);
                this.initAfterAjax();
                this.populateSort();
            }
        },

        initAfterAjax: function() {
            this.scrollPageContoller.reInit();
            this.$scrollPageSimilar = this.element.find('.js-scroll-page-similar');
            this.$scrollPageContollerSimilar = new APP.Controls.AjaxScrollSimilar(this.$scrollPageSimilar, {parent: this, callback: this.proxy('initButtons')});
            this.initButtons();

            if (this.filter.find('input[type!="hidden"]').length == 0) {
                this.element.find('.js-reset-filter').hide();
            }
        },

        initButtons: function () {
            this.element.find('.js-button').each(function() {
                if (!$(this).hasClass('js-inited')) {
                    new APP.Controls.Button(this);
                }
            });
        },

        populateSort: function() {
            var param = can.deparam(document.location.search.replace('?', ''));
            if (typeof param == "undefined") {
                return false;
            }

            if (typeof param.SORT == "undefined" && typeof param.METHOD == "undefined") {
                return false;
            }

            var element = this.element.find('.js-sort-property').filter('[data-sort="'+ param.SORT +'"]');
            element.removeClass('asc desc');
            this.$sort.val(param.SORT);

            if (param.METHOD == "ASC") {
                element.addClass('asc');
                this.$method.val("ASC");
            } else {
                element.addClass('desc');
                this.$method.val("DESC");
            }
        },

        '.js-toggler click': function($el) {
            var button = $el.find('.js-toggler-button');
            this.$tooglerContent = this.$tooglerContent ||  this.element.find('.js-toggler-content');
            if (button.hasClass('up')) {
                this.$tooglerContent.slideUp( "slow", function() {
                    button.removeClass('up');
                    button.addClass('down');
                });
            } else {
                this.$tooglerContent.slideDown( "slow", function() {
                    button.removeClass('down');
                    button.addClass('up');
                });
            }
        },
        
        '.js-sort-property click': function($el) {
            this.restore = false;
            this.$sort = this.element.find('.js-sort');
            this.$method = this.element.find('.js-method');
            var params = can.deparam(document.location.search.replace('?', ''));
            var val = '';

            if ($el.hasClass('asc')) {
                $el.addClass('desc');
                $el.removeClass('asc');
                val = "DESC";
            } else {
                $el.addClass('asc');
                $el.removeClass('desc');
                val = "ASC";
            }

            var sortObj = {};
            sortObj['SORT'] = $el.data('sort');
            sortObj['METHOD'] = val;
            sortObj = $.extend({}, params, sortObj);
            can.route.attr(sortObj);
            this.$sort.val($el.data('sort'));
            this.$method.val(val);

            this.$ajaxArea.addClass('active');
            this.sendRequest();
        },

        /**
         * Кнопка сброса фильтра
         */
        '.js-reset-filter click': function() {
            if (typeof this.timerClear != "undefined") {
                clearTimeout(this.timerClear);
            }

            var clearParam = {};
            this.restore = false;
            can.route.attr(clearParam, true);
            this.timerClear = setTimeout(function(){
                this.filter.trigger('restoreFilter');
                this.stateController.reInit();
            }.bind(this), 500);
        },

        initRange: function() {
            this.element.find('.js-range').each(function(i, v) {
                new APP.Controls.Range($(v), {filter: this.filter});
            }.bind(this));
        }

    });

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/local/js/controllers/page/item-detail.js?14473201651734";s:6:"source";s:41:"/local/js/controllers/page/item-detail.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер детальной страницы
     **/
    APP.Controls.Page.ItemDetail = can.Control.extend(
        {
            defaults: {

            }
        },
        {
            init: function() {

                this.$countInput = this.element.find('.js-input-count');
                this.$countInput.inputFilter('number').inputNumber(1, 99999, function() {});
                this.$countButton = this.element.find('.js-count-button');


                this.$countButton.each(function() {
                    new APP.Controls.CountButton(this);
                });

                this.$button = this.element.find('.js-button-cart-count');


                this.$button.each(function(i, v) {
                    if (!$(this).hasClass('js-inited')) {
                        new APP.Controls.ButtonExtend($(v), {$countInput: this.$countInput, cb: this.callbackDisable.bind(this)});
                    }
                }.bind(this));

                this.callbackDisable();
            },

            callbackDisable: function() {

                if (typeof APP.cartArray != "undefined"
                    && typeof APP.catalogItem != "undefined"
                    && APP.cartArray.length > 0
                    && (APP.cartArray.indexOf(""+APP.catalogItem) !== -1 || APP.cartArray.indexOf(APP.catalogItem) !== -1) ) {
                    this.$countButton.addClass('disable');

                } else {
                    this.$countButton.removeClass('disable');
                    console.log(321);
                }
            }
        }
    );

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/js/controllers/page/compare.js?14473201652923";s:6:"source";s:37:"/local/js/controllers/page/compare.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер сравнения
     */
    APP.Controls.Page.Compare = can.Control.extend({
        init: function() {

            this.element.find('.js-tabs').each(function() {
                new APP.Controls.Tabs(this);
            });

            this.element.find('.js-tab').each(function() {
                new APP.Controls.CompareTab(this);
            });
        },

        '.js-button-compare click': function($el, ev) {
            this.$col = $el.closest('.js-col');
            this.$tab = this.$col.closest('.js-tab');
            this._makeAjax($el.attr('href'), $el);
            return false;
        },

        _makeAjax: function(url, $el) {
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'json',
                data: '',
                success: this.proxy('_onAjaxSuccess', {element: $el})
            });
        },

        _onAjaxSuccess: function(params, data) {
            if (data.result) {
                if(typeof this.$col != 'undefined') {
                    this.$col.remove();
                    if (this.element.find('.js-col').length == 0) {
                        $('.js-result-wrapper').hide();
                        $('.js-no-items').show();
                    } else if (this.$tab.find('.js-col').length == 0) {
                        var id = this.$tab.attr('id');
                        var $header = this.element.find('.js-result-wrapper .js-header');
                        var $head = $header.find("[href=#" + id + "]");

                        if ($head.length) {
                            $head.remove();
                            this.$tab.remove();
                        }

                        if (!$header.find('.js-tab-header').filter('.active').length) {
                            $header.find('.js-tab-header').first().addClass('active');
                            this.element.find('.js-tab').removeClass('active').first().addClass('active');
                        }
                    }
                }

                if (typeof data.elements !== 'undefined' && typeof params.element !== "undefined") {

                    var headElement = params.element.data('head-element');
                    APP.headButtons.refresh(headElement, data.elements);

                }
            }
        },

        '.js-ok click': function($el, ev) {
            ev.preventDefault();
            this._makeAjax($el.attr('href'), $el);
            $('.js-result-wrapper').hide();
            $('.js-no-items').show();
            $.fancybox.close();
            return false;
        },

        '.js-no click': function() {
            $.fancybox.close();
            return false;
        }
    });

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/local/js/controllers/page/contacts.js?14473201651369";s:6:"source";s:38:"/local/js/controllers/page/contacts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер контактов
     */
    APP.Controls.Page.Contacts = can.Control.extend({
        init: function() {

            this.map = this.element.find('#map');
            this.footerHeight = 50;
            this.map.height($(document).height() - this.map.offset().top - this.footerHeight);

            this.initMap();
        },

        initMap: function() {

            var coords = this.map.data('map');
            coords = coords.split(",");

            var myLatLng = {lat: parseFloat(coords[0]), lng: parseFloat(coords[1])};

            var map = new google.maps.Map(this.map.get(0), {
                zoom: 16,
                center: myLatLng
            });

            var markerOptions = {
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            };

            if (typeof this.map.data('icon') !== 'undefined') {
                markerOptions['icon'] = this.map.data('icon');
            }

            new google.maps.Marker(markerOptions);
        },

        '{window} resize': _.debounce(function () {

            this.map.height($(document).height() - this.map.offset().top - this.footerHeight);

        }, 500, this)
    });

})(jQuery, window.APP);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/js/controllers/page/favorites.js?14473201652294";s:6:"source";s:39:"/local/js/controllers/page/favorites.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер избранного
     */
    APP.Controls.Page.Favorites = can.Control.extend({
        init: function() {
            this.$scrollPage = this.element.find('.js-scroll-page');
            this.scrollPageContoller = new APP.Controls.AjaxScroll(this.$scrollPage, {parent: this, callback: this.proxy('initButtons')});
        },

        initButtons: function () {
            this.element.find('.js-button').each(function() {
                if (!$(this).hasClass('js-inited')) {
                    new APP.Controls.Button(this);
                }
            });
        },

        '.js-delete click': function($el) {
            this.$row = $el.closest('.js-row');
            this._makeAjax($el.attr('href'), $el);
            return false;
        },

        _makeAjax: function(url, $el) {
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'json',
                data: '',
                success: this.proxy('_onAjaxSuccess', {element: $el})
            });
        },

        _onAjaxSuccess: function(params, data) {
            if (data.result) {
                if(typeof this.$row != 'undefined') {
                    this.$row.remove();
                    if (this.element.find('.js-row').length == 0) {
                        $('.js-result-wrapper').hide();
                        $('.js-no-items').show();
                    }
                }

                if (typeof data.elements !== 'undefined' && typeof params.element !== "undefined") {

                    var headElement = params.element.data('head-element');
                    APP.headButtons.refresh(headElement, data.elements);

                }
            }
        },

        '.js-ok click': function($el, ev) {
            ev.preventDefault();
            this._makeAjax($el.attr('href'), $el);
            $('.js-result-wrapper').hide();
            $('.js-no-items').show();
            $.fancybox.close();
            return false;
        },

        '.js-no click': function() {
            $.fancybox.close();
            return false;
        }
    });

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/js/controllers/page/search.js?14473201652560";s:6:"source";s:36:"/local/js/controllers/page/search.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {

    APP.Controls.Page.Search = can.Control.extend(
        {
            defaults: {
                contentSelector: '.js-ajax-search-content'
            }
        },
        {
        init: function() {
            this.$scrollPage = this.element.find('.js-scroll-page');
            this.$searchInput =  this.element.find('.js-container .js-form-search');
            this.$ajaxArea = this.element.find('.js-ajax-area');

            if (can.route.bindings.pushstate) {
                can.route.bindings.pushstate.root = document.location.pathname;
            }

            can.route.ready();

            this.scrollPageContoller = new APP.Controls.AjaxScroll(this.$scrollPage, {parent: this, callback: this.proxy('initButtons')});

            if (this.$searchInput.length) {
                new APP.Controls.FormSearch(this.$searchInput, {parent: this});
            }
        },

        sendRequest: function(url) {

            this.$ajaxArea.addClass('active');

            if (typeof this.ajaxRequest != "undefined") {
                clearTimeout(this.ajaxRequest);
            }

            this.ajaxRequest = setTimeout(function() {

                if (typeof url === "undefined") {
                    url = document.location.href;
                }

                this.$ajaxArea.addClass('active');
                $.ajax({
                    url: url,
                    type: 'post',
                    dataType: 'html',
                    data: {
                        ajaxRequest: true
                    },
                    success: this.proxy('successRequest')
                });
            }.bind(this), 500);

        },

        successRequest: function(data) {

            this.$ajaxArea.removeClass('active');

            if (data.length > 0) {
                data = $(data).find(this.options.contentSelector);
                this.$scrollPage.html(data);
                this.initAfterAjax();
                this.$ajaxArea = this.element.find('.js-ajax-area');
            }
        },

        initAfterAjax: function() {
            this.scrollPageContoller.reInit();
            this.initButtons();
        },

        initButtons: function () {
            this.element.find('.js-button').each(function() {
                if (!$(this).hasClass('js-inited')) {
                    new APP.Controls.Button(this);
                }
            });
        }
    });

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/local/js/controllers/page/transformators.js?1447320165540";s:6:"source";s:44:"/local/js/controllers/page/transformators.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP, undefined) {
    "use strict";

    /**
     * Контроллер трансформатора
     */
    APP.Controls.Page.Transformators = can.Control.extend({
        init: function() {

            this.element.find('.js-slider').each(function() {
                new APP.Controls.Slider(this);
            });

            this.element.find('.js-form-transform').each(function() {
                new APP.Controls.FormTransform(this);
            });
        }
    });

})(jQuery, window.APP);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:39:"/local/js/application.js?14473201653502";s:6:"source";s:24:"/local/js/application.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($, APP) {
    'use strict';

    /**
     * Контроллер приложения, запускает контроллеры страниц
     **/
    APP.Controls.Application = can.Control.extend({

        /**
         *
         **/
        init: function() {
            this.initCommon();
            this.initPageController();
        },

        /**
         *
         **/
        initPageController: function() {
            var pagePlugin = can.capitalize(can.camelize(this.element.data('page-type')));
            if (APP.Controls.Page[pagePlugin]) {
                new APP.Controls.Page[pagePlugin](this.element);
            }
        },

        initCommon: function() {
            this.element.find('.js-header').each(function() {
                new APP.Controls.Header(this);
            });

            this.$slonSlide = this.element.find('.js-slideshow-slon');
            this.$bgSlide = this.element.find('.js-slideshow');

            this.$slideSlon = new APP.Controls.SlideSlon(this.$slonSlide,
                {
                    endCallback: this.proxy('endCallback'),
                    startCallback: this.proxy('startCallback')
                }
            );

            this.element.find('.js-popup-link').each(function() {
                $(this).fancybox({
                    padding: 0,
                    afterShow: function () {
                        var id = $(this).attr('href');
                        $(id).find('input[type=text], textarea').first().focus();
                    }
                });
            });

            this.element.find('.js-mask').each(function() {
                var self = $(this);
                self.mask(self.data('formatter'));
            });

            this.element.find('.js-form').each(function() {
                new APP.Controls.Form(this);
            });

            this.element.find('.js-button').each(function() {
                if (!$(this).hasClass('js-inited')) {
                    new APP.Controls.Button(this);
                }
            });

            this.element.find('.js-m-scroll').each(function(){
                $(this).mCustomScrollbar({
                    scrollbarPosition: 'outside',
                    axis: (typeof $(this).data('axis') !== 'undefined') ? $(this).data('axis') : 'y',
                    advanced: {
                        autoExpandHorizontalScroll:true
                    },
                    autoDraggerLength: false
                });
            });

            this.element.find('.js-to-up').each(function() {
                new APP.Controls.GoUp(this);
            });

            FastClick.attach(document.body);
        },

        endCallback: function() {
            this.$slonSlide.hide();
            this.$bgSlide.show();
            this.$bgSlide.cycle('next');
        },

        startCallback: function() {
            this.$slonSlide.show();
            this.$bgSlide.hide();
            this.$bgSlide.cycle('stop');
        },

        '.js-slon click': function($el) {
            if (!$el.hasClass('active')) {
                $el.addClass('active');
                this.$slideSlon.startFunction();
            } else {
                $el.removeClass('active');
                this.$slideSlon.endedFunction();
            }

            return false;
        }
    });

    /**
     * Bootstrap
     */
    $(function() {
        new APP.Controls.Application($('body'));
    });

})(jQuery, window.APP);
/* End */
;; /* /local/js/libs/dropzone.js?144732016532980*/
; /* /local/js/libs/jquery.js?144732016596381*/
; /* /local/js/libs/can.custom.js?1447320165133704*/
; /* /local/js/libs/nouislider.min.js?144732016520274*/
; /* /local/js/libs/jquery.bxslider.min.js?144732016519359*/
; /* /local/js/libs/jquery.cycle2.min.js?144732016522940*/
; /* /local/js/libs/jquery.cycle2.scrollVert.min.js?1447320165359*/
; /* /local/js/libs/jquery.cycle2.tile.min.js?14473201652119*/
; /* /local/js/libs/jquery.fancybox.js?144732016522989*/
; /* /local/js/libs/jquery.validate.min.js?144732016521528*/
; /* /local/js/libs/jquery.maskedinput.min.js?14473201654324*/
; /* /local/js/libs/jquery.mCustomScrollbar.concat.min.js?144732016540547*/
; /* /local/js/libs/jquery.scrollTo.min.js?14473201652444*/
; /* /local/js/libs/fastclick.js?144732016525965*/
; /* /local/js/libs/lock-tab.js?1447320165317*/
; /* /local/js/libs/input-filter.js?14473201651183*/
; /* /local/js/libs/input-number.js?1447320165271*/
; /* /local/js/libs/underscore-min.js?144732016515371*/
; /* /local/js/plugins.js?1447320165733*/
; /* /local/js/controllers/-pre-init.js?1447320165139*/
; /* /local/js/helpers.js?14473201651647*/
; /* /local/js/controllers/partial/ajax-scroll.js?14525752225144*/
; /* /local/js/controllers/partial/ajax-scroll-similar.js?1452575222635*/
; /* /local/js/controllers/partial/head-buttons.js?14473201652945*/
; /* /local/js/controllers/partial/button.js?14473201653411*/
; /* /local/js/controllers/partial/button-extend.js?14473201652631*/
; /* /local/js/controllers/partial/form.js?14473201658473*/
; /* /local/js/controllers/partial/form-transform.js?14474146626074*/
; /* /local/js/controllers/partial/form-search.js?14474104381896*/
; /* /local/js/controllers/partial/header.js?14473201653227*/
; /* /local/js/controllers/partial/range.js?14527487576426*/
; /* /local/js/controllers/partial/slider.js?14473201651874*/
; /* /local/js/controllers/partial/slideshow.js?14473201653819*/
; /* /local/js/controllers/partial/slide-slon.js?14473201651619*/
; /* /local/js/controllers/partial/scroll-page.js?14473201651154*/
; /* /local/js/controllers/partial/state-toggler.js?14473201652152*/
; /* /local/js/controllers/partial/tabs.js?14473201652911*/
; /* /local/js/controllers/partial/content-toggler.js?14473201651637*/
; /* /local/js/controllers/partial/compare-tab.js?1447320165256*/
; /* /local/js/controllers/partial/filter.js?14527487574945*/
; /* /local/js/controllers/partial/count-button.js?14473201652316*/
; /* /local/js/controllers/partial/go-up.js?1447320165557*/
; /* /local/js/controllers/page/basket.js?14473201653263*/
; /* /local/js/controllers/page/main.js?1447320165781*/
; /* /local/js/controllers/page/not-found.js?1447320165374*/
; /* /local/js/controllers/page/item-list.js?14525752226870*/
; /* /local/js/controllers/page/item-detail.js?14473201651734*/
; /* /local/js/controllers/page/compare.js?14473201652923*/
; /* /local/js/controllers/page/contacts.js?14473201651369*/
; /* /local/js/controllers/page/favorites.js?14473201652294*/
; /* /local/js/controllers/page/search.js?14473201652560*/
; /* /local/js/controllers/page/transformators.js?1447320165540*/
; /* /local/js/application.js?14473201653502*/
