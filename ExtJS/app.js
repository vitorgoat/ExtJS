/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtJS.Application',

    name: 'ExtJS',

    requires: [
        // This will automatically load all classes in the ExtJS namespace
        // so that application classes do not need to require each other.
        'ExtJS.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtJS.view.main.Main'
});
