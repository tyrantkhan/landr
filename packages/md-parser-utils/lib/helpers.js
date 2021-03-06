const _ = require('./lodash');
const md = require('./md');

exports.typeIs = (token, type) => {
  if (token) {
    return token.type === type;
  }
  return false;
};

// checks if a token object contains any of arrays checks
exports.tokenContains = (t, checks) => {
  return _.some(checks, alt => {
    return new RegExp(alt, 'i').test(t.content);
  });
};

exports.untilTag = (tokens, tag) => {
  // console.log('tag', tag)
  return _.takeWhile(tokens, t => {
    // console.log(t.tag, t.tag !== tag);
    return t.tag !== tag;
  });
};

exports.nextHeadingTagIndex = tokens => {
  return _.findIndex(tokens, t => _.includes(t.type, 'heading'));
};

exports.indexByString = (tokens, checks) => {
  return _(tokens).findIndex(
    (t, i) =>
      exports.tokenContains(t, checks) && tokens[i + 1].type === 'heading_close'
  );
};

exports.contentByTitle = (tokens, titleChecks) => {
  let index = exports.indexByString(tokens, titleChecks);
  if (index < 0) {
    return;
  }
  const token = tokens[index];
  const newTokens = tokens.slice(index);
  let tagMarkerIndex = exports.nextHeadingTagIndex(newTokens);
  let tagMarker = newTokens[tagMarkerIndex].tag;

  const content = exports.untilTag(
    newTokens.slice(tagMarkerIndex + 1),
    tagMarker
  );

  return {
    title: token.content.charAt(0) === '[' ? [token] : token.content,
    content: content
  };
};

exports.contentByDepth = (tokens, depth) => {
  return tokens.reduce((acc, token, index) => {
    const tagMarker = `h${depth}`;
    if (token.tag !== tagMarker || token.type !== 'heading_open') {
      // noop
      return acc;
    }

    const nextToken = tokens[index + 1];

    if (nextToken) {
      acc.push({
        title: nextToken.content,
        content: exports.untilTag(tokens.slice(index + 3), tagMarker)
      });
    }
    return acc;
  }, []);
};

function renderToken(v) {
  // console.log(v)
  if (_.isString(v)) {
    return md.renderInline(v);
  }

  if (_.isArray(v)) {
    return md.renderer.render(v, {});
  }

  if (_.isObject(v)) {
    return exports.renderToHtml(v);
  }
}

exports.renderToHtml = obj => {
  if (_.isArray(obj)) {
    return _.map(obj, v => {
      return renderToken(v);
    });
  }

  if (_.isObject(obj)) {
    return _.mapValues(obj, v => {
      return renderToken(v);
    });
  }

  return renderToken(obj);
};
