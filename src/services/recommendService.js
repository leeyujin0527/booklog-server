const client = require('../clients/anthropic');

const getRecommendBooks = async (message) => {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `당신은 책 추천 전문가입니다. 아래 사용자 상황에 맞는 책 3권을 추천해주세요.
      반드시 JSON 형식으로만 응답하세요. 백틱이나 마크다운 없이 순수 JSON만 응답하세요.
      {"books": [{"title": "책 제목","author": "저자","reason": "추천 이유","url": "yes24 구매 링크"}]}
      사용자 상황: ${message}`
    }]
  });

  const text = response.content[0].text;
  console.log('Claude 응답:', text);
  const match = text.match(/\{[\s\S]*\}/);
  return JSON.parse(match[0]);
};

module.exports = { getRecommendBooks };