/* Background Palette */
const WALLPAPER_COLORS = [
  "#CB7876",
  "#8BA47C",
  "#62866C",
  "#32769B",
  "#8C7DA8",
];

function setRandomWallpaper() {
  const c = WALLPAPER_COLORS[Math.floor(Math.random() * WALLPAPER_COLORS.length)];
  document.querySelector(".desktop").style.background = c;
}

/* Utilities */
let zCounter = 10;
function nextZ() { return ++zCounter; }

function nowClock() {
  const el = document.getElementById("clock");
  const t = new Date();
  el.textContent = t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
setInterval(nowClock, 1000);

/* App Content */
const APP_DEFS = {
  "my-computer": {
    title: "My Computer",
    icon: "public/icons/my-computer.ico",
    html: `
      <p>I built this Windows 95 inspired website over a week in August 2025. 
      Thought it would be funny taking inspiration from <a target="_blank" 
      href="https://lankinen.xyz/my-computer">Elias Lankinen's</a> site but 
      recode everything in HTML, CSS, and JavaScript. This site is intentionally 
      simple and serves purely as a visual way to showcase a bit about myself. </p>
      The code is available on my
      <a target="_blank" href="https://github.com/danielzh310">GitHub</a>.
      </p>
    `,
  },
  "daniel": {
    title: "Daniel",
    icon: "public/icons/agent.ico",
    html: `
      <p>I am currently studying for a master's degree in Data Analytics at Carnegie Mellon University but
      I also work as a software integration engineer at <a target="_blank" href="https://www.northropgrumman.com/">Northrop Grumman</a>. 
      Outside of work, I spent my undergraduate years building driverless electric 
      FSAE racecars — and now I program satellites for a living.</p>
      <p>I love data science and am currently diving into other areas that excite me; network engineering, 
      quantitative finance, autonomous vehicles, and space startups.</p>
      <h2>Academic Background</h2>
      <p>M.Sc. in Data Analytics for Science, Carnegie Mellon University (May 2026)</p>
      <p>B.Sc. in Statistics and Data Science, Carnegie Mellon University (May 2024)</p>
    `,
  },
  "contact": {
    title: "Contact",
    icon: "public/icons/letter.ico",
    html: `<p>Email me at <a href="mailto:danielzh310@gmail.com">danielzh310@gmail.com</a></p>
    <p>TO MAKE IT SECURE, USE THIS PGP PUBLIC KEY</p>
    <p>-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGifUuYBEACynVoYuJZB1wiVIFxqB/mmfCV8LXjbvNwrJWc+lmeb40h1RvOp
nMsr45fOjVXuwsCuOhK1J0yKg9+VMhj0FlJNZJjZDwgHMKIFjvObVQTmaK9GnxSJ
9WCfNcHXtRTWdVmGSpW+9x/JWA4d1s6dhM7PUf+YIDoLNkQt3r7Uw/GmPHQdYLnT
3RvTFfAbBttdkd1pNh1q+MtrO/fR6NlEg914ox/pbxJXRLjsEnMU1s6H7vof6EKB
UFBRh/jVlJyZK3TsKXVCr2TmOfxBX8i7V5/32pvMRuHKWz9cpSogSdrf4Ifctasp
ZWeLZrnmD302F+IZ2d9/dT73e8JMMbhX9VEuEOMstp+9/SFO2TFP0/rPGLhwuVJH
rmOufGYEkleQSeAFaYe3bBm6hOSmm2P5iPEGdtAJ3OuAVmbo+A8qc8WRvOCCFRJP
7IIm1R0sVmdBdohdcIf1ooJIr/TBIlRhJnMI1umrS7c/vNmgujaQlOi3LZZcCarP
h9BsjrkfJiOPEsGLsXrjj+27DznlgZXDCh4xmvdkIMtCMKlSOFsApJ7PRK1S9uAL
ecQUjet1l9nGG4V+ieN4+CiWXbS26SR1+Jf+TsdSUZ8mwQx/aSKb2dBkDjCZCuXd
etJb8rJWv1FkgK0uXK7HAtljvtDLrAHiFQdNm1I9X//6fPhEGeddGhHk5wARAQAB
tCdkYW5pZWx6aCAobm9uZSkgPGRhbmllbHpoMzEwQGdtYWlsLmNvbT6JAlEEEwEI
ADsWIQRAyJPwsVMuQ4orbIHH+OWNa5ECYwUCaJ9S5gIbAwULCQgHAgIiAgYVCgkI
CwIEFgIDAQIeBwIXgAAKCRDH+OWNa5ECYxE+D/wKuyFJ9KqGoyKLh/LqbM/QSimc
oDYKcU5VxWKdDHH5WPisgox/gkJnM+Xw2vXO7O42KDxME8snDe2kLM4XsxFtgEYq
Xn9PvMOzcwJ+txCDq0LuicdYYvVRe0Hpu0/TjcCAwNc3E6v7bDJ2/hoc77bkSBlZ
+lG8SIoBLU19vWkNLGO9outii4+TW03qyknoxtElHrYUiClecA55zPbJUOwExfYP
hFypOsO/XAw34TjJC/Z2XmHvdSnNCsXdvazDMn5aNd2AhaAweHZGt+Ufu3sJvzu7
QGaQZbCD9hmiwLFvwLFt2wTYJbTTo/g3/KiYZB29mW3V7jJsH+Qych9mc06ySxtU
M18by35ph+WxvXoaHejuunYCYSjMhiheCuMfBMGYEc0+Um7Zg/XL0N4ETeOGosb5
QBn5kYYJXqmVoNDW3/R72lUD2uIAhFBpbRKnU/+9AnsNgmKSJgbGaweA1pP1meZJ
bo1YJmfAVQ7/i6VONDVL1BCStohv4tp/WE2VIIaT9dnQ1lOyoW/pQ2jptxrZRtU4
prV49CwRuyAUn6XXIFr/GGuHx4IuI+bytGevKWPGGzPJdKmegAgtiphDzgsLSax1
l+U37DlKwti5xun9WPoISbLmTypxT7xMC7iTtOS+yUGCxySkueFMI2jbWpas8HO9
n/+/VUpuDeclrFfsXLkCDQRon1LmARAAuW1vS08myHauyiDIWGManjDra3bJqb73
jvAPFinYqbmcF7DBsddu4bNeJHjWb2rP7j9UO0SwUb7/gpWUh2A3CMcXSyK5jJtV
QURtyfpFZg4HIetP0ZklsTbzXPaL8aSD0vLlO56pNC/goXQPCVbKDadqRjOdLzrE
AC9e6dBl+EWIAp9fzT5VwcTygQrOz9UCsJL2jsYbrurFDLTN38vZ8N7hXI7SnTK4
RiafMXQmVuYOnX01gBXBJif7EAWDERrl2EFEstaOb01BuvYAlYfdK7HjnIK5Rf9s
PgqTlO+aGkCSSZKI5g6OXf2RnxZmoDEoHOfO54Sskgm4ZV2Q9yK6jgwEvM5Pueej
Adh+9Y317MDiTNzScTMqY/lUxiPXoLyfxLN8TGjSHw9Z3VaKQE43gea2E1wcu9h0
evAvI5G+lLGRTDMM4QJotyx7fylRN/9yZOqNDuR8tsFoavvawE/Xs0mRHBaDhcHk
C3zDYYKBQXtm4rFVIWGDLWhQlGGKIQF1Bhzc7DPIn1rKWZRGfLkUx6A0xR8bj6z5
xyg6UZ/MwqIaygPU2zrnY+7yxwvqz2wd8RHHcXnaLl4VcayY1yHA/G4XEqQgiLhp
JJzkRH5mMQZlWkTkpkiPrmaDIH3a/J3huCo/yRwkKreWdTvk30/JOaykWy4jp3N5
4fQSUVWDhj0AEQEAAYkCNgQYAQgAIBYhBEDIk/CxUy5Diitsgcf45Y1rkQJjBQJo
n1LmAhsMAAoJEMf45Y1rkQJjgOcP/0dxFrc3rQ+l1TlIzu1of0Au46PAnpTJvvGV
ZmoKoElh6N/KIdCWDQhYYz3KoMmWVd4SKkEEUrb1Cr2fZD0qh92nP0cM6nomqtbU
kCZJE2SAJvQ6wqA4KedpXoF9WeMGDSmnMP7ici9ExX/ZSkbfIdsnTbqFrCqaQZnM
rukYFAb0JmooRd/CdqDuFakCOX9jLpFRB9IPAsnNIv01bRuPofX8L5ggZY7lXtMW
JnXcycfp5XrONjT7cR9kav5UZuaxXwTo7BOhNbH9yPteTVpYgRQ7Gr7fpj2ylq1o
nbwR5kD8OUnsXQsv3mwJCnGz/nF0q1aPRhgDWUukxrWDjLbWyCTLQVyWcrrXy9kI
VzOv5xqpzzrHxdX7UpfRxe4IKBDLfBTzv/fMUqb4lBZqyL8/3btxXnwGz0yLKOpa
D0R5q71ISb1rn5lCxLaQJUrleLrDVNzTqNdlOQOhPV1fUgBrpkBZVEz7u9dNII4c
0tFlxCUar1xumkCZznmqHtJdVuTuQKfAj5xMnmPJMJh4XUB848fx1roNJ9wR8B9C
KtU3QoNcWPJF2dQWdEZN+e2NS3xxSkOhGqPlxtSrGrKAbdKy+efejtk9mEgu/XFw
6NUobUs5I9H7FLDDj4R+MTuXmx70C5jYDkqV3+qQlOUCQ9K/jvEijQwFB8k0BJME
Ty7cKfH1
=oLjs
-----END PGP PUBLIC KEY BLOCK-----</p>
    `,
  },
  "projects": {
  title: "Projects",
  icon: "public/icons/joy.ico",
  html: `
    <h2 class="noselect">Selected Hobby Projects</h2>
    
    <div class="project-box" style="margin-top:8px; border:2px solid #000; padding:4px; background:#c1c1c1;">
      <div class="toggle" style="cursor:pointer;font-size:15px; font-weight:bold; background:#e0e0e0; border:2px outset #fff; padding:2px;">[+] blurbable.com</div>
      <div class="content" style="display:none;background:#fff;border:2px inset #000;padding:6px;margin-top:4px;">
        A career-focused social networking application where people share quick updates, funny work stories, and real human career moments, think LinkedIn, but without the corporate fluff. 
        <a href="https://blurbable.com" target="_blank">Visit website</a>
      </div>
    </div>

    <div class="project-box" style="margin-top:8px; border:2px solid #000; padding:4px; background:#c1c1c1;">
      <div class="toggle" style="cursor:pointer;font-size:15px; font-weight:bold; background:#e0e0e0; border:2px outset #fff; padding:2px;">[+] gridiron-engine.io</div>
      <div class="content" style="display:none;background:#fff;border:2px inset #000;padding:6px;margin-top:4px;">
        Quantitative NFL parlay selection engine. <a href="https://github.com/danielzh310/gridiron-engine.io" target="_blank">View on GitHub</a>
      </div>
    </div>

    <div class="project-box" style="margin-top:8px; border:2px solid #000; padding:4px; background:#c1c1c1;">
      <div class="toggle" style="cursor:pointer;font-size:15px; font-weight:bold; background:#e0e0e0; border:2px outset #fff; padding:2px;">[+] Carnegie Mellon Racing (2020-2024)</div>
      <div class="content" style="display:none;background:#fff;border:2px inset #000;padding:6px;margin-top:4px;">

      <p><strong>Aerodynamics & Composites System Lead (2024):</strong> I led aerodynamics and composites research, worked on CFD and FEA results to design more aerodynamically optimized parts, selected materials for layups, and pretty much built a majority of the aerodynamics package for CMR 24e.</p>
    
      <p><strong>Driver Interface System Engineer (2024):</strong> Designed and built a dashboard for CMR 24e, integrated conceptual driver interface housings for better usability, connectivity and just trying to make the drivers' lives a little less stressful in the cockpit.</p>

      <p><strong>Vehicle Dynamics Data Analyst (2023):</strong> Oversaw vehicle dynamics testing and analyzed CMR 23e's vehicle data to see where we could make design improvements, led on-track validation of aerodynamic performance, and also spun up a training regime for better coordination of real-time adjustments with cross-functional teams during high stress environments like competition.</p>

      <p><strong>Autonomous Vehicle Software Testing Engineer (2022-2023):</strong> Developed Python-based machine learning models to support autonomy testing and data analytics workflows, made improvements to cone box prediction performance and enabling deeper in-house data pipeline validation during testing cycles.</p>
    
      <p><strong>Vice President of Marketing & Outreach (2021-2023):</strong> I started on the team as a business student, joined the team on the premise of improving outreaching efforts; ended up building up a substantial marking department-producing crowdfunding campaigns, designing limited edition merchandise drops, grew recruitment pipelines across campus organizations, and built up the CMR brand on campus to something other than being known as a nerdy engineering club but as a powerhouse race team that ranked 1st in the nation and 8th in the world during my tenure.</p>

    </div>
</div>

    <!--
    <div class="project-box" style="margin-top:8px; border:2px solid #000; padding:4px; background:#c1c1c1;">
      <div class="toggle" style="cursor:pointer;font-size:15px; font-weight:bold; background:#e0e0e0; border:2px outset #fff; padding:2px;">[+] project-name</div>
      <div class="content" style="display:none;background:#fff;border:2px inset #000;padding:6px;margin-top:4px;">
        Description and link here.
      </div>
    </div>
    -->
  `
},
  "history": {
    title: "History",
    icon: "public/icons/help-book.ico",
    html: `
      <h2 class="noselect">Timeline</h2>
      <ul style="list-style:disc;padding-left:20px;margin-top:8px;">
       <li><b>2015 - 2020:</b> Instrumental Music - Clarinet, Orange County School of the Arts</li>
       <li><b>2020 - 2024:</b> B.Sc. in Statistics & Data Science, Carnegie Mellon University</li>
       <li><b>2024 - 2025:</b> Network Engineer @ Northrop Grumman (Morrisville, NC)</li>
       <li><b>2025 - 2026:</b> M.Sc. in Data Analytics for Science, Carnegie Mellon University</li>
       <li><b>2026 - Present:</b> Technical Support Engineer @ IBM (Austin, TX)</li>
     </ul>
  `
},
  "network": {
    title: "Network",
    icon: "public/icons/network.ico",
    html: `<p><a href="https://www.linkedin.com/in/daniel-zhu-43a080213/" target="_blank">Visit my LinkedIn</a></p>`,
  },
  "github": {
    title: "GitHub",
    icon: "public/icons/starfield.ico",
    html: `<p><a href="https://github.com/danielzh310" target="_blank">Visit my GitHub</a></p>`,
  },
  "fake-cli": {
    title: "Command Prompt",
    icon: "public/icons/AOL.ico",
    html: `
      <div id="cli-terminal" style="font-family:'Courier New', monospace; font-size:13px; color:#0f0; background:#000; padding:8px; height:100%; overflow-y:auto; display:flex; flex-direction:column;">
        <div id="cli-output"></div>
        <div style="display:flex; font-family:'Courier New', monospace; font-size:13px; color:#0f0;">
          <span id="cli-prompt">C:\\Users\\Guest&gt; </span>
          <input type="text" id="cli-input" style="background:black; border:none; color:#0f0; outline:none; flex:1; font-family:'Courier New', monospace; font-size:13px; color:#0f0;">
        </div>
      </div>
    `
  }
};

/* Window / Tabs Manager */
const windowsRoot = document.getElementById("windows-root");
const tabsRoot = document.getElementById("task-tabs");
const openWindows = new Map();

function focusWindow(key){
  const item = openWindows.get(key);
  if(!item) return;

  item.el.style.zIndex = nextZ();

  document.querySelectorAll(".titlebar").forEach(tb => tb.classList.remove("active"));
  document.querySelectorAll(".titlebar").forEach(tb => tb.classList.add("inactive"));
  item.el.querySelector(".titlebar").classList.remove("inactive");
  item.el.querySelector(".titlebar").classList.add("active");

  document.querySelectorAll(".task-tab").forEach(t => t.classList.remove("active"));
  item.tab.classList.add("active");

  // Focus CLI input automatically
  const cliInput = document.getElementById("cli-input");
  if(cliInput) cliInput.focus();
}

function minimizeWindow(key){
  const item = openWindows.get(key);
  if(!item) return;
  item.el.style.display = "none";
  item.tab.classList.remove("active");
}

function closeWindow(key){
  const item = openWindows.get(key);
  if(!item) return;
  item.el.remove();
  item.tab.remove();
  openWindows.delete(key);
}

function createTab(key, title, icon){
  const tab = document.createElement("button");
  tab.className = "task-tab";
  tab.innerHTML = `<img src="${icon}" type="image/x-icon" alt=""><span>${title}</span>`;
  tab.addEventListener("click", () => {
    const w = openWindows.get(key);
    if(!w) return;
    if(w.el.style.display === "none"){
      w.el.style.display = "block";
    }
    focusWindow(key);
  });
  tabsRoot.appendChild(tab);
  return tab;
}

function createWindow(key, def){
  const win = document.createElement("div");
  win.className = "window";
  win.style.left = `${120 + (openWindows.size * 40)}px`;
  win.style.top  = `${90  + (openWindows.size * 40)}px`;
  win.style.zIndex = nextZ();

  win.innerHTML = `
    <div class="chrome">
      <div class="titlebar active noselect">
        <div class="left">
          <img src="${def.icon}" type="image/x-icon" alt="">
          <p class="title">${def.title}</p>
        </div>
        <div class="winbtns">
          <button class="winbtn btn-min"><img src="public/icons/hide-window.ico" type="image/x-icon" alt=""></button>
          <button class="winbtn btn-max"><img src="public/icons/full-screen.ico" type="image/x-icon" alt=""></button>
          <button class="winbtn btn-close"><img src="public/icons/cross.ico" type="image/x-icon" alt=""></button>
        </div>
      </div>
      <div class="menubar"><span>File</span><span>Edit</span><span>View</span></div>
      <div class="window-body">
        <div class="window-inner">${def.html}</div>
      </div>
    </div>
  `;

  const titlebar = win.querySelector(".titlebar");
  let dragging = false, startX=0, startY=0, startLeft=0, startTop=0;

  const onDown = (e) => {
    dragging = true;
    focusWindow(key);
    const rect = win.getBoundingClientRect();
    startLeft = rect.left; startTop = rect.top;
    startX = e.clientX; startY = e.clientY;
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };
  const onMove = (e) => {
    if(!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    let nx = startLeft + dx;
    let ny = startTop + dy;
    const maxX = window.innerWidth - win.offsetWidth;
    const maxY = window.innerHeight - 32 - win.offsetHeight;
    nx = Math.max(0, Math.min(nx, maxX));
    ny = Math.max(0, Math.min(ny, maxY));
    win.style.left = nx + "px";
    win.style.top  = ny + "px";
  };
  const onUp = () => {
    dragging = false;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
  };

  titlebar.addEventListener("mousedown", onDown);
  win.addEventListener("mousedown", () => focusWindow(key));

  win.querySelector(".btn-min").addEventListener("click", () => minimizeWindow(key));
  win.querySelector(".btn-close").addEventListener("click", () => closeWindow(key));
  win.querySelector(".btn-max").addEventListener("click", () => {
    if(win.dataset.max === "1"){
      win.dataset.max = "0";
      win.style.left = "120px";
      win.style.top  = "90px";
      win.style.width = "700px";
      win.style.height= "500px";
    }else{
      win.dataset.max = "1";
      win.style.left = "0px";
      win.style.top  = "0px";
      win.style.width = window.innerWidth + "px";
      win.style.height= (window.innerHeight - 32) + "px";
    }
    focusWindow(key);
  });

  windowsRoot.appendChild(win);
  return win;
}

function openApp(key){
  const def = APP_DEFS[key];
  if(!def) return;

  if(openWindows.has(key)){
    const it = openWindows.get(key);
    it.el.style.display = "block";
    focusWindow(key);
    return;
  }
  const win = createWindow(key, def);
  const tab = createTab(key, def.title, def.icon);
  openWindows.set(key, { el: win, tab });
  focusWindow(key);
}

/* Desktop icon behavior */
document.querySelectorAll(".icon").forEach((el) => {
  el.addEventListener("click", (e) => {
    const href = el.dataset.href;
    const app = el.dataset.app;
    if (href) {
      window.open(href, "_blank");
      return;
    }
    openApp(app);
  });
});

/* Start Button Behavior */
document.querySelector(".start-btn").addEventListener("click", () => {
  openApp("fake-cli");
});

/* CLI Terminal Interaction */
document.addEventListener("keydown", (e) => {
  const cliInput = document.getElementById("cli-input");
  if(!cliInput) return;

  if(e.key === "Enter" && document.activeElement === cliInput) {
    const value = cliInput.value.trim();
    if(value === "") return;

    const outputDiv = document.getElementById("cli-output");
    const prompt = document.getElementById("cli-prompt").textContent;
    outputDiv.innerHTML += `<div>${prompt}${value}</div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;

    // Send to email backend
    fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: value })
    }).catch(err => console.error("Failed to send:", err));

    cliInput.value = "";
  }
});

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  setRandomWallpaper();
  nowClock();

  openApp("my-computer");
  openApp("daniel");
});

/* Attach dropdown behavior for Projects window */
document.addEventListener("click", function(e){
  if(e.target.classList.contains("toggle")){
    const body = e.target.nextElementSibling;
    const isOpen = body.style.display === "block";
    body.style.display = isOpen ? "none" : "block";

    // Preserve full title and just swap `[+]` / `[-]`
    e.target.dataset.name = e.target.dataset.name || e.target.textContent.slice(4).trim();
    e.target.textContent = (isOpen ? "[+]" : "[-]") + " " + e.target.dataset.name;
  }
});








