import React from "react";
import MarkdownIt from "markdown-it";

function TitleAndText( {element} ) {

    const md = new MarkdownIt();
    const htmlContent = md.render(element.description);

    return(
        /*
        <div className="title-and-text">
            <div className="layout_title">
                <h3>{element.title}</h3>
            </div>
            <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>

            </div>
        </div>
        */
        <section class="bg-gray-50 dark:bg-gray-900 dark:bg-gray-800">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{element.title}</h2>
                <p class="mb-4 font-light">{element.description}</p>
                <p class="mb-4 font-semibold">{element.bold_text}</p>
            </div>
        </div>
      </section>
    );
}

export default TitleAndText