const SITE_CONTENT = {

    en: {
        pageTitle:
            "Physxium | Han Gyeol Lee",

        metaDescription:
            "Physxium is the personal website of Han Gyeol Lee, featuring research, popular science writing, independent software projects, and digital tools.",

        siteTitle:
            "Physxium (Han Gyeol Lee)",

        subtitle:
            "Independent Developer, Creator, and Researcher",

        intro:
            "I explore science, technology, and everyday curiosity through research, writing, and independent projects. My work ranges from popular science communication to simple digital tools designed to make ideas and experiences more accessible and engaging.",

        worksTitle:
            "Works",

        contact:
            "For questions, feedback, or collaboration inquiries, please use the contact information provided through my published works or applications.",

        privacy:
            "Privacy Policy",

        languageButton:
            "한국어",

        support:
            "Buy me a ☕ coffee"
    },


    ko: {
        pageTitle:
            "Physxium | 이한결",

        metaDescription:
            "Physxium은 이한결의 개인 웹사이트로, 연구 활동, 과학 글쓰기, 독립 개발 프로젝트와 디지털 도구를 소개합니다.",

        siteTitle:
            "Physxium (이한결)",

        subtitle:
            "독립 개발자, 작가, 그리고 연구자",

        intro:
            "연구와 글쓰기, 개인 프로젝트를 통해 과학과 기술, 일상 속 호기심을 탐구합니다. 과학을 대중에게 전달하는 작업부터 아이디어와 경험을 더 쉽고 흥미롭게 접할 수 있도록 돕는 간단한 디지털 도구까지 다양한 작업을 하고 있습니다.",

        worksTitle:
            "작업물",

        contact:
            "문의, 피드백 또는 협업 제안은 출간물이나 애플리케이션에 안내된 연락처를 이용해 주세요.",

        privacy:
            "Privacy Policy",

        languageButton:
            "English",

        support:
            "유용했다면 ☕ 커피 후원"
    }
};


const PROJECTS = [

    /* --------------------------------
       Google Scholar
    -------------------------------- */

    {
        type: "link",

        title: "Google Scholar",

        url:
            "https://scholar.google.co.kr/citations?user=h7t9Xc8AAAAJ&hl=en",

        description: {
            en:
                "Academic publications and research contributions in physics.",

            ko:
                "물리학 분야의 학술 논문과 연구 이력입니다."
        }
    },


    /* --------------------------------
       Book
    -------------------------------- */

    {
        type: "book",

        title:
            "이런 과학 처음이야",

        image:
            "https://image.aladin.co.kr/product/38469/4/cover500/k622135916_1.jpg",

        imageAlt:
            "이런 과학 처음이야 book cover",

        description: {
            en:
                "A popular science book exploring the unexpected physics and scientific ideas hidden in everyday life, written for curious readers beyond the science classroom.",

            ko:
                "일상 속에 숨어 있는 엉뚱한 물리학과 과학적 아이디어를 탐구하는 과학 교양서입니다. 과학을 전공하지 않은 독자도 흥미롭게 읽을 수 있도록 썼습니다."
        },

        links: [
            {
                label: {
                    en: "Kyobo↗",
                    ko: "교보문고↗"
                },

                url:
                    "https://product.kyobobook.co.kr/detail/S000219060590"
            },

            {
                label: {
                    en: "Aladin↗",
                    ko: "알라딘↗"
                },

                url:
                    "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=384690419&srsltid=AfmBOorhx1p-tOqRFV_rU4S-XtlKCU8qaZevTqndRdQcYyNnJcnn8GWZ"
            }
        ]
    },


    /* --------------------------------
     볼만한픽 / Pick to Watch
  -------------------------------- */

    {
        type: "link",

        title:
            "볼만한픽 / Pick to Watch",

        url:
            "https://watchpick.pages.dev/",

        description: {
            en:
                "A lightweight OTT discovery tool that recommends a small set of movies and series based on streaming services, genres, production regions, and release period.",

            ko:
                "OTT, 장르, 제작 지역, 연도 조건을 선택하면 지금 볼 만한 영화와 시리즈를 간단히 추천해주는 서비스입니다. 많은 목록 대신 평가 상위작, 행운의 발견, 최신작만 추려 보여줍니다."
        }
    },
    
    /* --------------------------------
       놀만한날
    -------------------------------- */

    {
        type: "link",

        title:
            "놀만한날",

        url:
            "https://fundays.pages.dev/",

        description: {
            en:
                "A discovery service for finding festivals and cultural events across Korea by date, region, and interest.",

            ko:
                "날짜, 지역, 관심사에 맞춰 전국의 축제와 문화행사를 찾아볼 수 있는 행사 탐색 서비스입니다."
        }
    },

    /* --------------------------------
   게임 종합능력 평가 / Gaming Ability Assessment
    -------------------------------- */

        {
            type: "link",

            title:
                "게임 종합능력 평가 / Gaming Ability Assessment",

            url:
                "https://gamertest.pages.dev/",

            description: {
                en:
                    "A short browser-based gaming ability test that evaluates reaction speed, decision making, multitasking, precision, and prediction through five mini-games. Results are summarized with a radar chart, total score, and player title.",

                ko:
                    "반응속도, 판단력, 멀티태스킹, 수행정확성, 예측력을 다섯 개의 짧은 미니게임으로 평가하는 게임 능력 테스트입니다. 결과는 500점 만점의 종합 점수와 레이더맵, 플레이어 칭호로 보여줍니다."
            }
        },


    /* --------------------------------
       속보일지도
    -------------------------------- */

    {
        type: "link",

        title:
            "속보일지도",

        url:
            "https://darkmap.pages.dev/",

        description: {
            en:
                "A map-based service for exploring crime and integrity data across South Korea using publicly available government data.",

            ko:
                "공공기관이 공개한 데이터를 바탕으로 대한민국의 범죄와 자치단체 부패지표를 지도에서 살펴볼 수 있는 서비스입니다."
        }
    },

    /* --------------------------------
     Don't Spoil LCK
  -------------------------------- */

    {
        type: "link",

        title:
            "Don't Spoil LCK",

        url:
            "https://dslck.pages.dev/",

        description: {
            en:
                "A spoiler-free gateway to official LCK full VODs and match highlights, helping viewers find the game they want without seeing the result first.",

            ko:
                "경기 결과를 보지 않고 LCK 공식 영상과 하이라이트로 바로 이동할 수 있는 서비스입니다. 원하는 경기를 스포일러 없이 찾아볼 수 있도록 만들었습니다."
        }
    },

    /* --------------------------------
    다섯 번째 선
    -------------------------------- */

        {
            type: "link",

            title:
                "다섯 번째 선",

            url:
                "https://fifthline.pages.dev/",

            description: {
                en:
                    "A browser-based auto-battler roguelike where you build stats and augments to survive 20 stages of advancing enemies.",

                ko:
                    "능력치와 증강을 조합해 밀려오는 적을 막고 20개의 스테이지에 도전하는 웹 자동전투 로그라이크 게임입니다."
            }
        },


    /* --------------------------------
       GeomeTry
    -------------------------------- */

    {
        type: "link",

        title:
            "GeomeTry: Perfect Drawing",

        url:
            "https://play.google.com/store/apps/details?id=com.Physxium.GeomeTry&pcampaignid=web_share",

        description: {
            en:
                "A simple precision-drawing game that challenges you to create geometric shapes as accurately as possible.",

            ko:
                "기하학적 도형을 최대한 정확하게 그리는 간단한 모바일 드로잉 게임입니다."
        }
    }

];