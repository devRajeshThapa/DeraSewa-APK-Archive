let table = document.getElementById("table");

fetch("https://devrajeshthapa.github.io/DeraSewa-APK-Archive/js/json/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.map((item) => {
            let paragraphs = "";
            item.link.changelogs.map((log)=>{
                let p = `<p>•${log}</p></br>`;
                paragraphs +=p
            });
            let html = `
                <tr>
                    <td>
                        <a href="${item.link.downloadAPK}"
                            download="DeraSewa">Download APK</a>
                        <br>
                        <br>
                        <a href="${item.link.sourceCode}" target="_blank">Source
                            Code</a>
                        <br />
                        <br>
                        <details>
                            <summary>Changelogs</summary>
                            ${paragraphs} 
                        </details>
                    </td>
                    <td>${item.version}</td>
                    <td>${item.status}</td>
                </tr>
`
            table.innerHTML += html;
        })
    })