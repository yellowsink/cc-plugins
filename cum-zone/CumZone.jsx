import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import { ErrorBoundary } from "@cumcord/ui/components";
import { useNest } from "@cumcord/utils";
import getPlugins from "./pluginFetcher.js";
import Ticker from "./CopyPastaTicker.jsx";
import PluginCard from "./PluginCard.jsx";
import showRepoModal from "./RepoModal.jsx";
import NoReposSplash from "./NoReposSplash.jsx"
const FormTitle = findByDisplayName("FormTitle");
const FormText = findByDisplayName("FormText");
const FormSection = findByDisplayName("FormSection");
const FormDivider = findByDisplayName("FormDivider");
const Button = findByProps("Sizes", "Colors", "Looks", "DropdownSizes");

const combinePluginLists = (repos) =>
    repos.map((repo) => getPlugins(repo.url)).reduce((c, n) => c.concat(n));

export default ({ nest }) => {
    useNest(nest);
    return (
        <ErrorBoundary>
            <FormSection>
                <div className="ysink_header">
                    <FormTitle tag="h1">Welcome to the Cum Zone</FormTitle>
                    <Button
                        className="ysink_button"
                        onClick={() => showRepoModal(nest)}
                    >
                        Manage Repos
                    </Button>
                </div>
                <Ticker />

                <FormDivider className="ysink_divide" />

                {nest.ghost.repos.length == 0 ? (
                    <NoReposSplash store={nest.store} />
                ) : (
                    <div className="ysink_card_container">
                        {combinePluginLists(nest.ghost.repos).map((p) => (
                            <PluginCard plugin={p} />
                        ))}
                    </div>
                )}
            </FormSection>
        </ErrorBoundary>
    );
};