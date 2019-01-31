const root=document.querySelector(':root'),metaThemeColor=document.querySelector('meta[name=theme-color]'),metaMSThemeColor=document.querySelector('meta[name=msapplication-navbutton-color]'),icon=document.querySelector('link[rel=icon]');M.Sidenav.init(document.querySelectorAll('.sidenav')),M.Materialbox.init(document.querySelectorAll('.materialboxed')),1024<=innerWidth&&(document.querySelector('#card').className='card horizontal');function darkTheme(){localStorage.setItem('darktheme','true'),metaThemeColor.setAttribute('content','#2962ff'),metaMSThemeColor.setAttribute('content','#2962ff'),icon.setAttribute('href','../images/logo_dark.png'),root.style.setProperty('--bgColor','#242b38'),root.style.setProperty('--bgColor2','#2a3342'),root.style.setProperty('--bgColor3','#3666ec'),root.style.setProperty('--bgColorActive','#003bdd'),root.style.setProperty('--bgColorScroll','#2a3342'),root.style.setProperty('--colorScroll','#2962ff'),root.style.setProperty('--colorScrollHover','#0b4cff'),root.style.setProperty('--colorText','white')}function lightTheme(){localStorage.removeItem('darktheme'),metaThemeColor.setAttribute('content','#009688'),metaMSThemeColor.setAttribute('content','#009688'),icon.setAttribute('href','../images/logo_light.png'),root.style.setProperty('--bgColor','white'),root.style.setProperty('--bgColor2','white'),root.style.setProperty('--bgColor3','#009688'),root.style.setProperty('--bgColorActive','#007267'),root.style.setProperty('--bgColorScroll','#ededed'),root.style.setProperty('--colorScroll','#929292'),root.style.setProperty('--colorScrollHover','grey'),root.style.setProperty('--colorText','black')}'true'===localStorage.getItem('darktheme')?darkTheme():lightTheme(),window.onload=()=>{document.querySelector('#preloader').className='hide',document.querySelector('#nav').className='',document.querySelector('#container').className='container'};