## Social Filter Chrome Plugin

You can [Social Filter](https://github.com/dhruvpancholi17/Social-Filter/edit/master/README.md) plugin written for chrome to filter out all the unwanted posts in your social media feed.

Currently this only works for LinkedIn, soon it will be available for other sites such as Facebook and Twitter (on popular demand).

### How to install?

Currently it is build as a minimum viable product, which helps in getting things done. You need to install [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en) plugin, post installation follow the following steps:

1. Go to linkedin.com, click on the cjs plugin button and select enable cjs for this host.
2. In "You can inject your own external scripts or predefined one:" select jquery 2.*
3. Copy paste from [script.js](https://github.com/dhruvpancholi17/Social-Filter) to the script box and save.

### Adding keywords

You will find a variable called filterKeyWords in first line, just add all the set of keywords in that variable.

```javascript
filterKeyWords = [
    ["keyword"],
    ["keyword1","keyword2"],
    ["keyword1","keyword2","keyword3"]];
```

For e.g. if you don't want to see a post which contains "justin" the variable will look like:

```javascript
filterKeyWords = [
    ["justin"]];
```

If you wan't to filter based on two or more keywords and all of them should be in the post, like "baby beiber" then:

```javascript
filterKeyWords = [
    ["justin"],
    ["baby", "beiber"]];
```

In short filterKeyWords contains all the list of keywords which are used for the purpose of filtering! And all the lists are comma separated.

