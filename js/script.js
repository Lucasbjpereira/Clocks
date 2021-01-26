const clocks = [
    {
        region: 'pt-BR',
        timezone: 'America/Sao_Paulo',
        element: document.querySelector('.brazil .time h1')
    },
    {
        region: 'en-GB',
        timezone: 'Europe/London',
        element: document.querySelector('.london .time h1')
    }
]

window.onload = () => {
    setTime();
    setInterval(() => setTime(), 1 * 1000);
}

function setTime() {
    clocks.map(clock => {
        let time = new Date().toLocaleTimeString(clock.region, {
            timeZone: clock.timezone,
        })
        clock.element.innerHTML = time;
    });
}