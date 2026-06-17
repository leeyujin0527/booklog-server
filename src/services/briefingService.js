const client = require('../clients/anthropic');

const getBookBriefing = async (bookTitle) => {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `"${bookTitle}" 책에 대해 아래 JSON 형식으로만 응답해주세요. 백틱 없이 순수 JSON만요.
      {
        "title": "책 제목",
        "background": "책 배경 설명",
        "author_info": "작가 소개",
        "keywords": ["키워드1", "키워드2", "키워드3"]
      }`
    }]
  });

  const text = response.content[0].text;
  const match = text.match(/\{[\s\S]*\}/);
  return JSON.parse(match[0]);
};

module.exports = { getBookBriefing };