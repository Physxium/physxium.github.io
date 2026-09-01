let currentLanguage =
    (
        navigator.language ||
        navigator.userLanguage ||
        ""
    )
        .toLowerCase()
        .startsWith("ko")
        ? "ko"
        : "en";


const projectList =
    document.getElementById("project-list");


/* --------------------------------
   Helpers
-------------------------------- */

function escapeHtml(value) {

    return String(value)

        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* --------------------------------
   Standard Link Card
-------------------------------- */

function renderLinkCard(project, language) {

    return `
        <a
            class="app-card app-card-link"
            href="${escapeHtml(project.url)}"
            target="_blank"
            rel="noopener noreferrer"
        >

            <div class="app-card-header">

                <span class="app-title">
                    ${escapeHtml(project.title)}
                </span>

                <span
                    class="external-icon"
                    aria-hidden="true"
                >
                    ↗
                </span>

            </div>

            <p>
                ${escapeHtml(
        project.description[language]
    )}
            </p>

        </a>
    `;
}


/* --------------------------------
   Book Card
-------------------------------- */

function renderBookCard(project, language) {

    const links =
        project.links

            .map(link => `
                <a
                    class="store-link"
                    href="${escapeHtml(link.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${escapeHtml(
                link.label[language]
            )}
                </a>
            `)

            .join("");


    return `
        <div class="app-card book-card">

            <img
                class="book-cover"
                src="${escapeHtml(project.image)}"
                alt="${escapeHtml(project.imageAlt)}"
            >

            <div class="book-info">

                <div class="app-title">
                    ${escapeHtml(project.title)}
                </div>

                <p>
                    ${escapeHtml(
        project.description[language]
    )}
                </p>

                <div class="book-links">
                    ${links}
                </div>

            </div>

        </div>
    `;
}


/* --------------------------------
   Projects
-------------------------------- */

function renderProjects(language) {

    projectList.innerHTML =
        PROJECTS

            .map(project => {

                if (project.type === "book") {
                    return renderBookCard(
                        project,
                        language
                    );
                }

                return renderLinkCard(
                    project,
                    language
                );

            })

            .join("");
}


/* --------------------------------
   Site Content
-------------------------------- */

function renderLanguage(language) {

    const text =
        SITE_CONTENT[language];


    document.documentElement.lang =
        language;


    document.title =
        text.pageTitle;


    document
        .getElementById("meta-description")
        .setAttribute(
            "content",
            text.metaDescription
        );


    document
        .getElementById("og-title")
        .setAttribute(
            "content",
            text.pageTitle
        );


    document
        .getElementById("og-description")
        .setAttribute(
            "content",
            text.metaDescription
        );


    document
        .getElementById("site-title")
        .textContent =
        text.siteTitle;


    document
        .getElementById("subtitle")
        .textContent =
        text.subtitle;


    document
        .getElementById("intro")
        .textContent =
        text.intro;


    document
        .getElementById("works-title")
        .textContent =
        text.worksTitle;


    document
        .getElementById("contact")
        .textContent =
        text.contact;


    document
        .getElementById("privacy-link")
        .textContent =
        text.privacy;


    document
        .getElementById("language-button")
        .textContent =
        text.languageButton;


    const supportLink =
        document.getElementById("support-link");

    if (supportLink) {
        supportLink.textContent =
            text.support;
    }


    renderProjects(language);
}


/* --------------------------------
   Language Button
-------------------------------- */

document
    .getElementById("language-button")
    .addEventListener(
        "click",
        () => {

            currentLanguage =
                currentLanguage === "ko"
                    ? "en"
                    : "ko";


            renderLanguage(
                currentLanguage
            );
        }
    );


/* --------------------------------
   Initial Render
-------------------------------- */

renderLanguage(
    currentLanguage
);

const supportLink = document.getElementById("supportLink");
const cteeSupport = document.getElementById("cteeSupport");

supportLink?.addEventListener("click", () => {
    const bmcButton = document.getElementById("bmc-wbtn");

    if (bmcButton) {
        bmcButton.click();
        cteeSupport.hidden = false;
    }
});