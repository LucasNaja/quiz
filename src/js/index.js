"use strict";const btnNext=document.querySelector("#next"),btnStart=document.querySelector("#start"),btnRank=document.querySelector("#rank"),btnGiveUp=document.querySelector("#giveUp"),btnShowAnswers=document.querySelector("#showAnswers"),btnFinish=document.querySelector("#finish"),btnSave=document.querySelector("#save"),selectQuiz=document.querySelector("#selectQuiz"),quiz=document.querySelector("#quiz"),pagination=document.querySelector("#pagination"),winPoints=document.querySelector("#points"),star=document.querySelector("#star"),showAnswers=document.querySelector("#answers"),quisSave=document.querySelector("#quizSave"),hitsSave=document.querySelector("#hitsSave"),timeSave=document.querySelector("#timeSave"),textName=document.querySelector("#name"),logo=document.querySelector("#logo"),modal5=document.querySelector("#modal5"),switcherTheme=document.querySelector("#darktheme"),quizTitle=document.querySelector("#quizTitle"),options=document.querySelector("#options"),tabs=document.querySelector("#tabs"),allTabs=document.querySelector(".tabs"),tabItems=document.querySelector("#tabItems"),actionButtons=document.querySelectorAll(".fixed-action-btn"),actionButton=document.querySelector("#actionButton"),navButtons=document.querySelector("#nav-mobile"),navMenu=document.querySelector("#navMenu"),quizName=document.querySelector("#quizName"),quizInformation=document.querySelector("#quizInformation");let timeInterval,types,points=0,currentQuestion=0,matches=[],selectedType=-1,time=0,radioButtons="";for(let a=0;a<names.length;a++)radioButtons+=`<div class="col s12 m6">
			<p style="position:relative">
				<i title="Informações" class="material-icons modal-trigger teal-text" data-target="modal9" style="position:absolute;right:10px;cursor:pointer" onclick="changeInformation(${a})">help</i>
				<label>
					<input class="with-gap" name="selectQuiz" type="radio" data-num="${a}" ${0==a?"checked":""} />
					<span>${names[a]}</span>
				</label>
			</p>
			<div style="margin:-5px 0;background-color:#9e9e9e" class="divider"></div>
		</div>`;options.innerHTML=radioButtons,types=document.querySelectorAll("[name=selectQuiz]");const darkTheme=()=>{localStorage.setItem("darktheme",1),document.body.setAttribute("data-theme","dark")},lightTheme=()=>{localStorage.removeItem("darktheme"),document.body.setAttribute("data-theme","light")};localStorage.getItem("darktheme")&&(darkTheme(),switcherTheme.checked=!0);const render=()=>{let a=`<h5 style="margin-top:4px">${currentQuestion+1}) ${questions[selectedType][currentQuestion]}</h5><p id="time" style="margin:2px 0 0;font-size:17px">${timeProgress(time)}<i class="material-icons right" style="margin-left:5px;font-size:25px">access_time</i></p>`;const b=[answers[selectedType][currentQuestion],...fakeAnswers[selectedType][currentQuestion]],c=[];for(let d,e=0;e<b.length;e++){for(d=parseInt(Math.random()*b.length);-1<c.indexOf(d);)d=parseInt(Math.random()*b.length);c[e]=d;a+=`<p>
				<label>
					<input class="with-gap" name="question${currentQuestion}" data-text="${b[d]}" type="radio" />
					<span style="font-size:16px">${["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"][e]}) ${b[d]}</span>
				</label>
			</p>
			<div style="margin:-5px 0;background-color:#9e9e9e" class="divider"></div>`}createPagination(),currentQuestion==answers[selectedType].length-1?(btnNext.setAttribute("title","Finalizar Quiz"),btnNext.innerHTML="Finalizar<i class=\"material-icons right\">chevron_right</i>"):(btnNext.setAttribute("title","Pr\xF3xima Pergunta"),btnNext.innerHTML="Pr\xF3ximo<i class=\"material-icons right\">chevron_right</i>"),quiz.innerHTML=a},createPagination=()=>{let a="<li class=\"disabled\"><a><i class=\"material-icons\">chevron_left</i></a></li>";for(let b=0;b<questions[selectedType].length;b++)a+=`<li class="${matches[b]===void 0?"":"waves-effect waves-light"} ${currentQuestion==b?"active bgcolor3 c-df no-border waves-effect waves-light":`${matches[b]===void 0?"disabled":matches[b]?`active green c-df no-border ${b==questions[selectedType].length-1?"":"brw"}`:`active red c-df no-border ${b==questions[selectedType].length-1?"":"brw"}`}`}"><a>${b+1}</a></li>`;a+=`<li class="disabled" style="margin-left:-${currentQuestion>=questions[selectedType].length-1?0:10}px"><a><i class="material-icons">chevron_right</i></a></li>`,pagination.innerHTML=a,pagination.scrollLeft=pagination.querySelectorAll("li")[currentQuestion<parseInt(questions[selectedType].length/2+1)?0:parseInt(questions[selectedType].length/2)+1].offsetLeft},timeProgress=a=>{const b=parseInt(a/3600);a-=3600*b;const c=parseInt(a/60);return a-=60*c,1<=b?(M.Modal.getInstance(document.querySelector("#modal6")).open(),void stop()):`${c}m ${a}s`},reTimeProgress=a=>{const b=a.split(" ");return 60*parseInt(b[0].replace("m",""))+parseInt(b[1].replace("s",""))},start=()=>{navMenu.classList.add("hide"),navButtons.classList.add("hide"),selectQuiz.classList.add("hide"),btnStart.classList.add("hide"),btnRank.classList.add("hide"),quiz.classList.remove("hide"),btnNext.classList.remove("hide"),btnGiveUp.classList.remove("hide"),pagination.classList.remove("hide"),btnSave.removeAttribute("disabled");for(let a=0;a<types.length;a++)types[a].checked&&(selectedType=a,document.title=`${names[a]} - Quizzes Online`,logo.innerHTML=`${names[a]} - Quizzes Online`);render(),timeInterval=setInterval(()=>{document.querySelector("#time").innerHTML=`${timeProgress(++time)}<i class="material-icons right" style="margin-left:5px;font-size:25px">access_time</i>`},1e3)},stop=()=>{navMenu.classList.remove("hide"),navButtons.classList.remove("hide"),selectQuiz.classList.remove("hide"),btnStart.classList.remove("hide"),btnRank.classList.remove("hide"),quiz.classList.add("hide"),btnNext.classList.add("hide"),btnGiveUp.classList.add("hide"),btnShowAnswers.classList.add("hide"),btnFinish.classList.add("hide"),pagination.classList.add("hide"),btnSave.classList.add("hide"),document.title="Quizzes Online - In\xEDcio",logo.innerHTML=`Quizzes Online`,points=0,currentQuestion=0,selectedType=-1,matches=[],clearInterval(timeInterval),time=0},next=()=>{const a=document.querySelectorAll(`[name=question${currentQuestion}]`);let b=0;for(let c=0;c<a.length;c++)a[c].checked||(b+=1);if(b===a.length)M.toast({html:"Voc\xEA deve selecionar uma alternativa!",classes:"red",displayLength:2050});else{for(let b=0;b<a.length;b++)a[b].checked&&a[b].getAttribute("data-text")===answers[selectedType][currentQuestion]&&(matches.push(1),points+=1);if(void 0===matches[currentQuestion]&&matches.push(0),currentQuestion+=1,currentQuestion===answers[selectedType].length){clearInterval(timeInterval);for(let b=0;b<a.length;b++)a[b].disabled=!0;btnNext.classList.add("hide"),btnGiveUp.classList.add("hide"),btnShowAnswers.classList.remove("hide"),btnSave.classList.remove("hide"),btnFinish.classList.remove("hide");let b="<h4><i class=\"material-icons\" style=\"top:2px\">question_answer</i> Respostas corretas</h4>";for(let a=0;a<answers[selectedType].length;a++)b+=`<p style="margin:0">${a+1}) ${questions[selectedType][a]}</p>
					<p style="margin:0 0 10px">Resposta: ${answers[selectedType][a]} <i class="material-icons ${0===matches[a]?"red-text":"green-text"}" style="top:${0===matches[a]?"7":"5"}px;margin:-7px 0 0">${0===matches[a]?"clear":"done"}</i></p>`;showAnswers.innerHTML=b,quisSave.innerHTML=names[selectedType],timeSave.innerHTML=timeProgress(time);const c=100*(points/answers[selectedType].length);hitsSave.innerHTML=`${points} de ${questions[selectedType].length} (<span class="${50>c?"red-text":"green-text"}">${c.toFixed(1)}%</span>)`,winPoints.innerHTML=`${points} de ${questions[selectedType].length} e obteve um desempenho de <span class="${50>c?"red-text":"green-text"}">${c.toFixed(1)}%</span>`,star.className=`material-icons ${50>c?"red-text":"green-text"}`,M.Modal.getInstance(document.querySelector("#modal2")).open(),createPagination()}else render()}},arraySort=a=>{const b=[];for(let c=-1,d=-1,e=3600;0<a.length;){for(let b=0;b<a.length;b++)a[b][2]>c?(d=b,e=reTimeProgress(a[b][4]),c=a[b][2]):a[b][2]===c&&reTimeProgress(a[b][4])<e&&(d=b,e=reTimeProgress(a[b][4]));c=-1,e=3600,b.push(a[d]),a.splice(d,1)}return b},save=()=>{const a=textName.value.trim();if(a&&2<a.length){const b=localStorage.getItem("registeredItems");if(!b)localStorage.setItem("registeredItems",`[["${names[selectedType]}","${a}",${points},${questions[selectedType].length},"${timeProgress(time)}"]]`);else{let c=JSON.parse(b);c.push([names[selectedType],a,points,questions[selectedType].length,timeProgress(time)]),c=arraySort(c),localStorage.setItem("registeredItems",`${JSON.stringify(c)}`)}M.Modal.getInstance(modal5).close(),btnSave.setAttribute("disabled","true"),textName.value="",textName.select()}else M.toast({html:"Por favor, escolha um nome v\xE1lido!",classes:"red accent-4",displayLength:2050}),textName.select()},renderSavedItems=(a=0)=>{M.Tabs.getInstance(tabs)&&M.Tabs.getInstance(tabs).destroy();const b=localStorage.getItem("registeredItems");let c,d,e="<li style=\"margin-left:10px\"><p style=\"text-align: center;font-size: 20px;margin-top: 10px\">N\xE3o h\xE1 nenhum jogo salvo! :(</p></li>",f="";if(c="<table class=\"responsive-table\"><thead><tr><th>Posi\xE7\xE3o</th><th class=\"center-align\">Nome</th><th class=\"center-align\">Acertos</th><th class=\"center-align\">Tempo</th><th class=\"center-align\">Remover</th></tr></thead><tbody>",b){e="";let g=!1;for(let h=0;h<types.length;h++){d=JSON.parse(b);for(let a=0,b=0,e=1;a<d.length;a++,b++)names[h]===d[a][0]&&(c+=`<tr>
							<td>${e}°</td>
							<td class="center-align">${d[a][1]}</td>
							<td class="center-align">${d[a][2]}/${d[a][3]}</td>
							<td class="center-align">${d[a][4]}</td>
							<td class="center-align"><i class="material-icons red-text" style="cursor:pointer" onclick="deleteItem(${b}, ${parseInt(types[h].getAttribute("data-num"),10)})">close</i></td>
						</tr>`,d.splice(a,1),e+=1,a-=1,g=!0);g&&(e+=`<li class="tab tabs-fixed-width tab-demo"><a data-num="${types[h].getAttribute("data-num")}" class="${a==h?"active":""}" href="#quiz${h}">${names[h]}</a></li>`,c+="</tbody></table>",f+=`<div id="quiz${h}">${c}</div>`,g=!1,c="<table class=\"responsive-table\"><thead><tr><th>Posi\xE7\xE3o</th><th class=\"center-align\">Nome</th><th class=\"center-align\">Acertos</th><th class=\"center-align\">Tempo</th><th class=\"center-align\">Remover</th></tr></thead><tbody>")}tabs.innerHTML=e,tabItems.innerHTML=f,M.Tabs.init(allTabs)}else tabs.innerHTML=e,tabItems.innerHTML=f},deleteItem=(a,b)=>{const c=JSON.parse(localStorage.getItem("registeredItems"));c.splice(a,1),c.length?localStorage.setItem("registeredItems",`${JSON.stringify(c)}`):localStorage.removeItem("registeredItems"),renderSavedItems(b)},clearSavedItems=()=>{localStorage.removeItem("registeredItems"),renderSavedItems()},changeInformation=a=>{quizName.innerHTML=names[a],quizInformation.innerHTML=`Quantidade de Perguntas: ${questions[a].length}`},tabletMedia=a=>{const b=M.FloatingActionButton.getInstance(actionButton);a.matches?M.FloatingActionButton.init(actionButtons):b&&b.destroy()},x=window.matchMedia("(min-width: 1024px)");tabletMedia(x),x.addListener(tabletMedia),window.addEventListener("DOMContentLoaded",()=>{M.Sidenav.init(document.querySelectorAll(".sidenav")),M.Modal.init(document.querySelectorAll(".modal")),M.Collapsible.init(document.querySelectorAll(".collapsible")),renderSavedItems()}),btnRank.onclick=()=>{const a=M.Tabs.getInstance(tabs);if(a)for(let b=0;b<a.$tabLinks.length;b++){const c=a.$tabLinks[b].getAttribute("data-num");if(types[c].checked){a.$tabLinks[b].click(),setTimeout(()=>{a.updateTabIndicator(),tabs.scrollLeft=a.$tabLinks[b].offsetLeft},300);break}else b==a.$tabLinks.length-1&&(a.$tabLinks[0].click(),setTimeout(()=>{a.updateTabIndicator(),tabs.scrollLeft=a.$tabLinks[b].offsetLeft},300))}},btnSave.onclick=()=>{setTimeout(()=>{textName.select()},50)},modal5.onkeydown=a=>{13===a.which&&(save(),renderSavedItems())},window.onload=()=>{const a=document.querySelector("#preloader");if(location.search.includes("?quiz=")){const a=decodeURIComponent(location.search.split("=")[1]);for(let b=0;b<names.length;b++)if(names[b]===a){types[b].checked=!0,start();break}}document.querySelector("#nav").classList.remove("hide"),document.querySelector("#container").classList.remove("hide"),a.classList.add("hide"),a.remove()}
