export const introductionNode = () => {
    let firstParagraphTag = document.createElement("p");
    let secondParagraphTag = document.createElement("p");
    let thirdParagraphTag = document.createElement("p");
    let fouthParagraphTag = document.createElement("p");
    let fifthParagraphTag = document.createElement("p");
    let sixthParagraphTag = document.createElement("p");
    let strongTag = document.createElement("strong");
    strongTag.appendChild(document.createTextNode("Hi I'm Kyunghoon Kim"));
    firstParagraphTag.appendChild(strongTag);
    firstParagraphTag.appendChild(document.createElement("br"));
    firstParagraphTag.appendChild(
        document.createTextNode(
            `I'm a web developer since March, 2018 in the field of web development (System Integration and System Maintenance). I have cooperated in several projects as a junior web developer. The Web Programming languages that I have experience working with are "JAVA", "Javascript", "JSP", framework as "Spring" and DBMS as "Oracle". I am also knowledgeable about using React.js web framework with redux-thunk middleware.`
        )
    );
    firstParagraphTag.appendChild(document.createElement("br"));
    secondParagraphTag.appendChild(
        document.createTextNode(
            `I'm currently looking for a position as a junior front-end web developer in the field of ReactJS. ReactJs is popular in the front-end library and the usage rate in the world has increased in the past years. I would like to try and take an opportunity to follow the latest technological trend.`
        )
    );
    thirdParagraphTag.appendChild(
        document.createTextNode(
            `My web portfolio is developed with a React.js base and redux-thunk middleware in ducks pattern. RESTful API is also highlighted to handle data by communicating between the client and server to implement the SPA (Single Page Application) on my web portfolio. Furthermore, as this web portfolio is designed as a responsive, the UI can be checked on either a desktop browser or through mobile.`
        )
    );
    fouthParagraphTag.appendChild(
        document.createTextNode(
            `My portfolio website and API server uses "Firebase service" to host and run. Portfolio sources of ReactJS and Node.js server have also been posted on GitHub and the URL is https://github.com/winnerkkh88`
        )
    );
    fifthParagraphTag.appendChild(
        document.createTextNode(
            `Even though I'm new to ReactJS, I strongly believe that I can provide a roll-up-my-sleeve attitude and an extraordinary approach towards the company. I'm always more than welcome to take on challenges and receive any coding feedback. Besides my development experiences, I have previously worked in the marketing field for 3 years and I was a strong team player. I am still a team player and I am willing to dedicate all of my skills and talents to produce the highest quality of work that I can do.`
        )
    );
    sixthParagraphTag.appendChild(
        document.createTextNode(`I appreciate your time and consideration.`)
    );
    return [
        firstParagraphTag,
        secondParagraphTag,
        thirdParagraphTag,
        fouthParagraphTag,
        fifthParagraphTag,
        sixthParagraphTag,
    ];
};
