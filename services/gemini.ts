import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction for the Internal Construction Assistant
const SYSTEM_INSTRUCTION = `
당신은 '주식회사 태림지반'의 **내부 업무 지원 AI**입니다. 
사용자는 현장 소장, 공무 담당자, 안전 관리자 등의 임직원입니다.

당신의 주요 역할은 다음과 같습니다:
1. **공사 일보 작성 보조**: 사용자가 제공한 날씨, 작업 내용, 인원 투입 현황을 바탕으로 깔끔한 공사 일보 초안을 작성합니다.
2. **건설 관련 법규/규정 조회**: 산업안전보건법, 국토부 건설 표준 시방서 등에 근거하여 안전 규정이나 시공 기준을 설명합니다.
3. **자재 산출**: 평수나 체적(루베)을 입력받으면 레미콘, 철근 등의 대략적인 소요량을 산출합니다.
4. **안전 사고 예방**: 작업 공종(예: 비계 설치, 터파기)에 따른 핵심 위험 요인과 안전 대책을 제시합니다.

지침:
- 답변은 매우 구체적이고 전문적인 용어를 사용하여 실무자에게 도움이 되도록 작성하세요.
- 불필요한 인사말보다는 핵심 정보 위주로 간결하게 전달하세요.
- 표(Table)나 리스트 형식을 적극 활용하여 가독성을 높이세요.
- 금액과 관련된 견적은 "내부 단가표를 참고하십시오"라고 안내하십시오.
`;

export const createConstructionChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.4, // Lower temperature for more factual/professional responses
      topK: 40,
    },
  });
};