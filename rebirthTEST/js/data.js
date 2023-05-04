const qnaList = [
  {
    q: "1. 당신은 전생을 믿나요?",
    a: [
      {
        answer: "그런 건 믿지 않아요.",
        type: [0],
      },
      {
        answer: "네! 너무 흥미로워요.",
        type: [0],
      },
      {
        answer: "그냥 재미로 듣고 말아요.",
        type: [0],
      },
      {
        answer: "은근히 신경 쓰이긴 해요.",
        type: [0],
      },
    ],
  },
  {
    q: "2. 죽음은 어떤 느낌일까요?",
    a: [
      { answer: "아직 안 죽어봐서 모르겠어요.", type: [0] },
      { answer: "너무 슬프고 아쉬울 것 같아요.", type: [0] },
      { answer: "아무 느낌 안 들 것 같아요.", type: [0] },
      { answer: "의외로 홀가분할지도?", type: [0] },
    ],
  },
  {
    q: "3. 당신의 장례식에 얼마나 많은 사람이 올까요?",
    a: [
      { answer: "솔직히 많지는 않을 것 같아요.", type: [0] },
      { answer: "인싸라서 좀 많을 것 같아요.", type: [0] },
      { answer: "딱히 많고 적은 건 중요하지 않아요.", type: [0] },
      { answer: "최소 50명?", type: [0] },
    ],
  },
  {
    q: "4. 죽기 전 나와 사이가 나쁜 사람을 만났어요.",
    a: [
      { answer: "너 잘 만났다. 담판을 지어줘요.", type: [0] },
      { answer: "모든 걸 다 용서하고 갈래요.", type: [0] },
      { answer: "죽기 전에 뭐해요, 무시할래요.", type: [0] },
      { answer: "나중에 자책할테니 화해해요.", type: [0] },
    ],
  },
  {
    q: "5. 죽기 마지막 순간 당신의 소중한 사람들에게...",
    a: [
      { answer: "미리 적어둔 편지를 전달하거나 읽어보라고 할래요.", type: [0] },
      { answer: "손을 잡거나 마지막으로 하고 싶은 말을 할래요.", type: [0] },
    ],
  },
  {
    q: "6. 정확하게 언제 죽는지 날짜를 알게 됐어요.",
    a: [
      { answer: "d-day까지 매일매일 아모르파티 할래요.", type: [0] },
      { answer: "앞으로 어떻게 보낼지 미래를 생각해볼래요.", type: [0] },
    ],
  },
  {
    q: "7. 가족과 지인들이 내 얼굴을 보러 오기로 했어요.",
    a: [
      { answer: "너무 자주 오면 피곤해요.", type: [0] },
      { answer: "좋아요! 이참에 다들 친구가 되면 좋겠어요.", type: [0] },
    ],
  },
  {
    q: "8. 죽기 며칠 전 뭐할까요?",
    a: [
      { answer: "현실적으로 할 수 있는 걸 할래요.", type: [0] },
      { answer: "어디든 여행을 떠나거나 움직일래요.", type: [0] },
    ],
  },
  {
    q: "9. 죽기 전 당신의 눈 앞에 보이는 것은?",
    a: [
      { answer: "영적인 존재나 천국, 지옥", type: [0] },
      { answer: "...그쯤 되면 헛 것이 보이지 않을까요?", type: [0] },
      { answer: "내 임종을 봐줄 사람들.", type: [0] },
      { answer: "눈이 떠질지 모르겠네요.", type: [0] },
    ],
  },
  {
    q: "10. 이번 생에서 당신은 어떤 사람이었나요?",
    a: [
      { answer: "모자라지만 착한 친구.", type: [0] },
      { answer: "안 모자라고 착한 친구.", type: [0] },
      { answer: "모자라지만 나쁜 친구", type: [0] },
      { answer: "안 모자라고 나쁜 친구", type: [0] },
    ],
  },
  {
    q: "11. 내 죽음이 호상이라는 사람들이 있어요.",
    a: [
      { answer: "사람이 죽었는데 뭐가 호상이야? 너도 죽을래?", type: [0] },
      {
        answer: "아프거나 안 좋은 모습으로 죽진 않았으니 그럴 수도?",
        type: [0],
      },
    ],
  },
  {
    q: "12. 어떤 사람으로 기억되고 싶나요?",
    a: [
      { answer: "재미있고 유쾌한 사람", type: [0] },
      { answer: "섬세하고 따뜻한 사람", type: [0] },
      { answer: "카리스마, 아우라 있는 사람", type: [0] },
      { answer: "신비롭고 조용한 사람", type: [0] },
    ],
  },
];

