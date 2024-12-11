const birthdayDate = new Date("Jun 23, 2025 19:00:00");
const timeStampBirthday = birthdayDate.getTime();

const dayMli = (1000 * 60 * 60 * 24);
const hrsMli = (1000 * 60 * 60);
const minMli = (1000 * 60);

const timeCounter = setInterval(() => {
    const now = new Date();
    const timeStampNow = now.getTime();
    const timeStampLeft = timeStampBirthday - timeStampNow;

    const daysLeft = Math.floor(timeStampLeft / dayMli);
    const hrsLeft = Math.floor((timeStampLeft % dayMli) / hrsMli);
    const minLeft = Math.floor((timeStampLeft % hrsMli) / minMli);
    const secLeft = Math.floor((timeStampLeft % minMli) / 1000);

    document.getElementById("contador").innerHTML = `${daysLeft}d ${hrsLeft}h ${minLeft}m ${secLeft}s`;

    if (timeStampLeft < 0) {
        clearInterval(timeCounter);
        document.querySelector(".hero__description").innerHTML = "<h2>Já esta rolando o maior anivesário de todos os tempos!</h2>";
    }

}, 1000);