/*
 * View model for OctoPrint-Octotoot
 *
 * Author: Chris Cioffi
 * License: AGPLv3
 */
$(function () {
    function OctotootViewModel(parameters) {
        // var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
        var self = this;

        self.settings = parameters[0];

        // this will hold the URL currently displayed by the iframe
        self.currentUrl = ko.observable();

        // this will hold the URL entered in the text field
        self.newUrl = ko.observable();

        // this will be called when the user clicks the "Go" button and set the iframe's URL to
        // the entered URL
        self.goToUrl = function () {
            self.currentUrl(self.newUrl());
        };

        // This will get called before the HelloWorldViewModel gets bound to the DOM, but after its
        // dependencies have already been initialized. It is especially guaranteed that this method
        // gets called _after_ the settings have been retrieved from the OctoPrint backend and thus
        // the SettingsViewModel been properly populated.
        self.onBeforeBinding = function () {
            self.newUrl(self.settings.settings.plugins.octotoot.url());
            self.goToUrl();
        };
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: OctotootViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [
            "settingsViewModel",
            /* "loginStateViewModel", "settingsViewModel" */
        ],
        // Elements to bind to, e.g. #settings_plugin_octotoot, #tab_plugin_octotoot, ...
        elements: [
            "#tab_plugin_octotoot",
            /* ... */
        ],
    });
});
