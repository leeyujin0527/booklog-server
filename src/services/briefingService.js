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
        "summary": "책의 전체적인 내용 요약 (2~3문장)",
        "background": "이 책을 읽기 전에 알아두면 좋은 시대적/역사적/사회적 배경 지식. 예를 들어 역사책이면 그 시대 상황, 경제책이면 당시 경제 흐름 등 독자가 미리 알면 책 이해에 도움이 되는 맥락 설명 (2~3문장)",
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