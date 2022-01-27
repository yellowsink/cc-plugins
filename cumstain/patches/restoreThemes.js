import { persist } from "@cumcord/pluginData";
import fetchTheme from "../fetchTheme";
import { loadTheme, unloadAll } from "../themeLoadUtil";

export default () => {
    if (persist.ghost.themes)
        // there are a lot of promises happening here, but no real need to await them
        persist.ghost.themes
            .filter((t) => t.enabled)
            .forEach(async (t) =>
                loadTheme(await fetchTheme(t.url, t.repoUrl))
            );

    return unloadAll;
};