/* Bad */
import { get } from 'request-promise';
async function get_article() {
    try {
        const articleBody = await get(`https://en.wikipedia.org/wiki/Main_Page`);
        return JSON.parse(articleBody);
    } catch (err) {
        console.error(err);
    }
}

/* Good */
import { p } from '@theholocron/beebee';
import { get } from 'request-promise';
async function getArticle() {
    const [ error, body ] = await p.call(get(`https://en.wikipedia.org/wiki/Main_Page`));
    if (error) {
      console.error(error);
      return;
    }
    return JSON.parse(body);
}
