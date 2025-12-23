const cities = {
    adana: { plaka: "01", nufus: "2.270.298" },
    adiyaman: { plaka: "02", nufus: "632.148" },
    afyonkarahisar: { plaka: "03", nufus: "747.555" },
    agri: { plaka: "04", nufus: "510.626" },
    amasya: { plaka: "05", nufus: "335.331" },
    ankara: { plaka: "06", nufus: "5.803.000" },
    antalya: { plaka: "07", nufus: "2.688.000" },
    artvin: { plaka: "08", nufus: "169.403" },
    aydin: { plaka: "09", nufus: "1.134.031" },
    balikesir: { plaka: "10", nufus: "1.276.096" },
    bilecik: { plaka: "11", nufus: "228.334" },
    bingol: { plaka: "12", nufus: "283.112" },
    bitlis: { plaka: "13", nufus: "353.988" },
    bolu: { plaka: "14", nufus: "324.789" },
    burdur: { plaka: "15", nufus: "275.826" },
    bursa: { plaka: "16", nufus: "3.214.571" },
    canakkale: { plaka: "17", nufus: "557.605" },
    cankiri: { plaka: "18", nufus: "195.766" },
    corum: { plaka: "19", nufus: "521.335" },
    denizli: { plaka: "20", nufus: "1.059.082" },
    diyarbakir: { plaka: "21", nufus: "1.804.880" },
    edirne: { plaka: "22", nufus: "414.714" },
    elazig: { plaka: "23", nufus: "591.497" },
    erzincan: { plaka: "24", nufus: "239.223" },
    erzurum: { plaka: "25", nufus: "749.993" },
    eskisehir: { plaka: "26", nufus: "915.418" },
    gaziantep: { plaka: "27", nufus: "2.164.134" },
    giresun: { plaka: "28", nufus: "450.862" },
    gumushane: { plaka: "29", nufus: "141.702" },
    hakkari: { plaka: "30", nufus: "287.625" },
    hatay: { plaka: "31", nufus: "1.562.185" },
    isparta: { plaka: "32", nufus: "445.325" },
    mersin: { plaka: "33", nufus: "1.938.389" },
    istanbul: { plaka: "34", nufus: "15.655.000" },
    izmir: { plaka: "35", nufus: "4.479.525" },
    kars: { plaka: "36", nufus: "281.077" },
    kastamonu: { plaka: "37", nufus: "375.592" },
    kayseri: { plaka: "38", nufus: "1.445.683" },
    kirklareli: { plaka: "39", nufus: "377.156" },
    kirsehir: { plaka: "40", nufus: "244.546" },
    kocaeli: { plaka: "41", nufus: "2.102.907" },
    konya: { plaka: "42", nufus: "2.320.241" },
    kutahya: { plaka: "43", nufus: "575.674" },
    malatya: { plaka: "44", nufus: "742.725" },
    manisa: { plaka: "45", nufus: "1.475.716" },
    kahramanmaras: { plaka: "46", nufus: "1.177.436" },
    mardin: { plaka: "47", nufus: "888.874" },
    mugla: { plaka: "48", nufus: "1.048.185" },
    mus: { plaka: "49", nufus: "399.202" },
    nevsehir: { plaka: "50", nufus: "309.914" },
    nigde: { plaka: "51", nufus: "365.419" },
    ordu: { plaka: "52", nufus: "763.190" },
    rize: { plaka: "53", nufus: "350.506" },
    sakarya: { plaka: "54", nufus: "1.098.115" },
    samsun: { plaka: "55", nufus: "1.377.546" },
    siirt: { plaka: "56", nufus: "331.670" },
    sinop: { plaka: "57", nufus: "219.733" },
    sivas: { plaka: "58", nufus: "650.401" },
    tekirdag: { plaka: "59", nufus: "1.167.059" },
    tokat: { plaka: "60", nufus: "606.934" },
    trabzon: { plaka: "61", nufus: "824.352" },
    tunceli: { plaka: "62", nufus: "84.366" },
    sanliurfa: { plaka: "63", nufus: "2.170.110" },
    usak: { plaka: "64", nufus: "375.454" },
    van: { plaka: "65", nufus: "1.127.612" },
    yozgat: { plaka: "66", nufus: "418.500" },
    zonguldak: { plaka: "67", nufus: "588.510" },
    aksaray: { plaka: "68", nufus: "423.011" },
    bayburt: { plaka: "69", nufus: "84.241" },
    karaman: { plaka: "70", nufus: "262.791" },
    kirikkale: { plaka: "71", nufus: "275.968" },
    batman: { plaka: "72", nufus: "647.205" },
    sirnak: { plaka: "73", nufus: "557.762" },
    bartin: { plaka: "74", nufus: "206.715" },
    ardahan: { plaka: "75", nufus: "92.819" },
    igdir: { plaka: "76", nufus: "203.159" },
    yalova: { plaka: "77", nufus: "304.780" },
    karabuk: { plaka: "78", nufus: "252.058" },
    kilis: { plaka: "79", nufus: "155.179" },
    osmaniye: { plaka: "80", nufus: "561.061" },
    duzce: { plaka: "81", nufus: "409.865" }
};

function showCity() {
    const input = document.getElementById("cityInput").value
        .toLowerCase()
        .replace("ı", "i")
        .replace("ğ", "g")
        .replace("ü", "u")
        .replace("ş", "s")
        .replace("ö", "o")
        .replace("ç", "c");

    const result = document.getElementById("result");

    if (cities[input]) {
        result.innerHTML = `
            <div class="city-title">${input.toUpperCase()}</div>
            <div>Plaka Kodu: <b>${cities[input].plaka}</b></div>
            <div>Nüfus: <b>${cities[input].nufus}</b></div>
        `;
    } else {
        result.innerHTML = "❌ Şehir bulunamadı";
    }
}
