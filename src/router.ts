import { instructionsPage } from "./pages/instructions";
import { welcomePage } from "./pages/welcome/index";
import { play } from "./pages/play/index";
import { ganaste } from "./pages/result/ganaste";
import { perdiste } from "./pages/result/perdiste";
import { empate } from "./pages/result/empate";
import { jugada } from "./pages/jugada/index";




const routes = [
    {
        path: /\/welcome/,
        component: welcomePage,
    },
    {
        path: /\/instructions/,
        component: instructionsPage,
    },
    {
        path: /\/play/,
        component: play,
    },
    {
        path: /\/result\/perdiste/,
        component: perdiste,
    },
    {
        path: /\/result\/jugada/,
        component: jugada,
    },
    {
        path: /\/result\/ganaste/,
        component: ganaste,
    },
    {
        path: /\/result\/empate/,
        component: empate,
    },
];

const BASE_PATH = "/dwf-m5-desafio";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
    function goTo(path,data) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        
        history.pushState(data, "", completePath);
        handleRoute(path);
    }

    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }

                container.appendChild(el);
            }
        }
    }

    if (location.pathname === "/") {
        goTo("/welcome","");
    } else {
        handleRoute(location.pathname);
    }
    
    window.onpopstate = (event) => {
        handleRoute(location.pathname);
    };
}
