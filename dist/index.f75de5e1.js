const birthdayDate = new Date("Jun 23, 2025 19:00:00");
const timeStampBirthday = birthdayDate.getTime();
const dayMli = 86400000;
const hrsMli = 3600000;
const minMli = 60000;
const timeCounter = setInterval(()=>{
    const now = new Date();
    const timeStampNow = now.getTime();
    const timeStampLeft = timeStampBirthday - timeStampNow;
    const daysLeft = Math.floor(timeStampLeft / dayMli);
    const hrsLeft = Math.floor(timeStampLeft % dayMli / hrsMli);
    const minLeft = Math.floor(timeStampLeft % hrsMli / minMli);
    const secLeft = Math.floor(timeStampLeft % minMli / 1000);
    document.getElementById("contador").innerHTML = `${daysLeft}d ${hrsLeft}h ${minLeft}m ${secLeft}s`;
    if (timeStampLeft < 0) {
        clearInterval(timeCounter);
        document.querySelector(".hero__description").innerHTML = "<h2>J\xe1 esta rolando o maior anives\xe1rio de todos os tempos!</h2>";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
