import { instructionsPage } from "./pages/instructions";
import { welcomePage } from "./pages/welcome/index";
import { play } from "./pages/play/index";
import { ganaste } from "./pages/result/ganaste";
import { perdiste } from "./pages/result/perdiste";

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
        path: /\/result\/ganaste/,
        component: ganaste,
    },
];

export function initRouter(container: Element) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route) {
        console.log("El handle route recibio una nueva ruta");

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
        goTo("/welcome");
    } else {
        handleRoute(location.pathname);
    }

    window.onpopstate = (event) => {
        handleRoute(location.pathname);
    };
}

