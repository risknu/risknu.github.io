// <span>text ID -> repos-count; -> GET https://api.github.com/users/risknu/repos
let _url = 'https://api.github.com/users/risknu/repos';
fetch(_url)
    .then(response => response.json())
    .then(response_json => {
        let _sizeof = 0;
        for (let _ in response_json) { _sizeof++; }
        console.log(`INFO found ${_sizeof} repos in 'risknu' profile`);
        document.getElementById('repos-count').textContent = _sizeof;
        return _sizeof;
    })
    .then(out => console.log('SUCCESS processed sizeof -> ', out))
    .catch(err => console.log('ERROR err -> ', err));
