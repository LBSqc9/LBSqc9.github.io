let searchData;

function loadData(arg) {
  if (!searchData) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/content.json', true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        const response = JSON.parse(this.response || this.responseText);
        searchData = response instanceof Array ? response : response.posts;
        searchkey(arg);
      } else {
        console.error(this.statusText);
      }
    };
    xhr.onerror = function () {
      console.error(this.statusText);
    };
    xhr.send();
  } else {
    searchkey(arg);
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function searchkey(keywords) {
  keywords.forEach((word) => {
    const lowerCaseWord = word.toLowerCase();
    const reg = new RegExp(escapeRegExp(lowerCaseWord), 'gi');

    searchData.forEach((post) => {
      const result = {};
      let matched = false;

      if (post.title.toLowerCase().search(reg) !== -1) {
        result.title = post.title.replace(reg, (text) => `<span class="keyword">${text}</span>`);
        matched = true;
      }

      const textPosition = post.text.toLowerCase().search(reg);
      if (textPosition !== -1) {
        result.text = `…${post.text.substring(textPosition, textPosition + 48)}…`;
        result.text = result.text.replace(reg, (text) => `<span class="keyword">${text}</span>`);
        matched = true;
      }

      if (matched) {
        result.title = result.title || post.title;
        result.text = result.text || post.text;
        result.href = `/${post.path}`;
        render(result);
      }
    });
  });
}

function render(data) {
  const element = document.createElement('div');
  element.className = 'search-result';
  element.innerHTML = `<a href="${data.href}"><h3>${data.title}</h3>
    <span class="content">${data.text}<br>　</span></a>`;
  document.getElementsByClassName('search-body')[0].appendChild(element);
}

const key = decodeURI(location.search.split('?q=')[1]);
if (key !== undefined && key !== 'undefined') {
  document.getElementsByClassName('search-input')[0].value = key;
  loadData(format(key));
  document.getElementById('nexmoe-search-space').style.display = 'flex';
}

function sclose() {
  document.getElementById('nexmoe-search-space').style.display = 'none';
}

function sinput() {
  document.getElementsByClassName('search-body')[0].innerHTML = '';
  loadData(format(document.getElementsByClassName('search-input')[0].value));
}

function format(word) {
  return word.trim().split(/\s+/).filter(Boolean);
}