const infoList = [
  {
    name: "어느 여름 공원 농구장의 농구공",
    desc: "통통 튀는 매력을 가진 당신! <br><br> 언제나 밝고 엉뚱해 사람들에게 인기 만점. 그만큼 사람들의 사랑과 인정을 독차지 하려는 욕구도 강하죠. <br> 가끔 상처 받기도 해 감정의 기복이 크지만, 회복 또한 매우 빨라요. 사람 손을 많이 타는 사람 좋아 유형!",
    like: "활동적인 것 <br> 재미있고 자극적인 것 <br> 사람! 그리고 사람!",
    hate: "틀에 박힌 것 <br> 하기 싫은 것 <br> 진지한 것",
    good: "아이폰13 <br> 선인장",
    bad: "영어 단어장 <br> 뿌리 깊은 나무",
  },
  {
    name: "중세시대 사람들의 믿음을 받는 십자가",
    desc: "사람들을 따스하게 이끄는 당신! 이타적이고 센스가 넘쳐요. 눈치가 빠르고 사람들에게 헌신적이라 당신을 따르는 사람들도 많아요. 가끔 오지랖이 넓다는 소리를 듣기도 하지만, 어쩌겠어요! 어린 양들을 잘 돌보는 게 일인걸요.",
    like: "가치 있는 것, 자기 발전, 정의로운 것",
    hate: "남을 비판하는 것, 경쟁하는 것, 분란",
    good: "",
    bad: "",
  },
  {
    name: "중세시대 전장의 선두주자였던 기사단장의 칼",
    desc: "태생이 리더인 당신! 자신감 넘치는 모습으로 사람들을 리드해요. 야망, 성공이라는 단어를 좋아하고 그만큼 도전할 줄 알아요. 가끔 결과지향적인 언행으로 상처를 입히기도 하지만, 내 편이 되면 너무나 든든한 행동파예요.",
    like: "나보다 똑똑한 것, 혁신, 효율적인 것",
    hate: "무능한 것, 시간 낭비, 고여 있는 것",
    good: "",
    bad: "",
  },
  {
    name: "옛날 옛적 위풍당당한 강강약약 왕의 왕관",
    desc: "혁명가 기질이 다분한 당신! 언변이 뛰어나고 논쟁을 좋아해요. 논리적인 비판이라면 쿨하게 수긍하는 시원한 성격. 당신이 '왜?'라고 묻는 건 정말 궁금해서인데, 비꼬는 거냐는 말을 들으면 가끔 억울해요.",
    like: "싸워 이기는 것, 나!, 토론",
    hate: "무논리, 감정에 호소하는 것, 보수적인 것",
    good: "",
    bad: "",
  },
  {
    name: "그 언젠가 아주 오래된 선인장",
    desc: "성숙하고 신비로운 당신! 누구에게나 친절하지만 선을 넘으면 얄짤없이 다쳐요. 겉과 속이 다른 경우가 많아 사람들도 스스로도 어려울 때가 있지만, 아주 오래된 만큼 사람을 보는 통찰력이 좋고 섬세한 편이죠.",
    like: "심리학, 예의 바른 것, 몽상",
    hate: "민폐 끼치는 것, 선 넘는 것",
    good: "",
    bad: "",
  },
  {
    name: "1년 전 피어난 한 철의 꽃",
    desc: "손 대면 톡 하고 터질 것만 같은 당신! 눈에 띄고 싶지 않지만 가끔은 주목 받고 싶은 꽃과 같아요. 감수성이 예민해 속앓이를 많이 하지만 그만큼 섬세하고 배려심이 강해요.",
    like: "이야기거리, 디테일한 공상, 낭만적인 것",
    hate: "까칠하고 냉정한 것, 주목 받는 것, ",
    good: "",
    bad: "",
  },
  {
    name: "2021년 출시된 아이폰13",
    desc: "모든 건 제시간에, 합리적인 삶을 추구하는 당신 -intj",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "1905년 천재 과학자 방의 전구",
    desc: "조용하고 개인주의적인 성향이 강한 당신. 사색을 즐기고 지적호기심이 많아 당신의 불이 켜지는 순간 당신의 매력이 돋보여요 -intp",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "전기가 없던 시절의 불빛",
    desc: "어둠 속의 한 줄기 빛과 같은 당신. 따뜻하고 친근하지만 한 번 불이 꺼지면 단호하고 차가워져요. -isfj",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "한적한 곳에 언제 지어졌는지 모를 단단한 집",
    desc: "혼자만의 시간과 공간이 특히 중요한 당신. 사람들을 초대해 북적거릴 때도 있지만 꼭 조용한 시간도 필요해요.-isfp",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "학창시절 반장이 달고 살았던 영어 단어장",
    desc: "집중력이 강하고 반복되는 일에 인내심이 강한 당신. 겉으로 튀는 것보단 무난하고 용의단정한 스타일이 더 편해요. -istj",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "2000년대 유명한 디자이너의 가위",
    desc: "틀에 박히고 통념적인 생활을 싫어하는 당신. 자신의 관심 분야가 아니면 쳐다보지도 않지만, 자신이 좋아하는 일은 능룔적으로 하는 재주꾼이에요. -istp",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "몇 년 전 하이틴 주인공이 돌린 초대장",
    desc: "누구보다 사교적이고 협력을 잘 하는 당신. 붙임성이 좋아 사람들을 끌어모아요. -esfj",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "2000년대 국민 가수의 선글라스",
    desc: "자유로운 영혼을 가진 당신. 어떤 상황에도 잘 적응하는 분위기 메이커이자 하루하루 즐겁게 사는 게 가장 중요해요. -esfp",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "1900년대부터 있었던 뿌리 깊은 나무",
    desc: "뿌리가 깊은 만큼 변화와 새로운 것보단 보수적인 성향을 가진 당신. 오래된 나무처럼 무게감 있고 자기 주장이 뚜렷한 편이에요. -estj",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
  {
    name: "처음 발매된 무알콜 맥주",
    desc: "현실적이기에 한없이 쾌락을 추구하는 당신. 오감이 특히 발달해 있어 미래지향적인 생각보다는 현재지향적인 생각을 하며 사는 편이에요.-estp",
    like: "누구누구 좋아해요",
    hate: "누구누구 싫어해요",
    good: "",
    bad: "",
  },
];